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
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            I've developed expertise in various technologies through project work and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <SkillCategory 
              key={category.title}
              title={category.title}
              skills={category.skills}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg border border-gray-700"
    >
      <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2">{title}</h3>
      <div className="grid grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillIcon({ name, icon }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-lg mb-2 bg-gradient-to-br from-gray-700 to-gray-800 p-3">
        <Image 
          src={`/icons/${icon}.svg`}
          alt={`${name} icon`}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <span className="text-sm text-center text-gray-300">{name}</span>
    </motion.div>
  );
}

// Function no longer needed as we're using Next.js Image component
function getIconComponent(iconName) {
  return null;
} 