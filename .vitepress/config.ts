import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI 小白的进化之路',
  description: '从零开始掌握 Claude Code 和 AI 工具链',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'stylesheet', href: '/theme/style.css' }]
  ],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/guide/chapter1' },
      { text: 'GitHub', link: 'https://github.com/Tian0225/ai-beginner-evolution' }
    ],

    sidebar: [
      {
        text: '🚀 快速开始',
        items: [
          { text: '30秒快速上手', link: '/guide/quickstart' },
          { text: '完整入门指南', link: '/guide/full-guide' }
        ]
      },
      {
        text: '📖 系统教程',
        items: [
          { text: '第1章：快速上手', link: '/guide/chapter1' },
          { text: '第2章：MCP 服务器', link: '/guide/chapter2' },
          { text: '第3章：Skills 系统', link: '/guide/chapter3' },
          { text: '第4章：API 集成', link: '/guide/chapter4' },
          { text: '第5章：实战项目', link: '/guide/chapter5' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tian0225' }
    ],

    footer: {
      message: '由金田和 Claude Code 共同打造',
      copyright: 'MIT License | 保留所有权利'
    },

    editLink: {
      pattern: 'https://github.com/Tian0225/ai-beginner-evolution/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
