# 常见问题 (FAQ)

> 收集了新手最常问的问题和解决方案

---

## 🔥 安装相关

### Q1：npm install 报错怎么办？

**问题**：
```bash
npm ERR! code ECONNREFUSED
npm ERR! syscall connect
```

**解决方案**：

1. **使用国内镜像**（推荐）：
```bash
npm config set registry https://registry.npmmirror.com
```

2. **如果还是报错**，尝试：
```bash
# 清除缓存
npm cache clean --force

# 重新安装
npm install -g @anthropic-ai/claude-code
```

3. **最后方案**：询问任何 AI（Kimi、豆包等）

---

### Q2：claude --version 看不到版本号？

**可能原因**：
- npm 安装路径不在系统 PATH 里
- 安装失败了

**解决方案**：

```bash
# 查看安装路径
npm config get prefix

# 添加到 PATH（Mac/Linux）
export PATH="$PATH:$(npm config get prefix)/bin"

# 添加到 ~/.zshrc 或 ~/.bashrc（永久生效）
echo 'export PATH="$PATH:$(npm config get prefix)/bin"' >> ~/.zshrc
source ~/.zshrc

# 重新安装
npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code
```

---

### Q3：Windows 用户安装报错？

**问题**：缺少 Python 或构建工具

**解决方案**：

1. **安装 Windows Build Tools**：
```bash
npm install --global windows-build-tools
```

2. **或者使用预编译版本**：
   - 访问 https://github.com/anthropics/claude-code/releases
   - 下载 `.exe` 安装包

3. **最简单**：使用 Antigravity 插件，无需命令行安装

---

## 🔑 账号和 API 相关

### Q4：没有海外信用卡，怎么获取 API Key？

**推荐方案**：使用国产模型

#### 智谱 GLM（最推荐⭐⭐⭐）
- **网站**：https://open.bigmodel.cn/
- **优势**：
  - 支持 +86 手机号
  - 支付宝/微信支付
  - Coding 套餐：54 元/季（超便宜！）
- **购买链接**：https://www.bigmodel.cn/glm-coding?ic=3YPQJTRVHI

#### Kimi
- **网站**：https://platform.moonshot.cn/
- **优势**：
  - 有免费额度
  - 按量付费，50 元 ≈ 100 万 tokens

#### MiniMax
- **网站**：https://api.minimax.chat/
- **优势**：
  - 角色扮演能力强
  - 价格便宜

---

### Q5：API Key 安全吗？

**风险**：
- ❌ 直接写死在代码里：会暴露
- ❌ 提交到 GitHub：别人能看到
- ❌ 发给别人：别人能滥用

**安全做法**：

```bash
# ✅ 方法1：使用环境变量
export ANTHROPIC_API_KEY="sk-your-key"

# ✅ 方法2：使用 .env 文件（记得加到 .gitignore）
echo "ANTHROPIC_API_KEY=sk-your-key" > .env
echo ".env" >> .gitignore

# ✅ 方法3：使用配置管理工具
# 推荐：1Password、Bitwarden 等
```

**最佳实践**：
- ✅ API Key 只存储在本地
- ✅ 定期轮换（每 3-6 个月）
- ✅ 设置预算限额（避免意外扣费）
- ✅ 使用 .gitignore 防止提交到 GitHub

---

### Q6：如何监控 API 使用量？

**方法1：服务商后台**
- OpenAI Dashboard
- Kimi 控制台
- GLM 开发者平台

**方法2：自建监控脚本**

让 Claude Code 帮你创建：

```
请创建一个 API 使用量监控脚本
要求：
1. 记录每次 API 调用的 token 数
2. 计算成本
3. 每日汇总
4. 超过预算时提醒
```

---

## 💻 使用相关

### Q7：Claude Code 和 ChatGPT 有什么区别？

**技术定义**：
- **ChatGPT**：网页版 AI 聊天机器人
- **Claude Code**：VSCode 内嵌的 AI 编程助手

**金田讲解**：
> ChatGPT 像一个**专家顾问**，你问它答，但不会直接帮你干活。
> Claude Code 像一个**实习生**，不仅提供建议，还能直接改代码、跑命令，真正帮你干活。

**对比**：

