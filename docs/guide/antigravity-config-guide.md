# Antigravity 反代配置实战：让 Claude Code 用上真正的 Claude Sonnet

> **实战总结**：2026年2月10日配置记录  
> **难度**：中等（需要一些排查能力）  
> **时间**：约 30-60 分钟  
> **效果**：在 Claude Code 和 Antigravity IDE 中使用真正的 Claude Sonnet 4.5

---

## 为什么要用 Antigravity 反代？

如果你有 **Google AI Ultra/Pro 订阅**，通过 Antigravity Tools 可以：

✅ 在 Claude Code 中使用**真正的 Claude 模型**（不是 GLM 伪装）  
✅ 无需单独购买 Anthropic API（省钱！）  
✅ 同时在 IDE 和终端使用  
✅ 支持团队共享

---

## 核心原理

```
你的 Google AI 订阅
    ↓
Antigravity Tools（本地代理，端口 8045）
    ↓
Claude Code / Antigravity IDE
    ↓
真正的 Claude Sonnet 4.5 🎉
```

---

## 配置步骤

### 步骤 1：安装并启动 Antigravity-Manager

1. 从 [GitHub](https://github.com/lbjlaq/Antigravity-Manager) 下载 Antigravity-Manager
2. 登录你的 Google 账号
3. 确保代理正在运行（默认端口 `8045`）

验证代理是否运行：
```bash
lsof -i :8045
```

应该看到类似输出：
```
COMMAND     PID   USER
antigravi 60257 jitian
```

### 步骤 2：获取 API Key

1. 打开 Antigravity Tools 网页界面
2. 进入 **User Tokens** 标签
3. **重置** 或复制你的 API Key（格式：`sk-xxxxxxxx`）

> ⚠️ **重要**：如果之前用过旧的 Key，建议重置生成新的

### 步骤 3：配置终端 Claude Code

编辑 `~/.claude/settings.json`：

```json
{
  "$schema": "https://json.schemastore.org/claude-code-settings.json",
  "env": {
    "ANTHROPIC_API_KEY": "sk-你的新API_Key",
    "ANTHROPIC_BASE_URL": "http://127.0.0.1:8045",
    "API_TIMEOUT_MS": "3000000",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  },
  "model": "claude-sonnet-4-5"
}
```

### 步骤 4：配置 Antigravity IDE

编辑用户配置文件：
```bash
~/Library/Application Support/Antigravity/User/settings.json
```

添加或修改以下内容：

```json
{
  "claudeCode.selectedModel": "claude-sonnet-4-5",
  "claudeCode.environmentVariables": [
    {
      "name": "ANTHROPIC_API_KEY",
      "value": "sk-你的新API_Key"
    },
    {
      "name": "ANTHROPIC_BASE_URL",
      "value": "http://127.0.0.1:8045"
    },
    {
      "name": "ANTHROPIC_DEFAULT_SONNET_MODEL",
      "value": "claude-sonnet-4-5"
    }
  ]
}
```

### 步骤 5：配置全局认证（可选）

编辑 `~/.claude/config.json`：

```json
{
  "primaryApiKey": "sk-你的新API_Key",
  "baseUrl": "http://127.0.0.1:8045"
}
```

### 步骤 6：重启并测试

**终端测试**：
```bash
claude
/model
```

应该显示：`claude-sonnet-4-5`

**IDE 测试**：
```bash
pkill -f Antigravity
# 重新打开 Antigravity IDE
```

问一个问题，看回复中是否包含 `"model": "claude-sonnet-4-5"`

---

## 常见问题排查

### ❌ 问题 1：终端显示 "Invalid API key"

**原因**：
- API Key 错误
- 代理未运行
- 配置文件格式错误

**解决方案**：
```bash
# 1. 检查代理是否运行
lsof -i :8045

# 2. 测试 API Key
curl -s http://127.0.0.1:8045/v1/messages \
  -H "Authorization: Bearer sk-你的Key" \
  -H "Content-Type: application/json" \
  -H "anthropic-version: 2023-06-01" \
  -d '{"model": "claude-sonnet-4-5", "max_tokens": 10, "messages": [{"role": "user", "content": "hi"}]}'

# 3. 检查 JSON 格式
cat ~/.claude/settings.json | python3 -m json.tool
```

### ❌ 问题 2：IDE 显示 "Invalid API key · Please run /login"

**原因**：
- `config.json` 配置冲突
- IDE 环境变量未生效

**解决方案 A**（推荐）：
IDE 使用 User settings 中的环境变量配置，不依赖 `config.json`

**解决方案 B**（如果 A 不行）：
改回 GLM，IDE 和终端分开使用不同后端：
- IDE → GLM（稳定但不是真 Claude）
- 终端 → Antigravity 代理（真 Claude）

### ❌ 问题 3：模型返回 "Claude Opus 4.5 is no longer available"

**原因**：
Opus 4.5 已下线，需要改用 Opus 4.6 或 Sonnet 4.5

**解决方案**：
使用 `claude-sonnet-4-5` 或 `claude-opus-4-6`（如果可用）

### ❌ 问题 4：返回 404 错误

**原因**：
请求的模型 ID 在后端不可用

**解决方案**：
查看 Antigravity Tools 界面的**支持模型列表**，使用列表中的模型 ID

---

## 配置文件位置速查

| 文件 | 路径 | 作用 |
|------|------|------|
| 终端配置 | `~/.claude/settings.json` | Claude Code CLI 配置 |
| 全局认证 | `~/.claude/config.json` | 优先级最高的认证配置 |
| IDE 配置 | `~/Library/Application Support/Antigravity/User/settings.json` | Antigravity IDE 配置 |
| 本地配置 | `~/.claude/settings.local.json` | 项目级配置（较少使用） |

---

## 验证是否配置成功

### 终端验证

```bash
claude
你是什么模型
```

**成功标志**：
回复中显示 `claude-sonnet-4-5` 或 `模型 ID 为 claude-sonnet-4-5`

### IDE 验证

在 Antigravity IDE 中问："你是什么模型"

**成功标志**：
- 不再提示 "Invalid API key"
- 回复中包含真实的 Claude 模型信息（不是 GLM）

### API 直接测试

```bash
curl -s http://127.0.0.1:8045/v1/messages \
  -H "Authorization: Bearer sk-你的Key" \
  -H "Content-Type: application/json" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "claude-sonnet-4-5",
    "max_tokens": 50,
    "messages": [{"role": "user", "content": "用中文说你好"}]
  }' | python3 -m json.tool
```

**成功标志**：
- HTTP 200
- 返回 JSON 中 `"model": "claude-sonnet-4-5"`

---

## 最佳实践

### ✅ 推荐做法

1. **API Key 管理**
   - 定期重置 API Key（每月一次）
   - 不要分享给他人
   - 不要提交到 Git

2. **配置备份**
   ```bash
   cp ~/.claude/settings.json ~/.claude/settings.json.bak
   cp ~/.claude/config.json ~/.claude/config.json.bak
   ```

3. **模型选择**
   - 日常使用：`claude-sonnet-4-5`（速度快、成本低）
   - 复杂任务：`claude-opus-4-6`（如果可用）

### ❌ 避免的坑

1. ❌ 同时配置多个 API 源导致冲突
2. ❌ 忘记启动 Antigravity-Manager 代理
3. ❌ JSON 格式错误（多余逗号、引号不匹配）
4. ❌ 使用已下线的模型 ID

---

## 下一步

配置成功后，你可以：

- 📖 查看 [快速入门](/guide/quickstart) 了解基本用法
- 🔧 阅读 [常见问题](/guide/faq) 解决使用中的疑问
- 💡 探索 [进阶技巧](/guide/chapter5) 提升效率

---

**最后更新**：2026-02-10  
**作者**：金田  
**基于**：真实配置经验总结
