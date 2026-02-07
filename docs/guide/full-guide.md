# Claude Code 完整入门指南

> 原文：https://x.com/oran_ge/status/2005419365450252425
> 改编者：金田
> 改编时间：2026-02-07

---

## 🎯 为什么选择 Claude Code

**Claude Code（简称 CC）是我 2026 年最推荐的 AI 产品，没有之一。**

虽然名字带"Code"，但它不是只能写代码，而是一款**真正的通用 Agent**。

很多电脑上的繁琐工作，都是 CC 一句话的事情：
- ✅ 问答、写作
- ✅ 写网页、写软件
- ✅ 数据分析
- ✅ 甚至拆分工资条
- ✅ 音频和图片合成视频

---

## 🌟 行业大咖怎么说

### 宝玉：最接近"完全体 AI 程序员"的产品

技术博主**宝玉**（@dotey）认为：

> **"Claude Code 是目前最接近'完全体 AI 程序员'的产品，展现了 Agent（智能体）的真正形态。"**

**核心观点**：
- **与 Cursor/Copilot 的本质区别**：Cursor 更多是"辅助写代码"，而 Claude Code 是一个真正的 **Agent**。它不仅能写代码，还能主动执行命令、运行测试、读取文件、自我纠错。
- **未来方向**："Claude Code 这种在终端里直接操作，拥有更高权限和自主性的模式，才是未来 AI 编程的方向。"
- **实际体验**：在处理复杂任务（如重构旧代码、理解陌生项目结构）时表现惊人。只需给出一个模糊指令"修复这里的测试错误"，它会自动运行测试、看报错、改代码、再运行测试，直到通过。
- **总结**："如果你想体验什么是真正的 Agentic Workflow（智能体工作流），Claude Code 是目前最好的样本。"

### Andrej Karpathy（AK）：从"自动补全"到"自主循环"

OpenAI 研究员**Andrej Karpathy**（@karpathy）的评价：

> **"Claude Code 令人印象深刻，标志着编程从'自动补全'向'自主循环（Loop）'的转变。"**

**核心观点**：
- **实测体验**：AI 能够自主地浏览文件、安装依赖、运行代码并修复报错，整个过程像是一个人类工程师在接手工作。
- **范式转变**：编程正在从 "Vibe Coding"（使用 Cursor 等工具快速生成代码）向更高阶的 Agent 模式演进。Claude Code 展示了 AI 如何在 **"Read-Think-Act-Observe"（读取-思考-行动-观察）** 的循环中工作。
- **未来方向**：虽然这种模式目前还比较慢，且有时会陷入死循环，但他认为这就是未来的方向。
- **真实感受**："看着终端里 AI 自己在那跑命令、修 Bug，感觉非常赛博朋克。"

---

## 🌟 重大转折：国产开源模型质变

以前 CC 最大的问题是什么？

**官方账号极难获取。**

### Claude Code 官网在中国大陆的实际可用性

**极难直接使用，存在多重硬性阻碍：**

1. **安装阶段**：可行，但可能慢
   - Claude Code 是以 NPM 包的形式发布的（`@anthropic-ai/claude-code`）
   - 在国内只要配置了国内 NPM 镜像源（如淘宝源），`npm install` 通常可以成功

2. **登录认证阶段（主要卡点）**：**被屏蔽/无法访问**
   - 安装完成后必须执行 `claude login`，会尝试打开浏览器跳转到 Anthropic 官网进行 OAuth 授权
   - **Anthropic 官网（console.anthropic.com）对中国大陆 IP 进行了严格封锁**
   - 即使使用代理，登录时还需要验证手机号，但 Anthropic **不支持中国大陆 (+86) 手机号**

3. **实际运行阶段**：**需全程代理**
   - Claude Code 运行原理是本地 CLI 工具通过 API 与服务器通信
   - 必须在终端层面配置好代理，否则会一直报错

4. **支付与成本**：
   - 需要海外信用卡充值 API 余额
   - 对中国开发者门槛极高

**结论：对于中国大陆的普通开发者，Claude Code 官方版本几乎不可用。**

