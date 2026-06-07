<template>
  <div class="fab-home">

    <!-- ── Navigation ── -->
    <header class="fab-nav">
      <div class="nav-inner">
        <a :href="homeUrl" class="nav-brand">
          <img src="/logo.png" alt="SophiGo" class="nav-logo" />
          <span>SophiGo</span>
        </a>
        <nav class="nav-links">
          <a href="/docs/">Home</a>
          <a href="/docs/courses/fab-course/" class="nav-active">Fab Courses</a>
          <a href="/docs/courses/ai-basics/">AI Basics</a>
          <a href="/docs/courses/mobile-robot/">Mobile Robot</a>
          <a href="/docs/courses/cmf/">CMF</a>
          <a href="/docs/news/index.html">Insights</a>
        </nav>
      </div>
    </header>

    <main>

      <!-- ── Hero ── -->
      <section class="hero">
        <div class="hero-inner">
          <p class="eyebrow">FAB LAB · DIGITAL FABRICATION</p>
          <h1>How to Make<br /><em>Almost Everything</em></h1>
          <p class="hero-sub">
            Built on the MIT FabAcademy curriculum and the global Fab Lab network.
            Develop full-stack engineering thinking — from digital fabrication
            fundamentals to AI-integrated product prototyping.
          </p>
          <div class="hero-btns">
            <a href="#overview" class="btn-solid">Explore the Course</a>
            <a href="https://www.nexmaker.com/" target="_blank" rel="noopener" class="btn-outline">NexMaker Docs ↗</a>
          </div>
          <div class="hero-pills">
            <span class="pill">14 Modules</span>
            <span class="pill">MIT FabAcademy</span>
            <span class="pill">400+ Students</span>
            <span class="pill">UNNC · ZJU · ZWU</span>
          </div>
        </div>
      </section>

      <!-- ── Sticky Tabs ── -->
      <div class="tabs-bar">
        <div class="tabs-inner">
          <a href="#overview" class="stab">Overview</a>
          <a href="#tutorials" class="stab">Tutorials</a>
          <a href="#course-list" class="stab">Course List</a>
        </div>
      </div>

      <!-- ── Section 1: Overview + Lab Manage (merged) ── -->
      <section id="overview" class="sec">
        <div class="sec-inner">

          <!-- Overview text -->
          <div class="sec-head">
            <p class="sec-tag">OVERVIEW</p>
            <h2>What is Fab Lab?</h2>
          </div>

          <div class="ov-layout">
            <div class="ov-text">
              <p>
                A <strong>Fab Lab</strong> (Fabrication Laboratory) is a digital
                fabrication workspace developed by MIT's Center for Bits and Atoms.
                Using a standardized set of CNC machines, 3D printers, laser cutters,
                and electronics tools, participants can design and build almost
                anything — from custom circuit boards to IoT devices to structural
                prototypes.
              </p>
              <p>
                The <strong>FabAcademy</strong> is a distributed education program
                delivered globally via the Fab Lab network. Students complete weekly
                hands-on assignments — each producing a physical artifact — covering
                the full stack from design to fabrication to firmware.
              </p>
              <p>
                At <strong>UNNC-FabLab</strong>, we adapt this curriculum to build
                engineers who think in full-stack terms: combining mechanical design,
                electronics, AI tools, and product thinking into one coherent
                learning path.
              </p>
            </div>
            <div class="ov-stats">
              <div class="stat-block">
                <span class="stat-n">2000<sup>+</sup></span>
                <span class="stat-l">Fab Labs worldwide</span>
              </div>
              <div class="stat-block">
                <span class="stat-n">14</span>
                <span class="stat-l">Core modules</span>
              </div>
              <div class="stat-block">
                <span class="stat-n">MIT</span>
                <span class="stat-l">Curriculum origin</span>
              </div>
            </div>
          </div>

          <!-- Lab Manage cards (merged) -->
          <div class="lab-head">
            <p class="sec-tag">LAB MANAGE</p>
            <h2>Lab Operations</h2>
            <p class="sec-sub">Essential documentation before entering and working in the Fab Lab.</p>
          </div>

          <div class="lab-grid">
            <div
              v-for="item in labItems"
              :key="item.title"
              class="lab-card"
            >
              <div class="lab-icon" v-html="item.icon"></div>
              <div class="lab-body">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
              <div class="lab-foot">
                <button @click="openDrawer(item.link, item.title)" class="lab-read-btn">Read docs</button>
                <a :href="item.link" target="_blank" class="lab-open-link">Full screen ↗</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ── Section 2: Tutorials ── -->
      <section id="tutorials" class="sec sec-alt">
        <div class="sec-inner">

          <div class="sec-head">
            <p class="sec-tag">TUTORIALS</p>
            <h2>14 Core Modules</h2>
            <p class="sec-sub">
              From project documentation and CAD design to AI vehicle development.
              Click any card to open the corresponding documentation.
            </p>
          </div>

          <div class="tut-grid">
            <div
              v-for="tut in tutorials"
              :key="tut.id"
              class="tut-card"
              @click="openDrawer(tut.docsPath, tut.title)"
            >
              <div class="tc-top">
                <span class="tc-num">{{ String(tut.id).padStart(2, '0') }}</span>
                <div class="tc-icon" v-html="tut.icon"></div>
              </div>
              <h3 class="tc-title">{{ tut.title }}</h3>
              <p class="tc-desc">{{ tut.desc }}</p>
              <div class="tc-links">
                <span
                  v-for="link in tut.links"
                  :key="link.title"
                  class="tc-link"
                  @click.stop="openDrawer(link.path, link.title)"
                >{{ link.title }}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ── Section 3: Course List ── -->
      <section id="course-list" class="sec">
        <div class="sec-inner">

          <div class="sec-head">
            <p class="sec-tag">COURSE LIST</p>
            <h2>Classes &amp; Teams</h2>
            <p class="sec-sub">
              Student cohorts from UNNC FabLab, ZJU, ZWU, and NexMaker Academy.
              Click any team to view their project documentation site.
            </p>
          </div>

          <div class="cohort-list">
            <div
              v-for="group in cohortGroups"
              :key="group.id"
              class="cohort-row"
            >
              <div class="cohort-meta">
                <span class="cohort-inst">{{ group.institution }}</span>
                <span class="cohort-year">{{ group.year }}</span>
              </div>
              <div class="cohort-body">
                <h3 class="cohort-name">{{ group.name }}</h3>
                <div class="cohort-teams">
                  <a
                    v-for="team in group.teams"
                    :key="team.name"
                    :href="team.url"
                    :target="team.url.startsWith('http') ? '_blank' : undefined"
                    class="team-link"
                  >{{ team.name }}</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>

    <!-- ── Slide-in Doc Drawer ── -->
    <div
      class="drawer-bg"
      :class="{ open: drawerOpen }"
      @click="closeDrawer"
    >
      <div
        class="drawer"
        :class="{ open: drawerOpen }"
        @click.stop
      >
        <div class="drawer-hd">
          <div class="drawer-hd-left">
            <span class="drawer-badge">DOCS</span>
            <h3 class="drawer-title">{{ drawerTitle }}</h3>
          </div>
          <div class="drawer-hd-right">
            <a
              v-if="drawerUrl"
              :href="drawerUrl"
              target="_blank"
              class="drawer-fs"
            >Open full screen ↗</a>
            <button @click="closeDrawer" class="drawer-x" aria-label="Close">✕</button>
          </div>
        </div>
        <div class="drawer-bd" ref="drawerBodyEl">
          <div v-if="drawerLoading" class="drawer-sk">
            <div class="sk-bar"></div>
            <div class="sk-line" style="width:68%"></div>
            <div class="sk-line" style="width:82%"></div>
            <div class="sk-line" style="width:50%"></div>
            <div class="sk-block"></div>
            <div class="sk-line" style="width:74%"></div>
          </div>
          <div
            v-else-if="drawerHtml"
            class="vp-doc custom-doc-render"
            v-html="drawerHtml"
          ></div>
          <div v-else-if="drawerFallback" class="drawer-iframe-wrap">
            <iframe :src="drawerUrl" class="drawer-iframe"></iframe>
          </div>
          <div v-else class="drawer-empty">No content available.</div>
        </div>
      </div>
    </div>

    <!-- ── Footer ── -->
    <footer class="fab-footer">
      <div class="footer-inner">
        <span>© 2026 SophiGo · UNNC-FabLab</span>
        <a href="https://www.nexmaker.com/" target="_blank" rel="noopener">NexMaker ↗</a>
      </div>
    </footer>

  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// ── Localhost detection ──
