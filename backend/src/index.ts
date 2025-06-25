import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("❌ GEMINI_API_KEY not set in .env");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

app.post("/chat", async (req: Request, res: Response) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "messages array is required" });
  }

  try {
    // Convert to Gemini message format
    const geminiMessages = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    }));

    const lastMessage = messages[messages.length - 1];

    const chat = await model.startChat({
      history: geminiMessages,
    });

    const result = await chat.sendMessage(lastMessage.content); // ✅ send last user input
    const response = await result.response;
    const text = await response.text();

    res.status(200).json({ response: text });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("❌ Gemini error:", error);
    res.status(500).json({
      error: "Failed to generate response",
      details: error?.message || "Unknown error",
    });
  }
});



app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