---

## 💡 解决方案：国产开源模型

所以，我一直在等一个时刻：**国产开源模型的代码能力突破临界值。**

**这个时刻到了！**

现在有三个国产模型可以在 CC 里真正用起来：
- ⭐⭐⭐ **GLM 4.7**（智谱）
- ⭐⭐⭐ **MiniMax M2.1**
- ⭐⭐⭐ **Kimi K2.5**

**技术平权时刻**：开源意味着每个云厂商都能部署、售卖、盈利，用户只需要 1% 的价格就能享受智能便利。

---

## 📦 Claude Code 本地命令行安装步骤

### 前置准备

1. **科学网络环境**（可选，但推荐）
2. **Node.js**：https://nodejs.org/
3. **Windows 用户额外安装 Git**：https://git-scm.com/

### 方法一：npm 安装（推荐）

打开**终端**（搜索"终端"或"Terminal"），粘贴命令：

```bash
npm install -g @anthropic-ai/claude-code
```

**如果报错**：
- 如果你已经安装了 Cursor，强烈建议在 Cursor 内安装，它会帮你解决问题
- 或者询问任何 AI 来解决错误

### 方法二：脚本安装

**macOS/Linux/WSL：**
```bash
curl -fsSL https://install.anthropic.com | bash
```

**Windows：**
```powershell
irm https://install.anthropic.com | iex
```

**验证安装**：
```bash
claude --version
```

如果出现版本号，说明安装成功。

---

## ⚙️ 跳过官方验证

新版本 CC 增加了一个恶心的验证，我们手动跳过它。

**编辑配置文件 `~/.claude.json`**（如果不存在就手动创建）：

```json
{
  "hasCompletedOnboarding": true
}
```

---

## 🔑 配置国产模型（以 GLM 4.7 为例）

### 步骤 1：注册智谱账号

访问 **https://open.bigmodel.cn/**，点击右上角"注册/登录"。

### 步骤 2：获取 API Key

在个人中心 → API Keys，创建一个新的 API Key，复制下来备用。

### 步骤 3：订阅 Coding 套餐（强烈推荐）

**🔥 跨年特惠**：Coding Lite 包季，三个月只要 **54 元**，跟不要钱一样。

**👉 购买地址**：https://www.bigmodel.cn/glm-coding?ic=3YPQJTRVHI

有了 Coding 套餐之后，就可以尽情使用，再也不用担心账号欠费背刺。

### 步骤 4：使用 Coding Tool Helper 配置 ⭐ 核心工具

**Coding Tool Helper** 是一个专门用来配置国产模型到 CC 的工具，非常方便。

**在【终端】输入**：
```bash
npx @z_ai/coding-helper
```

这时候你会看到一个亲切的中文界面。

按照工具的提示，把在上面拿到的 API Key 粘贴到这里，并且按提示一步一步地走完就可以了。

---

## 🚀 启动 Claude Code

**在【终端】输入**：
```bash
claude
```

然后回车，你就能看到 CC 界面了！

**打个招呼试试吧！**

从此以后，这就是你的万能的助手。

---

## 💡 进阶启动方式：Antigravity 插件（更推荐）

虽然可以在终端里直接使用 CC，但更推荐的方式是：**在 Antigravity 里使用 Claude Code 插件**。

### 为什么推荐 Antigravity 插件？

1. **更顺手**：不需要每次都打开终端，直接在 Antigravity 里用
2. **左右互搏**：可以同时用到两个 AI（Antigravity + Claude Code），互相帮助、互相验证
3. **三头六臂**：给 Claude Code 装上所有的能力，以后任何功能都可以在 CC 里实现

**推荐工作流**：
- 有文章链接：直接丢给 Antigravity
- 链接访问不了：直接丢视频/图片/网页保存的文档等
- 在 Antigravity 里调用 Claude Code，让 CC 处理复杂任务

这样就能实现：**Antigravity 负责联网和界面，Claude Code 负责深度思考和代码执行**。

---

## 🎓 核心概念：三个基础认知

