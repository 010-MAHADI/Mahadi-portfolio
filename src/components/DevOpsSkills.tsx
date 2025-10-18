import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const DevOpsSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [typingLine, setTypingLine] = useState(0);
  const [displayLines, setDisplayLines] = useState<string[]>([]);

  const codeLines = [
    '// Skills.json - Tech Stack Configuration',
    '',
    'const techStack = {',
    '  languages: {',
    '    primary: ["C", "C++", "Python"],',
    '    proficiency: "Intermediate to Advanced"',
    '  },',
    '  webDevelopment: {',
    '    frontend: ["HTML", "CSS", "React"],',
    '    backend: ["Firebase"],',
    '    status: "Building modern web apps"',
    '  },',
    '  artificialIntelligence: {',
    '    learning: ["Machine Learning", "AI Integration"],',
    '    currentFocus: "ML Engineering @ Phitron",',
    '    goal: "Become ML Engineer"',
    '  },',
    '  devOpsTools: {',
    '    automation: ["n8n", "GitHub Actions"],',
    '    cloud: ["Cloudflare"],',
    '    iot: ["Arduino", "ESP8266"],',
    '    versionControl: ["Git", "GitHub"]',
    '  },',
    '  competitiveProgramming: {',
    '    platforms: [',
    '      { name: "CodeChef", rating: ">1039", badge: "1 Star" },',
    '      { name: "Codeforces", rating: ">630", rank: "Newbie" },',
    '      { name: "LeetCode", solved: "30+ problems" }',
    '    ],',
    '    focus: "Data Structures & Algorithms"',
    '  }',
    '};',
    '',
    'console.log("Tech stack loaded successfully ✅");',
    '// Ready for deployment! 🚀',
  ];

  useEffect(() => {
    if (isInView && typingLine < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayLines(prev => [...prev, codeLines[typingLine]]);
        setTypingLine(typingLine + 1);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [isInView, typingLine]);

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
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
            <span className="ml-3 text-sm text-muted-foreground font-mono">Skills.json</span>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm space-y-1 min-h-[700px]">
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
              } else if (line.includes(':') && !line.trim().startsWith('}') && !line.trim().startsWith(']')) {
                const parts = line.split(':');
                if (parts[1]?.includes('[') || parts[1]?.includes('{')) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-foreground"
                    >
                      <span className="code-variable">{parts[0]}:</span>
                      <span>{parts.slice(1).join(':')}</span>
                    </motion.div>
                  );
                } else {
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
                }
              } else if (line.includes('"')) {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="code-string"
                  >
                    {line}
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
      </div>
    </section>
  );
};

export default DevOpsSkills;
