import React from 'react';
import { ExternalLink } from 'lucide-react';

const SVG_ICONS = {
  folder: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>',
  shield: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  tool: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  box: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>',
  printer: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3h12v6M6 14h12v8H6z"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 2v4M17 2v4M7 18v4M17 18v4M2 7h4M2 17h4M18 7h4M18 17h4"/></svg>',
  radio: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22v-4M12 6V2M2 12h4M18 12h4"/><path d="M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/><circle cx="12" cy="12" r="6"/></svg>',
  crop: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/></svg>',
  zap: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  hardDrive: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6M14 2v20M2 14h12"/></svg>',
  layers: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  package: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  bot: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
};

// ── Data ──
const LAB_ITEMS = [
  {
    title: '实验室安全与工作规范',
    desc: '实验室运行规范、考勤要求及空间日常维护流程。',
    link: '/docs/courses/fab-course/doc/0manage/labmanage.html',
    icon: SVG_ICONS.folder,
  },
  {
    title: '全球 Fab Lab 网络介绍',
    desc: '全球 Fab Lab 愿景、MIT CBA 起源、核心机器清单与 FabAcademy 分布式项目。',
    link: '/docs/courses/fab-course/doc/Fab/FAB.html',
    icon: SVG_ICONS.globe,
  },
  {
    title: '安全准入与设备规范',
    desc: '大功率设备、CNC 铣床及危险材料操作的强制性安全准则。',
    link: '/docs/courses/fab-course/doc/0manage/access_safety.html',
    icon: SVG_ICONS.shield,
  },
  {
    title: '材料选型与设备预约',
    desc: '实验室常规耗材（亚克力、木板、树脂等）及机器设备预约规范流程。',
    link: '/docs/courses/fab-course/doc/0manage/material.html',
    icon: SVG_ICONS.tool,
  },
];

const TUTORIALS = [
  { id: 1, title: '项目管理与文档工作流', icon: SVG_ICONS.folder, desc: 'Git 协同控制、Markdown 基础、静态网站部署（VitePress/GitHub Pages）及 AIGC 文档工作流。',
    docsPath: '/docs/courses/fab-course/doc/1projectmanage/Assessment1.html' },
  { id: 2, title: 'CAD 参数化设计', icon: SVG_ICONS.box, desc: 'Fusion 360 与 SolidWorks 参数化三维建模、装配体、钣金设计及生成式设计基础。',
    docsPath: '/docs/courses/fab-course/doc/2cad/Assessment.html' },
  { id: 3, title: '3D 打印工艺与加工', icon: SVG_ICONS.printer, desc: 'FDM、SLA 与 HP-MJF 切片设置、模型排版、支撑设计约束及表面后处理。',
    docsPath: '/docs/courses/fab-course/doc/3_3dprinter/assessment.html' },
  { id: 4, title: '电子电路开发与仿真', icon: SVG_ICONS.cpu, desc: '常用元器件选型、面包板调试、欧姆/基尔霍夫定律，KiCad 原理图绘制与 PCB 布局。',
    docsPath: '/docs/courses/fab-course/doc/4electric_design/Assessment.html' },
  { id: 5, title: 'Arduino 嵌入式开发', icon: SVG_ICONS.radio, desc: '基于开源硬件的 C++ 底层编程、GPIO 中断、模拟/数字传感器输入与舵机/电机执行控制。',
    docsPath: '/docs/courses/fab-course/doc/5arduino/assessment.html' },
  { id: 6, title: '激光切割结构设计', icon: SVG_ICONS.crop, desc: '矢量文件排版、插接公差设计，亚克力、木板及卡纸的激光雕刻与高速切割。',
    docsPath: '/docs/courses/fab-course/doc/6laser_cutter/Assessment.html' },
  { id: 7, title: 'PCB 焊接装配与返修', icon: SVG_ICONS.zap, desc: 'SMT 表面贴片装配、回流焊接，手工烙铁与热风枪对密脚芯片的拆焊返修与短路质检。',
    docsPath: '/docs/courses/fab-course/doc/4electric_design/Assessment.html' },
  { id: 8, title: 'CNC 减材制造加工', icon: SVG_ICONS.hardDrive, desc: 'G代码原理、CAM 刀路规划（平移/挖槽/轮廓）、对刀与坐标原点设定，三轴机床操作。',
    docsPath: '/docs/courses/fab-course/doc/8CNC_manufacture/Assessment.html' },
  { id: 9, title: '硅胶模具与液体浇铸', icon: SVG_ICONS.layers, desc: '基于 3D 打印阳模翻制硅橡胶阴模，AB 双组份树脂、石膏及金属材料液体翻砂浇铸。',
    docsPath: '/docs/courses/fab-course/doc/9MOLD/assessment.html' },
  { id: 10, title: '物联网无线通信', icon: SVG_ICONS.wifi, desc: 'TCP/IP、MQTT、HTTP 协议，ESP8266 接入本地 Wi-Fi 并上传传感器数据至物联网平台。',
    docsPath: '/docs/courses/fab-course/doc/10IOT/Assessment.html' },
  { id: 11, title: '交互界面与控制应用', icon: SVG_ICONS.terminal, desc: '使用 Processing 或 Node.js 编写上位机，实现串口数据可视化监控及跨网络交互面板。',
    docsPath: '/docs/courses/fab-course/doc/11Interface-application-programming/Assessment.html' },
  { id: 12, title: '常用标准件与五金工具', icon: SVG_ICONS.package, desc: '常用五金件规格（螺丝/轴承/联轴器/铝型材），米思米与 Digi-Key 标准件检索采购。',
    docsPath: '/docs/courses/fab-course/doc/12material&tool/assessment.html' },
  { id: 13, title: '精益商业计划书基础', icon: SVG_ICONS.briefcase, desc: '产品-市场匹配度验证、多级物料采购成本核算、竞品分析及产品技术路线汇报。',
    docsPath: '/docs/courses/fab-course/doc/13BP/assessment.html' },
  { id: 14, title: 'AI 智能载具集成开发', icon: SVG_ICONS.bot, desc: '轮式底盘运动学正逆解建模、双轮差速/麦轮驱动固件，以及 ROS2 导航与 VLM 视觉算法集成。',
    docsPath: '/docs/courses/fab-course/doc/14AI&vehicle/assessment.html' },
];

