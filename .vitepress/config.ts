import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI 小白的进化之路',
  description: '从零开始掌握 Claude Code 和 AI 工具链',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/guide/chapter1' },
      { text: 'GitHub', link: 'https://github.com/Tian0225/ai-beginner-evolution' }
    ],

    sidebar: [
      {
        text: '入门指南',
        items: [
          { text: '第1章：快速上手', link: '/guide/chapter1' },
          { text: '第2章：MCP 服务器', link: '/guide/chapter2' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tian0225' }
    ],

    footer: {
      message: '由金田和 Claude Code 共同打造',
      copyright: 'MIT License | 保留所有权利'
    }
  }
})
