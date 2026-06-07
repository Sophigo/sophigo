import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const FILTERS = [
  { id: 'all', label: '全部' },
  { id: 'material', label: '材料' },
  { id: 'additive', label: '增材' },
  { id: 'subtractive', label: '减材' },
  { id: 'forming', label: '成型' },
  { id: 'surface', label: '表面' },
  { id: 'workflow', label: '工作流' },
];

const CARDS = [
  {
    id: 'engineering-polymers', category: 'material', label: '材料',
    title: '工程塑料族', subtitle: '从外观壳体到耐磨功能件',
    description: '以 ABS、PC、POM、PEEK、TPU 和尼龙为核心，建立课程中最常用的塑料材料选择逻辑。',
    swatch: 'linear-gradient(135deg, #312E81, #3B82F6 52%, #F8FAFC)', tone: '#3B82F6',
    tags: ['塑料基材', '强度/韧性', '触感'],
    materials: ['ABS', 'PC', 'POM', 'PEEK', 'TPU', '尼龙'],
    steps: ['按刚性、韧性、耐温和耐磨建立材料表', '区分展示件、结构件和运动件需求', '选择匹配的打印、CNC 或注塑路径', '记录材料成本、可得性和表面处理兼容性'],
    outcome: '让学生先判断材料角色，再选择制造工艺。',
    sourceUrl: 'https://profabx.com/prototype/material/polymers/peek/',
    localUrl: '/docs/courses/fab-course/doc/0manage/material.html'
  },
  {
    id: 'metal-materials', category: 'material', label: '材料',
    title: '金属材料族', subtitle: '强度、散热与真实工业质感',
    description: '围绕铝、铜、钛、不锈钢等金属基材，理解重量、强度、导热、导电和表面处理之间的取舍。',
    swatch: 'linear-gradient(135deg, #111827, #94A3B8 46%, #B45309)', tone: '#94A3B8',
    tags: ['铝合金', '铜合金', '钛合金'],
    materials: ['铝合金', '铜合金', '钛合金', '不锈钢'],
    steps: ['按重量、强度、散热和成本建立选择标准', '匹配 CNC、钣金、SLM 或铸造路径', '预留阳极、拉丝、喷砂或电镀余量', '用真实样板比对颜色、反光和触感'],
    outcome: '把金属 CMF 训练落实到结构和制造约束。',
    sourceUrl: 'https://profabx.com/prototype/material/metal/al/',
    localUrl: '/docs/courses/fab-course/doc/8CNC_manufacture/cnctype.html'
  },
  {
    id: 'composite-materials', category: 'material', label: '材料',
    title: '纤维增强复合材料', subtitle: '轻量化、刚度与结构方向性',
    description: '以 PA-CF、PA-GF、ABS-GF 等复合材料建立轻量化原型中的强度方向、层纹、磨耗和加工风险判断。',
    swatch: 'linear-gradient(135deg, #030712, #16A34A 45%, #334155)', tone: '#16A34A',
    tags: ['PA-CF', 'PA-GF', '轻量化'],
    materials: ['PA-CF', 'PA-GF', 'ABS-GF', '碳纤维纹理'],
    steps: ['识别主受力方向与各向异性风险', '选择连续纤维、短纤维或粉末烧结路径', '处理喷嘴磨耗、收缩和表面粗糙度', '通过夹具或实测验证刚度收益'],
    outcome: '让复合材料不只停留在外观纹理，而成为结构决策工具。',
    sourceUrl: 'https://profabx.com/prototype/material/componsites/pacf/',
    localUrl: '/docs/courses/fab-course/doc/0manage/material.html'
  },
  {
    id: 'sandtable', category: 'workflow', label: '工作流',
    title: '数字沙盘原型', subtitle: '从概念陈列到交互展示',
    description: '面向课程展示、展厅模型和产品路演的综合原型路径，强调模型比例、模块拆分、灯光/交互与可维护结构。',
    swatch: 'linear-gradient(135deg, #002FA7, #5E6AD2 58%, #F4B860)', tone: '#5E6AD2',
    tags: ['展示模型', '结构拆分', '交互陈列'],
    materials: ['亚克力', '树脂', '铝型材', '灯带'],
    steps: ['定义展示场景与观察距离', '拆分外壳、底座、灯光与控制模块', '建立比例模型并完成装配校验', '输出维护清单与展示说明'],
    outcome: '形成可巡展的高完成度原型，而不是单次拍摄用样机。',
    sourceUrl: 'https://profabx.com/prototype/sandtable/',
    localUrl: '/docs/courses/fab-course/doc/1projectmanage/Assessment1.html'
  },
  {
    id: 'digital-fabrication', category: 'workflow', label: '工作流',
    title: '探索数字制造', subtitle: '从设计文件到快速打样闭环',
    description: '将 CAD、材料选择、工艺约束、后处理与复盘文档串联成一个可重复的课程流程，适合 CMF 小组项目管理。',
    swatch: 'linear-gradient(135deg, #111827, #2DD4BF 52%, #F59E0B)', tone: '#2DD4BF',
    tags: ['FabLab', '课程流程', '复盘文档'],
    materials: ['PLA', 'ABS', '亚克力', '木材'],
    steps: ['建立需求与造型边界', '选择低风险快速工艺完成第一版', '通过 CMF 样板校正颜色、质感与结构', '沉淀 BOM、工艺参数与失败样本'],
    outcome: '让学生把工具使用转化成可迁移的工程决策能力。',
    sourceUrl: 'https://profabx.com/prototype/exploredigitalfabrication/',
    localUrl: '/docs/courses/fab-course/'
  },
  {
    id: 'fdm', category: 'additive', label: '增材',
    title: 'FDM 熔融沉积', subtitle: '低成本结构验证与快速迭代',
    description: '适合课程早期体量、装配、握持和机构干涉验证。重点在层纹方向、支撑策略、壁厚和嵌件预留。',
    swatch: 'linear-gradient(135deg, #3F51B5, #2563EB 55%, #D1D5DB)', tone: '#2563EB',
    tags: ['结构草模', '低成本', '装配验证'],
    materials: ['PLA', 'ABS', 'ASA', 'TPU', 'PA-CF'],
    steps: ['按受力方向确定打印姿态', '预留螺母、热熔铜柱与走线槽', '用 0.2mm 层高完成首版验证', '对关键面进行打磨、补土或喷漆'],
    outcome: '快速得到可握持、可装配、可测试的第一轮样机。',
    sourceUrl: 'https://profabx.com/prototype/material/polymers/asa/',
    localUrl: '/docs/courses/fab-course/doc/3_3dprinter/2.FDM3Dprintingbackground.html'
  },
  {
    id: 'lcd-dlp', category: 'additive', label: '增材',
    title: 'LCD / DLP 光固化', subtitle: '细节、透明件与视觉样件',
    description: '适合高精度外观件、小型结构、透明罩、CMF 质感样板。课程中重点训练支撑痕迹、清洗固化和表面处理。',
    swatch: 'linear-gradient(135deg, #6366F1, #A78BFA 55%, #F8FAFC)', tone: '#A78BFA',
    tags: ['精细表面', '透明树脂', '视觉样件'],
    materials: ['标准树脂', '透明树脂', '韧性树脂'],
    steps: ['拆分可见面与支撑面', '设置排液孔和空腔壁厚', '清洗、二次固化并修整支撑痕迹', '通过喷涂或抛光形成最终质感'],
    outcome: '让设计意图在比例、边缘和表面细节上被准确表达。',
    sourceUrl: 'https://profabx.com/prototype/manufacture/add/lcddlp/',
    localUrl: '/docs/courses/fab-course/doc/3_3dprinter/5.SLAbackground.html'
  },
  {
    id: 'sls-mjf', category: 'additive', label: '增材',
    title: 'SLS / MJF 尼龙烧结', subtitle: '功能件、小批量与复杂结构',
    description: '适合卡扣、铰链、轻量化壳体和耐冲击结构。课程中用它连接外观样机与功能样机。',
    swatch: 'linear-gradient(135deg, #111827, #64748B 58%, #E5E7EB)', tone: '#64748B',
    tags: ['功能样机', '尼龙', '小批量'],
    materials: ['PA12', 'PA11', 'TPU', 'PA-CF'],
    steps: ['按功能面定义关键公差', '为粉末清理预留孔位与开口', '验证卡扣、铰链、耐冲击结构', '染色、喷砂或浸渗提升外观一致性'],
    outcome: '把 CMF 样件推进到接近真实使用场景的功能验证。',
    sourceUrl: 'https://profabx.com/prototype/material/polymers/pa/',
    localUrl: '/docs/courses/fab-course/doc/3_3dprinter/7.hpmjf.html'
  },
  {
    id: 'cnc', category: 'subtractive', label: '减材',
    title: 'CNC 精密加工', subtitle: '金属质感与高精度结构',
    description: '适合铝合金外壳、旋钮、支架、散热件和高精度装配面。关注刀路可达性、倒角、纹理方向和后处理余量。',
    swatch: 'linear-gradient(135deg, #111827, #94A3B8 52%, #D97706)', tone: '#94A3B8',
    tags: ['铝合金', '高精度', '真实材质'],
    materials: ['铝合金', '铜合金', '钛合金', 'POM', '亚克力'],
    steps: ['把外观面和基准面分离管理', '约束内角半径和刀具可达性', '预留阳极、喷砂或抛光余量', '用装配件复核孔位和配合公差'],
    outcome: '建立学生对真实材料、加工限制与工业质感之间关系的判断力。',
    sourceUrl: 'https://profabx.com/en/prototype/manufacture/substractive/cnc/',
    localUrl: '/docs/courses/fab-course/doc/8CNC_manufacture/cnctype.html'
  },
  {
    id: 'sheet-metal', category: 'forming', label: '成型',
    title: '钣金折弯', subtitle: '轻量结构与工业外壳',
    description: '适合底盘、支架、防护罩、电控盒和课程机器人框架。关键是折弯半径、展开图、孔边距和表面喷涂策略。',
    swatch: 'linear-gradient(135deg, #1F2937, #71717A 60%, #4ADE80)', tone: '#71717A',
    tags: ['支架', '外壳', '展开图'],
    materials: ['冷轧板', '镀锌板', '铝板', '不锈钢'],
    steps: ['用折弯线定义结构逻辑', '检查孔边距和干涉风险', '输出展开图与折弯顺序', '结合喷粉、拉丝或阳极完成 CMF'],
    outcome: '让原型从塑料打印件升级为更接近工业装配的结构件。',
    sourceUrl: 'https://profabx.com/prototype/material/metal/al/',
    localUrl: '/docs/courses/fab-course/doc/2cad/fusion360-sheetmetal.html'
  },
  {
    id: 'injection', category: 'forming', label: '成型',
    title: '注塑与硅胶覆膜', subtitle: '量产思维与软硬复合手感',
    description: '适合讲解拔模、分型线、缩水、嵌件与软胶包覆。课程不只做样机，还要理解未来量产中的设计取舍。',
    swatch: 'linear-gradient(135deg, #3F51B5, #14B8A6 55%, #F97316)', tone: '#14B8A6',
    tags: ['量产判断', '拔模', '软硬复合'],
    materials: ['ABS', 'PC', 'PP', 'TPU', '硅胶', 'PU'],
    steps: ['标注拔模方向与分型线', '检查壁厚、筋位和缩水风险', '用软胶区域定义触感与防滑性能', '建立样机成本与模具成本对照'],
    outcome: '把 CMF 从视觉选择推进到结构、触感和制造经济性的综合决策。',
    sourceUrl: 'https://profabx.com/prototype/material/polymers/tpu/',
    localUrl: '/docs/courses/fab-course/doc/9MOLD/mold.html'
  },
  {
    id: 'surface-postprocess', category: 'surface', label: '表面',
    title: '喷砂、抛光与拉丝', subtitle: '从粗糙样机到可展示样板',
    description: '统一管理表面粗糙度、反光、边缘倒角和触感。适合建立 CMF 样板册，让同一造型呈现多种质感。',
    swatch: 'linear-gradient(135deg, #0F172A, #CBD5E1 48%, #F59E0B)', tone: '#CBD5E1',
    tags: ['质感控制', '样板册', '边缘处理'],
    materials: ['铝合金', '不锈钢', '树脂', '亚克力'],
    steps: ['记录基材、砂号、压力和处理时长', '控制可见边的倒角一致性', '对比哑光、半哑光与镜面效果', '将样板编号并归档到课程材料库'],
    outcome: '让学生能用参数描述质感，而不是只说"高级"或"好看"。',
    sourceUrl: 'https://profabx.com/prototype/postprocess/postprocess/',
    localUrl: '/docs/courses/fab-course/doc/3_3dprinter/8.postprocess.html'
  },
  {
    id: 'conductive', category: 'surface', label: '表面',
    title: '导电与功能涂层', subtitle: 'CMF 与电子功能的交界',
    description: '适合把外观件、电磁屏蔽、触摸电极和结构件连接起来。课程中可作为材料、电子和产品体验的跨学科案例。',
    swatch: 'linear-gradient(135deg, #020617, #C084FC 48%, #22C55E)', tone: '#C084FC',
    tags: ['功能表面', '触摸电极', '屏蔽'],
    materials: ['导电漆', '铜箔', '树脂件', '塑料壳体'],
    steps: ['区分装饰层与功能层', '规划接地、触摸或屏蔽路径', '用遮蔽和分区控制涂层边界', '完成导通、附着力和耐磨测试'],
    outcome: '把 CMF 训练从外观审美扩展到功能材料应用。',
    sourceUrl: 'https://profabx.com/prototype/postprocess/functional/conductive/',
    localUrl: '/docs/courses/fab-course/doc/4electric_design/basicknowledge.html'
  },
];

