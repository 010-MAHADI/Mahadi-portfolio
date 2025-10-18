import { useState, useEffect } from 'react';

type Theme = 'programmer' | 'basic' | 'devops';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('site-mode') as Theme;
    return saved || 'programmer';
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('site-mode') as Theme;
      if (saved && saved !== theme) {
        setTheme(saved);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom event when mode changes in same window
    const handleModeChange = (e: CustomEvent) => {
      setTheme(e.detail as Theme);
    };
    
    window.addEventListener('modechange' as any, handleModeChange as any);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('modechange' as any, handleModeChange as any);
    };
  }, [theme]);

  return theme;
};
