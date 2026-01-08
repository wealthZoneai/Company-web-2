import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaRocket, FaLightbulb } from 'react-icons/fa';

const CyberSecurityProject: React.FC = () => {
    const navigate = useNavigate();

    const techStack = [
        { name: "React Native", color: "bg-blue-100 text-blue-700" },
        { name: "Python", color: "bg-blue-100 text-blue-700" },
        { name: "My sql", color: "bg-blue-100 text-blue-700" },
        { name: "AWS", color: "bg-blue-100 text-blue-700" }
    ];

    const keyFeatures = [
        "Real-time threat detection & monitoring",
        "Multi-layer authentication & secure access controls",
        "Centralized security management dashboard",
        "AI-powered threat prediction & risk scoring",
        "Cross-platform compliance and security reporting"
    ];

    const challenges = [
        "Integrated security tools across 150+ enterprise systems",
        "Enhanced overall platform stability and reduced vulnerabilities",
        "Improved threat response time across global locations",
        "Increased user trust with stronger data protection measures"
    ];

    const results = [
        { label: "50% reduction in security vulnerabilities after deployment", value: "50%" },
        { label: "4.8★ rating from enterprise users", value: "4.8★" },
        { label: "35% faster incident detection & response time", value: "35%" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
                    alt="Cyber Security Operations"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8 md:p-16">
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-8 left-8 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                    >
                        <FaArrowLeft size={20} />
                    </button>
                    <div className="max-w-4xl">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Cyber-Security Operations</h1>
                        <p className="text-lg md:text-xl text-white/90 italic">Advanced SOC platform for real-time threat detection and incident response.</p>
                    </div>
                </div>
            </div>

            <div className=" px-6 mt-2 space-y-16">
                {/* Project Overview */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                        <h2 className="text-2xl font-bold text-gray-900">Project Over View</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Our Cyber-Security Operations platform provides a centralized Security Operations Center (SOC) designed to protect enterprise infrastructure from evolving digital threats. We implement targeted security solutions that increase visibility, automate threat hunting, and provide real-time incident response capabilities. By leveraging AI-driven analytics and multi-layered defense strategies, we ensure that every organization can maintain a robust security posture while scaling their digital operations securely.
                    </p>
                </section>

                {/* Technologies Used */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                        <h2 className="text-2xl font-bold text-gray-900">Technologies Used</h2>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {techStack.map((tech, index) => (
                            <span key={index} className={`${tech.color} px-6 py-2 rounded-full font-semibold`}>
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Features & Challenges Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Key Features */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-yellow-50 rounded-xl">
                                <FaLightbulb className="text-yellow-600 text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
                        </div>
                        <ul className="space-y-4">
                            {keyFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Challenges Overcome */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-blue-50 rounded-xl">
                                <FaRocket className="text-blue-600 text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Challenges Overcome</h3>
                        </div>
                        <ul className="space-y-4">
                            {challenges.map((challenge, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{challenge}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Project Gallery */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                        <h2 className="text-2xl font-bold text-gray-900">Project Gallery</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Security Gallery 1" className="w-full h-64 object-cover rounded-2xl" />
                        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop" alt="Security Gallery 2" className="w-full h-64 object-cover rounded-2xl" />
                        <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop" alt="Security Gallery 3" className="w-full h-64 object-cover rounded-2xl" />
                    </div>
                </section>

                {/* Result & Impact */}
                <section className="bg-[#3B71CA] rounded-3xl p-8 md:p-12 text-white">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="p-2 bg-white/20 rounded-lg">
                            <FaRocket className="text-white text-xl" />
                        </div>
                        <h2 className="text-2xl font-bold">Result & Impact</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {results.map((result, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center flex flex-col justify-center min-h-[160px]">
                                <p className="text-sm font-medium opacity-90">{result.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="text-center space-y-8 pt-8">
                    <h2 className="text-3xl font-bold text-gray-900">Interested in Similar Project?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Lets discuss how can we help bring your vision to life with our expertise and innovative solutions
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="bg-[#0B52A0] text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-800 transition-colors">
                            Get in touch
                        </button>
                        <button
                            onClick={() => navigate('/about')}
                            className="border-2 border-blue-600 text-blue-600 font-bold py-4 px-10 rounded-xl hover:bg-blue-50 transition-colors"
                        >
                            View all projects
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CyberSecurityProject;