| 功能 | ChatGPT | Claude Code |
|------|---------|-------------|
| 回答问题 | ✅ | ✅ |
| 写代码 | ✅ | ✅ |
| 改代码 | ❌ | ✅ |
| 运行命令 | ❌ | ✅ |
| 读取文件 | ❌ | ✅ |
| 自我纠错 | ❌ | ✅ |
| 集成到编辑器 | ❌ | ✅ |

---

### Q8：会消耗很多 API 额度吗？

**费用估算**：

**使用强度**：
- **轻度使用**：每天 10-20 次对话
  - 每月约 $5-10（约 35-70 元）
- **中度使用**：每天 50-100 次对话
  - 每月约 $20-50（约 140-350 元）
- **重度使用**：每天 200+ 次对话
  - 每月 $100+（约 700+ 元）

**省钱技巧**：
1. ✅ 使用国产模型（GLM、Kimi）
   - GLM：¥0.12/百万 tokens（比 Claude 便宜 25 倍！）
   - Kimi：¥0.5/百万 tokens（比 Claude 便宜 6 倍！）

2. ✅ 配置 Base URL 指向更便宜的 API
   ```json
   {
     "apiBaseUrl": "https://api.moonshot.cn/v1",
     "apiKey": "sk-kimi-key"
   }
   ```

3. ✅ 充分利用上下文，避免重复问同样的问题

4. ✅ 使用 Coding Tool Helper 配置 GLM Coding 套餐
   - 54 元/季，随便用不心疼

---

### Q9：代码会被上传到云端吗？

**隐私说明**：

**会上传的**：
- ⚠️ **对话内容**（为了 AI 理解你的需求）
- ⚠️ **你发送给 AI 的代码片段**

**不会上传的**：
- ✅ 你的代码**本地存储**，不会自动上传整个项目
- ✅ AI 没有权限的文件不会被读取

**金田建议**：
> 如果项目包含敏感信息（如 API Key、密码），建议：
> 1. 使用 `.env` 文件存储敏感信息
> 2. 在 `.gitignore` 中排除敏感文件
> 3. 告诉 AI："不要读取 .env 文件"
> 4. 使用企业版或自建代理

**最佳实践**：
```bash
# 在项目根目录创建 .gitignore
echo ".env" >> .gitignore
echo "*.secret" >> .gitignore
echo "credentials.json" >> .gitignore
```

---

## 🛠️ 功能相关

### Q10：MCP 和 API 有什么区别？

**技术定义**：
- **API**：应用程序接口，通用的技术概念
- **MCP**：专门为 LLM 设计的接口协议

**金田讲解**：
> MCP 是一种**特殊的 API**，专门给 AI 用。
>
> 普通API：需要写代码调用（`fetch('https://api.xxx.com')`）
> MCP API：AI 直接调用，不需要你写代码
>
> 类比：
> - 普通API：像去餐厅吃饭，需要自己点餐、付款
> - MCP API：像请保姆，她直接帮你搞定一切

**对比**：

| 维度 | 普通API | MCP |
|------|---------|-----|
| 调用方式 | 需要写代码 | AI 自动调用 |
| 使用难度 | 需要编程基础 | 零代码 |
| 安全性 | API Key 暴露风险 | 本地运行，更安全 |
| 典型应用 | 调用 OpenAI API | 联网搜索、读文件、看图片 |

---

### Q11：Skill 和 MCP 的区别？

**金田讲解**：
> Skills 是**"知道怎么做"**（知识），MCP 是**"能做什么"**（能力）。
>
> - Skills：教 AI 如何写 Python 代码（知识）
> - MCP：让 AI 能运行 Python 代码（能力）
>
> 类比：
> - Skills = 食谱（告诉你怎么做饭）
> - MCP = 厨房工具（刀、锅、烤箱）

**对比**：

| 维度 | Skills | MCP |
|------|--------|-----|
| 本质 | 提示词、示例、规则 | 工具、API、外部服务 |
| 作用 | 改变 AI 的行为方式 | 扩展 AI 的能力边界 |
| 典型应用 | 前端设计 Skill、写作 Skill | 搜索 MCP、OCR MCP |
| 创建难度 | 简单（写 Markdown） | 中等（需要写代码） |
| 分享方式 | GitHub、npm | GitHub、npm |

