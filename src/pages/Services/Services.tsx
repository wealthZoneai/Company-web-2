import React from "react";
import {
  FiBarChart2,
  FiCode,
  FiHeadphones,
  FiCloud,
  FiCpu,
  FiBriefcase,
  FiTrendingUp,
  FiClipboard,
  FiShield,
  FiUser,
  FiMap,
  FiCheckCircle,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

export default function Services() {
  const services = [
    { title: "Data Analytics", icon: FiBarChart2, bg: "bg-blue-100", color: "text-blue-600" },
    { title: "Software Development", icon: FiCode, bg: "bg-green-100", color: "text-green-600" },
    { title: "IT Consulting", icon: FiHeadphones, bg: "bg-purple-100", color: "text-purple-600" },
    { title: "Cloud Services", icon: FiCloud, bg: "bg-sky-100", color: "text-sky-600" },
    { title: "AI Agents", icon: FiCpu, bg: "bg-red-100", color: "text-red-600" },
    { title: "BPO Services", icon: FiBriefcase, bg: "bg-yellow-100", color: "text-yellow-600" },
    { title: "Marketing Services", icon: FiTrendingUp, bg: "bg-pink-100", color: "text-pink-600" },
    { title: "Medical Coding", icon: FiClipboard, bg: "bg-cyan-100", color: "text-cyan-600" },
    { title: "Content Moderation", icon: FiShield, bg: "bg-indigo-100", color: "text-indigo-600" },
    { title: "Customer Support", icon: FiUser, bg: "bg-emerald-100", color: "text-emerald-600" },
    { title: "Google Mapping", icon: FiMap, bg: "bg-lime-100", color: "text-lime-600" },
    { title: "Software Testing", icon: FiCheckCircle, bg: "bg-orange-100", color: "text-orange-600" },
  ];

  return (
    <div className="bg-gray-50">

      {/* ================= OUR SERVICES HEADING ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <h1 className="text-center text-4xl font-bold text-blue-700">
          Our Services
        </h1>
      </section>

      {/* ================= CONTENT SECTION ================= */}
<section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
     <h2 className="text-2xl font-semibold mb-4 leading-snug">
  <span className="text-blue-700">
    Comprehensive Technology
  </span>
  <br />
  <span className="text-black">
    Solutions by WZG-AI
  </span>
</h2>


          <p className="text-gray-600 mb-6 leading-relaxed">
            We provide a comprehensive suite of intelligent digital solutions
            designed to empower your business at every stage of growth.
            From digital transformation and process optimization to scalable
            platforms and innovative solutions, we help businesses adapt to
            change, stay competitive, and unlock new opportunities.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Explore Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Services"
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* ================= EXPLORE OUR EXPERTISE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl font-bold mb-4">
          Explore Our Expertise
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          From data-driven insights to robust software solutions, we offer a wide
          range of services to meet your business needs.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-300"
              >
                {/* COLORED LOGO */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 ${service.bg}`}
                >
                  <Icon size={26} className={service.color} />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  Unlock powerful insights from your data to make smarter,
                  faster business decisions.
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* ================= CTA SECTION ================= */}
<section className="bg-blue-100 py-20">
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
      Ready to power your wealth with Intelligence?
    </h2>

    <p className="text-gray-700 mb-8 leading-relaxed">
      Connect with our experts to discover how WZG-AI can help you
      achieve sustainable growth through intelligent technology solutions.
    </p>

    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
      Contact Us
    </button>
  </div>
</section>

{/* ================= FOOTER ================= */}
  
    </div>
    
  );
}
