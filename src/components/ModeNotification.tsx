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
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
        >
          <motion.div
            className="glass-card p-8 max-w-md mx-4 pointer-events-auto border-2 border-primary/50 relative overflow-hidden"
            animate={{
              boxShadow: [
                "0 0 20px rgba(147, 51, 234, 0.3)",
                "0 0 40px rgba(147, 51, 234, 0.5)",
                "0 0 20px rgba(147, 51, 234, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Animated background lines */}
            <div className="absolute inset-0 opacity-10">
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

            <div className="relative z-10">
              <motion.div
                className="flex items-center gap-3 mb-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/50">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <Terminal className="w-6 h-6 text-accent animate-pulse" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="font-mono"
              >
                <div className="text-xs text-accent mb-2">$ mode --switch</div>
                <h3 className="text-xl font-bold gradient-text mb-2">
                  {message}
                </h3>
                <p className="text-muted-foreground text-sm font-mono">
                  <span className="text-accent">&gt;</span> {description}
                </p>
              </motion.div>

              {/* Loading bar animation */}
              <div className="mt-4 h-1 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-accent to-primary"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModeNotification;
