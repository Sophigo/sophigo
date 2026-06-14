# SophiGo 初中组 Day 01「问题挖掘」技术白盒实现方案

> 文档性质：纯技术交付物 · 不含教学法/产品包装/PM 指标
> 适用对象：SophiGo 技术实施团队、营地 IT 运维
> 对齐课表：09:00-17:00 · 上午问题发散+投票 · 下午砍问题+PRD 草稿

---

## 1. Day 01 软硬件环境部署清单

### 1.1 学生端（每人一台笔记本，最低配置）

| 软件 | 版本要求 | 必装插件/扩展 | 安装方式 |
|---|---|---|---|
| **Visual Studio Code** | ≥ 1.90 | GitLens / Live Share / Chinese Language Pack / Markdown Preview Enhanced / Thunder Client | `brew install --cask visual-studio-code` 或官网 pkg |
| **Git** | ≥ 2.40 | — | `brew install git` 或 `git-scm.com` |
| **Chrome / Edge** | 最新稳定版 | — | 默认浏览器即可 |
| **Terminal** | 系统自带 | — | macOS 用 Terminal.app / Windows 用 PowerShell 7+ |
| **Node.js**（可选备用） | ≥ 18 LTS | — | 仅 Embedding Demo 本地运行时需要；教师也可托管到 Vercel 免装 |

**预装验证命令**（开营前逐台执行）：
```bash
code --version          # VSCode 可用
git --version           # Git 可用
node --version          # Node 可选
```

### 1.2 教师端（一台演示机）

| 项目 | 方案 | 说明 |
|---|---|---|
| **投影/屏幕广播** | HDMI 直连或 AirPlay/Chromecast | 教师机需同网段 |
| **Embedding 可视化 Demo** | 托管到 Vercel / GitHub Pages（推荐 Vercel，支持 serverless 函数跑 embedding 推理） | 推荐静态 HTML 降级方案（见第 4 节），做到任意浏览器打开即用 |
| **飞书管理后台** | 教师机已登录飞书管理员账号，提前建好项目看板模板 | 第 3 节详述 |
| **GitHub Classroom**（可选） | 教师提前建好 organization + assignment，学生通过邀请链接加入 | 降低 Day 01 Git 配置复杂度 |

### 1.3 ESP32-CAM 是否 Day 01 开箱？

**结论：是，但仅做“硬件感知”开箱，不要求完整联调。**

Day 01 下午后半段（PRD 草稿前后）安排 20 分钟开箱体验，目的不是跑通完整 demo，而是让学生在“做产品”之前亲手摸到硬件，建立“问题→实物”的锚点。

**最小开箱步骤（固件烧录 + Wi-Fi 配网）**：

```
1. 安装 CH340/CP2102 驱动（macOS 免驱，Windows 需下载）
2. 安装 esptool：pip install esptool
3. 烧录固件（教师提前编译好一个 CameraWebServer 固件）：
   esptool.py --port /dev/cu.usbserial-* --baud 460800 write_flash 0x0 camera.bin
4. 上电 → 手机搜 "ESP32-CAM-XXXX" 热点 → 连接 → 浏览器访问 192.168.4.1
5. 配置教室 Wi-Fi SSID + 密码 → 重启 → 获得 DHCP IP
6. 浏览器访问该 IP → 看到实时视频流即成功
```

> ⚠️ 教师需提前烧录好 2-3 块备用板子，现场只演示“上电→看到画面”这一条路径。固件统一采用 ESP32-CAM-MB 烧录座方案，避免学生飞线操作。

### 1.4 教室网络要求

| 要求项 | 最低标准 | 推荐标准 |
|---|---|---|
| **频段** | 2.4 GHz（ESP32-CAM 不支持 5 GHz） | 双频 AP，2.4G + 5G 同时广播 |
| **并发设备数** | 30 台笔记本 + 10 台手机 + N 块 ESP32-CAM | 50+ 设备并发 |
| **公网出口带宽** | ≥ 50 Mbps | ≥ 100 Mbps |
| **防火墙白名单** | `api.deepseek.com` / `dashscope.aliyuncs.com` / `api.moonshot.cn` / `github.com` / `feishu.cn` / `open.feishu.cn` | 同时放行 `*.openai.com` 作为备用 |
| **DHCP 地址池** | ≥ 60 个 IP | ≥ 100 个 IP |
| **DNS** | 默认 ISP DNS 即可 | 建议备用 114.114.114.114 |

