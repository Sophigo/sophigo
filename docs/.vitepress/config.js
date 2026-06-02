import { defineConfig } from 'vitepress'
import fabSidebar from './fab_sidebar.js'

export default defineConfig({
  title: "Sophigo Docs",
  description: "AI 时代的生存与创新工具 - 课程与规范开发文档",
  base: '/docs/', // namespace prefix for assets and pages
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/docs/logo.png' }]
  ],
  
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:5173' },
      { text: 'AI 基础应用', link: '/courses/ai-basics/' },
      { text: '移动机器人', link: '/courses/mobile-robot/' },
      { text: 'CMF 应用', link: '/courses/cmf/' },
      { text: '探讨', link: '/news/' }
    ],

    sidebar: {
      '/courses/fab-course/': fabSidebar,
      '/courses/ai-basics/': [
        {
          text: 'AI 应用基础',
          items: [
            { text: 'AI 应用基础课程', link: '/courses/ai-basics/' }
          ]
        }
      ],
      '/courses/mobile-robot/': [
        {
          text: 'AI 移动机器人',
          items: [
            { text: '课程概览', link: '/courses/mobile-robot/' },
            { text: '机器人运动学与动力学建模', link: '/courses/mobile-robot/theory' },
            { text: '底盘控制链与微处理器集成', link: '/courses/mobile-robot/hardware' },
            { text: 'ROS2 导航与感知系统', link: '/courses/mobile-robot/ros2' },
            { text: 'Sophicar 3D 底盘在线仿真', link: '/courses/mobile-robot/simulation' }
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
            { text: 'threejs 生成器', link: '/tools/threejs-generator/' },
                        { text: 'stl 报价', link: '/tools/stl-quote/stlquote.html' },
            { text: 'Mods', link: '/tools/mods/' },
            { text: '视频生成', link: '/tools/video-generation/' },
            { text: '抠图', link: '/tools/matting/' }
          ]
        }
      ],
      '/news/': [
        {
          text: '平台资讯',
          items: [
            { text: '最新动态与公告', link: '/news/' },
            { text: 'Leap71 与 Articraft 技术分析', link: '/news/techanalysis' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})
