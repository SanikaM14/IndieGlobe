// services/geminiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with the environment variable
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

// Get the generative model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// Generate text with a simple prompt
export const generateText = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating text:", error);
    throw error;
  }
};

// Stream text response (simulated since the actual streaming might require different setup)
export const streamText = async (prompt, onChunk) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Simulate streaming by breaking the text into chunks
    const chunkSize = 10;
    for (let i = 0; i < text.length; i += chunkSize) {
      const chunk = text.substring(i, i + chunkSize);
      if (onChunk) onChunk(chunk);
      // Small delay to simulate streaming
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    return text;
  } catch (error) {
    console.error("Error streaming text:", error);
    throw error;
  }
};

export const generateContentWithMode = async (prompt, mode, language) => {
  try {
    const modePrompt = `Respond in ${mode} mode. ${prompt}`;
    const result = await model.generateContent(modePrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating content with mode:", error);
    throw error;
  }
};

export const generateMultilingualResponse = async (prompt, language) => {
  try {
    const langPrompt = `Respond in ${language}. ${prompt}`;
    const result = await model.generateContent(langPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating multilingual response:", error);
    throw error;
  }
};

export const fetchGeminiResponse = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    throw error;
  }
};

export const fetchViaBackend = async (prompt) => {
  try {
    // This function would make a call to your backend which would then call the Gemini API
    // This is useful to avoid exposing your API key in the frontend
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    
    if (!response.ok) {
      throw new Error('Backend request failed');
    }
    
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error fetching via backend:", error);
    throw error;
  }
};

// Default export with all functions
const geminiService = {
  generateText,
  streamText,
  generateContentWithMode,
  generateMultilingualResponse,
  fetchGeminiResponse,
  fetchViaBackend
};

export default geminiService;