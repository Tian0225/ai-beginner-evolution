# 第4章：API 集成

## 4.1 什么是 API 集成？

### 技术定义

**API（Application Programming Interface，应用程序接口）集成** 是指让 Claude Code 调用外部 AI 服务的 API，扩展其能力。

### 金田讲解

API 集成就是**给 Claude Code 接入各种 AI 模型的能力**。

**类比理解**：
> Claude Code 本身是一个"万能遥控器"，API 集成就是让它能控制各种"设备"。
>
> - 没有 API 集成：只能用内置模型
> - 有 API 集成：能调用 OpenAI、Kimi、Gemini 等所有模型
>
> 类比：
> - 手机 = Claude Code
> - Apps = 各种 AI 模型（OpenAI、Kimi 等）
> - API 集成 = 安装这些 Apps

---

## 4.2 为什么要做 API 集成？

### 1. 突破限制

**Claude Code 官方限制**：
- 只能用 Claude 模型
- 有速率限制
- 需要海外账号

**API 集成后**：
- 可以用任何模型（OpenAI、Kimi、Gemini）
- 自己控制速率
- 国内直接用

### 2. 成本优化

**官方定价**：
- Claude Sonnet：$3 / 百万 tokens（输入）
- 月费可能 $50-100

**国产模型**：
- Kimi：¥0.5 / 百万 tokens（60倍便宜！）
- GLM：¥0.12 / 百万 tokens（25倍便宜！）
- MiniMax：¥0.15 / 百万 tokens（20倍便宜！）

**节省示例**：
- 月使用 1000 万 tokens
- 官方：$30（约 ¥210）
- 国产：¥1.2-¥5（**省了 40-200 倍！**）

### 3. 能力互补

**不同模型擅长的领域**：

| 模型 | 擅长 | 不擅长 |
|------|------|--------|
| **Claude** | 长文本、写作、代码 | 贵、速率限制 |
| **GPT-4** | 通用、推理 | 也很贵 |
| **Kimi** | 中文搜索、长文档 | 英文较弱 |
| **GLM** | 中文代码 | 偶尔幻觉 |
| **Gemini** | 多模态、免费 | 代码一般 |
| **MiniMax** | 角色扮演 | 数学较弱 |

**策略**：根据任务选择最合适的模型！

---

## 4.3 API 集成方式

### 方式1：直接配置（最简单）

**在 `~/.claude.json` 配置**：

```json
{
  "apiBaseUrl": "https://api.openai.com/v1",
  "apiKey": "sk-your-openai-key"
}
```

**使用 Kimi API**：

```json
{
  "apiBaseUrl": "https://api.moonshot.cn/v1",
  "apiKey": "sk-your-kimi-key"
}
```

### 方式2：使用 MCP（推荐）

**优点**：
- ✅ 统一接口
- ✅ 热切换模型
- ✅ 更安全（API Key 不暴露）

**配置方式**（详见第2章）：

```json
// .mcp.json
{
  "mcpServers": {
    "kimi": {
      "command": "node",
      "args": ["~/.claude/mcp-servers/kimi/server.js"],
      "env": {
        "KIMI_API_KEY": "sk-your-key"
      }
    }
  }
}
```

### 方式3：自定义脚本（高级）

**场景**：需要复杂的逻辑（如自动降级、负载均衡）

**示例**：`api-switcher.js`

```javascript
// 根据任务类型自动选择 API
function selectAPI(task) {
  if (task.type === 'search') return 'kimi';
  if (task.type === 'code') return 'claude';
  if (task.type === 'image') return 'gemini';
  return 'openai';
}
```

---

## 4.4 实战案例1：配置 Kimi API

### 步骤1：获取 API Key

访问：https://platform.moonshot.cn/

1. 注册/登录
2. 进入"API Keys"
3. 创建新的 API Key
4. 复制保存

### 步骤2：配置 Claude Code

**编辑 `~/.claude.json`**：

```json
{
  "apiBaseUrl": "https://api.moonshot.cn/v1",
  "apiKey": "sk-your-kimi-key"
}
```

### 步骤3：验证配置

**启动 Claude Code**：
```bash
claude
```

**测试对话**：
```
你好，请用 Kimi 搜索今天成都的天气
```

**如果成功回复**，说明配置成功！✅

---

## 4.5 实战案例2：配置多个 API 并切换

### 场景

你想：
- 写作用 Claude（质量高）
- 搜索用 Kimi（便宜）
- 看图用 Gemini（免费）

### 配置方案

**创建 API 配置文件**：

```bash
# ~/.claude/api-profiles.json
{
  "profiles": {
    "default": {
      "apiBaseUrl": "https://api.anthropic.com",
      "apiKey": "sk-claude-key"
    },
    "kimi": {
      "apiBaseUrl": "https://api.moonshot.cn/v1",
      "apiKey": "sk-kimi-key"
    },
    "gemini": {
      "apiBaseUrl": "https://generativelanguage.googleapis.com/v1beta",
      "apiKey": "your-gemini-key"
    }
  }
}
```