const SCHOOL_GROUPS = [
  {
    school: 'ZJU',
    schoolName: '浙江大学工业设计 (ZJU)',
    cohorts: [
      { year: '2023年', name: '浙大 DE / DM 2023级', teams: [
        { name: 'DE 2023团队', url: '/docs/courses/fab-course/class/fab-2023-zju-de.html' },
        { name: 'DM 2023团队', url: '/docs/courses/fab-course/class/fab-2023-zju-dm.html' },
        { name: 'Mini 2023团队', url: '/docs/courses/fab-course/class/fab-2023-zju-mini.html' }
      ]},
      { year: '2022年', name: '浙大 DE / DM 2022级', teams: [
        { name: 'DE 2022团队', url: '/docs/courses/fab-course/class/fab-2022-zju-de.html' },
        { name: 'DM 2022团队', url: '/docs/courses/fab-course/class/fab-2022-zju-dm.html' },
        { name: 'Mini 2022团队', url: '/docs/courses/fab-course/class/fab-2022-zju-mini.html' }
      ]},
      { year: '2020–2021年', name: '浙大 DE / DM 2020-2021级', teams: [
        { name: 'DE 2021团队', url: '/docs/courses/fab-course/class/fab-2021-zju-de.html' },
        { name: 'DM 2021团队', url: '/docs/courses/fab-course/class/fab-2021-zju-dm.html' },
        { name: 'DE 2020团队', url: '/docs/courses/fab-course/class/fab-2020-zju-de.html' }
      ]}
    ]
  },
  {
    school: 'UNNC-FABLAB',
    schoolName: '宁波诺丁汉大学 FabLab (UNNC-FABLAB)',
    cohorts: [
      { year: '2025级', name: '宁诺 Fab Academy 2025级', teams: [
        { name: '宁诺班 2025', url: '/docs/courses/fab-course/class/fab-2025-UNNC.html' },
        { name: '宁诺班 2025-2', url: '/docs/courses/fab-course/class/fab-2025-UNNC-2.html' }
      ]},
      { year: '2023级', name: '宁诺 Fab Academy 2023级', teams: [
        { name: '宁诺班 2023', url: '/docs/courses/fab-course/doc/Fab/fab2023.html' }
      ]}
    ]
  },
  {
    school: 'ZWU',
    schoolName: '浙江万里学院 (ZWU)',
    cohorts: [
      { year: '2024–2026年', name: '万里学院交互系统班', teams: [
        { name: '交互系统 2026-A1', url: '/docs/courses/fab-course/class/FAB-2026-ZWU-01.html' },
        { name: '交互系统 2024', url: '/docs/courses/fab-course/class/fab-2024-zwu-Interactivesystem.html' },
        { name: '交互系统 2+2 2024', url: '/docs/courses/fab-course/class/fab-2024-zwu-Interactivesystem2+2.html' }
      ]}
    ]
  },
  {
    school: 'NexMaker',
    schoolName: 'NexMaker 创客学院',
    cohorts: [
      { year: '第二期', name: 'NexMaker 创客营 — 第二期', teams: [
        { name: '创客营 S2', url: '/docs/courses/fab-course/class/fab-02.html' }
      ]},
      { year: '第一期', name: 'NexMaker 创客营 — 第一期', teams: [
        { name: '创客营 S1', url: '/docs/courses/fab-course/class/fab-01.html' }
      ]}
    ]
  }
];

