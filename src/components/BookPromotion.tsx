import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BookPromotion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[rgb(var(--color-deep-space))] to-[rgb(var(--color-cosmic-black))]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgb(var(--color-alien-green)/0.1)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-black text-4xl md:text-6xl mb-4 glow-text">
            <span className="text-gradient">Get The Book</span>
          </h2>
          <p className="font-space-mono text-lg text-[rgb(var(--color-plasma-cyan))]">
            Available in multiple formats from your favorite retailers
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="holographic rounded-lg p-8 h-full flex items-center justify-center">
              <div className="w-64 h-96 bg-gradient-to-br from-[rgb(var(--color-alien-green)/0.2)] to-[rgb(var(--color-warning-red)/0.2)] rounded-lg alien-border flex items-center justify-center">
                <div className="text-center">
                  <p className="font-orbitron text-xs uppercase tracking-wider mb-4 text-[rgb(var(--color-starlight)/0.6)]">Coming Soon</p>
                  <p className="font-orbitron text-3xl font-bold text-[rgb(var(--color-alien-green))] mb-2">WE DO NOT</p>
                  <p className="font-orbitron text-3xl font-bold text-[rgb(var(--color-warning-red))]">COME IN PEACE</p>
                  <p className="font-space-mono text-sm mt-4 text-[rgb(var(--color-plasma-cyan))]">The Oumuamua Protocol</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Purchase Options */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Purchase Links */}
            <div className="holographic rounded-lg p-6">
              <h3 className="font-space-mono text-lg mb-6 text-[rgb(var(--color-starlight))]">
                Purchase Options
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <a 
                  href="#" 
                  className="group block p-4 rounded-lg bg-[rgb(var(--color-deep-space)/0.5)] border border-[rgb(var(--color-alien-green)/0.3)] hover:border-[rgb(var(--color-alien-green)/0.6)] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-space-mono text-[rgb(var(--color-alien-green))] group-hover:glow-text transition-all">Amazon</h4>
                      <p className="text-sm text-[rgb(var(--color-starlight)/0.6)]">Kindle & Paperback</p>
                    </div>
                    <span className="text-2xl">→</span>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="group block p-4 rounded-lg bg-[rgb(var(--color-deep-space)/0.5)] border border-[rgb(var(--color-plasma-cyan)/0.3)] hover:border-[rgb(var(--color-plasma-cyan)/0.6)] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-space-mono text-[rgb(var(--color-plasma-cyan))] group-hover:glow-text transition-all">Lulu</h4>
                      <p className="text-sm text-[rgb(var(--color-starlight)/0.6)]">Premium Hardcover</p>
                    </div>
                    <span className="text-2xl">→</span>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="group block p-4 rounded-lg bg-[rgb(var(--color-deep-space)/0.5)] border border-[rgb(var(--color-stellar-purple)/0.3)] hover:border-[rgb(var(--color-stellar-purple)/0.6)] transition-all opacity-75"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-space-mono text-[rgb(var(--color-stellar-purple))]">Direct eBook</h4>
                      <p className="text-sm text-[rgb(var(--color-starlight)/0.6)]">Coming Soon</p>
                    </div>
                    <span className="text-2xl">⏳</span>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="group block p-4 rounded-lg bg-[rgb(var(--color-deep-space)/0.5)] border border-[rgb(var(--color-warning-red)/0.3)] hover:border-[rgb(var(--color-warning-red)/0.6)] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-space-mono text-[rgb(var(--color-warning-red))] group-hover:glow-text transition-all">Free Sample</h4>
                      <p className="text-sm text-[rgb(var(--color-starlight)/0.6)]">First 3 Chapters</p>
                    </div>
                    <span className="text-2xl">↓</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Audiobook Sample */}
            <div className="holographic rounded-lg p-6">
              <h3 className="font-space-mono text-lg mb-4 text-[rgb(var(--color-starlight))]">
                Listen to Sample Chapters
              </h3>
              <div className="space-y-3">
                <div className="bg-[rgb(var(--color-deep-space)/0.5)] rounded-lg p-4 flex items-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-[rgb(var(--color-alien-green)/0.3)] border border-[rgb(var(--color-alien-green)/0.5)] flex items-center justify-center hover:bg-[rgb(var(--color-alien-green)/0.5)] transition-all">
                    <span className="text-sm">▶</span>
                  </button>
                  <div className="flex-1">
                    <p className="font-space-mono text-[rgb(var(--color-starlight)/0.8)]">Chapter 1: The Detection</p>
                    <p className="text-xs text-[rgb(var(--color-starlight)/0.5)]">12:34</p>
                  </div>
                </div>
                <div className="bg-[rgb(var(--color-deep-space)/0.5)] rounded-lg p-4 flex items-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-[rgb(var(--color-plasma-cyan)/0.3)] border border-[rgb(var(--color-plasma-cyan)/0.5)] flex items-center justify-center hover:bg-[rgb(var(--color-plasma-cyan)/0.5)] transition-all">
                    <span className="text-sm">▶</span>
                  </button>
                  <div className="flex-1">
                    <p className="font-space-mono text-[rgb(var(--color-starlight)/0.8)]">Chapter 2: First Contact</p>
                    <p className="text-xs text-[rgb(var(--color-starlight)/0.5)]">15:47</p>
                  </div>
                </div>
                <div className="bg-[rgb(var(--color-deep-space)/0.5)] rounded-lg p-4 flex items-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-[rgb(var(--color-warning-red)/0.3)] border border-[rgb(var(--color-warning-red)/0.5)] flex items-center justify-center hover:bg-[rgb(var(--color-warning-red)/0.5)] transition-all">
                    <span className="text-sm">▶</span>
                  </button>
                  <div className="flex-1">
                    <p className="font-space-mono text-[rgb(var(--color-starlight)/0.8)]">Chapter 3: The Signal</p>
                    <p className="text-xs text-[rgb(var(--color-starlight)/0.5)]">18:22</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-[rgb(var(--color-starlight)/0.5)] mt-4 text-center">Free preview of the audiobook narrated by award-winning voice actors</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}