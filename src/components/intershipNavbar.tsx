import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo/oyster_techologies_logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavItemProps {
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, onClick }) => {
    return (
        <motion.li
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
        >
            <NavLink
                to={to}
                onClick={onClick}
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
                { name: "Courses", path: "/internship" },

        { name: "Reviews", path: "/reviews" },


        
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-4`}
        >
            <nav className="max-w-7xl mx-auto px-4 md:px-0 flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/internship" className="flex items-center group">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={logo}
                        alt="Wealth Zone Group AI"
                        className="h-10 md:h-13 w-auto transition-all"
                    />
                </NavLink>

                {/* Desktop Nav Items */}
                <ul className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <NavItem key={link.path} to={link.path}>
                            {link.name}
                        </NavItem>
                    ))}
                </ul>

                {/* Desktop CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <NavLink
                            to="/contact"
                            className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20"
                        >
                            Contact Us
                        </NavLink>
                    </motion.div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
                    >
                        <ul className="flex flex-col gap-1 p-6">
                            {navLinks.map((link) => (
                                <motion.li key={link.path}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `block px-4 py-3 text-base font-bold rounded-xl transition-all ${isActive
                                                ? "bg-blue-50 text-blue-600"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mt-4"
                            >
                                <NavLink
                                    to="/contact"
                                    className="block w-full py-4 bg-blue-600 text-white text-center font-bold rounded-2xl shadow-lg shadow-blue-600/20"
                                >
                                    Get Started
                                </NavLink>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
