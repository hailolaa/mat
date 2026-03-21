import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, Bot, Minimize2 } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useTranslation } from 'react-i18next';



export default function AIChatbot() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: t('chat.welcome_msg') }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    console.log("Gemini Key Exists:", !!import.meta.env.VITE_GEMINI_API_KEY);

    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);



    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash", systemInstruction: "You are the official AI assistant for Matinsun, an Ethiopian agricultural product manufacturing and sales company. We specialize in premium products like Berbere, Shiro, and agricultural exports. Be professional, helpful, and concise. If asked about prices, tell them to contact the sales team on the contact page or via WhatsApp. You can respond in both English and Amharic depending on the user's language." });



      const result = await model.generateContent(userMsg);
      const response = await result.response;
      const botResponse = response.text();

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { sender: 'bot', text: t('chat.error_msg') }]);
    } finally {
      setIsTyping(false);
    }

  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-[100] w-16 h-16 bg-gradient-to-tr from-green-700 to-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-900/30 text-white ${isOpen ? 'pointer-events-none' : ''}`}
      >
        <MessageSquare className="w-8 h-8" />
      </motion.button>

      {/* Chat Window Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-8 right-4 md:right-8 z-[110] w-[90vw] max-w-sm bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[500px] max-h-[80vh]"
          >
            {/* Chat Header */}
            <div className="bg-green-950 p-4 pb-6 flex items-start justify-between relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <Bot className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white leading-tight">{t('chat.title')}</h3>
                  <p className="text-green-300 text-xs flex items-center gap-1 font-medium tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> {t('chat.online')}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition relative z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-grow overflow-y-auto p-5 bg-slate-50 flex flex-col space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-4 text-sm shadow-sm ${
                    msg.sender === 'user' 
                    ? 'bg-amber-500 text-green-950 font-bold rounded-tr-sm' 
                    : 'bg-white border border-gray-100 text-gray-700 font-medium leading-relaxed rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Fake Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm p-4 shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input Field */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('chat.placeholder')}
                  className="flex-grow bg-slate-50 border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition font-medium"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="w-12 h-12 shrink-0 bg-green-900 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:bg-gray-300 transition-colors hover:bg-amber-500 hover:text-green-950"
                >
                  <Send className="w-5 h-5 -ml-0.5 mt-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
