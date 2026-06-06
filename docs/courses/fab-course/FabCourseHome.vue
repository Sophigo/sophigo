<template>
  <div class="fab-portal">
    <!-- Ambient Background Lighting -->
    <div class="ambient-glow bg-glow-1"></div>
    <div class="ambient-glow bg-glow-2"></div>
    <div class="ambient-glow bg-glow-3"></div>

    <!-- Apple-style Glassmorphic Navigation Bar -->
    <header class="portal-nav">
      <div class="nav-container">
        <a href="/docs/" class="nav-brand">
          <span class="brand-dot"></span>
          SophiGo Docs <span class="brand-sub">Fab 课程</span>
        </a>
        <nav class="nav-links">
          <a href="/docs/courses/ai-basics/">AI 基础应用</a>
          <a href="/docs/courses/mobile-robot/">移动机器人</a>
          <a href="/docs/courses/cmf/">CMF 规范</a>
          <a href="/" class="btn-back">返回主站</a>
        </nav>
      </div>
    </header>

    <main class="portal-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="badge">FAB LAB</div>
        <h1 class="hero-title">
          数字化快速原型 <span class="text-gradient">Digital Fabrication</span>
        </h1>
        <p class="hero-subtitle">
          依托 Fab Lab (数字化制造实验室)，带您深入了解如何通过一系列开源软硬件工具和数字制造设备，实现从“想法”到“原型”的快速迭代与开发。
        </p>
        <div class="hero-actions">
          <a href="#lab-management" class="btn-primary">开始探索</a>
          <a href="#tutorials-grid" class="btn-secondary">核心教程 (1-14)</a>
        </div>
      </section>

      <!-- Category Navigation Tabs -->
      <div class="sticky-tabs">
        <div class="tabs-container">
          <a href="#lab-management" class="tab-link">🔬 实验室基础</a>
          <a href="#tutorials-grid" class="tab-link">🛠️ 核心教程 (1-14)</a>
          <a href="#class-archives" class="tab-link">🎓 创新项目与归档</a>
          <a href="#frontier-tech" class="tab-link">🔮 前沿探索</a>
        </div>
      </div>

      <!-- 🔬 1. Lab Management Section -->
      <section id="lab-management" class="section-container">
        <div class="section-header">
          <span class="section-badge">00</span>
          <h2>实验室管理与基础</h2>
          <p>在进入实验室进行物理制造之前，必须熟悉实验室的基本运作规范与安全守则。</p>
        </div>

        <div class="lab-cards-grid">
          <div v-for="item in labItems" :key="item.title" class="glass-card lab-card">
            <div class="card-icon" v-html="item.icon"></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <div class="card-footer">
              <button @click="openDocDrawer(item.link, item.title)" class="btn-card-read">快捷阅读</button>
              <a :href="item.link" class="btn-card-link" target="_blank">新标签打开</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 🛠️ 2. Core Tutorials Grid (Interactive Correlation Map) -->
      <section id="tutorials-grid" class="section-container relative-container">
        <div class="section-header">
          <span class="section-badge">01 - 14</span>
          <h2>核心课程教程</h2>
          <p>
            涵盖项目管理、计算机辅助设计 (CAD)、增减材制造、PCB 电子制造、物联网和人机交互等完整链路。
            <br />
            <span class="glow-tip">💡 鼠标悬停在卡片上，可查看各模块之间的技术关联。</span>
          </p>
        </div>

        <!-- SVG Connection Overlay -->
        <div class="svg-connections-container" id="svg-container">
          <svg class="connections-svg" ref="svgElement">
            <defs>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#00f2fe" />
                <stop offset="100%" stop-color="#8a2be2" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <!-- Glowing Bezier Paths -->
            <path
              v-for="(line, idx) in activeLines"
              :key="idx"
              :d="line.d"
              stroke="url(#neonGradient)"
              stroke-width="2.5"
              fill="none"
              filter="url(#glow)"
              class="connection-path"
            />
          </svg>
        </div>

        <!-- Grid Container -->
        <div class="tutorials-grid-container" id="tutorials-container">
          <div
            v-for="tut in tutorials"
            :key="tut.id"
            :id="'card-' + tut.id"
            class="glass-card tutorial-card"
            :class="{
              'card-hovered': hoveredCardId === tut.id,
              'card-related': isRelated(tut.id),
              'card-dimmed': hoveredCardId !== null && hoveredCardId !== tut.id && !isRelated(tut.id)
            }"
            @mouseenter="onCardMouseEnter(tut.id)"
            @mouseleave="onCardMouseLeave"
          >
            <div class="tut-header">
              <span class="tut-num">{{ String(tut.id).padStart(2, '0') }}</span>
              <div class="tut-icon" v-html="tut.icon"></div>
            </div>
            
            <h3 class="tut-title">{{ tut.title }}</h3>
            <p class="tut-desc">{{ tut.desc }}</p>

            <!-- Links list -->
            <div class="tut-links-container">
              <div class="tut-links-heading">核心子章节：</div>
              <ul class="tut-sublinks">
                <li v-for="link in tut.links" :key="link.title">
                  <a @click.prevent="openDocDrawer(link.path, link.title)" href="#" class="sublink-item">
                    {{ link.title }}
                  </a>
                </li>
              </ul>
            </div>

            <!-- Action buttons -->
            <div class="tut-actions">
              <button @click="openDocDrawer(tut.assessment, tut.title + ' - 评估指标')" class="btn-tut-read">
                📋 评估指标
              </button>
              <a :href="tut.assessment" class="btn-tut-open" target="_blank">
                全屏 ↗
              </a>
            </div>

            <!-- Highlight visual tags -->
            <div class="tut-relation-badge" v-if="hoveredCardId === tut.id">
              ACTIVE
            </div>
            <div class="tut-relation-badge related" v-else-if="isRelated(tut.id)">
              RELATED
            </div>
          </div>
        </div>
      </section>

      <!-- 🎓 3. Class Archives (FABS) Section -->
      <section id="class-archives" class="section-container">
        <div class="section-header">
          <span class="section-badge">FABS</span>
          <h2>年度创新项目与班级档案</h2>
          <p>历年来 NexMaker Academy、浙江大学设计工程 (ZJU) 以及 宁波诺丁汉大学 (UNNC) 课程的学生成果与项目归档。</p>
        </div>

        <div class="archive-groups">
          <div v-for="group in archiveGroups" :key="group.title" class="archive-group-block glass-card">
            <h3>{{ group.title }}</h3>
            <div class="archive-subgrids">
              <div v-for="sub in group.items" :key="sub.name" class="archive-sub-card">
                <h4>{{ sub.name }}</h4>
                <div class="archive-sub-links">
                  <span v-for="link in sub.links" :key="link.title" class="archive-link-wrapper">
                    <!-- If absolute http link, open normally; else drawer preview -->
                    <a 
                      v-if="link.path.startsWith('http')" 
                      :href="link.path" 
                      target="_blank" 
                      class="archive-link"
                    >
                      {{ link.title }} ↗
                    </a>
                    <a 
                      v-else 
                      @click.prevent="openDocDrawer(link.path, link.title)" 
                      href="#" 
                      class="archive-link"
                    >
                      {{ link.title }}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🔮 4. Frontier Tech (Others) Section -->
      <section id="frontier-tech" class="section-container">
        <div class="section-header">
          <span class="section-badge">NEXT-GEN</span>
          <h2>前沿技术探索</h2>
          <p>面向下一代混合现实与智能机器人底盘加工的技术储备与行业标准规范。</p>
        </div>

        <div class="frontier-grid">
          <div v-for="item in frontierItems" :key="item.category" class="glass-card frontier-card">
            <div class="frontier-icon" v-html="item.icon"></div>
            <h3>{{ item.category }}</h3>
            <p>{{ item.desc }}</p>
            <div class="frontier-sub-links">
              <a 
                v-for="link in item.links" 
                :key="link.title" 
                @click.prevent="openDocDrawer(link.path, link.title)" 
                href="#"
                class="frontier-link-pill"
              >
                {{ link.title }}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Hyperframe Drawer (Slide-in document preview drawer) -->
    <div 
      class="hyperframe-overlay" 
      :class="{ 'overlay-active': drawerOpen }"
      @click="closeDocDrawer"
    >
      <div 
        class="hyperframe-drawer" 
        :class="{ 'drawer-active': drawerOpen }"
        @click.stop
      >
        <!-- Drawer Header -->
        <div class="drawer-header">
          <div class="drawer-title-area">
            <span class="drawer-badge">HYPERFRAME</span>
            <h3 class="drawer-title">{{ drawerTitle }}</h3>
          </div>
          <div class="drawer-controls">
            <a :href="drawerFullscreenUrl" target="_blank" class="btn-drawer-full" v-if="drawerFullscreenUrl">
              全屏阅读 ↗
            </a>
            <button @click="closeDocDrawer" class="btn-drawer-close" aria-label="关闭">
              ✕
            </button>
          </div>
        </div>

        <!-- Drawer Content View -->
        <div class="drawer-body-container" ref="drawerBody">
          <!-- Glassmorphic Skeleton Loader -->
          <div class="skeleton-loader" v-if="drawerLoading">
            <div class="skeleton-glow"></div>
            <div class="skeleton-line title"></div>
            <div class="skeleton-line p1"></div>
            <div class="skeleton-line p2"></div>
            <div class="skeleton-line p3"></div>
            <div class="skeleton-block"></div>
            <div class="skeleton-line p1"></div>
          </div>

          <!-- Document Render Area -->
          <div 
            v-else-if="drawerContent" 
            class="vp-doc custom-doc-render" 
            v-html="drawerContent"
          ></div>

          <!-- Fallback or Iframe Loader if direct fetch failed -->
          <div v-else-if="drawerFallback" class="fallback-frame-container">
            <div class="fallback-message">
              <p>正在载入完整视图模块...</p>
            </div>
            <iframe :src="drawerFullscreenUrl" class="fallback-iframe"></iframe>
          </div>
          
          <div v-else class="drawer-empty">
            <p>暂无文档内容</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll To Top Button -->
    <button 
      class="scroll-top-btn" 
      :class="{ 'show-scroll': showScrollTop }"
      @click="scrollToTop"
    >
      ↑
    </button>

    <footer class="portal-footer">
      <p>© 2026 SophiGo Docs. Powering Creative & Engineering Minds.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

