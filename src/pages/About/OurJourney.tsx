import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './Shared';
import ladyImage from '../../assets/images/Advertisement_women.png';

export default function OurJourney() {
    const tags = [
        "AI & ML",
        "Cloud Computing",
        "Software Development",
        "Digital Marketing",
        "Cyber security",
        "App Development"
    ];

    return (
        <section className="mx-auto mb-4 font-sans px-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-[3px] h-10 bg-blue-700 rounded-full"></div>
                <h2 className="text-blue-800 font-bold text-4xl">
                    Our Journey
                </h2>
            </div>

            {/* Main Journey Container */}
            <div className="relative bg-[#3b82f6] rounded-2xl overflow-hidden min-h-[40vh] flex items-stretch">
                {/* White Card with curved top-left */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white m-4 flex-1 rounded-tl-[120px] rounded-br-[40px] rounded-tr-[5px] rounded-bl-[5px] p-8 md:p-16 flex flex-col justify-between"
                >
                    <div className="relative z-10">
                        <p className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed font-medium mb-10 text-justify ">
                            Founded in 2008 as Oyster Technologies and later rebranded to WealthZone Group AI,
                            our company has grown into a leading product and service-based IT organization specializing
                            in Artificial Intelligence (AI). Advanced Digital Solutions, Software Development,
                            and Digital Marketing Services. At WealthZone Group AI, we combine Innovation, Intelligence,
                            and Technology to empower Businesses with Transformative Digital Solutions.
                            From custom Software and Web Applications to AI-Driven Automation, Data Analytics,
                            and Enterprise Systems, we help Organizations Enhance Efficiency, Scalability, and Customer Engagement.
                            Over the years, we've built a Strong Reputation for Delivering Cutting-edge Products,
                            Strategic Consulting, and Full-Cycle IT Services that Drive Measurable Business Growth.
                            Our Diverse Team of Experts works relentlessly to create Smarter, Faster, and Future-Ready Solutions —
                            Enabling Businesses to stay ahead in today's Competitive Digital Landscape.
                            Founded in 2008 as Oyster Technologies, we embarked on a journey to revolutionize the digital landscape.
                            In 2019, we evolved into WealthZone Group AI, marking our commitment to cutting-edge artificial intelligence and innovation.
                        </p>

                        {/* Tags Section */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-fr w-full lg:w-[70%]">
                            {tags.map((tag, index) => (
                                <motion.span
                                    key={tag}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-[#eef2ff] text-[#2563eb] px-6 py-2 rounded-full font-bold text-center border border-blue-100 flex items-center justify-center whitespace-nowrap shadow-sm hover:shadow-md transition-shadow text-[14px]"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Professional Woman Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="hidden lg:block absolute right-[-9%] bottom-[-5%] w-[42%] h-[70%] pointer-events-none z-20"
                >
                    <img
                        src={ladyImage}
                        alt="Professional Woman"
                        className="w-full h-full object-contain filter drop-shadow-[-20px_20px_40px_rgba(0,0,0,0.15)]"
                    />
                </motion.div>
            </div>
        </section>
    );
}