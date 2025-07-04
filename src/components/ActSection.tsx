import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ActSectionProps {
  actNumber: number;
  title: string;
  subtitle: string;
  yearRange: string;
  description: string;
  theme: 'detection' | 'assessment' | 'reckoning';
}

export default function ActSection({ 
  actNumber, 
  title, 
  subtitle, 
  yearRange, 
  description, 
  theme 
}: ActSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const themeColors = {
    detection: {
      primary: 'alien-green',
      secondary: 'plasma-cyan',
      glow: 'glow-text'
    },
    assessment: {
      primary: 'stellar-purple',
      secondary: 'nebula-pink',
      glow: 'glow-text'
    },
    reckoning: {
      primary: 'warning-red',
      secondary: 'nebula-pink',
      glow: 'glow-text-danger'
    }
  };

  const colors = themeColors[theme];

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* Background effect based on theme */}
      <div className="absolute inset-0 opacity-20">
        {theme === 'detection' && (
          <div className="absolute inset-0 bg-gradient-radial from-[rgb(var(--color-alien-green)/0.2)] to-transparent" />
        )}
        {theme === 'assessment' && (
          <div className="absolute inset-0 bg-gradient-radial from-[rgb(var(--color-stellar-purple)/0.2)] to-transparent" />
        )}
        {theme === 'reckoning' && (
          <>
            <div className="absolute inset-0 bg-gradient-radial from-[rgb(var(--color-warning-red)/0.2)] to-transparent animate-pulse" />
            <img 
              src="/sail.webp" 
              alt="Alien spacecraft" 
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          {/* Act header */}
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-16 h-16 rounded-full alien-border flex items-center justify-center ${theme === 'reckoning' ? 'pulse-danger' : ''}`}>
              <span className={`font-orbitron font-bold text-2xl text-[rgb(var(--color-${colors.primary}))]`}>
                {actNumber}
              </span>
            </div>
            <div>
              <p className="font-space-mono text-sm text-[rgb(var(--color-starlight)/0.6)] uppercase tracking-wider">
                Act {['One', 'Two', 'Three'][actNumber - 1]}
              </p>
              <p className={`font-space-mono text-lg text-[rgb(var(--color-${colors.secondary}))]`}>
                {yearRange}
              </p>
            </div>
          </div>

          {/* Title and subtitle */}
          <h2 className={`font-orbitron font-black text-4xl md:text-5xl lg:text-6xl mb-4 ${colors.glow}`}>
            <span className={`text-gradient${theme === 'reckoning' ? '-danger' : ''}`}>
              {title}
            </span>
          </h2>
          <h3 className={`font-space-mono text-xl md:text-2xl text-[rgb(var(--color-${colors.secondary}))] mb-8`}>
            {subtitle}
          </h3>
          
          {/* Description */}
          <p className="text-lg text-[rgb(var(--color-starlight)/0.8)] leading-relaxed max-w-3xl">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Book Cover */}
          <div className="holographic rounded-lg p-6 text-center">
            <h4 className="font-space-mono text-lg mb-4 text-[rgb(var(--color-starlight))]">
              Get the Book
            </h4>
            <div className="mb-6">
              <div className={`w-48 h-72 mx-auto bg-gradient-to-br from-[rgb(var(--color-${colors.primary})/0.2)] to-[rgb(var(--color-${colors.secondary})/0.2)] rounded-lg alien-border flex items-center justify-center`}>
                <div className="text-center">
                  <p className="font-orbitron text-xs uppercase tracking-wider mb-2 text-[rgb(var(--color-starlight)/0.6)]">Coming Soon</p>
                  <p className={`font-space-mono text-2xl font-bold text-[rgb(var(--color-${colors.primary}))]`}>Book</p>
                  <p className={`font-space-mono text-2xl font-bold text-[rgb(var(--color-${colors.primary}))]`}>Cover</p>
                </div>
              </div>
            </div>
            <button className={`w-full px-6 py-3 rounded-lg font-space-mono text-sm uppercase tracking-wider bg-[rgb(var(--color-${colors.primary})/0.2)] border border-[rgb(var(--color-${colors.primary})/0.5)] hover:bg-[rgb(var(--color-${colors.primary})/0.3)] transition-all`}>
              Pre-Order Now
            </button>
          </div>

          {/* Audiobook Sample */}
          <div className="holographic rounded-lg p-6 text-center">
            <h4 className="font-space-mono text-lg mb-4 text-[rgb(var(--color-starlight))]">
              Listen to Sample
            </h4>
            <div className="mb-6">
              <div className="space-y-3">
                <div className="bg-[rgb(var(--color-deep-space)/0.5)] rounded-lg p-3 flex items-center gap-3">
                  <button className={`w-10 h-10 rounded-full bg-[rgb(var(--color-${colors.primary})/0.3)] border border-[rgb(var(--color-${colors.primary})/0.5)] flex items-center justify-center hover:bg-[rgb(var(--color-${colors.primary})/0.5)] transition-all`}>
                    <span className="text-xs">▶</span>
                  </button>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-space-mono text-[rgb(var(--color-starlight)/0.8)]">Chapter 1: {subtitle}</p>
                    <p className="text-xs text-[rgb(var(--color-starlight)/0.5)]">12:34</p>
                  </div>
                </div>
                <div className="bg-[rgb(var(--color-deep-space)/0.5)] rounded-lg p-3 flex items-center gap-3">
                  <button className={`w-10 h-10 rounded-full bg-[rgb(var(--color-${colors.primary})/0.3)] border border-[rgb(var(--color-${colors.primary})/0.5)] flex items-center justify-center hover:bg-[rgb(var(--color-${colors.primary})/0.5)] transition-all`}>
                    <span className="text-xs">▶</span>
                  </button>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-space-mono text-[rgb(var(--color-starlight)/0.8)]">Chapter 2: First Contact</p>
                    <p className="text-xs text-[rgb(var(--color-starlight)/0.5)]">15:47</p>
                  </div>
                </div>
                <div className="bg-[rgb(var(--color-deep-space)/0.5)] rounded-lg p-3 flex items-center gap-3">
                  <button className={`w-10 h-10 rounded-full bg-[rgb(var(--color-${colors.primary})/0.3)] border border-[rgb(var(--color-${colors.primary})/0.5)] flex items-center justify-center hover:bg-[rgb(var(--color-${colors.primary})/0.5)] transition-all`}>
                    <span className="text-xs">▶</span>
                  </button>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-space-mono text-[rgb(var(--color-starlight)/0.8)]">Chapter 3: The Signal</p>
                    <p className="text-xs text-[rgb(var(--color-starlight)/0.5)]">18:22</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-[rgb(var(--color-starlight)/0.5)]">Free preview of the audiobook</p>
          </div>

          {/* Download Sample */}
          <div className="holographic rounded-lg p-6 text-center">
            <h4 className="font-space-mono text-lg mb-4 text-[rgb(var(--color-starlight))]">
              Free Sample
            </h4>
            <div className="mb-6">
              <div className={`p-8 rounded-lg bg-[rgb(var(--color-${colors.primary})/0.1)] border-2 border-dashed border-[rgb(var(--color-${colors.primary})/0.3)]`}>
                <svg className={`w-16 h-16 mx-auto mb-4 text-[rgb(var(--color-${colors.primary}))]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="font-space-mono text-sm mb-2">Download First 3 Chapters</p>
                <p className="text-xs text-[rgb(var(--color-starlight)/0.5)]">PDF • EPUB • MOBI</p>
              </div>
            </div>
            <button className={`w-full px-6 py-3 rounded-lg font-space-mono text-sm uppercase tracking-wider bg-[rgb(var(--color-${colors.primary})/0.2)] border border-[rgb(var(--color-${colors.primary})/0.5)] hover:bg-[rgb(var(--color-${colors.primary})/0.3)] transition-all`}>
              Download Free Sample
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <div className={`w-full h-full border border-[rgb(var(--color-${colors.primary})/0.3)] rotate-45`} />
      </div>
    </section>
  );
}