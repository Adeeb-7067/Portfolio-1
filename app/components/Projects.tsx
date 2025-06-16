// Enhanced Projects Component with Online Images
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  name: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    name: 'E-Commerce Platform',
    description: 'An online store with payment and authentication.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio built with Next.js and Tailwind.',
    tech: ['Next.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1545427019-32cd376de72c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: '#',
    githubUrl: 'https://github.com/Adeeb-7067/Portfolio-1',
    featured: true,
  },
  {
    name: 'EduCase',
    description: 'An educational platform for case studies and learning.',
    tech: ['React', 'JavaScript'],
    image: 'https://media.istockphoto.com/id/2150808311/vector/management-set-of-web-icons-in-linear-style-project-management-icons-for-web-and-mobile-app.jpg?s=1024x1024&w=is&k=20&c=8mMA4qgFN77Ew2HLB0W9wRmOLnF6Uom446voDXYHLxw=',
    demoUrl: '#',
    githubUrl: 'https://github.com/Adeeb-7067/EduCase',
    featured: false,
  },
  {
    name: 'Task Management App',
    description: 'Manage your daily tasks efficiently with this app.',
    tech: ['TypeScript', 'React'],
    image: 'https://plus.unsplash.com/premium_vector-1737034881592-facf1ce3f831?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: '#',
    githubUrl: 'https://github.com/Adeeb-7067/Task-management-',
    featured: false,
  },
  {
    name: 'Travel Itinerary App',
    description: 'Plan and organize your travel itinerary.',
    tech: ['React Native', 'JavaScript'],
    image: 'https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: '#',
    githubUrl: 'https://github.com/Adeeb-7067/Travel-iternity-app',
    featured: false,
  },
  {
    name: 'Firebase Auth Template',
    description: 'Template with Firebase authentication setup.',
    tech: ['Next.js', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1510772314292-9c0ad420734a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: '#',
    githubUrl: 'https://github.com/Adeeb-7067/FireBase-auth-template',
    featured: false,
  },
  {
    name: 'Simple Chat App',
    description: 'A real-time chat app using WebSockets.',
    tech: ['React', 'Socket.io'],
    image: 'https://plus.unsplash.com/premium_photo-1718641527614-8edd0ca13235?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: '#',
    githubUrl: 'https://github.com/Adeeb-7067/Simple-chat-app',
    featured: false,
  },
  {
    name: 'AI Learning',
    description: 'Projects for learning AI and ML concepts in Python.',
    tech: ['Python', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: '#',
    githubUrl: 'https://github.com/Adeeb-7067/Ai-Learning',
    featured: false,
  }
];


const filters = ['All', 'Featured', 'React', 'Next.js'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return project.featured;
    return project.tech.includes(activeFilter);
  });

  return (

    
    <motion.div 
      className="min-h-screen py-20 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl text-white font-bold text-center mb-8">Projects</h2>

      <div className="flex justify-center mb-10 gap-4 flex-wrap">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.05 }}
            className={`px-5 py-2 rounded-full transition-all duration-300 border backdrop-blur-md border-white/20 text-white text-sm ${
              activeFilter === filter ? 'bg-blue-500' : 'hover:bg-white/10'
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              className="relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              layout
              onClick={() => setSelected(project)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-4">
                <h3 className="text-xl text-white font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <span className="text-sm">Click to view details</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-xl border border-white/10 max-w-2xl w-full p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-red-500"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-white mb-4">{selected.name}</h3>
              <p className="text-gray-300 mb-4">{selected.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {selected.demoUrl && (
                  <a
                    href={selected.demoUrl}
                    target="_blank"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm"
                  >
                    Live Demo
                  </a>
                )}
                {selected.githubUrl && (
                  <a
                    href={selected.githubUrl}
                    target="_blank"
                    className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black text-sm"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
