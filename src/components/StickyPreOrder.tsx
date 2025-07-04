import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmailModal from './EmailModal';

export default function StickyPreOrder() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      const shouldShow = window.scrollY > 500;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-40"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative px-6 py-3 rounded-full font-space-mono uppercase tracking-wider transition-all hover:scale-105 bg-[rgb(var(--color-alien-green))] text-[rgb(var(--color-cosmic-black))] font-bold shadow-[0_0_30px_rgba(0,255,127,0.6)] hover:shadow-[0_0_50px_rgba(0,255,127,0.8)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="animate-pulse">●</span>
                Pre-Order Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-30" />
              
              {/* Pulsing ring effect */}
              <div className="absolute -inset-2 rounded-full border-2 border-[rgb(var(--color-alien-green)/0.5)] animate-ping" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <EmailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type="preorder" 
      />
    </>
  );
}