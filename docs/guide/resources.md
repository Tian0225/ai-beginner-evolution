# 推荐资源

> 精选的学习资源、工具和社区，助你快速进阶

---

## 📚 官方资源

### Claude Code 官方

- **官方网站**：https://claude.ai/code
- **官方文档**：https://docs.claude.com/claude-code
- **GitHub 仓库**：https://github.com/anthropics/claude-code
- **更新日志**：https://github.com/anthropics/claude-code/releases

### Anthropic 官方

- **公司官网**：https://www.anthropic.com/
- **Claude API 文档**：https://docs.anthropic.com/
- **Blog**：https://www.anthropic.com/blog

---

## 🎓 学习教程

### 入门级

**1. 本教程（AI 小白的进化之路）**
- 作者：金田
- 特点：中文、实战、详细
- 地址：https://tian0225.github.io/ai-beginner-evolution/

**2. Claude Code 官方入门**
- 官方快速开始指南
- 英文，但有机器翻译
- 地址：https://docs.claude.com/claude-code/quickstart

**3. 宝玉的 Claude Code 实战系列**
- 作者：宝玉（@dotey）
- 特点：深入浅出，实战案例丰富
- 微信公众号：宝玉的博客
- Twitter：https://x.com/dotey

### 进阶级

**4. Introduction to Neural Networks**
- 作者：Andrej Karpathy（@karpathy）
- 特点：深度理解 AI 原理
- YouTube 视频教程
- 地址：https://www.youtube.com/watch?v=aircAruvnKk

**5. Agentic Workflow 深度解析**
- 作者：Orange（@oran_ge）
- 特点：Agent 工作流前沿实践
- Twitter：https://x.com/oran_ge
- 技术博客：https://orange.cn/

---

## 🛠️ MCP 服务器

### 推荐 MCP Servers

**1. Kimi K2.5（推荐⭐⭐⭐）**
- **功能**：中文搜索、长文档、截图转代码
- **安装**：
  ```bash
  git clone https://github.com/moonshot-kimi/mcp-server-kimi.git ~/.claude/mcp-servers/kimi-k2.5
  cd ~/.claude/mcp-servers/kimi-k2.5
  npm install
  ```
- **文档**：https://github.com/moonshot-kimi/mcp-server-kimi

**2. ZAI MCP Server（推荐⭐⭐）**
- **功能**：图片分析、视频分析、UI 转 HTML
- **安装**：
  ```bash
  npx -y @zai-mcp/server
  ```
- **文档**：https://github.com/zai-mcp/server

**3. Antigravity Browser（推荐⭐⭐⭐）**
- **功能**：真实浏览器自动化、登录、截图
- **特点**：适合复杂网页交互
- **配置**：需要 Antigravity API 反代服务

### MCP 资源

- **MCP 官方文档**：https://modelcontextprotocol.io/
- **MCP Servers 列表**：https://github.com/modelcontextprotocol/servers
- **社区 MCP Servers**：GitHub 搜索 `mcp-server`

---

## 🎯 Skills 推荐社区

### 前端开发

**`/frontend-design`** - 现代前端设计
- 安装：
  ```bash
  npx skills-installer install /frontend-design --client claude-code
  ```
- 特点：无 AI 默认的蓝紫色，设计质量高

**`/react-best-practices`** - React 最佳实践
- 包含 React 18+ 最新特性
- Hooks 最佳实践

**`/vue3-composition`** - Vue 3 Composition API
- Vue 3 组合式 API
- TypeScript 支持

### 后端开发

**`/nodejs-api`** - Node.js API 开发
- Express/Fastify/Koa
- RESTful API 设计

**`/python-clean-architecture`** - Python 清洁架构
- 分层架构
- 依赖注入

**`/go-api-design`** - Go API 设计
- Go 标准实践
- 性能优化

### 写作

**`/tech-blog`** - 技术博客写作
- Markdown 格式
- 技术文章结构

**`/tutorial-writing`** - 教程写作
- 循序渐进
- 代码示例丰富

**`/documentation`** - 技术文档
- API 文档
- 用户手册

### 数据分析

**`/data-exploration`** - 数据探索
- Python pandas
- 数据清洗

**`/visualization`** - 数据可视化
- Matplotlib/Seaborn
- 图表设计

**`/ml-experiment`** - 机器学习实验
- Scikit-learn
- 实验管理

### 如何安装 Skills

**方法1：命令行安装**
```bash
npx skills-installer install /skill-name --client claude-code
```

**方法2：手动安装**
```bash
# 1. 下载 Skill
git clone https://github.com/xxx/skill-name.git skills/skill-name

# 2. 让 Claude Code 学习
# 在对话中说：
我已经创建了 xxx skill，位于 skills/skill-name/SKILL.md
请学习这个 skill
```

---

## 🌐 国产 AI 模型

### GLM（智谱）

- **官网**：https://open.bigmodel.cn/
- **特点**：
  - 中文能力强
  - 代码生成好
  - 价格便宜（¥0.12/百万 tokens）
- **Coding 套餐**：54 元/季（超值！）
  - 购买链接：https://www.bigmodel.cn/glm-coding?ic=3YPQJTRVHI