### 1. 文件夹 = CC 的游乐场

CC 启动时需要你指定一个文件夹，这个文件夹就是**任务的上下文**。

**建议**：建立专门的工作文件夹，用于各种 CC 项目。

**我的实践**：
- 文件夹命名要区别于"Claude Code"
- 例如：我的是"**金田工作室**"，我自己知道这个是用来实践和使用 Claude Code 的
- 在这个文件夹下：
  - 笔记 → `金田工作室/笔记/`
  - 数据分析 → `金田工作室/数据分析/`
  - 开发软件 → `金田工作室/开发软件/`

每个任务一个文件夹，互不干扰。

**指定文件夹的方式**：
- 方法 1：**把文件夹拖拽到 CC 里**（第一个重要技巧！）
- 方法 2：把文件拖拽到 CC 里（也是可以的）
- 方法 3：在 Antigravity 插件中选择文件夹

### 2. `CLAUDE.md` = CC 的宪法 ⭐ 重要

这个文件是 CC 的**核心配置文件和长期记忆**。

CC 每次启动都会自动加载这个文件，它记录了：
- 你要做什么
- 你给 CC 的规则
- 重要的上下文信息

**你也可以让 CC 自己创建并维护这个文件。**

例如，我会在 `CLAUDE.md` 里写：
- 我是金田，我的背景、创业经历、当前项目
- 我喜欢什么、不喜欢什么
- 我的工作流程和习惯
- 重要的人际关系和资源

这样 CC 就能"记住"我，给出的建议更贴合我的实际情况。

### 3. 危险模式 ⭐ 建议打开

**什么是危险模式？**

开启后，CC 可以全自动操控你的电脑，不需要任何确认。

**听起来危险，但不开的话，每次操作都要确认，非常繁琐。**

**开启方式**：
```bash
claude --dangerously-skip-permissions
```

**⚠️ 重要提醒**：
- ✅ **建议打开**，提升效率
- 一定要指定好文件夹
- 做好备份
- 避免不可挽回的损失

### 4. Memory 文件 ⭐ 新增机制

除了 `CLAUDE.md`，Claude 还有另一个重要的记忆机制：**Memory 文件**。

**Memory vs CLAUDE.md 的区别**：

| 维度 | CLAUDE.md | Memory |
|------|-----------|--------|
| **作用域** | 项目级（当前文件夹） | 全局级（所有对话） |
| **可见性** | 完全透明，你可以随时编辑 | AI 自动管理，不可直接编辑 |
| **内容类型** | 项目规则、上下文、偏好 | 长期知识、重要事实 |
| **更新方式** | 手动编辑或让 CC 帮你写 | AI 自动提取和存储 |
| **典型内容** | "我是金田，正在做 B站带货项目" | "金田的妈妈叫李某某，生日是X月X日" |

**Memory 的工作原理**：
- 当你告诉 AI 一些重要信息时，它会自动判断是否需要长期记住
- 如果需要，会自动写入 Memory 文件
- 下次对话时，AI 会自动读取 Memory，无需你重复提供

**与 Claude Code 的关系**：
- Memory 是 Claude 平台的全局机制，不仅限于 Claude Code
- Claude Code 会自动利用 Memory 来增强上下文理解
- 你可以在任何对话中告诉 AI 重要信息，它会自动跨项目记住

**最佳实践**：
- `CLAUDE.md`：写**项目相关**的信息（当前项目目标、规则、上下文）
- Memory：让 AI 自动记住**个人相关**的信息（你的背景、偏好、重要关系）

---

## 🖼️ 实用技巧：粘贴图片

CC 运行在终端里，所以粘贴命令和系统不一样：
- ❌ 不是 `Cmd + V`
- ✅ 而是 **`Ctrl + V`**

粘贴之后，CC 就能看到图片了。

---

## 💼 实战案例：29 秒拆分工资条

**场景**：作为老板和财务，每月给大家发工资条。

代理只给我一个工资表（Excel），我需要：
1. 把表拆开
2. 每行做成单独的文件
3. 发给每个人

