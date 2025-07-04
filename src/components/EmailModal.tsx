import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'preorder' | 'contact';
}

export default function EmailModal({ isOpen, onClose, type }: EmailModalProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type, message }),
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setEmail('');
          setMessage('');
          setStatus('idle');
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="holographic rounded-lg p-8">
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-[rgb(var(--color-alien-green))]">
                {type === 'preorder' ? 'Pre-Order Notification' : 'Contact Author'}
              </h3>
              
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">✓</div>
                  <p className="text-[rgb(var(--color-alien-green))]">
                    {type === 'preorder' ? 'Pre-order request received!' : 'Message sent!'}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-space-mono text-[rgb(var(--color-starlight)/0.7)] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-[rgb(var(--color-deep-space)/0.5)] border border-[rgb(var(--color-alien-green)/0.3)] text-[rgb(var(--color-starlight))] placeholder-[rgb(var(--color-starlight)/0.4)] focus:border-[rgb(var(--color-alien-green)/0.6)] focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  {type === 'contact' && (
                    <div>
                      <label className="block text-sm font-space-mono text-[rgb(var(--color-starlight)/0.7)] mb-2">
                        Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-[rgb(var(--color-deep-space)/0.5)] border border-[rgb(var(--color-alien-green)/0.3)] text-[rgb(var(--color-starlight))] placeholder-[rgb(var(--color-starlight)/0.4)] focus:border-[rgb(var(--color-alien-green)/0.6)] focus:outline-none resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                  )}
                  
                  {status === 'error' && (
                    <p className="text-sm text-[rgb(var(--color-warning-red))]">
                      Something went wrong. Please try again.
                    </p>
                  )}
                  
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 px-6 py-3 rounded-lg font-space-mono uppercase tracking-wider bg-[rgb(var(--color-alien-green)/0.2)] border border-[rgb(var(--color-alien-green)/0.5)] hover:bg-[rgb(var(--color-alien-green)/0.3)] transition-all disabled:opacity-50"
                    >
                      {isLoading ? 'Sending...' : 'Submit'}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 rounded-lg font-space-mono uppercase tracking-wider bg-[rgb(var(--color-deep-space)/0.8)] border border-[rgb(var(--color-starlight)/0.3)] hover:bg-[rgb(var(--color-deep-space))] transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}