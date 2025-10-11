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

  const competitiveProgramming = [
    {
      platform: "CodeChef",
      badge: "★★ 2 Star Coder",
      rating: "Rating: 1567",
      color: "text-amber-400"
    },
    {
      platform: "Codeforces",
      badge: "Specialist",
      rating: "Max Rating: 1450",
      color: "text-cyan-400"
    },
    {
      platform: "LeetCode",
      badge: "300+ problems solved",
      rating: "",
      color: "text-orange-400"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="glass-card p-6 hover-lift h-full group hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-500">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-secondary/50 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-500">
                      <category.icon className={`w-6 h-6 ${category.color} group-hover:scale-110 transition-transform duration-500`} />
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
          className="mt-12"
        >
          <Card className="glass-card p-6 sm:p-8 max-w-4xl mx-auto hover:shadow-[0_0_40px_hsl(var(--accent)/0.3)] transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 group-hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)] transition-all duration-500">
                <Code2 className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Competitive Programming</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {competitiveProgramming.map((achievement, index) => (
                <motion.div
                  key={achievement.platform}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all"
                >
                  <h4 className={`font-semibold text-lg mb-2 ${achievement.color}`}>
                    {achievement.platform}
                  </h4>
                  <p className="text-sm text-foreground/90 font-medium mb-1">
                    {achievement.badge}
                  </p>
                  {achievement.rating && (
                    <p className="text-xs text-muted-foreground">
                      {achievement.rating}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="border-t border-border/50 pt-6">
              <h4 className="text-base sm:text-lg font-semibold mb-3">Currently Learning</h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                Pursuing advanced Data Structures & Algorithms and Machine Learning through 
                <span className="text-primary font-medium"> Phitron's specialized courses</span>, 
                constantly expanding my knowledge and skills in competitive programming and AI.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
