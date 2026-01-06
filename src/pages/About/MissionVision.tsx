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
            className="grid md:grid-cols-2 gap-8 mb-24"
        >
            <motion.div variants={fadeInUp} className="bg-purple-50 p-10 rounded-[2.5rem] border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-black text-[#1457AB] mb-4">Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg italic">
                    To provide innovative solutions and excellence in results to enhance business productivity, promote growth, and creating a sustainable environment for our clients, employees and society.
                </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-black text-[#1457AB] mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg italic">
                    To become a leading global firm in providing flexible, innovation-driven, simple, and high quality solutions, and creating value for our clients.
                </p>
            </motion.div>
        </motion.section>
    );
}
