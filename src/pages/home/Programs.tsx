import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import robotics from "../../assets/images/robotic.png";
import corporate from "../../assets/images/cap.png";
import InternshipVideo from "../../assets/viedos/internship.mp4";
import RoboticsVideo from "../../assets/viedos/stem robotics.mp4";

interface Program {
    title: string;
    icon: React.ReactNode;
    video: string;
}

const programs: Program[] = [
    {
        title: "Stem & Robotics Education",
        video: RoboticsVideo,
        icon: <img src={robotics} alt="robotics" className="w-10 h-10 object-contain" />,
    },
    {
        title: "Internship Program",
        video: InternshipVideo,
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
            className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-black"
        >
            {/* Video Background */}
            <div className="absolute inset-0">
                <video
                    src={program.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-700"
                />
                <div className="absolute inset-0  duration-500" />
            </div>

            {/* Content Layer (Space Between) */}
            <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between items-start">
                {/* Header Row: Icon + Title */}
                <div className="flex flex-row items-center gap-4 w-full justify-start -mt-2 md:-mt-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center text-gray-900 shadow-2xl animate-pulse-slow overflow-hidden p-2.5">
                        {program.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white leading-tight text-left">
                        {program.title}
                    </h3>
                </div>

                {/* Buttons Row (Bottom Corner) */}
                <div className="flex flex-row gap-3 w-full justify-end items-center">
                    <button
                        onClick={() => {
                            if (program.title === "Internship Program") {
                                navigate("/internship");
                            }
                        }}
                        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/20 p-2 rounded-2xl text-white font-bold text-sm group/btn hover:gap-3 transition-all duration-300"
                    >
                        View Details <FaArrowRight className="text-xs" />
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
