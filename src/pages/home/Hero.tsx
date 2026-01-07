import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero1 from '../../assets/viedos/Hero1.mp4';
import Hero2 from '../../assets/viedos/Hero2.mp4';

const slides = [
    {
        video: Hero1,
        title: (
            <>
                {/* Wealth Zone <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                    Group AI
                </span> */}
            </>
        ),
        // description: "Empowering the future through intelligent digital transformation, secure infrastructures, and groundbreaking user experiences."
    },
    {
        video: Hero2,
        title: (
            <>
                {/* Innovate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                    With Precision
                </span> */}
            </>
        ),
        // description: "Leading the charge in AI-driven solutions and enterprise-scale digital evolution for global businesses."
    }
];

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

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000); // Change slide every 8 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Video Background Layer */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`video-${currentSlide}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <video
                            src={slides[currentSlide].video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        {/* Overlays */}
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Decorative Blobs */}
            <FloatBlob className="bg-blue-600/20 w-[40rem] h-[40rem] -top-40 -left-40 z-10" duration={15} />
            <FloatBlob className="bg-purple-600/20 w-[45rem] h-[45rem] -bottom-40 -right-40 z-10" duration={18} />

            <div className="relative z-20 text-center px-6 max-w-6xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`content-${currentSlide}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
                            {slides[currentSlide].title}
                        </h1>

                        <p className="mt-8 text-xl md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto leading-relaxed">
                            {slides[currentSlide].description}
                        </p> */}

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-blue-600/40 hover:scale-105 active:scale-95 text-center"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/services"
                                className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-md hover:scale-105 active:scale-95 text-center"
                            >
                                Our Expertise
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                {/* <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex gap-3">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-2.5 rounded-full transition-all duration-500 ${currentSlide === idx ? "w-12 bg-blue-500" : "w-2.5 bg-white/30"
                                }`}
                        />
                    ))}
                </div> */}
            </div>
        </section>
    );
}
