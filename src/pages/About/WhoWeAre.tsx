import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, fadeInUp } from './Shared';

export default function WhoWeAre() {
    return (
        <motion.section {...fadeInUp} className="mb-24">
            <SectionHeading>Who We Are</SectionHeading>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg max-w-5xl">
                <p>
                    Wealth Zone Group AI is a team of dedicated professionals who are committed to providing the best possible IT services to our clients.
                    We specialize in Artificial Intelligence, Big Data, and Cloud Computing.
                    Our goal is to help businesses of all sizes to achieve their full potential by providing them with the tools and resources they need to succeed in today's digital landscape.
                </p>
                <p>
                    Our team of experts has years of experience in the IT industry and is dedicated to staying up-to-date with the latest trends and technologies.
                    We work closely with our clients to understand their needs and provide them with customized solutions that meet their specific requirements.
                </p>
            </div>
        </motion.section>
    );
}