---
layout: false
---

<script setup>
import { onMounted } from 'vue'

const filters = [
  { id: 'all', label: '全部' },
  { id: 'material', label: '材料' },
  { id: 'additive', label: '增材' },
  { id: 'subtractive', label: '减材' },
  { id: 'forming', label: '成型' },
  { id: 'surface', label: '表面' },
  { id: 'workflow', label: '工作流' }
]

const cards = [
  {
    id: 'engineering-polymers',
    category: 'material',
    label: '材料',
    title: '工程塑料族',
    subtitle: '从外观壳体到耐磨功能件',
    description: '以 ABS、PC、POM、PEEK、TPU 和尼龙为核心，建立课程中最常用的塑料材料选择逻辑。',
    swatch: 'linear-gradient(135deg, #312E81, #3B82F6 52%, #F8FAFC)',
    tone: '#3B82F6',
    tags: ['塑料基材', '强度/韧性', '触感'],
    materials: ['ABS', 'PC', 'POM', 'PEEK', 'TPU', '尼龙'],
    steps: ['按刚性、韧性、耐温和耐磨建立材料表', '区分展示件、结构件和运动件需求', '选择匹配的打印、CNC 或注塑路径', '记录材料成本、可得性和表面处理兼容性'],
    outcome: '让学生先判断材料角色，再选择制造工艺。',
    sourceUrl: 'https://profabx.com/prototype/material/polymers/peek/',
    localUrl: '/docs/courses/fab-course/doc/0manage/material.html'
  },
  {
    id: 'metal-materials',
    category: 'material',
    label: '材料',
    title: '金属材料族',
    subtitle: '强度、散热与真实工业质感',
    description: '围绕铝、铜、钛、不锈钢等金属基材，理解重量、强度、导热、导电和表面处理之间的取舍。',
    swatch: 'linear-gradient(135deg, #111827, #94A3B8 46%, #B45309)',
    tone: '#94A3B8',
    tags: ['铝合金', '铜合金', '钛合金'],
    materials: ['铝合金', '铜合金', '钛合金', '不锈钢'],
    steps: ['按重量、强度、散热和成本建立选择标准', '匹配 CNC、钣金、SLM 或铸造路径', '预留阳极、拉丝、喷砂或电镀余量', '用真实样板比对颜色、反光和触感'],
    outcome: '把金属 CMF 训练落实到结构和制造约束。',
    sourceUrl: 'https://profabx.com/prototype/material/metal/al/',
    localUrl: '/docs/courses/fab-course/doc/8CNC_manufacture/cnctype.html'
  },
  {
    id: 'composite-materials',
    category: 'material',
    label: '材料',
    title: '纤维增强复合材料',
    subtitle: '轻量化、刚度与结构方向性',
    description: '以 PA-CF、PA-GF、ABS-GF 等复合材料建立轻量化原型中的强度方向、层纹、磨耗和加工风险判断。',
    swatch: 'linear-gradient(135deg, #030712, #16A34A 45%, #334155)',
    tone: '#16A34A',
    tags: ['PA-CF', 'PA-GF', '轻量化'],
    materials: ['PA-CF', 'PA-GF', 'ABS-GF', '碳纤维纹理'],
    steps: ['识别主受力方向与各向异性风险', '选择连续纤维、短纤维或粉末烧结路径', '处理喷嘴磨耗、收缩和表面粗糙度', '通过夹具或实测验证刚度收益'],
    outcome: '让复合材料不只停留在外观纹理，而成为结构决策工具。',
    sourceUrl: 'https://profabx.com/prototype/material/componsites/pacf/',
    localUrl: '/docs/courses/fab-course/doc/0manage/material.html'
  },
  {
    id: 'sandtable',
    category: 'workflow',
    label: '工作流',
    title: '数字沙盘原型',
    subtitle: '从概念陈列到交互展示',
    description: '面向课程展示、展厅模型和产品路演的综合原型路径，强调模型比例、模块拆分、灯光/交互与可维护结构。',
    swatch: 'linear-gradient(135deg, #002FA7, #5E6AD2 58%, #F4B860)',
    tone: '#5E6AD2',
    tags: ['展示模型', '结构拆分', '交互陈列'],
    materials: ['亚克力', '树脂', '铝型材', '灯带'],
    steps: ['定义展示场景与观察距离', '拆分外壳、底座、灯光与控制模块', '建立比例模型并完成装配校验', '输出维护清单与展示说明'],
    outcome: '形成可巡展的高完成度原型，而不是单次拍摄用样机。',
    sourceUrl: 'https://profabx.com/prototype/sandtable/',
    localUrl: '/docs/courses/fab-course/doc/1projectmanage/Assessment1.html'
  },
  {
    id: 'digital-fabrication',
    category: 'workflow',
    label: '工作流',
    title: '探索数字制造',
    subtitle: '从设计文件到快速打样闭环',
    description: '将 CAD、材料选择、工艺约束、后处理与复盘文档串联成一个可重复的课程流程，适合 CMF 小组项目管理。',
    swatch: 'linear-gradient(135deg, #111827, #2DD4BF 52%, #F59E0B)',
    tone: '#2DD4BF',
    tags: ['FabLab', '课程流程', '复盘文档'],
    materials: ['PLA', 'ABS', '亚克力', '木材'],
    steps: ['建立需求与造型边界', '选择低风险快速工艺完成第一版', '通过 CMF 样板校正颜色、质感与结构', '沉淀 BOM、工艺参数与失败样本'],
    outcome: '让学生把工具使用转化成可迁移的工程决策能力。',
    sourceUrl: 'https://profabx.com/prototype/exploredigitalfabrication/',
    localUrl: '/docs/courses/fab-course/'
  },
  {
    id: 'fdm',
    category: 'additive',
    label: '增材',
    title: 'FDM 熔融沉积',
    subtitle: '低成本结构验证与快速迭代',
    description: '适合课程早期体量、装配、握持和机构干涉验证。重点在层纹方向、支撑策略、壁厚和嵌件预留。',
    swatch: 'linear-gradient(135deg, #3F51B5, #2563EB 55%, #D1D5DB)',
    tone: '#2563EB',
    tags: ['结构草模', '低成本', '装配验证'],
    materials: ['PLA', 'ABS', 'ASA', 'TPU', 'PA-CF'],
    steps: ['按受力方向确定打印姿态', '预留螺母、热熔铜柱与走线槽', '用 0.2mm 层高完成首版验证', '对关键面进行打磨、补土或喷漆'],
    outcome: '快速得到可握持、可装配、可测试的第一轮样机。',
    sourceUrl: 'https://profabx.com/prototype/material/polymers/asa/',
    localUrl: '/docs/courses/fab-course/doc/3_3dprinter/2.FDM3Dprintingbackground.html'
  },
  {
    id: 'lcd-dlp',
    category: 'additive',
    label: '增材',
    title: 'LCD / DLP 光固化',
    subtitle: '细节、透明件与视觉样件',
    description: '适合高精度外观件、小型结构、透明罩、CMF 质感样板。课程中重点训练支撑痕迹、清洗固化和表面处理。',
    swatch: 'linear-gradient(135deg, #6366F1, #A78BFA 55%, #F8FAFC)',
    tone: '#A78BFA',
    tags: ['精细表面', '透明树脂', '视觉样件'],
    materials: ['标准树脂', '透明树脂', '韧性树脂'],
    steps: ['拆分可见面与支撑面', '设置排液孔和空腔壁厚', '清洗、二次固化并修整支撑痕迹', '通过喷涂或抛光形成最终质感'],
    outcome: '让设计意图在比例、边缘和表面细节上被准确表达。',
    sourceUrl: 'https://profabx.com/prototype/manufacture/add/lcddlp/',
    localUrl: '/docs/courses/fab-course/doc/3_3dprinter/5.SLAbackground.html'
  },
  {
    id: 'sls-mjf',
    category: 'additive',
    label: '增材',
    title: 'SLS / MJF 尼龙烧结',
    subtitle: '功能件、小批量与复杂结构',
    description: '适合卡扣、铰链、轻量化壳体和耐冲击结构。课程中用它连接外观样机与功能样机。',
    swatch: 'linear-gradient(135deg, #111827, #64748B 58%, #E5E7EB)',
    tone: '#64748B',
    tags: ['功能样机', '尼龙', '小批量'],
    materials: ['PA12', 'PA11', 'TPU', 'PA-CF'],
    steps: ['按功能面定义关键公差', '为粉末清理预留孔位与开口', '验证卡扣、铰链、耐冲击结构', '染色、喷砂或浸渗提升外观一致性'],
    outcome: '把 CMF 样件推进到接近真实使用场景的功能验证。',
    sourceUrl: 'https://profabx.com/prototype/material/polymers/pa/',
    localUrl: '/docs/courses/fab-course/doc/3_3dprinter/7.hpmjf.html'
  },
  {
    id: 'cnc',
    category: 'subtractive',
    label: '减材',
    title: 'CNC 精密加工',
    subtitle: '金属质感与高精度结构',
    description: '适合铝合金外壳、旋钮、支架、散热件和高精度装配面。关注刀路可达性、倒角、纹理方向和后处理余量。',
    swatch: 'linear-gradient(135deg, #111827, #94A3B8 52%, #D97706)',
    tone: '#94A3B8',
    tags: ['铝合金', '高精度', '真实材质'],
    materials: ['铝合金', '铜合金', '钛合金', 'POM', '亚克力'],
    steps: ['把外观面和基准面分离管理', '约束内角半径和刀具可达性', '预留阳极、喷砂或抛光余量', '用装配件复核孔位和配合公差'],
    outcome: '建立学生对真实材料、加工限制与工业质感之间关系的判断力。',
    sourceUrl: 'https://profabx.com/en/prototype/manufacture/substractive/cnc/',
    localUrl: '/docs/courses/fab-course/doc/8CNC_manufacture/cnctype.html'
  },
  {
    id: 'sheet-metal',
    category: 'forming',
    label: '成型',
    title: '钣金折弯',
    subtitle: '轻量结构与工业外壳',
    description: '适合底盘、支架、防护罩、电控盒和课程机器人框架。关键是折弯半径、展开图、孔边距和表面喷涂策略。',
    swatch: 'linear-gradient(135deg, #1F2937, #71717A 60%, #4ADE80)',
    tone: '#71717A',
    tags: ['支架', '外壳', '展开图'],
    materials: ['冷轧板', '镀锌板', '铝板', '不锈钢'],
    steps: ['用折弯线定义结构逻辑', '检查孔边距和干涉风险', '输出展开图与折弯顺序', '结合喷粉、拉丝或阳极完成 CMF'],
    outcome: '让原型从塑料打印件升级为更接近工业装配的结构件。',
    sourceUrl: 'https://profabx.com/prototype/material/metal/al/',
    localUrl: '/docs/courses/fab-course/doc/2cad/fusion360-sheetmetal.html'
  },
  {
    id: 'injection',
    category: 'forming',
    label: '成型',
    title: '注塑与硅胶覆膜',
    subtitle: '量产思维与软硬复合手感',
    description: '适合讲解拔模、分型线、缩水、嵌件与软胶包覆。课程不只做样机，还要理解未来量产中的设计取舍。',
    swatch: 'linear-gradient(135deg, #3F51B5, #14B8A6 55%, #F97316)',
    tone: '#14B8A6',
    tags: ['量产判断', '拔模', '软硬复合'],
    materials: ['ABS', 'PC', 'PP', 'TPU', '硅胶', 'PU'],
    steps: ['标注拔模方向与分型线', '检查壁厚、筋位和缩水风险', '用软胶区域定义触感与防滑性能', '建立样机成本与模具成本对照'],
    outcome: '把 CMF 从视觉选择推进到结构、触感和制造经济性的综合决策。',
    sourceUrl: 'https://profabx.com/prototype/material/polymers/tpu/',
    localUrl: '/docs/courses/fab-course/doc/9MOLD/mold.html'
  },
  {
    id: 'surface-postprocess',
    category: 'surface',
    label: '表面',
    title: '喷砂、抛光与拉丝',
    subtitle: '从粗糙样机到可展示样板',
    description: '统一管理表面粗糙度、反光、边缘倒角和触感。适合建立 CMF 样板册，让同一造型呈现多种质感。',
    swatch: 'linear-gradient(135deg, #0F172A, #CBD5E1 48%, #F59E0B)',
    tone: '#CBD5E1',
    tags: ['质感控制', '样板册', '边缘处理'],
    materials: ['铝合金', '不锈钢', '树脂', '亚克力'],
    steps: ['记录基材、砂号、压力和处理时长', '控制可见边的倒角一致性', '对比哑光、半哑光与镜面效果', '将样板编号并归档到课程材料库'],
    outcome: '让学生能用参数描述质感，而不是只说“高级”或“好看”。',
    sourceUrl: 'https://profabx.com/prototype/postprocess/postprocess/',
    localUrl: '/docs/courses/fab-course/doc/3_3dprinter/8.postprocess.html'
  },
  {
    id: 'conductive',
    category: 'surface',
    label: '表面',
    title: '导电与功能涂层',
    subtitle: 'CMF 与电子功能的交界',
    description: '适合把外观件、电磁屏蔽、触摸电极和结构件连接起来。课程中可作为材料、电子和产品体验的跨学科案例。',
    swatch: 'linear-gradient(135deg, #020617, #C084FC 48%, #22C55E)',
    tone: '#C084FC',
    tags: ['功能表面', '触摸电极', '屏蔽'],
    materials: ['导电漆', '铜箔', '树脂件', '塑料壳体'],
    steps: ['区分装饰层与功能层', '规划接地、触摸或屏蔽路径', '用遮蔽和分区控制涂层边界', '完成导通、附着力和耐磨测试'],
    outcome: '把 CMF 训练从外观审美扩展到功能材料应用。',
    sourceUrl: 'https://profabx.com/prototype/postprocess/functional/conductive/',
    localUrl: '/docs/courses/fab-course/doc/4electric_design/basicknowledge.html'
  }
]

