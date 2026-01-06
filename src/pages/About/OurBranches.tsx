import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, fadeInUp } from './Shared';

export default function OurBranches() {
    const branches = [
        { name: 'Hyderabad', img: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?q=80&w=800&auto=format&fit=crop' },
        { name: 'Vijayawada', img: 'https://images.unsplash.com/photo-1623862660001-c88f1181827b?q=80&w=800&auto=format&fit=crop' },
        { name: 'Bengaluru', img: 'https://images.unsplash.com/photo-1596422846543-b5c64483eb93?q=80&w=800&auto=format&fit=crop' },
        { name: 'Vizag', img: 'https://images.unsplash.com/photo-1624026676760-50608544d673?q=80&w=800&auto=format&fit=crop' }
    ];

    return (
        <section className="mb-24">
            <SectionHeading>Our Branches</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {branches.map((branch, i) => (
                    <motion.div
                        key={i}
                        {...fadeInUp}
                        className="relative group overflow-hidden rounded-[2rem] shadow-lg aspect-video cursor-pointer"
                    >
                        <img
                            src={branch.img}
                            alt={branch.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-bottom p-8">
                            <h4 className="text-2xl font-black text-white self-end">{branch.name}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
