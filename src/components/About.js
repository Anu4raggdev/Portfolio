"use client";

import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    'JavaScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Framer Motion'
  ];

  return (
    <section id="about" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">My Story</h3>
            <div className="space-y-4 text-[#cccccc]">
              <p data-aos="fade-up" data-aos-delay="300">
              It all started with a simple question — "How does this website work?" That curiosity sparked a journey into the world of development, where I found my passion for building things that matter.
              </p>
              <p data-aos="fade-up" data-aos-delay="400">
              From front-end finesse to backend logic, I've spent years mastering the tools that bring great ideas to life on the web. I believe in thoughtful design, clean code, and technology that makes life easier.
              </p>
              <p data-aos="fade-up" data-aos-delay="500">
              I'm continuously growing, exploring new tech stacks, and building apps that are not just functional — but enjoyable to use.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <a 
                href="/resume/Anurag_Resume.pdf" 
                target="_blank"
                download
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download My Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            data-aos="fade-left"
            data-aos-delay="400"
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">My Skills</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="px-4 py-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full text-sm shadow-sm border border-orange-900/30 text-[#cccccc] hover:border-orange-500/50 transition-all duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={100 * (index + 1)}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
              <div className="space-y-4">
                <div data-aos="fade-up" data-aos-delay="700">
                  <h4 className="text-lg font-semibold text-white">MCA in Computer Science</h4>
                  <p className="text-[#cccccc]">Noida International University, 2024-2026</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 