onMounted(() => {
  const filterbar = document.getElementById('cmf-filterbar')
  const grid = document.getElementById('cmf-card-grid')
  const detail = document.getElementById('cmf-detail')
  const cardCount = document.getElementById('cmf-card-count')
  if (!filterbar || !grid || !detail) return

  let activeFilter = 'all'
  let activeId = cards[0].id

  if (cardCount) cardCount.textContent = String(cards.length)

  function getVisibleCards() {
    if (activeFilter === 'all') return cards
    return cards.filter(card => card.category === activeFilter)
  }

  function getActiveCard() {
    return cards.find(card => card.id === activeId) || getVisibleCards()[0] || cards[0]
  }

  function renderFilters() {
    filterbar.innerHTML = filters.map(filter => `
      <button
        type="button"
        class="cmf-filter${filter.id === activeFilter ? ' active' : ''}"
        data-filter="${filter.id}"
      >${filter.label}</button>
    `).join('')

    filterbar.querySelectorAll('[data-filter]').forEach(button => {
      button.addEventListener('click', () => {
        activeFilter = button.dataset.filter || 'all'
        const next = getVisibleCards()[0]
        if (next) activeId = next.id
        render()
      })
    })
  }

  function renderCards() {
    const active = getActiveCard()
    grid.innerHTML = getVisibleCards().map(card => `
      <article
        class="prototype-card${card.id === active.id ? ' active' : ''}"
        style="--tone: ${card.tone}"
        tabindex="0"
        data-card-id="${card.id}"
      >
        <div class="card-swatch" style="background: ${card.swatch}" aria-hidden="true"></div>
        <div class="card-head">
          <span class="card-label">${card.label}</span>
          <span class="card-mark" aria-hidden="true"></span>
        </div>
        <h2>${card.title}</h2>
        <p class="card-subtitle">${card.subtitle}</p>
        <p class="card-desc">${card.description}</p>
        <div class="card-tags">
          ${card.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
      </article>
    `).join('')

    grid.querySelectorAll('[data-card-id]').forEach(cardEl => {
      const activate = () => {
        activeId = cardEl.dataset.cardId || activeId
        render()
      }
      cardEl.addEventListener('click', activate)
      cardEl.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          activate()
        }
      })
    })
  }

  function renderDetail() {
    const card = getActiveCard()
    detail.style.setProperty('--tone', card.tone)
    detail.innerHTML = `
      <div class="detail-swatch" style="background: ${card.swatch}" aria-hidden="true"></div>
      <div class="detail-meta">
        <span>${card.label}</span>
        <span>${card.subtitle}</span>
      </div>
      <h2>${card.title}</h2>
      <p>${card.description}</p>

      <div class="detail-block">
        <h3>材料与关键词</h3>
        <div class="detail-chip-group">
          ${card.materials.map(material => `<span>${material}</span>`).join('')}
        </div>
      </div>

      <div class="detail-block">
        <h3>课程执行路径</h3>
        <ol class="detail-steps">
          ${card.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>

      <div class="detail-result">
        <span>输出目标</span>
        <p>${card.outcome}</p>
      </div>

      <div class="detail-actions">
        <a href="${card.sourceUrl}" target="_blank" rel="noopener noreferrer" class="detail-action primary">
          ProFabX 源页面
        </a>
        <a href="${card.localUrl}" class="detail-action">
          本地课程文档
        </a>
      </div>
    `
  }

  function render() {
    renderFilters()
    renderCards()
    renderDetail()
  }

  render()
})
</script>

