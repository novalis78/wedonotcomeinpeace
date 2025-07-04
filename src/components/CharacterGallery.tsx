import { motion } from 'framer-motion';
import { useState } from 'react';

interface Character {
  name: string;
  title: string;
  description: string;
  traits: string[];
  color: string;
}

const characters: Character[] = [
  {
    name: "Dr. Elena Vasquez",
    title: "Radio Astronomer",
    description: "Radio astronomer at Arecibo who first detected anomalous signals from 'Oumuamua. Her groundbreaking discovery sets the entire story in motion.",
    traits: ["Brilliant", "Determined", "Intuitive"],
    color: "alien-green"
  },
  {
    name: "Commander Sarah Chen",
    title: "Space Force Intelligence",
    description: "Space Force intelligence officer investigating unexplained space phenomena. Torn between military duty and the greater good of humanity.",
    traits: ["Strategic", "Conflicted", "Loyal"],
    color: "plasma-cyan"
  },
  {
    name: "Dr. Marcus Webb",
    title: "Xenoarchaeologist",
    description: "SETI researcher and Elena's former colleague. Discovers connections between ancient texts and the alien tests.",
    traits: ["Scholarly", "Romantic", "Persistent"],
    color: "stellar-purple"
  },
  {
    name: "Zara Al-Rashid",
    title: "AI Specialist",
    description: "Young MIT graduate student whose AI algorithms detect purposeful design in seemingly random events.",
    traits: ["Genius", "Innovative", "Fearless"],
    color: "nebula-pink"
  },
  {
    name: "General Harrison Cole",
    title: "Pentagon Official",
    description: "Pentagon official overseeing classified alien contact protocols. His journey from hawk to advocate mirrors humanity's evolution.",
    traits: ["Authoritative", "Transformative", "Pragmatic"],
    color: "warning-red"
  }
];

export default function CharacterGallery() {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[rgb(var(--color-cosmic-black))]">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(var(--color-stellar-purple)/0.1)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(var(--color-alien-green)/0.1)] rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-black text-4xl md:text-6xl mb-4 glow-text">
            <span className="text-gradient">The Protagonists</span>
          </h2>
          <p className="font-space-mono text-lg text-[rgb(var(--color-plasma-cyan))]">
            Five souls standing between humanity and extinction
          </p>
        </motion.div>

        {/* Character grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCharacter(selectedCharacter === index ? null : index)}
              className="cursor-pointer"
            >
              <div className={`relative group holographic rounded-lg p-6 h-full transition-all duration-300 ${selectedCharacter === index ? 'ring-2 ring-[rgb(var(--color-' + character.color + '))] scale-105' : ''}`}>
                {/* Character avatar placeholder */}
                <div className="mb-4 relative">
                  <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[rgb(var(--color-${character.color})/0.3)] to-[rgb(var(--color-${character.color})/0.1)] flex items-center justify-center alien-border`}>
                    <span className={`font-orbitron text-3xl font-bold text-[rgb(var(--color-${character.color}))]`}>
                      {character.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[rgb(var(--color-${character.color}))] animate-pulse`} />
                </div>
                
                {/* Character info */}
                <div className="space-y-4 text-center">
                  <div>
                    <h3 className={`font-orbitron font-bold text-xl text-[rgb(var(--color-${character.color}))] group-hover:glow-text transition-all`}>
                      {character.name}
                    </h3>
                    <p className="font-space-mono text-sm text-[rgb(var(--color-starlight)/0.6)]">
                      {character.title}
                    </p>
                  </div>

                  <p className="text-[rgb(var(--color-starlight)/0.8)] text-sm leading-relaxed">
                    {character.description}
                  </p>

                  {/* Traits */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {character.traits.map((trait, traitIndex) => (
                      <span
                        key={traitIndex}
                        className={`px-3 py-1 rounded-full text-xs font-space-mono bg-[rgb(var(--color-${character.color})/0.1)] border border-[rgb(var(--color-${character.color})/0.3)] text-[rgb(var(--color-${character.color}))]`}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Holographic scan line effect on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[rgb(var(--color-${character.color}))] to-transparent group-hover:animate-scan`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected character detail */}
        {selectedCharacter !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8"
          >
            <div className="alien-border rounded-lg p-8 bg-[rgb(var(--color-deep-space)/0.5)]">
              <h4 className="font-orbitron font-bold text-2xl mb-4 text-[rgb(var(--color-starlight))]">
                Character Arc
              </h4>
              <p className="text-[rgb(var(--color-starlight)/0.8)] leading-relaxed">
                {characters[selectedCharacter].name}'s journey through the three acts represents a crucial aspect 
                of humanity's response to the alien assessment. Their personal growth mirrors our species' 
                evolution from a fractured civilization to one capable of unity in the face of extinction.
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,35 75,75 25,75 10,35"
              fill="none"
              stroke="rgb(var(--color-alien-green))"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}