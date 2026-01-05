import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { name: "GlobalTech", logo: "https://cdn.worldvectorlogo.com/logos/intel-3.svg" },
    { name: "VisionAI", logo: "https://cdn.worldvectorlogo.com/logos/nvidia-2.svg" },
    { name: "FutureForge", logo: "https://cdn.worldvectorlogo.com/logos/amd-logo-1.svg" },
    { name: "DataStream", logo: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg" },
    { name: "NexusSystems", logo: "https://cdn.worldvectorlogo.com/logos/qualcomm-1.svg" },
    { name: "AlphaCloud", logo: "https://cdn.worldvectorlogo.com/logos/ibm.svg" },
];

export default function Partners() {
    return (
        <section className="py-20 bg-[#8CAFED]/20 border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm">
                    Trusted by Global Innovators
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="flex animate-marquee whitespace-nowrap items-center">
                    {[...partners, ...partners].map((partner, index) => (
                        <div key={index} className="mx-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                            <img src={partner.logo} alt={partner.name} className="h-10 w-auto" />
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
        </section>
    );
}