// Define relationships between tutorials
const relationships = {
  1: [2, 13],       // PM -> CAD, BP
  2: [3, 6, 8, 9],  // CAD -> 3D, Laser, CNC, Mold
  3: [2, 9, 12],    // 3D -> CAD, Mold, Materials
  4: [5, 7],        // Electric -> Arduino, PCB
  5: [4, 7, 10, 11, 14], // Arduino -> Elec, PCB, IoT, Interface, AI Vehicle
  6: [2, 12],       // Laser -> CAD, Materials
  7: [4, 5],        // PCB -> Electric, Arduino
  8: [2, 12],       // CNC -> CAD, Materials
  9: [2, 3],        // Mold -> CAD, 3D
  10: [5, 11],      // IoT -> Arduino, Interface
  11: [5, 10],      // Interface -> Arduino, IoT
  12: [3, 6, 8],    // Materials -> 3D, Laser, CNC
  13: [1],          // BP -> PM
  14: [2, 5]        // AI Vehicle -> CAD, Arduino
};

// Core data elements
const hoveredCardId = ref(null);
const activeLines = ref([]);
const svgElement = ref(null);

const drawerOpen = ref(false);
const drawerTitle = ref('');
const drawerContent = ref('');
const drawerLoading = ref(false);
const drawerFullscreenUrl = ref('');
const drawerFallback = ref(false);
const drawerBody = ref(null);

