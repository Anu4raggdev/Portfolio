"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="fixed w-full top-0 z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="font-mono text-xl tracking-wider text-purple-300">
                ANURAG KUMAR
              </Link>
            </motion.div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-white hover:text-gray-300 px-3 py-2 text-sm tracking-wider"
              >
                {item.toUpperCase()}
              </Link>
            ))}
            <a 
              href="/resume/Anurag_Resume.pdf" 
              target="_blank"
              download
              className="bg-purple-300 text-black px-6 py-2 text-sm font-mono tracking-wider rounded-lg hover:bg-purple-400 transition-colors duration-300 ml-2"
            >
              RESUMÉ
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className="md:hidden bg-black"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-gray-300 block px-3 py-2 text-base font-mono tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              {item.toUpperCase()}
            </Link>
          ))}
          <a 
            href="/resume/Anurag_Resume.pdf" 
            target="_blank"
            download
            className="bg-purple-300 text-black block px-3 py-2 text-base font-mono tracking-wider rounded-lg mt-2 mx-3"
            onClick={() => setIsOpen(false)}
          >
            RESUMÉ
          </a>
        </div>
      </motion.div>
    </nav>
  );
} 