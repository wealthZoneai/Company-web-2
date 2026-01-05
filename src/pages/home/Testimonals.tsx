import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatBlob: React.FC<{ className: string; duration: number }> = ({ className, duration }) => {
    return (
        <motion.div
            className={`absolute rounded-full blur-[120px] ${className}`}
            animate={{
                x: [0, 50, -50, 0],
                y: [0, -50, 50, 0],
                scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
};

const AnimatedBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <FloatBlob className="bg-blue-200/40 w-[45rem] h-[45rem] -top-60 -left-60" duration={15} />
            <FloatBlob className="bg-purple-200/30 w-[50rem] h-[50rem] -bottom-60 -right-60" duration={18} />
            <FloatBlob className="bg-cyan-100/20 w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" duration={12} />
            {/* Grain/Noise Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-transparent to-white/90"></div>
        </div>
    );
};

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
    const [rotation, setRotation] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const active = testimonials[activeIndex];

    // Smooth continuous rotation (More perceptible speed)
    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => (prev + 0.1) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    // Update dimensions for precise path alignment
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight
                });
            }
        };
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative min-h-[75vh] w-full py-16 bg-white overflow-hidden flex items-center justify-center">
            <AnimatedBackground />
            {/* Soft Grey Container - Restored for Reference Match */}

            {/* Orbit System Area */}
            <div
                ref={containerRef}
                className="relative w-full h-[70vh] md:h-[80vh]  flex items-center justify-center px-4"
            >

                {/* Background Ellipses - 3 Thick Colored Lines (Aligned with lineScale) */}
                <div className="absolute w-[50%] h-[50%] border-2 border-blue-400/20 rounded-[100%] pointer-events-none" />
                <div className="absolute w-[70%] h-[70%] border-2 border-blue-300/30 rounded-[100%] pointer-events-none" />
                <div className="absolute w-[90%] h-[90%] border-2 border-blue-200/40 rounded-[100%] pointer-events-none" />

                {/* Orbiting Images (ONLY ON LINE PATHS) */}
                {testimonials.map((t, i) => {
                    const angle = (i * 360) / testimonials.length + rotation;
                    const angleRad = (angle * Math.PI) / 180;

                    // Precise radii matching the background lines percentages (90%, 70%, 50%)
                    const lineScale = [0.90, 0.70, 0.50][i % 3];
                    const rx = (dimensions.width * lineScale) / 2;
                    const ry = (dimensions.height * lineScale) / 2;

                    const x = rx * Math.cos(angleRad);
                    const y = ry * Math.sin(angleRad);

                    return (
                        <div
                            key={t.id}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                            }}
                            className="flex items-center justify-center z-20"
                        >
                            {/* Images orbit and also have a subtle "floating" rotation */}
                            <motion.button
                                onClick={() => setActiveIndex(i)}
                                animate={{
                                    rotate: -rotation + (Math.sin(rotation * 0.05) * 10), // Mostly upright but with a subtle sway
                                    scale: activeIndex === i ? 1.25 : 1
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white shadow-xl overflow-hidden transition-all duration-500 hover:scale-110 active:scale-90 ${activeIndex === i ? 'border-blue-500 z-10 shadow-blue-200 ring-4 ring-blue-100/50' : 'scale-100'}`}
                            >
                                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                            </motion.button>
                        </div>
                    );
                })}

                {/* Decorative points on the line paths */}
                {[...Array(12)].map((_, i) => {
                    const angle = (i * 360) / 12 + 15 + rotation;
                    const angleRad = (angle * Math.PI) / 180;
                    const lineScale = [0.90, 0.70, 0.50][i % 3];
                    const rx = (dimensions.width * lineScale) / 2;
                    const ry = (dimensions.height * lineScale) / 2;

                    const x = rx * Math.cos(angleRad);
                    const y = ry * Math.sin(angleRad);

                    return (
                        <div
                            key={`dot-${i}`}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                            }}
                            className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 opacity-60 rounded-full"
                        />
                    );
                })}

                {/* Central Testimonial Content */}
                <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[90%] md:max-w-[700px]">


                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            className="flex flex-col items-center"
                        > <div className="">
                                <motion.h2 className="text-xl md:text-[22px] font-bold text-[#1457AB] mb-2 tracking-tight">
                                    Testimonials
                                </motion.h2>
                                <motion.h3 className="text-3xl md:text-[45px] font-black text-[#1A1A1A] leading-tight mb-8">
                                    Opinions of our Clients
                                </motion.h3>
                            </div>

                            <div
                                className="w-10 h-12 md:w-20 md:h-20 rounded-full  shadow-2xl overflow-hidden  cursor-pointer hover:scale-105 transition-all duration-500"
                                onClick={() => setIsModalOpen(true)}
                                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            >
                                <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
                            </div>


                            <p className="text-[#475569] text-base md:text-[12px] font-medium leading-relaxed max-w-[600px]  italic">
                                “{active.comment}”
                            </p>

                            <h4 className="text-lg md:text-[18px] font-bold text-[#1e293b]">
                                -{active.name}
                            </h4>
                        </motion.div>
                    </AnimatePresence>
                </div>


            </div>


            {/* Modal for Details */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-[2.5rem] shadow-2xl max-w-2xl w-full p-12 relative"
                        >
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="flex flex-col items-center text-center">
                                <img src={active.image} alt={active.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-50 shadow-xl mb-6" />
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{active.name}</h3>
                                <p className="text-blue-600 font-bold text-sm uppercase mb-8">{active.role}</p>
                                <p className="text-gray-600 text-lg italic mb-6">“{active.comment}”</p>
                                {active.fullDetails && <p className="text-gray-500 font-medium">{active.fullDetails}</p>}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
