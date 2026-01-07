import { motion } from "framer-motion";
import React from "react";
import dataa from "../../assets/viedos/dataa.mp4";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* ================= BACKGROUND VIDEO ================= */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={dataa}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-black/35 z-0"></div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 text-center px-6 max-w-5xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="
                        text-4xl 
                        md:text-6xl 
                        lg:text-7xl
                        font-extrabold
                        text-white
                        leading-[1.05]
                        tracking-tight
                    ">
                        Wealth Zone <br />
                        <span className="
                            block
                            mt-2
                            text-transparent 
                            bg-clip-text 
                            bg-linear-to-r 
                            from-blue-400 
                            via-indigo-400 
                            to-purple-500
                            tracking-tight
                        ">
                            Group AI
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="
                        mt-8
                        text-lg
                        md:text-xl
                        lg:text-2xl
                        text-gray-100
                        font-normal
                        max-w-3xl
                        mx-auto
                        leading-relaxed
                    "
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
                    <button className="
                        px-8 py-4 
                        bg-blue-600 hover:bg-blue-700 
                        text-white 
                        rounded-2xl 
                        font-semibold 
                        text-lg 
                        tracking-wide
                        transition-all duration-300 
                        shadow-2xl shadow-blue-600/25 
                        hover:scale-105 active:scale-95
                    ">
                        Explore Services
                    </button>

                    <button className="
                        px-8 py-4 
                        bg-white/90 hover:bg-white 
                        text-gray-900 
                        border border-white/30 
                        rounded-2xl 
                        font-semibold 
                        text-lg 
                        tracking-wide
                        transition-all duration-300 
                        hover:scale-105 active:scale-95
                    ">
                        View Products
                    </button>
                </motion.div>

            </div>

        </section>
    );
}
