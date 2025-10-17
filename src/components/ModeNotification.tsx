import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Sun, Moon } from 'lucide-react';

interface ModeNotificationProps {
  isVisible: boolean;
  mode: 'programmer' | 'basic' | 'nightowl';
  message: string;
  description: string;
}

const ModeNotification = ({ isVisible, mode, message, description }: ModeNotificationProps) => {
  const icons = {
    programmer: Code2,
    basic: Sun,
    nightowl: Moon,
  };

  const Icon = icons[mode];

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
              className="glass-card p-8 max-w-md mx-4 pointer-events-auto border-2 border-primary/60 relative overflow-hidden shadow-2xl"
              style={{
                background: 'rgba(var(--card) / 0.8)',
                backdropFilter: 'blur(20px)',
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
                  className="p-3 rounded-lg bg-primary/30 border-2 border-primary/70 shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(147, 51, 234, 0.3)",
                      "0 0 20px rgba(147, 51, 234, 0.6)",
                      "0 0 10px rgba(147, 51, 234, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Icon className="w-8 h-8 text-primary drop-shadow-lg" />
                </motion.div>
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Terminal className="w-6 h-6 text-accent drop-shadow-lg" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-mono"
              >
                <motion.div 
                  className="text-xs text-accent mb-2 font-semibold drop-shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  $ mode --switch
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold gradient-text mb-3 drop-shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  {message}
                </motion.h3>
                <motion.p 
                  className="text-foreground/90 text-sm font-mono font-medium drop-shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-accent font-bold">&gt;</span> {description}
                </motion.p>
              </motion.div>

              {/* Loading bar animation */}
              <motion.div 
                className="mt-6 h-2 bg-secondary/50 rounded-full overflow-hidden shadow-inner"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-accent to-primary"
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
