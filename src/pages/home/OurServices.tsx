import React from 'react';
import { motion } from 'framer-motion';

interface Service {
    id: string;
    title: string;
    videoUrl: string;
    image: string;
}

const services: Service[] = [
    {
        id: "web-dev",
        title: "Web Design & Development",
        videoUrl: "https://www.youtube.com/watch?v=g7xkVEWrX8E",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "mobile-app",
        title: "Mobile App Development",
        videoUrl: "https://www.youtube.com/watch?v=J4xNhYeaGkI",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "e-commerce",
        title: "E-Commerce Website Design",
        videoUrl: "https://www.youtube.com/watch?v=sJGVcb5fn2c",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "marketing",
        title: "Digital Marketing & SEO",
        videoUrl: "https://www.youtube.com/watch?v=GGf1JjSAKP4",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "cms",
        title: "CMS Websites & Integration",
        videoUrl: "https://www.youtube.com/watch?v=Q3oItpVa9fs",
        image: "https://whitebunnie.com/wp-content/uploads/2024/07/Content-management-system.webp"
    },
    {
        id: "graphic",
        title: "Graphic & Creative Designs",
        videoUrl: "https://www.youtube.com/watch?v=kPahWDoJ2cg",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop"
    }
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
    // Extract video ID from URL
    const videoId = service.videoUrl.split('v=')[1];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            {/* Media Area */}
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                {/* Image */}
                <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Video Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <iframe
                        className="absolute inset-0 w-full h-full scale-[1.5] pointer-events-none"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1`}
                        title={service.title}
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                    />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
            </div>

            {/* Content Area */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                </h3>
            </div>
        </motion.div>
    );
};

export default function OurServices() {
    return (
        <section className="relative py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4"
                    >
                        Our Services
                    </motion.h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Comprehensive digital solutions tailored to elevate your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
