import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CountdownSection() {
  // Set pre-order deadline to 30 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-[rgb(var(--color-cosmic-black))] to-[rgb(var(--color-deep-space))]">
      {/* Alert effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[rgb(var(--color-warning-red)/0.05)] animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Special offer badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 rounded-full bg-[rgb(var(--color-warning-red)/0.2)] border border-[rgb(var(--color-warning-red)/0.5)]">
              <span className="font-space-mono text-sm text-[rgb(var(--color-warning-red))] uppercase tracking-wider">
                Limited Time • Early Access
              </span>
            </div>
          </motion.div>

          <h3 className="font-orbitron font-bold text-2xl md:text-3xl mb-4">
            <span className="text-gradient-danger">Pre-Order Bonus Expires In</span>
          </h3>

          {/* Countdown timer */}
          <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-8">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="alien-border rounded-lg p-4 bg-[rgb(var(--color-deep-space)/0.8)]"
              >
                <div className="font-orbitron text-3xl md:text-4xl font-bold text-[rgb(var(--color-warning-red))] mb-1">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="font-space-mono text-xs text-[rgb(var(--color-starlight)/0.6)] uppercase">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bonus items */}
          <div className="space-y-3 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3"
            >
              <span className="text-[rgb(var(--color-alien-green))]">✓</span>
              <span className="text-[rgb(var(--color-starlight)/0.8)]">
                Exclusive bonus chapter: "The Signal" (Pre-order only)
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3"
            >
              <span className="text-[rgb(var(--color-alien-green))]">✓</span>
              <span className="text-[rgb(var(--color-starlight)/0.8)]">
                Author's notes on the real science behind the story
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3"
            >
              <span className="text-[rgb(var(--color-alien-green))]">✓</span>
              <span className="text-[rgb(var(--color-starlight)/0.8)]">
                Early access to Act IV when it releases
              </span>
            </motion.div>
          </div>

          <p className="text-[rgb(var(--color-starlight)/0.6)] text-sm font-space-mono">
            Regular price: $14.99 • Pre-order price: $9.99
          </p>
        </motion.div>
      </div>
    </section>
  );
}