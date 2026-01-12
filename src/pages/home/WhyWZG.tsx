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
        description: '      At Wealth Zone Group AI, impact is at the core of every solution we build. We aim to transform businesses by combining advanced technologies with strategic thinking. Our work goes beyond delivering software – we deliver results. We help organizations automate routine tasks, improve decision-making using AI insights, and enhance customer experiences through smart digital platforms. Over the years, our solutions have helped companies reduce operational costs, increase productivity, and scale their business operations globally.',
        secondaryText: 'We believe in continuous growth—for our clients, our team, and every project we take on. Growth, to us, is not just about scale, but about learning, improvement, and long-term impact. By blending innovative strategies with modern technologies.'
    },
    {
        id: 'development',
        label: 'Development',
        videoId: 'l4TfH1A_o78', // Business/Consulting context
        description: ' We believe in continuous growth—for our clients, our team, and every project we take on. Growth is the foundation of our approach, driving us to constantly improve, adapt, and deliver greater value. By combining innovative strategies with modern technologies, we transform ideas into meaningful digital experiences that are intuitive, engaging, and results-driven.',
        secondaryText: 'Our forward-thinking mindset allows us to stay ahead of industry trends, emerging technologies, and evolving user expectations. This enables us to design solutions that are scalable, future-ready, and impactful—built not only for today’s needs but also for tomorrow’s opportunities. We work closely with our clients as true partners, taking the time to understand their goals, challenges, and long-term vision.'
    },
    {
        id: 'support',
        label: 'Support',
        videoId: 'm9-mU4bS2Xk', // Global Team/Support
        description: ' Our dedicated support team ensures clear, consistent, and transparent communication throughout the project lifecycle. We keep you informed at every milestone, providing regular updates, insights, and guidance so you can move forward with confidence and clarity.',
        secondaryText: ' We prioritize quick issue resolution and proactive problem-solving, identifying potential challenges early and addressing them before they impact timelines or performance. Our team works diligently to ensure smooth execution, minimal disruptions, and reliable outcomes.'
    },
    {
        id: 'progress',
        label: 'Progress',
        videoId: 'y_z86hA22hE', // Progress/City/Future
        description: ' We are committed to long-term progress, ensuring that every solution we create contributes to sustainable growth for our clients. Our approach goes beyond short-term results, focusing on building strong digital foundations that support ongoing success. By combining creativity, advanced technology, and in-depth research, we empower businesses to move forward with clarity, confidence, and purpose.',
        secondaryText: 'We focus on building future-ready products that not only solve today’s challenges but also anticipate tomorrow’s opportunities. From scalable architectures to flexible design systems, every solution is thoughtfully engineered to grow alongside your business. With a vision centered on continuous improvement, collaboration, and innovation, we help organizations navigate change, unlock new possibilities, and achieve lasting impact in the digital world.'
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
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[300px] md:h-[300px] w-full bg-black">
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
                        <div className="lg:col-span-7 space-y-6">
                            <p className="text-gray-600 text-lg md:text-l leading-relaxed font-semibold">
                                {activeTab.description}
                            </p>
                            <p className="text-gray-600 text-lg md:text-l leading-relaxed">
                                {activeTab.secondaryText}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
 
 