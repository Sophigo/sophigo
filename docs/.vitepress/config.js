import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ProFabX Docs",
  description: "AI 时代的生存与创新工具 - 课程与规范开发文档",
  base: '/docs/', // namespace prefix for assets and pages
  
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '返回主站', link: process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:5173' },
      { text: '开发文档主页', link: '/' },
      { 
        text: '课程目录', 
        items: [
          { text: '移动机器人', link: '/courses/mobile-robot' },
          { text: 'Fab 课程', link: '/courses/fab-course' },
          { text: 'CMF 规范', link: '/courses/cmf' }
        ]
      }
    ],

    sidebar: [
      {
        text: '数字化产品课程',
        items: [
          { text: '移动机器人 (Mobile Robots)', link: '/courses/mobile-robot' },
          { text: 'Fab 课程 (Fab Labs)', link: '/courses/fab-course' },
          { text: 'CMF 设计规范', link: '/courses/cmf' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})
