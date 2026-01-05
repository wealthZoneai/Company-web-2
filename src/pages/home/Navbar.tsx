import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/blue_logo.png";

interface NavItemProps {
    to: string;
    children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
    return (
        <motion.li
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
        >
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `relative px-1 py-2 text-sm font-semibold transition-colors duration-300 ${isActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        {children}
                        {isActive && (
                            <motion.div
                                layoutId="nav-underline"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </>
                )}
            </NavLink>
        </motion.li>
    );
};

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm"
                    : "bg-transparent py-5"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="flex items-center group">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={logo}
                        alt="Wealth Zone Group AI"
                        className="h-10 w-auto"
                    />
                </NavLink>

                {/* Desktop Nav Items */}
                <ul className="hidden md:flex items-center gap-8">
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/about">About</NavItem>
                    <NavItem to="/services">Services</NavItem>
                </ul>

                {/* CTA Button */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block"
                >
                    <NavLink
                        to="/contact"
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20"
                    >
                        Get Started
                    </NavLink>
                </motion.div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
            </nav>
        </motion.header>
    );
}
