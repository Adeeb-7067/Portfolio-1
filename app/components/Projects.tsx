// import { div, i, span } from "framer-motion/client";

import { useState } from "react";

// interface projects{
//     id:number,
//     title:string,
//     description:string,
//     techStack:string[],
// }
// export default function Project(){
//     const projects = [
//         {
//           id: 1,
//           title: 'E-Commerce Platform',
//           description: 'A fully functional e-commerce website with user authentication and payment integration.',
//           techStack: ['React', 'Node.js', 'MongoDB'],
//         },
//         {
//           id: 2,
//           title: 'Masjid-location App',
//           description: 'Mobile app for fetching masjid with real-time tracking and payment features.',
//           techStack: ['React Native', 'Expo', 'Firebase', 'Google Maps API'],
//         },
//         {
//             id: 3,
//             title: 'Masjid-location App',
//             description: 'Mobile app for fetching masjid with real-time tracking and payment features.',
//             techStack: ['React Native', 'Expo', 'Firebase', 'Google Maps API'],
//           },
//           {
//             id: 4,
//             title: 'E-Commerce Platform',
//             description: 'A fully functional e-commerce website with user authentication and payment integration.',
//             techStack: ['React', 'Node.js', 'MongoDB'],
//           },
//           {
//             id: 5,
//             title: 'Masjid-location App',
//             description: 'Mobile app for fetching masjid with real-time tracking and payment features.',
//             techStack: ['React Native', 'Expo', 'Firebase', 'Google Maps API'],
//           },
//           {
//             id: 6,
//             title: 'E-Commerce Platform',
//             description: 'A fully functional e-commerce website with user authentication and payment integration.',
//             techStack: ['React', 'Node.js', 'MongoDB'],
//           },
//       ];
//     return(
//         <div className="grid grid-cols-3 flex justify-center gap-12 mt-16 ml-16">
//                     {projects.map((project:projects)=>(
//                 <div
//                 className=" border-4 rounded-4xl text-center h-48 "
//                 key={project.id}>
//                     <h1 className="text-4xl mt-6">{project.title}</h1>
//                     <p className="text-center"> {project.description}</p>
//                     <div className="flex flex-wrap gap-3 text-center justify-center">
//                    {project.techStack.map((tech,index)=>(
//                     <span key={index} className="px-3 py-1 border rounded-full  text-sm">{tech}</span>  
//                    ))}
//                     </div>
//                 </div>
//             ))}
            
//         </div>
//     )
// }


