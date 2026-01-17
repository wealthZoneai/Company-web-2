import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatItemProps {
    label: string;
    value: number;
    suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2;
            const increment = end / (duration * 60);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center py-2">
            <div className="text-3xl md:text-4xl font-black text-white leading-none">
                {count}
                {suffix}
            </div>
            <p className="text-white/80 font-bold text-xs md:text-sm uppercase tracking-wider mt-2">
                {label}
            </p>
        </div>
    );
};

export default function StatsBar() {
    const stats = [
        { label: "Happy Clients", value: 100, suffix: "+" },
        { label: "Years Experience", value: 20, suffix: "+" },
        { label: "Projects completed", value: 180, suffix: "+" },
        { label: "Success Rate", value: 85, suffix: "%" },
    ];

    return (
        <section className="bg-white  ">
            <div className="max-w-9xl  ">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] rounded-xl mx-4 md:mx-0"
                >
                    {/* Subtle decoration */}
                    <div className="absolute inset-0 bg-[#000]/5 pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-2 md:py-4 rounded-xl  ">
                        {stats.map((stat, index) => (
                            <StatItem key={index} {...stat} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
