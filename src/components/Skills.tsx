import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Globe, Brain, Wrench } from 'lucide-react';
import { Card } from './ui/card';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-primary",
      skills: ["C", "C++", "Python", "JavaScript"]
    },
    {
      icon: Globe,
      title: "Web Development",
      color: "text-accent",
      skills: ["HTML", "CSS", "React", "Firebase"]
    },
    {
      icon: Brain,
      title: "AI/ML",
      color: "text-purple-400",
      skills: ["Machine Learning (Learning)", "Basic ML Concepts", "AI Integration"]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      color: "text-cyan-400",
      skills: ["Docker", "n8n Automation", "Cloudflare", "GitHub", "IoT"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="glass-card p-6 hover-lift h-full group">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-secondary/50 group-hover:bg-primary/20 transition-colors">
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.3, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        className="px-3 py-1.5 rounded-full bg-secondary text-sm text-foreground/90 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
            <p className="text-muted-foreground">
              Pursuing advanced Data Structures & Algorithms and Machine Learning through 
              <span className="text-primary font-medium"> Phitron's specialized courses</span>, 
              constantly expanding my knowledge and skills in competitive programming and AI.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
