import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import ModeNotification from './ModeNotification';

type Mode = 'programmer' | 'basic' | 'nightowl';

const ModeSwitch = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const saved = localStorage.getItem('site-mode') as Mode;
    return saved || 'programmer';
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationData, setNotificationData] = useState({
    message: '',
    description: '',
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, []);

  const getModeMessages = (newMode: Mode) => {
    const messages = {
      programmer: {
        message: "ENTERING 1337 MODE... 💻",
        description: "Compiling awesomeness.c... Success! Developer mode activated.",
      },
      basic: {
        message: "TURNING OFF THE BRAIN... 😴",
        description: "sudo apt-get install normal-mode... Welcome to ordinary zone!",
      },
      nightowl: {
        message: "ACTIVATING NOCTURNAL POWERS... 🦉",
        description: "Dark mode.exe loaded... Time to code in the shadows! 🌙",
      },
    };
    return messages[newMode];
  };

  const toggleMode = () => {
    const modeOrder: Mode[] = ['programmer', 'basic', 'nightowl'];
    const currentIndex = modeOrder.indexOf(mode);
    const newMode = modeOrder[(currentIndex + 1) % modeOrder.length];
    
    setMode(newMode);
    localStorage.setItem('site-mode', newMode);
    document.documentElement.setAttribute('data-theme', newMode);

    // Show center notification
    const { message, description } = getModeMessages(newMode);
    setNotificationData({ message, description });
    setShowNotification(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const getModeIcon = () => {
    switch (mode) {
      case 'programmer':
        return <Code2 className="h-5 w-5 text-primary" />;
      case 'basic':
        return <Sun className="h-5 w-5 text-accent" />;
      case 'nightowl':
        return <Moon className="h-5 w-5 text-primary" />;
    }
  };

  const getModeName = () => {
    switch (mode) {
      case 'programmer':
        return 'Programmer Mode';
      case 'basic':
        return 'Basic Mode';
      case 'nightowl':
        return 'Night Owl Mode';
    }
  };

  return (
    <>
      <Button
        onClick={toggleMode}
        variant="outline"
        className="relative border-primary/50 hover:bg-primary/10 hover:border-primary overflow-hidden group gap-2 px-4"
        title={`Current: ${getModeName()}`}
      >
        <motion.div
          key={mode}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative"
        >
          {getModeIcon()}
        </motion.div>
        
        <motion.span
          key={`text-${mode}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:inline-block text-sm font-mono font-medium"
        >
          {getModeName()}
        </motion.span>
        
        <motion.div
          className="absolute inset-0 bg-primary/20"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </Button>

      <ModeNotification
        isVisible={showNotification}
        mode={mode}
        message={notificationData.message}
        description={notificationData.description}
      />
    </>
  );
};

export default ModeSwitch;
