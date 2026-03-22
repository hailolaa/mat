import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import AIChatbot from '../chat/AIChatbot';
import { useState } from 'react';

export default function FloatingContact() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center gap-4">
      <AnimatePresence>
        {!isChatOpen && (
          <>
            {/* WhatsApp Button */}
            <motion.a
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://wa.me/251943336017"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 transition-shadow transition-transform"
              title="WhatsApp"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.435 5.663 1.432h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.a>

            {/* Telegram Button */}
            <motion.a
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://t.me/matinsun"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#0088cc] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#0088cc]/40 transition-shadow transition-transform"
              title="Telegram"
            >
              <svg className="w-6 h-6 fill-current ml-[-2px]" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.24.24-.43.24l.197-2.97 5.415-4.894c.23-.204-.055-.317-.357-.114l-6.703 4.223-2.88-.9c-.62-.19-.63-.62.13-.914l11.23-4.326c.52-.19.97.12.798.903z" />
              </svg>
            </motion.a>

            {/* Chatbot Toggle Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsChatOpen(true)}
              className="w-16 h-16 bg-gradient-to-tr from-green-700 to-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-900/30 text-white transition-transform"
            >
              <MessageSquare className="w-8 h-8" />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* The Chatbot Component itself (it will handle its own modal logic) */}
      <AIChatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
}
