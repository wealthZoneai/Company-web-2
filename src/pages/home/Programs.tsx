import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import robotics from "../../assets/images/robotic.png";
import corporate from "../../assets/images/cap.png";

interface Program {
    title: string;
    description: string;
    icon: React.ReactNode;
    videoId: string;
}

const programs: Program[] = [
    {
        title: "Stem & Robotics Education",
        description:
            "Our STEM & Robotics Education Internship Program provides students with hands-on experience in robotics, coding, electronics, and innovative technology. Interns learn by building real projects, exploring STEM concepts, and working with modern tools used in the industry. With expert mentorship and practical training, this program helps students develop problem-solving skills, creativity, and confidence for future tech careers.",
        videoId: "KJAeg3MWMHg", // Robotics focus
        icon: <img src={robotics} alt="robotics" className="w-10 h-10 object-contain" />,
    },
    {
        title: "Internship Program",
        description:
            "Our Internship Program is designed to provide students and young professionals with a comprehensive learning experience that bridges the gap between academic knowledge and real-world industry requirements. Through a structured curriculum, interns gain exposure to practical projects, professional workflows, and essential tools used across the industry.",
        videoId: "KJAeg3MWMHg", // Corporate focus
        icon: <img src={corporate} alt="corporate" className="w-10 h-10 object-contain" />,

    },
];

const ProgramCard: React.FC<{ program: Program; index: number; navigate: any }> = ({ program, index, navigate }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative h-95 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-black"
        >
            {/* Video Background */}
            <div className="absolute inset-0">
                <iframe
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-50 group-hover:opacity-70 transition-all duration-700 scale-[1.3]"
                    src={`https://www.youtube.com/embed/${program.videoId}?autoplay=1&mute=1&loop=1&playlist=${program.videoId}&controls=0&modestbranding=1&rel=0&playsinline=1`}
                    title={program.title}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            </div>

            {/* Content Layer (Centered) */}
            <div className="relative z-10 h-full  md:p-10 flex flex-col items-center justify-center text-center">
                {/* Header Row: Icon + Title */}
                <div className="flex flex-col md:flex-row items-center gap-4 mb-6 w-full justify-center">
                    <div className="w-14 h-15 bg-white rounded-2xl flex items-center justify-center text-gray-900 shadow-2xl animate-pulse-slow overflow-hidden p-2">
                        {program.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                        {program.title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-white/90 text-[12px] md:text-sm leading-relaxed mb-6 max-w-125 font-medium line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {program.description}
                </p>

                {/* Buttons Row */}
                <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-2">
                    <button
                        onClick={() => program.title === "Internship Program" && navigate("/programs/internship")}
                        className="px-8 py-3 bg-gradient-to-b from-[#468ef7] to-[#2258ef] hover:from-[#2258ef] hover:to-[#0b42cc] text-white font-black rounded-xl transition-all duration-500 shadow-lg shadow-blue-500/30 text-[13px] active:scale-95"
                    >
                        View Details
                    </button>

                </div>
            </div>
        </motion.div>
    );
};

export default function Programs() {
    const navigate = useNavigate();
    return (
        <section className="relative  bg-slate-50 my-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {programs.map((program, index) => (
                        <ProgramCard key={program.title} program={program} index={index} navigate={navigate} />
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}} />
        </section>
    );
}
