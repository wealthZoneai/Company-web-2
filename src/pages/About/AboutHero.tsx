import React from 'react';
import { motion } from 'framer-motion';
import aboutVideo from '../../assets/viedos/About.mp4';

export default function AboutHero() {
    return (
        <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={aboutVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-blue-950/60 z-1" />
            </div>
            <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-black mb-6 leading-tight"
                >
                    Empowering Growth with Advanced <br />
                    <span className="text-blue-400">Artificial Intelligence</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
                >
                    At Wealth Zone AI, we deliver innovative technologies through cutting edge technologies that help market opportunities.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-md font-bold transition-all shadow-lg hover:shadow-blue-500/30">
                        Contact Us
                    </button>
                    <button className="bg-white text-blue-900 px-10 py-4 rounded-md font-bold transition-all hover:bg-gray-100 shadow-lg">
                        How we help
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
