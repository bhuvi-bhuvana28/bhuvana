"use client";

import { useState, useEffect, useRef } from "react";
import { translations, newsData, schemesData } from "@/lib/data";

interface VoiceAssistantProps {
  locale: "en" | "hi" | "kn";
  onClose: () => void;
}

interface Message {
  type: "user" | "assistant";
  text: string;
  timestamp: Date;
}

export default function VoiceAssistant({ locale, onClose }: VoiceAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "assistant",
      text: locale === "en" 
        ? "Hello! I'm your agriculture assistant. You can ask me about news, schemes, weather, or eligibility. Try saying 'What are the latest schemes?' or 'Tell me about irrigation subsidies'."
        : locale === "hi"
        ? "नमस्ते! मैं आपका कृषि सहायक हूं। आप मुझसे समाचार, योजनाओं, मौसम या पात्रता के बारे में पूछ सकते हैं।"
        : "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಕೃಷಿ ಸಹಾಯಕ. ನೀವು ನನ್ನನ್ನು ಸುದ್ದಿ, ಯೋಜನೆಗಳು, ಹವಾಮಾನ ಅಥವಾ ಅರ್ಹತೆ ಬಗ್ಗೆ ಕೇಳಬಹುದು.",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const t = translations[locale];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    // Initialize speech recognition
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = locale === 'en' ? 'en-IN' : locale === 'hi' ? 'hi-IN' : 'kn-IN';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        handleSendMessage(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      window.speechSynthesis.cancel();
    };
  }, [locale]);

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = locale === 'en' ? 'en-IN' : locale === 'hi' ? 'hi-IN' : 'kn-IN';
      utterance.rate = 0.9;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Intent: Latest news
    if (lowerMessage.includes("news") || lowerMessage.includes("latest") || lowerMessage.includes("समाचार") || lowerMessage.includes("ಸುದ್ದಿ")) {
      const latestNews = newsData.slice(0, 2);
      return locale === "en"
        ? `Here are the latest news: ${latestNews.map(n => n.title).join(". ")}. Would you like to hear more details?`
        : locale === "hi"
        ? `यहाँ नवीनतम समाचार हैं: ${latestNews.map(n => n.title).join(". ")}. क्या आप अधिक विवरण सुनना चाहेंगे?`
        : `ಇಲ್ಲಿ ಇತ್ತೀಚಿನ ಸುದ್ದಿಗಳಿವೆ: ${latestNews.map(n => n.title).join(". ")}. ನೀವು ಹೆಚ್ಚಿನ ವಿವರಗಳನ್ನು ಕೇಳಲು ಬಯಸುತ್ತೀರಾ?`;
    }

    // Intent: Schemes
    if (lowerMessage.includes("scheme") || lowerMessage.includes("subsidy") || lowerMessage.includes("योजना") || lowerMessage.includes("ಯೋಜನೆ")) {
      const schemes = schemesData.slice(0, 2);
      return locale === "en"
        ? `I found these schemes for you: ${schemes.map(s => s.title).join(". ")}. These offer great benefits for farmers. Would you like to know eligibility criteria?`
        : locale === "hi"
        ? `मैंने आपके लिए ये योजनाएं पाईं: ${schemes.map(s => s.title).join(". ")}. ये किसानों के लिए बेहतरीन लाभ प्रदान करती हैं। क्या आप पात्रता मानदंड जानना चाहेंगे?`
        : `ನಾನು ನಿಮಗಾಗಿ ಈ ಯೋಜನೆಗಳನ್ನು ಕಂಡುಕೊಂಡಿದ್ದೇನೆ: ${schemes.map(s => s.title).join(". ")}. ಇವು ರೈತರಿಗೆ ಉತ್ತಮ ಪ್ರಯೋಜನಗಳನ್ನು ನೀಡುತ್ತವೆ. ನೀವು ಅರ್ಹತಾ ಮಾನದಂಡಗಳನ್ನು ತಿಳಿಯಲು ಬಯಸುತ್ತೀರಾ?`;
    }

    // Intent: Eligibility
    if (lowerMessage.includes("eligib") || lowerMessage.includes("qualify") || lowerMessage.includes("पात्रता") || lowerMessage.includes("ಅರ್ಹತೆ")) {
      return locale === "en"
        ? "To check eligibility, I need some information: What is your land size in hectares? Which state are you from? What crops do you grow?"
        : locale === "hi"
        ? "पात्रता जांचने के लिए, मुझे कुछ जानकारी चाहिए: आपकी भूमि का आकार हेक्टेयर में क्या है? आप किस राज्य से हैं? आप कौन सी फसलें उगाते हैं?"
        : "ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಲು, ನನಗೆ ಕೆಲವು ಮಾಹಿತಿ ಬೇಕು: ನಿಮ್ಮ ಭೂಮಿಯ ಗಾತ್ರ ಹೆಕ್ಟೇರ್‌ಗಳಲ್ಲಿ ಎಷ್ಟು? ನೀವು ಯಾವ ರಾಜ್ಯದಿಂದ ಬಂದಿದ್ದೀರಿ? ನೀವು ಯಾವ ಬೆಳೆಗಳನ್ನು ಬೆಳೆಯುತ್ತೀರಿ?";
    }

    // Intent: Weather
    if (lowerMessage.includes("weather") || lowerMessage.includes("rain") || lowerMessage.includes("मौसम") || lowerMessage.includes("ಹವಾಮಾನ")) {
      return locale === "en"
        ? "Based on recent alerts, heavy rainfall is expected in coastal areas over the next 48 hours. Please protect your standing crops and livestock. Stay safe!"
        : locale === "hi"
        ? "हाल की चेतावनियों के आधार पर, अगले 48 घंटों में तटीय क्षेत्रों में भारी बारिश की उम्मीद है। कृपया अपनी खड़ी फसलों और पशुओं की रक्षा करें। सुरक्षित रहें!"
        : "ಇತ್ತೀಚಿನ ಎಚ್ಚರಿಕೆಗಳ ಆಧಾರದ ಮೇಲೆ, ಮುಂದಿನ 48 ಗಂಟೆಗಳಲ್ಲಿ ಕರಾವಳಿ ಪ್ರದೇಶಗಳಲ್ಲಿ ಭಾರೀ ಮಳೆ ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ನಿಂತಿರುವ ಬೆಳೆಗಳು ಮತ್ತು ಜಾನುವಾರುಗಳನ್ನು ರಕ್ಷಿಸಿ. ಸುರಕ್ಷಿತವಾಗಿರಿ!";
    }

    // Intent: Irrigation
    if (lowerMessage.includes("irrigation") || lowerMessage.includes("drip") || lowerMessage.includes("water") || lowerMessage.includes("सिंचाई") || lowerMessage.includes("ನೀರಾವರಿ")) {
      return locale === "en"
        ? "Great question! There's a 50% subsidy available for drip irrigation systems for farmers with 0.01 to 2 hectares of land. This can save up to 60% water and increase crop yield by 30-40%. Would you like to apply?"
        : locale === "hi"
        ? "बढ़िया सवाल! 0.01 से 2 हेक्टेयर भूमि वाले किसानों के लिए ड्रिप सिंचाई प्रणाली पर 50% सब्सिडी उपलब्ध है। यह 60% तक पानी बचा सकता है और फसल की उपज 30-40% बढ़ा सकता है। क्या आप आवेदन करना चाहेंगे?"
        : "ಉತ್ತಮ ಪ್ರಶ್ನೆ! 0.01 ರಿಂದ 2 ಹೆಕ್ಟೇರ್ ಭೂಮಿ ಹೊಂದಿರುವ ರೈತರಿಗೆ ಡ್ರಿಪ್ ನೀರಾವರಿ ವ್ಯವಸ್ಥೆಗಳಿಗೆ 50% ಸಬ್ಸಿಡಿ ಲಭ್ಯವಿದೆ. ಇದು 60% ವರೆಗೆ ನೀರನ್ನು ಉಳಿಸಬಹುದು ಮತ್ತು ಬೆಳೆ ಇಳುವರಿಯನ್ನು 30-40% ಹೆಚ್ಚಿಸಬಹುದು. ನೀವು ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಬಯಸುತ್ತೀರಾ?";
    }

    // Intent: Help
    if (lowerMessage.includes("help") || lowerMessage.includes("how") || lowerMessage.includes("मदद") || lowerMessage.includes("ಸಹಾಯ")) {
      return locale === "en"
        ? "I can help you with: 1) Latest agriculture news, 2) Government schemes and subsidies, 3) Eligibility checking, 4) Weather alerts, 5) Crop advisory. What would you like to know?"
        : locale === "hi"
        ? "मैं आपकी मदद कर सकता हूं: 1) नवीनतम कृषि समाचार, 2) सरकारी योजनाएं और सब्सिडी, 3) पात्रता जांच, 4) मौसम चेतावनी, 5) फसल सलाह। आप क्या जानना चाहेंगे?"
        : "ನಾನು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಬಲ್ಲೆ: 1) ಇತ್ತೀಚಿನ ಕೃಷಿ ಸುದ್ದಿ, 2) ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಸಬ್ಸಿಡಿಗಳು, 3) ಅರ್ಹತೆ ಪರಿಶೀಲನೆ, 4) ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳು, 5) ಬೆಳೆ ಸಲಹೆ. ನೀವು ಏನು ತಿಳಿಯಲು ಬಯಸುತ್ತೀರಿ?";
    }

    // Default response
    return locale === "en"
      ? "I understand you're asking about agriculture. Could you please be more specific? You can ask about news, schemes, eligibility, weather, or irrigation."
      : locale === "hi"
      ? "मैं समझता हूं कि आप कृषि के बारे में पूछ रहे हैं। क्या आप कृपया अधिक विशिष्ट हो सकते हैं? आप समाचार, योजनाओं, पात्रता, मौसम या सिंचाई के बारे में पूछ सकते हैं।"
      : "ನೀವು ಕೃಷಿ ಬಗ್ಗೆ ಕೇಳುತ್ತಿದ್ದೀರಿ ಎಂದು ನಾನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ. ದಯವಿಟ್ಟು ಹೆಚ್ಚು ನಿರ್ದಿಷ್ಟವಾಗಿರಬಹುದೇ? ನೀವು ಸುದ್ದಿ, ಯೋಜನೆಗಳು, ಅರ್ಹತೆ, ಹವಾಮಾನ ಅಥವಾ ನೀರಾವರಿ ಬಗ್ಗೆ ಕೇಳಬಹುದು.";
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      type: "user",
      text: messageText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Generate and add assistant response
    setTimeout(() => {
      const responseText = generateResponse(messageText);
      const assistantMessage: Message = {
        type: "assistant",
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      speak(responseText);
    }, 500);

    setInputText("");
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🎤</span>
            <div>
              <h2 className="text-2xl font-bold">{t.voiceAssistant}</h2>
              <p className="text-sm text-green-100">
                {isListening ? "Listening..." : isSpeaking ? "Speaking..." : "Ready to help"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.type === "user"
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-800 shadow-md border border-gray-200"
                }`}
              >
                <p className="text-sm sm:text-base">{message.text}</p>
                <p className={`text-xs mt-1 ${message.type === "user" ? "text-green-100" : "text-gray-500"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex gap-2">
            <button
              onClick={isListening ? stopListening : startListening}
              className={`px-4 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                isListening
                  ? "bg-red-600 text-white hover:bg-red-700 animate-pulse"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              <span className="text-xl">{isListening ? "⏹️" : "🎤"}</span>
              <span className="hidden sm:inline">
                {isListening ? t.stopListening : t.startListening}
              </span>
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder={t.typeMessage}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />

            <button
              onClick={() => handleSendMessage()}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all"
            >
              {t.send}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