const showScrollTop = ref(false);

// Recalculate SVG connection coordinates
function calculateConnections() {
  if (hoveredCardId.value === null) {
    activeLines.value = [];
    return;
  }

  const container = document.getElementById('tutorials-container');
  const svg = svgElement.value;
  if (!container || !svg) return;

  const containerRect = container.getBoundingClientRect();
  const hoveredEl = document.getElementById(`card-${hoveredCardId.value}`);
  if (!hoveredEl) return;

  const hoveredRect = hoveredEl.getBoundingClientRect();
  const x1 = hoveredRect.left - containerRect.left + hoveredRect.width / 2;
  const y1 = hoveredRect.top - containerRect.top + hoveredRect.height / 2;

  const relatedIds = relationships[hoveredCardId.value] || [];
  const lines = [];

  relatedIds.forEach((relId) => {
    const relEl = document.getElementById(`card-${relId}`);
    if (!relEl) return;

    const relRect = relEl.getBoundingClientRect();
    const x2 = relRect.left - containerRect.left + relRect.width / 2;
    const y2 = relRect.top - containerRect.top + relRect.height / 2;

    // Draw quadratic curve: bend upward or downward depending on distance
    const dx = x2 - x1;
    const dy = y2 - y1;
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2 - Math.max(30, Math.min(80, Math.abs(dx) * 0.15));

    lines.push({
      d: `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`
    });
  });

  activeLines.value = lines;
}

// Mouse events on tutorial cards
function onCardMouseEnter(id) {
  hoveredCardId.value = id;
  calculateConnections();
}

function onCardMouseLeave() {
  hoveredCardId.value = null;
  activeLines.value = [];
}

function isRelated(id) {
  if (hoveredCardId.value === null) return false;
  const list = relationships[hoveredCardId.value] || [];
  return list.includes(id);
}

// Hyperframe content loading via fetch & parsing
async function openDocDrawer(path, title) {
  drawerTitle.value = title;
  drawerOpen.value = true;
  drawerLoading.value = true;
  drawerContent.value = '';
  drawerFallback.value = false;
  
  // Format the document URL properly
  let targetPath = path.replace(/\.md$/, '');
  if (targetPath.startsWith('/')) targetPath = targetPath.substring(1);
  if (!targetPath.startsWith('docs/')) {
    if (!targetPath.startsWith('courses/fab-course/')) {
      targetPath = 'courses/fab-course/' + targetPath;
    }
    targetPath = 'docs/' + targetPath;
  }

  const finalUrl = '/' + targetPath;
  drawerFullscreenUrl.value = finalUrl;

  try {
    const response = await fetch(finalUrl);
    if (!response.ok) throw new Error('Document not found');
    const htmlText = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    
    // Extract VitePress document body
    const docBody = doc.querySelector('.vp-doc');
    if (docBody) {
      // Clean up headers or elements if needed
      drawerContent.value = docBody.innerHTML;
    } else {
      // Fallback: use iframe
      drawerFallback.value = true;
    }
  } catch (error) {
    console.warn('Failed to parse doc directly, falling back to iframe:', error);
    drawerFallback.value = true;
  } finally {
    drawerLoading.value = false;
    if (drawerBody.value) {
      drawerBody.value.scrollTop = 0;
    }
  }
}

