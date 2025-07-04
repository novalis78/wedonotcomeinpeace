import { useState } from 'react';
import EmailModal from './EmailModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="py-12 px-4 text-center relative overflow-hidden bg-[rgb(var(--color-deep-space))] border-t border-[rgb(var(--color-starlight)/0.1)]">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="alien-border px-6 py-3 rounded-lg font-space-mono text-sm uppercase tracking-wider bg-[rgb(var(--color-deep-space)/0.8)] transition-all hover:bg-[rgb(var(--color-deep-space))] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              Contact Author
            </button>
          </div>
          
          <p className="mt-8 text-xs text-[rgb(var(--color-starlight)/0.4)]">
            © 2024 We Do Not Come In Peace. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* Email Modal */}
      <EmailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type="contact" 
      />
    </>
  );
}