const homeUrl = ref('/');

// ── Drawer state ──
const drawerOpen  = ref(false);
const drawerTitle = ref('');
const drawerHtml  = ref('');
const drawerUrl   = ref('');
const drawerLoading  = ref(false);
const drawerFallback = ref(false);
const drawerBodyEl   = ref(null);

async function openDrawer(path, title) {
  drawerTitle.value   = title;
  drawerOpen.value    = true;
  drawerLoading.value = true;
  drawerHtml.value    = '';
  drawerFallback.value = false;

  // Normalize path → URL
  let p = path.replace(/\.md$/, '');
  if (p.startsWith('/')) p = p.slice(1);
  if (!p.startsWith('docs/')) {
    if (!p.startsWith('courses/fab-course/')) p = 'courses/fab-course/' + p;
    p = 'docs/' + p;
  }
  const url = '/' + p;
  drawerUrl.value = url;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('not found');
    const html = await res.text();
    const doc  = new DOMParser().parseFromString(html, 'text/html');
    const body = doc.querySelector('.vp-doc');
    if (body) {
      drawerHtml.value = body.innerHTML;
    } else {
      drawerFallback.value = true;
    }
  } catch {
    drawerFallback.value = true;
  } finally {
    drawerLoading.value = false;
    if (drawerBodyEl.value) drawerBodyEl.value.scrollTop = 0;
  }
}

