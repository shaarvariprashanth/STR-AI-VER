import { createContext, useState,type JSX,type ReactNode } from "react";
import main from "@/config/gemini";

// 1. Define the context type
interface ContextType {
  input: string;
  setInput: (value: string) => void;
  recentPrompt: string;
  setRecentPrompt: (value: string) => void;
  prevPrompts: string[];
  setPrevPrompts: (value: string[]) => void;
  showResult: boolean;
  loading: boolean;
  resultData: string;
  onSent: (prompt: string) => Promise<void>;
}

// 2. Create the context with undefined as default
// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<ContextType | undefined>(undefined);

// 3. Define props for the provider
interface ContextProviderProps {
  children: ReactNode;
}

// 4. Provider component
const ContextProvider = ({ children }: ContextProviderProps): JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [recentPrompt, setRecentPrompt] = useState<string>("");
  const [prevPrompts, setPrevPrompts] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [resultData, setResultData] = useState<string>("");

  // 5. onSent function
  const onSent = async (prompt: string): Promise<void> => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(prompt);
    setPrevPrompts((prev) => [prompt, ...prev]);

    try {
      const chunk = await main(prompt);
      setResultData(chunk);
    } catch (error) {
      console.error("Error fetching response from Gemini:", error);
      setResultData("❌ Failed to get a response.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const contextValue: ContextType = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    loading,
    resultData,
    onSent,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
