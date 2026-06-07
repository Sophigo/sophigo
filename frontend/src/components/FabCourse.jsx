import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft, BookOpen, Cpu, Layers, Globe, Users, Shield, Zap,
  ExternalLink, FileText, X, Loader2, ChevronRight, Wrench,
  Monitor, Printer, CircuitBoard, Radio, Crop, Cpu as CpuIcon,
  HardDrive, Droplets, Wifi, Terminal, Package, Briefcase, Bot,
  ClubIcon as Tool, CheckCircle, MapPin, Calendar, Github
} from 'lucide-react';

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
    link: '/docs/courses/fab-course/doc/0manage/labmanage.md',
    icon: SVG_ICONS.folder,
  },
  {
    title: 'Fab Lab Network',
    desc: 'Global Fab Lab vision, MIT CBA origin, core machine inventory, and FabAcademy program.',
    link: '/docs/courses/fab-course/doc/Fab/FAB.md',
    icon: SVG_ICONS.globe,
  },
  {
    title: 'Access & Safety',
    desc: 'Mandatory safety protocols for high-power equipment, CNC, and hazardous materials.',
    link: '/docs/courses/fab-course/doc/0manage/access_safety.md',
    icon: SVG_ICONS.shield,
  },
  {
    title: 'Material & Equipment',
    desc: 'Lab materials (acrylic, wood, resin) and equipment list with booking procedures.',
    link: '/docs/courses/fab-course/doc/0manage/material.md',
    icon: SVG_ICONS.tool,
  },
];

