import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaArrowRight } from 'react-icons/fa';

export default function FutureGoalCTA() {
    return (
        <section className="px-6 py-12 md:py-20">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1457AB] rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl"
                >
                    {/* Abstract Backgrounds */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-8 inline-flex">
                            <FaLightbulb className="text-4xl text-yellow-300" />
                        </div>

                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Let's Build the Future Together
                        </h3>

                        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-10 leading-relaxed font-light">
                            Ready to transform your business with intelligent technology?
                            Connect with us to see how our solutions can drive your success.
                        </p>

                        <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 hover:shadow-xl flex items-center gap-3 active:scale-95 duration-200">
                            Contact Us <FaArrowRight />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
