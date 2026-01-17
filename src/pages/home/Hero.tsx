import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import Hero1 from '../../assets/viedos/Hero1.mp4';
import Hero2 from '../../assets/viedos/Hero2.mp4';

const slides = [
    {
        video: Hero1,
        title: "Building on Belief.",
        subtitle: "We help customers around the world build a future through innovation and collective knowledge.",
        cta: "Discover More"
    },
    {
        video: Hero2,
        title: "Innovation for Everyone.",
        subtitle: "Leading the charge in AI-driven solutions and enterprise-scale digital evolution.",
        cta: "Explore Our Expertise"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000); // Change slide every 8 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Video Background Layer - FIXED for Parallax Effect */}
            <div className="fixed inset-0 w-full h-full -z-10">
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
                        {/* Professional Dark Overlay  */}
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Container - Left Aligned */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`content-${currentSlide}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
                            {slides[currentSlide].title}
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-200 font-normal leading-relaxed mb-12 border-l-4 border-yellow-500 pl-6">
                            {slides[currentSlide].subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full font-bold text-lg transition-all transform hover:scale-105"
                            >
                                {slides[currentSlide].cta}
                                <FaArrowRight />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white rounded-full font-bold text-lg transition-all transform hover:scale-105"
                            >
                                Our Services
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Indicators - Bottom Left */}
                {/* <div className="absolute bottom-12 left-6 md:left-12 lg:left-20 flex gap-4">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 transition-all duration-500 ${currentSlide === idx ? "w-12 bg-yellow-500" : "w-8 bg-white/40 hover:bg-white/60"
                                }`}
                        />
                    ))}
                </div> */}
            </div>
        </section>
    );
}
