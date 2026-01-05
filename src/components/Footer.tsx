import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../assets/images/blue_logo.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        platform: [
            { name: 'Services', href: '/services' },
            { name: 'Products', href: '/products' },
            { name: 'Programs', href: '/programs' },
            { name: 'Solutions', href: '/solutions' },
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Careers', href: '/careers' },
            { name: 'Partners', href: '/partners' },
            { name: 'Contact', href: '/contact' },
        ],
        social: [
            {
                name: 'Twitter', icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84a4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                )
            },
            {
                name: 'LinkedIn', icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.775-.773 1.775-1.729V1.729C24 .774 23.206 0 22.225 0z" /></svg>
                )
            },
            {
                name: 'GitHub', icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                )
            }
        ]
    };

    return (
        <footer className="relative bg-[#0F172A] pt-24 pb-12 overflow-hidden border-t border-slate-800">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-white">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <NavLink to="/" className="inline-block mb-8">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src={logo}
                                alt="Wealth Zone Group AI"
                                className="h-12 w-auto brightness-0 invert"
                            />
                        </NavLink>
                        <p className="text-slate-400 leading-relaxed mb-8 text-base">
                            Empowering the next generation of digital excellence through
                            intelligent AI solutions and scalable technology infrastructures.
                        </p>
                        <div className="flex gap-4">
                            {footerLinks.social.map(social => (
                                <motion.a
                                    key={social.name}
                                    href="#"
                                    whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.5)' }}
                                    className="w-11 h-11 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-300"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h4 className="text-white font-bold mb-8 text-lg flex items-center gap-2">
                            Platform
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.platform.map(link => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.href}
                                        className="text-slate-400 hover:text-blue-400 transition-all duration-300 flex items-center group gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-bold mb-8 text-lg flex items-center gap-2">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map(link => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.href}
                                        className="text-slate-400 hover:text-blue-400 transition-all duration-300 flex items-center group gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h4 className="text-white font-bold mb-8 text-lg flex items-center gap-2">
                            Newsletter
                        </h4>
                        <p className="text-slate-400 mb-6 text-sm leading-relaxed font-medium">
                            Join our community to receive the latest updates on AI, wealth intelligence, and industry insights.
                        </p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 pl-6 pr-24 text-white focus:outline-none focus:border-blue-500/50 transition-all duration-300 placeholder:text-slate-600"
                            />
                            <button className="absolute right-2 top-2 bottom-2 px-5 bg-blue-600 rounded-xl text-white font-bold text-sm hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-95">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-500 text-sm font-medium order-2 md:order-1">
                        © {currentYear} <span className="text-slate-300">Wealth Zone Group AI</span>. All rights reserved.
                    </p>
                    <div className="flex gap-10 order-1 md:order-2">
                        <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-all duration-300 font-medium">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-all duration-300 font-medium">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
