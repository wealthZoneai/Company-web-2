import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    comment: string;
    image: string;
    fullDetails?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sindhu Rajput",
        role: "Global Operations Manager",
        comment: "In the Last six months we have seen our organizational profitability increase Significantly thanks in large practices around resource management and global resourcing of our projects",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        fullDetails: "Wealth Zone Group AI implemented a comprehensive resource management suite that allowed us to visualize our global talent pool in real-time. This led to a 25% increase in project efficiency and a direct impact on our bottom line within the first quarter."
    },
    {
        id: 2,
        name: "Alex Thompson",
        role: "CTO, TechFlow",
        comment: "Wealth Zone Group AI transformed our operations. Their intelligent systems reduced our overhead by 40% in just six months.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
        fullDetails: "The AI-driven automation tools provided by WZG-AI handled our repetitive backend tasks with 99.9% accuracy. This allowed our engineering team to focus on core product innovation instead of maintenance."
    },
    {
        id: 3,
        name: "Sarah Chen",
        role: "Product Manager, InnovateX",
        comment: "The level of technical expertise and the seamless integration process was unlike anything we've experienced before. Highly recommended.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
        fullDetails: "Integrating WZG-AI's solution into our existing tech stack was surprisingly smooth. Their team provided 24/7 support throughout the transition, ensuring zero downtime for our global users."
    },
    {
        id: 4,
        name: "Michael Roberts",
        role: "Founder, ScaleUp",
        comment: "From the initial consultation to the final deployment, the team showed unmatched professionalism and vision.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        fullDetails: "WZG-AI didn't just provide software; they provided a strategic roadmap for our growth. Their insights into AI scalability helped us secure our Series B funding with confidence."
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const active = testimonials[activeIndex];

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative py-24 bg-white overflow-hidden flex items-center justify-center min-h-[900px]">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">

                {/* Header Container */}
                <div className="text-center mb-16 relative z-20">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-black text-blue-700 mb-2"
                    >
                        Testimonials
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
                    >
                        Opinions of our Clients
                    </motion.h3>
                </div>

                {/* Orbit System */}
                <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">

                    {/* Inner Orbit Line */}
                    <div className="absolute w-[80%] h-[80%] border border-blue-100 rounded-full" />

                    {/* Outer Orbit Line */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute w-full h-full border border-blue-50 rounded-full"
                    >
                        {/* Orbiting Items (Avatars & Dots) */}
                        {testimonials.map((t, i) => {
                            const angle = (i * 360) / testimonials.length;
                            return (
                                <div
                                    key={t.id}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: `rotate(${angle}deg) translate(${window.innerWidth < 768 ? 150 : 300}px) rotate(${-angle}deg)`
                                    }}
                                    className="flex items-center justify-center"
                                >
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    >
                                        <button
                                            onClick={() => {
                                                setActiveIndex(i);
                                                // setIsModalOpen(true); // Disable modal on orbit click
                                            }}
                                            className={`w-12 h-12 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg overflow-hidden transition-all duration-500 hover:scale-110 active:scale-95 ${activeIndex === i ? 'scale-125 border-blue-500 z-10' : 'scale-100 opacity-60'}`}
                                        >
                                            <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                        </button>
                                    </motion.div>
                                </div>
                            );
                        })}

                        {/* Additional decorative dots on orbit */}
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={`dot-${i}`}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: `rotate(${i * 60 + 30}deg) translate(${window.innerWidth < 768 ? 150 : 300}px)`
                                }}
                                className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"
                            />
                        ))}
                    </motion.div>

                    {/* Central Content */}
                    <div className="relative z-10 flex flex-col items-center text-center max-w-[80%]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center cursor-pointer"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <div className="w-24 h-24 md:w-40 md:h-40 rounded-full border-8 border-white shadow-2xl overflow-hidden mb-8 hover:scale-105 transition-transform duration-300">
                                    <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
                                </div>

                                <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-6 px-4">
                                    “{active.comment}”
                                </p>

                                <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-1">
                                    -{active.name}
                                </h4>
                                <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">
                                    {active.role}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all pointer-events-auto group"
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all pointer-events-auto group"
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Pop-up Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-[2.5rem] shadow-2xl max-w-2xl w-full p-8 md:p-12 relative overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-500/20 shadow-xl overflow-hidden mb-6">
                                    <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{active.name}</h3>
                                <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-8">{active.role}</p>

                                <div className="w-full h-px bg-gray-100 mb-8" />

                                <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                                    “{active.comment}”
                                </p>

                                {active.fullDetails && (
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                                        {active.fullDetails}
                                    </p>
                                )}
                            </div>

                            {/* Decorative Background for Modal */}
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -z-10" />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-50/20 rounded-full blur-[100px]" />
            </div>
        </section>
    );
}