function closeDocDrawer() {
  drawerOpen.value = false;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Global window event listeners
function handleScroll() {
  showScrollTop.value = window.scrollY > 300;
}

function handleResize() {
  if (hoveredCardId.value !== null) {
    calculateConnections();
  }
}

function handleKeydown(e) {
  if (e.key === 'Escape' && drawerOpen.value) {
    closeDocDrawer();
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('keydown', handleKeydown);
});

// Setup metadata details
const labItems = [
  {
    title: '实验室管理规范',
    desc: '详细描述 Fab Lab 运作准则、出勤要求与空间维护条例。',
    link: '/docs/courses/fab-course/doc/0manage/labmanage.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>'
  },
  {
    title: 'Fab Lab 介绍',
    desc: '探索全球数字化制造实验室网络及其愿景理念与核心软硬件配置。',
    link: '/docs/courses/fab-course/doc/Fab/FAB.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>'
  },
  {
    title: 'NexMaker 创客学术',
    desc: '了解 NexMaker 创客联盟、创新培育课程与开发者社群孵化计划。',
    link: '/docs/courses/fab-course/doc/0manage/nexmaker-academy.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5"/></svg>'
  },
  {
    title: '安全与准入规范',
    desc: '使用高功耗设备、特种机械与易燃易爆材料时的必备安全指南。',
    link: '/docs/courses/fab-course/doc/0manage/access_safety.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
  },
  {
    title: '常用材料指南',
    desc: '亚克力、木板、树脂等数字化制造主要耗材属性说明与选择矩阵。',
    link: '/docs/courses/fab-course/doc/0manage/material.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
  },
  {
    title: '设备与工具清单',
    desc: '展示实验室中所有数字切片机、3D打印机、焊接工具的性能参数与预约流程。',
    link: '/docs/courses/fab-course/doc/0manage/tool.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
  }
];

const tutorials = [
  {
    id: 1,
    title: '项目管理与网页构建',
    desc: '基于 Git 进行版本控制，掌握 Markdown 写作与图床使用，依托 Docsify/VitePress 搭建个人数字化原型记录主站。',
    assessment: '/docs/courses/fab-course/doc/1projectmanage/Assessment1.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    links: [
      { title: 'Git 工具入门', path: '/docs/courses/fab-course/doc/1projectmanage/git.md' },
      { title: 'Markdown 语法', path: '/docs/courses/fab-course/doc/1projectmanage/markdown.md' },
      { title: 'VitePress 现代静态站', path: '/docs/courses/fab-course/doc/1projectmanage/vitepress.md' },
      { title: 'AIGC 辅助开发', path: '/docs/courses/fab-course/doc/1projectmanage/aigc.md' }
    ]
  },
  {
    id: 2,
    title: '计算机辅助设计 (CAD)',
    desc: '掌握 Fusion 360 与 SolidWorks 建模技术，探索参数化几何结构设计与钣金设计，辅以 AI 生成式设计工具创造新结构。',
    assessment: '/docs/courses/fab-course/doc/2cad/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>',
    links: [
      { title: 'Fusion 360 操作指南', path: '/docs/courses/fab-course/doc/2cad/3D_Design_Fusion360.md' },
      { title: 'Solidworks 建模', path: '/docs/courses/fab-course/doc/2cad/Solidworks.md' },
      { title: '参数化设计', path: '/docs/courses/fab-course/doc/2cad/parameterdesign.md' },
      { title: '钣金件设计', path: '/docs/courses/fab-course/doc/2cad/fusion360-sheetmetal.md' }
    ]
  },
  {
    id: 3,
    title: '3D 打印技术',
    desc: '探索 FDM 熔融沉积、SLA 光固化、HP-MJF 尼龙烧结打印工艺与切片软件配置，掌握快速增材实体制造的完整流程。',
    assessment: '/docs/courses/fab-course/doc/3_3dprinter/assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3h12v6M6 14h12v8H6z"/></svg>',
    links: [
      { title: 'FDM 设计指南', path: '/docs/courses/fab-course/doc/3_3dprinter/3.FDM-designguide.md' },
      { title: 'FDM 设备实操', path: '/docs/courses/fab-course/doc/3_3dprinter/4.FDM-machineoperation.md' },
      { title: 'SLA 设计指南', path: '/docs/courses/fab-course/doc/3_3dprinter/6.sladesignguide.md' },
      { title: '切片软件使用', path: '/docs/courses/fab-course/doc/3_3dprinter/9.3Dslicesoftware.md' }
    ]
  },
  {
    id: 4,
    title: '电子设计与电路基础',
    desc: '掌握电子元器件特性及电路基本定律（欧姆、基尔霍夫等），熟练使用现代 EDA 工具（如 KiCad / EasyEDA）设计原理图。',
    assessment: '/docs/courses/fab-course/doc/4electric_design/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><path d="M7 2v4M17 2v4M7 18v4M17 18v4M2 7h4M2 17h4M18 7h4M18 17h4"/></svg>',
    links: [
      { title: '基本元器件', path: '/docs/courses/fab-course/doc/4electric_design/electricparameter_component.md' },
      { title: '电路基础知识', path: '/docs/courses/fab-course/doc/4electric_design/basicknowledge.md' },
      { title: 'EDA 绘图与排版', path: '/docs/courses/fab-course/doc/4electric_design/tool.md' }
    ]
  },
  {
    id: 5,
    title: 'Arduino 软硬件应用',
    desc: '深入开源硬件架构，掌握 C++ 嵌入式软件开发，通过信号采集与执行器控制实现物理世界与底层逻辑的代码链接。',
    assessment: '/docs/courses/fab-course/doc/5arduino/assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22v-4M12 6V2M2 12h4M18 12h4"/><path d="M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/><circle cx="12" cy="12" r="6"/></svg>',
    links: [
      { title: 'Arduino 基础操作', path: '/docs/courses/fab-course/doc/5arduino/arduino_basic.md' },
      { title: 'Arduino 编程语法', path: '/docs/courses/fab-course/doc/5arduino/arduino_code.md' },
      { title: 'Arduino 信号输入', path: '/docs/courses/fab-course/doc/5arduino/Arduino_Input.md' },
      { title: '机械臂联合仿真', path: '/docs/courses/fab-course/doc/5arduino/robot-mycobot.md' }
    ]
  },
  {
    id: 6,
    title: '激光切割工艺',
    desc: '学习二维矢量图纸准备流程，深入板件卡接的机械结构设计，熟练掌握激光雕刻机对非金属材料的加工实操技巧。',
    assessment: '/docs/courses/fab-course/doc/6laser_cutter/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/></svg>',
    links: [
      { title: '安全守则规范', path: '/docs/courses/fab-course/doc/6laser_cutter/Safety.md' },
      { title: 'AutoCAD 图纸准备', path: '/docs/courses/fab-course/doc/6laser_cutter/AutoCAD.md' },
      { title: '结构卡接设计', path: '/docs/courses/fab-course/doc/6laser_cutter/Design_guide.md' },
      { title: '切割加工实操', path: '/docs/courses/fab-course/doc/6laser_cutter/Machine_practice.md' }
    ]
  },
  {
    id: 7,
    title: 'PCB 制造与焊接工艺',
    desc: '从电路拼版到物理蚀刻，学习 SMT 表面贴装工艺与回流焊原理，系统掌握手工烙铁与热风枪焊接调试规范。',
    assessment: '/docs/courses/fab-course/doc/4electric_design/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    links: [
      { title: 'SMT 表面贴装', path: '/docs/courses/fab-course/doc/7PCB_manufacture/SMT.md' },
      { title: '手工焊接技巧', path: '/docs/courses/fab-course/doc/7PCB_manufacture/manual.md' }
    ]
  },
  {
    id: 8,
    title: 'CNC 数控加工工艺',
    desc: '系统学习桌面雕刻机加工的减材工艺，重点学习 G-code 编程、坐标系对刀与三轴 CNC 设备的刀路规划与削减实操。',
    assessment: '/docs/courses/fab-course/doc/8CNC_manufacture/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6M14 2v20M2 14h12"/></svg>',
    links: [
      { title: 'CNC 机器类型', path: '/docs/courses/fab-course/doc/8CNC_manufacture/cnctype.md' },
      { title: '刀路规划工具', path: '/docs/courses/fab-course/doc/8CNC_manufacture/tool.md' },
      { title: '三轴数控编程', path: '/docs/courses/fab-course/doc/8CNC_manufacture/cncprogram.md' },
      { title: '设备实操步骤', path: '/docs/courses/fab-course/doc/8CNC_manufacture/cncmanufacture.md' }
    ]
  },
  {
    id: 9,
    title: '翻模与铸造',
    desc: '基于 3D 打印实体制作阳模，学习单模与双开模具制造，掌握硅胶倒模与树脂等液态材料铸造成型的完整化学工艺。',
    assessment: '/docs/courses/fab-course/doc/9MOLD/assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    links: [
      { title: '硅胶与树脂材料', path: '/docs/courses/fab-course/doc/9MOLD/material.md' },
      { title: '模具设计工具', path: '/docs/courses/fab-course/doc/9MOLD/tool.md' },
      { title: '翻模铸造步骤', path: '/docs/courses/fab-course/doc/9MOLD/method.md' }
    ]
  },
  {
    id: 10,
    title: '物联网与交互设计',
    desc: '探索 TCP/IP、MQTT、HTTP 通信协议，编写物联网程序，使 ESP8266 微控制器经由 WiFi 稳定接入云端阿里云平台。',
    assessment: '/docs/courses/fab-course/doc/10IOT/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    links: [
      { title: '物联网基本介绍', path: '/docs/courses/fab-course/doc/10IOT/IOT_basic.md' },
      { title: 'ESP8266 阿里云', path: '/docs/courses/fab-course/doc/10IOT/NodeMCUESP8266_ALiYun.md' }
    ]
  },
  {
    id: 11,
    title: '界面与交互应用程序',
    desc: '利用 Processing/NodeJS 编写界面应用，通过串口读取外设传感器数据，设计人机交互的动态画面与皮影艺术交互装置。',
    assessment: '/docs/courses/fab-course/doc/11Interface-application-programming/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    links: [
      { title: 'Processing 编程', path: '/docs/courses/fab-course/doc/11Interface-application-programming/processing.md' },
      { title: 'Processing 串口', path: '/docs/courses/fab-course/doc/11Interface-application-programming/processingwitharduino.md' },
      { title: '皮影戏艺术交互', path: '/docs/courses/fab-course/doc/11Interface-application-programming/piying.md' }
    ]
  },
  {
    id: 12,
    title: '标准件与耗材采购',
    desc: '掌握机械零部件标准化规格（螺母、联轴器、滑块），熟悉主流标准结构采购源（Misumi、Digi-Key、Mouser）。',
    assessment: '/docs/courses/fab-course/doc/12material&tool/assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    links: [
      { title: '常用机械零件', path: '/docs/courses/fab-course/doc/12material&tool/standardcomponentpart.md' },
      { title: '常用耗材一览', path: '/docs/courses/fab-course/doc/12material&tool/material.md' }
    ]
  },
  {
    id: 13,
    title: '商业计划书基础',
    desc: '学习发掘原型方案的商业落地点与生产估值，打磨产品与用户画像，掌握合格创业项目商业计划书的核心写法与路演要素。',
    assessment: '/docs/courses/fab-course/doc/13BP/assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    links: [
      { title: '商业孵化指南', path: '/docs/courses/fab-course/doc/13BP/README.md' }
    ]
  },
  {
    id: 14,
    title: '智能移动载具开发',
    desc: '掌握阿克曼/差速等轮式底盘控制模型，编写底层微处理器硬件驱动，融合 AI 与雷达深度感知建立 ROS2 在线开发与仿真。',
    assessment: '/docs/courses/fab-course/doc/14AI&vehicle/assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    links: [
      { title: '底盘开发基础', path: '/docs/courses/fab-course/doc/14AI&vehicle/basic.md' },
      { title: '智能车算法仿真', path: '/docs/courses/fab-course/doc/14AI&vehicle/aiplatform.md' }
    ]
  }
];

