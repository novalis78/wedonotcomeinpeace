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
          className={`w-12 h-12 rounded-full bg-[rgb(var(--color-${color})/0.3)] border border-[rgb(var(--color-${color})/0.5)] flex items-center justify-center hover:bg-[rgb(var(--color-${color})/0.5)] transition-all group`}
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
        className="hidden"
      />
    </div>
  );
}