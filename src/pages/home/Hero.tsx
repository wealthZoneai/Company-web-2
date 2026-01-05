import { motion } from "framer-motion";
import React from 'react';
import { Link } from 'react-router-dom';

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

const VideoBackground: React.FC = () => {
    const videoId = "-P6Qr3gdlxw";
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <iframe
                className="absolute inset-0 w-full h-[100%] -top-[10%] pointer-events-none scale-150"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
                title="Background Video"
                frameBorder="0"
                allow="autoplay; fullscreen"
            />
            {/* Subtle Overlay for Legibility */}
            {/* <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white"></div> */}
        </div>
    );
};

const AnimatedBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <VideoBackground />
            {/* Grid/Noise Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        </div>
    );
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center  ">
            <AnimatedBackground />

            <div className="relative z-10 text-center px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-4 rounded-full  text-blue-600 border  text-sm font-semibold mb-6">
                        Pioneering the AI Revolution
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.1] tracking-tight">
                        Wealth Zone <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                            Group AI
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-8 text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed"
                >
                    Empowering the future through intelligent digital transformation,
                    secure infrastructures, and groundbreaking user experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12 flex flex-row items-center justify-center gap-6"
                >
                    <Link
                        to="/contact"
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-blue-600/25 hover:scale-105 active:scale-95 inline-block"
                    >
                        Contact Us
                    </Link>
                    <Link
                        to="/services"
                        className="px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
                    >
                        Our Services
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-200 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                    />
                </div>
            </motion.div> */}
        </section>
    );
}