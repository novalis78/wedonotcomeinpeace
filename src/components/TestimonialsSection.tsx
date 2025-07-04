import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  credential: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "The way this book weaves actual astronomical data with speculative fiction is remarkable. It made me reconsider everything about Oumuamua's trajectory.",
    author: "Dr. Sarah Chen",
    credential: "Astrophysicist, MIT",
    rating: 5
  },
  {
    quote: "Reads like classified documents from a future we're hurtling toward. The technical details are what sold me—this author did their homework.",
    author: "Michael Torres",
    credential: "Science Writer, Nebula Magazine",
    rating: 5
  },
  {
    quote: "Finally, a first contact story that doesn't insult our intelligence. The Dark Forest theory has never been more convincingly portrayed.",
    author: "Elena Volkov",
    credential: "Hard SF Author",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[rgb(var(--color-deep-space))] to-[rgb(var(--color-cosmic-black))]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgb(var(--color-alien-green)/0.1)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgb(var(--color-plasma-cyan)/0.1)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-4 glow-text">
            <span className="text-gradient">Early Reader Reactions</span>
          </h2>
          <p className="text-[rgb(var(--color-starlight)/0.7)] text-lg">
            Beta readers and scientific advisors share their thoughts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="holographic rounded-lg p-8 h-full flex flex-col justify-between hover:shadow-[0_0_30px_rgba(0,255,127,0.3)] transition-all duration-300">
                {/* Quote marks */}
                <div className="absolute top-4 left-4 text-6xl text-[rgb(var(--color-alien-green)/0.2)] font-serif">"</div>
                
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[rgb(var(--color-alien-green))] text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[rgb(var(--color-starlight)/0.9)] text-lg leading-relaxed mb-6 relative z-10">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="border-t border-[rgb(var(--color-starlight)/0.2)] pt-4">
                  <p className="font-space-mono text-[rgb(var(--color-plasma-cyan))] font-bold">
                    {testimonial.author}
                  </p>
                  <p className="text-[rgb(var(--color-starlight)/0.6)] text-sm">
                    {testimonial.credential}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-[rgb(var(--color-starlight)/0.6)] text-sm font-space-mono">
            Beta reader program • Scientific accuracy review
          </p>
        </motion.div>
      </div>
    </section>
  );
}