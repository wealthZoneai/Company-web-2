import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, fadeInUp } from './Shared';

export default function WhatWeDo() {
    const categories = [
        { color: 'bg-blue-50', border: 'border-blue-100', title: 'WZG-AI SOLUTIONS', items: ['Artificial Intelligence System', 'Software development', 'Business Intelligence and development'] },
        { color: 'bg-orange-50', border: 'border-orange-100', title: 'Digital Services', items: ['Comprehensive Cybersecurity Systems', 'Strategy, Professional coaching', 'Managed HR/Payroll solutions'] },
        { color: 'bg-pink-50', border: 'border-pink-100', title: 'Business Intelligence', items: ['Cloud Strategy and Management', 'Fullstack Web Research App Ecosystem'] },
        { color: 'bg-cyan-50', border: 'border-cyan-100', title: 'Staffing Development', items: ['Internal Applications Stability', 'Service desk Management'] }
    ];

    return (
        <section className="mb-24">
            <SectionHeading>What we do</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        {...fadeInUp}
                        className={`${cat.color} ${cat.border} border p-8 rounded-3xl`}
                    >
                        <h4 className="font-black text-gray-900 mb-6 uppercase tracking-tight text-sm">
                            {cat.title}
                        </h4>
                        <ul className="space-y-4">
                            {cat.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm font-medium">
                                    <span className="text-blue-500 mt-1">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
