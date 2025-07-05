import { useState, useRef } from 'react';

interface AudioPlayerProps {
  src: string;
  title: string;
  narrator: string;
  color: string;
}

export default function AudioPlayer({ src, title, narrator, color }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Map color names to full class names to ensure Tailwind includes them
  const colorClasses = {
    'alien-green': 'bg-[rgb(var(--color-alien-green)/0.3)] border-[rgb(var(--color-alien-green)/0.5)] hover:bg-[rgb(var(--color-alien-green)/0.5)]',
    'plasma-cyan': 'bg-[rgb(var(--color-plasma-cyan)/0.3)] border-[rgb(var(--color-plasma-cyan)/0.5)] hover:bg-[rgb(var(--color-plasma-cyan)/0.5)]',
    'stellar-purple': 'bg-[rgb(var(--color-stellar-purple)/0.3)] border-[rgb(var(--color-stellar-purple)/0.5)] hover:bg-[rgb(var(--color-stellar-purple)/0.5)]',
    'nebula-pink': 'bg-[rgb(var(--color-nebula-pink)/0.3)] border-[rgb(var(--color-nebula-pink)/0.5)] hover:bg-[rgb(var(--color-nebula-pink)/0.5)]',
    'warning-red': 'bg-[rgb(var(--color-warning-red)/0.3)] border-[rgb(var(--color-warning-red)/0.5)] hover:bg-[rgb(var(--color-warning-red)/0.5)]'
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-[rgb(var(--color-deep-space)/0.5)] rounded-lg p-4">
      <div className="flex items-center gap-4">
        <button
          className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all group ${colorClasses[color as keyof typeof colorClasses] || colorClasses['alien-green']}`}
          onClick={togglePlay}
        >
          <span className="text-sm group-hover:scale-110 transition-transform">
            {isPlaying ? '⏸' : '▶'}
          </span>
        </button>
        <div className="flex-1">
          <p className="font-space-mono text-[rgb(var(--color-starlight)/0.8)]">{title}</p>
          <p className="text-xs text-[rgb(var(--color-starlight)/0.5)]">{narrator}</p>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setIsPlaying(false)}
        onError={(e) => {
          console.error(`Error loading audio: ${src}`, e);
          setIsPlaying(false);
        }}
        className="hidden"
      />
    </div>
  );
}