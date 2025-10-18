import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const DevOpsAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [typingLine, setTypingLine] = useState(0);
  const [displayLines, setDisplayLines] = useState<string[]>([]);

  const codeLines = [
    '// About.cpp',
    '',
    'class AboutMe {',
    'public:',
    '    // Personal Information',
    '    string name = "MD MAHADI HASAN";',
    '    int age = 19;',
    '    string education = "CSE Student, 4th Semester";',
    '    string institute = "Sirajganj Polytechnic Institute";',
    '    string location = "Raiganj, Sirajganj, Bangladesh";',
    '',
    '    // Professional Goal',
    '    string vision = "Do something great for the world";',
    '    string mission = "Make life better for people & nature";',
    '',
    '    // Technical Skills',
    '    vector<string> languages = {"C", "C++", "Python"};',
    '    vector<string> learning = {"Machine Learning", "AI"};',
    '    vector<string> interests = {"DSA", "Problem Solving"};',
    '',
    '    // Experience',
    '    void displayExperience() {',
    '        cout << "Founder: Flypick (Shopping & Software)" << endl;',
    '        cout << "Learning: ML Engineering @ Phitron" << endl;',
    '        cout << "Status: Ready for new challenges!" << endl;',
    '    }',
    '};',
  ];

  useEffect(() => {
    if (isInView && typingLine < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayLines(prev => [...prev, codeLines[typingLine]]);
        setTypingLine(typingLine + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, typingLine]);

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
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
            <span className="ml-3 text-sm text-muted-foreground font-mono">About.cpp</span>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm space-y-1 min-h-[500px]">
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
              } else if (line.includes('class') || line.includes('public:') || line.includes('vector') || line.includes('void')) {
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
              } else if (line.includes('displayExperience') || line.includes('cout')) {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="code-function"
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
            {typingLine < codeLines.length && isInView && (
              <span className="terminal-cursor"></span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevOpsAbout;
