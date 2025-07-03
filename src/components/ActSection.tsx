import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ActSectionProps {
  actNumber: number;
  title: string;
  subtitle: string;
  yearRange: string;
  description: string;
  keyPoints: string[];
  theme: 'detection' | 'assessment' | 'reckoning';
}

export default function ActSection({ 
  actNumber, 
  title, 
  subtitle, 
  yearRange, 
  description, 
  keyPoints,
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
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background effect based on theme */}
      <div className="absolute inset-0 opacity-20">
        {theme === 'detection' && (
          <div className="absolute inset-0 bg-gradient-radial from-[rgb(var(--color-alien-green)/0.2)] to-transparent" />
        )}
        {theme === 'assessment' && (
          <div className="absolute inset-0 bg-gradient-radial from-[rgb(var(--color-stellar-purple)/0.2)] to-transparent" />
        )}
        {theme === 'reckoning' && (
          <div className="absolute inset-0 bg-gradient-radial from-[rgb(var(--color-warning-red)/0.2)] to-transparent animate-pulse" />
        )}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          {/* Act number */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-20 h-20 rounded-full alien-border flex items-center justify-center ${theme === 'reckoning' ? 'pulse-danger' : ''}`}>
              <span className={`font-orbitron font-bold text-3xl text-[rgb(var(--color-${colors.primary}))]`}>
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
          <h2 className={`font-orbitron font-black text-4xl md:text-6xl mb-4 ${colors.glow}`}>
            <span className={`text-gradient${theme === 'reckoning' ? '-danger' : ''}`}>
              {title}
            </span>
          </h2>
          <h3 className={`font-space-mono text-xl md:text-2xl text-[rgb(var(--color-${colors.secondary}))]`}>
            {subtitle}
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg text-[rgb(var(--color-starlight)/0.8)] leading-relaxed">
              {description}
            </p>
            
            {/* Visual element based on theme */}
            <div className="relative h-64 holographic rounded-lg overflow-hidden">
              {theme === 'detection' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 border-2 border-[rgb(var(--color-alien-green)/0.5)] rounded-full"
                  >
                    <div className="absolute inset-2 border border-[rgb(var(--color-plasma-cyan)/0.5)] rounded-full" />
                    <div className="absolute inset-4 border border-[rgb(var(--color-alien-green)/0.3)] rounded-full" />
                  </motion.div>
                </div>
              )}
              {theme === 'assessment' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.div
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-32 h-32"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <motion.path
                          d="M50,10 L70,30 L70,70 L50,90 L30,70 L30,30 Z"
                          fill="none"
                          stroke="rgb(147, 51, 234)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              )}
              {theme === 'reckoning' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl text-[rgb(var(--color-warning-red))]"
                  >
                    ⚠
                  </motion.div>
                </div>
              )}
            </div>
          </div>

          {/* Key points */}
          <div>
            <h4 className="font-space-mono text-lg mb-6 text-[rgb(var(--color-starlight))]">
              Key Events
            </h4>
            <ul className="space-y-4">
              {keyPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <div className={`w-2 h-2 rounded-full bg-[rgb(var(--color-${colors.primary}))] mt-2 flex-shrink-0`} />
                  <p className="text-[rgb(var(--color-starlight)/0.7)]">{point}</p>
                </motion.li>
              ))}
            </ul>
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