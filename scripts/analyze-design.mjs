#!/usr/bin/env node

/**
 * 使用 Kimi API 分析 Stitch 设计并生成完整的 CSS 代码
 */

import { OpenAI } from 'openai';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config({ path: '/Users/jitian/.claude/mcp-servers/kimi-k2.5/.env' });

const kimi = new OpenAI({
  apiKey: process.env.KIMI_API_KEY,
  baseURL: 'https://api.moonshot.cn/v1',
});

async function analyzeDesign() {
  try {
    console.log('🎨 使用 Kimi API 分析 Stitch 设计...\n');

    // 读取三个设计图
    const designs = [
      {
        name: '首页设计',
        path: '/Users/jitian/Downloads/stitch/ai_evolution_path_home/screen.png'
      },
      {
        name: '文章页设计',
        path: '/Users/jitian/Downloads/stitch/claude_code_tutorial_article/screen.png'
      },
      {
        name: '组件库',
        path: '/Users/jitian/Downloads/stitch/ai_evolution_ui_component_library/screen.png'
      }
    ];

    const imageContents = [];

    for (const design of designs) {
      const imageBuffer = fs.readFileSync(design.path);
      const imageBase64 = imageBuffer.toString('base64');

      imageContents.push({
        type: 'text',
        text: `## ${design.name}`
      });

      imageContents.push({
        type: 'image_url',
        image_url: {
          url: `data:image/png;base64,${imageBase64}`
        }
      });

      console.log(`✓ 已加载 ${design.name} (${(imageBuffer.length / 1024).toFixed(2)} KB)`);
    }

    console.log('\n🔍 正在分析设计并生成 CSS...\n');

    const prompt = `你是 VitePress 主题设计专家。请分析这些设计稿，为 VitePress 网站生成完整的自定义 CSS。

## 要求

1. **精确还原设计**
   - Hero 区域：紫色渐变背景、白色大标题、玻璃态卡片
   - 导航栏：透明/半透明、毛玻璃效果
   - 特性卡片：圆角、阴影、hover 效果
   - 按钮：渐变背景、圆角、hover 状态
   - 文章内容：优化排版、代码块样式、引用框样式

2. **样式细节**
   - 背景色：紫色系渐变（#667eea → #764ba2）
   - 卡片：白色背景、圆角 12px、柔和阴影
   - 字体：标题加粗、正文易读
   - 间距：宽松舒适，不拥挤
   - 动画：柔和的过渡效果

3. **VitePress 类名覆盖**
   - .VPHomeHero：Hero 区域
   - .VPNav：导航栏
   - .VPFeature：特性卡片
   - .VPButton：按钮
   - .vp-doc：文章内容
   - .jinjiang-box：自定义的金田讲解框

4. **输出格式**
   直接输出完整的 CSS 代码，不要解释，用 \`\`\`css 包裹。

开始！`;

    const completion = await kimi.chat.completions.create({
      model: 'moonshot-v1-8k-vision-preview',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: prompt },
            ...imageContents
          ]
        }
      ],
      max_tokens: 8000,
      temperature: 0.3,
    });

    console.log('✅ 分析完成！\n');
    console.log('═'.repeat(80));
    console.log(completion.choices[0].message.content);
    console.log('═'.repeat(80));

    // 保存到文件
    const cssCode = completion.choices[0].message.content
      .replace(/```css/g, '')
      .replace(/```/g, '');

    fs.writeFileSync(
      '/Users/jitian/Documents/金田工作室/ai-beginner-evolution/docs/public/theme.css',
      cssCode
    );

    console.log('\n✅ CSS 已保存到 docs/public/theme.css');

  } catch (error) {
    console.error('\n❌ 分析失败！');
    console.error('错误信息:', error.message);
    if (error.response) {
      console.error('响应状态:', error.response.status);
      console.error('响应数据:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

analyzeDesign();