<div class="cmf-prototype-page">
<header class="cmf-topbar">
<a href="/" class="cmf-brand" aria-label="返回 SophiGo 首页">
<img class="cmf-logo" src="/logo.png" alt="SophiGo Logo" />
<span>SophiGo</span>
</a>
<nav class="cmf-nav" aria-label="课程导航">
<a href="/docs/">首页</a>
<a href="/docs/courses/fab-course/">Fab 课程</a>
<a href="/docs/courses/ai-basics/">AI 基础应用</a>
<a href="/docs/courses/mobile-robot/">移动机器人</a>
<a href="/docs/courses/cmf/" class="active">CMF 应用</a>
<a href="/docs/news/index.html">探讨</a>
</nav>
</header>
<main class="cmf-shell">
<section class="cmf-intro" aria-labelledby="cmf-title">
<div>
<p class="cmf-kicker">Prototype CMF Matrix</p>
<h1 id="cmf-title">数字化快速原型与材料工艺卡片库</h1>
<p class="cmf-lead">以 ProFabX Prototype 的材料、制造、后处理与数字制造内容为骨架，整理成 CMF 课程可直接使用的工艺选择与样机决策入口。</p>
</div>
<div class="cmf-metrics" aria-label="CMF 内容摘要">
<div><strong id="cmf-card-count">13</strong><span>知识卡片</span></div>
<div><strong>6</strong><span>工艺域</span></div>
<div><strong>2</strong><span>学习入口</span></div>
</div>
</section>
<section class="cmf-workspace" aria-label="CMF 卡片工作区">
<div class="cmf-library">
<nav class="cmf-filterbar" id="cmf-filterbar" aria-label="工艺类别筛选"></nav>
<div class="cmf-card-grid" id="cmf-card-grid"></div>
</div>
<aside class="cmf-detail" id="cmf-detail" style="--tone: #3B82F6" aria-label="当前卡片详情"></aside>
</section>
</main>
</div>