function closeDrawer() { drawerOpen.value = false; }

function onKey(e) {
  if (e.key === 'Escape' && drawerOpen.value) closeDrawer();
}

onMounted(() => {
  if (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  ) {
    homeUrl.value = 'http://localhost:5173';
  }
  window.addEventListener('keydown', onKey);
});
onUnmounted(() => {
  window.removeEventListener('keydown', onKey);
});


// ══════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════

// ── Lab Manage items ──
const labItems = [
  {
    title: 'Lab Rules & Guidelines',
    desc:  'Operating standards, attendance requirements, and space maintenance procedures.',
    link:  '/docs/courses/fab-course/doc/0manage/labmanage.md',
    icon:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  },
  {
    title: 'Fab Lab Introduction',
    desc:  'The global Fab Lab network, its vision, core machine inventory, and the FabAcademy program.',
    link:  '/docs/courses/fab-course/doc/Fab/FAB.md',
    icon:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>',
  },
  {
    title: 'Access & Safety',
    desc:  'Mandatory safety protocols for high-power equipment, CNC machines, and hazardous materials.',
    link:  '/docs/courses/fab-course/doc/0manage/access_safety.md',
    icon:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  },
  {
    title: 'Material & Tools',
    desc:  'Lab materials (acrylic, wood, resin) and equipment list with specs and booking procedures.',
    link:  '/docs/courses/fab-course/doc/0manage/material.md',
    icon:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  },
];

