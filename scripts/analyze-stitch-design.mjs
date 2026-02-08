#!/usr/bin/env node

/**
 * 使用 Gemini API 分析 Stitch 设计并生成完整的 VitePress 主题 CSS
 */

import fs from 'fs';
import { GoogleGenerativeAI } from '@google/generative-ai';

// 从环境变量或配置文件读取 API Key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyCe73VbvOHvGtdtbZ_LntJWqAUwQK5WMM8';

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function analyzeDesignWithGemini() {
  try {
    console.log('🎨 使用 Gemini 3 Pro 分析 Stitch 设计...\n');

    // 读取三个设计图
    const designs = [
      {
        name: '首页设计',
        path: '/Users/jitian/Downloads/stitch/ai_evolution_path_home/screen.png'
      },
      {
        name: '组件库',
        path: '/Users/jitian/Downloads/stitch/ai_evolution_ui_component_library/screen.png'
      },
      {
        name: '文章页设计',
        path: '/Users/jitian/Downloads/stitch/claude_code_tutorial_article/screen.png'
      }
    ];

    const model = genAI.getGenerativeModel({
      model: 'gemini-3-flash-preview' // 使用 Gemini 3 Flash (支持视觉)
    });

    // 构建提示词
    const prompt = `你是 VitePress 主题设计专家。请仔细分析这三张设计图，为 VitePress 网站生成完整的自定义 CSS 代码。

## 设计分析要求

请从以下维度详细分析：

1. **配色方案**
   - 背景色（主背景、Hero背景、卡片背景）
   - 文字色（标题、正文、辅助文字）
   - 强调色（按钮、链接、图标）
   - 渐变色（如果有）

2. **Hero 区域**
   - 背景样式（纯色/渐变/图案）
   - 标题样式（字号、字重、颜色、间距）
   - 副标题样式
   - 按钮样式（主要按钮、次要按钮）

3. **导航栏**
   - 背景色和透明度
   - 是否有毛玻璃效果（backdrop-filter）
   - Logo 和链接样式

4. **特性卡片**
   - 背景色和边框
   - 圆角大小
   - 阴影效果（默认状态和 hover 状态）
   - 图标大小和样式
   - 间距和布局

5. **文章内容**
   - 标题层级样式（H1, H2, H3）
   - 正文排版（字号、行高、段落间距）
   - 代码块样式（背景、边框、圆角）
   - 引用块样式
   - 列表样式

6. **交互效果**
   - 按钮的 hover 状态
   - 卡片的 hover 动画
   - 过渡动画时长和缓动函数

## CSS 输出要求

1. **精确还原设计**：不要凭想象添加设计图中没有的元素
2. **使用 VitePress 类名覆盖**：
   - .VPHomeHero
   - .VPNav / .VPNavBar
   - .VPFeature
   - .VPButton
   - .vp-doc
   - .jinjiang-box（自定义组件）
3. **使用 !important** 确保样式优先级
4. **包含响应式设计**：@media (max-width: 768px)
5. **包含暗色模式**：.dark 类选择器

## 输出格式

直接输出完整的 CSS 代码，用 \`\`\`css 包裹，不要有任何解释文字。

开始分析！`;

    console.log('📁 正在读取设计图...\n');

    const imageParts = [];

    for (const design of designs) {
      const imageBuffer = fs.readFileSync(design.path);
      const imageBase64 = imageBuffer.toString('base64');

      console.log(`✓ 已加载 ${design.name} (${(imageBuffer.length / 1024).toFixed(2)} KB)`);

      imageParts.push({
        inlineData: {
          data: imageBase64,
          mimeType: 'image/png'
        }
      });
    }

    console.log('\n🔍 Gemini 正在分析设计并生成 CSS...\n');

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const cssCode = response.text();

    console.log('✅ 分析完成！\n');
    console.log('═'.repeat(80));
    console.log(cssCode);
    console.log('═'.repeat(80));

    // 保存到文件
    const cleanCssCode = cssCode
      .replace(/```css/g, '')
      .replace(/```/g, '')
      .trim();

    fs.writeFileSync(
      '/Users/jitian/Documents/金田工作室/ai-beginner-evolution/docs/.vitepress/theme/custom.css',
      cleanCssCode
    );

    fs.writeFileSync(
      '/Users/jitian/Documents/金田工作室/ai-beginner-evolution/docs/public/theme.css',
      cleanCssCode
    );

    console.log('\n✅ CSS 已保存到:');
    console.log('   - docs/.vitepress/theme/custom.css');
    console.log('   - docs/public/theme.css');

  } catch (error) {
    console.error('\n❌ 分析失败！');
    console.error('错误信息:', error.message);
    if (error.stack) {
      console.error('错误堆栈:', error.stack);
    }
  }
}

analyzeDesignWithGemini();
