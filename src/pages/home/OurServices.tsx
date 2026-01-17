import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Local Service Image Imports
import WebDevImg from '../../assets/images/Ourserves/WebDevlopment.avif';
import MobileImg from '../../assets/images/Ourserves/Mobile.avif';
import EcomersImg from '../../assets/images/Ourserves/Ecomers.avif';
import MarketingImg from '../../assets/images/Ourserves/Marketing.avif';
import CmsImg from '../../assets/images/Ourserves/Cms.webp';
import GraphicImg from '../../assets/images/Ourserves/Graphic.avif';

interface Service {
    id: string;
    title: string;
    description: string; // Added brief description for corporate look
    image: string;
    link: string;
}

const services: Service[] = [
    {
        id: "web-dev",
        title: "Web Design & Development",
        description: "Create stunning, responsive websites that drive business growth.",
        image: WebDevImg,
        link: "/services/web-dev"
    },
    {
        id: "mobile-app",
        title: "Mobile App Development",
        description: "Native and cross-platform mobile solutions for modern enterprises.",
        image: MobileImg,
        link: "/services/mobile-app"
    },
    {
        id: "e-commerce",
        title: "E-Commerce Solutions",
        description: "Scalable online stores built for maximum conversion and performance.",
        image: EcomersImg,
        link: "/services/e-commerce"
    },
    {
        id: "marketing",
        title: "Digital Marketing & SEO",
        description: "Data-driven strategies to boost your online presence and reach.",
        image: MarketingImg,
        link: "/services/marketing"
    },
    {
        id: "cms",
        title: "CMS Integration",
        description: "Flexible content management systems tailored to your workflow.",
        image: CmsImg,
        link: "/services/cms"
    },
    {
        id: "graphic",
        title: "Creative Design",
        description: "Impactful visual identities that tell your brand story.",
        image: GraphicImg,
        link: "/services/graphic"
    }
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group bg-white border-b-4 border-transparent hover:border-blue-600 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                </p>

                <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wider group-hover:gap-3 transition-all"
                >
                    Read More <FaArrowRight />
                </Link>
            </div>
        </motion.div>
    );
};

export default function OurServices() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        What We Do
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        Transforming businesses through technology, innovation, and collective knowledge.
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
