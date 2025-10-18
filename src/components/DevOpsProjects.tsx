import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const DevOpsProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [typingLine, setTypingLine] = useState(0);
  const [displayLines, setDisplayLines] = useState<string[]>([]);

  const codeLines = [
    '// Projects.js - Portfolio CI/CD Pipeline',
    '',
    'const myProjects = [',
    '  {',
    '    name: "Flypick Shop",',
    '    tech: ["React", "Firebase", "JavaScript", "CSS"],',
    '    status: "DEPLOYED 🟢",',
    '    url: "https://flypick.shop/",',
    '    description: "Bilingual eCommerce platform"',
    '  },',
    '  {',
    '    name: "AI WhatsApp Bot (DeepSeek R1)",',
    '    tech: ["Python", "AI/ML", "WhatsApp API"],',
    '    status: "RUNNING 🚀",',
    '    description: "Intelligent auto-reply system"',
    '  },',
    '  {',
    '    name: "IoT Voice-Controlled Home",',
    '    tech: ["IoT", "Arduino", "C++", "ESP8266"],',
    '    status: "ACTIVE ⚡",',
    '    description: "Smart home automation"',
    '  },',
    '  {',
    '    name: "Workflow Automation (n8n)",',
    '    tech: ["n8n", "JavaScript", "Cloudflare"],',
    '    status: "STABLE 💚",',
    '    description: "Social media management"',
    '  }',
    '];',
    '',
    'console.log(`Total projects: ${myProjects.length}`);',
    '// All systems operational ✅',
  ];

  useEffect(() => {
    if (isInView && typingLine < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayLines(prev => [...prev, codeLines[typingLine]]);
        setTypingLine(typingLine + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [isInView, typingLine]);

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="terminal-window"
        >
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-dot bg-destructive"></div>
            <div className="terminal-dot bg-[#f59e0b]"></div>
            <div className="terminal-dot bg-accent"></div>
            <span className="ml-3 text-sm text-muted-foreground font-mono">Projects.js</span>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm space-y-1 min-h-[600px]">
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
              } else if (line.includes('const') || line.includes('console')) {
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
              } else if (line.includes('name:') || line.includes('status:') || line.includes('url:')) {
                const parts = line.split(':');
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <span className="code-variable">{parts[0]}:</span>
                    <span className="code-string">{parts[1]}</span>
                  </motion.div>
                );
              } else if (line.includes('tech:') || line.includes('description:')) {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-foreground"
                  >
                    <span className="code-variable">{line.split(':')[0]}:</span>
                    <span className="code-string">{line.split(':').slice(1).join(':')}</span>
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
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com/010-Mahadi" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DevOpsProjects;
