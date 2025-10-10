import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import heroImage from '@/assets/mahadi-photo.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Computer Science Student | Problem Solving Enthusiast | Data Structures & Algorithms Learner';
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-accent text-lg font-medium mb-2">Hi there! I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="gradient-text">MD MAHADI</span>
                <br />
                <span className="text-foreground">HASAN</span>
              </h1>
            </motion.div>

            <div className="h-20 flex items-center">
              <p className="text-muted-foreground text-lg md:text-xl">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-foreground/80 text-lg max-w-xl">
              A 19-year-old passionate about technology and programming. As a computer science engineering student, 
              I'm always eager to learn more and contribute to the tech community.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="pt-8"
            >
              <a href="#about" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <span>Scroll to explore</span>
                <ArrowDown size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl"
              />
              <img
                src={heroImage}
                alt="MD MAHADI HASAN"
                className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-full"
              />
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