const TUTORIALS = [
  { id: 1, title: 'Project Management', icon: SVG_ICONS.folder, desc: 'Git, Markdown, static site deployment with VitePress/GitHub Pages, and AIGC-assisted documentation workflows.',
    docsPath: '/docs/courses/fab-course/doc/1projectmanage/Assessment1.md',
    links: [
      { title: 'Git basics', path: '/docs/courses/fab-course/doc/1projectmanage/git.md' },
      { title: 'Markdown', path: '/docs/courses/fab-course/doc/1projectmanage/markdown.md' },
      { title: 'VitePress', path: '/docs/courses/fab-course/doc/1projectmanage/vitepress.md' },
      { title: 'AIGC tools', path: '/docs/courses/fab-course/doc/1projectmanage/aigc.md' },
    ] },
  { id: 2, title: 'CAD Design', icon: SVG_ICONS.box, desc: 'Parametric 3D modeling in Fusion 360 & SolidWorks. Sheet metal, generative design.',
    docsPath: '/docs/courses/fab-course/doc/2cad/Assessment.md',
    links: [
      { title: 'Fusion 360', path: '/docs/courses/fab-course/doc/2cad/3D_Design_Fusion360.md' },
      { title: 'SolidWorks', path: '/docs/courses/fab-course/doc/2cad/Solidworks.md' },
      { title: 'Parametric', path: '/docs/courses/fab-course/doc/2cad/parameterdesign.md' },
      { title: 'Sheet metal', path: '/docs/courses/fab-course/doc/2cad/fusion360-sheetmetal.md' },
    ] },
  { id: 3, title: '3D Printing', icon: SVG_ICONS.printer, desc: 'FDM, SLA, HP-MJF processes. Slicing, design constraints, and post-processing.',
    docsPath: '/docs/courses/fab-course/doc/3_3dprinter/assessment.md',
    links: [
      { title: 'FDM design', path: '/docs/courses/fab-course/doc/3_3dprinter/3.FDM-designguide.md' },
      { title: 'FDM ops', path: '/docs/courses/fab-course/doc/3_3dprinter/4.FDM-machineoperation.md' },
      { title: 'SLA design', path: '/docs/courses/fab-course/doc/3_3dprinter/6.sladesignguide.md' },
      { title: 'Slicing', path: '/docs/courses/fab-course/doc/3_3dprinter/9.3Dslicesoftware.md' },
    ] },
  { id: 4, title: 'Electronic Design', icon: SVG_ICONS.cpu, desc: 'Component fundamentals, Ohm/Kirchhoff laws, schematic capture with KiCad or EasyEDA.',
    docsPath: '/docs/courses/fab-course/doc/4electric_design/Assessment.md',
    links: [
      { title: 'Components', path: '/docs/courses/fab-course/doc/4electric_design/electricparameter_component.md' },
      { title: 'Basics', path: '/docs/courses/fab-course/doc/4electric_design/basicknowledge.md' },
      { title: 'EDA tools', path: '/docs/courses/fab-course/doc/4electric_design/tool.md' },
    ] },
  { id: 5, title: 'Arduino Application', icon: SVG_ICONS.radio, desc: 'Embedded C++ on open hardware. Sensor input, actuator control, physical computing.',
    docsPath: '/docs/courses/fab-course/doc/5arduino/assessment.md',
    links: [
      { title: 'Basics', path: '/docs/courses/fab-course/doc/5arduino/arduino_basic.md' },
      { title: 'Code', path: '/docs/courses/fab-course/doc/5arduino/arduino_code.md' },
      { title: 'Input', path: '/docs/courses/fab-course/doc/5arduino/Arduino_Input.md' },
      { title: 'Output', path: '/docs/courses/fab-course/doc/5arduino/Arduino_output.md' },
    ] },
  { id: 6, title: 'Laser Cutting', icon: SVG_ICONS.crop, desc: 'Vector files, press-fit joints, engraving and cutting on acrylic, wood, and cardstock.',
    docsPath: '/docs/courses/fab-course/doc/6laser_cutter/Assessment.md',
    links: [
      { title: 'Safety', path: '/docs/courses/fab-course/doc/6laser_cutter/Safety.md' },
      { title: 'AutoCAD', path: '/docs/courses/fab-course/doc/6laser_cutter/AutoCAD.md' },
      { title: 'Design guide', path: '/docs/courses/fab-course/doc/6laser_cutter/Design_guide.md' },
      { title: 'Machine practice', path: '/docs/courses/fab-course/doc/6laser_cutter/Machine_practice.md' },
    ] },
  { id: 7, title: 'PCB Manufacture', icon: SVG_ICONS.zap, desc: 'SMT assembly, reflow soldering, manual iron and hot-air rework and inspection.',
    docsPath: '/docs/courses/fab-course/doc/4electric_design/Assessment.md',
    links: [
      { title: 'SMT assembly', path: '/docs/courses/fab-course/doc/7PCB_manufacture/SMT.md' },
      { title: 'Soldering', path: '/docs/courses/fab-course/doc/7PCB_manufacture/manual.md' },
    ] },
  { id: 8, title: 'CNC Manufacture', icon: SVG_ICONS.hardDrive, desc: 'G-code programming, toolpath planning, work offsets, and 3-axis subtractive milling.',
    docsPath: '/docs/courses/fab-course/doc/8CNC_manufacture/Assessment.md',
    links: [
      { title: 'Types', path: '/docs/courses/fab-course/doc/8CNC_manufacture/cnctype.md' },
      { title: 'Toolpath', path: '/docs/courses/fab-course/doc/8CNC_manufacture/tool.md' },
      { title: 'Programming', path: '/docs/courses/fab-course/doc/8CNC_manufacture/cncprogram.md' },
      { title: 'Practice', path: '/docs/courses/fab-course/doc/8CNC_manufacture/cncmanufacture.md' },
    ] },
  { id: 9, title: 'Mold & Casting', icon: SVG_ICONS.layers, desc: 'Silicone mold making from 3D-printed masters, resin and liquid casting.',
    docsPath: '/docs/courses/fab-course/doc/9MOLD/assessment.md',
    links: [
      { title: 'Materials', path: '/docs/courses/fab-course/doc/9MOLD/material.md' },
      { title: 'Tools', path: '/docs/courses/fab-course/doc/9MOLD/tool.md' },
      { title: 'Methods', path: '/docs/courses/fab-course/doc/9MOLD/method.md' },
    ] },
  { id: 10, title: 'IoT & Interaction', icon: SVG_ICONS.wifi, desc: 'TCP/IP, MQTT, HTTP. ESP8266 to cloud platforms for sensor data and remote control.',
    docsPath: '/docs/courses/fab-course/doc/10IOT/Assessment.md',
    links: [
      { title: 'IoT basics', path: '/docs/courses/fab-course/doc/10IOT/IOT_basic.md' },
      { title: 'ESP8266+Cloud', path: '/docs/courses/fab-course/doc/10IOT/NodeMCUESP8266_ALiYun.md' },
    ] },
  { id: 11, title: 'Interface Application Programming', icon: SVG_ICONS.terminal, desc: 'Processing/Node.js UIs, serial-port data visualization, and interactive installations.',
    docsPath: '/docs/courses/fab-course/doc/11Interface-application-programming/Assessment.md',
    links: [
      { title: 'Processing', path: '/docs/courses/fab-course/doc/11Interface-application-programming/processing.md' },
      { title: 'Processing+Arduino', path: '/docs/courses/fab-course/doc/11Interface-application-programming/processingwitharduino.md' },
    ] },
  { id: 12, title: 'Material & Tool', icon: SVG_ICONS.package, desc: 'Standard parts (fasteners, rails, couplings), sourcing from Misumi, Digi-Key, Mouser.',
    docsPath: '/docs/courses/fab-course/doc/12material&tool/assessment.md',
    links: [
      { title: 'Standard parts', path: '/docs/courses/fab-course/doc/12material&tool/standardcomponentpart.md' },
      { title: 'Materials', path: '/docs/courses/fab-course/doc/12material&tool/material.md' },
    ] },
  { id: 13, title: 'Business Plan Basics', icon: SVG_ICONS.briefcase, desc: 'Market validation, product-user fit, cost estimation, and startup pitching.',
    docsPath: '/docs/courses/fab-course/doc/13BP/assessment.md',
    links: [
      { title: 'Guide', path: '/docs/courses/fab-course/doc/13BP/README.md' },
    ] },
  { id: 14, title: 'AI Vehicle', icon: SVG_ICONS.bot, desc: 'Wheeled chassis kinematics, MCU firmware, and ROS2 with AI perception integration.',
    docsPath: '/docs/courses/fab-course/doc/14AI&vehicle/assessment.md',
    links: [
      { title: 'Chassis', path: '/docs/courses/fab-course/doc/14AI&vehicle/basic.md' },
      { title: 'AI platform', path: '/docs/courses/fab-course/doc/14AI&vehicle/aiplatform.md' },
    ] },
];

