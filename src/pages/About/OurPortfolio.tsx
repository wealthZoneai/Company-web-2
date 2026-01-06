import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Bonjour Food Delivery App (Paris & London)",
        description: "A look and modern food delivery platform inspired by the charm of Paris",
        image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=2071&auto=format&fit=crop" // Delivery/Scooter image
    },
    {
        id: 2,
        title: "HRMS Portal & Services Provider",
        description: "Comprehensive HR management System for Modern organization",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" // Dashboard/Analytics
    },
    {
        id: 3,
        title: "OTRAS - One Time Registration Application",
        description: "A unified applicant registration platform for government exam and recruitment",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" // Laptop/Code
    },
    {
        id: 4,
        title: "WZG AI - Stem & Robotics Education",
        description: "Turing student into creators hands onStem, Robotics and AI aligned with NEP 2020.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" // Robotics/Kids
    },
    {
        id: 5,
        title: "Digital Marketing & Growth Services",
        description: "End-to-end digital marketing solution tailored for high-growth sectors",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop" // Marketing/SEO
    },
    {
        id: 6,
        title: "Cyber- Security Operations",
        description: "Advanced SOC platform for real-time threat detection and incident reports",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" // Cyber security
    }
];

const OurPortfolio: React.FC = () => {
    return (
        <section className="bg-white px-6">
            <div className=" ">

                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wide">
                        OUR PORTFOLIO
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Innovating With <span className="text-blue-600">Purpose</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Explore our diverse ranges of projects where we combine strategy, creativity and technology to deliver world-class digital experience
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col">
                            {/* Image Container */}
                            <div className="relative h-54 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className=" flex flex-col flex-grow items-center text-center ">
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <button className="bg-[#0B52A0] text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 hover:bg-blue-800 transition-colors w-full justify-center md:w-auto">
                                    View Project <FaArrowRight className="text-sm" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurPortfolio;
