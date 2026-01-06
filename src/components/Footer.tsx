import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#263238] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* LOGO */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              WZ
            </div>
            <h3 className="text-white font-semibold">
              WEALTH ZONE GROUP AI
            </h3>
          </div>

          <p className="text-sm mb-4">
            Empowering businesses with intelligent, scalable solutions.
          </p>

          <div className="flex gap-3 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white mb-3 font-semibold">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
            <li>Our Team</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-white mb-3 font-semibold">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-white mb-3 font-semibold">
            Stay up to date
          </h4>

          <div className="flex bg-gray-700 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent px-4 py-3 text-sm w-full outline-none text-white"
            />
            <button className="bg-blue-600 px-4 flex items-center justify-center">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © 2026 Wealth Zone Group AI. All rights reserved.
      </div>
    </footer>
  );
}
