import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import EmailModal from './EmailModal';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.2
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, delay: 0.5 }
    }
  };

  const warningVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 1.5,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Oumuamua background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/M7aoEdrTFt5REZnawrHEfE-1200-80.jpg" 
          alt="Oumuamua" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-cosmic-black))] via-[rgb(var(--color-cosmic-black)/0.7)] to-transparent" />
      </div>
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--color-alien-green)/0.1)] to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(var(--color-plasma-cyan)/0.1)] to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Scanning effect */}
      <div className="absolute inset-0 scanner-line opacity-30" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={titleVariants}
          className="mb-8"
        >
          {/* Warning badge */}
          <motion.div
            variants={warningVariants}
            className="inline-block mb-8"
          >
            <div className="alien-border rounded-full px-6 py-2 bg-[rgb(var(--color-warning-red)/0.1)] pulse-danger">
              <span className="text-[rgb(var(--color-warning-red))] font-space-mono text-sm uppercase tracking-wider">
                ⚠ Classified Transmission Detected ⚠
              </span>
            </div>
          </motion.div>

          {/* Main title with glitch effect */}
          <motion.h1
            className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6 relative"
            variants={titleVariants}
          >
            <div className="block relative">
              <span className="glitch text-gradient" data-text="WE DO NOT">WE DO NOT</span>
            </div>
            <div className="block mt-2 relative">
              <span className="glitch text-gradient-danger" data-text="COME IN PEACE">COME IN PEACE</span>
            </div>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            variants={subtitleVariants}
            className="space-y-4"
          >
            <p className="font-space-mono text-lg md:text-xl text-[rgb(var(--color-plasma-cyan))] glow-text">
              THE OUMUAMUA PROTOCOL
            </p>
            <p className="text-[rgb(var(--color-starlight)/0.7)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              It's cold out there in the Dark Forest between the stars...
            </p>
            <p className="text-[rgb(var(--color-starlight)/0.9)] text-lg md:text-xl max-w-3xl mx-auto font-medium mt-4">
              <span className="text-[rgb(var(--color-warning-red))] font-bold">⚠ WARNING:</span> This book contains classified information about humanity's first contact. 
              What you're about to discover will change everything you thought you knew about Oumuamua.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative px-8 py-4 rounded-lg font-space-mono uppercase tracking-wider transition-all hover:scale-105 bg-[rgb(var(--color-alien-green))] text-[rgb(var(--color-cosmic-black))] font-bold shadow-[0_0_20px_rgba(0,255,127,0.4)] hover:shadow-[0_0_40px_rgba(0,255,127,0.8)] overflow-hidden"
            >
              <span className="relative z-10">Pre-Order Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-30" />
            </button>
            
            <button 
              onClick={() => scrollToSection('act-1')}
              className="alien-border px-8 py-4 rounded-lg font-space-mono uppercase tracking-wider bg-[rgb(var(--color-deep-space)/0.8)] text-[rgb(var(--color-starlight))] transition-all hover:bg-[rgb(var(--color-deep-space))] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:border-[rgb(var(--color-plasma-cyan))]"
            >
              Discover The Truth
            </button>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16"
          >
            <div className="w-6 h-10 border-2 border-[rgb(var(--color-alien-green)/0.5)] rounded-full mx-auto relative">
              <div className="w-1 h-2 bg-[rgb(var(--color-alien-green))] rounded-full absolute left-1/2 top-2 -translate-x-1/2 animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-[rgb(var(--color-alien-green)/0.3)] rotate-45 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border border-[rgb(var(--color-plasma-cyan)/0.3)] rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      
      {/* Email Modal */}
      <EmailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type="preorder" 
      />
    </section>
  );
}