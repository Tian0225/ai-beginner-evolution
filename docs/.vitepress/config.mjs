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
    siteTitle: 'AI 小白的进化之路',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/quickstart' },
      { text: '系统教程', link: '/guide/chapter1' },
      { text: '常见问题', link: '/guide/faq' },
      { text: '推荐资源', link: '/guide/resources' }
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
      },
      {
        text: '💡 帮助与资源',
        items: [
          { text: '常见问题 (FAQ)', link: '/guide/faq' },
          { text: '推荐资源', link: '/guide/resources' },
          { text: '更新日志', link: '/guide/changelog' }
        ]
      }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_API_KEY',
        indexName: 'ai-beginner-evolution',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tian0225/ai-beginner-evolution' }
    ],

    footer: {
      message: '由金田和 Claude Code 共同打造',
      copyright: 'MIT License | 保留所有权利'
    }
  }
})