<style>
:root {
  --cmf-bg: #08090c;
  --cmf-panel: rgba(19, 22, 28, 0.82);
  --cmf-panel-strong: rgba(27, 31, 39, 0.92);
  --cmf-border: rgba(255, 255, 255, 0.08);
  --cmf-text: #f5f5f7;
  --cmf-sub: #a6adbb;
  --cmf-muted: #737b8c;
  --cmf-blue: #002FA7;
  --cmf-copper: #c47a3c;
  --cmf-mint: #2dd4bf;
  --cmf-amber: #f4b860;
}

html,
body {
  margin: 0;
  background: var(--cmf-bg);
}

.cmf-prototype-page {
  min-height: 100vh;
  color: var(--cmf-text);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  background:
    radial-gradient(circle at 18% 12%, rgba(0, 47, 167, 0.22), transparent 34rem),
    radial-gradient(circle at 86% 18%, rgba(196, 122, 60, 0.15), transparent 30rem),
    linear-gradient(145deg, #08090c 0%, #10131a 48%, #0a0b10 100%);
}

.cmf-prototype-page * {
  box-sizing: border-box;
}

.cmf-topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
  border-bottom: 1px solid var(--cmf-border);
  background: rgba(8, 9, 12, 0.82);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.cmf-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--cmf-text);
  text-decoration: none;
  font-size: 0.86rem;
  font-weight: 650;
}

