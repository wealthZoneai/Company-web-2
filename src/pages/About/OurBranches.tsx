
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Sparkles } from 'lucide-react';

// Local Assets
import hydImg from '../../assets/images/places/hyd.png';
import vijaImg from '../../assets/images/places/vija.png';
import bnglrImg from '../../assets/images/places/bnglr.png';
import vizImg from '../../assets/images/places/viz.png';

const branches = [
    {
        name: 'Hyderabad',
        sub: 'Hyderabad',
        desc: 'Headquarters & Tech Hub',
        img: hydImg,
        status: 'Active',
        badgeIcon: <Sparkles className="text-blue-600 w-5 h-5" />,
        color: 'bg-blue-50 border-blue-100',
        textColor: 'text-blue-900',
        location: 'Madhapur, Hyderabad, Telanagana.'
    },
    {
        name: 'Vizag',
        sub: 'Visakhapatnam',
        desc: 'Coastal Tech Hub',
        img: vizImg,
        status: 'Coming Soon',
        badgeIcon: <Sparkles className="text-cyan-600 w-5 h-5" />,
        color: 'bg-cyan-50 border-cyan-100',
        textColor: 'text-cyan-900',
        location: 'Location scouting in progress'
    },
    {
        name: 'Vijayawada',
        sub: 'Vijayawada',
        desc: 'Business Capital',
        img: vijaImg,
        status: 'Coming Soon',
        badgeIcon: <Sparkles className="text-orange-600 w-5 h-5" />,
        color: 'bg-orange-50 border-orange-100',
        textColor: 'text-orange-900',
        location: 'Location scouting in progress'
    },
    {
        name: 'Bangalore',
        sub: 'Bengaluru',
        desc: 'Silicon Valley of India',
        img: bnglrImg,
        status: 'Coming Soon',
        badgeIcon: <Sparkles className="text-purple-600 w-5 h-5" />,
        color: 'bg-purple-50 border-purple-100',
        textColor: 'text-purple-900',
        location: 'Location scouting in progress'
    }
];

export default function OurBranches() {
    return (
        <section className="py-4 px-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-gray-50 to-white -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Our Branches
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
                        We're expanding across India to bring cutting-edge technology solutions closer to you
                    </p>
                </div>

                {/* Branches Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {branches.map((branch, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`relative flex flex-col rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border ${branch.color}`}
                        >
                            {/* Image Section */}
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={branch.img}
                                    alt={branch.name}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                />
                                {/* Gradient removed for cleaner look matching the design */}

                                {/* Floating Badge */}
                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center justify-center">
                                    {branch.badgeIcon}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="mb-4">
                                    <h3 className="text-3xl font-extrabold text-gray-900 mb-1">
                                        {branch.name}
                                    </h3>
                                    <p className="text-sm font-semibold text-gray-500 tracking-wide">
                                        {branch.sub}
                                    </p>
                                </div>

                                <p className="text-sm text-gray-600 mb-6 font-medium">
                                    {branch.desc}
                                </p>

                                <div className="mt-auto flex items-start gap-3 text-gray-500">
                                    <FaMapMarkerAlt className={`mt-1 flex-shrink-0 ${branch.textColor}`} />
                                    <span className="text-sm leading-relaxed">
                                        {branch.location}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
