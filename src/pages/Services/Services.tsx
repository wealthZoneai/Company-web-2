import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
    viewport: { once: true }
};

const ServiceCard: React.FC<{
    title: string;
    description: string;
    items: string[];
    icon: string;
    color: string;
}> = ({ title, description, items, icon, color }) => (
    <motion.div
        variants={fadeInUp}
        className={`bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden`}
    >
        <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-10 rounded-bl-[100%] transition-transform group-hover:scale-110`} />

        <div className="text-5xl mb-6">{icon}</div>
        <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{title}</h3>
        <p className="text-gray-600 mb-8 leading-relaxed font-medium">
            {description}
        </p>

        <ul className="space-y-4">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-bold group/item">
                    <span className="w-2 h-2 rounded-full bg-blue-600 group-hover/item:scale-150 transition-transform" />
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

export default function Services() {
    return (
        <div className="bg-slate-50 min-h-screen font-sans">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 bg-[#1457AB] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter"
                    >
                        Our Technical <br />
                        <span className="text-blue-300">Expertise</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto font-medium"
                    >
                        We provide end-to-end digital transformation solutions powered by Artificial Intelligence and Cloud computing to drive your business forward.
                    </motion.p>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                >
                    <ServiceCard
                        title="WZG-AI SOLUTIONS"
                        icon="🤖"
                        color="bg-blue-600"
                        description="Harness the power of AI to automate complex processes and gain deeper insights into your business data."
                        items={[
                            "Artificial Intelligence Systems",
                            "Advanced Software Development",
                            "Business Intelligence Platforms",
                            "Predictive Analytics & ML Models"
                        ]}
                    />
                    <ServiceCard
                        title="Digital Services"
                        icon="🌐"
                        color="bg-orange-500"
                        description="Scale your digital presence with secure, robust infrastructure and strategic management."
                        items={[
                            "Cybersecurity Infrastructure",
                            "Strategic IT Consulting",
                            "HR & Payroll Solutions",
                            "Professional Coaching & Training"
                        ]}
                    />
                    <ServiceCard
                        title="Business Intelligence"
                        icon="📊"
                        color="bg-pink-500"
                        description="Data-driven strategies that optimize your performance and cloud infrastructure for maximum efficiency."
                        items={[
                            "Cloud Strategy & Migration",
                            "Fullstack Application Ecosystems",
                            "Real-time Data Reporting",
                            "Performance Optimization"
                        ]}
                    />
                    <ServiceCard
                        title="Staffing Development"
                        icon="👥"
                        color="bg-cyan-500"
                        description="Stable, expert support for your internal operations and specialized staffing to bridge the talent gap."
                        items={[
                            "Internal App Stability Support",
                            "Managed Service Desk",
                            "On-demand IT Staffing",
                            "24/7 Technical Support"
                        ]}
                    />
                </motion.div>
            </section>

            {/* Process Section */}
            <section className="bg-white py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black text-gray-900 mb-4">Our Roadmap to Success</h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-blue-100 -z-0" />

                        {[
                            { step: '01', title: 'Consult', icon: '💬', desc: 'Understanding your unique business challenges.' },
                            { step: '02', title: 'Strategize', icon: '📝', desc: 'Planning the perfect technical roadmap.' },
                            { step: '03', title: 'Implement', icon: '⚙️', desc: 'Precise development/deployment of solutions.' },
                            { step: '04', title: 'Support', icon: '🛠️', desc: 'Continuous optimization and maintenance.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeInUp}
                                transition={{ delay: i * 0.15 }}
                                className="relative z-10 text-center"
                            >
                                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg text-4xl group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <div className="text-blue-600 font-black text-xl mb-2">{item.step}</div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                <p className="text-gray-500 font-medium px-4">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-gradient-to-br from-blue-700 to-blue-900 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
                >
                    <h3 className="text-3xl md:text-5xl font-black mb-8">Ready to Elevate Your Business?</h3>
                    <p className="text-xl text-blue-100 mb-12 opacity-90 max-w-2xl mx-auto font-medium">
                        Our experts are ready to help you implement state of the art AI and cloud solutions.
                    </p>
                    <button className="bg-white text-blue-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 hover:scale-105 transition-all shadow-xl">
                        Schedule a Consultation
                    </button>
                </motion.div>
            </section>

        </div>
    );
}
