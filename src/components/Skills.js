"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Skills() {
  const categories = [
    {
      title: "Language",
      skills: [
        { name: "JavaScript", icon: "javascript" },
        { name: "Python", icon: "python" },
        { name: "Java", icon: "java" }
      ]
    },
    {
      title: "Front-End",
      skills: [
        { name: "React.js", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Framer Motion", icon: "framer" }
      ]
    },
    {
      title: "Back-End",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "mysql" },
        { name: "MongoDB", icon: "mongodb" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "git" },
        { name: "Figma", icon: "figma" },
        { name: "VSCode", icon: "vscode" }
      ]
    },
    {
      title: "Others",
      skills: [
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
        { name: "Tailwind", icon: "tailwind" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Skills</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          <p className="mt-6 text-lg text-[#cccccc] max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            I&apos;ve developed expertise in various technologies through project work and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <SkillCategory 
              key={category.title}
              title={category.title}
              skills={category.skills}
              delay={index * 0.1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills, delay, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-[#1a1a1a] to-[#1e1e1e] rounded-lg p-6 shadow-lg border border-gray-700"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2" data-aos="fade-right" data-aos-delay={index * 100 + 100}>
        <span className="text-orange-500">{title}</span>
      </h3>
      <div className="grid grid-cols-3 gap-6">
        {skills.map((skill, skillIndex) => (
          <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} delay={skillIndex * 50} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillIcon({ name, icon, delay }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-lg mb-2 bg-gradient-to-br from-[#1d1d1d] to-[#242424] p-3 hover:border hover:border-orange-500 transition-all duration-300">
        <Image 
          src={`/icons/${icon}.svg`}
          alt={`${name} icon`}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <span className="text-sm text-center text-[#cccccc]">{name}</span>
    </motion.div>
  );
}

// Function no longer needed as we're using Next.js Image component
function getIconComponent(iconName) {
  return null;
} 