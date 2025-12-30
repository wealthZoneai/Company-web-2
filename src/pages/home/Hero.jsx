import { motion } from "framer-motion";
import React from 'react'


export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50">
      
      {/* Animated background */}
      <AnimatedBackground />

      {/* Centered content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Wealth Zone Group AI
        </h1>

        <p className="mt-3 text-2xl md:text-3xl font-semibold text-blue-600">
          Powering The Future
        </p>

        <p className="mt-6 text-gray-600 text-lg">
          Delivering intelligent digital solutions that empower businesses to
          grow, innovate, and stay future-ready through AI, secure systems, and
          seamless user experiences.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-7 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Explore Services
          </button>
          <button className="px-7 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
            View Products
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Background Animations               */
/* ---------------------------------- */

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Large blobs */}
      <FloatBlob className="bg-blue-400/30 w-[32rem] h-[32rem] -top-40 -left-40" duration={10} />
      <FloatBlob className="bg-indigo-400/30 w-[36rem] h-[36rem] -bottom-40 -right-40" duration={12} />

      {/* Medium blobs */}
      <FloatBlob className="bg-cyan-400/30 w-72 h-72 top-1/4 left-1/4" duration={9} />
      <FloatBlob className="bg-purple-400/30 w-80 h-80 bottom-1/3 right-1/4" duration={10} />

      {/* Small accents */}
      <FloatBlob className="bg-sky-400/20 w-48 h-48 top-1/2 left-1/3" duration={8} />
      <FloatBlob className="bg-violet-400/20 w-56 h-56 bottom-1/2 right-1/3" duration={9} />
    </div>
  );
}


function FloatBlob({ className, duration }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        x: [0, 25, -25, 0],
        y: [0, -25, 25, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