> ⚠️ 特别注意：部分学校网络有**强制 Portal 认证**，需提前协调 IT 将教室 AP 设为免认证或提前完成所有设备 MAC 白名单。

---

## 2. AI 工具链选型与 API 配置

### 2.1 大语言模型（LLM）选型

Day 01 场景：学生通过 AI 扩展问题（10→30）、生成用户画像、竞品分析、PRD 辅助撰写。对推理深度要求中等，但对并发量和中文能力要求高。

| 模型 | 注册门槛 | API 获取方式 | 免费额度 | 推荐优先级 |
|---|---|---|---|---|
| **DeepSeek-V3**（deepseek-chat） | 手机号注册 deepseek.com | 控制台创建 API Key | 注册送 500 万 tokens（约够一个班级一天用量） | ★★★ 首选 |
| **通义千问 Qwen-Max** | 阿里云账号 + 实名认证 | 灵积 DashScope 控制台 | 新用户 100 万 tokens/月免费 | ★★☆ 备选 |
| **Kimi（Moonshot v1）** | 手机号注册 moonshot.cn | 控制台 → API Key 管理 | 注册送 15 元额度 | ★★☆ 备选 |
| **ChatGPT-4o-mini**（备用） | OpenAI 账号 + 海外手机号 | platform.openai.com | 无免费额度，需绑卡预充值 $5 | ★☆☆ 仅备用 |

**最简使用方式（以 DeepSeek 为例，学生端命令行调用）**：

```bash
# 1. 设置环境变量（教师统一分发）
export DEEPSEEK_API_KEY="sk-xxxx"

# 2. 单次调用（可用 curl 或 Thunder Client 插件在 VSCode 里跑）
curl https://api.deepseek.com/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \
  -d '{
    "model": "deepseek-chat",
    "messages": [{"role": "user", "content": "把「上学迟到」扩展成 3 个同类的日常不便问题"}]
  }'
```

**推荐：教师统一代理方案**
教师机起一个轻量代理（如 Cloudflare Workers 或本地 Express），学生不直接持有 API Key，而是通过统一 endpoint 调用。好处：用量可控、Key 不泄露、可做内容安全过滤。

```javascript
// 教师代理最小实现（运行在教师机上，localhost:3000）
const express = require('express');
const app = express();
app.use(express.json());
app.post('/api/llm', async (req, res) => {
  const resp = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'deepseek-chat', ...req.body })
  });
  res.json(await resp.json());
});
app.listen(3000);
```

学生端调用统一地址：`http://<教师机IP>:3000/api/llm`

### 2.2 文生图工具选型

下午环节需要：Slogan 配图、产品概念图生成。

| 工具 | 注册门槛 | 免费额度 | 最适合 Day 01 场景 | 访问方式 |
|---|---|---|---|---|
| **通义万相** | 阿里云账号（同通义千问） | 新用户 50 张/月免费 | ★★★ 中文 prompt 友好，无需海外网络 | DashScope API 或 tongyi.aliyun.com 网页端 |
| **LiblibAI** | 微信扫码 | 每日签到送点数 | ★★★ 国产 Stable Diffusion 社区，模型丰富 | liblib.art |
| **即梦（Jimeng）** | 抖音/头条扫码 | 每日免费额度 | ★★☆ 字节系，适合中文创意生成 | jimeng.jianying.com |
| **Midjourney** | Discord + 付费（$10/月起） | 无免费额度 | ★☆☆ 门槛高，不推荐初中组 | Discord |

**推荐方案**：Day 01 使用**通义万相网页端**（tongyi.aliyun.com → 创意作画），无需 API 对接，学生浏览器直接操作即可。如需批量化，教师可配 DashScope API。

### 2.3 API Key 最小安全方案

| 方案 | 适用场景 | 安全等级 | 实施复杂度 |
|---|---|---|---|
| **教师代理模式（推荐）** | 全班统一 Key，教师机转发 | ★★★★ | 中（教师需提前启动代理） |
| **环境变量分发** | 每生独立 Key（不现实） | ★★☆ | 低（export 到 .zshrc） |
| **GitHub Codespaces Secrets** | 如果用 Codespaces 环境 | ★★★★ | 低（Secret 不落盘） |
| **飞书机器人中转** | 通过飞书自定义机器人调用 LLM | ★★★ | 中（需配置飞书应用 + Outgoing Webhook） |

