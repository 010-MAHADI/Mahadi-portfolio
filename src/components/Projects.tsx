import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Flypick Shop",
      description: "A premium bilingual (Bangla + English) eCommerce website built with modern web technologies. Features real-time inventory, secure payment integration, and responsive design.",
      tech: ["React", "Firebase", "JavaScript", "CSS"],
      liveUrl: "https://flypick.shop/",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "AI WhatsApp Bot (DeepSeek R1)",
      description: "An intelligent auto-reply system using cutting-edge AI tools. Provides automated customer support with natural language understanding.",
      tech: ["Python", "AI/ML", "WhatsApp API", "DeepSeek"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "IoT Voice-Controlled Home",
      description: "Wi-Fi-based smart home automation system with voice control capabilities. Control lights, fans, and appliances using voice commands.",
      tech: ["IoT", "Arduino", "C++", "ESP8266"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Workflow Automation (n8n)",
      description: "Automated Facebook page management including task scheduling and content posting. Streamlines social media operations efficiently.",
      tech: ["n8n", "JavaScript", "Cloudflare", "APIs"],
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of my recent work and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card overflow-hidden group hover-lift h-full">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
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
          className="text-center mt-12"
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

export default Projects;
