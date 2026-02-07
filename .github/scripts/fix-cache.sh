#!/bin/bash
# 添加 no-cache 文件，强制 GitHub Pages 重新部署

echo "Creating no-cache files to force GitHub Pages refresh..."

# 在所有 HTML 页面添加版本标识
find docs/.vitepress/dist -name "*.html" -type f 2>/dev/null | while read file; do
    # 在 head 中添加 cache-busting meta
    sed -i '' '/<head>/a\
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">\
    <meta http-equiv="Pragma" content="no-cache">\
    <meta http-equiv="Expires" content="0">
' "$file"
done

echo "Done! Now commit and push."