**最终推荐：教师代理模式 + 飞书/本地 `.env` 文件。**
- 教师机启动代理（Cloudflare Workers 或本地 Node），API Key 仅存教师机。
- 学生 `.env` 文件只存教师代理地址，不存真实 API Key。
- `.gitignore` 中强制忽略 `.env`（见第 3 节）。

---

## 3. 飞书看板 + Git 工程环境搭建（Day 01 技术积木）

### 3.1 飞书项目看板模板结构

**看板名称**：`SophiGo-Day01-问题挖掘-{组号}`（每个双人组一张）

**列定义（按工作流阶段）**：

| 列名 | 含义 | 卡片示例 |
|---|---|---|
| 📥 **痛点收集** | 上午产出的 10 个原始问题 | 「上学路上书包太重」 |
| 🔄 **AI 扩展池** | AI 扩展出的 30 个衍生问题 | AI 生成的同类问题 |
| ⭐ **三轴投票 Top 5** | 经过痛苦度/频率/技术可行性投票筛选的 Top 5 | 附投票得分标签 |
| 🎯 **核心问题（PICK 1）** | 下午砍到 1 个的核心问题 | 最终选定方向 |
| 📊 **竞品分析** | AI 生成的竞品报告卡片 | 竞品名称 + 一句话差异点 |
| 💡 **产品概念** | 命名/Slogan/文生图成品 | 「智行书包 · 让上学路更轻」 |
| 📝 **PRD 草稿** | 用户-场景-痛点模板 + AI 辅助 PRD | 结构化文档链接 |
| ✅ **Checkpoint** | 当日完成标记 | 教师 Review 通过 |

**标签（Label）体系**：

```yaml
优先级:
  - P0-核心
  - P1-重要
  - P2-备选

问题域:
  - 校园生活
  - 家庭日常
  - 交通出行
  - 健康安全
  - 学习工具
  - 社交娱乐

技术可行性:
  - 可行-ESP32
  - 可行-传感器
  - 待验证
  - 暂不可行

AI 辅助程度:
  - AI-生成
  - AI-润色
  - 人工原创
```

**字段定义**（每个卡片包含）：

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| 问题描述 | 多行文本 | 是 | 一句话描述 |
| 用户画像 | 文本 | 否 | AI 生成的典型用户 |
| 痛点等级 | 单选(1-5) | 否 | 痛苦程度 |
| 发生频率 | 单选(每日/每周/每月/偶尔) | 否 | — |
| 关联链接 | URL | 否 | 引到 Git 仓库对应文档 |

### 3.2 Git 初始化：仓库结构预设

**推荐仓库路径**（GitHub Classroom 创建，或学生手动 clone 模板仓库）：

```
sophigo-team-XX/
├── README.md                 # 团队介绍 + Day 01 日报
├── .gitignore
├── .env.example              # 环境变量模板（不含真实 Key）
├── docs/
│   ├── day01/
│   │   ├── 01-problem-list.md          # 10 个原始问题
│   │   ├── 02-ai-expanded-30.md        # AI 扩展 30 个
│   │   ├── 03-top5-voting.md           # 三轴投票结果
│   │   ├── 04-user-persona.md          # AI 生成用户画像
│   │   ├── 05-core-problem.md          # 砍到 1 个的核心问题
│   │   ├── 06-competitor-analysis.md   # 竞品分析
│   │   ├── 07-product-concept.md       # 命名/Slogan/概念图
│   │   └── 08-prd-draft.md             # PRD 草稿
│   └── templates/
│       └── engineering-log.md          # Instructables 风格工程日志模板
├── assets/
│   └── day01/
│       └── images/                     # 文生图产出存放
└── src/                                # Day 01 暂空，Day 02+ 放代码
    └── .gitkeep
```

### 3.3 .gitignore 规则

```gitignore
# === 敏感信息 ===
.env
*.pem
*.key
credentials.json
service-account.json

# === 系统文件 ===
.DS_Store
Thumbs.db
desktop.ini

# === 依赖目录 ===
node_modules/
__pycache__/
*.pyc
.venv/
venv/

# === IDE ===
.vscode/settings.json
.idea/
*.swp
*.swo

# === 日志与临时文件 ===
*.log
tmp/
temp/
*.tmp

# === ESP32 编译产物 ===
build/
*.bin
*.elf
*.map
sdkconfig.old

# === 大文件 ===
*.mp4
*.mov
*.zip
*.tar.gz
```

