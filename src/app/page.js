"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import ClientWrapper from '@/components/ClientWrapper';
import { useState, useEffect } from 'react';

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: true });
const About = dynamic(() => import('@/components/About'), { ssr: true });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: true });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

// Floating particle component
const FloatingParticle = ({ size, top, left, delay, duration }) => (
  <motion.div
    className="absolute rounded-full bg-purple-500 opacity-30"
    style={{ 
      width: size, 
      height: size, 
      top: `${top}%`, 
      left: `${left}%`,
      filter: "blur(6px)"
    }}
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.1, 0.3, 0.1],
      y: [0, -20, 0]
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatType: "loop",
    }}
  />
);

export default function Home() {
  // Use state for particles
  const [particles, setParticles] = useState([]);

  // Generate particles after component mounts on the client side
  useEffect(() => {
    // Generate an array of particles with random positions and sizes
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 10) + 5,
      top: Math.floor(Math.random() * 100),
      left: Math.floor(Math.random() * 100),
      delay: Math.random() * 2,
      duration: Math.random() * 5 + 5
    }));

    setParticles(newParticles);
  }, []);

  return (
    <ClientWrapper>
      <div className="min-h-screen relative overflow-hidden">
        {/* Particle background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {particles.map(particle => (
            <FloatingParticle 
              key={particle.id}
              size={particle.size}
              top={particle.top}
              left={particle.left}
              delay={particle.delay}
              duration={particle.duration}
            />
          ))}
        </div>

        {/* Corner decorations */}
        <div className="fixed top-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-[8rem] opacity-20 -z-10"></div>
        <div className="fixed bottom-0 left-0 w-80 h-80 bg-indigo-600 rounded-full filter blur-[8rem] opacity-20 -z-10"></div>

        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ClientWrapper>
  );
}
