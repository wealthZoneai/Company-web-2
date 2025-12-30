import { motion } from "framer-motion";
import React from "react";

const VIDEO_ID = "KJAeg3MWMHg";

const programs = [
  {
    title: "STEM & Robotics",
    description:
      "Hands-on learning programs designed to develop innovation, critical thinking, and real-world engineering skills.",
  },
  {
    title: "Internship Program",
    description:
      "Industry-focused internships that bridge academics and real product development with hands-on experience.",
  },
];

export default function Programs() {
  return (
    <section className="relative py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Programs
          </h2>
          <p className="mt-4 text-gray-600">
            Programs designed to create real skills, real confidence, and real
            career outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Program Card                        */
/* ---------------------------------- */

function ProgramCard({ program, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-[360px] rounded-2xl overflow-hidden group shadow-xl"
    >
      {/* YouTube background video */}
      <iframe
        className="absolute inset-0 w-full h-full scale-125 pointer-events-none"
        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0&playsinline=1`}
        title={program.title}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition" />

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-end">
        <h3 className="text-2xl font-semibold text-white">
          {program.title}
        </h3>

        <p className="mt-3 text-gray-200 leading-relaxed">
          {program.description}
        </p>

        <div className="mt-6 flex gap-4">
          <button className="px-5 py-2 text-sm bg-white text-gray-900 rounded-md hover:bg-gray-200 transition">
            Read More
          </button>
          <button className="px-5 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
