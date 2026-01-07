import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLightbulb, FaUsers, FaBookmark, FaUserFriends, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string; // Using 'R' placeholder for now
}

const teamMembers = [
  {
    id: 1,
    name: "Henry Paul",
    role: "Legal Advisor [High Court]",
    description: "Provides legal guidance and compliance support for the organization.",
    image: "H",
  },
  {
    id: 2,
    name: "Sunil",
    role: "Cyber Security Manager",
    description: "Oversees cybersecurity strategy, risk management, and data protection.",
    image: "S",
  },
  {
    id: 3,
    name: "Venkata Jagadish",
    role: "Project Manager [Testing]",
    description: "Manages testing projects, timelines, and quality assurance processes.",
    image: "V",
  },
  {
    id: 4,
    name: "K. Ram Prasad",
    role: "Network Engineer",
    description: "Designs, maintains, and secures enterprise network infrastructure.",
    image: "K",
  },
  {
    id: 5,
    name: "G. Revanth",
    role: "Senior Developer",
    description: "Builds scalable applications and mentors junior developers.",
    image: "G",
  },
  {
    id: 6,
    name: "G. Rama Mohan",
    role: "Senior Developer",
    description: "Experienced in backend systems and application architecture.",
    image: "G",
  },
  {
    id: 8,
    name: "Sk. Pervez",
    role: "Senior Developer",
    description: "Focuses on full-stack development and system optimization.",
    image: "P",
  },
  {
    id: 9,
    name: "B. Raviteja",
    role: "Senior Developer",
    description: "Delivers robust features and ensures code quality standards.",
    image: "R",
  },
  {
    id: 10,
    name: "Y. Sravani",
    role: "Senior Developer",
    description: "Contributes to core development and performance improvements.",
    image: "Y",
  },
  {
    id: 11,
    name: "Ch. Nikhil",
    role: "UI/UX Designer",
    description: "Designs intuitive, user-centered interfaces and experiences.",
    image: "N",
  },
  {
    id: 12,
    name: "K. Sai Preethi",
    role: "DevOps Engineer",
    description: "Automates deployments and maintains CI/CD pipelines.",
    image: "K",
  },
  {
    id: 13,
    name: "M. Pradeep",
    role: "System Engineer",
    description: "Manages servers, system reliability, and infrastructure health.",
    image: "M",
  },
  {
    id: 14,
    name: "Ch. Sri Ram",
    role: "QA Tester",
    description: "Ensures software quality through manual and automated testing.",
    image: "S",
  },
  {
    id: 15,
    name: "M. Uma Maheshwari",
    role: "Accountant",
    description: "Handles financial records, reporting, and compliance.",
    image: "U",
  },
];


