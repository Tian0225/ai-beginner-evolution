# 🚀 手动触发 GitHub Actions 部署

## 当前状态
✅ 代码已推送到 GitHub
✅ `.github/workflows/deploy.yml` 文件已存在

## 方法1：手动触发 Workflow（推荐）

1. 访问：https://github.com/Tian0225/ai-beginner-evolution/actions

2. 点击左侧的 **"Deploy VitePress site to Pages"** workflow

3. 点击右侧 **"Run workflow"** 按钮

4. 确认：
   - Branch: `main`
   - 点击绿色 **"Run workflow"** 按钮

5. 等待约 2-3 分钟，查看构建结果

## 方法2：检查 Actions 是否运行

1. 访问：https://github.com/Tian0225/ai-beginner-evolution/actions

2. 查看是否有 recent workflow runs

3. 如果有，点击查看详情
4. 等待显示绿色 ✅

## 方法3：手动推送空提交触发

```bash
cd /Users/jitian/Documents/金田工作室/ai-beginner-evolution

git commit --allow-empty -m "trigger: 触发 GitHub Actions 部署"
git push origin main
```

---

## 部署成功后

访问网站：https://tian0225.github.io/ai-beginner-evolution/

---

## 如果还是不行

可能是因为：
1. GitHub Pages 权限未启用
2. Workflow 文件有语法错误

### 检查权限

1. Settings → Actions → General
2. 滚动到 **"Workflow permissions"**
3. 选择 **"Read and write permissions"**
4. 点击 **Save**

### 重新选择 GitHub Pages Source

1. Settings → Pages
2. **Source** 选择 **"Deploy from a branch"**
3. 选择 **"main"** 分支和 **"/ (root)"** 目录
4. 点击 **Save**
5. 等待部署（这种方式更简单！）
