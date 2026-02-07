# 第2章：MCP 服务器

## 2.1 什么是 MCP？

### 技术定义

**MCP（Model Context Protocol，模型上下文协议）** 是 Anthropic 制定的一套 API 规范，用于 LLM（Large Language Model，大语言模型）与外部服务器通信。

### 金田讲解

MCP 就是给 AI 对话**接入世界上其他工具**的能力，例如：
- 🌐 网络搜索（Kimi、Gemini）
- 📄 网页阅读（提取文章内容）
- 📁 读取文件（PDF、代码、Markdown）
- 🖼️ 看图片（OCR、分析图表）
- 🎥 分析视频（摘要、字幕）

**类比理解**：
> MCP 对 AI，就像 App Store 对 iPhone。
>
> - 没有 App Store：iPhone 只能打电话、发短信
> - 有了 App Store：iPhone 能装微信、抖音、地图，变成万能工具
>
> - 没有 MCP：AI 只能聊天、写代码
> - 有了 MCP：AI 能搜索、看图、读文件，变成全能助手

---

## 2.2 MCP 的核心组件

### 1. MCP Server（服务器）

**技术定义**：
一个运行在本地的 HTTP 服务器，提供具体的工具能力（如搜索、OCR）。

**金田讲解**：
MCP Server 就像**工具的供应商**：
- Kimi MCP Server：提供搜索、长文档能力
- ZAI MCP Server：提供图片识别、视频分析能力
- Antigravity MCP Server：提供浏览器自动化能力

**例子**：
```bash
# 启动 Kimi MCP Server
node ~/.claude/mcp-servers/kimi-k2.5/server.js
# 运行在 http://localhost:3001
```

### 2. MCP Client（客户端）

**技术定义**：
Claude Code 内置的 MCP 客户端，负责连接和调用 MCP Server。

**金田讲解**：
Claude Code 就是**工具的使用者**，它：
1. 读取 `.mcp.json` 配置文件
2. 连接到配置的 MCP Servers
3. 调用工具时，发送请求到对应 Server
4. 接收结果并展示给你

### 3. Tools（工具）

**技术定义**：
MCP Server 暴露的具体功能，每个工具有名称、描述、参数。

**金田讲解**：
Tools 就是**具体的工具功能**，比如：

**Kimi MCP Server 提供**：
- `kimi_chat`：联网搜索和对话
- `long_context`：处理长文档（128K tokens）
- `vision_to_code`：截图转代码

**ZAI MCP Server 提供**：
- `extract_text_from_screenshot`：OCR 文字提取
- `analyze_video`：视频内容分析
- `ui_to_artifact`：UI 截图转代码

---

## 2.3 配置 MCP 服务器

### 步骤1：创建配置文件

在项目根目录创建 `.mcp.json`：

```json
{
  "mcpServers": {
    "kimi-k2.5": {
      "command": "node",
      "args": ["/Users/jitian/.claude/mcp-servers/kimi-k2.5/server.js"],
      "env": {
        "KIMI_API_KEY": "sk-EgMh1zC8S0wSkwrwbCHgvYPKwaMEcQlgEYJRzJnjeGuGxulm"
      }
    },
    "zai-mcp-server": {
      "command": "npx",
      "args": ["-y", "@zai-mcp/server"],
      "env": {
        "ZAI_API_KEY": "your-zai-key"
      }
    }
  }
}
```

**金田讲解**：
- `mcpServers`：所有 MCP 服务器的列表
- `kimi-k2.5`：服务器名称（自己起的）
- `command`：启动命令（`node` 或 `npx`）
- `args`：启动参数（服务器文件路径）
- `env`：环境变量（API Key）

### 步骤2：在 Claude Code 中启用

在 `.claude/settings.json` 中添加：

```json
{
  "enableAllProjectMcpServers": true
}
```

### 步骤3：验证配置

重启 Claude Code，在聊天框输入：

```
请用 Kimi 搜索今天成都的天气
```

如果看到成功回复，说明 MCP 配置成功！🎉

---

## 2.4 实战案例1：联网搜索

### 场景
你正在写代码，需要查询某个库的最新文档。

### 传统方式
1. 打开浏览器
2. 搜索库名
3. 找到官网
4. 查找文档
5. 复制粘贴

### 使用 MCP

**你输入**：
```
请用 Kimi 搜索"VitePress 最新版本"
```

**Claude Code 会**：
1. 调用 `kimi_chat` 工具
2. 搜索实时信息
3. 总结答案：
   ```
   VitePress 最新版本是 1.6.4（2026年2月发布）
   主要特性：
   - 更快的构建速度
   - 改进的搜索功能
   - 支持 Vue 3.5
   ```