**最佳实践**：
- 📝 **需要标准化输出** → 用 Skills（如团队代码规范）
- 🔌 **需要新能力** → 用 MCP（如联网搜索）
- 🚀 **复杂项目** → Skills + MCP 组合使用

---

### Q12：在哪里找更多 Skills？

**官方资源**：
- [Everything Claude Code](https://github.com/anthropics/everything-claude-code)
- [Skills Gallery](https://skills.claude-code.com/)

**社区资源**：
- GitHub 搜索：`claude-code skills`
- Twitter 搜索：`#claudecode`

**推荐 Skills**：

**前端开发**：
- `/frontend-design` - 现代前端设计
- `/react-best-practices` - React 最佳实践

**后端开发**：
- `/nodejs-api` - Node.js API 开发
- `/python-clean-architecture` - Python 清洁架构

**写作**：
- `/tech-blog` - 技术博客写作
- `/tutorial-writing` - 教程写作

---

## 🚀 进阶问题

### Q13：如何提高 Claude Code 的效率？

**技巧1：优化提示词**

❌ 不好的提示词：
```
帮我写个函数
```

✅ 好的提示词：
```
请写一个 TypeScript 函数，用于用户认证
要求：
1. 使用 JWT
2. 包含类型注解
3. 有错误处理
4. 添加 JSDoc 注释
```

**技巧2：利用 CLAUDE.md**

在项目根目录创建 `CLAUDE.md`：
```markdown
# 项目规则

## 编码规范
- 使用 TypeScript 严格模式
- 所有函数必须有类型注解
- 禁止使用 any

## 命名规范
- 变量：camelCase
- 常量：UPPER_SNAKE_CASE
- 类：PascalCase
```

**技巧3：指定文件夹**
- ✅ 为每个项目创建独立文件夹
- ✅ 文件夹内只放相关文件
- ✅ 减少干扰，提高效率

**技巧4：使用危险模式**
```bash
claude --dangerously-skip-permissions
```
- ⚠️ 跳过操作确认，提升效率
- ⚠️ 但要做好备份

---

### Q14：如何处理复杂任务？

**方法1：拆分任务**

❌ 不要：
```
帮我做一个完整的电商网站
```

✅ 应该：
```
第1步：先设计数据库结构
第2步：实现用户认证
第3步：实现商品列表
第4步：实现购物车
...
```

**方法2：使用 Todo 列表**

让 Claude Code 创建任务列表：
```
请帮我创建一个任务列表，分步骤完成这个项目
```

**方法3：迭代优化**

```
# 第1版：先实现基础功能
请帮我实现基础版本，功能越简单越好

# 第2版：添加新功能
基于第1版，添加XXX功能

# 第3版：优化性能
请优化性能，目标是提升50%
```

---

### Q15：如何调试 Claude Code 的错误？

**方法1：查看日志**

```bash
# 查看详细日志
claude --verbose
```

**方法2：询问 AI**

把错误信息复制给任何 AI（Kimi、豆包等）：
```
我在使用 Claude Code 时遇到这个错误：
[粘贴错误]

请问怎么解决？
```

**方法3：查看官方文档**

- [Claude Code 官方文档](https://docs.claude.com/claude-code)
- [GitHub Issues](https://github.com/anthropics/claude-code/issues)

**方法4：社区求助**

- GitHub Issues
- Twitter: #claudecode
- 国内社区：知乎、掘金

---

## 📞 获取帮助

### 还是有问题？

**1. 查看文档**
- 本教程的完整章节
- [官方文档](https://docs.claude.com/claude-code)

**2. 询问 AI**
- Kimi：https://kimi.moonshot.cn/
- 豆包：https://www.doubao.com/
- 任何免费 AI 都能帮你

**3. 社区求助**
- GitHub: [提交 Issue](https://github.com/Tian0225/ai-beginner-evolution/issues)
- Email: tian0225@example.com

**4. 视频教程**
- B站搜索：Claude Code 教程
- YouTube: Claude Code tutorial

---

## 💡 贡献你的问题

如果你遇到了新问题并有解决方案，欢迎贡献！

**方式**：
1. Fork 本仓库
2. 在 `faq.md` 中添加你的问题
3. 提交 Pull Request

---

**最后更新**：2026-02-08
**维护者**：金田
