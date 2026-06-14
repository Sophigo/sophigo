import { defineConfig } from 'vitepress'
import fabSidebar from './fab_sidebar.js'

export default defineConfig({
  title: "SophiGo Docs",
  description: "AI 时代的生存与创新工具 - 课程与规范开发文档",
  base: '/docs/', // namespace prefix for assets and pages
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/docs/logo.png' }]
  ],
  
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'SophiGo',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Fab 课程', link: '/courses/fab-course/' },
      { text: 'AI 基础应用', link: '/courses/ai-basics/' },
      { text: '移动机器人', link: '/courses/mobile-robot/' },
      { text: 'CMF 数字化设计', link: '/courses/cmf/' },
      { text: '探讨', link: '/news/index.html' }
    ],

    sidebar: {
      '/courses/fab-course/': fabSidebar,
      '/courses/ai-basics/': [
        {
          text: 'AI 基础应用',
          items: [
            { text: 'AI 基础应用课程', link: '/courses/ai-basics/' },
            { text: '课程详细方案', link: '/courses/ai-basics/aibasic' }
          ]
        }
      ],
      '/courses/mobile-robot/': [
        {
          text: 'AI 移动机器人',
          items: [
            { text: '课程概况', link: '/courses/mobile-robot/' },
            {
              text: '初中组',
              link: '/courses/mobile-robot/middle-school/',
              collapsed: false,
              items: [
                { text: '1 问题挖掘', link: '/courses/mobile-robot/middle-school/1' },
                { text: '2 功能定义', link: '/courses/mobile-robot/middle-school/2' },
                { text: '3 参数化结构设计与数字制造', link: '/courses/mobile-robot/middle-school/3' },
                { text: '4 嵌入式基础', link: '/courses/mobile-robot/middle-school/4' },
                { text: '5 基础软硬件调试（一）', link: '/courses/mobile-robot/middle-school/5' },
                { text: '6 基础软硬件调试（二）', link: '/courses/mobile-robot/middle-school/6' },
                { text: '7 全栈 Vibe Coding', link: '/courses/mobile-robot/middle-school/7' },
                { text: '8 交互', link: '/courses/mobile-robot/middle-school/8' },
                { text: '9 多模态语音交互集成与轻量化结构优化（一）', link: '/courses/mobile-robot/middle-school/9' },
                { text: '10 多模态语音交互集成与轻量化结构优化（二）', link: '/courses/mobile-robot/middle-school/10' },
                { text: '11 包装', link: '/courses/mobile-robot/middle-school/11' },
                { text: '12 发布', link: '/courses/mobile-robot/middle-school/12' }
              ]
            },
            {
              text: '高中组',
              link: '/courses/mobile-robot/high-school/',
              collapsed: false,
              items: [
                { text: '1 开营与社会痛点问题定义', link: '/courses/mobile-robot/high-school/1' },
                { text: '2 功能定义', link: '/courses/mobile-robot/high-school/2' },
                { text: '3 参数化结构设计', link: '/courses/mobile-robot/high-school/3' },
                { text: '4 数字制造', link: '/courses/mobile-robot/high-school/4' },
                { text: '5 嵌入式基础', link: '/courses/mobile-robot/high-school/5' },
                { text: '6 机械臂与底盘控制', link: '/courses/mobile-robot/high-school/6' },
                { text: '7 全栈 Vibe Coding', link: '/courses/mobile-robot/high-school/7' },
                { text: '8 具身智能控制落地：基于边缘视觉的端云协同抓取', link: '/courses/mobile-robot/high-school/8' },
                { text: '9 数字孪生', link: '/courses/mobile-robot/high-school/9' },
                { text: '10 系统集成与包装（一）', link: '/courses/mobile-robot/high-school/10' },
                { text: '11 系统集成与包装（二）', link: '/courses/mobile-robot/high-school/11' },
                { text: '12 发布', link: '/courses/mobile-robot/high-school/12' }
              ]
            },
            {
              text: '初中班级',
              collapsed: false,
              items: [
                { text: 'J0601', link: '/courses/mobile-robot/classes/j0601/' },
                { text: 'J0602', link: '/courses/mobile-robot/classes/j0602/' }
              ]
            },
            {
              text: '高中班级',
              collapsed: false,
              items: [
                { text: 'S0601', link: '/courses/mobile-robot/classes/s0601/' },
                { text: 'S0602', link: '/courses/mobile-robot/classes/s0602/' }
              ]
            }
          ]
        }
      ],
      '/courses/cmf/': [
        {
          text: 'CMF 规范',
          items: [
            { text: 'CMF 设计美学与规范', link: '/courses/cmf/' }
          ]
        }
      ],
      '/tools/': [
        {
          text: '数字化辅助工具',
          items: [
            { text: 'CMF 应用', link: '/courses/cmf/' },
            { text: '参数化设计车辆', link: 'https://sophicar.com/' },
            { text: '3D生成器', link: '/tools/threejs-generator/app.html' },
                        { text: 'stl 报价', link: '/tools/stl-quote/stlquote.html' },
            { text: 'Mods', link: 'https://modsproject.org/' },
            { text: '视频生成', link: '/tools/video-generation/' },
            { text: '抠图', link: '/tools/matting/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})