const archiveGroups = [
  {
    title: '宁波诺丁汉大学 (UNNC FabLab)',
    items: [
      {
        name: 'Fab Academy 成果展示',
        links: [
          { title: 'Fab Academy 2025 - UNNC 归档', path: '/docs/courses/fab-course/class/fab-2025-UNNC.md' },
          { title: 'UNNC-FabLab 2025-2 归档', path: '/docs/courses/fab-course/class/fab-2025-UNNC-2.md' },
          { title: 'Fab Academy 2023 成果', path: '/docs/courses/fab-course/doc/Fab/fab2023.md' }
        ]
      }
    ]
  },
  {
    title: '浙江大学设计工程 (ZJU Design Engineering)',
    items: [
      {
        name: '2023 年度创新专题',
        links: [
          { title: 'Design Engineering 2023', path: '/docs/courses/fab-course/class/fab-2023-zju-de.md' },
          { title: 'Design Manufacture 2023', path: '/docs/courses/fab-course/class/fab-2023-zju-dm.md' },
          { title: 'DE mini 2023', path: '/docs/courses/fab-course/class/fab-2023-zju-mini.md' }
        ]
      },
      {
        name: '2022 年度创新专题',
        links: [
          { title: 'Design Engineering 2022', path: '/docs/courses/fab-course/class/fab-2022-zju-de.md' },
          { title: 'Design Manufacture 2022', path: '/docs/courses/fab-course/class/fab-2022-zju-dm.md' },
          { title: 'DE mini 2022', path: '/docs/courses/fab-course/class/fab-2022-zju-mini.md' }
        ]
      },
      {
        name: '往届专题归档',
        links: [
          { title: 'Design Engineering 2021', path: '/docs/courses/fab-course/class/fab-2021-zju-de.md' },
          { title: 'Design Manufacture 2021', path: '/docs/courses/fab-course/class/fab-2021-zju-dm.md' },
          { title: 'Design Engineering 2020', path: '/docs/courses/fab-course/class/fab-2020-zju-de.md' }
        ]
      }
    ]
  },
  {
    title: '浙江万里学院与创客学术 (ZWU & NexMaker)',
    items: [
      {
        name: '万里学院交互系统 (ZWU)',
        links: [
          { title: 'Interactive System 2026A1', path: '/docs/courses/fab-course/class/FAB-2026-ZWU-01.md' },
          { title: 'Interactive System 2024', path: '/docs/courses/fab-course/class/fab-2024-zwu-Interactivesystem.md' },
          { title: 'IS 2+2 2024', path: '/docs/courses/fab-course/class/fab-2024-zwu-Interactivesystem2+2.md' }
        ]
      },
      {
        name: '创客学术 (NexMaker)',
        links: [
          { title: 'NexMaker Academy 第 1 期', path: '/docs/courses/fab-course/class/fab-01.md' },
          { title: 'NexMaker Academy 第 2 期', path: '/docs/courses/fab-course/class/fab-02.md' }
        ]
      }
    ]
  }
];

