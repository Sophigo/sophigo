#!/usr/bin/env python3
"""
cross_link_indexer.py — 跨项目双向链接索引引擎
================================================
扫描 ProFabX / SophiCar / SophiGo 三个 Obsidian Vault 中的 Markdown 文件，
提取 [[wikilink]] 双向链接，构建跨项目关联图谱，驱动自动同步动作。

触发条件：定时 cron 或 Obsidian 文件变更 hook。
运行路径：/Users/wubo/Documents/2026/SophiCar/techanalysis/shared/

架构：
  1. 扫描三个 vault 的 .md 文件
  2. 正则提取 [[...]] wikilinks
  3. 匹配预定义的 CROSS_LINKS 映射表
  4. 发现跨项目关联时触发对应 action（飞书通知 / 写入目标 vault / 终端告警）

用法：
  python cross_link_indexer.py              # 全量扫描
  python cross_link_indexer.py --watch       # 文件变更监听模式
  python cross_link_indexer.py --dry-run     # 仅打印发现，不执行动作
  python cross_link_indexer.py --project sophicar  # 仅扫描单个项目
"""

import os
import re
import json
import argparse
import time
from pathlib import Path
from datetime import datetime
from dataclasses import dataclass, field
from typing import Dict, List, Optional, Set, Tuple

# ════════════════════════════════════════════════════════
# 工作区硬边界
# ════════════════════════════════════════════════════════
WORKSPACE_ROOT = Path("/Users/wubo/Documents/2026")

PROJECTS: Dict[str, dict] = {
    "profabx": {
        "name": "ProFabX",
        "vault": WORKSPACE_ROOT / "ProFabX" / "Obsidian_Vault",
        "inbox": WORKSPACE_ROOT / "ProFabX" / "Obsidian_Vault" / "Daily_Inbox",
        "color": "#FBBC04",
        "icon": "⚙️",
        "domain": "制造工艺 · 供应链 · BOM · CAE",
    },
    "sophicar": {
        "name": "SophiCar",
        "vault": WORKSPACE_ROOT / "SophiCar" / "Obsidian_Vault",
        "inbox": WORKSPACE_ROOT / "SophiCar" / "Obsidian_Vault" / "Daily_Inbox",
        "color": "#002FA7",
        "icon": "🚗",
        "domain": "智能车载 · Sim-to-Real · 底盘控制",
    },
    "sophigo": {
        "name": "SophiGo",
        "vault": WORKSPACE_ROOT / "SophiGo" / "Obsidian_Vault",
        "inbox": WORKSPACE_ROOT / "SophiGo" / "Obsidian_Vault" / "Daily_Inbox",
        "color": "#34A853",
        "icon": "🚀",
        "domain": "部署交付 · 具身智能 · 生态扩展",
    },
}


# ════════════════════════════════════════════════════════
# 跨项目关联映射表
# ════════════════════════════════════════════════════════
# key: wikilink 标签名
# producers: 产生此标签的项目（源端）
# consumers: 消费此标签的项目（目标端，需要被通知/同步）
# action: 关联触发时执行的动作标识
# severity: info | warn | critical
CROSS_LINKS: Dict[str, dict] = {
    "BOM变更": {
        "producers": ["profabx"],
        "consumers": ["sophicar"],
        "action": "bom_to_cad_sync",
        "severity": "critical",
        "desc": "BOM 物料版本变更 → 同步通知 SophiCar CAD/CAE 团队",
    },
    "CAE分析": {
        "producers": ["sophicar"],
        "consumers": ["profabx"],
        "action": "cae_result_feedback",
        "severity": "warn",
        "desc": "CAE 仿真结果 → 回灌 ProFabX 工艺冻结流程",
    },
    "供应链风险": {
        "producers": ["profabx"],
        "consumers": ["sophigo"],
        "action": "supply_risk_alert",
        "severity": "critical",
        "desc": "供应链交期/价格异常 → 推 SophiGo 交付看板告警",
    },
    "Sim-to-Real验证": {
        "producers": ["sophicar"],
        "consumers": ["profabx", "sophigo"],
        "action": "sim_result_broadcast",
        "severity": "info",
        "desc": "Sim-to-Real 结果 → 通知 ProFabX 工艺 + SophiGo 部署",
    },
    "工艺冻结": {
        "producers": ["profabx"],
        "consumers": ["sophicar", "sophigo"],
        "action": "process_freeze_notify",
        "severity": "critical",
        "desc": "制造工艺锁定 → SophiCar 设计定版 + SophiGo 交付基线",
    },
    "底盘标定": {
        "producers": ["sophicar"],
        "consumers": ["sophigo"],
        "action": "chassis_calib_to_deploy",
        "severity": "warn",
        "desc": "底盘标定参数冻结 → SophiGo 具身智能抓取最新参数",
    },
    "具身部署": {
        "producers": ["sophigo"],
        "consumers": ["sophicar"],
        "action": "embodied_deploy_feedback",
        "severity": "info",
        "desc": "具身智能部署结果 → 回灌 SophiCar 仿真闭环",
    },
    "交付延期": {
        "producers": ["sophigo"],
        "consumers": ["profabx", "sophicar"],
        "action": "delay_alert_all",
        "severity": "critical",
        "desc": "交付节点延期 → 全项目广播",
    },
}


