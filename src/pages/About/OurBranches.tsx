import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, fadeInUp, staggerContainer } from './Shared';

// Local Assets
import hydImg from '../../assets/images/places/hyd.png';
import vijaImg from '../../assets/images/places/vija.png';
import bnglrImg from '../../assets/images/places/bnglr.png';
import vizImg from '../../assets/images/places/viz.png';

export default function OurBranches() {
    const branches = [
        { name: 'Hyderabad', img: hydImg },
        { name: 'Vijayawada', img: vijaImg },
        { name: 'Bengaluru', img: bnglrImg },
        { name: 'Vizag', img: vizImg }
    ];

    return (
        <section className=" px-6 ">
            <SectionHeading>Our Branches</SectionHeading>
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
                {branches.map((branch, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInUp}
                        className="relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer h-40"
                    >
                        {/* Image with Name Overlay */}
                        <img
                            src={branch.img}
                            alt={branch.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Name at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10 group-hover:-translate-y-2 transition-transform duration-300">
                            <h4 className="text-lg font-bold text-white">
                                {branch.name}
                            </h4>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
