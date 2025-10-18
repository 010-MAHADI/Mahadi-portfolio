import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Sun, Activity, Zap, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ModeNotificationProps {
  isVisible: boolean;
  mode: 'programmer' | 'basic' | 'devops';
  message: string;
  description: string;
}

const ModeNotification = ({ isVisible, mode, message, description }: ModeNotificationProps) => {
  const [typedMessage, setTypedMessage] = useState('');
  const [typedDescription, setTypedDescription] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const icons = {
    programmer: Code2,
    basic: Sun,
    devops: Activity,
  };

  const Icon = icons[mode];

  // Typing effect for DevOps mode
  useEffect(() => {
    if (isVisible && mode === 'devops') {
      setTypedMessage('');
      setTypedDescription('');
      setShowCursor(true);
      
      let messageIndex = 0;
      const messageTimer = setInterval(() => {
        if (messageIndex <= message.length) {
          setTypedMessage(message.slice(0, messageIndex));
          messageIndex++;
        } else {
          clearInterval(messageTimer);
          
          // Start typing description after message is complete
          let descIndex = 0;
          const descTimer = setInterval(() => {
            if (descIndex <= description.length) {
              setTypedDescription(description.slice(0, descIndex));
              descIndex++;
            } else {
              clearInterval(descTimer);
              setShowCursor(false);
            }
          }, 30);
        }
      }, 50);

      return () => {
        clearInterval(messageTimer);
      };
    } else {
      // For non-DevOps modes, show immediately
      setTypedMessage(message);
      setTypedDescription(description);
      setShowCursor(false);
    }
  }, [isVisible, mode, message, description]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Blurred backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] backdrop-blur-md bg-background/30"
          />
          
          {/* Notification container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none"
          >
            <motion.div
              className="p-8 max-w-md mx-4 pointer-events-auto border-2 border-primary relative overflow-hidden shadow-2xl rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--card) / 0.95), hsl(var(--background) / 0.98))',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px hsl(var(--primary) / 0.3)',
              }}
              animate={{
                boxShadow: [
                  "0 0 30px rgba(147, 51, 234, 0.4)",
                  "0 0 60px rgba(147, 51, 234, 0.6)",
                  "0 0 30px rgba(147, 51, 234, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Animated background lines */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-px bg-primary w-full"
                    style={{ top: `${(i + 1) * 20}%` }}
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                ))}
              </div>
              
              {/* Corner glow effects */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-32 h-32 bg-accent/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />

            <div className="relative z-10">
              <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="p-3 rounded-2xl bg-primary/40 border-2 border-primary shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.2))',
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 10px hsl(var(--primary) / 0.4)",
                      "0 0 20px hsl(var(--primary) / 0.7)",
                      "0 0 10px hsl(var(--primary) / 0.4)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Icon className="w-8 h-8 text-primary drop-shadow-[0_2px_8px_hsl(var(--primary))]" />
                </motion.div>
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Terminal className="w-6 h-6 text-accent drop-shadow-[0_2px_8px_hsl(var(--accent))]" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-mono"
              >
                <motion.div 
                  className="text-xs text-accent mb-2 font-semibold"
                  style={{
                    textShadow: '0 0 10px hsl(var(--accent) / 0.8), 0 2px 4px rgba(0,0,0,0.5)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  $ mode --switch
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold gradient-text mb-3"
                  style={{
                    textShadow: '0 0 20px hsl(var(--primary) / 0.6), 0 2px 8px rgba(0,0,0,0.6)',
                    fontFamily: mode === 'devops' ? "'Fira Code', 'JetBrains Mono', monospace" : undefined,
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  {mode === 'devops' ? typedMessage : message}
                  {mode === 'devops' && showCursor && typedMessage.length < message.length && (
                    <span className="inline-block w-2 h-6 bg-accent ml-1 animate-pulse"></span>
                  )}
                </motion.h3>
                <motion.p 
                  className="text-foreground text-sm font-mono font-medium"
                  style={{
                    textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                    fontFamily: mode === 'devops' ? "'Fira Code', 'JetBrains Mono', monospace" : undefined,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-accent font-bold">&gt;</span> {mode === 'devops' ? typedDescription : description}
                  {mode === 'devops' && showCursor && typedDescription.length > 0 && typedDescription.length < description.length && (
                    <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse"></span>
                  )}
                </motion.p>
              </motion.div>

              {/* Pipeline status indicators - only for DevOps mode */}
              {mode === 'devops' && (
                <motion.div 
                  className="mt-4 space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div 
                    className="flex items-center gap-2 text-xs font-mono"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <CheckCircle2 className="w-3 h-3 text-accent" />
                    <span className="text-foreground/80">Build completed</span>
                    <span className="text-accent ml-auto">98ms</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 text-xs font-mono"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <CheckCircle2 className="w-3 h-3 text-accent" />
                    <span className="text-foreground/80">Tests passed</span>
                    <span className="text-accent ml-auto">142ms</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 text-xs font-mono"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <Zap className="w-3 h-3 text-accent" />
                    <span className="text-foreground/80">Deployed to production</span>
                    <span className="text-accent ml-auto">1.2s</span>
                  </motion.div>
                </motion.div>
              )}

              {/* Loading bar animation */}
              <motion.div 
                className="mt-6 h-2 rounded-full overflow-hidden shadow-inner"
                style={{
                  background: 'hsl(var(--secondary) / 0.6)',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: mode === 'devops' ? 1.0 : 0.7 }}
              >
                <motion.div
                  className="h-full"
                  style={{
                    background: mode === 'devops' 
                      ? 'linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)))' 
                      : 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                  }}
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </motion.div>
              
              {/* Particle effects */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/50 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModeNotification;