.cmf-logo {
  width: 26px;
  height: 26px;
  object-fit: contain;
}

.cmf-nav {
  display: flex;
  align-items: center;
  gap: 1.35rem;
}

.cmf-nav a {
  color: var(--cmf-sub);
  text-decoration: none;
  font-size: 0.86rem;
  font-weight: 600;
  transition: color 0.2s ease;
}

.cmf-nav a:hover,
.cmf-nav a.active {
  color: var(--cmf-text);
}

.cmf-shell {
  width: min(1440px, 100%);
  margin: 0 auto;
  padding: 28px 24px 36px;
}

.cmf-intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 24px;
  align-items: end;
  margin-bottom: 24px;
}

.cmf-kicker {
  margin: 0 0 10px;
  color: var(--cmf-mint);
  font-size: 0.74rem;
  font-weight: 750;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.cmf-intro h1 {
  margin: 0;
  max-width: 780px;
  color: var(--cmf-text);
  font-size: 2.35rem;
  line-height: 1.14;
  letter-spacing: 0;
}

.cmf-lead {
  max-width: 760px;
  margin: 14px 0 0;
  color: var(--cmf-sub);
  font-size: 0.98rem;
  line-height: 1.75;
}

.cmf-metrics {
  display: grid;
  grid-template-columns: repeat(3, 96px);
  gap: 10px;
}

.cmf-metrics div {
  min-height: 72px;
  padding: 12px;
  border: 1px solid var(--cmf-border);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.035);
}

