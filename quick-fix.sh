#!/bin/bash
set -e

echo "🔧 开始修复网站部署问题..."

# 进入项目目录
cd "$(dirname "$0")"

# 1. 清理缓存和旧构建
echo "1️⃣ 清理缓存..."
rm -rf docs/.vitepress/dist
rm -rf docs/.vitepress/cache
rm -rf docs/.vitepress/.temp

# 2. 重新构建
echo "2️⃣ 重新构建网站..."
npm run docs:build

# 3. 验证构建产物
echo "3️⃣ 验证构建产物..."
if grep -q "AI 小白的进化之路" docs/.vitepress/dist/index.html; then
    echo "✅ 构建成功！内容正确"
else
    echo "❌ 构建失败！内容不正确"
    exit 1
fi

# 4. 提交并推送
echo "4️⃣ 提交并推送..."
git add .
git commit -m "fix: 完整修复网站部署问题

- 修复 VitePress 配置文件
- 清理缓存并重新构建
- 验证构建产物内容正确
- 禁用父项目的 pre-push hook

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>" || true

git push origin main

echo "✅ 完成！"
echo "📖 请访问：https://tian0225.github.io/ai-beginner-evolution/"
echo "🔄 如果还是旧内容，请按 Cmd + Shift + R 强制刷新"
