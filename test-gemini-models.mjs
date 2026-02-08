import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyCe73VbvOHvGtdtbZ_LntJWqAUwQK5WMM8';
const genAI = new GoogleGenerativeAI(API_KEY);

async function listModels() {
  try {
    console.log('正在查询可用的 Gemini 模型...\n');

    // 尝试使用不同的模型
    const models = [
      'gemini-2.0-flash-exp',
      'gemini-pro-vision',
      'gemini-1.5-pro',
      'gemini-1.5-flash',
      'gemini-pro'
    ];

    for (const modelName of models) {
      try {
        console.log(`测试模型: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent('Hello');
        console.log(`✅ ${modelName} - 可用\n`);
      } catch (error) {
        console.log(`❌ ${modelName} - ${error.message}\n`);
      }
    }

  } catch (error) {
    console.error('查询失败:', error.message);
  }
}

listModels();
