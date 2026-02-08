# 贡献指南

感谢你对"AI 小白的进化之路"项目的关注！我们欢迎各种形式的贡献。

---

## 🎯 如何贡献

### 报告问题

如果你发现了 bug 或有新的功能建议：

1. **检查现有 Issues**：
   - 在 [GitHub Issues](https://github.com/Tian0225/ai-beginner-evolution/issues) 中搜索是否已有类似问题
   - 如果有，请在该 Issue 下评论补充信息
   - 如果没有，创建新的 Issue

2. **创建 Issue 时请包含**：
   - 清晰的标题
   - 详细的描述
   - 复现步骤（如果是 bug）
   - 预期行为和实际行为
   - 环境信息（操作系统、浏览器版本等）
   - 截图（如果 applicable）

### 提交代码

如果你想贡献代码：

1. **Fork 仓库**
   ```bash
   # 在 GitHub 上点击 Fork 按钮
   ```

2. **克隆你的 Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-beginner-evolution.git
   cd ai-beginner-evolution
   ```

3. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

4. **进行修改**
   - 遵循项目的代码风格
   - 添加必要的注释
   - 更新相关文档

5. **测试修改**
   ```bash
   # 本地预览
   npm run docs:dev

   # 构建测试
   npm run docs:build
   ```

6. **提交修改**
   ```bash
   git add .
   git commit -m "描述你的修改"
   ```

   **提交信息格式**：
   - `feat: 添加新功能`
   - `fix: 修复 bug`
   - `docs: 更新文档`
   - `style: 代码格式调整`
   - `refactor: 代码重构`
   - `test: 添加测试`
   - `chore: 构建/工具链更新`

7. **推送到 GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **创建 Pull Request**
   - 在 GitHub 上创建 Pull Request
   - 填写 PR 模板
   - 等待 review

---

## 📝 贡献类型

我们欢迎以下类型的贡献：

### 内容贡献

- ✍️ **撰写新章节**：添加新的教程内容
- 🐛 **修正错误**：修正文档中的错误
- 📚 **补充内容**：添加示例、案例、说明
- 🌍 **翻译**：翻译成其他语言
- 🎨 **改进排版**：优化文档结构和格式

### 代码贡献

- 🔧 **功能开发**：实现新功能
- 🐛 **Bug 修复**：修复现有问题
- ⚡ **性能优化**：提升网站性能
- 🧪 **添加测试**：提高代码覆盖率
- 📦 **依赖更新**：更新依赖包

### 设计贡献

- 🎨 **UI 设计**：改进用户界面
- 🖼️ **图标/图片**：提供更好的视觉素材
- 🎭 **主题定制**：设计新的配色方案

---

## 🎨 内容创作指南

### 写作风格

我们的目标是让内容**通俗易懂**，适合初学者：

**✅ 好的例子**：
```markdown
## 什么是 MCP？

MCP 就像给 AI 对话接入世界上其他工具的能力，例如：
- 网络搜索
- 读取文件
- 看图片
```

**❌ 不好的例子**：
```markdown
MCP 是一种协议，用于 LLM 与外部服务器通信，实现工具调用。
```

### 格式规范

**使用清晰的标题结构**：
```markdown
# 一级标题（章节）
## 二级标题（小节）
### 三级标题（要点）
```

**使用列表提高可读性**：
```markdown
- 项目1
- 项目2
  - 子项目2.1
  - 子项目2.2
```

**使用表格进行对比**：
```markdown
| 特性 | 选项A | 选项B |
|------|-------|-------|
| 价格 | 便宜 | 贵 |
```

**代码块指定语言**：
````markdown
```bash
# bash 命令
npm install

```python
# Python 代码
def hello():
    print("Hello")
```
````

### 实战案例

每个章节应包含：
1. **场景描述**：什么时候用
2. **实施步骤**：具体怎么做
3. **完整示例**：可以直接复制使用
4. **关键技巧**：注意事项和最佳实践

---

## 🔧 开发环境设置

### 前置要求

- Node.js 18+
- npm 或 yarn
- Git

### 安装依赖

```bash
# 克隆仓库
git clone https://github.com/Tian0225/ai-beginner-evolution.git
cd ai-beginner-evolution

# 安装依赖
npm install
```

### 本地开发

```bash
# 启动开发服务器
npm run docs:dev

# 访问 http://localhost:5173
```

### 构建生产版本

```bash
# 构建
npm run docs:build

# 预览构建结果
npm run docs:preview
```

---

## ✅ 代码审查标准

你的 Pull Request 需要满足：

### 内容质量

- [ ] 内容准确，没有技术错误
- [ ] 语言通俗易懂，适合初学者
- [ ] 有实际例子和代码演示
- [ ] 格式规范，排版清晰

### 代码质量

- [ ] 代码能正常运行
- [ ] 没有语法错误
- [ ] 遵循项目代码风格
- [ ] 有必要的注释

### 文档完整

- [ ] 更新了相关文档
- [ ] 添加了必要的说明
- [ ] 提交信息清晰

---

## 📧 联系方式

**项目维护者**：金田

**联系方式**：
- GitHub：[@Tian0225](https://github.com/Tian0225)
- Email：tian0225@example.com

**社区**：
- GitHub Issues：问题反馈
- GitHub Discussions：功能讨论

---

## 🙏 致谢

感谢所有贡献者！你的贡献将帮助更多人学习 Claude Code 和 AI 工具链。

---

**最后更新**：2026-02-08
