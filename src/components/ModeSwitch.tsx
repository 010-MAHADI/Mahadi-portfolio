import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

type Mode = 'programmer' | 'basic';

const ModeSwitch = () => {
  const { toast } = useToast();
  const [mode, setMode] = useState<Mode>(() => {
    const saved = localStorage.getItem('site-mode') as Mode;
    return saved || 'programmer';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, []);

  const toggleMode = () => {
    const newMode: Mode = mode === 'programmer' ? 'basic' : 'programmer';
    setMode(newMode);
    localStorage.setItem('site-mode', newMode);
    document.documentElement.setAttribute('data-theme', newMode);

    // Show funny toast message
    if (newMode === 'programmer') {
      toast({
        title: "Entering 1337 mode... 💻",
        description: "Compiling your awesomeness. Welcome back, developer!",
        duration: 3000,
      });
    } else {
      toast({
        title: "Turning off the brain... 😴",
        description: "Welcome to ordinary mode. Normal people zone activated!",
        duration: 3000,
      });
    }
  };

  return (
    <Button
      onClick={toggleMode}
      variant="outline"
      size="icon"
      className="relative border-primary/50 hover:bg-primary/10 hover:border-primary overflow-hidden group"
    >
      <motion.div
        initial={false}
        animate={{ rotate: mode === 'programmer' ? 0 : 180 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative"
      >
        {mode === 'programmer' ? (
          <Code2 className="h-5 w-5 text-primary" />
        ) : (
          <Sun className="h-5 w-5 text-accent" />
        )}
      </motion.div>
      
      <motion.div
        className="absolute inset-0 bg-primary/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </Button>
  );
};

export default ModeSwitch;