### 3.4 首次 Commit 规范

**Commit Message 模板**：

```
feat(day01): init repo with problem-discovery scaffold

- 建立 docs/day01/ 文档目录结构
- 添加工程日志模板（Instructables 规范）
- 配置 .gitignore 规则
- 添加 .env.example 供环境变量参考

Ref: SophiGo-Day01-Checkpoint
Co-authored-by: 学生A <a@example.com>
Co-authored-by: 学生B <b@example.com>
```

**首次 Commit 必须包含的文件**：
1. `README.md` — 至少含团队名称、成员、Day 01 目标一句话
2. `.gitignore` — 使用上述模板
3. `docs/templates/engineering-log.md` — 工程日志模板（见下方）
4. `docs/day01/` — 至少一个 `.gitkeep` 占位

**工程日志模板**（`docs/templates/engineering-log.md`，对标 Instructables 规范）：

```markdown
# [{日期}] {日志标题}

## 今日目标
- [ ] 目标 1
- [ ] 目标 2

## 做了什么
| 时间 | 动作 | 工具 | 产出 | 遇到问题 |
|---|---|---|---|---|
| 09:00 | 列出 10 个不便问题 | 纸笔+飞书 | 问题清单 | — |
| 10:00 | AI 扩展至 30 个 | DeepSeek API | 扩展结果 | — |

## 关键决策
> 为什么选了 A 而不是 B？

## AI 对话记录
<!-- 截图或粘贴关键 prompt 与输出 -->

## 下一步
- [ ] 明日待办
```

---

## 4. Embedding 可视化 Demo 技术方案

### 4.1 目标

15 分钟课堂 Demo：输入 20-30 个中文词语 → 通过 Embedding 模型转为 768/1024 维向量 → t-SNE/UMAP 降维到 2D → 浏览器渲染交互式散点图。让学生直观理解「语义相近的词在空间中也靠近」。

**演示时刻**：约上午 10:30，FabLab 分享之后，引出「AI 如何“理解”问题」时播放。

### 4.2 推荐方案：本地静态 HTML + Transformers.js（零后端）

**技术选型理由**：
- Transformers.js 在浏览器端运行 embedding 推理，无需服务器
- 使用 `Xenova/all-MiniLM-L6-v2`（英文）或 `Xenova/multilingual-e5-small`（多语言含中文）
- t-SNE 降维使用 `@aspect-apps/tsne` 或纯 JS 实现
- 散点图渲染使用 ECharts（对中文友好）

**Demo 页面结构**（单文件 `embedding-demo.html`，约 300 行）：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Embedding 可视化 — SophiGo Day 01</title>
  <script src="https://cdn.jsdelivr.net/npm/@xenova/transformers@2"></script>
  <script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
</head>
<body>
  <div id="chart" style="width:100%;height:600px;"></div>
  <script type="module">
    // 1. 加载 embedding 模型
    const { pipeline } = await import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2/+esm');
    const extractor = await pipeline('feature-extraction', 'Xenova/multilingual-e5-small');

    // 2. 词语数据集
    const words = ['猫', '狗', '老虎', '狮子', '苹果', '香蕉', '汽车', '自行车', '飞机', '轮船',
                   '快乐', '高兴', '悲伤', '难过', '跑步', '游泳', '篮球', '足球', '书本', '铅笔',
                   '老师', '学生', '医院', '医生', '手机', '电脑'];

    // 3. 批量提取 embedding
    const vectors = [];
    for (const word of words) {
      const output = await extractor(word, { pooling: 'mean', normalize: true });
      vectors.push(Array.from(output.data));
    }

    // 4. t-SNE 降维到 2D（简易实现或引入 tsne.js）
    // [此处略，实际引入 @aspect-apps/tsne CDN]

    // 5. ECharts 散点图渲染
    const chart = echarts.init(document.getElementById('chart'));
    chart.setOption({
      title: { text: '语义空间：词语 Embedding 2D 投影' },
      tooltip: { formatter: (p) => p.name },
      series: [{
        type: 'scatter',
        data: coords2d.map(([x, y], i) => ({ name: words[i], value: [x, y] })),
        label: { show: true, formatter: (p) => p.name }
      }]
    });
  </script>
</body>
</html>
```

**部署方式**：托管到 Vercel，生成 `https://sophigo-embedding.vercel.app`，课堂直接浏览器打开。