const Leadership: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [carouselWidth, setCarouselWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (carouselRef.current) {
                setCarouselWidth(carouselRef.current.offsetWidth);
            }
            if (typeof window !== 'undefined') {
                if (window.innerWidth < 640) setItemsPerPage(1);
                else if (window.innerWidth < 1024) setItemsPerPage(2);
                else setItemsPerPage(4);
            }
        };

        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, itemsPerPage]); // Auto-play

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (teamMembers.length - itemsPerPage + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + (teamMembers.length - itemsPerPage + 1)) % (teamMembers.length - itemsPerPage + 1));
    };

    return (
        <section className="bg-white px-6">
            <div className=" space-y-20">
                {/* --- Our Leadership Section --- */}
                <div className="space-y-12">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                            Our Leadership
                        </h2>
                        <p className="text-gray-600 font-medium">
                            Visionary leaders guiding our journey to excellence
                        </p>
                    </div>

                    <div className="flex justify-center gap-8 max-w-5xl mx-auto">
                        {/* Leader 1 */}
                        <div className="bg-white border border-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-16 h-16 bg-[#0B52A0] rounded-md flex items-center justify-center shrink-0 text-white text-2xl font-bold">
                                B
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-[#0B52A0] font-bold text-xl">B.Sri Lakshmi</h3>
                                <p className="text-[#0B52A0] font-bold">Founder & CEO</p>
                                <p className="text-gray-700 text-sm">MBA(Finance & IT)</p>
                                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                                    Visionary Leader with 12 Years of experience in technology and business innovation
                                </p>
                            </div>
                        </div>

                        {/* Leader 2
                        <div className="bg-white border border-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-16 h-16 bg-[#0B52A0] rounded-md flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                                B
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-[#0B52A0] font-bold text-xl">B.Chakravarthy</h3>
                                <p className="text-[#0B52A0] font-bold">Operation Manager</p>
                                <p className="text-gray-700 text-sm">MBA(Finance & IT)</p>
                                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                                    Strategic operations expert driving organizational excellence and growth.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* --- Values Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Innovation First */}
                    <div className="bg-white border border-gray-300 rounded-xl p-8 text-center space-y-4 hover:shadow-md transition-all">
                        <div className="w-12 h-12 mx-auto text-blue-600 text-3xl flex items-center justify-center">
                            <FaLightbulb />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Innovation First</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                            We constantly explore new technologies to deliver forward thinking solution.
                        </p>
                    </div>

                    {/* Collaboration */}
                    <div className="bg-white border border-gray-300 rounded-xl p-8 text-center space-y-4 hover:shadow-md transition-all">
                        <div className="w-12 h-12 mx-auto text-blue-600 text-3xl flex items-center justify-center">
                            <FaUsers />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Collaboration</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                            We build strong partnership with our client and within our team to achieves shared goals.
                        </p>
                    </div>

                    {/* Excellence */}
                    <div className="bg-white border border-gray-300 rounded-xl p-8 text-center space-y-4 hover:shadow-md transition-all">
                        <div className="w-12 h-12 mx-auto text-blue-600 text-3xl flex items-center justify-center">
                            <FaBookmark />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Excellence</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                            We are committed to the highest quality in everything we do, from code to customer services.
                        </p>
                    </div>

                    {/* People First */}
                    <div className="bg-white border border-gray-300 rounded-xl p-8 text-center space-y-4 hover:shadow-md transition-all">
                        <div className="w-12 h-12 mx-auto text-blue-600 text-3xl flex items-center justify-center">
                            <FaUserFriends />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">People First</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                            We invest in our team's growth and well-begin fostering a supportive environment.
                        </p>
                    </div>
                </div>

                {/* --- Life at Wealth zone ai --- */}
                <div className="space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center">
                        Life at a Wealth zone ai
                    </h2>
                    <div className="w-full h-80 bg-gray-300 rounded-none">
                        {/* Placeholder for video/image as per visual */}
                    </div>
                </div>

                {/* --- Our Team Section (Carousel) --- */}
                <div className="space-y-12 ">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl md:text-3xl font-bold text-blue-700">
                            Our Team
                        </h2>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 md:px-8">

                        {/* Left Arrow */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-blue-600 hover:bg-blue-50 transition-colors border border-gray-100 hidden md:flex items-center justify-center group"
                        >
                            <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-blue-600 hover:bg-blue-50 transition-colors border border-gray-100 hidden md:flex items-center justify-center group"
                        >
                            <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
                        </button>

                        <div className="overflow-hidden" ref={carouselRef}>
                            <motion.div
                                className="flex"
                                animate={{ x: -currentIndex * (carouselWidth / itemsPerPage) }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {teamMembers.map((member) => (
                                    <div
                                        key={member.id}
                                        style={{ width: `${100 / itemsPerPage}%` }}
                                        className="shrink-0 px-4"
                                    >
                                        <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 h-full shadow-sm">
                                            <div className="w-16 h-16 bg-[#0B52A0] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
                                                {member.image}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mt-1">{member.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Mobile Dots */}
                        <div className="flex justify-center gap-2 mt-8 md:hidden">
                            {Array.from({ length: Math.ceil(teamMembers.length) }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Leadership;
