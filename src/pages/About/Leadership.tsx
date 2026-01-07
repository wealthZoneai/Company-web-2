import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLightbulb, FaUsers, FaBookmark, FaUserFriends, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Local Asset Imports
import medamLogo from '../../assets/images/logo/medam.png';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string; // Using 'R' placeholder for now
}

const teamMembers: TeamMember[] = [
    { id: 1, name: "Ravi Teja", role: "UI/UX DESIGNER", description: "Creative designer focused on user-centric digital experiences.", image: "R" },
    { id: 2, name: "Ravi Teja", role: "Frontend Developer", description: "Expert in building responsive and performant web applications.", image: "R" },
    { id: 3, name: "Ravi Teja", role: "UI/UX DESIGNER", description: "Specialist in accessible design and interactive prototypes.", image: "R" },
    { id: 4, name: "Ravi Teja", role: "UI/UX DESIGNER", description: "Passionate about crafting intuitive and beautiful interfaces.", image: "R" },
    { id: 5, name: "Ravi Teja", role: "Backend Developer", description: "Architecting robust server-side solutions.", image: "R" }, // Added to demonstrate scrolling
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
            <div className=" space-y-6">
                {/* --- Our Leadership Section --- */}
                <div className="space-y-6">
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
                        <div className="bg-white border border-blue-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300 flex flex-col items-center text-center max-w-sm">
                            <div className="w-40 h-40 mb-6 relative group">
                                <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
                                <img
                                    src={medamLogo}
                                    alt="B.Sri Lakshmi"
                                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl relative z-10"
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-[#0B52A0] font-bold text-2xl tracking-tight">B.Sri Lakshmi</h3>
                                <p className="text-blue-600 font-bold uppercase text-sm tracking-widest">Founder & CEO</p>
                                <p className="text-gray-500 text-sm font-medium">MBA (Finance & IT)</p>
                                <div className="w-12 h-1 bg-blue-600 mx-auto my-4 rounded-full" />
                                <p className="text-gray-600 text-sm leading-relaxed px-4">
                                    Visionary Leader with 12 Years of experience in technology and business innovation
                                </p>
                            </div>
                        </div>
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
                    <div className="w-full h-80 bg-gray-300 rounded-none overflow-hidden relative group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                            alt="Life at Wealth zone ai"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* --- Our Team Section (Carousel) --- */}
                <div className="space-y-4">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl md:text-3xl font-bold text-blue-700">
                            Our Team
                        </h2>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 md:px-8 pb-2">

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
                                        <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 h-full shadow-sm group">
                                            <div className="w-20 h-20 bg-[#0B52A0] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md group-hover:scale-110 transition-transform duration-300 ring-4 ring-blue-50">
                                                {member.image}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                                                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mt-1">{member.role}</p>
                                                <p className="text-xs text-gray-500 mt-3 line-clamp-2">{member.description}</p>
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
