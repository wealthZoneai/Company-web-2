import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './Shared';

export default function CoreValues() {
    return (
        <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className=" bg-white px-6 "
        >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-2">
                <div className="w-[3px] h-10 bg-blue-700 rounded-full"></div>
                <h2 className="text-blue-800 font-bold text-4xl">
                    Our Core Values
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Innovation */}
                <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3z" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-lg text-gray-900">
                            Innovation
                        </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We continuously explore new ideas and technologies to deliver cutting-edge solutions.
                    </p>
                </motion.div>

                {/* Integrity */}
                <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-lg text-gray-900">
                            Integrity
                        </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We uphold the highest standards of ethics and transparency in all we do.
                    </p>
                </motion.div>

                {/* Customer First */}
                <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-lg text-gray-900">
                            Customer-First
                        </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Our clients' success is our priority, and we are dedicated to their needs.
                    </p>
                </motion.div>

                {/* Teamwork */}
                <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 13a3 3 0 100-6 3 3 0 000 6zM17 13a3 3 0 100-6 3 3 0 000 6z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2 20c0-2.5 2-4.5 4.5-4.5M22 20c0-2.5-2-4.5-4.5-4.5" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-lg text-gray-900">
                            Teamwork
                        </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We foster a collaborative environment to achieve excellence together.
                    </p>
                </motion.div>

                {/* Accountability */}
                <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="4" y="7" width="16" height="12" rx="2" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7V5a3 3 0 016 0v2" />
                                <circle cx="12" cy="13" r="1" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-lg text-gray-900">
                            Accountability
                        </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We take ownership of our commitments and deliver on our promises.
                    </p>
                </motion.div>

                {/* Excellence */}
                <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l3 6 6 .8-4.5 4.2 1 6-5.5-3-5.5 3 1-6L3 9.8 9 9l3-6z" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-lg text-gray-900">
                            Excellence
                        </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We strive for world-class quality in our solutions, services, and operations.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}