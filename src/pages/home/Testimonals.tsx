import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sindhu Rajput",
      role: "Business Head",
      text:
        "In the last six months we have seen our organizational profitability increase significantly thanks to improved resource management and global resourcing of our projects.",
      img: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Rahul Verma",
      role: "CTO",
      text:
        "WZG-AI delivered intelligent solutions that improved our operational efficiency and scalability.",
      img: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Anita Sharma",
      role: "Product Manager",
      text:
        "Professional team, timely delivery, and strong technical expertise.",
      img: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Karan Mehta",
      role: "CEO",
      text:
        "Their AI-driven approach helped us modernize faster than expected.",
      img: "https://i.pravatar.cc/150?img=22",
    },
    {
      name: "Neha Kapoor",
      role: "Operations Lead",
      text: "The collaboration was seamless and results-driven.",
      img: "https://i.pravatar.cc/150?img=56",
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="relative py-24 bg-white overflow-hidden flex items-center justify-center min-h-[900px]">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">

        {/* Header */}
        <div className="text-center absolute top-24 z-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-black text-blue-700 mb-2"
          >
            Testimonials
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
          >
            Opinions of our Clients
          </motion.h3>
        </div>

        {/* Orbit System */}
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center mt-32 md:mt-0">

          <div className="absolute w-[80%] h-[80%] border border-blue-100 rounded-full" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full border border-blue-50 rounded-full"
          >
            {testimonials.map((t, i) => {
              const angle = (i * 360) / testimonials.length;
              const radius =
                typeof window !== "undefined" && window.innerWidth < 768
                  ? 150
                  : 300;

              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <button
                      onClick={() => setCurrent(i)}
                      className={`w-12 h-12 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg overflow-hidden transition-all duration-500 hover:scale-110 active:scale-95 ${
                        current === i
                          ? "scale-125 border-blue-500 z-10"
                          : "opacity-60"
                      }`}
                    >
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Center Card */}
          <div className="absolute inset-[130px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center px-6 py-5 text-center">
            <img
              src={testimonials[current].img}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full mb-4"
            />

            <p className="text-gray-600 italic text-sm mb-4 leading-relaxed">
              “{testimonials[current].text}”
            </p>

            <h4 className="font-semibold">
              {testimonials[current].name}
            </h4>
            <p className="text-xs text-gray-500">
              {testimonials[current].role}
            </p>
          </div>

          {/* Navigation */}
          <button
            onClick={() =>
              setCurrent(
                (current - 1 + testimonials.length) %
                  testimonials.length
              )
            }
            className="absolute left-[-70px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow hover:bg-blue-600 hover:text-white"
          >
            ←
          </button>

          <button
            onClick={() =>
              setCurrent((current + 1) % testimonials.length)
            }
            className="absolute right-[-70px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow hover:bg-blue- hover:text-white"
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
}
