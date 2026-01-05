import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../assets/images/blue_logo.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-50 pt-24 pb-12 overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <NavLink to="/" className="inline-block mb-8">
                            <img src={logo} alt="Wealth Zone Group AI" className="h-12 w-auto" />
                        </NavLink>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Empowering the next generation of digital excellence through
                            intelligent AI solutions and scalable technology infrastructures.
                        </p>
                        <div className="flex gap-4">
                            {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
                                <motion.a
                                    key={social}
                                    href="#"
                                    whileHover={{ y: -3 }}
                                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-600/50 transition-all shadow-sm"
                                >
                                    <span className="sr-only">{social}</span>
                                    <div className="w-5 h-5 bg-current opacity-50" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-8 text-lg">Platform</h4>
                        <ul className="space-y-4">
                            {['Services', 'Products', 'Programs', 'Solutions'].map(link => (
                                <li key={link}>
                                    <NavLink to={`/${link.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                                        {link}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-8 text-lg">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Careers', 'Partners', 'Contact'].map(link => (
                                <li key={link}>
                                    <NavLink to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                                        {link}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-8 text-lg">Newsletter</h4>
                        <p className="text-gray-600 mb-6 font-medium">Get the latest updates on AI and technology.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 text-gray-900 focus:outline-none focus:border-blue-600/50 transition-all shadow-sm"
                            />
                            <button className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 rounded-xl text-white font-bold text-sm hover:bg-blue-700 transition-all">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm font-medium">
                        © {currentYear} Wealth Zone Group AI. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Background Ornament */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
        </footer>
    );
}