@dataclass
class LinkHit:
    """一次 wikilink 命中"""
    source_project: str
    source_file: str
    wikilink: str
    line_number: int
    timestamp: str


@dataclass
class CrossHit:
    """一次跨项目关联命中"""
    link: LinkHit
    config: dict
    targets: List[str]  # consumer project keys
    triggered: bool = False


# ════════════════════════════════════════════════════════


def scan_vault(project_key: str) -> List[dict]:
    """
    扫描单个项目的 Obsidian Vault，提取所有 .md 文件中的 [[wikilinks]]。
    返回: List[{file, wikilinks[], timestamp}]
    """
    project = PROJECTS[project_key]
    vault_path = project["vault"]
    results = []

    if not vault_path.exists():
        print(f"[WARN] Vault 不存在: {vault_path}")
        return results

    md_files = list(vault_path.rglob("*.md"))
    wikilink_pattern = re.compile(r"\[\[([^\]]+)\]\]")

    for md_file in md_files:
        try:
            content = md_file.read_text(encoding="utf-8")
            links = wikilink_pattern.findall(content)

            if links:
                # 获取每个 link 所在行号
                lines = content.split("\n")
                link_lines = {}
                for i, line in enumerate(lines, 1):
                    found = wikilink_pattern.findall(line)
                    for f in found:
                        if f not in link_lines:
                            link_lines[f] = i

                results.append({
                    "file": str(md_file.relative_to(vault_path)),
                    "abs_path": str(md_file),
                    "wikilinks": list(set(links)),  # 去重
                    "link_lines": link_lines,
                    "timestamp": datetime.now().isoformat(),
                    "project": project_key,
                })

        except Exception as e:
            print(f"[ERR] 读取失败 {md_file}: {e}")

    return results


def match_cross_links(scan_results: List[dict]) -> List[CrossHit]:
    """
    将扫描结果与 CROSS_LINKS 映射表匹配，找出跨项目关联。
    """
    cross_hits: List[CrossHit] = []

    for result in scan_results:
        source_project = result["project"]
        for wikilink in result["wikilinks"]:
            # 检查是否在 CROSS_LINKS 中
            if wikilink not in CROSS_LINKS:
                continue

            config = CROSS_LINKS[wikilink]

            # 源端必须在 producers 中
            if source_project not in config["producers"]:
                continue

            # 找出需要通知的 consumer 项目
            targets = [c for c in config["consumers"] if c != source_project]

            if not targets:
                continue

            hit = LinkHit(
                source_project=source_project,
                source_file=result["file"],
                wikilink=wikilink,
                line_number=result["link_lines"].get(wikilink, 0),
                timestamp=result["timestamp"],
            )

            cross_hits.append(CrossHit(
                link=hit,
                config=config,
                targets=targets,
            ))

    return cross_hits


def execute_actions(cross_hits: List[CrossHit], dry_run: bool = False) -> List[str]:
    """
    执行跨项目关联触发时的动作。
    动作类型：
    - 写通知到目标项目 inbox
    - 飞书 API 推送
    - 终端 CLI 输出
    """
    logs: List[str] = []

    for hit in cross_hits:
        source_name = PROJECTS[hit.link.source_project]["name"]
        severity_icon = {"info": "ℹ️", "warn": "⚠️", "critical": "🔴"}.get(
            hit.config["severity"], "→"
        )

        log_line = (
            f"{severity_icon} [{hit.config['severity'].upper()}] "
            f"{source_name}::{hit.link.source_file} → "
            f"[[{hit.link.wikilink}]] → "
            f"targets: {', '.join(hit.targets)} "
            f"({hit.config['desc']})"
        )
        logs.append(log_line)

        if dry_run:
            continue

        # ── Action: 写入通知到目标项目 inbox ──
        for target_key in hit.targets:
            target = PROJECTS[target_key]
            inbox = target["inbox"]

            if not inbox.exists():
                inbox.mkdir(parents=True, exist_ok=True)

            notice_file = inbox / f"_crosslink_{hit.link.wikilink}.md"
            notice_content = f"""---
source: {hit.link.source_project}
target: {target_key}
wikilink: "{hit.link.wikilink}"
action: {hit.config['action']}
severity: {hit.config['severity']}
timestamp: {hit.link.timestamp}
---

# 🔗 跨项目关联通知: [[{hit.link.wikilink}]]

**源端**: {PROJECTS[hit.link.source_project]['name']}  
**触发文件**: `{hit.link.source_file}`  
**关联描述**: {hit.config['desc']}  
**建议动作**: 请检查相关资产并确认是否需要同步。

> 此通知由 `cross_link_indexer.py` 自动生成。
"""
            try:
                notice_file.write_text(notice_content, encoding="utf-8")
                logs.append(f"  → 已写入通知: {notice_file}")
            except Exception as e:
                logs.append(f"  → 写入失败: {e}")

        # ── Action: 飞书 API 推送 (stub) ──
        # 实际飞书 API 调用在此处集成
        # from feishu_writer import push_crosslink_alert
        # push_crosslink_alert(hit)

        hit.triggered = True

    return logs


