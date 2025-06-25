import React, { useState } from "react";
import axios from "axios";

export default function ChatbotWidget() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<
    { type: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [action, setAction] = useState("Resolve Bugs");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!input.trim()) return;

  const userMessage = { type: "user" as const, text: input };
  setMessages(prev => [...prev, userMessage]);
  setInput("");

  try {
    // 👇 Convert message into format expected by the backend
    const formattedMessages = [
      { role: "user", content: `${action}:\n${input}` }
    ];

    const res = await axios.post("/api/chat", {
      messages: formattedMessages,
    });

    setMessages(prev => [
      ...prev,
      { type: "bot", text: res.data.response },
    ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    setMessages(prev => [
      ...prev,
      { type: "bot", text: "⚠️ Error generating response." },
    ]);
  }
};


  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowChat(true)}
          className="bg-purple-600 p-4 rounded-full text-white shadow-lg hover:bg-purple-700"
        >
          💬
        </button>
      </div>

      {/* Chat Window */}
      {showChat && (
        <div className="fixed bottom-20 right-4 w-96 h-[500px] bg-white dark:bg-gray-900 rounded-lg shadow-lg flex flex-col z-50">
          {/* Header */}
          <div className="p-4 bg-purple-600 text-white flex justify-between items-center rounded-t-lg">
            <h2 className="text-lg font-bold">DSA Chatbot 🤖</h2>
            <button onClick={() => setShowChat(false)} className="text-black">✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg text-sm max-w-[75%] ${
                  msg.type === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Dropdown & Input */}
          <form onSubmit={handleSubmit} className="p-2 border-t flex flex-col gap-2">
            <select
              value={action}
              onChange={(e) => setAction(e.target.value)}
              className="p-2 border rounded text-sm bg-slate-950 text-white"
            >
              <option>Resolve Bugs</option>
              <option>Optimize Code</option>
              <option>Show Final Answer</option>
              <option>Suggest Improvements</option>
            </select>
            <div className="flex text-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your code or question..."
                className="flex-1 p-2 rounded-l-md border text-sm "
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 rounded-r-md hover:bg-purple-700"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
