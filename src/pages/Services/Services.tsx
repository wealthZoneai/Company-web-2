import React from 'react';
import { motion } from 'framer-motion';
import Service from '../../assets/viedos/Service.mp4';
import {
    FaChartLine,
    FaCode,
    FaHeadset,
    FaCloud,
    FaRobot,
    FaBriefcase,
    FaBullhorn,
    FaFileMedicalAlt,
    FaChartBar,
    FaMapMarkedAlt,
    FaBug
} from 'react-icons/fa';

// --- Types ---
interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    iconColorClass: string;
    iconBgClass: string;
}

// --- Data ---
const servicesData: ServiceItem[] = [
    {
        id: 'data-analytics',
        title: 'Data Analytics',
        description: 'Unlock Powerful insights from your data to make smarter, Faster business decisions',
        icon: <FaChartLine />,
        iconColorClass: 'text-blue-600',
        iconBgClass: 'bg-blue-100'
    },
    {
        id: 'software-dev',
        title: 'Software Development',
        description: 'Unlock Powerful insights from your data to make smarter, Faster business decisions',
        icon: <FaCode />,
        iconColorClass: 'text-green-600',
        iconBgClass: 'bg-green-100'
    },
    {
        id: 'it-consulting',
        title: 'IT Consulting',
        description: 'Unlock Powerful insights from your data to make smarter, Faster business decisions',
        icon: <FaHeadset />,
        iconColorClass: 'text-purple-600',
        iconBgClass: 'bg-purple-100'
    },
    {
        id: 'cloud-services',
        title: 'Cloud Services',
        description: 'Unlock Powerful insights from your data to make smarter, Faster business decisions',
        icon: <FaCloud />,
        iconColorClass: 'text-sky-500',
        iconBgClass: 'bg-sky-100'
    },
    {
        id: 'ai-agents',
        title: 'AI Agents',
        description: 'Unlock Powerful insights from your data to make smarter, Faster business decisions',
        icon: <FaRobot />,
        iconColorClass: 'text-red-500',
        iconBgClass: 'bg-red-100'
    },
    {
        id: 'bpo-services',
        title: 'BPO Services',
        description: 'Unlock Powerful insights from your data to make smarter, Faster business decisions',
        icon: <FaBriefcase />,
        iconColorClass: 'text-yellow-600',
        iconBgClass: 'bg-yellow-100'
    },
    {
        id: 'marketing',
        title: 'Marketing Services',
        description: 'Unlock Powerful insights from your data to make smarter, Faster business decisions',
        icon: <FaBullhorn />,
        iconColorClass: 'text-pink-500',
        iconBgClass: 'bg-pink-100'
    },
    {
        id: 'medical-coding',
        title: 'Medical Coding',
        description: 'Unlock Powerful insights from your data to make smarter, Faster business decisions',
        icon: <FaFileMedicalAlt />,
        iconColorClass: 'text-cyan-600',
        iconBgClass: 'bg-cyan-100'
    },
    {
        id: 'content-moderation',
        title: 'Content Moderation',
        description: 'Unlock Powerful insights from your data to make smarter, Faster business decisions',
        icon: <FaChartBar />,
        iconColorClass: 'text-orange-500',
        iconBgClass: 'bg-orange-100'
    },
    {
        id: 'customer-support',
        title: 'Customer Support',
        description: 'Unlock Powerful insights from your data to make smarter, Faster business decisions',
        icon: <FaHeadset />,
        iconColorClass: 'text-teal-600',
        iconBgClass: 'bg-teal-100'
    },
    {
        id: 'google-mapping',
        title: 'Google Mapping',
        description: 'Unlock Powerful insights from your data to make smarter, Faster business decisions',
        icon: <FaMapMarkedAlt />,
        iconColorClass: 'text-lime-600',
        iconBgClass: 'bg-lime-100'
    },
    {
        id: 'software-testing',
        title: 'Software Testing',
        description: 'Unlock Powerful insights from your data to make smarter, Faster business decisions',
        icon: <FaBug />,
        iconColorClass: 'text-rose-500',
        iconBgClass: 'bg-rose-100'
    },
];

// --- Components ---

const ServiceHero: React.FC = () => {
    return (
        <section className="relative w-full h-[80vh] min-h-[450px] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    src={Service}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-fill"
                />
                {/* Dark Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10    text-center text-white space-y-8">


                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-5xl font-black leading-tight tracking-tight"
                >
                    Comprehensive Technology <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                        Solutions by WZG-AI
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className=" space-y-6 text-lg md:text-xl text-gray-200 leading-relaxed font-medium"
                >
                    <p>
                        We provide a comprehensive suite of intelligent digital solutions designed to empower your business at every stage of growth.
                    </p>
                    <p>
                        From digital transformation and process optimization to scalable platforms and innovative solutions, we help businesses adapt to change, stay competitive, and unlock new opportunities.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pt-4"
                >
                    <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl hover:shadow-white/20">
                        Explore Now
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

const ServiceCardItem: React.FC<{ item: ServiceItem }> = ({ item }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 md:min-h-[200px] flex flex-col items-start"
        >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 ${item.iconBgClass} ${item.iconColorClass}`}>
                {item.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {item.description}
            </p>
        </motion.div>
    );
};

const ServicesGrid: React.FC = () => {
    return (
        <section className=" px-6 mb-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Explore Our Expertise
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                    From data-driven insights to robust software solutions, we offer a wide range of services to meet your business needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {servicesData.map((item) => (
                    <ServiceCardItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

const CTASection: React.FC = () => {
    return (
        <section className="bg-blue-50 py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                    Ready to power your wealth with Intelligence?
                </h2>
                <p className="text-gray-600 mb-8 font-medium">
                    Connect with our team to discover how WZG-AI can help you achieve your Financial Ambitions
                </p>
                <button className="bg-[#1877F2] text-white px-10 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200">
                    Contact Us
                </button>
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
            <CTASection />
        </main>
    );
}