const frontierItems = [
  {
    category: 'XR (扩展现实)',
    desc: '研究多维度混合现实系统、轻量化头显供应链生态及快速定位算法技术储备。',
    icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8.5v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="7.5" cy="12" r="2.5"/><circle cx="16.5" cy="12" r="2.5"/><path d="M10 2v4.5M14 2v4.5"/></svg>',
    links: [
      { title: 'XR 概述', path: '/docs/courses/fab-course/XR/readme.md' },
      { title: '解决方案', path: '/docs/courses/fab-course/XR/application_solution.md' },
      { title: '快速入门', path: '/docs/courses/fab-course/XR/howtostart.md' },
      { title: '专利技术', path: '/docs/courses/fab-course/XR/xrultrasoudpatent.md' }
    ]
  },
  {
    category: 'AGV (自动导引车)',
    desc: '专注于移动机器人底盘的结构设计、智能激光导航算法、运动姿态规划及供应链集成标准。',
    icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="12" rx="2"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/><path d="M9 19h6"/></svg>',
    links: [
      { title: 'AGV 概述', path: '/docs/courses/fab-course/AGV/readme.md' },
      { title: '解决方案', path: '/docs/courses/fab-course/AGV/agvapplication.md' },
      { title: '开发入门', path: '/docs/courses/fab-course/AGV/agvhowtostart.md' },
      { title: '供应链标准', path: '/docs/courses/fab-course/AGV/agvindusrtstandard.md' }
    ]
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

/* Global Container Styles */
.fab-portal {
  font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #08080c;
  color: #f5f5f7;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  padding-bottom: 5rem;
  scroll-behavior: smooth;
}

/* Ambient Pulsing Glow Orbs */
.ambient-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
  animation: float-glow 20s infinite alternate ease-in-out;
}
.bg-glow-1 {
  width: 50vw;
  height: 50vw;
  background: radial-gradient(circle, #00f2fe 0%, transparent 70%);
  top: -10vw;
  right: -10vw;
}
.bg-glow-2 {
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle, #8a2be2 0%, transparent 70%);
  top: 40vh;
  left: -20vw;
  animation-duration: 25s;
}
.bg-glow-3 {
  width: 40vw;
  height: 40vw;
  background: radial-gradient(circle, #ff007f 0%, transparent 70%);
  bottom: -10vw;
  right: 10vw;
  animation-duration: 18s;
}

@keyframes float-glow {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(5%, 5%) scale(1.1); }
}

/* Apple-style Navigation Header */
.portal-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(8, 8, 12, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align right to push brand to left and links to right */
}
.nav-brand {
  font-weight: 700;
  font-size: 1.1rem;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: auto; /* Push brand left */
  letter-spacing: -0.5px;
}
.brand-dot {
  width: 8px;
  height: 8px;
  background: #00f2fe;
  border-radius: 50%;
  box-shadow: 0 0 8px #00f2fe;
}
.brand-sub {
  font-size: 0.8rem;
  font-weight: 400;
  color: #86868b;
  padding-left: 0.5rem;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav-links a {
  color: #e8e8ed;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: color 0.3s;
}
.nav-links a:hover {
  color: #00f2fe;
}
.nav-links .btn-back {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: all 0.3s;
}
.nav-links .btn-back:hover {
  background: #fff;
  color: #000;
  border-color: #fff;
}

/* Hero Section */
.hero-section {
  max-width: 900px;
  margin: 6rem auto 4rem;
  text-align: center;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}
.badge {
  display: inline-block;
  background: rgba(0, 242, 254, 0.1);
  border: 1px solid rgba(0, 242, 254, 0.3);
  color: #00f2fe;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}
.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -2px;
  margin-bottom: 1.5rem;
}
.text-gradient {
  background: linear-gradient(135deg, #00f2fe 0%, #8a2be2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: #86868b;
  font-weight: 400;
  line-height: 1.6;
  max-width: 680px;
  margin: 0 auto 2.5rem;
}
.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
}
.btn-primary, .btn-secondary {
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}
.btn-primary {
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: #000;
  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.3);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 242, 254, 0.5);
}
.btn-secondary {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Sticky Category Tabs */
.sticky-tabs {
  position: sticky;
  top: 56px;
  z-index: 90;
  background: rgba(8, 8, 12, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0.75rem 0;
  margin-bottom: 4rem;
}
.tabs-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  overflow-x: auto;
  scrollbar-width: none;
}
.tab-link {
  color: #86868b;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.3s;
}
.tab-link:hover {
  color: #fff;
}

/* Section Containers */
.section-container {
  max-width: 1200px;
  margin: 0 auto 7rem;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}
.section-header {
  margin-bottom: 3rem;
}
.section-badge {
  font-size: 0.8rem;
  font-weight: 700;
  color: #00f2fe;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}
.section-header h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 0.75rem;
  color: #fff;
}
.section-header p {
  color: #86868b;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}
.glow-tip {
  color: #8a2be2;
  font-size: 0.85rem;
  font-weight: 500;
  display: inline-block;
  margin-top: 0.5rem;
  text-shadow: 0 0 8px rgba(138, 43, 226, 0.3);
}

/* Glass Card styling base */
.glass-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.glass-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}

/* 🔬 Lab Cards Layout */
.lab-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
.lab-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.card-icon {
  color: #00f2fe;
  background: rgba(0, 242, 254, 0.08);
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}
.lab-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #fff;
}
.lab-card p {
  color: #86868b;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
}
.card-footer {
  display: flex;
  gap: 1rem;
}
.btn-card-read {
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
  padding: 0.6rem;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-card-read:hover {
  background: #00f2fe;
  color: #000;
  border-color: #00f2fe;
}
.btn-card-link {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #86868b;
  padding: 0.6rem 0.9rem;
  border-radius: 10px;
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.3s;
  text-align: center;
}
.btn-card-link:hover {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}

/* 🛠️ Core Tutorials Grid (Interactive Correlation Map) */
.relative-container {
  position: relative;
}
.svg-connections-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}
.connections-svg {
  width: 100%;
  height: 100%;
}
.connection-path {
  stroke-dasharray: 8 6;
  animation: connection-flow 2s infinite linear;
}
@keyframes connection-flow {
  to {
    stroke-dashoffset: -28;
  }
}

.tutorials-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 10;
}
.tutorial-card {
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* Active Hover Card States */
.card-hovered {
  transform: translateY(-8px) scale(1.03);
  background: rgba(0, 242, 254, 0.03);
  border-color: #00f2fe !important;
  box-shadow: 0 0 25px rgba(0, 242, 254, 0.3) !important;
  z-index: 15;
}
.card-related {
  transform: scale(1.01);
  border-color: #8a2be2 !important;
  background: rgba(138, 43, 226, 0.03);
  box-shadow: 0 0 20px rgba(138, 43, 226, 0.25) !important;
  z-index: 12;
}
.card-dimmed {
  opacity: 0.25;
  filter: blur(1px);
}

.tut-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.tut-num {
  font-size: 2.2rem;
  font-weight: 800;
  color: rgba(255,255,255,0.06);
  line-height: 1;
}
.card-hovered .tut-num {
  color: rgba(0, 242, 254, 0.15);
}
.card-related .tut-num {
  color: rgba(138, 43, 226, 0.15);
}
.tut-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.04);
  color: #86868b;
  transition: all 0.3s;
}
.card-hovered .tut-icon {
  background: rgba(0, 242, 254, 0.1);
  color: #00f2fe;
}
.card-related .tut-icon {
  background: rgba(138, 43, 226, 0.1);
  color: #8a2be2;
}

