import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
        id: 1,
        name: "Sindhu Rajput",
        role: "Global Operations Manager",
        comment: "In the Last six months we have seen our organizational profitability increase Significantly thanks in large practices around resource management and global resourcing of our projects",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        fullDetails: "Wealth Zone Group AI implemented a comprehensive resource management suite that allowed us to visualize our global talent pool in real-time. This led to a 25% increase in project efficiency and a direct impact on our bottom line within the first quarter."
    },
    {
        id: 2,
        name: "Alex Thompson",
        role: "CTO, TechFlow",
        comment: "Wealth Zone Group AI transformed our operations. Their intelligent systems reduced our overhead by 40% in just six months.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
        fullDetails: "The AI-driven automation tools provided by WZG-AI handled our repetitive backend tasks with 99.9% accuracy. This allowed our engineering team to focus on core product innovation instead of maintenance."
    },
    {
        id: 3,
        name: "Sarah Chen",
        role: "Product Manager, InnovateX",
        comment: "The level of technical expertise and the seamless integration process was unlike anything we've experienced before. Highly recommended.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
        fullDetails: "Integrating WZG-AI's solution into our existing tech stack was surprisingly smooth. Their team provided 24/7 support throughout the transition, ensuring zero downtime for our global users."
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

// Separate component for orbiting item to use hooks safely
const OrbitItem = ({ index, total, duration, rx, ry, isActive, onClick, children }: any) => {
    // We can't use useTime hook inside a conditional map easily if we want resizing to work without full re-mount,
    // but here we are mounting clean components.
    // For simplicity, let's use standard CSS animation or useTime if we import it.
    // Since useTime is from framer-motion, let's use it.

    // However, useTime returns a MotionValue.
    // We need to calculate x and y based on time.

    // NOTE: If useTime is not available in the installed framer-motion version, we might need a requestAnimationFrame loop.
    // Assuming standard framer-motion usage.

    const [angle, setAngle] = useState((index / total) * 360);

    useEffect(() => {
        let animationFrame: number;
        const startTime = Date.now();
        const startAngle = (index / total) * 360;

        const animate = () => {
            const now = Date.now();
            const elapsed = (now - startTime) / 1000; // seconds
            const newAngle = startAngle + (elapsed / duration) * 360;
            setAngle(newAngle);
            animationFrame = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, [index, total, duration]);

    // Calculate position
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * rx;
    const y = Math.sin(rad) * ry;

    return (
        <div
            className="absolute top-1/2 left-1/2 pointer-events-auto"
            style={{
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                transition: 'transform 16ms linear' // smooth out frame updates
            }}
        >
            <button
                onClick={onClick}
                className={`w-12 h-12 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95 ${isActive ? 'scale-125 border-blue-500 z-10' : 'scale-100 opacity-60'}`}
            >
                {children}
            </button>
        </div>
    );
};