export default function Cmf({ onBack }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeId, setActiveId] = useState(CARDS[0].id);

  const visibleCards = activeFilter === 'all'
    ? CARDS
    : CARDS.filter(c => c.category === activeFilter);

  const active = CARDS.find(c => c.id === activeId) || visibleCards[0] || CARDS[0];

  const handleFilter = (id) => {
    setActiveFilter(id);
    const next = id === 'all' ? CARDS : CARDS.filter(c => c.category === id);
    setActiveId(next[0]?.id || CARDS[0].id);
  };

  return (
    <div className="cmf-page">
      {/* Back */}
      <div style={{ position: 'relative', maxWidth: '1440px', margin: '0 auto', padding: '1rem 24px 0' }}>
        <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.25rem', fontSize: '0.85rem', borderRadius: '20px', cursor: 'pointer', border: '1px solid var(--cmf-border)', background: 'rgba(255,255,255,0.035)', color: 'var(--cmf-sub)', fontFamily: 'inherit' }}>
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>

      {/* Intro */}
      <section className="cmf-intro" style={{ padding: '28px 24px 0' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', gap: '24px', alignItems: 'end' }}>
          <div>
            <p style={{ margin: '0 0 10px', color: '#2dd4bf', fontSize: '0.74rem', fontWeight: 750, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Prototype CMF Matrix
            </p>
            <h1 style={{ margin: 0, maxWidth: '780px', fontSize: '2.35rem', lineHeight: 1.14, color: '#f5f5f7', fontWeight: 700 }}>
              数字化快速原型与材料工艺卡片库
            </h1>
            <p style={{ maxWidth: '760px', margin: '14px 0 0', color: '#a6adbb', fontSize: '0.98rem', lineHeight: 1.75 }}>
              以 ProFabX Prototype 的材料、制造、后处理与数字制造内容为骨架，整理成 CMF 课程可直接使用的工艺选择与样机决策入口。
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 96px)', gap: '10px' }}>
            {[
              { num: CARDS.length, label: '知识卡片' },
              { num: 6, label: '工艺域' },
              { num: 2, label: '学习入口' },
            ].map((m, i) => (
              <div key={i} style={{ minHeight: '72px', padding: '12px', border: '1px solid var(--cmf-border)', borderRadius: '8px', background: 'rgba(255,255,255,0.035)' }}>
                <div style={{ fontSize: '1.55rem', lineHeight: 1, color: '#fff', fontWeight: 700 }}>{m.num}</div>
                <div style={{ marginTop: '8px', color: '#737b8c', fontSize: '0.72rem' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workspace */}
      <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '24px 24px 36px', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(360px, 420px)', gap: '18px', alignItems: 'start' }} className="cmf-workspace">

        {/* Library */}
        <div style={{ border: '1px solid var(--cmf-border)', borderRadius: '8px', background: 'var(--cmf-panel)', boxShadow: '0 20px 70px rgba(0,0,0,0.22)', padding: '16px' }}>
          {/* Filter bar */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '14px', marginBottom: '16px', borderBottom: '1px solid var(--cmf-border)' }}>
            {FILTERS.map(f => (
              <button key={f.id} onClick={() => handleFilter(f.id)}
                style={{
                  height: '34px', padding: '0 12px', flex: '0 0 auto',
                  border: activeFilter === f.id ? '1px solid rgba(244,184,96,0.42)' : '1px solid var(--cmf-border)',
                  borderRadius: '6px',
                  background: activeFilter === f.id ? 'rgba(244,184,96,0.12)' : 'rgba(255,255,255,0.035)',
                  color: activeFilter === f.id ? '#fff' : 'var(--cmf-sub)',
                  font: 'inherit', fontSize: '0.8rem', fontWeight: 650,
                  cursor: 'pointer', transition: 'all 0.2s ease', fontFamily: 'inherit',
                }}>
                {f.label}
              </button>
            ))}
          </div>

          {/* Card grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
            {visibleCards.map(card => {
              const isActive = card.id === activeId;
              return (
                <article key={card.id} onClick={() => setActiveId(card.id)} tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') setActiveId(card.id); }}
                  style={{
                    minHeight: '276px', display: 'flex', flexDirection: 'column', padding: '12px',
                    border: `1px solid ${isActive ? 'color-mix(in srgb, ' + card.tone + ' 58%, white 12%)' : 'var(--cmf-border)'}`,
                    borderRadius: '8px',
                    background: isActive ? 'rgba(255,255,255,0.052)' : 'rgba(255,255,255,0.032)',
                    cursor: 'pointer', outline: 'none', transition: 'all 0.22s ease',
                    boxShadow: isActive ? `0 14px 42px color-mix(in srgb, ${card.tone} 18%, transparent)` : 'none',
                  }}
                  className="cmf-card"
                  onMouseEnter={(e) => { if (card.id !== activeId) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = `color-mix(in srgb, ${card.tone} 58%, white 12%)`; e.currentTarget.style.background = 'rgba(255,255,255,0.052)'; }}}
                  onMouseLeave={(e) => { if (card.id !== activeId) { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--cmf-border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.032)'; }}}>
                  <div style={{ height: '72px', borderRadius: '6px', marginBottom: '12px', border: '1px solid rgba(255,255,255,0.12)', background: card.swatch }} />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: card.tone, fontSize: '0.72rem', fontWeight: 760 }}>{card.label}</span>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', border: `1px solid color-mix(in srgb, ${card.tone} 60%, white 12%)`, position: 'relative', display: 'inline-block' }}>
                      <span style={{ position: 'absolute', inset: '5px', borderTop: '2px solid currentColor', borderRight: '2px solid currentColor', color: card.tone, transform: 'rotate(45deg)' }} />
                    </span>
                  </div>
                  <h2 style={{ margin: '0 0 6px', color: '#fff', fontSize: '1.02rem', lineHeight: 1.35 }}>{card.title}</h2>
                  <p style={{ margin: '0 0 10px', color: '#f4b860', fontSize: '0.78rem', fontWeight: 650 }}>{card.subtitle}</p>
                  <p style={{ margin: 0, color: 'var(--cmf-sub)', fontSize: '0.82rem', lineHeight: 1.58 }}>{card.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto', paddingTop: '14px' }}>
                    {card.tags.map((tag, i) => (
                      <span key={i} style={{ border: '1px solid var(--cmf-border)', borderRadius: '6px', padding: '4px 7px', background: 'rgba(255,255,255,0.035)', color: 'var(--cmf-sub)', fontSize: '0.7rem', lineHeight: 1 }}>{tag}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Detail */}
        <aside style={{
          position: 'sticky', top: '72px',
          border: '1px solid var(--cmf-border)', borderRadius: '8px', padding: '16px',
          background: `linear-gradient(180deg, color-mix(in srgb, ${active.tone} 12%, transparent), transparent 36%), var(--cmf-panel-strong)`,
          boxShadow: '0 20px 70px rgba(0,0,0,0.22)',
        }}>
          <div style={{ height: '128px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.12)', marginBottom: '16px', background: active.swatch }} />
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', color: 'var(--cmf-sub)', fontSize: '0.75rem', marginBottom: '10px' }}>
            <span style={{ border: '1px solid var(--cmf-border)', borderRadius: '6px', padding: '5px 8px', background: 'rgba(255,255,255,0.035)' }}>{active.label}</span>
            <span style={{ border: '1px solid var(--cmf-border)', borderRadius: '6px', padding: '5px 8px', background: 'rgba(255,255,255,0.035)' }}>{active.subtitle}</span>
          </div>
          <h2 style={{ margin: 0, color: '#fff', fontSize: '1.5rem', lineHeight: 1.25 }}>{active.title}</h2>
          <p style={{ margin: '12px 0 0', color: 'var(--cmf-sub)', lineHeight: 1.68, fontSize: '0.9rem' }}>{active.description}</p>

          <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid var(--cmf-border)' }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '0.83rem', color: `color-mix(in srgb, ${active.tone} 72%, white 18%)` }}>材料与关键词</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              {active.materials.map((m, i) => (
                <span key={i} style={{ border: '1px solid var(--cmf-border)', borderRadius: '6px', padding: '4px 7px', background: 'rgba(255,255,255,0.035)', color: 'var(--cmf-sub)', fontSize: '0.7rem', lineHeight: 1 }}>{m}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid var(--cmf-border)' }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '0.83rem', color: `color-mix(in srgb, ${active.tone} 72%, white 18%)` }}>课程执行路径</h3>
            <ol style={{ margin: 0, paddingLeft: '20px', color: 'var(--cmf-sub)', fontSize: '0.84rem', lineHeight: 1.7 }}>
              {active.steps.map((s, i) => <li key={i} style={{ marginTop: i > 0 ? '7px' : 0 }}>{s}</li>)}
            </ol>
          </div>

          <div style={{ marginTop: '18px', padding: '12px', border: `1px solid color-mix(in srgb, ${active.tone} 32%, white 6%)`, borderRadius: '8px', background: `color-mix(in srgb, ${active.tone} 10%, transparent)` }}>
            <span style={{ display: 'block', marginBottom: '6px', color: '#fff', fontSize: '0.76rem', fontWeight: 760 }}>输出目标</span>
            <p style={{ margin: 0, color: 'var(--cmf-sub)', fontSize: '0.84rem', lineHeight: 1.58 }}>{active.outcome}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '18px' }}>
            <a href={active.sourceUrl} target="_blank" rel="noopener noreferrer"
              style={{ minHeight: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: `1px solid color-mix(in srgb, ${active.tone} 62%, white 10%)`, borderRadius: '6px', background: `color-mix(in srgb, ${active.tone} 18%, rgba(255,255,255,0.04))`, color: '#fff', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 720, transition: 'all 0.2s ease' }}>
              ProFabX 源页面
            </a>
            <a href={active.localUrl} target="_blank" rel="noopener noreferrer"
              style={{ minHeight: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--cmf-border)', borderRadius: '6px', background: 'rgba(255,255,255,0.04)', color: '#fff', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 720, transition: 'all 0.2s ease' }}>
              本地课程文档
            </a>
          </div>
        </aside>
      </section>

      <style>{`
        :root {
          --cmf-bg: #08090c;
          --cmf-panel: rgba(19, 22, 28, 0.82);
          --cmf-panel-strong: rgba(27, 31, 39, 0.92);
          --cmf-border: rgba(255, 255, 255, 0.08);
          --cmf-text: #f5f5f7;
          --cmf-sub: #a6adbb;
          --cmf-muted: #737b8c;
        }
        .cmf-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 18% 12%, rgba(0, 47, 167, 0.22), transparent 34rem),
            radial-gradient(circle at 86% 18%, rgba(196, 122, 60, 0.15), transparent 30rem),
            linear-gradient(145deg, #08090c 0%, #10131a 48%, #0a0b10 100%);
          color: var(--cmf-text);
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          padding-bottom: 4rem;
        }
        .cmf-page * { box-sizing: border-box; }
        .cmf-card:hover { transform: translateY(-2px); }
        @media (max-width: 1080px) {
          .cmf-workspace { grid-template-columns: 1fr !important; }
          .cmf-workspace > aside { position: static !important; }
        }
        @media (max-width: 720px) {
          .cmf-intro > div { grid-template-columns: 1fr !important; }
          .cmf-intro > div > div:last-child { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </div>
  );
}