const COHORT_GROUPS = [
  { id: 'nexmaker-1', institution: 'NexMaker Academy', year: 'Session 1', name: 'NexMaker Academy — Session 1',
    teams: [{ name: 'Academy S1', url: '/docs/courses/fab-course/class/fab-01' }] },
  { id: 'nexmaker-2', institution: 'NexMaker Academy', year: 'Session 2', name: 'NexMaker Academy — Session 2',
    teams: [{ name: 'Academy S2', url: '/docs/courses/fab-course/class/fab-02' }] },
  { id: 'unnc', institution: 'UNNC FabLab', year: '2023–2025', name: 'Fab Academy UNNC',
    teams: [
      { name: 'FabAcademy 2025', url: '/docs/courses/fab-course/class/fab-2025-UNNC' },
      { name: 'UNNC 2025-2', url: '/docs/courses/fab-course/class/fab-2025-UNNC-2' },
      { name: 'FabAcademy 2023', url: '/docs/courses/fab-course/doc/Fab/fab2023' },
    ] },
  { id: 'zju-2023', institution: 'ZJU Design Engineering', year: '2023', name: 'DE / DM 2023',
    teams: [
      { name: 'DE 2023', url: '/docs/courses/fab-course/class/fab-2023-zju-de' },
      { name: 'DM 2023', url: '/docs/courses/fab-course/class/fab-2023-zju-dm' },
      { name: 'Mini 2023', url: '/docs/courses/fab-course/class/fab-2023-zju-mini' },
    ] },
  { id: 'zju-2022', institution: 'ZJU Design Engineering', year: '2022', name: 'DE / DM 2022',
    teams: [
      { name: 'DE 2022', url: '/docs/courses/fab-course/class/fab-2022-zju-de' },
      { name: 'DM 2022', url: '/docs/courses/fab-course/class/fab-2022-zju-dm' },
      { name: 'Mini 2022', url: '/docs/courses/fab-course/class/fab-2022-zju-mini' },
    ] },
  { id: 'zju-2020-21', institution: 'ZJU Design Engineering', year: '2020–2021', name: 'DE / DM 2020–2021',
    teams: [
      { name: 'DE 2021', url: '/docs/courses/fab-course/class/fab-2021-zju-de' },
      { name: 'DM 2021', url: '/docs/courses/fab-course/class/fab-2021-zju-dm' },
      { name: 'DE 2020', url: '/docs/courses/fab-course/class/fab-2020-zju-de' },
    ] },
  { id: 'zwu', institution: 'ZWU Interactive System', year: '2024–2026', name: 'Interactive System Program',
    teams: [
      { name: 'IS 2026-A1', url: '/docs/courses/fab-course/class/FAB-2026-ZWU-01' },
      { name: 'IS 2024', url: '/docs/courses/fab-course/class/fab-2024-zwu-Interactivesystem' },
      { name: 'IS 2+2 2024', url: '/docs/courses/fab-course/class/fab-2024-zwu-Interactivesystem2+2' },
    ] },
];


