'use client'

import { useState } from 'react';

// Service interface
interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
}

const Services = () => {
    // List of services with icons using SVG
    const servicesList: Service[] = [
        {
            title: "Frontend Development",
            description: "Creating responsive and interactive user interfaces with modern frameworks and libraries.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            features: [
                "Single Page Applications (SPAs)",
                "Responsive Web Design",
                "Interactive UI Components",
                "Cross-Browser Compatibility"
            ]
        },
        {
            title: "Backend Development",
            description: "Building robust server-side applications, RESTful APIs, and database integrations.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            features: [
                "RESTful API Development",
                "Database Design & Integration",
                "Authentication Systems",
                "Server Management"
            ]
        },
        {
            title: "Full Stack Development",
            description: "End-to-end application development combining frontend and backend technologies.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            features: [
                "MERN Stack Applications",
                "E-commerce Solutions",
                "Content Management Systems",
                "Real-time Applications"
            ]
        },
        {
            title: "UI/UX Consultation",
            description: "Designing user-centric interfaces and experiences that are both aesthetically pleasing and functional.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            features: [
                "User Interface Design",
                "User Experience Optimization",
                "Wireframing & Prototyping",
                "Design System Creation"
            ]
        }
    ];

    // State for active service (for mobile view)
    const [activeService, setActiveService] = useState<number>(0);

    return (
        <div className="min-h-screen flex items-center justify-center relative py-20">
            <div className="w-full max-w-6xl mx-auto p-5 relative z-10">
                {/* Section Title */}
                <h1 className="text-5xl font-bold text-center text-white mb-16 text-shadow-glow">
                    Services I Offer
                </h1>

                {/* Services Grid - Desktop View */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesList.map((service, index) => (
                        <div
                            key={index}
                            className="bg-black bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:translate-y-[-5px]"
                        >
                            {/* Icon */}
                            <div className="text-blue-400 mb-4 flex justify-center">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white text-center mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white text-opacity-80 text-center mb-5">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="text-white flex items-center">
                                        <span className="text-blue-400 mr-2">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Services Slider - Mobile View */}
                <div className="md:hidden">
                    {/* Navigation Dots */}
                    <div className="flex justify-center mb-6">
                        {servicesList.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveService(index)}
                                className={`w-3 h-3 rounded-full mx-1 ${
                                    activeService === index ? "bg-blue-400" : "bg-white bg-opacity-30"
                                }`}
                            />
                        ))}
                    </div>

                    {/* Active Service Card */}
                    <div className="bg-black bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl p-6">
                        {/* Icon */}
                        <div className="text-blue-400 mb-4 flex justify-center">
                            {servicesList[activeService].icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white text-center mb-3">
                            {servicesList[activeService].title}
                        </h3>

                        {/* Description */}
                        <p className="text-white text-opacity-80 text-center mb-5">
                            {servicesList[activeService].description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2">
                            {servicesList[activeService].features.map((feature, i) => (
                                <li key={i} className="text-white flex items-center">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => setActiveService((prev) => (prev === 0 ? servicesList.length - 1 : prev - 1))}
                            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setActiveService((prev) => (prev === servicesList.length - 1 ? 0 : prev + 1))}
                            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <p className="text-white text-xl mb-6">
                        Looking for custom solutions? Let's discuss your project requirements.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;