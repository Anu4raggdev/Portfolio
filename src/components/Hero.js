"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-[#121212] overflow-hidden relative">
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 md:pr-8 mb-12 md:mb-0 px-4 sm:px-6 md:px-10 lg:px-16">
            <motion.p 
              className="text-orange-500 font-medium mb-2 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              HELLO, I&apos;M
            </motion.p>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              ANURAG KUMAR
            </motion.h1>
            
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold text-orange-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <SequentialTypewriter />
            </motion.h2>
            
            <motion.p 
              className="text-[#cccccc] mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Turning coffee into code and ideas into interactive experiences. I specialize in building immersive web applications that don&apos;t just work — they wow.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-md transition-colors duration-300 text-center"
              >
                HIRE ME
              </a>
              <a 
                href="/resume/Anurag_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-600 text-white hover:bg-gray-800 rounded-md transition-colors duration-300 text-center"
              >
                DOWNLOAD CV
              </a>
            </motion.div>
          </div>
          
          {/* Right Content - Profile Picture */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] group">
              {/* Circular background with gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-700/20 p-1">
                <div className="absolute inset-0 rounded-full bg-[#1a1a1a]"></div>
              </div>
              
              {/* Subtle glow effect */}
              <motion.div 
                className="absolute -inset-2 rounded-full opacity-20 blur-xl"
                animate={{ 
                  boxShadow: [
                    "0 0 15px rgba(249, 115, 22, 0.3)",
                    "0 0 25px rgba(249, 115, 22, 0.5)",
                    "0 0 15px rgba(249, 115, 22, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              
              {/* Profile picture */}
              <div className="relative h-full w-full rounded-full overflow-hidden p-2">
                <Image 
                  src="/profile-pic/profile_pic.png"
                  alt="Anurag Kumar"
                  fill
                  sizes="(max-width: 768px) 288px, 500px"
                  className="object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Sequential Typewriter effect component
function SequentialTypewriter() {
  const titles = ["SOFTWARE DEVELOPER", "WEB DEVELOPER", "TECH ENTHUSIAST"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        
        // If we've finished typing the current title
        if (displayText === currentTitle) {
          // Wait a bit before starting to delete
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        
        // If we've finished deleting the current title
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setLoopNum(loopNum + 1);
        }
      }
    }, isDeleting ? 50 : 100); // Faster when deleting
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, loopNum, titles]);

  return (
    <motion.div className="inline-block">
      <span className="inline-block">{displayText}</span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block ml-1 border-r-2 border-orange-500 h-6 sm:h-8"
      ></motion.span>
    </motion.div>
  );
} 