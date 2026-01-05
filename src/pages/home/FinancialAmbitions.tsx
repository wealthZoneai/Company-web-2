import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function FinancialAmbitions() {
    return (
        <section className="relative py-4 bg-[#EAF5FF] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                {/* Main Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#1457AB] text-3xl md:text-4xl font-black mb-8 leading-tight max-w-4xl mx-auto"
                >
                    Ready to power your wealth with intelligence?
                </motion.h2>

                {/* Sub-heading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[#1E293B] text-lg md:text-xl font-semibold mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Connect with our team to discover how WZG-AI can help you achieve your Financial Ambitions
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <NavLink
                        to="/contact"
                        className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#2B89E9] to-[#1457AB] text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:scale-105 transition-transform duration-300 text-lg"
                    >
                        Contact Us
                    </NavLink>

                    <NavLink
                        to="/services"
                        className="w-full md:w-auto px-10 py-4 bg-[#E9F2FF] border border-[#D1E1F5] text-[#1457AB] font-bold rounded-xl hover:bg-[#DCEBFF] transition-colors duration-300 text-lg shadow-sm shadow-blue-100"
                    >
                        Our Services
                    </NavLink>
                </motion.div>
            </div>

            {/* Decorative Background Elements if any (optional) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
