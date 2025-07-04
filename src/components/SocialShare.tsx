import { motion } from 'framer-motion';

export default function SocialShare() {
  const siteUrl = "https://wedonotcomeinpeace.com";
  const title = "We Do Not Come In Peace - The Oumuamua Protocol";
  const description = "It's cold out there in the Dark Forest between the stars... Humanity's days are numbered.";
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(siteUrl)}&hashtags=scifi,oumuamua,darkforest`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(siteUrl)}&title=${encodeURIComponent(title)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + '\n\n' + siteUrl)}`
  };

  const socialButtons = [
    { name: 'X', url: shareLinks.twitter, color: 'starlight', icon: '𝕏' },
    { name: 'Facebook', url: shareLinks.facebook, color: 'plasma-cyan', icon: 'f' },
    { name: 'LinkedIn', url: shareLinks.linkedin, color: 'stellar-purple', icon: 'in' },
    { name: 'Reddit', url: shareLinks.reddit, color: 'warning-red', icon: 'R' },
    { name: 'Email', url: shareLinks.email, color: 'alien-green', icon: '✉' }
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden bg-gradient-to-b from-[rgb(var(--color-cosmic-black))] to-[rgb(var(--color-deep-space))]">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-orbitron font-bold text-2xl md:text-3xl mb-4 glow-text">
            <span className="text-gradient">Spread the Warning</span>
          </h3>
          <p className="text-[rgb(var(--color-starlight)/0.7)] mb-8">
            Share humanity's story before it's too late
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socialButtons.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className={`group relative w-14 h-14 rounded-full alien-border bg-[rgb(var(--color-deep-space)/0.8)] flex items-center justify-center transition-all hover:bg-[rgb(var(--color-${social.color})/0.2)] hover:border-[rgb(var(--color-${social.color})/0.5)]`}
                title={`Share on ${social.name}`}
              >
                <span className={`text-xl font-bold text-[rgb(var(--color-starlight)/0.6)] group-hover:text-[rgb(var(--color-${social.color}))] transition-colors`}>
                  {social.icon}
                </span>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-space-mono text-[rgb(var(--color-starlight)/0.6)] whitespace-nowrap">
                    {social.name}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-32 h-32 -translate-y-1/2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border border-[rgb(var(--color-alien-green)/0.2)] rounded-full"
        />
      </div>
      <div className="absolute top-1/2 right-0 w-32 h-32 -translate-y-1/2">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border border-[rgb(var(--color-plasma-cyan)/0.2)] rounded-full"
        />
      </div>
    </section>
  );
}