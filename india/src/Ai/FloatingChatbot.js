// src/Ai/FloatingChatbot.js
import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  generateContentWithMode,
  generateMultilingualResponse,
  fetchViaBackend,
  generateText
} from '../services/geminiService';

// Import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "./FloatingChatbot.css";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [error, setError] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'mr', name: 'मराठी' }
  ];

  const topicChips = [
    { id: 'diwali', name: 'Diwali', icon: 'bi-lightbulb-fill' },
    { id: 'heritage', name: 'Heritage', icon: 'bi-building' },
    { id: 'unesco', name: 'UNESCO', icon: 'bi-globe' },
    { id: 'history', name: 'History', icon: 'bi-clock-history' },
    { id: 'culture', name: 'Culture', icon: 'bi-palette' },
    { id: 'festivals', name: 'Festivals', icon: 'bi-calendar-event' }
  ];

  const handleTopicClick = (topic) => {
    const prompts = {
      diwali: 'Tell me about Diwali: its significance, traditions, how it is celebrated across India, and any interesting facts.',
      heritage: 'Give an overview of India\'s cultural heritage: important periods, art, architecture, music, and dance traditions.',
      unesco: 'List notable UNESCO World Heritage Sites in India with a short description for each and what makes them special.',
      history: 'Provide a brief overview of India\'s history from ancient civilizations to modern times.',
      culture: 'Describe the diverse cultural aspects of India, including traditions, customs, and values.',
      festivals: 'Tell me about major festivals celebrated in India and their significance.'
    };
    const prompt = prompts[topic] || `Tell me about ${topic} in India.`;
    handleSendMessage(prompt);
  };

  const welcomeMessages = useMemo(() => ({
    English: "Hello! I'm your AI assistant, powered by Gemini. I can help you with coding questions, general knowledge, learning new topics, or anything else you have in mind. What would you like to know?",
    हिंदी: "नमस्ते! मैं आपका AI सहायक हूं, Gemini द्वारा संचालित। मैं कोडिंग प्रश्नों, सामान्य ज्ञान, नए विषयों को सीखने में मदद कर सकता हूं। आप क्या जानना चाहते हैं?",
    தமிழ்: "வணக்கம்! நான் உங்கள் AI உதவியாளர், Gemini ஆல் இயக்கப்படுகிறேன். நான் குறியீடு கேள்விகள், பொது அறிவு, புதிய தலைப்புகளைக் கற்றுக்கொள்ள உதவலாம். நீங்கள் என்ன தெரிந்துகொள்ள விரும்புகிறீர்கள்?",
    বাংলা: "নমস্কার! আমি আপনার AI সহায়ক, Gemini দ্বারা চালিত। আমি কোডিং প্রশ্ন, সাধারণ জ্ঞান, নতুন বিষয় শিখতে সাহায্য করতে পারি। আপনি কী জানতে চান?",
    मराठी: "नमस्कार! मी तुमचा AI सहायक आहे, Gemini द्वारा चालविलेला. मी कोडिंग प्रश्न, सामान्य ज्ञान, नवीन विषय शिकण्यात मदत करू शकतो. तुम्हाला काय जाणून घ्यायचे आहे?"
  }), []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          type: 'bot',
          content: welcomeMessages[currentLanguage] || welcomeMessages.English,
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, currentLanguage, messages.length, welcomeMessages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (message = inputMessage) => {
    if (!message?.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setError(null);

    try {
      let response;
      // Try different methods to get a response
      try {
        response = await fetchViaBackend(message);
      } catch (_) {
        try {
          response = await generateText(message);
        } catch (_) {
          if (currentLanguage === 'English') {
            response = await generateContentWithMode(message, 'explain', currentLanguage);
          } else {
            response = await generateMultilingualResponse(message, currentLanguage);
          }
        }
      }

      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: response || 'I apologize, but I couldn\'t generate a response. Please try again.',
        timestamp: new Date(),
        language: currentLanguage
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'I couldn\'t reach the AI service right now. Please try again in a moment.',
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorResponse]);
    }

    setIsTyping(false);
  };

  // Voice recognition setup
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setError(`Voice input error: ${event.error}`);
        setIsListening(false);
        setTimeout(() => setError(null), 3000);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      setError('Speech recognition is not supported in your browser');
      setTimeout(() => setError(null), 3000);
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setInputMessage('');
      setError(null);
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const speakMessage = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = currentLanguage === 'English' ? 'en-US' :
                      currentLanguage === 'हिंदी' ? 'hi-IN' :
                      currentLanguage === 'தமிழ்' ? 'ta-IN' :
                      currentLanguage === 'বাংলা' ? 'bn-IN' : 'mr-IN';

      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice =>
        voice.lang.startsWith(utterance.lang) && voice.name.includes('Female')
      );

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      window.speechSynthesis.speak(utterance);
    } else {
      setError('Text-to-speech is not supported in your browser');
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div className="floating-chatbot">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="floating-toggle-btn"
        aria-label="Toggle chatbot"
      >
        <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-chat-dots-fill'}`}></i>
        {messages.length > 0 && !isOpen && (
          <span className="notification-badge">
            {messages.filter(m => m.type === 'user').length}
          </span>
        )}
      </button>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : 'closed'}`}>
        {/* Chat Header */}
        <div className="chat-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <div className="bot-avatar">
                <i className="bi bi-lightbulb"></i>
              </div>
              <div>
                <h5 className="mb-0">Bharat AI</h5>
                <small>Powered by Gemini</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              {/* Language Selector */}
              <select
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                className="form-select form-select-sm language-selector"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.name}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-sm text-white close-btn"
                aria-label="Close chat"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'} message-animation`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="message-content">
                <p>{message.content}</p>
                <div className="message-meta">
                  <span className="message-time">
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                  {message.type === 'bot' && (
                    <button
                      onClick={() => speakMessage(message.content)}
                      className="btn btn-sm speak-btn"
                      title="Speak"
                    >
                      <i className="bi bi-volume-up"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot-message">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="chat-input">
          {/* Topic Chips */}
          <div className="topic-chips">
            {topicChips.map((chip) => (
              <button
                key={chip.id}
                onClick={() => handleTopicClick(chip.id)}
                className="topic-chip"
              >
                <i className={`bi ${chip.icon} me-1`}></i>
                {chip.name}
              </button>
            ))}
          </div>

          <div className="input-group">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              placeholder="Ask me about India's culture, festivals, history..."
              className="form-control message-input"
            />
            <button
              onClick={handleVoiceSearch}
              className={`btn voice-btn ${isListening ? 'listening' : ''}`}
              title={isListening ? 'Stop Listening' : 'Start Voice Input'}
            >
              <i className={`bi ${isListening ? 'bi-stop-circle' : 'bi-mic'}`}></i>
            </button>
            <button
              onClick={() => handleSendMessage()}
              className="btn send-btn"
              title="Send"
            >
              <i className={`bi ${isTyping ? 'bi-hourglass-split' : 'bi-send'}`}></i>
            </button>
          </div>

          {/* Error message */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingChatbot;