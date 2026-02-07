import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI 小白的进化之路',
  description: '从零开始掌握 Claude Code 和 AI 工具链',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/Tian0225/ai-beginner-evolution' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '30秒快速上手', link: '/guide/quickstart' },
          { text: '完整入门指南', link: '/guide/full-guide' }
        ]
      }
    ]
  }
})
