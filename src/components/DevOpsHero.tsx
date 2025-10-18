import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const DevOpsHero = () => {
  const [typingLine, setTypingLine] = useState(0);
  const [displayLines, setDisplayLines] = useState<string[]>([]);

  const codeLines = [
    '> Compiling portfolio.cpp ...',
    '> Build successful! 🚀',
    '> Entering DevOps Mode...',
    '',
    'struct Developer {',
    '    string name = "MD MAHADI HASAN";',
    '    string role = "Software Engineer | Developer";',
    '    string location = "Bangladesh";',
    '    int age = 19;',
    '    vector<string> skills = {"C++", "Python", "AI/ML"};',
    '};',
  ];

  useEffect(() => {
    if (typingLine < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayLines(prev => [...prev, codeLines[typingLine]]);
        setTypingLine(typingLine + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [typingLine]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="terminal-window"
          >
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dot bg-destructive"></div>
              <div className="terminal-dot bg-[#f59e0b]"></div>
              <div className="terminal-dot bg-accent"></div>
              <span className="ml-3 text-sm text-muted-foreground font-mono">
                <Terminal className="inline w-4 h-4 mr-2" />
                developer@portfolio:~$
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-2 min-h-[400px]">
              {displayLines.map((line, index) => {
                if (line.startsWith('>')) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-accent"
                    >
                      {line}
                    </motion.div>
                  );
                } else if (line.includes('struct') || line.includes('vector')) {
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
                } else if (line.includes('=')) {
                  const parts = line.split('=');
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <span className="code-variable">{parts[0]}</span>
                      <span className="text-foreground">=</span>
                      <span className="code-string">{parts[1]}</span>
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
              {typingLine < codeLines.length && (
                <span className="terminal-cursor"></span>
              )}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-8 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <a href="/Mahadi_resume.pdf" download="Mahadi_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="pt-12 text-center"
          >
            <a href="#about" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <span>Scroll to explore</span>
              <ArrowDown size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsHero;
