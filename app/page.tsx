'use client'

import { useEffect, useRef, useState } from "react";
import Projects from '@/app/components/Projects'
import Services from '@/app/components/services'
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Skills from "./components/Skills";

// Project interface
interface Project {
    name: string;
    tech: string;
}

// Project List
const projects: Project[] = [
    { name: "E-Commerce Platform", tech: "MERN Stack" },
    { name: "Task Management App", tech: "React, Firebase" },
    { name: "Portfolio Website", tech: "Next.js, Tailwind" },
];

export default function Home() {
    const navItems = ["Home", "Expertise", "Projects", "Services", "Contact"];
    const [activeSection, setActiveSection] = useState("Home");
    
    

    // References for sections to scroll to
    const homeRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const expertiseRef = useRef<HTMLDivElement>(null); 
    const servicesRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    // Function to handle smooth scrolling to sections
    const scrollToSection = (section: string) => {
        setActiveSection(section);
        let ref;
        
        switch(section) {
            case "Home":
                ref = homeRef;
                break;
            case "Projects":
                ref = projectsRef;
                break;
            case "Expertise":
                ref = expertiseRef;
                break;
            case "Services":
                ref = servicesRef;
                break;
            case "Contact":
                ref = contactRef;
                break;
            default:
                ref = homeRef;
        }
        
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Mobile menu state
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="relative w-full">
            {/* Gradient Background instead of video */}
            <div className="fixed top-0 left-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-black"></div>
            </div> 

            {/* Navbar - floating on top */}
            <nav className="sticky top-0 z-50 w-full bg-black bg-opacity-20 backdrop-blur-sm text-white font-semibold py-4 px-8 flex justify-between items-center">
                <ul className="hidden md:flex gap-6 text-xl">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => scrollToSection(item)}
                            className={`hover:text-blue-400 cursor-pointer transition-colors duration-300 relative group ${
                                activeSection === item ? 'text-blue-400' : ''
                            }`}
                        >
                            {item}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                                activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}></span>
                        </li>
                    ))}
                </ul>
                
                {/* Mobile menu button */}
                <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
                
                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-lg py-4 px-8 flex flex-col gap-4 z-50">
                        {navItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    scrollToSection(item);
                                    setMobileMenuOpen(false);
                                }}
                                className={`text-xl cursor-pointer ${
                                    activeSection === item ? 'text-blue-400' : 'text-white'
                                }`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </nav>

            {/* Main content sections - all with a relative position to stack in front of the background */}
            <div className="relative z-10">
                {/* Hero Section */}
                <div ref={homeRef} className="min-h-screen flex items-center justify-center px-8">
                    {/* Profile section */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl animate-fadeIn">
                        {/* Text content */}
                        <div className="text-white w-full md:w-1/2 space-y-6 animate-slideInLeft">
                            <h1 className="text-5xl md:text-6xl font-mono font-normal text-center md:text-left">
                                <span className="text-blue-400">Mohd</span> Adeeb
                            </h1>
                            <h2 className="text-xl md:text-2xl text-center md:text-left">
                                <span className="text-blue-400 font-bold">MERN Stack</span> Developer
                            </h2>
                            <p className="text-center md:text-left text-lg">
                                🚀 I'm passionate about building scalable and user-friendly web applications. 
                                Skilled in React.js, Node.js, Express.js, and MongoDB, I create seamless 
                                front-end experiences and robust back-end solutions. Always eager to learn 
                                and innovate, I strive to craft impactful digital experiences.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button 
                                    onClick={() => scrollToSection("Projects")}
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                                >
                                    View Projects
                                </button>
                                <button 
                                    onClick={() => scrollToSection("Contact")}
                                    className="bg-transparent text-white hover:text-blue-400 border border-white hover:border-blue-400 py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                                >
                                    Contact Me
                                </button>
                            </div>
                        </div>

                        {/* Profile image */}
                        <div className="w-48 h-48 md:w-64 md:h-64 relative animate-slideInRight">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow blur-sm"></div>
                            <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white">
                                <img
                                    className="h-full w-full object-cover"
                                    src="Assets/profile-pic.jpg"
                                    alt="Mohd Adeeb"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Improved Skills Section with tabs for categories */}
               <div ref={expertiseRef}>
               <Skills/>
               </div>
                {/* Project preview section */}
                <div ref={projectsRef}>
                    <Projects/>   
                </div>
                
                {/* Services section */}
                <div ref={servicesRef}>
                    <Services/>
                </div>
                
                {/* Contact section */}
                <div ref={contactRef}>
                    <Contact/>
                </div>
                
                {/* Footer section */}
                <Footer/>
            </div>

            {/* Custom CSS for animations and effects */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideInLeft {
                    from { transform: translateX(-50px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideInRight {
                    from { transform: translateX(50px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes spin-slow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out;
                }
                .animate-slideInLeft {
                    animation: slideInLeft 1s ease-out;
                }
                .animate-slideInRight {
                    animation: slideInRight 1s ease-out;
                }
                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
                .text-shadow-glow {
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
                }
                .shadow-glow {
                    box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
                }
                .filter.drop-shadow-glow {
                    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
                }
            `}</style>
        </div>
    );
}