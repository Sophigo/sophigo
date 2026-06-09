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
    title: 'Lab Rules & Guidelines',
    desc: 'Operating standards, attendance, and space maintenance procedures.',
    link: '/docs/courses/fab-course/doc/0manage/labmanage.html',
    icon: SVG_ICONS.folder,
  },
  {
    title: 'Fab Lab Network',
    desc: 'Global Fab Lab vision, MIT CBA origin, core machine inventory, and FabAcademy program.',
    link: '/docs/courses/fab-course/doc/Fab/FAB.html',
    icon: SVG_ICONS.globe,
  },
  {
    title: 'Access & Safety',
    desc: 'Mandatory safety protocols for high-power equipment, CNC, and hazardous materials.',
    link: '/docs/courses/fab-course/doc/0manage/access_safety.html',
    icon: SVG_ICONS.shield,
  },
  {
    title: 'Material & Equipment',
    desc: 'Lab materials (acrylic, wood, resin) and equipment list with booking procedures.',
    link: '/docs/courses/fab-course/doc/0manage/material.html',
    icon: SVG_ICONS.tool,
  },
];

const TUTORIALS = [
  { id: 1, title: 'Project Management', icon: SVG_ICONS.folder, desc: 'Git, Markdown, static site deployment with VitePress/GitHub Pages, and AIGC-assisted documentation workflows.',
    docsPath: '/docs/courses/fab-course/doc/1projectmanage/Assessment1.html' },
  { id: 2, title: 'CAD Design', icon: SVG_ICONS.box, desc: 'Parametric 3D modeling in Fusion 360 & SolidWorks. Sheet metal, generative design.',
    docsPath: '/docs/courses/fab-course/doc/2cad/Assessment.html' },
  { id: 3, title: '3D Printing', icon: SVG_ICONS.printer, desc: 'FDM, SLA, HP-MJF processes. Slicing, design constraints, and post-processing.',
    docsPath: '/docs/courses/fab-course/doc/3_3dprinter/assessment.html' },
  { id: 4, title: 'Electronic Design', icon: SVG_ICONS.cpu, desc: 'Component fundamentals, Ohm/Kirchhoff laws, schematic capture with KiCad or EasyEDA.',
    docsPath: '/docs/courses/fab-course/doc/4electric_design/Assessment.html' },
  { id: 5, title: 'Arduino Application', icon: SVG_ICONS.radio, desc: 'Embedded C++ on open hardware. Sensor input, actuator control, physical computing.',
    docsPath: '/docs/courses/fab-course/doc/5arduino/assessment.html' },
  { id: 6, title: 'Laser Cutting', icon: SVG_ICONS.crop, desc: 'Vector files, press-fit joints, engraving and cutting on acrylic, wood, and cardstock.',
    docsPath: '/docs/courses/fab-course/doc/6laser_cutter/Assessment.html' },
  { id: 7, title: 'PCB Manufacture', icon: SVG_ICONS.zap, desc: 'SMT assembly, reflow soldering, manual iron and hot-air rework and inspection.',
    docsPath: '/docs/courses/fab-course/doc/4electric_design/Assessment.html' },
  { id: 8, title: 'CNC Manufacture', icon: SVG_ICONS.hardDrive, desc: 'G-code programming, toolpath planning, work offsets, and 3-axis subtractive milling.',
    docsPath: '/docs/courses/fab-course/doc/8CNC_manufacture/Assessment.html' },
  { id: 9, title: 'Mold & Casting', icon: SVG_ICONS.layers, desc: 'Silicone mold making from 3D-printed masters, resin and liquid casting.',
    docsPath: '/docs/courses/fab-course/doc/9MOLD/assessment.html' },
  { id: 10, title: 'IoT & Interaction', icon: SVG_ICONS.wifi, desc: 'TCP/IP, MQTT, HTTP. ESP8266 to cloud platforms for sensor data and remote control.',
    docsPath: '/docs/courses/fab-course/doc/10IOT/Assessment.html' },
  { id: 11, title: 'Interface Application Programming', icon: SVG_ICONS.terminal, desc: 'Processing/Node.js UIs, serial-port data visualization, and interactive installations.',
    docsPath: '/docs/courses/fab-course/doc/11Interface-application-programming/Assessment.html' },
  { id: 12, title: 'Material & Tool', icon: SVG_ICONS.package, desc: 'Standard parts (fasteners, rails, couplings), sourcing from Misumi, Digi-Key, Mouser.',
    docsPath: '/docs/courses/fab-course/doc/12material&tool/assessment.html' },
  { id: 13, title: 'Business Plan Basics', icon: SVG_ICONS.briefcase, desc: 'Market validation, product-user fit, cost estimation, and startup pitching.',
    docsPath: '/docs/courses/fab-course/doc/13BP/assessment.html' },
  { id: 14, title: 'AI Vehicle', icon: SVG_ICONS.bot, desc: 'Wheeled chassis kinematics, MCU firmware, and ROS2 with AI perception integration.',
    docsPath: '/docs/courses/fab-course/doc/14AI&vehicle/assessment.html' },
];

