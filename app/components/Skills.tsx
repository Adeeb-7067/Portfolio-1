'use client'

import { useEffect, useRef, useState } from "react";
import '@/app/globals.css'
import SkillProgressBar from "./SkillProgressBar";


// Skill interface
interface Skill {
    name: string;
    iconUrl: string;
    category: string;
}

// Skill List - now organized by category
const skills: Skill[] = [
    // Frontend
    { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
    { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Frontend" },
    { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Frontend" },
    { name: "Next.js", iconUrl: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg", category: "Frontend" },
    { name: "HTML", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
    { name: "CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend" },
    
    // Backend
    { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "Express.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "Backend" },
    
    // Styling
    { name: "Tailwind CSS", iconUrl: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", category: "Styling" },
    { name: "Bootstrap", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", category: "Styling" },
    { name: "PrimeReact", iconUrl: "https://camo.githubusercontent.com/0371e755907bb28c084d89d21ccf68f7dbd95e1658dc37468b0bac80fe8c50f4/68747470733a2f2f7777772e7072696d6566616365732e6f72672f77702d636f6e74656e742f75706c6f6164732f323031372f30392f7072696d6572656163742d7472616e73706172656e742d3235302e706e67", category: "Styling" },
    { name: "PrimeFlex", iconUrl: "https://avatars.githubusercontent.com/u/42004103?s=200&v=4", category: "Styling" },
    
    // Tools
    { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" }
];


const Skills: React.FC = () => {
// Active category state for skills
const [activeCategory, setActiveCategory] = useState<string>("Frontend");
    
// Get unique categories
const categories = Array.from(new Set(skills.map(skill => skill.category)));

// Filter skills by active category
const filteredSkills = skills.filter(skill => skill.category === activeCategory);

    return (
        <div className="min-h-screen flex items-center justify-center relative">
        <div className="w-full max-w-6xl mx-auto p-5 relative z-10">
            <h1 className="text-5xl font-bold text-center text-white mb-16 text-shadow-glow">
                Technical Expertise
            </h1>

            {/* Category Tabs */}
            <div className="flex justify-center mb-12 overflow-x-auto pb-2">
                <div className="flex bg-black bg-opacity-10 backdrop-blur-md rounded-full p-1">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 ${
                                activeCategory === category
                                    ? "bg-blue-500 text-white"
                                    : "text-white hover:bg-white hover:text-xl hover:text-black"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {filteredSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center  bg-opacity-10 backdrop-blur-md shadow-lg rounded-xl p-5 hover:bg-opacity-15 transition-all duration-300 transform hover:translate-y-[-5px] border border-white border-opacity-20"
                    >
                        <img
                            src={skill.iconUrl}
                            alt={skill.name}
                            className="w-16 h-16 mb-4 filter drop-shadow-glow"
                        />
                        <h3 className="text-lg font-medium text-white">
                            {skill.name}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Progress Bar - Optional visual element */}
           <SkillProgressBar/>
        </div>
    </div>    );
};

export default Skills;
