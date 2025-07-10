"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden relative">
      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full border-t border-l border-r border-b border-purple-500/20 grid grid-cols-12">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-purple-500/20 h-full"></div>
          ))}
          {[...Array(12)].map((_, i) => (
            <div key={i + 'row'} className="border-b border-purple-500/20 w-full col-span-12"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content - Left Side */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-indigo-400 font-medium mb-4 retro-font text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              HELLO, I&apos;M
            </motion.p>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl mb-4 retro-font glow-text purple-gradient-text leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              ANURAG KUMAR
            </motion.h1>
            <motion.div
              className="relative mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 pixel-font">
                <TypewriterEffect text="SOFTWARE ENGINEER, WEB DEVELOPER & TECH ENTHUSIAST" />
              </h2>
            </motion.div>
            <motion.p 
              className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              I create beautiful, responsive websites and applications with clean code and exceptional user experiences.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-300 retro-font text-sm gradient-border"
              >
                CONTACT ME
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 border border-indigo-400 text-indigo-400 hover:bg-indigo-900/30 rounded-md transition-colors duration-300 retro-font text-sm"
              >
                VIEW PROJECTS
              </a>
              <a 
                href="/resume/Anurag_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-purple-400 text-purple-400 hover:bg-purple-900/30 rounded-md transition-colors duration-300 retro-font text-sm flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                RESUME
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Picture - Right Side */}
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-lg"></div>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  boxShadow: ["0px 0px 20px rgba(139, 92, 246, 0.3)", "0px 0px 50px rgba(139, 92, 246, 0.5)", "0px 0px 20px rgba(139, 92, 246, 0.3)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                {/* Profile picture */}
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-br from-gray-700 to-gray-900">
                  <div className="w-full h-full rounded-full border-4 border-gray-600/40 overflow-hidden bg-white">
                    <Image 
                      src="/profile-pic/profile_pic.png"
                      alt="Anurag Kumar"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover scale-125"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-5 -right-5 w-20 h-20 opacity-80"
                animate={{ 
                  rotate: [0, 360],
                  y: [0, -10, 0]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L61.2257 38.7743L100 50L61.2257 61.2257L50 100L38.7743 61.2257L0 50L38.7743 38.7743L50 0Z" fill="url(#paint0_linear)" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8B5CF6" />
                      <stop offset="1" stopColor="#C084FC" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 opacity-60"
                animate={{ 
                  rotate: [0, -360],
                  x: [0, 10, 0]
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="80" height="80" rx="15" fill="url(#paint1_linear)" />
                  <defs>
                    <linearGradient id="paint1_linear" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366F1" />
                      <stop offset="1" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Typewriter effect component
function TypewriterEffect({ text }) {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="inline-block"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.05,
            delay: 0.8 + (index * 0.1),
            ease: "easeIn"
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
} 