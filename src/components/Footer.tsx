import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../assets/images/blue_logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane, FaTwitter } from 'react-icons/fa';

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
       
       <footer className="bg-[#263238] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* LOGO & ABOUT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
              WZ
            </div>
            <div>
              <h3 className="font-semibold text-white">
                WEALTH ZONE GROUP AI
              </h3>
              <p className="text-xs text-gray-400">
                International Private Limited
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-4">
            Empowering businesses with intelligent, scalable, and future-ready
            digital solutions.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3">
            <a className="p-2 bg-gray-700 rounded hover:bg-blue-600">
              <FaFacebookF />
            </a>
            <a className="p-2 bg-gray-700 rounded hover:bg-blue-600">
              <FaTwitter />
            </a>
            <a className="p-2 bg-gray-700 rounded hover:bg-blue-600">
              <FaLinkedinIn />
            </a>
            <a className="p-2 bg-gray-700 rounded hover:bg-blue-600">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Our Team</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Status</li>
          </ul>
        </div>

        {/* STAY UP TO DATE */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Stay up to date
          </h4>

          <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent px-4 py-3 text-sm w-full outline-none text-white"
            />
            <button className="bg-blue-600 px-4 py-3 text-white">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © 2026 Wealth Zone Group AI. All rights reserved.
      </div>
    </footer>
    );
}