---

## 2.5 实战案例2：长文档处理

### 场景
你需要阅读一个 50 页的 PDF 技术文档。

### 传统方式
- 😰 打开 PDF，一页页翻阅
- 😰 手动记笔记
- 😰 花费 1-2 小时

### 使用 MCP

**你输入**：
```
请用 Kimi long_context 分析这份 PDF：
docs/technical-spec.pdf
重点提取：
1. 核心功能
2. 技术架构
3. 注意事项
```

**Claude Code 会**：
1. 调用 `long_context` 工具（支持 128K tokens）
2. 读取整个 PDF
3. 结构化输出：
   ```markdown
   ## 核心功能
   - 支持实时协作
   - 内置权限管理

   ## 技术架构
   - 前端：Vue 3 + Vite
   - 后端：Node.js + PostgreSQL

   ## 注意事项
   - 需要配置 CORS
   - 生产环境需启用 HTTPS
   ```

**时间对比**：
- 传统方式：1-2 小时
- MCP 方式：2-3 分钟 ✅

---

## 2.6 常见问题

### Q1：MCP 和 API 有什么区别？

**技术定义**：
- **API（Application Programming Interface）**：应用程序接口，通用的技术概念
- **MCP（Model Context Protocol）**：专门为 LLM 设计的接口协议

**金田讲解**：
> MCP 是一种**特殊的 API**，专门给 AI 用。
>
> 普通API：需要写代码调用（`fetch('https://api.xxx.com')`）
> MCP API：AI 直接调用，不需要你写代码
>
> 类比：
> - 普通API：像去餐厅吃饭，需要自己点餐、付款
> - MCP API：像请保姆，她直接帮你搞定一切

### Q2：为什么要本地运行 MCP Server？

**安全考虑**：
- ✅ API Key 不用暴露给第三方
- ✅ 数据不经过其他服务器
- ✅ 可以离线使用（某些工具）

**金田讲解**：
> 本地运行就像**家里装了净水器**，水（数据）在自己家里过滤，不用送到外面处理。

### Q3：免费 MCP Server 和付费的区别？

**对比**：

| 特性 | 免费版 | 付费版 |
|------|--------|--------|
| API 限额 | 有限（如每月100次） | 不限或很高 |
| 响应速度 | 较慢 | 更快 |
| 功能完整性 | 基础功能 | 全功能 |
| 技术支持 | 无 | 有 |

**金田建议**：
- 🔰 **新手**：先用免费版测试（如 Kimi 充值 50 元）
- 🚀 **重度用户**：考虑付费版（如 Kimi 包月）
- 💼 **商业项目**：必须用付费版（稳定性和支持）

---

## 2.7 推荐的 MCP Servers

### 1. Kimi K2.5（推荐⭐⭐⭐）

**功能**：
- 🌐 中文联网搜索
- 📚 长文档处理（128K）
- 🖼️ 截图转代码
- 🤖 Agent 集群协作

**成本**：
- 按量付费：50 元 ≈ 100 万 tokens
- 适合：个人和小团队

**安装**：
```bash
git clone https://github.com/moonshot-kimi/mcp-server-kimi.git ~/.claude/mcp-servers/kimi-k2.5
cd ~/.claude/mcp-servers/kimi-k2.5
npm install
```

### 2. ZAI MCP Server（推荐⭐⭐）

**功能**：
- 📷 图片分析（OCR、图表、UI）
- 🎥 视频分析
- 🔍 数据可视化分析
- 🎨 UI 截图转代码

**成本**：
- 部分免费，部分付费
- 适合：视觉类项目

**安装**：
```bash
npx -y @zai-mcp/server
```

### 3. Antigravity Browser（推荐⭐⭐⭐）

**功能**：
- 🌐 真实浏览器自动化
- 🔐 登录、表单填写
- 📸 网页截图
- 📊 数据抓取

**成本**：
- 需要自建或付费服务
- 适合：复杂网页交互

**安装**：
需要配置 Antigravity API 反代服务

---

## 2.8 下一步

恭喜你掌握了 MCP！🎉

现在你已经学会：
- ✅ MCP 的核心概念
- ✅ 配置和使用 MCP Servers
- ✅ 实战应用（搜索、长文档）
- ✅ 选择合适的 MCP Servers

**下一章**，我们将学习 **Skills 系统**，让 Claude Code 更懂你的需求，实现：
- 🎯 自定义 AI 的行为规则
- 📝 创建可复用的技能包
- 🤖 构建自动化工作流

准备好了吗？继续进化！ 🚀