.cmf-metrics strong {
  display: block;
  font-size: 1.55rem;
  line-height: 1;
  color: #fff;
}

.cmf-metrics span {
  display: block;
  margin-top: 8px;
  color: var(--cmf-muted);
  font-size: 0.72rem;
}

.cmf-workspace {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 420px);
  gap: 18px;
  align-items: start;
}

.cmf-library,
.cmf-detail {
  border: 1px solid var(--cmf-border);
  border-radius: 8px;
  background: var(--cmf-panel);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.22);
}

.cmf-library {
  padding: 16px;
}

.cmf-filterbar {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 14px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--cmf-border);
}

.cmf-filter {
  height: 34px;
  padding: 0 12px;
  flex: 0 0 auto;
  border: 1px solid var(--cmf-border);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.035);
  color: var(--cmf-sub);
  font: inherit;
  font-size: 0.8rem;
  font-weight: 650;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.cmf-filter:hover,
.cmf-filter.active {
  color: #fff;
  border-color: rgba(244, 184, 96, 0.42);
  background: rgba(244, 184, 96, 0.12);
}

.cmf-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
}

.prototype-card {
  min-height: 276px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid var(--cmf-border);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.032);
  cursor: pointer;
  outline: none;
  transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
}

.prototype-card:hover,
.prototype-card:focus-visible,
.prototype-card.active {
  transform: translateY(-2px);
  border-color: color-mix(in srgb, var(--tone) 58%, white 12%);
  background: rgba(255, 255, 255, 0.052);
  box-shadow: 0 14px 42px color-mix(in srgb, var(--tone) 18%, transparent);
}

.card-swatch {
  height: 72px;
  border-radius: 6px;
  margin-bottom: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.card-label {
  color: var(--tone);
  font-size: 0.72rem;
  font-weight: 760;
}

.card-mark {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--tone) 60%, white 12%);
  position: relative;
}

