import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { servicesData, ServiceDetailItem } from './servicesData';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const service = servicesData.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h2>
                    <Link to="/services" className="text-blue-600 hover:underline">Back to Services</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-white min-h-screen font-sans overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/60"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <button
                        onClick={() => navigate('/services')}
                        className="absolute top-[-80px] left-6 md:left-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/30 transition-all text-sm font-medium"
                    >
                        <FaArrowLeft /> Back to Services
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl text-white"
                    >
                        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-10 max-w-3xl">
                            {service.fullDescription}
                        </p>
                        <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-transform transform hover:scale-105 active:scale-95 shadow-lg">
                            Get A Quote
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {service.benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className={`w-12 h-12 ${service.iconBgClass} ${service.iconColorClass} rounded-2xl flex items-center justify-center text-xl mb-6`}>
                                    {index === 0 ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg> :
                                        index === 1 ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> :
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                    }
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comprehensive Services / Features */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive {service.title} Services</h2>
                        <p className="text-gray-600 max-w-2xl text-lg">We provide end-to-end solutions designed to address your most complex challenges and drive measurable results.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className={`w-10 h-10 ${service.iconBgClass} rounded-lg flex items-center justify-center mb-6`}>
                                    <div className={`w-2 h-2 rounded-full ${service.iconColorClass.replace('text-', 'bg-')}`}></div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-6 bg-blue-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-16">
                        Hear directly from our satisfied clients about how WZG-AI transformed their data into a competitive advantage.
                    </p>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-0.5 bg-gray-200 z-0"></div>

                        {service.process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3 }}
                                className="relative z-10 flex flex-col items-center"
                            >
                                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold text-blue-600 mb-6 border-4 border-blue-50">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 max-w-xs mx-auto">{step.description}</p>
                                <div className="mt-4 text-sm font-medium text-gray-400 uppercase tracking-wider">Step {step.step}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServiceDetail;