const CASE_ITEMS = [
  {
    id: 1,
    isVideo: true,
    src: '/docs/courses/fab-course/case/assets/D2CEF083-C025-4750-A304-88C0129457AC/assets/media3.mov-0.0000-92.3667.mov',
    poster: '/docs/courses/fab-course/case/assets/D2CEF083-C025-4750-A304-88C0129457AC/thumbnail.jpeg',
    titleZh: '物理总装与线束整理',
    titleEn: '物理总装与线束整理',
    descZh: '智能车模物理样机总装，精细理线工艺与接线布局，打通基础驱动与板载传感器的通信联调。',
    descEn: '智能车模物理样机总装，精细理线工艺与接线布局，打通基础驱动与板载传感器的通信联调。'
  },
  {
    id: 2,
    isVideo: true,
    src: '/docs/courses/fab-course/case/assets/D9A7D241-51E9-4A42-9731-C049D97FD256/assets/media10.mp4-0.0000-88.8500.mp4',
    poster: '/docs/courses/fab-course/case/assets/D9A7D241-51E9-4A42-9731-C049D97FD256/thumbnail.jpeg',
    titleZh: '参数化设计与受力仿真',
    titleEn: '参数化设计与受力仿真',
    descZh: '在 Fusion 360 中进行多维底盘滑块参数化设计，并通过网格划分与应力拓扑分析校正机械强度。',
    descEn: '在 Fusion 360 中进行多维底盘滑块参数化设计，并通过网格划分与应力拓扑分析校正机械强度。'
  },
  {
    id: 3,
    isVideo: true,
    src: '/docs/courses/fab-course/case/assets/72C808D0-5B37-40C6-A9D2-F3EF3AD36D1D/assets/media11.mp4-0.0000-92.8670.mp4',
    poster: '/docs/courses/fab-course/case/assets/72C808D0-5B37-40C6-A9D2-F3EF3AD36D1D/thumbnail.jpeg',
    titleZh: '全向麦轮动力学与虚实联动',
    titleEn: '全向麦轮动力学与虚实联动',
    descZh: '全向麦克纳姆轮运动学矩阵正逆解计算，配合 3D WebGL 在线仿真器进行控制指令的闭环同步调试。',
    descEn: '全向麦克纳姆轮运动学矩阵正逆解计算，配合 3D WebGL 在线仿真器进行控制指令的闭环同步调试。'
  },
  {
    id: 4,
    isVideo: false,
    src: '/docs/courses/fab-course/case/assets/24DE65CA-4AEF-4EA1-AD31-6DFA18CFA5A1/assets/slide4_highres.png',
    titleZh: '数字化制造与工艺定型',
    titleEn: '数字化制造与工艺定型',
    descZh: '综合运用 3D 打印、激光切割等多维度制造工艺，集成启动按键、超声波模块与蓝白黑三色 CMF 面板。',
    descEn: '综合运用 3D 打印、激光切割等多维度制造工艺，集成启动按键、超声波模块与蓝白黑三色 CMF 面板。'
  }
];