const COHORT_GROUPS = [
  { id: 'nexmaker-1', institution: 'NexMaker Academy', year: 'Session 1', name: 'NexMaker Academy — Session 1',
    teams: [{ name: 'Academy S1', url: '/docs/courses/fab-course/class/fab-01.html' }] },
  { id: 'nexmaker-2', institution: 'NexMaker Academy', year: 'Session 2', name: 'NexMaker Academy — Session 2',
    teams: [{ name: 'Academy S2', url: '/docs/courses/fab-course/class/fab-02.html' }] },
  { id: 'unnc', institution: 'UNNC FabLab', year: '2023–2025', name: 'Fab Academy UNNC',
    teams: [
      { name: 'FabAcademy 2025', url: '/docs/courses/fab-course/class/fab-2025-UNNC.html' },
      { name: 'UNNC 2025-2', url: '/docs/courses/fab-course/class/fab-2025-UNNC-2.html' },
      { name: 'FabAcademy 2023', url: '/docs/courses/fab-course/doc/Fab/fab2023.html' },
    ] },
  { id: 'zju-2023', institution: 'ZJU Design Engineering', year: '2023', name: 'DE / DM 2023',
    teams: [
      { name: 'DE 2023', url: '/docs/courses/fab-course/class/fab-2023-zju-de.html' },
      { name: 'DM 2023', url: '/docs/courses/fab-course/class/fab-2023-zju-dm.html' },
      { name: 'Mini 2023', url: '/docs/courses/fab-course/class/fab-2023-zju-mini.html' },
    ] },
  { id: 'zju-2022', institution: 'ZJU Design Engineering', year: '2022', name: 'DE / DM 2022',
    teams: [
      { name: 'DE 2022', url: '/docs/courses/fab-course/class/fab-2022-zju-de.html' },
      { name: 'DM 2022', url: '/docs/courses/fab-course/class/fab-2022-zju-dm.html' },
      { name: 'Mini 2022', url: '/docs/courses/fab-course/class/fab-2022-zju-mini.html' },
    ] },
  { id: 'zju-2020-21', institution: 'ZJU Design Engineering', year: '2020–2021', name: 'DE / DM 2020–2021',
    teams: [
      { name: 'DE 2021', url: '/docs/courses/fab-course/class/fab-2021-zju-de.html' },
      { name: 'DM 2021', url: '/docs/courses/fab-course/class/fab-2021-zju-dm.html' },
      { name: 'DE 2020', url: '/docs/courses/fab-course/class/fab-2020-zju-de.html' },
    ] },
  { id: 'zwu', institution: 'ZWU Interactive System', year: '2024–2026', name: 'Interactive System Program',
    teams: [
      { name: 'IS 2026-A1', url: '/docs/courses/fab-course/class/FAB-2026-ZWU-01.html' },
      { name: 'IS 2024', url: '/docs/courses/fab-course/class/fab-2024-zwu-Interactivesystem.html' },
      { name: 'IS 2+2 2024', url: '/docs/courses/fab-course/class/fab-2024-zwu-Interactivesystem2+2.html' },
    ] },
];


