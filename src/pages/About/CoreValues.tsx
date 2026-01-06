import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, fadeInUp, staggerContainer } from './Shared';

export default function CoreValues() {
    const values = [
        { title: 'Innovation', desc: 'The world is changing, and we are here to provide our clients with the best and most innovative technical solutions.', icon: '🚀' },
        { title: 'Integrity', desc: 'At WZG-AI Group Global, we hold ourselves to the highest standards of ethics, and our word is our code.', icon: '🛡️' },
        { title: 'Customer-First', desc: 'Our clients are at the center of everything we do and we work tirelessly to meet their needs.', icon: '👤' },
        { title: 'Teamwork', desc: 'We value and prioritize team building, as we work with our clients to succeed together.', icon: '🤝' },
        { title: 'Accountability', desc: 'We take responsibility for our work and we are committed to helping our clients achieve their business goals.', icon: '⚖️' },
        { title: 'Excellence', desc: 'At WZG-AI, we are committed to providing the highest quality of work.', icon: '💎' },
    ];

    return (
        <section className="mb-24">
            <SectionHeading>Our Core Values</SectionHeading>
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {values.map((value, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInUp}
                        className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
                    >
                        <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                            {value.icon}
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                        <p className="text-gray-500 leading-relaxed">
                            {value.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
