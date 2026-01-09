import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Service from '../../assets/viedos/Service.mp4';
import { servicesData, ServiceDetailItem } from './servicesData';
import StaffingSolutions from './StaffingSolutions';

// --- Types ---


// --- Components ---

const ServiceHero: React.FC = () => {
    return (
        <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    src={Service}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                        Comprehensive Technology <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                            Solutions by WZG-AI
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
                        We empower businesses with intelligent digital solutions, from transformation and optimization to scalable innovation.
                    </p>

                    <div className="pt-8">
                        <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl hover:shadow-white/20 active:scale-95 duration-200">
                            Explore Now
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ServiceCardItem: React.FC<{ item: ServiceDetailItem }> = ({ item }) => {
    return (
        <Link to={`/services/${item.id}`} className="block h-full">
            <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 md:min-h-64 flex flex-col items-start h-full cursor-pointer group"
            >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 ${item.iconBgClass} ${item.iconColorClass} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                </h3>

                <p className="text-gray-500 text-base leading-relaxed font-medium">
                    {item.shortDescription}
                </p>

                <div className="mt-auto pt-4 text-blue-600 font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Learn More &rarr;
                </div>
            </motion.div>
        </Link>
    );
};

const ServicesGrid: React.FC = () => {
    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Explore Our Expertise
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        From data-driven insights to robust software solutions, we offer a wide range of services designed to accelerate your growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {servicesData.map((item) => (
                        <ServiceCardItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-blue-50 py-16 px-6 mt-20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
                    Ready to power your wealth with intelligence?
                </h2>
                <p className="text-gray-600 font-medium text-sm">
                    Connect with our team to discuss how WZG-AI can help you achieve your Financial Ambitions
                </p>
                <div className="flex gap-4 justify-center pt-4">
                    <button
                        onClick={() => navigate('/contact')}
                        className="bg-[#1877F2] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors text-sm"
                    >
                        Contact Us
                    </button>
                    <button
                        onClick={() => navigate('/careers')}
                        className="bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors text-sm"
                    >
                        Join Our Team
                    </button>
                </div>
            </div>
        </section>
    );
};

// --- Main Page Component ---
export default function Services() {
    return (
        <main className="bg-white min-h-screen font-sans overflow-x-hidden">
            <ServiceHero />
            <ServicesGrid />
            <StaffingSolutions />

            <CTASection />
        </main>
    );
}
