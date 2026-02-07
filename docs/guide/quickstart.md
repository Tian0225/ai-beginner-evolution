# 第0章：30秒快速上手

> **目标**：在5分钟内完成安装并启动你的第一个 Claude Code

**适合人群**：
- ✅ 从未用过 Claude Code
- ✅ 想快速体验 AI 编程助手
- ✅ 不想深入了解原理，先用了再说

---

## 🚀 极速安装（3步搞定）

### 步骤1：安装 Node.js（如果没有）

访问：https://nodejs.org/

下载 LTS 版本（推荐 18+），一路"下一步"安装完成。

**验证安装**：
打开终端（Mac：`Cmd + Space` 输入"终端"，Windows：`Win + R` 输入`cmd`），输入：

```bash
node --version
```

看到版本号（如 `v20.11.0`）就说明安装成功。

---

### 步骤2：安装 Claude Code

**在终端输入**：

```bash
npm install -g @anthropic-ai/claude-code
```

**等待安装完成**（可能需要 1-2 分钟）。

**验证安装**：

```bash
claude --version
```

看到版本号就说明安装成功！✅

---

### 步骤3：配置国产模型（推荐）

**技术定义**：
Claude Code 需要连接一个 AI 模型才能工作。官方模型（Claude）需要海外账号，所以我们用国产模型替代。

**金田讲解**：
> Claude Code 是一个**工具壳**，就像电视机壳，需要接上信号源（AI 模型）才能看节目。
>
> - 官方信号源：Claude（需要海外账号，难获取）
> - 国产信号源：GLM、Kimi、MiniMax（国内直接用，便宜）

**我们使用 Coding Tool Helper 配置**（最简单）：

```bash
npx @z_ai/coding-helper
```

按照提示操作：
1. 选择模型（推荐：GLM 4.7）
2. 粘贴 API Key（在 https://open.bigmodel.cn/ 获取）
3. 完成！

---

## 🎯 启动并测试

### 启动 Claude Code

**在终端输入**：

```bash
claude
```

你会看到欢迎界面，然后就可以开始对话了！

### 第一个测试

试试这些命令：

```
你好！
帮我创建一个 hello.py 文件，输出"你好，世界！"
运行这个文件
```

**恭喜你！** 🎉 你已经成功运行了第一个 AI 编程助手！

---

## ⚠️ 常见问题

### Q1：npm install 报错？

**解决方案**：

1. **检查网络**：确保能访问 npmjs.org
2. **使用国内镜像**（推荐）：

```bash
npm config set registry https://registry.npmmirror.com
```

3. **如果还是报错**：复制错误信息，问任何 AI（包括 Kimi、豆包等）

### Q2：claude --version 看不到版本号？

**可能原因**：
- npm 安装路径不在系统 PATH 里
- 安装失败了

**解决方案**：

```bash
# 重新安装
npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code
```

### Q3：没有海外信用卡，怎么获取 API Key？

**推荐方案**：使用国产模型

- **智谱 GLM**：https://open.bigmodel.cn/
  - 支持 +86 手机号
  - 支付宝/微信支付
  - Coding 套餐：54 元/季（超便宜！）

- **Kimi**：https://platform.moonshot.cn/
  - 也有免费额度

- **MiniMax**：https://api.minimax.chat/

---

## 🎓 下一步学习

现在你已经能使用 Claude Code 了！

**建议按顺序学习**：

1. ✅ **第1章：快速上手**（你已经在这）
2. 📖 **第2章：MCP 服务器** - 让 AI 连接外部工具
3. 📖 **第3章：Skills 系统** - 借用前人的智慧
4. 📖 **第4章：实战项目** - 真实案例

**或者**，直接跳到**[完整教程](./full-guide.md)**，深入学习所有概念！

---

**准备好了吗？继续进化！** 🚀