### 4.3 备选方案对比

| 方案 | 优点 | 缺点 | 推荐场景 |
|---|---|---|---|
| **方案 A：本地静态 HTML + Transformers.js**（上述推荐） | 零后端、浏览器原生推理、学生可 fork 修改 | 首次加载模型约 15-30 秒（需缓存）、中文模型精度略低于英文 | ★★★ 首选 |
| **方案 B：Embedding Projector（projector.tensorflow.org）** | 开箱即用、Google 官方维护、支持 t-SNE/UMAP/PCA | 需上传 TSV 文件（含中文编码易出问题）、无中文界面、依赖 Google 网络 | ★★☆ 备选 |
| **方案 C：Google Colab + Plotly** | 灵活、可用 Sentence-Transformers 高质量中文模型 | 需 Google 账号、网络不稳定、非技术人员操作困难 | ★☆☆ 仅教师备用 |
| **方案 D：Nomic Atlas 网页版** | 可视化效果极佳、支持交互探索 | 需注册账号、数据上传到第三方、免费额度有限 | ★★☆ 备选 |

### 4.4 Demo 词语数据集

**数据集设计原则**：
- 含明显语义聚类的词对（猫/狗 vs 苹果/香蕉 vs 汽车/火车）
- 含抽象概念（快乐/悲伤）验证情感维度
- 总数 20-30 个，保证模型加载+推理+渲染在 3 分钟内完成

**推荐数据集**（已按语义分组，适合 15 分钟 Demo 节奏）：

```javascript
const DEMO_WORDS = {
  // 动物聚类（应聚在一起）
  animals:   ['猫', '狗', '老虎', '狮子', '大象', '兔子'],
  // 水果聚类（应聚在一起）
  fruits:    ['苹果', '香蕉', '西瓜', '草莓', '橙子'],
  // 交通工具聚类
  vehicles:  ['汽车', '自行车', '火车', '飞机', '轮船'],
  // 情绪聚类
  emotions:  ['快乐', '高兴', '悲伤', '难过', '兴奋'],
  // 学习用品聚类（与水果/动物距离远）
  school:    ['书本', '铅笔', '书包', '老师', '学生'],
  // 电子产品聚类
  tech:      ['手机', '电脑', '平板'],
};
```

**预处理要求**：
- 无需额外预处理，原始中文词直接送入 `multilingual-e5-small` 模型
- 教师提前在 Demo 页打开一次，让模型缓存到浏览器 IndexedDB（后续打开秒加载）
- 如果教室网络不稳定，教师提前 `wget` 模型文件托管到本地 http-server

### 4.5 Demo 流程脚本（15 分钟拆解）

| 分钟 | 动作 | 技术操作 |
|---|---|---|
| 0-2 | 打开页面，展示 30 个词语列表 | 浏览器加载模型（进度条） |
| 2-4 | 点击“开始计算”，模型推理 | Transformers.js 逐词提取 embedding |
| 4-6 | 渲染散点图 | t-SNE → ECharts 渲染 |
| 6-10 | 互动：拖拽放大、hover 看词、拖动滑块回放聚类过程 | ECharts 内置交互 |
| 10-13 | 替换 3 个词为近义词，观察位置变化 | 手动改 JS 数组，重新计算 |
| 13-15 | 总结：引出“AI 通过向量距离理解语义相似度” | 教师讲解，无需操作 |

---

## 附录：技术依赖速查表

| 依赖项 | 版本 | 获取方式 | Day 01 是否必装 |
|---|---|---|---|
| VSCode | ≥ 1.90 | code.visualstudio.com | ✅ 必装 |
| Git | ≥ 2.40 | git-scm.com | ✅ 必装 |
| Node.js | ≥ 18 LTS | nodejs.org | ⚠️ 仅教师机 |
| esptool | ≥ 4.7 | `pip install esptool` | ⚠️ 仅教师机烧录用 |
| Transformers.js | 2.x | CDN 加载 | ⚠️ 仅 Demo 页面 |
| ECharts | 5.x | CDN 加载 | ⚠️ 仅 Demo 页面 |
| Express | ≥ 4.18 | `npm install express` | ⚠️ 仅教师代理 |
| 飞书 | 最新 | 飞书客户端 + 网页版 | ✅ 全员必装 |

---

*文档版本：v1.0 · 生成日期：2026-06-10 · 仅供 SophiGo 技术团队使用*