function ShowcaseCard({ item, lang }) {
  const videoRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const [isMuted, setIsMuted] = React.useState(true);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    if (!item.isVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            // Autoplay might be blocked by browser policies
          });
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [item.isVideo]);

  const handleMuteToggle = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const handleDoubleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="fc-case-card"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        minHeight: '500px'
      }}
      onDoubleClick={handleDoubleClick}
    >
      <div style={{ position: 'relative', width: '100%', height: '360px', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {item.isVideo ? (
          <>
            <video
              ref={videoRef}
              src={item.src}
              poster={item.poster}
              muted={isMuted}
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', cursor: 'pointer' }}
            />
            {/* Control HUD overlay */}
            <div style={{ position: 'absolute', bottom: '8px', right: '8px', zIndex: 10, display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={handleMuteToggle}
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  backdropFilter: 'blur(4px)',
                  transition: 'background 0.2s',
                  outline: 'none'
                }}
                title={isMuted ? (lang === 'zh' ? '解除静音' : 'Unmute') : (lang === 'zh' ? '静音' : 'Mute')}
              >
                {isMuted ? '🔇' : '🔊'}
              </button>
              <button
                onClick={handleDoubleClick}
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  backdropFilter: 'blur(4px)',
                  transition: 'background 0.2s',
                  outline: 'none'
                }}
                title={lang === 'zh' ? '双击全屏' : 'Double Click Fullscreen'}
              >
                ⛶
              </button>
            </div>
            {/* Play indicator */}
            <div style={{ position: 'absolute', top: '8px', left: '8px', background: 'rgba(0,0,0,0.5)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.65rem', color: '#fff', pointerEvents: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="fc-pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4cd964', display: 'inline-block' }}></span>
              {isPlaying ? (lang === 'zh' ? '自动播放中' : 'Auto Playing') : (lang === 'zh' ? '已暂停' : 'Paused')}
            </div>
          </>
        ) : (
          <img
            src={item.src}
            alt={item.titleZh}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 600, margin: '0 0 0.35rem', color: 'var(--text-primary)' }}>
          {lang === 'zh' ? item.titleZh : item.titleEn}
        </h4>
        <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
          {lang === 'zh' ? item.descZh : item.descEn}
        </p>
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
            {item.isVideo ? (lang === 'zh' ? '💡 双击视频最大化播放' : '💡 Double click video to maximize') : ''}
          </span>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--klein-blue)', letterSpacing: '0.05em' }}>
            {item.isVideo ? 'VIDEO' : 'IMAGE'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FabCourse({ onBack, lang = 'zh' }) {
  return (
    <div style={{ paddingTop: '3rem', paddingBottom: '4rem', minHeight: '80vh', position: 'relative', zIndex: 5 }}>
      <div className="container-custom">

        {/* ── Hero ── */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--klein-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            Fab Lab · 数字化造物
          </span>
          <h1 className="title-hero text-gradient" style={{ marginBottom: '1rem' }}>
            How to Make<br />Almost Everything
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
            源自麻省理工学院（MIT）FabAcademy 经典课程体系与全球数字化造物网络。学习新工科全栈工程方法——从微型数字化制造基础到 AI 驱动的敏捷硬件原型开发。
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {['14 个核心开发模块', 'MIT 经典课程体系', '累计培养 400+ 学员', '宁诺 · 浙大 · 万里'].map((pill, i) => (
              <span key={i} style={{ fontSize: '0.72rem', fontWeight: 500, color: 'var(--text-muted)', border: '1px solid var(--border-color)', borderRadius: '999px', padding: '0.25rem 0.75rem' }}>
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* ── Sticky Nav Tabs ── */}
        <div style={{ position: 'sticky', top: '72px', zIndex: 50, background: 'var(--bg-navbar)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-color)', marginBottom: '3rem' }}>
          <div className="container-custom" style={{ display: 'flex', gap: '0' }}>
            {[
              { id: 'overview', label: '概述' },
              { id: 'cases', label: '案例展示' },
              { id: 'lab', label: '安全与运行' },
              { id: 'tutorials', label: '课程大纲' },
              { id: 'courses', label: '班级' },
            ].map((tab) => (
              <a key={tab.id} href={`#fc-${tab.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(`fc-${tab.id}`)?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{ padding: '0.75rem 1.25rem', fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)', textDecoration: 'none', borderBottom: '2px solid transparent', cursor: 'pointer', transition: 'color 0.15s, border-color 0.15s' }}>
                {tab.label}
              </a>
            ))}
          </div>
        </div>

        {/* ═══ Section 1: Overview ═══ */}
        <section id="fc-overview" style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--klein-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>课程概述</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, margin: '0 0 0.5rem' }}>什么是 Fab Lab？</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: '2.5rem', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '0.75rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Fab Lab</strong>（微型数字化制造实验室）是由麻省理工学院（MIT）比特与原子中心发起的一项全球数字化制造空间。它配备了一套标准化的数字化制造工具（如 CNC 铣床、3D 打印机、激光切割机及电子电路开发工具等），让参与者能够亲手设计并制造几乎任何东西——从定制电路板、物联网设备到复杂的结构原型。
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '0.75rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>FabAcademy</strong> 是依托全球 Fab Lab 网络开展的分布式教育项目。学员每周完成具有挑战性的实操任务，并亲手制作出相应的物理原型，内容涵盖机械设计、数字化制造、电路开发以及嵌入式编程等全栈工程链条。
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                在 <strong style={{ color: 'var(--text-primary)' }}>宁波诺丁汉大学 FabLab 和 NexMaker</strong>，我们引入这一经典课程体系，结合 AI 智能开发工具，致力于培养具备全栈思维的跨学科创新人才：将工业设计、电子硬件、算法控制与产品决策融为一体。
              </p>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div><div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>2000<sup style={{ fontSize: '0.75rem', verticalAlign: 'super' }}>+</sup></div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.15rem' }}>全球 Fab Lab 空间</div></div>
              <div><div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>14</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.15rem' }}>核心开发模块</div></div>
              <div><div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>MIT</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.15rem' }}>课程体系源自</div></div>
            </div>
          </div>
        </section>

        {/* ═══ Section: Showcase (2x2 Grid) ═══ */}
        <section id="fc-cases" style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--klein-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              案例展示
            </span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, margin: '0 0 0.25rem' }}>
              项目案例与数字化造物
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              学生夏令营实操案例展示。当浏览到该区域时视频自动播放，双击视频卡片可最大化全屏浏览。
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="fc-cases-grid">
            {CASE_ITEMS.map((item) => (
              <ShowcaseCard key={item.id} item={item} lang={lang} />
            ))}
          </div>
        </section>

        {/* ═══ Section 2: Lab Manage ═══ */}
        <section id="fc-lab" style={{ marginBottom: '4rem', padding: '3rem', borderRadius: '20px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--klein-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>安全与运行</span>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0 0 0.25rem' }}>实验室管理规范</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>进入实验室工作以及安全使用工具的必备参考文档。</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
            {LAB_ITEMS.map((item) => (
              <div key={item.title}
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', transition: 'all 0.2s ease-in-out', minHeight: '200px' }}
                className="fc-lab-card">
                <div style={{ color: 'var(--klein-blue)', display: 'flex' }} dangerouslySetInnerHTML={{ __html: item.icon }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 600, margin: '0 0 0.3rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: '0 0 1.25rem', flex: 1 }}>{item.desc}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-cta"
                    style={{
                      padding: '0.4rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.74rem',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      textDecoration: 'none',
                      marginTop: 'auto',
                      width: 'fit-content'
                    }}>
                    <span>查看文档细节</span>
                    <ExternalLink size={12} style={{ flexShrink: 0 }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Section 3: Tutorials ═══ */}
        <section id="fc-tutorials" style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--klein-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>课程大纲</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, margin: '0 0 0.25rem' }}>14 个核心开发模块</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>从项目文档管理、三维参数化设计到 AI 智能载具开发。点击下方卡片可直接打开对应文档章节。</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
            {TUTORIALS.map((tut) => (
              <div key={tut.id}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', padding: '1.15rem', borderRadius: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', transition: 'all 0.2s ease-in-out', minHeight: '200px' }}
                className="fc-tut-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.15rem' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--klein-blue)', letterSpacing: '0.08em' }}>{String(tut.id).padStart(2, '0')}</span>
                  <div style={{ color: 'var(--border-color)' }} dangerouslySetInnerHTML={{ __html: tut.icon }} />
                </div>
                <h3 style={{ fontSize: '0.82rem', fontWeight: 600, margin: 0, color: 'var(--text-primary)', lineHeight: '1.3' }}>{tut.title}</h3>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: '0 0 1rem', flex: 1 }}>{tut.desc}</p>
                <a href={tut.docsPath} target="_blank" rel="noopener noreferrer" className="btn-cta"
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.74rem',
                    fontWeight: '600',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    textDecoration: 'none',
                    marginTop: 'auto',
                    width: 'fit-content'
                  }}>
                  <span>查看文档细节</span>
                  <ExternalLink size={12} style={{ flexShrink: 0 }} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Section 4: Course List ═══ */}
        <section id="fc-courses" style={{ marginBottom: '4rem', padding: '3rem', borderRadius: '20px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--klein-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>班级</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, margin: '0 0 0.25rem' }}>班级</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>来自宁波诺丁汉大学 FabLab、浙江大学、浙江万里学院及 NexMaker 创客学院的历届学员档案。点击团队标签可直接查看其课程主页与作品集。</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {SCHOOL_GROUPS.map((school) =>
              school.cohorts.map((cohort) => (
                <div key={`${school.school}-${cohort.name}`} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '1.25rem', padding: '1.25rem 0', borderBottom: '1px solid var(--border-color)' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--klein-blue)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{school.school}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '0.15rem' }}>{cohort.year}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{cohort.name}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {cohort.teams.map((team) => (
                        <a key={team.name} href={team.url} target={team.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                          style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', textDecoration: 'none', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '0.25rem 0.7rem', fontWeight: 500, transition: 'color 0.15s, border-color 0.15s, background 0.15s', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                          className="fc-team-link">
                          {team.name} <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

      </div>

      {/* Styles */}
      <style>{`
        .fc-lab-card { transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
        .fc-lab-card:hover { border-color: rgba(0, 47, 167, 0.45) !important; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12); }
        .fc-tut-card { transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
        .fc-tut-card:hover { border-color: rgba(0, 47, 167, 0.45) !important; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12); }
        .fc-case-card { transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
        .fc-case-card:hover { border-color: rgba(0, 47, 167, 0.45) !important; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12); }
        .fc-team-link:hover { color: var(--text-primary) !important; border-color: var(--klein-blue) !important; background: rgba(0,47,167,0.04) !important; }

        @keyframes fc-pulse {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
        .fc-pulse-dot {
          animation: fc-pulse 1.5s infinite;
        }

        @media (max-width: 768px) {
          .fc-cases-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 900px) {
          #fc-lab div[style*="grid-template-columns"] { grid-template-columns: repeat(2, 1fr) !important; }
          #fc-tutorials div[style*="grid-template-columns"] { grid-template-columns: repeat(2, 1fr) !important; }
          #fc-overview div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
          #fc-overview div[style*="grid-template-columns"] > div[style*="border-left"] { flex-direction: row !important; border-left: none !important; border-top: 1px solid var(--border-color); padding-left: 0 !important; padding-top: 1rem; }
        }
        @media (max-width: 600px) {
          #fc-lab div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
          #fc-tutorials div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
          section[id^="fc-"] > div[style*="display: grid"][style*="160px"] { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
          #fc-lab { padding: 1.5rem !important; }
          #fc-courses { padding: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
