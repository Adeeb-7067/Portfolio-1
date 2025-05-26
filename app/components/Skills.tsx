// Enhanced Skills Component with Animations
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend', level: 90 },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg', category: 'Frontend', level: 85 },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', category: 'Styling', level: 80 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend', level: 80 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Frontend', level: 85 },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend', level: 90 },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend', level: 85 },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'Styling', level: 70 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend', level: 75 },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend', level: 65 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Database', level: 70 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools', level: 80 },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools', level: 80 },
];


const categories = ['Frontend', 'Backend', 'Styling'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <motion.div 
      className="min-h-screen py-20 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl text-white font-bold text-center mb-12">Skills</h2>

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            className={`px-5 py-2 rounded-full transition-all duration-300 border border-white/20 text-white text-sm backdrop-blur-md ${
              activeCategory === category ? 'bg-blue-500' : 'hover:bg-white/10'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-blue-500 h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="text-sm text-blue-300 mt-1">{skill.level}%</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
