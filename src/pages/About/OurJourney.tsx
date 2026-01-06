import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, fadeInUp } from './Shared';

export default function OurJourney() {
    return (
        <motion.section {...fadeInUp} className="mb-24">
            <SectionHeading>Our Journey</SectionHeading>
            <div className="border-[3px] border-blue-500/30 rounded-[2rem] p-8 md:p-12 relative overflow-hidden bg-white shadow-2xl shadow-blue-50/50">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <p className="text-gray-600 text-lg italic leading-relaxed">
                            "Founded in 2023, Wealth Zone Group AI provides a range of information technology services, including AI and machine learning.
                            With a focus on innovation and excellence, our company is committed to helping businesses and organizations thrive in the digital age.
                            Our mission is to empower individuals and organizations to achieve more through the intelligent application of technology."
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['AI-ML', 'Cloud Computing', 'Software Development', 'Digital Marketing', 'Cyber security', 'App Development'].map((tag) => (
                                <span key={tag} className="px-5 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                            alt="Journey Representation"
                            className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
}