.tut-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: #fff;
  letter-spacing: -0.5px;
}
.tut-desc {
  font-size: 0.88rem;
  color: #86868b;
  line-height: 1.6;
  margin-bottom: 1.8rem;
  flex-grow: 1;
}

/* Internal links list */
.tut-links-container {
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1.8rem;
}
.tut-links-heading {
  font-size: 0.75rem;
  font-weight: 700;
  color: #86868b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.6rem;
}
.tut-sublinks {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}
.sublink-item {
  font-size: 0.82rem;
  color: #a1a1a6;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: all 0.2s;
}
.sublink-item::before {
  content: '·';
  font-weight: bold;
}
.sublink-item:hover {
  color: #00f2fe;
  transform: translateX(3px);
}

.tut-actions {
  display: flex;
  gap: 0.8rem;
}
.btn-tut-read {
  flex-grow: 1;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  color: #fff;
  padding: 0.65rem;
  border-radius: 10px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-tut-read:hover {
  background: #fff;
  color: #000;
  border-color: #fff;
}
.btn-tut-open {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.08);
  color: #86868b;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.3s;
  text-align: center;
  white-space: nowrap;
}
.btn-tut-open:hover {
  border-color: rgba(255,255,255,0.2);
  color: #fff;
}

/* Relation Badge */
.tut-relation-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #00f2fe;
  color: #000;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  letter-spacing: 0.5px;
}
.tut-relation-badge.related {
  background: #8a2be2;
  color: #fff;
}

