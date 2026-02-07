const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, '../docs/.vitepress/dist')

// 递归处理所有 HTML 文件
function injectStyles(dir) {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      injectStyles(filePath)
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf-8')

      // 在 </head> 前插入样式链接
      if (!content.includes('theme.css')) {
        content = content.replace(
          '</head>',
          '    <link rel="stylesheet" href="/theme.css">\n  </head>'
        )

        fs.writeFileSync(filePath, content, 'utf-8')
        console.log(`✓ 已注入样式到 ${filePath}`)
      }
    }
  })
}

console.log('开始注入自定义样式...')
injectStyles(distDir)
console.log('完成!')