// ── Tutorials (14 modules, NexMaker order) ──
const tutorials = [
  {
    id: 1, title: 'Project Management',
    desc: 'Version control with Git, Markdown documentation, and building personal project sites with VitePress.',
    docsPath: '/docs/courses/fab-course/doc/1projectmanage/Assessment1.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    links: [
      { title: 'Git basics',   path: '/docs/courses/fab-course/doc/1projectmanage/git.md' },
      { title: 'Markdown',     path: '/docs/courses/fab-course/doc/1projectmanage/markdown.md' },
      { title: 'VitePress',    path: '/docs/courses/fab-course/doc/1projectmanage/vitepress.md' },
      { title: 'AIGC tools',   path: '/docs/courses/fab-course/doc/1projectmanage/aigc.md' },
    ],
  },
  {
    id: 2, title: 'CAD Design',
    desc: 'Parametric 3D modeling with Fusion 360 & SolidWorks. Sheet metal and AI-assisted generative design.',
    docsPath: '/docs/courses/fab-course/doc/2cad/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>',
    links: [
      { title: 'Fusion 360',        path: '/docs/courses/fab-course/doc/2cad/3D_Design_Fusion360.md' },
      { title: 'SolidWorks',         path: '/docs/courses/fab-course/doc/2cad/Solidworks.md' },
      { title: 'Parametric design',  path: '/docs/courses/fab-course/doc/2cad/parameterdesign.md' },
      { title: 'Sheet metal',        path: '/docs/courses/fab-course/doc/2cad/fusion360-sheetmetal.md' },
    ],
  },
  {
    id: 3, title: '3D Printing',
    desc: 'FDM, SLA, and HP-MJF processes. Slicing software setup and design constraints for additive manufacturing.',
    docsPath: '/docs/courses/fab-course/doc/3_3dprinter/assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3h12v6M6 14h12v8H6z"/></svg>',
    links: [
      { title: 'FDM design guide',   path: '/docs/courses/fab-course/doc/3_3dprinter/3.FDM-designguide.md' },
      { title: 'FDM machine ops',    path: '/docs/courses/fab-course/doc/3_3dprinter/4.FDM-machineoperation.md' },
      { title: 'SLA design guide',   path: '/docs/courses/fab-course/doc/3_3dprinter/6.sladesignguide.md' },
      { title: 'Slice software',     path: '/docs/courses/fab-course/doc/3_3dprinter/9.3Dslicesoftware.md' },
    ],
  },
  {
    id: 4, title: 'Electronic Design',
    desc: 'Component fundamentals, circuit laws (Ohm, Kirchhoff), schematic capture with KiCad or EasyEDA.',
    docsPath: '/docs/courses/fab-course/doc/4electric_design/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 2v4M17 2v4M7 18v4M17 18v4M2 7h4M2 17h4M18 7h4M18 17h4"/></svg>',
    links: [
      { title: 'Components',    path: '/docs/courses/fab-course/doc/4electric_design/electricparameter_component.md' },
      { title: 'Circuit basics', path: '/docs/courses/fab-course/doc/4electric_design/basicknowledge.md' },
      { title: 'EDA tools',     path: '/docs/courses/fab-course/doc/4electric_design/tool.md' },
    ],
  },
  {
    id: 5, title: 'Arduino Application',
    desc: 'Embedded C++ on open-source hardware. Sensor input, actuator control, and physical computing.',
    docsPath: '/docs/courses/fab-course/doc/5arduino/assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22v-4M12 6V2M2 12h4M18 12h4"/><path d="M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/><circle cx="12" cy="12" r="6"/></svg>',
    links: [
      { title: 'Arduino basics', path: '/docs/courses/fab-course/doc/5arduino/arduino_basic.md' },
      { title: 'Arduino code',   path: '/docs/courses/fab-course/doc/5arduino/arduino_code.md' },
      { title: 'Signal input',   path: '/docs/courses/fab-course/doc/5arduino/Arduino_Input.md' },
    ],
  },
  {
    id: 6, title: 'Laser Cutting',
    desc: 'Vector file preparation, press-fit joint design, laser engraving and cutting on non-metal materials.',
    docsPath: '/docs/courses/fab-course/doc/6laser_cutter/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/></svg>',
    links: [
      { title: 'Safety rules',    path: '/docs/courses/fab-course/doc/6laser_cutter/Safety.md' },
      { title: 'AutoCAD prep',    path: '/docs/courses/fab-course/doc/6laser_cutter/AutoCAD.md' },
      { title: 'Joint design',    path: '/docs/courses/fab-course/doc/6laser_cutter/Design_guide.md' },
      { title: 'Machine practice',path: '/docs/courses/fab-course/doc/6laser_cutter/Machine_practice.md' },
    ],
  },
  {
    id: 7, title: 'PCB Manufacture',
    desc: 'SMT surface mount assembly, reflow soldering, manual iron and hot-air rework and debugging.',
    docsPath: '/docs/courses/fab-course/doc/4electric_design/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    links: [
      { title: 'SMT assembly',     path: '/docs/courses/fab-course/doc/7PCB_manufacture/SMT.md' },
      { title: 'Manual soldering', path: '/docs/courses/fab-course/doc/7PCB_manufacture/manual.md' },
    ],
  },
  {
    id: 8, title: 'CNC Manufacture',
    desc: 'G-code programming, toolpath planning, work-coordinate setup, and 3-axis subtractive milling.',
    docsPath: '/docs/courses/fab-course/doc/8CNC_manufacture/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6M14 2v20M2 14h12"/></svg>',
    links: [
      { title: 'CNC machine types',   path: '/docs/courses/fab-course/doc/8CNC_manufacture/cnctype.md' },
      { title: 'Toolpath planning',    path: '/docs/courses/fab-course/doc/8CNC_manufacture/tool.md' },
      { title: '3-axis programming',   path: '/docs/courses/fab-course/doc/8CNC_manufacture/cncprogram.md' },
      { title: 'Machine practice',     path: '/docs/courses/fab-course/doc/8CNC_manufacture/cncmanufacture.md' },
    ],
  },
  {
    id: 9, title: 'Mold & Casting',
    desc: 'Silicone mold making from 3D-printed masters; resin and liquid-material casting processes.',
    docsPath: '/docs/courses/fab-course/doc/9MOLD/assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    links: [
      { title: 'Materials',      path: '/docs/courses/fab-course/doc/9MOLD/material.md' },
      { title: 'Mold tools',     path: '/docs/courses/fab-course/doc/9MOLD/tool.md' },
      { title: 'Casting method', path: '/docs/courses/fab-course/doc/9MOLD/method.md' },
    ],
  },
  {
    id: 10, title: 'IoT & Interaction',
    desc: 'TCP/IP, MQTT, HTTP protocols. Connecting ESP8266 microcontrollers to cloud platforms via WiFi.',
    docsPath: '/docs/courses/fab-course/doc/10IOT/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    links: [
      { title: 'IoT basics',      path: '/docs/courses/fab-course/doc/10IOT/IOT_basic.md' },
      { title: 'ESP8266 + Cloud', path: '/docs/courses/fab-course/doc/10IOT/NodeMCUESP8266_ALiYun.md' },
    ],
  },
  {
    id: 11, title: 'Interface Application Programming',
    desc: 'Processing / Node.js UI development, serial-port sensor data, and interactive installations.',
    docsPath: '/docs/courses/fab-course/doc/11Interface-application-programming/Assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    links: [
      { title: 'Processing',         path: '/docs/courses/fab-course/doc/11Interface-application-programming/processing.md' },
      { title: 'Processing + Arduino',path: '/docs/courses/fab-course/doc/11Interface-application-programming/processingwitharduino.md' },
    ],
  },
  {
    id: 12, title: 'Material & Tool',
    desc: 'Standard mechanical parts (fasteners, couplings, rails) and sourcing from Misumi, Digi-Key, Mouser.',
    docsPath: '/docs/courses/fab-course/doc/12material&tool/assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    links: [
      { title: 'Standard parts', path: '/docs/courses/fab-course/doc/12material&tool/standardcomponentpart.md' },
      { title: 'Materials list',  path: '/docs/courses/fab-course/doc/12material&tool/material.md' },
    ],
  },
  {
    id: 13, title: 'Business Plan Basics',
    desc: 'Market validation, product-user fit, cost estimation, and pitching a startup business plan.',
    docsPath: '/docs/courses/fab-course/doc/13BP/assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    links: [
      { title: 'Incubation guide', path: '/docs/courses/fab-course/doc/13BP/README.md' },
    ],
  },
  {
    id: 14, title: 'AI Vehicle',
    desc: 'Wheeled chassis kinematics, microcontroller firmware, and ROS2 with AI perception integration.',
    docsPath: '/docs/courses/fab-course/doc/14AI&vehicle/assessment.md',
    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    links: [
      { title: 'Chassis basics', path: '/docs/courses/fab-course/doc/14AI&vehicle/basic.md' },
      { title: 'AI platform sim', path: '/docs/courses/fab-course/doc/14AI&vehicle/aiplatform.md' },
    ],
  },
];