def print_report(scan_results: List[dict], cross_hits: List[CrossHit], logs: List[str]):
    """打印扫描报告"""
    print("\n" + "=" * 60)
    print("  cross_link_indexer.py  —  跨项目关联扫描报告")
    print("  " + datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    print("=" * 60)

    total_files = sum(len(r) for r in scan_results) if isinstance(scan_results, list) else 0
    total_links = sum(len(r["wikilinks"]) for r in scan_results)
    print(f"\n📊 扫描统计: {len(scan_results)} 项目, {total_links} 个 [[wikilinks]]")

    # 按项目分组
    for project_key, project_results in _group_by_project(scan_results).items():
        name = PROJECTS[project_key]["name"]
        file_count = len(project_results)
        link_count = sum(len(r["wikilinks"]) for r in project_results)
        print(f"  {PROJECTS[project_key]['icon']} {name}: {file_count} 文件, {link_count} 链接")

    print(f"\n🔗 跨项目关联: {len(cross_hits)} 条")

    for log in logs:
        print(f"  {log}")

    print("\n" + "=" * 60)


def _group_by_project(scan_results: List[dict]) -> Dict[str, List[dict]]:
    grouped: Dict[str, List[dict]] = {}
    for r in scan_results:
        proj = r.get("project", "unknown")
        if proj not in grouped:
            grouped[proj] = []
        grouped[proj].append(r)
    return grouped


def full_scan(dry_run: bool = False):
    """全量扫描三个项目 vault"""
    all_results = []
    for key in PROJECTS:
        results = scan_vault(key)
        all_results.extend(results)

    cross_hits = match_cross_links(all_results)
    logs = execute_actions(cross_hits, dry_run=dry_run)
    print_report(all_results, cross_hits, logs)

    return all_results, cross_hits, logs


# ════════════════════════════════════════════════════════
# CLI
# ════════════════════════════════════════════════════════

def main():
    parser = argparse.ArgumentParser(
        description="跨项目双向链接索引引擎 · Multi-Project Cross-Link Indexer"
    )
    parser.add_argument(
        "--dry-run", action="store_true",
        help="仅扫描发现，不执行任何动作"
    )
    parser.add_argument(
        "--project", "-p", choices=list(PROJECTS.keys()),
        help="仅扫描单个项目"
    )
    parser.add_argument(
        "--watch", action="store_true",
        help="文件变更监听模式（polling，间隔 5s）"
    )
    parser.add_argument(
        "--json", action="store_true",
        help="以 JSON 格式输出结果"
    )
    parser.add_argument(
        "--list-links", action="store_true",
        help="列出所有已定义的跨项目关联规则"
    )

    args = parser.parse_args()

    if args.list_links:
        print("\n已注册的跨项目关联规则:\n")
        for key, cfg in CROSS_LINKS.items():
            producers = ", ".join(PROJECTS[p]["name"] for p in cfg["producers"])
            consumers = ", ".join(PROJECTS[c]["name"] for c in cfg["consumers"])
            print(f"  [[{key}]]")
            print(f"    源: {producers}  →  目标: {consumers}")
            print(f"    动作: {cfg['action']}  [{cfg['severity']}]")
            print(f"    描述: {cfg['desc']}")
            print()
        return

    if args.watch:
        print("🔍 Watch 模式启动 (polling 5s)... Ctrl+C 退出")
        try:
            while True:
                seen = set()
                for key in PROJECTS:
                    for f in PROJECTS[key]["vault"].rglob("*.md"):
                        mtime = f.stat().st_mtime
                        file_id = f"{key}:{f.name}:{mtime}"
                        if file_id not in seen:
                            seen.add(file_id)
                time.sleep(5)
                full_scan(dry_run=args.dry_run)
        except KeyboardInterrupt:
            print("\n👋 Watch 模式已退出")
        return

    if args.project:
        results = scan_vault(args.project)
        cross_hits = match_cross_links(results)
        logs = execute_actions(cross_hits, dry_run=args.dry_run)

        if args.json:
            print(json.dumps({
                "scan_results": results,
                "cross_hits": [
                    {
                        "source": h.link.source_project,
                        "file": h.link.source_file,
                        "wikilink": h.link.wikilink,
                        "targets": h.targets,
                        "action": h.config["action"],
                        "severity": h.config["severity"],
                    }
                    for h in cross_hits
                ],
                "logs": logs,
            }, ensure_ascii=False, indent=2))
        else:
            print_report(results, cross_hits, logs)
        return

    # 全量扫描
    all_results, cross_hits, logs = full_scan(dry_run=args.dry_run)

    if args.json:
        print(json.dumps({
            "scan_results": all_results,
            "cross_hits": [
                {
                    "source": h.link.source_project,
                    "file": h.link.source_file,
                    "wikilink": h.link.wikilink,
                    "targets": h.targets,
                    "action": h.config["action"],
                    "severity": h.config["severity"],
                }
                for h in cross_hits
            ],
            "logs": logs,
        }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
