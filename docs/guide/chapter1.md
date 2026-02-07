# 第1章：快速上手

## 1.1 什么是 Claude Code？

### 技术定义

**Claude Code** 是 Anthropic 开发的 AI 编程助手，是一个 VSCode 扩展，可以直接在你的编辑器中帮你写代码、改代码、调试程序。

### 金田讲解

Claude Code 就像一个**随时待命的编程助手**：

- **传统方式**：遇到问题 → 打开浏览器 → 搜索 → 找答案 → 复制粘贴
- **有了 Claude Code**：遇到问题 → 直接问 → AI 给答案 → 还能直接改你的代码

**类比**：
> Claude Code 对程序员，就像计算器对会计。不是替代你，而是让你从重复劳动中解放出来，专注于更有价值的事情。

---

## 1.2 安装 Claude Code

### 前置要求

- **VSCode**：[点击下载](https://code.visualstudio.com/)
- **Node.js**：[点击下载](https://nodejs.org/)（建议 18+ 版本）
- **Anthropic API Key**：[点击获取](https://console.anthropic.com/)

### 安装步骤

#### 步骤1：安装 VSCode 扩展

1. 打开 VSCode
2. 点击左侧**扩展**图标（或按 `Cmd+Shift+X`）
3. 搜索 `Claude Code`
4. 点击**安装**

#### 步骤2：配置 API Key

1. 打开命令面板（`Cmd+Shift+P`）
2. 输入 `Claude Code: Settings`
3. 在 `API Key` 字段填入你的 Key：`sk-ant-xxxxx`
4. 保存

#### 步骤3：验证安装

1. 打开任意项目
2. 按 `Cmd+Shift+P`，输入 `Claude Code: Start New Chat`
3. 输入测试问题：`"你好，请帮我创建一个 hello.py 文件"`
4. 看到成功回复就说明安装好了！

---

## 1.3 第一次对话

### 基础用法

打开 Claude Code 侧边栏，你会看到：

```
┌─────────────────────────┐
│  Claude Code            │
├─────────────────────────┤
│  你好！有什么可以帮你的？ │
│                         │
│  [输入框]               │
└─────────────────────────┘
```

### 实战示例

#### 任务1：创建 Python 文件

**你输入**：
```
请创建一个 hello.py 文件，输出"你好，世界！"
```

**Claude Code 会**：
1. 创建 `hello.py` 文件
2. 写入代码：
   ```python
   print("你好，世界！")
   ```
3. 运行文件，展示结果

#### 任务2：修复代码错误

**你输入**：
```
我的代码报错了，帮我看看：
[粘贴错误代码]
```

**Claude Code 会**：
1. 分析错误原因
2. 修复代码
3. 解释问题所在

---

## 1.4 配置优化（重要！）

### 配置项目级设置

在你的项目根目录创建 `.claude/settings.json`：

```json
{
  "apiKey": "sk-ant-xxxxx",
  "baseUrl": "https://api.anthropic.com",
  "enableAllProjectMcpServers": true
}
```

**金田讲解**：
- `apiKey`：你的身份凭证（就像登录密码）
- `baseUrl`：API 服务器地址（默认官方）
- `enableAllProjectMcpServers`：启用 MCP 服务器（第2章会讲）

### 配置危险模式（可选）

如果你信任 Claude Code，可以启用**危险模式**，跳过操作确认：

```json
{
  "dangerouslyAllowAutonomousFileWrites": true
}
```

⚠️ **注意**：只有在你完全信任 AI 的建议时才启用！

---

## 1.5 常见问题

### Q1：Claude Code 和 ChatGPT 有什么区别？

**技术定义**：
- **ChatGPT**：网页版 AI 聊天机器人
- **Claude Code**：VSCode 内嵌的 AI 编程助手

**金田讲解**：
> ChatGPT 像一个**专家顾问**，你问它答，但不会直接帮你干活。
> Claude Code 像一个**实习生**，不仅提供建议，还能直接改代码、跑命令，真正帮你干活。

### Q2：会消耗很多 API 额度吗？

**费用估算**：
- **轻度使用**：每月 $5-10（约 35-70 元）
- **中度使用**：每月 $20-50（约 140-350 元）
- **重度使用**：每月 $100+（约 700+ 元）

**省钱技巧**：
- ✅ 使用反代服务（如 Antigravity）
- ✅ 配置 Base URL 指向更便宜的 API
- ✅ 充分利用上下文，避免重复问同样的问题

### Q3：代码会被上传到云端吗？

**隐私说明**：
- ✅ 你的代码**本地存储**，不会自动上传
- ⚠️ **对话内容**会发送到 Anthropic 服务器（为了 AI 理解）
- ✅ 企业用户可选择**本地部署**方案

**金田建议**：
> 如果项目包含敏感信息（如 API Key、密码），建议：
> 1. 使用 `.env` 文件存储敏感信息
> 2. 在 `.gitignore` 中排除敏感文件
> 3. 使用企业版或自建代理

---

## 1.6 下一步

恭喜你完成了快速上手！🎉

现在你已经学会：
- ✅ 安装和配置 Claude Code
- ✅ 基础对话和代码操作
- ✅ 优化配置

**下一章**，我们将学习 **MCP（Model Context Protocol）**，让 Claude Code 连接外部工具，实现：
- 🌐 联网搜索
- 📄 读取本地文件
- 🖼️ 分析图片和视频
- 🔌 调用第三方 API（OpenAI、Kimi、Gemini）

准备好了吗？继续进化！ 🚀
