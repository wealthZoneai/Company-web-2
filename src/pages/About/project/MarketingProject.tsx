import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaRocket, FaLightbulb } from 'react-icons/fa';

const MarketingProject: React.FC = () => {
    const navigate = useNavigate();

    const techStack = [
        { name: "React Native", color: "bg-blue-100 text-blue-700" },
        { name: "Python", color: "bg-blue-100 text-blue-700" },
        { name: "My sql", color: "bg-blue-100 text-blue-700" },
        { name: "AWS", color: "bg-blue-100 text-blue-700" }
    ];

    const keyFeatures = [
        "SEO & SEM Multi-Platform Optimization",
        "Social Media Management & Engagement",
        "Content Marketing & Strategy Implementation",
        "Email Marketing Automation & Lead Nurturing",
        "Real-time Performance Analytics Dashboard"
    ];

    const challenges = [
        "Achieved 200% ROI for cross-channel marketing campaigns.",
        "Reduced cost-per-acquisition (CPA) by 40% through targeting.",
        "Implemented real-time lead tracking across multiple platforms.",
        "Scaled organic website traffic by 150% within 6 months."
    ];

    const results = [
        { label: "3x average increase in monthly lead generation", value: "3x Leads" },
        { label: "45% reduction in customer acquisition cost", value: "45% CPA" },
        { label: "95% client retention rate for growth services", value: "95% Retention" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
                    alt="Digital Marketing"
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
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Digital Marketing & Growth Services</h1>
                        <p className="text-lg md:text-xl text-white/90 italic">End-to-end digital marketing solutions tailored for high-growth sectors.</p>
                    </div>
                </div>
            </div>

            <div className="px-6 mt-2 space-y-16">
                {/* Project Overview */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                        <h2 className="text-2xl font-bold text-gray-900">Project Over View</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        We provide targeted digital marketing solutions designed to increase visibility, generate leads, and convert audiences into loyal customers. Our team crafts data-driven strategies across multiple platforms – ensuring every campaign delivers measurable business growth. Whether it's hospitals seeking patient engagement, real estate firms selling properties, or jewelry brands building trust and desire, we tailor campaigns to the psychology and purchase journey of each industry.
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
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Marketing Gallery 1" className="w-full h-64 object-cover rounded-2xl" />
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Marketing Gallery 2" className="w-full h-64 object-cover rounded-2xl" />
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" alt="Marketing Gallery 3" className="w-full h-64 object-cover rounded-2xl" />
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

export default MarketingProject;
