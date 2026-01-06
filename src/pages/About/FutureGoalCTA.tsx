import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './Shared';

export default function FutureGoalCTA() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
            <SectionHeading className="flex justify-center mb-12">Our Future Goal</SectionHeading>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-20 leading-relaxed font-medium">
                Wealth Zone Group AI is focused on providing our clients with the best and most innovative technical solutions that will help them succeed in today's digital landscape.
            </p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1457AB] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="text-5xl mb-8">🚀</div>
                    <h3 className="text-3xl md:text-5xl font-black mb-6">Let's Build the Future Together</h3>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-12 opacity-90 font-medium">
                        Ready to transform your business with intelligent technology? <br className="hidden md:block" />
                        Connect with us to speak how our solutions can drive your success.
                    </p>
                    <button className="bg-white text-blue-900 px-12 py-5 rounded-xl font-black text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl">
                        Contact Us
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
