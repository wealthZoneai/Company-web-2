import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';

export default function About() {
    return (
        <div className="bg-white text-gray-900 pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mb-24"
                >
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight">
                        Visionaries in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            AI Intelligence
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        Wealth Zone Group AI was founded on the principle that future technology
                        should be accessible, intelligent, and human-centric. We are a team of
                        engineers, designers, and visionaries dedicated to pushing the boundaries
                        of what's possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 border border-gray-100 p-1 shadow-2xl shadow-blue-600/10"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                            alt="Team"
                            className="w-full h-full object-cover rounded-[2.8rem]"
                        />
                    </motion.div>

                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-black text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                To empower global enterprises through scalable AI infrastructure
                                that drives innovation and sustainable growth in a rapidly
                                evolving digital landscape.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-black text-gray-900 mb-4">Our Values</h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                Innovation, transparency, and technical excellence are at the
                                core of everything we build. We believe in creating technology
                                that serves humanity.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
