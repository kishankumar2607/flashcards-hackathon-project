import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function getMemoryTip(english, french) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `Give me a short, memorable tip (maximum 2 sentences) to help remember that "${english}" in French is "${french}". 
                   Focus on pronunciation similarities, mnemonics, or visual associations. Make it fun and easy to remember.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting memory tip:', error);
    return 'Unable to generate memory tip at the moment.';
  }
}