"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  // Track images that failed to load to show appropriate fallbacks
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (id) => {
    setFailedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const projects = [
    {
      id: 1,
      title: 'Modern E-Commerce Store',
      description: 'A full-stack e-commerce platform with product catalog, shopping cart, user authentication, and secure payment processing.',
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe API'],
      image: '/projects/ecommerce-app.jpg',
      imageAlt: 'E-commerce store dashboard showing products grid and shopping cart',
      github: 'https://github.com/Anu4raggdev',
      live: 'https://demo-ecommerce.example.com',
      color: 'from-orange-600/30 to-orange-900/30'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'A collaborative project management tool with kanban boards, task assignments, deadline tracking, and team communication features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux', 'Socket.io'],
      image: '/projects/task-app.jpg',
      imageAlt: 'Task management application showing kanban board with tasks',
      github: 'https://github.com/Anu4raggdev',
      live: 'https://task-manager-demo.example.com',
      color: 'from-orange-500/30 to-orange-800/30'
    },
    {
      id: 3,
      title: 'Personal Finance Dashboard',
      description: 'An interactive financial tracking application with expense categorization, budget planning, and data visualization to help users manage their finances.',
      technologies: ['Vue.js', 'Express', 'Chart.js', 'PostgreSQL', 'Plaid API'],
      image: '/projects/finance-app.jpg',
      imageAlt: 'Financial dashboard showing expense charts and budget tracking',
      github: 'https://github.com/Anu4raggdev',
      live: 'https://finance-tracker-demo.example.com',
      color: 'from-orange-400/30 to-orange-700/30'
    },
    {
      id: 4,
      title: 'AI Content Generator',
      description: 'A web application that uses machine learning to generate blog posts, social media content, and marketing copy based on user inputs and preferences.',
      technologies: ['React', 'Python', 'FastAPI', 'Hugging Face', 'AWS Lambda'],
      image: '/projects/ai-content-app.jpg',
      imageAlt: 'AI content generator interface with text input and generated content',
      github: 'https://github.com/Anu4raggdev',
      live: 'https://ai-writer-demo.example.com',
      color: 'from-amber-600/30 to-orange-900/30'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Projects</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          <p className="mt-6 text-lg text-[#cccccc] max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Here are some of my recent projects. Each one demonstrates my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#1e1e1e] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="h-56 bg-[#1d1d1d] relative overflow-hidden">
                {/* Display image if available, otherwise show stylized placeholder */}
                {!failedImages[project.id] ? (
                  <div className="relative h-full w-full">
                    <Image 
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover"
                      priority={project.id === 1}
                      onError={() => handleImageError(project.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-md">{project.title}</h3>
                    </div>
                  </div>
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <div className="text-center p-4">
                      <div className="flex justify-center mb-4">
                        {project.id === 1 && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        )}
                        {project.id === 2 && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                        )}
                        {project.id === 3 && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        )}
                        {project.id === 4 && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-[#cccccc] mb-4">{project.description}</p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="px-4 py-2 bg-[#242424] text-white rounded-md text-sm hover:bg-[#2a2a2a] transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="px-4 py-2 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600 transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <a
            href="https://github.com/Anu4raggdev"
            className="inline-flex items-center px-6 py-3 border border-gray-600 rounded-md shadow-sm text-base font-medium text-[#cccccc] bg-[#1a1a1a] hover:bg-[#242424] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
} 