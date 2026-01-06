import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';

export default function FutureGoalCTA() {
    return (
        <section className="px-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-[3px] h-10 bg-blue-700 rounded-full"></div>
                <h2 className="text-blue-800 font-bold text-4xl">
                    Our Future Goal
                </h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Wealth Zone Group AI is focused on providing our clients with the best and most innovative technical solutions that will help them succeed in today's digital landscape.
            </p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1457AB] rounded-[1rem] p-12 md:p-20  mb-4 text-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="flex flex-row items-center gap-4 mb-8">
                        <div className="bg-white rounded-xl p-1 shadow-lg">
                            <FaLightbulb className="text-3xl text-[#1457AB]" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-white"> Let's Build the Future Together</h3>
                    </div>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-12 opacity-90 font-medium ">
                        Ready to transform your business with intelligent technology? <br className="hidden md:block" />
                        Connect with us to see how our solutions can drive your success.
                    </p>
                    <button className="bg-white text-blue-900 px-12 py-2 rounded-xl font-black text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl">
                        Contact Us
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
