import { motion } from "framer-motion";
import React from 'react';

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
            <FloatBlob className="bg-blue-200/40 w-160 h-160 -top-40 -left-40" duration={15} />
            <FloatBlob className="bg-purple-200/40 w-180 h-180 -bottom-40 -right-40" duration={18} />
            <FloatBlob className="bg-cyan-100/30 w-96 h-96 top-1/4 right-1/4" duration={12} />
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/50 to-white"></div>
        </div>
    );
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
            <AnimatedBackground />

            <div className="relative z-10 text-center px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-sm font-semibold mb-6">
                        Pioneering the AI Revolution
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
                        Wealth Zone <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
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
                    className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
                >
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-blue-600/25 hover:scale-105 active:scale-95">
                        Explore Services
                    </button>
                    <button className="px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95">
                        View Products
                    </button>
                </motion.div>
            </div>

        </section>
    );
}
