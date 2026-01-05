import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TabContent {
    id: string;
    label: string;
    videoId: string;
    description: string;
    secondaryText: string;
}

const tabData: TabContent[] = [
    {
        id: 'impact',
        label: 'Impact',
        videoId: 'KJAeg3MWMHg', // Robotics/Innovation
        description: 'At Wealth Zone Group AI, impact is at the core of every solution we build. We aim to transform businesses by combining advance advanced technologies with strategic thinking. Our work goes beyond delivering software — we deliver results.',
        secondaryText: 'We help organizations automate routine tasks, improve decision-making using AI insights, and enhance customer experiences through smart digital platforms. Over the years, our solutions have helped companies reduce operational costs, increase productivity, and scale their business operations globally.'
    },
    {
        id: 'development',
        label: 'Development',
        videoId: 'l4TfH1A_o78', // Business/Consulting context
        description: 'Our development process is rooted in innovation and precision. We leverage the latest AI frameworks and cloud-native architectures to build scalable, high-performance applications that meet the demands of tomorrow.',
        secondaryText: 'From initial prototyping to full-scale deployment, our engineering team ensures that every line of code contributes to a robust and secure ecosystem. We prioritize agile methodologies and continuous integration to maintain the highest standards of quality.'
    },
    {
        id: 'support',
        label: 'Support',
        videoId: 'm9-mU4bS2Xk', // Global Team/Support
        description: 'Success doesn\'t end at deployment. We provide comprehensive, round-the-clock support to ensure your systems are always running at peak efficiency. Our team is dedicated to your long-term growth and stability.',
        secondaryText: 'We offer proactive monitoring, regular updates, and expert consultations to help you navigate the evolving technology landscape. Our goal is to be a consistent partner in your journey towards digital excellence.'
    },
    {
        id: 'progress',
        label: 'Progress',
        videoId: 'y_z86hA22hE', // Progress/City/Future
        description: 'We believe in continuous growth—for our clients, our team, and every project we take on. Growth, to us, is not just about scale, but about learning, improvement, and long-term impact.',
        secondaryText: 'By blending innovative strategies with modern technologies, we empower businesses to break through their limitations and reach new heights. Progress is a journey of constant evolution, and we are here to lead the way.'
    }
];

export default function WhyWZG() {
    const [activeTab, setActiveTab] = useState(tabData[0]);

    return (
        <section className="relative  bg-white overflow-hidden py-6">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-black text-blue-800 mb-8">
                        Why WZG-AI
                    </h2>

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap gap-6 sm:gap-10 md:gap-20 lg:gap-40 mb-12 border-b border-gray-100
">
                        {tabData.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                className={`relative pb-4 text-lg md:text-xl font-bold transition-colors ${activeTab.id === tab.id ? 'text-blue-700' : 'text-gray-900 hover:text-blue-600'
                                    }`}
                            >
                                {tab.label}
                                {activeTab.id === tab.id && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute bottom-0 left-0 right-0 h-1 bg-blue-700 rounded-full"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                    >
                        {/* Video Column */}
                        <div className="lg:col-span-5">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square bg-black">
                                <iframe
                                    className="absolute inset-0 w-full h-full scale-[1.5] pointer-events-none opacity-80"
                                    src={`https://www.youtube.com/embed/${activeTab.videoId}?autoplay=1&mute=1&loop=1&playlist=${activeTab.videoId}&controls=0&modestbranding=1&rel=0&playsinline=1`}
                                    title={activeTab.label}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen"
                                />
                                <div className="absolute inset-0 bg-blue-700/20 mix-blend-multiply" />
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="lg:col-span-7 space-y-8">
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-semibold">
                                {activeTab.description}
                            </p>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                                {activeTab.secondaryText}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
