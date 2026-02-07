# 🔧 紧急修复 GitHub Pages 缓存

## 问题
Actions 构建成功，但网站显示旧内容

## 原因
GitHub Pages 强缓存了旧版本

## 解决方案（3选1）

### 方案1：清除浏览器缓存（最快）

1. **Chrome/Edge**：
   - 打开网站
   - 按 `Cmd + Shift + R`（Mac）或 `Ctrl + Shift + R`（Windows）
   - 或者：开发者工具 → Network 标签 → 勾选 "Disable cache" → 刷新

2. **Safari**：
   - `Cmd + Option + E` 清空缓存
   - 然后刷新页面

### 方案2：隐私模式访问

1. 打开浏览器隐私/无痕模式
2. 访问：https://tian0225.github.io/ai-beginner-evolution/

### 方案3：强制 GitHub 重新部署（最彻底）

在 GitHub 仓库操作：

1. 访问：https://github.com/Tian0225/ai-beginner-evolution/settings/pages

2. 在 "Build and deployment" 部分：
   - **Source** 改成：**Deploy from a branch**
   - **Branch** 选择：`main` / `/ (root)`
   - 点击 Save

3. 等待 2-3 分钟

4. 访问网站查看效果

5. 如果想改回 GitHub Actions：
   - 再把 Source 改回 **GitHub Actions**

---

## 推荐操作顺序

**先试方案1**（1分钟）→ **不行试方案2**（1分钟）→ **都不行试方案3**（5分钟）

---

## 为什么会这样？

GitHub Pages 的 CDN（内容分发网络）会缓存网站内容：
- **好处**：访问快
- **坏处**：更新后不会立即生效

**缓存时间**：通常几小时到1天

**强制刷新**：通过清除缓存或改变部署方式来绕过
