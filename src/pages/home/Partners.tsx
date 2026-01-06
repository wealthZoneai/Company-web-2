import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
    { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Deloitte.svg" },
    { name: "TeamLease Digital", logo: "https://digital.teamlease.com/wp-content/uploads/2022/03/TeamLease-Logo-Updated-1.png" },
    { name: "People Media Factory", logo: "https://peoplemediafactory.com/wp-content/uploads/2021/04/pm-logo-1.png" },
    { name: "Quess", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Quess_Corp_Logo.png" },
];

export default function Partners() {
    return (
        <section className="relative py-2 bg-white overflow-hidden my-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-6  gap-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#1457AB] font-bold text-xl md:text-2xl "
                >
                    Our Partners
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[#0F172A] text-xl md:text-3xl font-black  tracking-tight"
                >
                    Trusted Collaborations
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[#64748B] text-lg md:text-xl font-medium max-w-3xl mx-auto"
                >
                    Patenting With Industry Lead Driven Innovation and Deliver
                </motion.p>
            </div>

            <div className="relative">
                {/* Decorative Line behind cards - Now static across the scroll path */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 z-0 -translate-y-1/2 hidden md:block"></div>

                <div className="relative flex overflow-x-hidden py-4">
                    <div className="flex animate-marquee-partners whitespace-nowrap items-center py-2">
                        {[...partners, ...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="mx-4 md:mx-6 lg:mx-8 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 md:p-8 w-[200px] md:w-[260px] h-[100px] md:h-[130px] flex items-center justify-center hover:shadow-[0_20px_50px_rgba(20,87,171,0.1)] transition-all duration-500 group cursor-pointer relative z-10"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-full max-w-full object-contain transition-all duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee-partners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-partners {
          animation: marquee-partners 25s linear infinite;
        }
        .animate-marquee-partners:hover {
          animation-play-state: paused;
        }
      `}} />
        </section>
    );
}
