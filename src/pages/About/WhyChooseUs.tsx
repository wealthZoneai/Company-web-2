import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, fadeInUp } from './Shared';

export default function WhyChooseUs() {
    const reasons = [
        { title: 'Expertise & Innovation', desc: 'Our team is at the forefront of AI and technology, delivering cutting edge solutions that meet the evolving market needs.', icon: '💡' },
        { title: 'Mid-sized MarketFocus', desc: 'We work closely with our clients to understand their needs and provide them with customized solutions.', icon: '🎯' },
        { title: 'Versatility & Quality', desc: 'We are dedicated to providing the highest quality of work and our versatile approach ensures excellence across diverse industries.', icon: '🌟' }
    ];

    return (
        <section className="mb-24">
            <SectionHeading className="mb-12">Why Choose Us</SectionHeading>
            <div className="grid md:grid-cols-3 gap-12">
                {reasons.map((item, i) => (
                    <motion.div key={i} {...fadeInUp} className="text-center group">
                        <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform">{item.icon}</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                        <p className="text-gray-500 leading-relaxed font-medium">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