**以前**：重复性劳动，想想就很烦。

**现在**：只需要告诉 CC：
> "这是一个工资表，帮我拆成工资条，一个人一个文件"

**结果**：29 秒完成！没有任何剪辑的真实记录。

这只是工作中的一个小案例，实际上 CC 可以做的事情，数以万计。

下次你遇到重复性的工作，不如就打开 CC 跟它聊聊。

---

## 🔥 Skills 功能：借用前人的智慧

**Skill 是什么？**

前人已经测试验证好的工作流，你只需要借来用。

你可以直接从现有的 Skill 网站里 copy，也可以让 CC 自己创建。

**如何安装 Skill？**

以刘小排老师的前端设计 Skill 为例：

```bash
npx skills-installer install /frontend-design --client claude-code
```

**如何使用？**

告诉 CC：
> "使用 /frontend-design skill，重新设计 https://example.com 的首页"

**效果**：非常高级，完全没有 AI 设计网页的默认蓝紫色。

---

## 🎓 推荐阅读

如果你想深入了解 Claude Code 和 AI 编程的未来，强烈推荐阅读：

1. **Orange (@oran_ge)**
   - 原文作者，技术博客：https://orange.cn/
   - Twitter：https://x.com/oran_ge

2. **宝玉 (@dotey)**
   - Claude Code 深度用户和推广者
   - 微信公众号：宝玉的博客
   - Twitter：https://x.com/dotey
   - 他的系列文章《Claude Code 实战》非常详细

3. **Andrej Karpathy (@karpathy)**
   - OpenAI 创始成员，AI 编程领域的权威
   - Twitter：https://x.com/karpathy
   - 他的视频教程《Introduction to Neural Networks》必看

---

## 🎯 最佳实践：我的推荐工作流

基于我的实战经验，最推荐的使用方式是：

**在 Antigravity 里使用 Claude Code 插件**

### 为什么？

1. **左右互搏**：
   - Antigravity：负责联网、界面、快速响应
   - Claude Code：负责深度思考、代码执行、复杂任务
   - 两个 AI 互相帮助、互相验证

2. **三头六臂**：
   - 给 Claude Code 装上所有能力（MCP 工具、Skills、自定义脚本）
   - 以后任何功能都可以在 CC 里实现

3. **更顺手**：
   - 有文章链接：直接丢给 Antigravity
   - 链接访问不了：直接丢视频/图片/网页保存的文档
   - 不需要每次都打开终端敲命令

### 实际工作流示例

```
遇到问题
    ↓
丢给 Antigravity（它会自动联网搜索）
    ↓
Antigravity 调用 Claude Code 插件
    ↓
Claude Code 深度分析、写代码、执行任务
    ↓
两个 AI 互相验证，给出最优解
    ↓
完成任务
```

---

## 🎉 结语

万事开头难，这篇文章其实是最难的部分。

**后续你遇到任何问题，直接问 CC，它都能帮你解决。**

相信你很快能找到属于自己的 **Wow moment**！

---

## 💬 最后的思考

**技术平权时刻已来。**

以前 Claude Code 一年 10 亿美金，都被 Claude 一只巨鲸吃掉。

现在国产开源模型都跟上来了。

巨鲸仍在，但在海的深处，**万物生长**。

---

## 📚 附录：快速参考

### 核心命令

```bash
# 安装
npm install -g @anthropic-ai/claude-code

# 启动
claude

# 危险模式启动
claude --dangerously-skip-permissions

# 验证版本
claude --version
```

### 核心工具

```bash
# Coding Tool Helper（配置国产模型）
npx @z_ai/coding-helper

# Skills 安装
npx skills-installer install /frontend-design --client claude-code
```

### 配置文件

```bash
# 跳过官方验证
~/.claude.json: {"hasCompletedOnboarding": true}

# 项目级记忆
金田工作室/CLAUDE.md
```

---

*本文改编自 @oran_ge 的 Twitter 推文，仅供学习交流使用。*
*改编者：金田（@565gonn）*
*最后更新：2026-02-07*
