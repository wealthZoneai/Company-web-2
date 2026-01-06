import React from 'react';
import { motion } from 'framer-motion';

const FloatBlob: React.FC<{ className: string; duration: number }> = ({ className, duration }) => {
    return (
        <motion.div
            className={`absolute rounded-full blur-[120px] ${className}`}
            animate={{
                x: [0, 50, -50, 0],
                y: [0, -50, 50, 0],
                scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
};

const AnimatedBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <FloatBlob className="bg-blue-200/40 w-[40rem] h-[40rem] -top-40 -left-40" duration={15} />
            <FloatBlob className="bg-purple-200/40 w-[45rem] h-[45rem] -bottom-40 -right-40" duration={18} />
            <FloatBlob className="bg-cyan-100/30 w-96 h-96 top-1/4 right-1/4" duration={12} />
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
        </div>
    );
};

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
    // Extract video ID from URL (handles multiple formats)
    const videoId = service.videoUrl.split('v=')[1]?.split('&')[0];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-white flex flex-col h-full cursor-pointer hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-1 transition-all duration-300"
        >
            {/* Header Content Area (Media) */}
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
                {/* Initial Static Image */}
                <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                />

                {/* Hover Video Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none">
                    <iframe
                        className="absolute inset-0 w-full h-full scale-[1.25] pointer-events-none"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
                        title={service.title}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        style={{ filter: 'grayscale(0.2) contrast(1.1)' }}
                    />
                </div>

                {/* Visual Polish Layer */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
            </div>

            {/* Footer Area (Titles) */}
            <div className="p-5 text-center bg-white border-t border-gray-50 flex-grow flex flex-col items-center justify-center">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-300 tracking-tight leading-snug">
                    {service.title}
                </h3>
                <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
        </motion.div>
    );
};

export default function OurServices() {
    return (
        <section className="relative py-8 px-6 bg-white overflow-hidden">
            <AnimatedBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-black text-blue-900 tracking-tight mb-4"
                    >
                        Our Services
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