// Updated Project interface with more details
interface Project {
    name: string;
    description: string;
    tech: string[];
    image: string;
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

// Enhanced Project List with more details
const projects: Project[] = [
    { 
        name: "E-Commerce Platform", 
        description: "A full-featured online shopping platform with product catalog, cart functionality, user authentication, and payment processing.", 
        tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
        image: "Assets/ecommerce-project.jpg",
        demoUrl: "https://ecommerce-demo.com",
        githubUrl: "https://github.com/username/ecommerce",
        featured: true
    },
    { 
        name: "Task Management App", 
        description: "A collaborative task management application with real-time updates, task assignments, and progress tracking.", 
        tech: ["React", "Firebase", "Tailwind CSS"],
        image: "Assets/taskapp-project.jpg",
        demoUrl: "https://taskapp-demo.com",
        githubUrl: "https://github.com/username/taskapp",
        featured: true
    },
    { 
        name: "Portfolio Website", 
        description: "A responsive portfolio website showcasing projects and skills with modern UI/UX design principles.", 
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        image: "Assets/portfolio-project.jpg",
        demoUrl: "https://portfolio-demo.com",
        githubUrl: "https://github.com/username/portfolio",
        featured: false
    },
    { 
        name: "Weather Dashboard", 
        description: "A real-time weather application with location-based forecasts, interactive maps, and historical data.", 
        tech: ["React", "OpenWeather API", "Chart.js"],
        image: "Assets/weather-project.jpg",
        demoUrl: "https://weather-demo.com",
        githubUrl: "https://github.com/username/weather",
        featured: false
    },
];

// Project Section Component
const ProjectSection = () => {
    const [activeFilter, setActiveFilter] = useState<string>("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Filters
    const filters = ["All", "Featured", "React", "Node.js", "Next.js"];
    
    // Filtered projects
    const filteredProjects = projects.filter(project => {
        if (activeFilter === "All") return true;
        if (activeFilter === "Featured") return project.featured;
        return project.tech.includes(activeFilter);
    });
    
    // Function to open project details modal
    const openProjectModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };
    
    // Function to close project details modal
    const closeProjectModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center relative py-20">
            <div className="w-full max-w-6xl mx-auto p-8">
                <h2 className="text-5xl text-center text-white font-bold mb-8 text-shadow-glow">
                    Recent Projects
                </h2>
                <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                    Explore my latest work where I've applied my technical expertise to solve real-world problems
                    and create engaging digital experiences.
                </p>
                
                {/* Project Filters */}
                <div className="flex justify-center mb-12 overflow-x-auto pb-2">
                    <div className="flex bg-black bg-opacity-10 backdrop-blur-md rounded-full p-1">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                                    activeFilter === filter
                                        ? "bg-blue-500 text-white"
                                        : "text-white hover:bg-white hover:bg-opacity-10"
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={index} 
                            className="relative bg-white bg-opacity-10 backdrop-blur-md rounded-lg overflow-hidden group h-80 transition-all duration-500 hover:transform hover:scale-105 border border-white border-opacity-20"
                            style={{
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            {/* Overlay with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                            
                            {/* Tech tags */}
                            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                {project.featured && (
                                    <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">
                                        Featured
                                    </span>
                                )}
                                {project.tech.slice(0, 3).map((tech, i) => (
                                    <span 
                                        key={i} 
                                        className="px-3 py-1 bg-black bg-opacity-50 text-white text-xs rounded-full backdrop-blur-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.tech.length > 3 && (
                                    <span className="px-3 py-1 bg-black bg-opacity-50 text-white text-xs rounded-full backdrop-blur-sm">
                                        +{project.tech.length - 3}
                                    </span>
                                )}
                            </div>
                            
                            {/* Project content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex gap-3">
                                    <button 
                                        onClick={() => openProjectModal(project)}
                                        className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-all duration-300"
                                    >
                                        View Details
                                    </button>
                                    {project.demoUrl && (
                                        <a 
                                            href={project.demoUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="px-5 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full text-sm font-medium transition-all duration-300"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* View All Projects Button */}
                <div className="flex justify-center mt-12">
                    <button className="px-8 py-3 bg-transparent text-white border border-white hover:border-blue-400 hover:text-blue-400 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
                        View All Projects
                    </button>
                </div>
                
                {/* Project Details Modal */}
                {isModalOpen && selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
                        <div 
                            className={`bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 transform transition-all duration-300 ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                        >
                            {/* Modal header */}
                            <div className="relative h-64 rounded-t-xl overflow-hidden">
                                <img 
                                    src={selectedProject.image} 
                                    alt={selectedProject.name} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                <button 
                                    onClick={closeProjectModal}
                                    className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                                    {selectedProject.name}
                                </h3>
                            </div>
                            
                            {/* Modal content */}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tech.map((i,tech) => (
                                        <span 
                                            key={i} 
                                            className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <h4 className="text-xl font-semibold text-white mb-3">Project Overview</h4>
                                <p className="text-gray-300 mb-6">
                                    {selectedProject.description}
                                </p>
                                
                                <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                                <ul className="list-disc pl-5 text-gray-300 mb-6 space-y-2">
                                    <li>User authentication and authorization</li>
                                    <li>Responsive design for all device sizes</li>
                                    <li>API integration with data visualization</li>
                                    <li>Performance optimization and accessibility</li>
                                </ul>
                                
                                <div className="flex flex-wrap gap-4 mt-8">
                                    {selectedProject.demoUrl && (
                                        <a 
                                            href={selectedProject.demoUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                    {selectedProject.githubUrl && (
                                        <a 
                                            href={selectedProject.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Add this to your exports
export default function Home() {
    // ... other code ...
    
    // Replace the existing project section with the new component
    return (
        <div className="relative w-full">
            {/* ... existing code ... */}
            
            {/* Main content sections */}
            <div className="relative z-10">
                {/* Hero Section */}
                {/* ... existing code ... */}
                
                {/* Skills Section */}
                {/* ... existing code ... */}
                
                {/* New Project Section */}
                <ProjectSection />
                
                {/* ... other sections ... */}
            </div>
            
            {/* ... existing styles ... */}
        </div>
    );
}