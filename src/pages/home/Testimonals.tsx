import React, { useState } from "react";

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
      text:
        "The collaboration was seamless and results-driven.",
      img: "https://i.pravatar.cc/150?img=56",
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="py-24 bg-gray-50 text-center overflow-hidden">
      <h3 className="text-blue-600 font-semibold">Testimonials</h3>
      <h2 className="text-3xl font-bold mt-2 mb-20">
        Opinions of our Clients
      </h2>

      {/* Orbit Container */}
      <div className="relative w-[620px] h-[420px] mx-auto">
        {/* Outer Oval */}
        <div className="absolute inset-0 rounded-[100%] border border-dashed border-blue-500"></div>

        {/* Middle Oval */}
        <div className="absolute inset-[45px] rounded-[50%] border border-dashed border-blue-400"></div>

        {/* Inner Oval */}
        <div className="absolute inset-[100px] rounded-[100%] border border-dashed border-blue-300"></div>

        {/* Orbit Avatars (NO background / NO border) */}
        {testimonials.map((item, index) => {
          const angle = (index / testimonials.length) * 360;

          return (
            <img
              key={index}
              src={item.img}
              alt={item.name}
              onClick={() => setCurrent(index)}
              className="absolute w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110"
              style={{
                top: "50%",
                left: "50%",
                transform: `
                  rotate(${angle}deg)
                  translateX(230px)
                  translateY(80px)
                  rotate(-${angle}deg)
                `,
              }}
            />
          );
        })}

        {/* Center Card */}
        <div className="absolute inset-[130px] bg-white rounded- shadow- flex flex-col items-center justify-center px-6 py-5">
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
          className="absolute right-[-70px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow hover:bg-blue-600 hover:text-white"
        >
          →
        </button>
      </div>
    </section>
  );
}
