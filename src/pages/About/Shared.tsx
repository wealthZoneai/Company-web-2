import React from 'react';
import { motion } from 'framer-motion';

export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
};

export const SectionHeading: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`relative mb-8 ${className}`}>
        <div className="absolute -left-4 top-0 w-1 h-full bg-blue-600 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-bold text-[#1457AB] pl-2 uppercase tracking-wide">
            {children}
        </h2>
    </div>
);