/* 🎓 Archives section styling */
.archive-groups {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.archive-group-block {
  padding: 2.5rem;
}
.archive-group-block h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #fff;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  padding-bottom: 0.75rem;
}
.archive-subgrids {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
.archive-sub-card h4 {
  font-size: 0.95rem;
  font-weight: 600;
  color: #86868b;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.archive-sub-links {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.archive-link {
  font-size: 0.9rem;
  color: #f5f5f7;
  text-decoration: none;
  transition: color 0.3s;
  display: inline-block;
}
.archive-link:hover {
  color: #00f2fe;
}

/* 🔮 Frontier tech layout */
.frontier-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  gap: 2rem;
}
@media (max-width: 600px) {
  .frontier-grid {
    grid-template-columns: 1fr;
  }
}
.frontier-card {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
}
.frontier-icon {
  color: #8a2be2;
  margin-bottom: 1.5rem;
}
.frontier-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #fff;
}
.frontier-card p {
  color: #86868b;
  font-size: 0.92rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
}
.frontier-sub-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.frontier-link-pill {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05);
  color: #e8e8ed;
  padding: 0.45rem 1rem;
  border-radius: 15px;
  font-size: 0.82rem;
  text-decoration: none;
  transition: all 0.3s;
}
.frontier-link-pill:hover {
  background: rgba(138, 43, 226, 0.1);
  border-color: #8a2be2;
  color: #00f2fe;
  transform: translateY(-1px);
}

/* Hyperframe Drawer (Slide-in document preview) */
.hyperframe-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 200;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
}
.overlay-active {
  opacity: 1;
  pointer-events: auto;
}
.hyperframe-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: min(680px, 90dvw);
  height: 100vh;
  background: rgba(13, 13, 18, 0.85);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  z-index: 210;
}
.drawer-active {
  transform: translateX(0);
}

.drawer-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.drawer-title-area {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.drawer-badge {
  font-size: 0.65rem;
  font-weight: 800;
  color: #00f2fe;
  letter-spacing: 1.5px;
}
.drawer-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}
.drawer-controls {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
.btn-drawer-full {
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: #000;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.45rem 1rem;
  border-radius: 15px;
  transition: all 0.3s;
}
.btn-drawer-full:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 12px rgba(0, 242, 254, 0.3);
}
.btn-drawer-close {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-drawer-close:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.drawer-body-container {
  flex-grow: 1;
  overflow-y: auto;
  padding: 2.5rem 2.5rem 5rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.1) transparent;
}

/* Glassmorphic Loader Skeleton */
.skeleton-loader {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  overflow: hidden;
}
.skeleton-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  animation: skeleton-shimmer 1.5s infinite;
}
@keyframes skeleton-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.skeleton-line {
  height: 15px;
  background: rgba(255,255,255,0.03);
  border-radius: 4px;
}
.skeleton-line.title {
  height: 32px;
  width: 60%;
  margin-bottom: 1.5rem;
}
.skeleton-line.p1 { width: 100%; }
.skeleton-line.p2 { width: 90%; }
.skeleton-line.p3 { width: 95%; }
.skeleton-block {
  height: 200px;
  background: rgba(255,255,255,0.02);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.04);
}

/* Document content injection override styles */
.custom-doc-render {
  color: #e8e8ed;
  line-height: 1.8;
  font-size: 0.95rem;
}
.custom-doc-render :deep(h1),
.custom-doc-render :deep(h2),
.custom-doc-render :deep(h3) {
  color: #fff;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.custom-doc-render :deep(p) {
  margin-bottom: 1.2rem;
}
.custom-doc-render :deep(a) {
  color: #00f2fe;
  text-decoration: none;
  border-bottom: 1px dashed rgba(0, 242, 254, 0.4);
  transition: all 0.3s;
}
.custom-doc-render :deep(a:hover) {
  border-bottom-style: solid;
}
.custom-doc-render :deep(pre) {
  background: rgba(0,0,0,0.4) !important;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  padding: 1.2rem;
  margin: 1.5rem 0;
  overflow-x: auto;
}
.custom-doc-render :deep(code) {
  font-family: monospace;
  font-size: 0.88rem;
}

/* Fallback iframe view styles */
.fallback-frame-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.fallback-message {
  padding: 1rem;
  color: #86868b;
  text-align: center;
  font-size: 0.85rem;
}
.fallback-iframe {
  flex-grow: 1;
  width: 100%;
  height: 60vh;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  background: #fff;
}

/* Scroll To Top button */
.scroll-top-btn {
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 95;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.scroll-top-btn:hover {
  background: #00f2fe;
  color: #000;
  border-color: #00f2fe;
  box-shadow: 0 0 15px rgba(0, 242, 254, 0.4);
}
.show-scroll {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

/* Footer */
.portal-footer {
  text-align: center;
  padding: 3rem 0;
  border-top: 1px solid rgba(255,255,255,0.03);
  color: #515154;
  font-size: 0.8rem;
  font-weight: 500;
  position: relative;
  z-index: 10;
}
</style>
