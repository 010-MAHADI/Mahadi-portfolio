import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Target, MapPin } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science Engineering Student, 3rd Semester at Sirajganj Polytechnic Institute"
    },
    {
      icon: Target,
      title: "Goal",
      description: "Aspiring Machine Learning Engineer and Future Google/Facebook Developer"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Roiganj, Sirajganj, Bangladesh"
    }
  ];

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey, passion, and aspirations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card p-6 hover-lift h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass-card p-8 md:p-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text">My Story</h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Hi there! I'm MD MAHADI HASAN, a 19-year-old passionate about technology and programming. 
                  My journey in computer science began with curiosity and has evolved into a deep commitment 
                  to mastering the art of problem-solving through code.
                </p>
                <p>
                  As a Computer Science Engineering student at Sirajganj Polytechnic Institute (currently in 
                  my 3rd semester), I've immersed myself in various programming languages including C, C++, 
                  Python, and JavaScript. My fascination with Data Structures and Algorithms drives me to 
                  continuously challenge myself with complex problems.
                </p>
                <p>
                  Beyond academics, I'm actively learning Machine Learning through Phitron's specialized courses, 
                  working towards my dream of becoming a Machine Learning Engineer. I've also founded Flypick, 
                  a shopping and software company, where I apply my skills in real-world scenarios.
                </p>
                <p>
                  My goal is clear: to join tech giants like Google or Facebook, where I can contribute to 
                  innovative solutions that impact millions of users worldwide. I'm always eager to learn, 
                  collaborate, and push the boundaries of what's possible with technology.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
