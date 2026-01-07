import React from "react";
import { FiCpu, FiZap, FiUser, FiSettings, FiTrendingUp } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function DataAnalytics() {

  const handleCardClick = (name) => {
    console.log("Card clicked:", name);
    // later you can add navigate("/some-route")
  };

  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          className="absolute inset-0 w-full h-full object-cover"
          alt="AI Analytics"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-white text-4xl font-bold mb-4">
              Unlock Actionable Insight With <br />
              <span className="text-blue-400">WZG-AI Data Analytics</span>
            </h1>
            <p className="text-gray-200 mb-6">
              Transform your raw data into tangible business growth and gain a
              competitive edge in your industry.
            </p>

            {/* ✅ ONLY ADDITION */}
            <button
              onClick={() => handleCardClick("Learn More")}
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURE CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "24/7 Automation",
              desc: "Automate repetitive tasks and workflows around the clock.",
              icon: FiZap,
            },
            {
              title: "Advanced Data Analysis",
              desc: "Process complex information in real-time with AI agents.",
              icon: FiTrendingUp,
            },
            {
              title: "Personalized Interactions",
              desc: "Deliver tailored customer experiences with intelligent agents.",
              icon: FiUser,
            },
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => handleCardClick(item.title)}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition"
            >
              <item.icon className="text-blue-600 text-2xl mb-3" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHAT ARE AI AGENTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">What are AI Agents?</h2>
          <p className="text-gray-600 leading-relaxed">
            AI Agents are autonomous systems designed to understand, learn, and
            execute complex tasks across your digital ecosystem — freeing your
            human teams to focus on strategy and innovation.
          </p>
        </div>

        <img
          onClick={() => handleCardClick("AI Agents Image")}
          src="https://images.unsplash.com/photo-1581092334651-ddf26d9c1f45"
          className="rounded-xl shadow-lg cursor-pointer hover:scale-105 transition"
          alt="AI Agent"
        />
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Our streamlined process ensures seamless AI integration from
            discovery to optimization.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Discovery & Setup",
                desc: "We analyze your needs and configure AI agents.",
                icon: FiCpu,
              },
              {
                title: "Integration",
                desc: "Agents integrate seamlessly with your platforms.",
                icon: FiSettings,
              },
              {
                title: "Deployment & Optimization",
                desc: "Continuous monitoring for maximum impact.",
                icon: FiTrendingUp,
              },
            ].map((step, i) => (
              <div
                key={i}
                onClick={() => handleCardClick(step.title)}
                className="bg-white rounded-xl p-6 shadow cursor-pointer hover:shadow-xl transition"
              >
                <step.icon className="text-blue-600 text-2xl mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Trusted by Industry Leaders
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Ravi Teja",
                text:
                  "WZG-AI’s agents reduced response time by 40% and boosted customer satisfaction.",
              },
              {
                name: "Revanth",
                text:
                  "Their data analytics agents deliver insights in minutes instead of days.",
              },
            ].map((t, i) => (
              <div
                key={i}
                onClick={() => handleCardClick(t.name)}
                className="bg-white rounded-xl p-6 shadow text-left cursor-pointer hover:shadow-xl transition"
              >
                <FaQuoteLeft className="text-blue-600 mb-3" />
                <p className="text-gray-600 mb-4">{t.text}</p>
                <p className="font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
