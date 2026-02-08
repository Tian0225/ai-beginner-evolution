import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Evolution Path',
  description: '从零开始掌握 Claude Code 和 AI 工具链',
  head: [
    ['link', { rel: 'stylesheet', href: '/theme.css', id: 'custom-theme' }]
  ],

  transformHead: ({ pageData }) => {
    // 确保每个页面都加载自定义样式
    return [
      ['link', { rel: 'stylesheet', href: '/theme.css', id: 'custom-theme' }]
    ]
  },

  themeConfig: {
    siteTitle: 'AI Evolution Path',
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/guide/quickstart' },
      { text: '社区', link: '/' },
      { text: '关于我们', link: '/' }
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
      { icon: 'github', link: 'https://github.com/Tian0225/ai-beginner-evolution' }
    ],

    footer: {
      message: '由金田和 Claude Code 共同打造',
      copyright: 'MIT License | 保留所有权利'
    }
  }
})