export default function FabCourse({ onBack, lang = 'zh' }) {
  return (
    <div style={{ paddingTop: '3rem', paddingBottom: '4rem', minHeight: '80vh', position: 'relative', zIndex: 5 }}>
      <div className="container-custom">

        {/* ── Hero ── */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--klein-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            Fab Lab · Digital Fabrication
          </span>
          <h1 className="title-hero text-gradient" style={{ marginBottom: '1rem' }}>
            How to Make<br />Almost Everything
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
            Built on the MIT FabAcademy curriculum and the global Fab Lab network.
            Learn full-stack engineering — from digital fabrication fundamentals to AI-integrated prototyping.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {['14 Modules', 'MIT FabAcademy', '400+ Students', 'UNNC · ZJU · ZWU'].map((pill, i) => (
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
              { id: 'overview', label: 'Overview' },
              { id: 'lab', label: 'Lab Manage' },
              { id: 'tutorials', label: 'Tutorials' },
              { id: 'courses', label: 'Course List' },
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
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--klein-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>OVERVIEW</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, margin: '0 0 0.5rem' }}>What is Fab Lab?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: '2.5rem', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '0.75rem' }}>
                A <strong style={{ color: 'var(--text-primary)' }}>Fab Lab</strong> (Fabrication Laboratory) is a digital fabrication workspace originally developed by MIT's Center for Bits and Atoms. Equipped with a standardized set of CNC machines, 3D printers, laser cutters, and electronics tools, participants can design and build almost anything — from custom circuit boards to IoT devices to structural prototypes.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '0.75rem' }}>
                The <strong style={{ color: 'var(--text-primary)' }}>FabAcademy</strong> is a distributed education program delivered globally via the Fab Lab network. Students complete weekly hands-on assignments — each producing a physical artifact — covering the full stack from design to fabrication to firmware.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                At <strong style={{ color: 'var(--text-primary)' }}>UNNC-FabLab / NexMaker</strong>, we adapt this curriculum to build engineers who think in full-stack terms: combining mechanical design, electronics, AI tools, and product thinking into one coherent learning path.
              </p>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div><div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>2000<sup style={{ fontSize: '0.75rem', verticalAlign: 'super' }}>+</sup></div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.15rem' }}>Fab Labs worldwide</div></div>
              <div><div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>14</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.15rem' }}>Core modules</div></div>
              <div><div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>MIT</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.15rem' }}>Curriculum origin</div></div>
            </div>
          </div>
        </section>

        {/* ═══ Section 2: Lab Manage ═══ */}
        <section id="fc-lab" style={{ marginBottom: '4rem', padding: '3rem', borderRadius: '20px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--klein-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>LAB MANAGE</span>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0 0 0.25rem' }}>Lab Operations</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Essential documentation before entering and working in the Fab Lab.</p>
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
                    <span>{lang === 'zh' ? '查看文档细节' : 'View Doc Details'}</span>
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
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--klein-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>TUTORIALS</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, margin: '0 0 0.25rem' }}>14 Core Modules</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>From project documentation and CAD design to AI vehicle development. Click any card to open docs.</p>
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
                  <span>{lang === 'zh' ? '查看文档细节' : 'View Doc Details'}</span>
                  <ExternalLink size={12} style={{ flexShrink: 0 }} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Section 4: Course List ═══ */}
        <section id="fc-courses" style={{ marginBottom: '4rem', padding: '3rem', borderRadius: '20px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--klein-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>COURSE LIST</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, margin: '0 0 0.25rem' }}>Classes & Teams</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Student cohorts from UNNC FabLab, ZJU, ZWU, and NexMaker Academy. Click any team to view their project site.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {COHORT_GROUPS.map((group) => (
              <div key={group.id} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '1.25rem', padding: '1.25rem 0', borderBottom: '1px solid var(--border-color)' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--klein-blue)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{group.institution}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '0.15rem' }}>{group.year}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{group.name}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {group.teams.map((team) => (
                      <a key={team.name} href={team.url} target={team.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', textDecoration: 'none', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '0.25rem 0.7rem', fontWeight: 500, transition: 'color 0.15s, border-color 0.15s, background 0.15s', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                        className="fc-team-link">
                        {team.name} <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Styles */}
      <style>{`
        .fc-lab-card { transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
        .fc-lab-card:hover { border-color: rgba(0, 47, 167, 0.45) !important; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12); }
        .fc-tut-card { transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
        .fc-tut-card:hover { border-color: rgba(0, 47, 167, 0.45) !important; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12); }
        .fc-team-link:hover { color: var(--text-primary) !important; border-color: var(--klein-blue) !important; background: rgba(0,47,167,0.04) !important; }

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
