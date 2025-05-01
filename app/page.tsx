'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Projects from '@/app/components/Projects';
import Services from '@/app/components/services';
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Skills from "./components/Skills";

interface Project {
    name: string;
    tech: string;
}

const projects: Project[] = [
    { name: "E-Commerce Platform", tech: "MERN Stack" },
    { name: "Task Management App", tech: "React, Firebase" },
    { name: "Portfolio Website", tech: "Next.js, Tailwind" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    }
  }
};

export default function Home() {
    const navItems = ["Home", "Expertise", "Projects", "Services", "Contact"];
    const [activeSection, setActiveSection] = useState("Home");
    const homeRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const expertiseRef = useRef<HTMLDivElement>(null); 
    const servicesRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (section: string) => {
        setActiveSection(section);
        let ref;

        switch(section) {
            case "Home": ref = homeRef; break;
            case "Projects": ref = projectsRef; break;
            case "Expertise": ref = expertiseRef; break;
            case "Services": ref = servicesRef; break;
            case "Contact": ref = contactRef; break;
            default: ref = homeRef;
        }

        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <div className="relative w-full font-sans">
            <div className="fixed top-0 left-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"></div>
                <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-2xl animate-float"></div>
            </div>

            <nav className="sticky top-0 z-50 w-full bg-black bg-opacity-20 backdrop-blur-lg text-white font-semibold py-4 px-8 flex justify-between items-center shadow-lg">
                <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl font-bold hover:text-blue-400 cursor-pointer"
                >
                    Portfolio
                </motion.h1>
                <ul className="hidden md:flex gap-6 text-xl">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={index}
                            onClick={() => scrollToSection(item)}
                            className={`hover:text-blue-400 cursor-pointer transition-colors duration-300 relative group ${
                                activeSection === item ? 'text-blue-400' : ''
                            }`}
                            whileHover={{ scale: 1.1 }}
                        >
                            {item}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                                activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}></span>
                        </motion.li>
                    ))}
                </ul>
                <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-lg py-4 px-8 flex flex-col gap-4 z-50">
                        {navItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    scrollToSection(item);
                                    setMobileMenuOpen(false);
                                }}
                                className={`text-xl cursor-pointer ${activeSection === item ? 'text-blue-400' : 'text-white'}`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </nav>

            <div className="relative z-10">
                {/* Hero Section */}
                <div ref={homeRef} className="min-h-screen flex items-center justify-center px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl"
                    >
                        <motion.div variants={sectionVariants} className="text-white w-full md:w-1/2 space-y-6">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-center md:text-left tracking-tight">
                                <span className="text-blue-400">Mohd</span> Adeeb
                            </h1>
                            <motion.h2
                                className="text-xl md:text-2xl text-center md:text-left"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                <span className="text-blue-400 font-bold">MERN Stack</span> Developer
                            </motion.h2>
                            <p className="text-center md:text-left text-lg text-gray-300">
                                🚀 I build scalable, performant web apps with React, Node.js, and MongoDB. 
                                Let's craft some innovative solutions together.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => scrollToSection("Projects")}
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition-all duration-300"
                                >
                                    View Projects
                                </motion.button>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => scrollToSection("Contact")}
                                    className="border border-white text-white hover:text-blue-400 hover:border-blue-400 py-2 px-6 rounded-full transition-all duration-300"
                                >
                                    Contact Me
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="w-48 h-48 md:w-64 md:h-64 relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow blur-xl"></div>
                            <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white">
                                <img
                                    className="h-full w-full object-cover"
                                    src="Assets/profile-pic.jpg"
                                    alt="Mohd Adeeb"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div ref={expertiseRef} variants={sectionVariants} initial="hidden" whileInView="visible">
                    <Skills/>
                </motion.div>
                <motion.div ref={projectsRef} variants={sectionVariants} initial="hidden" whileInView="visible">
                    <Projects/>
                </motion.div>
                <motion.div ref={servicesRef} variants={sectionVariants} initial="hidden" whileInView="visible">
                    <Services/>
                </motion.div>
                <motion.div ref={contactRef} variants={sectionVariants} initial="hidden" whileInView="visible">
                    <Contact/>
                </motion.div>
                <Footer/>
            </div>
        </div>
    );
}