.card-mark::before {
  content: "";
  position: absolute;
  inset: 5px;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  color: var(--tone);
  transform: rotate(45deg);
}

.prototype-card h2 {
  margin: 0 0 6px;
  color: #fff;
  font-size: 1.02rem;
  line-height: 1.35;
  letter-spacing: 0;
}

.card-subtitle {
  margin: 0 0 10px;
  color: var(--cmf-amber);
  font-size: 0.78rem;
  font-weight: 650;
}

.card-desc {
  margin: 0;
  color: var(--cmf-sub);
  font-size: 0.82rem;
  line-height: 1.58;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 14px;
}

.card-tags span,
.detail-chip-group span {
  border: 1px solid var(--cmf-border);
  border-radius: 6px;
  padding: 4px 7px;
  background: rgba(255, 255, 255, 0.035);
  color: var(--cmf-sub);
  font-size: 0.7rem;
  line-height: 1;
}

.cmf-detail {
  position: sticky;
  top: 72px;
  padding: 16px;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--tone) 12%, transparent), transparent 36%),
    var(--cmf-panel-strong);
}

.detail-swatch {
  height: 128px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 16px;
}

.detail-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  color: var(--cmf-sub);
  font-size: 0.75rem;
  margin-bottom: 10px;
}

.detail-meta span {
  border: 1px solid var(--cmf-border);
  border-radius: 6px;
  padding: 5px 8px;
  background: rgba(255, 255, 255, 0.035);
}

.cmf-detail h2 {
  margin: 0;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.25;
  letter-spacing: 0;
}

.cmf-detail > p {
  margin: 12px 0 0;
  color: var(--cmf-sub);
  line-height: 1.68;
  font-size: 0.9rem;
}

.detail-block {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid var(--cmf-border);
}

.detail-block h3 {
  margin: 0 0 10px;
  color: color-mix(in srgb, var(--tone) 72%, white 18%);
  font-size: 0.83rem;
  letter-spacing: 0;
}

.detail-chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.detail-steps {
  margin: 0;
  padding-left: 20px;
  color: var(--cmf-sub);
  font-size: 0.84rem;
  line-height: 1.7;
}

.detail-steps li + li {
  margin-top: 7px;
}

.detail-result {
  margin-top: 18px;
  padding: 12px;
  border: 1px solid color-mix(in srgb, var(--tone) 32%, white 6%);
  border-radius: 8px;
  background: color-mix(in srgb, var(--tone) 10%, transparent);
}

.detail-result span {
  display: block;
  margin-bottom: 6px;
  color: #fff;
  font-size: 0.76rem;
  font-weight: 760;
}

.detail-result p {
  margin: 0;
  color: var(--cmf-sub);
  font-size: 0.84rem;
  line-height: 1.58;
}

.detail-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 18px;
}

.detail-action {
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--cmf-border);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 720;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.detail-action.primary,
.detail-action:hover {
  border-color: color-mix(in srgb, var(--tone) 62%, white 10%);
  background: color-mix(in srgb, var(--tone) 18%, rgba(255, 255, 255, 0.04));
}

@media (max-width: 1080px) {
  .cmf-intro,
  .cmf-workspace {
    grid-template-columns: 1fr;
  }

  .cmf-metrics {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .cmf-detail {
    position: static;
  }
}

@media (max-width: 720px) {
  .cmf-topbar {
    gap: 1rem;
    justify-content: flex-start;
    overflow-x: auto;
    padding: 0 16px;
  }

  .cmf-brand,
  .cmf-nav {
    flex: 0 0 auto;
  }

  .cmf-nav {
    gap: 0.9rem;
  }

  .cmf-nav a {
    white-space: nowrap;
  }

  .cmf-shell {
    padding: 20px 14px 28px;
  }

  .cmf-intro h1 {
    font-size: 1.72rem;
  }

  .cmf-lead {
    font-size: 0.9rem;
  }

  .cmf-card-grid {
    grid-template-columns: 1fr;
  }

  .cmf-metrics {
    grid-template-columns: 1fr;
  }

  .detail-actions {
    grid-template-columns: 1fr;
  }
}
</style>
