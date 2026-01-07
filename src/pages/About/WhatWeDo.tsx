import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, fadeInUp, staggerContainer } from './Shared';

export default function WhatWeDo() {
    const categories = [
        {
            title: 'Enterprise Solutions',
            items: ['Advanced HRMS Systems', 'OTRS & Support Tools', 'Custom Software Development'],
            bg: 'bg-[#edf2ff]',
            border: 'border-[#d0dcfc]'
        },
        {
            title: 'Digital Services',
            items: ['Comprehensive Cybersecurity Services', 'Strategic Digital Marketing', 'Targeted Staffing Solutions'],
            bg: 'bg-[#fff5f0]',
            border: 'border-[#ffe4d6]'
        },
        {
            title: 'Consumer Technology',
            items: ['Food Delivery Application', 'Innovative STEM Learning Products'],
            bg: 'bg-[#fff0f7]',
            border: 'border-[#ffd6e9]'
        },
        {
            title: 'Custom Development',
            items: ['Bespoke Application Building', 'AI & ML Model Integration.'],
            bg: 'bg-[#f0f9ff]',
            border: 'border-[#d6efff]'
        }
    ];

    return (
        <section className=" px-6">
            <SectionHeading>What we do</SectionHeading>

            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInUp}
                        className={`${cat.bg} ${cat.border} border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow min-h-[150px] flex flex-col justify-center`}
                    >
                        <h4 className="text-xl font-bold text-[#1a1a1a] mb-4">
                            {cat.title}
                        </h4>
                        <ul className="space-y-3">
                            {cat.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
                                    <span className="text-gray-400 mt-1.5 text-xs">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
