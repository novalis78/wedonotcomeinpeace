import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TrajectorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden bg-[rgb(var(--color-deep-space))]">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="font-orbitron font-black text-3xl md:text-4xl mb-4 glow-text">
            <span className="text-gradient">The Interstellar Visitor's Path</span>
          </h2>
          <p className="font-space-mono text-lg text-[rgb(var(--color-plasma-cyan))] mb-8">
            Tracking A11pl3Z through our solar system
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Trajectory Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="alien-border rounded-lg overflow-hidden">
                <img 
                  src="/1_sAxXZgiOP2lp2xIIuu-OQA.webp" 
                  alt="Oumuamua trajectory through solar system" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[rgb(var(--color-alien-green)/0.2)] rounded-full animate-pulse" />
            </motion.div>

            {/* Observation Data */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="alien-border rounded-lg overflow-hidden mb-6">
                <img 
                  src="/1_2DTHd2ZnEM5nfGpq7woJ6g.webp" 
                  alt="Telescope observation data" 
                  className="w-full h-auto"
                />
              </div>
              <div className="holographic rounded-lg p-4">
                <h3 className="font-space-mono text-sm uppercase tracking-wider text-[rgb(var(--color-alien-green))] mb-2">
                  Observation Data
                </h3>
                <p className="text-sm text-[rgb(var(--color-starlight)/0.8)] leading-relaxed">
                  First detected by Pan-STARRS telescope system. Unprecedented acceleration 
                  defied conventional physics, suggesting artificial origin or unknown propulsion mechanism.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            <div className="holographic rounded-lg p-4 text-center">
              <p className="font-orbitron text-2xl font-bold text-[rgb(var(--color-alien-green))]">87,000</p>
              <p className="font-space-mono text-xs uppercase text-[rgb(var(--color-starlight)/0.6)]">KM/H Speed</p>
            </div>
            <div className="holographic rounded-lg p-4 text-center">
              <p className="font-orbitron text-2xl font-bold text-[rgb(var(--color-plasma-cyan))]">400m</p>
              <p className="font-space-mono text-xs uppercase text-[rgb(var(--color-starlight)/0.6)]">Length</p>
            </div>
            <div className="holographic rounded-lg p-4 text-center">
              <p className="font-orbitron text-2xl font-bold text-[rgb(var(--color-stellar-purple))]">10:1</p>
              <p className="font-space-mono text-xs uppercase text-[rgb(var(--color-starlight)/0.6)]">Aspect Ratio</p>
            </div>
            <div className="holographic rounded-lg p-4 text-center">
              <p className="font-orbitron text-2xl font-bold text-[rgb(var(--color-warning-red))]">2017</p>
              <p className="font-space-mono text-xs uppercase text-[rgb(var(--color-starlight)/0.6)]">First Contact</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}