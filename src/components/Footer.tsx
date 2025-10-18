import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '@/hooks/useTheme';

const Footer = () => {
  const theme = useTheme();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (theme === 'devops') {
    return (
      <footer className="relative py-8 px-4 border-t border-border/50 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="font-mono text-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="text-accent">developer@portfolio:~$</span>
              <span className="text-muted-foreground">echo "© 2025 MD MAHADI HASAN | All Rights Reserved"</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="text-foreground">© 2025 MD MAHADI HASAN | All Rights Reserved</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <span className="text-accent">developer@portfolio:~$</span>
              <span className="text-muted-foreground">// just apnar choker santi 😁</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mt-4"
            >
              <span className="text-accent">developer@portfolio:~$</span>
              <span className="terminal-cursor"></span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-8 right-8"
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative py-8 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground flex items-center gap-2"
          >
            © 2025 MD MAHADI HASAN | All Rights Reserved
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <span>just apnar choker santi 😁</span>
          </motion.div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
