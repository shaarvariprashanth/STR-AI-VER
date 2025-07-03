
import { GoogleGenAI } from "@google/genai";

// Toggle to use mock instead of real API
const USE_MOCK = true;

// Real Gemini API function that returns final response string
async function callGemini(prompt: string): Promise<string> {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: "text/plain",
  };

  const model = "gemini-2.5-pro";
  const contents = [
    {
      role: "user",
      parts: [{ text: prompt }],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let finalText = "";

  for await (const chunk of response) {
    if (chunk.text) {
      console.log(chunk.text);
      finalText += chunk.text;
    }
  }

  return finalText;
}

// Mock version for local development
async function mockGemini(prompt: string): Promise<string> {
  console.log(`[MOCK] Gemini called with: ${prompt}`);
  await new Promise((res) => setTimeout(res, 1000));
  const mockResponse = `This is a simulated response to "${prompt}".`;
  console.log(`[MOCK] Response: ${mockResponse}`);
  return mockResponse;
}

// Main exported function
const main = async (prompt: string): Promise<string> => {
  return USE_MOCK ? await mockGemini(prompt) : await callGemini(prompt);
};

export default main;