### Kimi（月之暗面）

- **官网**：https://platform.moonshot.cn/
- **特点**：
  - 中文搜索强
  - 长文档处理（128K tokens）
  - 有免费额度
- **价格**：¥0.5/百万 tokens

### MiniMax

- **官网**：https://api.minimax.chat/
- **特点**：
  - 角色扮演强
  - 对话自然
  - 价格便宜
- **价格**：¥0.15/百万 tokens

### Gemini（Google）

- **官网**：https://ai.google.dev/
- **特点**：
  - 多模态强
  - 有免费版
  - 速度快
- **免费额度**：每天 1500 次

### 模型对比

| 模型 | 中文 | 代码 | 长文本 | 多模态 | 价格 |
|------|------|------|--------|--------|------|
| **Claude** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 贵 |
| **GLM** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | 便宜 |
| **Kimi** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | 中等 |
| **MiniMax** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | 便宜 |
| **Gemini** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 免费 |

---

## 🔧 实用工具

### 配置工具

**Coding Tool Helper**
- 用途：配置国产模型到 Claude Code
- 安装：
  ```bash
  npx @z_ai/coding-helper
  ```
- 特点：中文界面，一键配置

**Skills Installer**
- 用途：安装社区 Skills
- 安装：
  ```bash
  npx skills-installer install /skill-name --client claude-code
  ```

### 开发工具

**VitePress** - 静态网站生成器
- 官网：https://vitepress.dev/
- 用于生成本教程网站

**VSCode** - 代码编辑器
- 官网：https://code.visualstudio.com/
- Claude Code 推荐编辑器

**Antigravity** - AI 助手
- 官网：（需自行搜索）
- 推荐 Claude Code 插件

### 监控工具

**API 使用量监控**
- 让 Claude Code 帮你创建监控脚本
- 记录 token 使用、成本、每日汇总

---

## 👥 社区

### 中文社区

**知乎**
- 搜索：Claude Code
- 标签：ai、编程、效率工具

**B站**
- 搜索：Claude Code 教程
- 推荐：实战演示视频

**GitHub 中文**
- 搜索：claude-code
- 查看 Stars 最多的中文项目

### 国际社区

**Twitter/X**
- 标签：#claudecode
- 关注：@anthropic、@karpathy、@dotey

**Discord**
- Anthropic 官方 Discord
- Claude Code 频道

**Reddit**
- r/Claude
- r/LocalLLaMA

---

## 📰 博客和新闻

### 推荐博主

**宝玉（@dotey）**
- 微信公众号：宝玉的博客
- Twitter：https://x.com/dotey
- 特点：深入浅出，实战经验丰富

**Orange（@oran_ge）**
- Twitter：https://x.com/oran_ge
- 技术博客：https://orange.cn/
- 特点：前沿技术，深度分析

**Andrej Karpathy（@karpathy）**
- Twitter：https://x.com/karpathy
- YouTube：讲解 AI 原理
- 特点：OpenAI 创始成员，权威

### 技术媒体

**机器之心**
- 网址：https://www.jiqizhixin.com/
- AI 领域新闻

**量子位**
- 网址：https://www.qbitai.com/
- AI 行业动态

**InfoQ**
- 网址：https://www.infoq.cn/
- 技术趋势

---

## 📖 推荐书籍

### AI 基础

**《深度学习》** - Ian Goodfellow
- AI 领域"圣经"
- 适合深入理解原理

**《机器学习实战》** - Peter Harrington
- Python 实践
- 适合动手学习

### 编程实践

**《代码整洁之道》** - Robert C. Martin
- 编程最佳实践
- 提升代码质量

**《重构：改善既有代码的设计》** - Martin Fowler
- 重构技巧
- Claude Code 常用操作

---

## 🎓 在线课程

**Coursera**
- Machine Learning（Andrew Ng）
- Deep Learning Specialization

**Udacity**
- AI Programming with Python
- Deep Learning Nanodegree

**国内平台**
- 网易云课堂：AI 相关课程
- 腾讯课堂：Python、机器学习
- B站：免费教程很多

---

## 🔗 相关链接

### API 文档

- **OpenAI API**：https://platform.openai.com/docs/
- **Anthropic API**：https://docs.anthropic.com/
- **GLM API**：https://open.bigmodel.cn/dev/api
- **Kimi API**：https://platform.moonshot.cn/docs

### 开源项目

- **Everything Claude Code**：https://github.com/anthropics/everything-claude-code
- **MCP Servers**：https://github.com/modelcontextprotocol/servers
- **Awesome Claude Code**：GitHub 搜索

---

## 💡 贡献资源

如果你知道好的资源，欢迎贡献！

**方式**：
1. Fork 本仓库
2. 在 `resources.md` 中添加资源
3. 提交 Pull Request

**要求**：
- 资源必须是真实有效的
- 简要描述资源特点
- 提供链接（如果有的话）

---

## 📧 联系方式

**作者**：金田
**GitHub**：https://github.com/Tian0225
**Email**：tian0225@example.com

---

**最后更新**：2026-02-08
**维护者**：金田