// ── Course List (all cohorts, NexMaker order) ──
const cohortGroups = [
  {
    id: 'nexmaker-1',
    institution: 'NexMaker Academy',
    year: 'Session 1',
    name: 'NexMaker Academy — Session 1',
    teams: [
      { name: 'NexMaker Academy S1', url: '/docs/courses/fab-course/class/fab-01' },
    ],
  },
  {
    id: 'nexmaker-2',
    institution: 'NexMaker Academy',
    year: 'Session 2',
    name: 'NexMaker Academy — Session 2',
    teams: [
      { name: 'NexMaker Academy S2', url: '/docs/courses/fab-course/class/fab-02' },
    ],
  },
  {
    id: 'unnc-2025',
    institution: 'UNNC FabLab',
    year: '2025',
    name: 'Fab Academy 2025 — UNNC',
    teams: [
      { name: 'FabAcademy 2025 UNNC',  url: '/docs/courses/fab-course/class/fab-2025-UNNC' },
      { name: 'UNNC FabLab 2025-2',    url: '/docs/courses/fab-course/class/fab-2025-UNNC-2' },
      { name: 'FabAcademy 2023',        url: '/docs/courses/fab-course/doc/Fab/fab2023' },
    ],
  },
  {
    id: 'zju-2023',
    institution: 'ZJU Design Engineering',
    year: '2023',
    name: 'Design Engineering 2023',
    teams: [
      { name: 'Design Engineering 2023', url: '/docs/courses/fab-course/class/fab-2023-zju-de' },
      { name: 'Design Manufacture 2023', url: '/docs/courses/fab-course/class/fab-2023-zju-dm' },
      { name: 'DE mini 2023',            url: '/docs/courses/fab-course/class/fab-2023-zju-mini' },
    ],
  },
  {
    id: 'zju-2022',
    institution: 'ZJU Design Engineering',
    year: '2022',
    name: 'Design Engineering 2022',
    teams: [
      { name: 'Design Engineering 2022', url: '/docs/courses/fab-course/class/fab-2022-zju-de' },
      { name: 'Design Manufacture 2022', url: '/docs/courses/fab-course/class/fab-2022-zju-dm' },
      { name: 'DE mini 2022',            url: '/docs/courses/fab-course/class/fab-2022-zju-mini' },
    ],
  },
  {
    id: 'zju-2021',
    institution: 'ZJU Design Engineering',
    year: '2020–2021',
    name: 'Design Engineering 2020–2021',
    teams: [
      { name: 'Design Engineering 2021', url: '/docs/courses/fab-course/class/fab-2021-zju-de' },
      { name: 'Design Manufacture 2021', url: '/docs/courses/fab-course/class/fab-2021-zju-dm' },
      { name: 'Design Engineering 2020', url: '/docs/courses/fab-course/class/fab-2020-zju-de' },
    ],
  },
  {
    id: 'zwu',
    institution: 'ZWU Interactive System',
    year: '2024–2026',
    name: 'Interactive System',
    teams: [
      { name: 'IS 2026-A1',  url: '/docs/courses/fab-course/class/FAB-2026-ZWU-01' },
      { name: 'IS 2024',     url: '/docs/courses/fab-course/class/fab-2024-zwu-Interactivesystem' },
      { name: 'IS 2+2 2024', url: '/docs/courses/fab-course/class/fab-2024-zwu-Interactivesystem2+2' },
    ],
  },
];
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* ── Reset & Root ── */
.fab-home {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #09090f;
  color: #f1f5f9;
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ── Nav ── */
.fab-nav {
  position: sticky;
  top: 0;
  z-index: 200;
  background: rgba(9, 9, 15, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  color: #f1f5f9;
  letter-spacing: -0.01em;
}
.nav-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.nav-links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 500;
  transition: color 0.15s;
}
.nav-links a:hover,
.nav-links a.nav-active {
  color: #f1f5f9;
}

/* ── Hero ── */
.hero {
  padding: 6rem 1.5rem 5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.hero-inner {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
}
.eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: #3b82f6;
  text-transform: uppercase;
  margin: 0 0 1.25rem;
}
.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 0 0 1.25rem;
  color: #f8fafc;
}
.hero h1 em {
  font-style: normal;
  color: #3b82f6;
}
.hero-sub {
  font-size: 1rem;
  color: #94a3b8;
  line-height: 1.7;
  margin: 0 0 2rem;
}
.hero-btns {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.btn-solid {
  background: #3b82f6;
  color: #fff;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.6rem 1.4rem;
  border-radius: 6px;
  transition: background 0.15s, transform 0.15s;
}
.btn-solid:hover { background: #2563eb; transform: translateY(-1px); }
.btn-outline {
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.6rem 1.4rem;
  border-radius: 6px;
  transition: border-color 0.15s, color 0.15s;
}
.btn-outline:hover { border-color: rgba(255,255,255,0.35); color: #f1f5f9; }
.hero-pills {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.pill {
  font-size: 0.75rem;
  font-weight: 500;
  color: #64748b;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
}

/* ── Sticky Section Tabs ── */
.tabs-bar {
  position: sticky;
  top: 60px;
  z-index: 100;
  background: rgba(9, 9, 15, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.tabs-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  gap: 0;
}
.stab {
  padding: 0.85rem 1.25rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #64748b;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: color 0.15s, border-color 0.15s;
}
.stab:hover {
  color: #cbd5e1;
  border-bottom-color: rgba(255,255,255,0.15);
}

/* ── Shared Section Styles ── */
.sec {
  padding: 4.5rem 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.sec-alt {
  background: rgba(255, 255, 255, 0.015);
}
.sec-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.sec-head {
  margin-bottom: 2.5rem;
}
.sec-tag {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #3b82f6;
  margin: 0 0 0.6rem;
}
.sec-head h2 {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
  color: #f8fafc;
}
.sec-sub {
  margin: 0.6rem 0 0;
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
}

/* ── Overview Layout ── */
.ov-layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 3rem;
  align-items: start;
  margin-bottom: 4rem;
}
.ov-text p {
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.8;
  margin: 0 0 1rem;
}
.ov-text p:last-child { margin: 0; }
.ov-text strong { color: #e2e8f0; font-weight: 600; }
.ov-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-left: 1px solid rgba(255,255,255,0.07);
  padding-left: 2rem;
}
.stat-block {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.stat-n {
  font-size: 2rem;
  font-weight: 700;
  color: #f8fafc;
  letter-spacing: -0.03em;
  line-height: 1;
}
.stat-n sup { font-size: 1rem; vertical-align: super; }
.stat-l {
  font-size: 0.75rem;
  color: #475569;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* ── Lab Manage (merged into Overview) ── */
.lab-head {
  margin-bottom: 1.5rem;
}
.lab-head h2 {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
  color: #f8fafc;
}
.lab-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.lab-card {
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.15s, background 0.15s;
}
.lab-card:hover {
  border-color: rgba(59, 130, 246, 0.3);
  background: rgba(59, 130, 246, 0.04);
}
.lab-icon {
  color: #3b82f6;
  display: flex;
}
.lab-body { flex: 1; }
.lab-body h3 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #e2e8f0;
  margin: 0 0 0.35rem;
}
.lab-body p {
  font-size: 0.78rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}
.lab-foot {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: 0.25rem;
  border-top: 1px solid rgba(255,255,255,0.05);
}
.lab-read-btn {
  background: none;
  border: 1px solid rgba(255,255,255,0.1);
  color: #94a3b8;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
  font-family: inherit;
}
.lab-read-btn:hover { border-color: rgba(255,255,255,0.25); color: #e2e8f0; }
.lab-open-link {
  font-size: 0.75rem;
  color: #475569;
  text-decoration: none;
  transition: color 0.15s;
}
.lab-open-link:hover { color: #94a3b8; }

/* ── Tutorials Grid ── */
.tut-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.tut-card {
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  padding: 1.25rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: border-color 0.15s, background 0.15s, transform 0.15s;
  min-height: 180px;
}
.tut-card:hover {
  border-color: rgba(59, 130, 246, 0.35);
  background: rgba(59, 130, 246, 0.04);
  transform: translateY(-2px);
}
.tc-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}
.tc-num {
  font-size: 0.7rem;
  font-weight: 700;
  color: #3b82f6;
  letter-spacing: 0.08em;
  font-feature-settings: 'tnum';
}
.tc-icon {
  color: #334155;
}
.tc-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: #e2e8f0;
  margin: 0;
  line-height: 1.3;
}
.tc-desc {
  font-size: 0.75rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
  flex: 1;
}
.tc-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.25rem;
}
.tc-link {
  font-size: 0.68rem;
  color: #475569;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 4px;
  padding: 0.15rem 0.45rem;
  cursor: pointer;
  transition: color 0.12s, border-color 0.12s;
  white-space: nowrap;
}
.tc-link:hover {
  color: #94a3b8;
  border-color: rgba(255,255,255,0.15);
}

/* ── Course List ── */
.cohort-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.cohort-row {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  align-items: start;
}
.cohort-row:last-child { border-bottom: none; }
.cohort-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-top: 0.1rem;
}
.cohort-inst {
  font-size: 0.72rem;
  font-weight: 600;
  color: #3b82f6;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.cohort-year {
  font-size: 0.75rem;
  color: #475569;
  font-weight: 500;
}
.cohort-body { display: flex; flex-direction: column; gap: 0.75rem; }
.cohort-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #e2e8f0;
  margin: 0;
}
.cohort-teams {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.team-link {
  font-size: 0.78rem;
  color: #64748b;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px;
  padding: 0.3rem 0.75rem;
  transition: color 0.15s, border-color 0.15s, background 0.15s;
  font-weight: 500;
}
.team-link:hover {
  color: #e2e8f0;
  border-color: rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.04);
}

/* ── Drawer ── */
.drawer-bg {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0);
  z-index: 500;
  pointer-events: none;
  transition: background 0.25s;
}
.drawer-bg.open {
  background: rgba(0,0,0,0.55);
  pointer-events: auto;
}
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(620px, 92vw);
  background: #0f1117;
  border-left: 1px solid rgba(255,255,255,0.08);
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 501;
}
.drawer.open { transform: translateX(0); }
.drawer-hd {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  gap: 1rem;
  flex-shrink: 0;
}
.drawer-hd-left {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  overflow: hidden;
}
.drawer-badge {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #3b82f6;
  text-transform: uppercase;
}
.drawer-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #e2e8f0;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.drawer-hd-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}
.drawer-fs {
  font-size: 0.75rem;
  color: #475569;
  text-decoration: none;
  transition: color 0.15s;
}
.drawer-fs:hover { color: #94a3b8; }
.drawer-x {
  background: none;
  border: none;
  color: #475569;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.2rem;
  line-height: 1;
  transition: color 0.15s;
  font-family: inherit;
}
.drawer-x:hover { color: #e2e8f0; }
.drawer-bd {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 1.25rem;
}

/* Skeleton */
.drawer-sk { display: flex; flex-direction: column; gap: 0.75rem; }
.sk-bar {
  height: 3px;
  background: linear-gradient(90deg, #1e293b 25%, #3b82f6 50%, #1e293b 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
  border-radius: 2px;
  margin-bottom: 0.5rem;
}
.sk-line {
  height: 12px;
  background: rgba(255,255,255,0.05);
  border-radius: 4px;
}
.sk-block {
  height: 80px;
  background: rgba(255,255,255,0.03);
  border-radius: 6px;
  margin: 0.5rem 0;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.drawer-iframe-wrap { height: 100%; min-height: 400px; }
.drawer-iframe {
  width: 100%;
  height: 100%;
  border: none;
  min-height: 400px;
}
.drawer-empty {
  color: #475569;
  font-size: 0.85rem;
  padding: 2rem 0;
  text-align: center;
}

/* VitePress doc render inside drawer */
.custom-doc-render {
  font-size: 0.85rem;
  line-height: 1.75;
  color: #94a3b8;
}
.custom-doc-render h1,
.custom-doc-render h2,
.custom-doc-render h3 {
  color: #e2e8f0;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
.custom-doc-render h1 { font-size: 1.2rem; }
.custom-doc-render h2 { font-size: 1rem; }
.custom-doc-render h3 { font-size: 0.9rem; }
.custom-doc-render p { margin: 0 0 0.75rem; }
.custom-doc-render code {
  background: rgba(255,255,255,0.06);
  border-radius: 4px;
  padding: 0.1em 0.35em;
  font-size: 0.82em;
  color: #7dd3fc;
}
.custom-doc-render pre {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
  margin: 0.75rem 0;
}
.custom-doc-render img {
  max-width: 100%;
  border-radius: 6px;
}
.custom-doc-render a {
  color: #3b82f6;
  text-decoration: none;
}
.custom-doc-render a:hover { text-decoration: underline; }

/* ── Footer ── */
.fab-footer {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 1.5rem;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #334155;
}
.footer-inner a {
  color: #334155;
  text-decoration: none;
  transition: color 0.15s;
}
.footer-inner a:hover { color: #64748b; }

/* ── Responsive ── */
@media (max-width: 900px) {
  .hero h1 { font-size: 2.25rem; }
  .tut-grid { grid-template-columns: repeat(2, 1fr); }
  .lab-grid { grid-template-columns: repeat(2, 1fr); }
  .ov-layout { grid-template-columns: 1fr; gap: 2rem; }
  .ov-stats {
    flex-direction: row;
    border-left: none;
    border-top: 1px solid rgba(255,255,255,0.07);
    padding-left: 0;
    padding-top: 1.5rem;
  }
}
@media (max-width: 600px) {
  .nav-links { display: none; }
  .hero h1 { font-size: 1.8rem; }
  .tut-grid { grid-template-columns: 1fr; }
  .lab-grid { grid-template-columns: 1fr; }
  .cohort-row { grid-template-columns: 1fr; gap: 0.5rem; }
  .tabs-inner { gap: 0; overflow-x: auto; }
  .stab { white-space: nowrap; }
}
</style>
