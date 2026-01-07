import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './Shared';

export default function MissionVision() {
    return (
        <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-4  px-6"
        >
            {/* Mission Card */}
            <motion.div
                variants={fadeInUp}
                className="relative overflow-hidden bg-gradient-to-br from-[#E8F1FF] to-[#F8E8FF] p-12 rounded-tl-[100px] rounded-br-[100px] rounded-tr-[5px] rounded-bl-[5px] border border-white/50 shadow-xl shadow-blue-900/5 group hover:shadow-2xl transition-all duration-500"
                style={{ minHeight: '100px' }}
            >
                {/* Subtle decorative background circle */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-400/20 transition-colors duration-700" />

                <h3 className="text-4xl font-black text-[#1457AB] mb-8 relative z-10 tracking-tight">
                    Mission
                </h3>
                <p className="text-[#475569] leading-relaxed text-[17px] font-medium relative z-10 max-w-[90%]">
                    To empower businesses with transformative AI-driven solutions,
                    enhancing efficiency, fostering growth, and creating sustainable
                    value for our clients, employees, and society.
                </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
                variants={fadeInUp}
                className="relative overflow-hidden bg-gradient-to-br from-[#F5F8FF] to-[#F0F4FF] p-12 rounded-tl-[100px] rounded-br-[100px] rounded-tr-[5px] rounded-bl-[5px] border border-white/50 shadow-xl shadow-blue-900/5 group hover:shadow-2xl transition-all duration-500"
                style={{ minHeight: '150px' }}
            >
                {/* Subtle decorative background circle */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-400/20 transition-colors duration-700" />

                <h3 className="text-4xl font-black text-[#1457AB] mb-8 relative z-10 tracking-tight">
                    Vision
                </h3>
                <p className="text-[#475569] leading-relaxed text-[17px] font-medium relative z-10 max-w-[90%]">
                    To become a leading global tech company known for innovative AI products,
                    simple user experiences, and reliable digital solutions.
                </p>
            </motion.div>
        </motion.section>
    );
}
