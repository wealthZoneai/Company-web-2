import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaRocket, FaLightbulb } from 'react-icons/fa';

const OTRSProject: React.FC = () => {
    const navigate = useNavigate();

    const techStack = [
        { name: "React Native", color: "bg-blue-100 text-blue-700" },
        { name: "Python", color: "bg-blue-100 text-blue-700" },
        { name: "My sql", color: "bg-blue-100 text-blue-700" },
        { name: "AWS", color: "bg-blue-100 text-blue-700" }
    ];

    const keyFeatures = [
        "Real-time exam notifications & updates",
        "Multi-category exam listings (UPSC, SSC, Railways, Banking, Groups, etc.)",
        "Mock tests & previous year question papers",
        "AI-based personalized study recommendations",
        "Role-based Access & Multi-level Approvals"
    ];

    const challenges = [
        "Managed and updated data for 500+ government exams.",
        "Improved app stability to handle high peak-time traffic.",
        "Enhanced user learning efficiency through structured mock test flows.",
        "Boosted student trust with accurate and timely exam alerts."
    ];

    const results = [
        { label: "40% increase in daily active learners", value: "40%" },
        { label: "4.7★ rating across Play Store & App Store", value: "4.7★" },
        { label: "150k+ downloads in the first 4 months", value: "150k+" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                    alt="OTRS Application"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 md:p-16">
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-8 left-8 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                    >
                        <FaArrowLeft size={20} />
                    </button>
                    <div className="max-w-4xl">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">OTRAS – One Time Registration Application System</h1>
                        <p className="text-lg md:text-xl text-white/90 italic">A unified applicant registration platform for government exams and recruitment.</p>
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
                        OTRAS is a centralized registration and application management system developed for government recruitment boards and examination authorities. It allows candidates to register once and reuse their verified profile for multiple applications, eliminating repetitive data entry. The system supports dynamic multi-step forms, document uploads, and automated verification workflows. With role-based dashboards, secure authentication, and real-time status tracking, OTRAS streamlines end-to-end applicant management and ensures transparency, scalability, and efficiency across large-scale recruitment processes.
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
                        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" alt="Gallery 1" className="w-full h-64 object-cover rounded-2xl" />
                        <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop" alt="Gallery 2" className="w-full h-64 object-cover rounded-2xl" />
                        <img src="https://images.unsplash.com/photo-1454165833467-13594d99e021?q=80&w=2070&auto=format&fit=crop" alt="Gallery 3" className="w-full h-64 object-cover rounded-2xl" />
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

export default OTRSProject;