export default function FabCourse({ onBack }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState('');
  const [drawerUrl, setDrawerUrl] = useState('');
  const [drawerHtml, setDrawerHtml] = useState('');
  const [drawerLoading, setDrawerLoading] = useState(false);
  const [drawerFallback, setDrawerFallback] = useState(false);
  const drawerBodyRef = useRef(null);

  const openDrawer = async (path, title) => {
    setDrawerTitle(title);
    setDrawerOpen(true);
    setDrawerLoading(true);
    setDrawerHtml('');
    setDrawerFallback(false);

    let p = path.replace(/\.md$/, '');
    if (p.startsWith('/')) p = p.slice(1);
    if (!p.startsWith('docs/') && !p.startsWith('courses/')) {
      p = 'docs/courses/fab-course/' + p;
    } else if (p.startsWith('courses/')) {
      p = 'docs/' + p;
    }
    const url = '/' + p;
    setDrawerUrl(url);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('not found');
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const body = doc.querySelector('.vp-doc');
      if (body) {
        setDrawerHtml(body.innerHTML);
      } else {
        setDrawerFallback(true);
      }
    } catch {
      setDrawerFallback(true);
    } finally {
      setDrawerLoading(false);
      if (drawerBodyRef.current) drawerBodyRef.current.scrollTop = 0;
    }
  };

  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && drawerOpen) closeDrawer(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [drawerOpen]);

  return (
    <div style={{ paddingTop: '3rem', paddingBottom: '4rem', minHeight: '80vh', position: 'relative', zIndex: 5 }}>
      <div className="container-custom">

        {/* Back */}
        <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.25rem', fontSize: '0.85rem', borderRadius: '20px', cursor: 'pointer', marginBottom: '2rem', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-secondary)' }}>
          <ArrowLeft size={16} />
          Back to Home
        </button>

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
              <div key={item.title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', transition: 'border-color 0.15s' }}
                className="fc-lab-card">
                <div style={{ color: 'var(--klein-blue)', display: 'flex' }} dangerouslySetInnerHTML={{ __html: item.icon }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 600, margin: '0 0 0.3rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.35rem', borderTop: '1px solid var(--border-color)' }}>
                  <button onClick={() => openDrawer(item.link, item.title)} style={{ background: 'none', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.7rem', fontWeight: 500, padding: '0.25rem 0.6rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit' }}>
                    Read
                  </button>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
                    Full screen ↗
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
              <div key={tut.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', padding: '1.15rem', borderRadius: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', cursor: 'pointer', transition: 'border-color 0.15s, transform 0.15s', minHeight: '155px' }}
                className="fc-tut-card"
                onClick={() => openDrawer(tut.docsPath, tut.title)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.15rem' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--klein-blue)', letterSpacing: '0.08em' }}>{String(tut.id).padStart(2, '0')}</span>
                  <div style={{ color: 'var(--border-color)' }} dangerouslySetInnerHTML={{ __html: tut.icon }} />
                </div>
                <h3 style={{ fontSize: '0.82rem', fontWeight: 600, margin: 0, color: 'var(--text-primary)', lineHeight: '1.3' }}>{tut.title}</h3>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0, flex: 1 }}>{tut.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '0.15rem' }}>
                  {tut.links.slice(0, 3).map((link) => (
                    <span key={link.title} onClick={(e) => { e.stopPropagation(); openDrawer(link.path, link.title); }}
                      style={{ fontSize: '0.64rem', color: 'var(--text-muted)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '0.1rem 0.4rem', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 0.12s, border-color 0.12s' }}
                      className="fc-tut-link">
                      {link.title}
                    </span>
                  ))}
                  {tut.links.length > 3 && <span style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>+{tut.links.length - 3}</span>}
                </div>
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

      {/* ═══ Slide-in Drawer ═══ */}
      <div style={{
        position: 'fixed', inset: 0, background: drawerOpen ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0)',
        zIndex: 500, pointerEvents: drawerOpen ? 'auto' : 'none', transition: 'background 0.25s'
      }} onClick={closeDrawer}>
        <div style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, width: 'min(620px, 92vw)',
          background: 'var(--bg-primary)', borderLeft: '1px solid var(--border-color)',
          display: 'flex', flexDirection: 'column',
          transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)', zIndex: 501
        }} onClick={(e) => e.stopPropagation()}>
          {/* Drawer Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)', gap: '1rem', flexShrink: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', overflow: 'hidden' }}>
              <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--klein-blue)', textTransform: 'uppercase' }}>DOCS</span>
              <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{drawerTitle}</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
              {drawerUrl && <a href={drawerUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Open full screen ↗</a>}
              <button onClick={closeDrawer} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '1rem', cursor: 'pointer', padding: '0.2rem', lineHeight: 1, fontFamily: 'inherit' }}>✕</button>
            </div>
          </div>
          {/* Drawer Body */}
          <div ref={drawerBodyRef} style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 1.25rem' }}>
            {drawerLoading && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div className="fc-sk-bar" />
                <div className="fc-sk-line" style={{ width: '68%' }} />
                <div className="fc-sk-line" style={{ width: '82%' }} />
                <div className="fc-sk-line" style={{ width: '50%' }} />
                <div className="fc-sk-block" />
                <div className="fc-sk-line" style={{ width: '74%' }} />
              </div>
            )}
            {!drawerLoading && drawerHtml && (
              <div className="fc-doc-render" dangerouslySetInnerHTML={{ __html: drawerHtml }} />
            )}
            {!drawerLoading && drawerFallback && (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                  Could not load document preview.
                </p>
                <a href={drawerUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--klein-blue)', fontSize: '0.9rem' }}>
                  Open in full screen ↗
                </a>
              </div>
            )}
            {!drawerLoading && !drawerHtml && !drawerFallback && (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                No content available.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .fc-lab-card:hover { border-color: rgba(0, 47, 167, 0.3) !important; }
        .fc-tut-card:hover { border-color: rgba(0, 47, 167, 0.35) !important; transform: translateY(-2px); }
        .fc-tut-link:hover { color: var(--text-secondary) !important; border-color: rgba(0, 47, 167, 0.3) !important; }
        .fc-team-link:hover { color: var(--text-primary) !important; border-color: var(--klein-blue) !important; background: rgba(0,47,167,0.04) !important; }

        .fc-sk-bar { height: 3px; background: linear-gradient(90deg, var(--border-color) 25%, var(--klein-blue) 50%, var(--border-color) 75%); background-size: 200% 100%; animation: fc-shimmer 1.4s infinite; border-radius: 2px; margin-bottom: 0.5rem; }
        .fc-sk-line { height: 12px; background: var(--border-color); border-radius: 4px; }
        .fc-sk-block { height: 80px; background: rgba(0,0,0,0.03); border-radius: 6px; margin: 0.5rem 0; }

        @keyframes fc-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        .fc-doc-render { font-size: 0.85rem; line-height: 1.75; color: var(--text-secondary); }
        .fc-doc-render h1, .fc-doc-render h2, .fc-doc-render h3 { color: var(--text-primary); font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.5rem; }
        .fc-doc-render h1 { font-size: 1.15rem; }
        .fc-doc-render h2 { font-size: 1rem; }
        .fc-doc-render h3 { font-size: 0.88rem; }
        .fc-doc-render p { margin: 0 0 0.75rem; }
        .fc-doc-render code { background: var(--border-color); border-radius: 4px; padding: 0.1em 0.35em; font-size: 0.82em; color: #7dd3fc; }
        .fc-doc-render pre { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin: 0.75rem 0; }
        .fc-doc-render img { max-width: 100%; border-radius: 6px; }
        .fc-doc-render a { color: var(--klein-blue); text-decoration: none; }
        .fc-doc-render a:hover { text-decoration: underline; }
        .fc-doc-render ul, .fc-doc-render ol { padding-left: 1.5rem; margin-bottom: 0.75rem; }
        .fc-doc-render li { margin-bottom: 0.25rem; }

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
