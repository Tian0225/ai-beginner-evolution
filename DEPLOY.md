# 部署指南

## 🚀 快速部署到 GitHub Pages

### 步骤1：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名称：`ai-beginner-evolution`
3. 描述：`AI 小白的进化之路 - Claude Code 和 AI 工具链实战教程`
4. 选择 Public（公开）
5. **不要**勾选 "Add a README file"
6. 点击 "Create repository"

### 步骤2：推送代码

创建仓库后，复制你的仓库 URL（类似 `https://github.com/Tian0225/ai-beginner-evolution.git`），然后在终端执行：

```bash
cd ai-beginner-evolution
git remote add origin https://github.com/YOUR_USERNAME/ai-beginner-evolution.git
git branch -M main
git push -u origin main
```

### 步骤3：启用 GitHub Pages

1. 进入仓库的 **Settings**（设置）
2. 点击左侧 **Pages**
3. 在 **Build and deployment** 下：
   - Source: 选择 **GitHub Actions**
4. 保存（会自动部署）

### 步骤4：访问网站

等待约 1-2 分钟，访问：
```
https://YOUR_USERNAME.github.io/ai-beginner-evolution/
```

对于你的账户：
```
https://tian0225.github.io/ai-beginner-evolution/
```

---

## 🔄 自动部署

配置完成后，每次你推送代码到 `main` 分支，GitHub Actions 会自动：
1. 构建网站
2. 部署到 GitHub Pages
3. 3分钟内生效

查看部署状态：
- 仓库 **Actions** 标签页

---

## 🧪 本地预览

```bash
npm run docs:dev
```

访问 http://localhost:5173

---

## 📝 更新内容

1. 修改 `docs/` 目录下的 Markdown 文件
2. 提交并推送：
   ```bash
   git add .
   git commit -m "更新章节内容"
   git push
   ```
3. 等待自动部署完成

---

**提示**：第一次部署可能需要 3-5 分钟，请耐心等待！
