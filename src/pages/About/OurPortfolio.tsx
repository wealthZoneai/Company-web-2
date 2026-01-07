import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
        image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=2071&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "HRMS Portal & Services Provider",
        description: "Comprehensive HR management System for Modern organization",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "OTRAS - One Time Registration Application",
        description: "A unified applicant registration platform for government exam and recruitment",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "WZG AI - Stem & Robotics Education",
        description: "Turing student into creators hands onStem, Robotics and AI aligned with NEP 2020.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Digital Marketing & Growth Services",
        description: "End-to-end digital marketing solution tailored for high-growth sectors",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Cyber- Security Operations",
        description: "Advanced SOC platform for real-time threat detection and incident reports",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
    }
];

const OurPortfolio: React.FC = () => {
    const navigate = useNavigate();

    const handleViewProject = (projectId: number) => {
        const routes: { [key: number]: string } = {
            1: '/projects/bonjour',
            2: '/projects/hrms',
            3: '/projects/otrs',
            4: '/projects/wzg',
            5: '/projects/marketing',
            6: '/projects/cybersecurity'
        };

        if (routes[projectId]) {
            navigate(routes[projectId]);
            window.scrollTo(0, 0);
        }
    };

    return (
        <section className="bg-white py-8 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center space-y-6 mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Innovating With <span className="text-blue-600">Purpose</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore our diverse range of projects where we combine strategy, creativity, and technology to deliver world-class digital experiences.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow p-8">
                                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-base leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-gray-50">
                                    <button
                                        onClick={() => handleViewProject(project.id)}
                                        className="text-[#0B52A0] font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 group-hover:text-blue-700"
                                    >
                                        View Project <FaArrowRight className="text-sm" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPortfolio;
