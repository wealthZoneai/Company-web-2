import React from "react";
import {
  FaChartLine,
  FaCode,
  FaCloud,
  FaRobot,
  FaBriefcase,
  FaBullhorn,
  FaUserCog,
  FaMapMarkedAlt,
  FaBug,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
export default function Services() {
  return (
    <div className="bg-gray-50">

      {/* ================= HEADER ================= */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              WZ
            </div>
            <div>
              <h1 className="font-bold text-blue-700">
                WEALTH ZONE GROUP AI
              </h1>
              <p className="text-xs text-gray-500">
                International Private Limited
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a>Home</a>
            <a>About</a>
            <a>Projects</a>
            <a>Staffing</a>
            <a>Our Team</a>
            <a className="text-blue-600">Services</a>
            <a>Careers</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71)",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
              Unlock Actionable Insight With <br /> WZG-AI Data Analytics
            </h2>
            <p className="text-sm mb-6">
              Transform your raw data into tangible business growth and gain a
              competitive edge in your industry.
            </p>
            <button className="bg-white text-blue-700 px-6 py-3 rounded font-medium">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        {[
          "Drive Growth",
          "Enhance Efficiency",
          "Mitigate Risks",
        ].map((title, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">
              Utilize predictive analytics to identify opportunities and
              optimize your strategy for maximum impact.
            </p>
          </div>
        ))}
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="font-semibold mb-6">
          Our Comprehensive Analytics Services
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: FaChartLine, title: "Predictive Analytics" },
            { icon: FaCode, title: "Software Development" },
            { icon: FaCloud, title: "Cloud Services" },
            { icon: FaRobot, title: "AI Agents" },
            { icon: FaBriefcase, title: "BPO Services" },
            { icon: FaBullhorn, title: "Marketing Services" },
            { icon: FaUserCog, title: "Customer Support" },
            { icon: FaMapMarkedAlt, title: "Google Mapping" },
            { icon: FaBug, title: "Software Testing" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <item.icon className="text-blue-600 text-2xl mb-3" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Unlock powerful insights to make smarter, faster business
                decisions.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-gray-100 py-14">
        <h2 className="text-center font-semibold mb-10">Our Process</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {["Data Collection", "Processing & Analysis", "Insight Delivery"].map(
            (step, i) => (
              <div key={i}>
                <div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-3">
                  {i + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-center font-semibold mb-10">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Ravi Teja",
              text:
                "WZG-AI’s predictive analytics model was a game-changer for our growth.",
            },
            {
              name: "Revanth",
              text:
                "The real-time dashboards gave us visibility and faster decisions.",
            },
            {
              name: "Lithish",
              text:
                "They didn’t just provide a service, they became our partner.",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">{t.name}</h4>
              <p className="text-sm text-gray-600">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
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

            <div className="flex gap-3">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>

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

          <div>
            <h4 className="text-white mb-3 font-semibold">
              Stay up to date
            </h4>
            <div className="flex bg-gray-700 rounded overflow-hidden">
              <input
                placeholder="Your email address"
                className="bg-transparent px-4 py-3 text-sm w-full outline-none text-white"
              />
              <button className="bg-blue-600 px-4">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-4 text-center text-sm">
          © 2026 Wealth Zone Group AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}