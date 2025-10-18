import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const DevOpsContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [typingLine, setTypingLine] = useState(0);
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const codeLines = [
    '// Contact.config.js',
    '',
    'module.exports = {',
    '  contact: {',
    '    email: "mahadi379377@gmail.com",',
    '    phone: "+880 1922796630",',
    '    location: "Raiganj, Sirajganj, Bangladesh",',
    '    availability: "ONLINE 🟢"',
    '  },',
    '  social: {',
    '    github: "https://github.com/010-Mahadi",',
    '    linkedin: "https://linkedin.com/in/mahadi010/",',
    '    facebook: "https://facebook.com/010Mahadi",',
    '    twitter: "https://x.com/Mahadi379377"',
    '  },',
    '  status: "Ready to collaborate! 🚀"',
    '};',
  ];

  useEffect(() => {
    if (isInView && typingLine < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayLines(prev => [...prev, codeLines[typingLine]]);
        setTypingLine(typingLine + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, typingLine]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/movkknry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong! Please try again later.");
    }

    setLoading(false);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/010-Mahadi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mahadi010/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/010Mahadi", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/Mahadi379377", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code Display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="terminal-window"
          >
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dot bg-destructive"></div>
              <div className="terminal-dot bg-[#f59e0b]"></div>
              <div className="terminal-dot bg-accent"></div>
              <span className="ml-3 text-sm text-muted-foreground font-mono">Contact.config.js</span>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm space-y-1 min-h-[400px]">
              {displayLines.map((line, index) => {
                if (line.startsWith('//')) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="code-comment"
                    >
                      {line}
                    </motion.div>
                  );
                } else if (line.includes('module.exports') || line.includes('contact:') || line.includes('social:')) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="code-keyword"
                    >
                      {line}
                    </motion.div>
                  );
                } else if (line.includes(':') && !line.trim().startsWith('}')) {
                  const parts = line.split(':');
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <span className="code-variable">{parts[0]}:</span>
                      <span className="code-string">{parts.slice(1).join(':')}</span>
                    </motion.div>
                  );
                } else {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-foreground"
                    >
                      {line}
                    </motion.div>
                  );
                }
              })}
              {typingLine < codeLines.length && isInView && (
                <span className="terminal-cursor"></span>
              )}
            </div>

            {/* Social Links */}
            <div className="p-6 pt-0">
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="terminal-window"
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-destructive"></div>
              <div className="terminal-dot bg-[#f59e0b]"></div>
              <div className="terminal-dot bg-accent"></div>
              <span className="ml-3 text-sm text-muted-foreground font-mono">SendMessage.form</span>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 font-mono text-accent">
                    &gt; name:
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary font-mono"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 font-mono text-accent">
                    &gt; email:
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary font-mono"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 font-mono text-accent">
                    &gt; message:
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none font-mono"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono"
                >
                  {loading ? "Sending..." : ">> Submit Message"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsContact;