### 使用方式

**在对话中指定**：
```
请用 Kimi 搜索：B站带货热门产品
```

**或者创建快捷命令**：
```bash
# ~/.claude/aliases.json
{
  "search": "请用 Kimi 搜索",
  "write": "请用 Claude 写作",
  "image": "请用 Gemini 分析图片"
}
```

---

## 4.6 成本优化策略

### 策略1：任务分级

**高价值任务** → 用 Claude
- 核心代码开发
- 重要文档写作
- 客户交付内容

**低价值任务** → 用国产模型
- 日常对话
- 快速搜索
- 代码测试

### 策略2：智能降级

**伪代码实现**：
```javascript
// 自动选择最便宜的模型
function selectModel(task) {
  // 先试最便宜的
  if (task.canUseMiniMax) return 'minimax';
  if (task.canUseKimi) return 'kimi';
  if (task.canUseGLM) return 'glm';
  // 最后用贵的
  return 'claude';
}
```

### 策略3：缓存复用

**场景**：重复查询相同内容

**实现**：
- 使用本地数据库缓存问答
- 相同问题直接返回缓存结果
- 节省 API 调用

---

## 4.7 主流 AI 服务对比

### 价格对比（2026年2月）

| 服务 | 输入价格 | 输出价格 | 免费额度 |
|------|---------|---------|----------|
| **Claude Sonnet** | $3/百万 | $15/百万 | 无 |
| **GPT-4** | $30/百万 | $60/百万 | 无 |
| **Kimi** | ¥0.5/百万 | ¥2/百万 | 有 |
| **GLM-4** | ¥0.12/百万 | ¥0.12/百万 | 有 |
| **MiniMax** | ¥0.15/百万 | ¥0.15/百万 | 有 |
| **Gemini Pro** | 免费 | 免费 | 每天1500次 |

### 能力对比

| 能力 | Claude | GPT-4 | Kimi | GLM | Gemini |
|------|--------|-------|------|-----|---------|
| **中文理解** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **代码生成** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **长文本** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **多模态** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **速度** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 4.8 常见问题

### Q1：API Key 安全吗？

**风险**：
- ❌ 直接写死在代码里：会暴露
- ❌ 提交到 GitHub：别人能看到

**解决方案**：
```bash
# ✅ 使用环境变量
export ANTHROPIC_API_KEY="sk-your-key"

# ✅ 使用 .env 文件（记得加到 .gitignore）
echo "ANTHROPIC_API_KEY=sk-your-key" > .env

# ✅ 使用配置管理工具
# 推荐：1Password、Bitwarden 等
```

### Q2：如何监控 API 使用量？

**方法1：服务商后台**
- OpenAI Dashboard
- Kimi 控制台
- GLM 开发者平台

**方法2：自建监控**
```javascript
// 记录每次 API 调用
function logAPIUsage(service, tokens, cost) {
  console.log(`[${service}] ${tokens} tokens = ¥${cost}`);
  // 写入日志文件或数据库
}
```

### Q3：API 限流怎么办？

**错误示例**：
```
Error: 429 Too Many Requests
```

**解决方案**：
1. **增加重试机制**：
   ```javascript
   async function callAPIWithRetry(api, maxRetries = 3) {
     for (let i = 0; i < maxRetries; i++) {
       try {
         return await api.call();
       } catch (error) {
         if (error.status === 429 && i < maxRetries - 1) {
           await sleep(1000 * (i + 1)); // 1s, 2s, 3s
           continue;
         }
         throw error;
       }
     }
   }
   ```

2. **使用多个账号轮换**：
   ```javascript
   const keys = ['key1', 'key2', 'key3'];
   const key = keys[currentIndex % keys.length];
   currentIndex++;
   ```

3. **升级套餐**：购买更高限额

---

## 4.9 最佳实践

### 1. 分层使用策略

```
金字塔模型：
           Claude         （高价值，少用）
          /      \
        Kimi     GLM      （中价值，常用）
       /    \   /    \
   MiniMax Gemini 其他    （低价值，大量用）
```

### 2. 成本控制

**设置预算提醒**：
```javascript
const monthlyBudget = 100; // ¥100/月
let currentCost = 0;

function checkBudget(cost) {
  currentCost += cost;
  if (currentCost > monthlyBudget * 0.9) {
    alert("已使用90%预算！");
  }
}
```

### 3. 质量监控

**定期评估模型表现**：
- 响应准确性
- 响应速度
- 成本效益

**不合适的模型及时更换**！

---

## 4.10 下一步

恭喜你掌握了 API 集成！🎉

现在你已经学会：
- ✅ API 集成的核心概念
- ✅ 配置多个 AI 服务
- ✅ 成本优化策略
- ✅ 安全最佳实践

**最后**，我们将进入**实战项目**，综合运用所有知识：
- 🎬 B站视频生成工具链
- 🤖 AI 博主自动化工作流
- 📊 数据分析实战

准备好了吗？继续进化！ 🚀
