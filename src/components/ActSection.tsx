import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AudioPlayer from './AudioPlayer';

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
  const isReversed = actNumber === 2; // Middle section is reversed

  return (
    <section ref={ref} id={`act-${actNumber}`} className="relative py-32 px-4 overflow-hidden">
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
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className={isReversed ? 'lg:order-2' : ''}
          >
            {/* Act header */}
            <div className="flex items-center gap-6 mb-8">
              <div className={`w-24 h-24 rounded-full alien-border flex items-center justify-center ${theme === 'reckoning' ? 'pulse-danger' : ''}`}>
                <span className={`font-orbitron font-bold text-5xl text-[rgb(var(--color-${colors.primary}))]`}>
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
            <p className="text-lg text-[rgb(var(--color-starlight)/0.8)] leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Book Promotion Content */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className={isReversed ? 'lg:order-1' : ''}
          >
            {/* Act I - Book Cover */}
            {actNumber === 1 && (
              <div className="holographic rounded-lg p-8 h-full flex items-center justify-center">
                <div className="w-full max-w-sm mx-auto">
                  <div className="w-full aspect-[2/3] rounded-lg overflow-hidden alien-border">
                    <img 
                      src="/cover.png" 
                      alt="We Do Not Come In Peace - Book Cover" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <a 
                    href="https://buy.stripe.com/6oU14n1Tfbjo5Jybo614403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-6 px-6 py-3 rounded-lg font-space-mono text-sm uppercase tracking-wider bg-[rgb(var(--color-alien-green)/0.2)] border border-[rgb(var(--color-alien-green)/0.5)] hover:bg-[rgb(var(--color-alien-green)/0.3)] transition-all text-center"
                  >
                    Pre-Order Now
                  </a>
                </div>
              </div>
            )}

            {/* Act II - Audio Samples */}
            {actNumber === 2 && (
              <div className="holographic rounded-lg p-6">
                <h4 className="font-space-mono text-lg mb-6 text-[rgb(var(--color-starlight))] text-center">
                  Listen to Sample Chapters
                </h4>
                <div className="space-y-4">
                  <AudioPlayer
                    src="/audio/chapter1.mp3"
                    title="Act I, Chapter 1: The Sentry"
                    narrator="Narrated by Carl Sagan (First few minutes)"
                    color="stellar-purple"
                  />
                  <AudioPlayer
                    src="/audio/chapter9.mp3"
                    title="Act II, Chapter 9: The Assessment Begins"
                    narrator="Narrated by AI Voice"
                    color="nebula-pink"
                  />
                  <div className="bg-[rgb(var(--color-deep-space)/0.5)] rounded-lg p-4 flex items-center gap-4 opacity-50">
                    <button className="w-12 h-12 rounded-full bg-[rgb(var(--color-plasma-cyan)/0.3)] border border-[rgb(var(--color-plasma-cyan)/0.5)] flex items-center justify-center cursor-not-allowed">
                      <span className="text-sm">▶</span>
                    </button>
                    <div className="flex-1">
                      <p className="font-space-mono text-[rgb(var(--color-starlight)/0.8)]">Act III Sample</p>
                      <p className="text-xs text-[rgb(var(--color-starlight)/0.5)]">Coming Soon</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[rgb(var(--color-starlight)/0.5)] mt-6 text-center">
                  Free audiobook preview • Full version available on all platforms
                </p>
                <p className="text-xs text-[rgb(var(--color-starlight)/0.4)] mt-2 text-center">
                  Audio powered by <a href="https://readmypdf.com/carl-sagan" target="_blank" rel="noopener" className="text-[rgb(var(--color-plasma-cyan)/0.6)] hover:text-[rgb(var(--color-plasma-cyan))] transition-colors">AI voice technology</a>
                </p>
              </div>
            )}

            {/* Act III - Download Sample */}
            {actNumber === 3 && (
              <div className="holographic rounded-lg p-8">
                <h4 className="font-space-mono text-lg mb-6 text-[rgb(var(--color-starlight))] text-center">
                  Download Free Sample
                </h4>
                <div className="text-center">
                  <div className="p-8 rounded-lg bg-[rgb(var(--color-warning-red)/0.1)] border-2 border-dashed border-[rgb(var(--color-warning-red)/0.3)] mb-6">
                    <svg className="w-20 h-20 mx-auto mb-4 text-[rgb(var(--color-warning-red))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="font-space-mono text-lg mb-2 text-[rgb(var(--color-warning-red))]">Act I Sample</p>
                    <p className="text-sm text-[rgb(var(--color-starlight)/0.7)] mb-4">
                      Read Chapter 1: The Sentry - The Detection
                    </p>
                    <p className="text-xs text-[rgb(var(--color-starlight)/0.5)]">
                      PDF Format • Complete First Chapter
                    </p>
                  </div>
                  <a 
                    href="/The_Oumuamua_Protocol_excerpt.pdf"
                    download
                    className="block w-full px-6 py-3 rounded-lg font-space-mono text-sm uppercase tracking-wider bg-[rgb(var(--color-warning-red)/0.2)] border border-[rgb(var(--color-warning-red)/0.5)] hover:bg-[rgb(var(--color-warning-red)/0.3)] transition-all hover:shadow-[0_0_20px_rgba(255,59,48,0.3)] text-center"
                  >
                    Download Now
                  </a>
                  <p className="text-xs text-[rgb(var(--color-starlight)/0.5)] mt-3">
                    No email required • Instant download
                  </p>
                  <p className="text-xs text-[rgb(var(--color-starlight)/0.4)] mt-2">
                    Need to hear this PDF? Try <a href="https://readmypdf.com" target="_blank" rel="noopener" className="text-[rgb(var(--color-warning-red)/0.6)] hover:text-[rgb(var(--color-warning-red))] transition-colors">ReadMyPDF</a>
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className={`absolute top-0 ${isReversed ? 'left-0' : 'right-0'} w-64 h-64 opacity-10`}>
        <div className={`w-full h-full border border-[rgb(var(--color-${colors.primary})/0.3)] rotate-45`} />
      </div>
    </section>
  );
}