import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaQuoteLeft, FaArrowRight, FaArrowLeft, FaAward } from 'react-icons/fa';

// Reuse existing logos
import WiproLogo from '../../../assets/images/logo/wipro.png';
import DeloitteLogo from '../../../assets/images/logo/Delotie.png';
import TeamleaseLogo from '../../../assets/images/logo/Teamlease.png';
import PeopleStrongLogo from '../../../assets/images/logo/PeopleStrong.png';
import QuessLogo from '../../../assets/images/logo/Quess.png';
import SubNavbar from '../../../components/intershipNavbar';

// New Background Asset
import InternshipFooter from '../../../components/intershipFooter';
import ConfettiBg from '../../../assets/images/Internship/Celebration.png';
import AkashBg from '../../../assets/images/Ourserves/akash_bg.png';


// Specific User Requested Image
import AnilSuccessImg from '../../../assets/images/Internship/Anil sucessfull.png';
import SkyrootImg from '../../../assets/images/Internship/Skyroot.png';
import AnilDidImg from '../../../assets/images/Internship/Anildid.png'; // New Image
import KiranImg from '../../../assets/images/Internship/Kiran.png';
import AnjaliImg from '../../../assets/images/Internship/Anjali.png';
import SowmyaImg from '../../../assets/images/Internship/Sowmya.png';
import PavithraImg from '../../../assets/images/Internship/pavithra.png';
import AnilImg from '../../../assets/images/Internship/Anil.png';
import HarithaImg from '../../../assets/images/Internship/Haritha.png';
import AjayImg from '../../../assets/images/Internship/Ajay.jpg';
import BhargavImg from '../../../assets/images/Internship/Bhargav.jpg';



const interns = [
    { name: "BABU KIRAN", role: "Cyber Security", image: KiranImg },
    { name: "ANJALI", role: "Cyber Security", image: AnjaliImg },
    { name: "SOWMYA", role: "Java Full Stack Developer", image: SowmyaImg },
    { name: "PAVITHRA", role: "Python Developer", image: PavithraImg },
    { name: "ANIL", role: "Cyber Security", image: AnilImg },
    { name: "HARITHA", role: "Python Developer", image: HarithaImg },
    { name: "AJAY", role: "Python Developer", image: AjayImg },
    { name: "BHARGAV", role: "Python Developer", image: BhargavImg },
];

const faqs = [
    { question: "What is the duration of the course?", answer: "This Online Program will happen across 5-6 months. The UIUX Design Program will be completed in 5 months and the Advanced UIUX & Product Design Strategy program ends in 6 months due to the attached Apprenticeship Internship. Once you join the program, we will be sharing the course plan with you." },
    { question: "How will I be taught concepts in the class?", answer: "The mentors would be teaching you through live Online Classes in Zoom. We recommend you to have a stable & good internet connection." },
    { question: "Do I need a laptop to do the course?", answer: "A Laptop is mandatory to do the course. This is primarily because all your projects are industry- level and you would be able to do those projects only on a Laptop." },
    { question: "How will the Placement Assurance work?", answer: "On successful completion of course, our placements team will ensure that you apply to 10 partnered jobs per week. This will help you crack up to 10 assured interviews over 6-10 months (or before, depending on your portfolio and Resume). Our placements team increases the number of interviews granted per candidate only on a case-by-case scenario if need be." },
    { question: "The course is available in which languages?", answer: "The course will happen only in English, not in any other regional language." },
    { question: "When am I eligible for the Job Assurance", answer: "You are eligible for the Job Assurance only upon the successful graduation of the course. This means you need to finish all your projects with vetting from our Captains, and also go through our Benchmark tests and Placement qualification Interviews." },
];

const testimonials = [
    {
        name: "Babu Kiran",
        role: "Cyber Security",
        image: KiranImg,
        text: "The training provided deep insights into Cyber Security. The hands-on labs and real-world scenarios helped me build a strong foundation for my career."
    },
    {
        name: "Anjali",
        role: "Cyber Security",
        image: AnjaliImg,
        text: "I gained invaluable knowledge about network security and ethical hacking. The mentorship and practical approach made complex concepts easy to understand."
    },
    {
        name: "Sowmya",
        role: "Java Full Stack Developed",
        image: SowmyaImg,
        text: "The internship helped me gain real-world experience and confidence. Working on live projects improved my design thinking and practical skills a lot."
    },
    {
        name: "Pavithra",
        role: "Python Developer",
        image: PavithraImg,
        text: "I have learned a lot after joining this office and gained valuable knowledge about real-world working environments. I was actively involved in real-time projects, which helped me explore new technologies."
    },
    {
        name: "Anil",
        role: "Cyber Security",
        image: AnilImg,
        text: "From learning the basics to securing a position at Skyroot Aerospace, this journey has been incredible. The guidance I received was top-notch."
    },
    {
        name: "Haritha",
        role: "Python Developer",
        image: HarithaImg,
        text: "The Python curriculum was comprehensive and industry-oriented. Working on live projects gave me the confidence to tackle real-world development challenges."
    },
    {
        name: "Ajay",
        role: "Python Developer",
        image: AjayImg,
        text: "An excellent platform to upskill. The supportive environment and expert mentors helped me master Python development and get ready for the industry."
    },
    {
        name: "Bhargav",
        role: "Python Developer",
        image: BhargavImg,
        text: "The best place to kickstart your career. The practical exposure and project-based learning prepared me well for the corporate world."
    }
];

const partners = [
    { name: 'Wipro', logo: WiproLogo },
    { name: 'Deloitte', logo: DeloitteLogo },
    { name: 'TeamLease', logo: TeamleaseLogo },
    { name: 'PeopleStrong', logo: PeopleStrongLogo },
    { name: 'Quess', logo: QuessLogo }
];

export default function Reviews() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-scroll effect
    React.useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial();
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    // Get 3 testimonials to show
    const getVisibleTestimonials = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentTestimonial + i) % testimonials.length;
            items.push(testimonials[index]);
        }
        return items;
    };

    return (
        <div className="bg-white min-h-screen ">
            <SubNavbar />
            {/* HER0 SECTION */}
            <section className="relative h-[500px] flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://img.freepik.com/free-photo/group-business-workers-smiling-happy-confident-working-together-with-smile-face-office_8353-6334.jpg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="relative z-10 text-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider  inline-block">
                            Our Results, So Far
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
                            THEY MADE IT<br />
                            <span className="text-yellow-400">SO YOU CAN.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Experience the raw power of education through stories of those who redefined their limits. We don't do certificates, we do careers.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30">
                            Start Your Journey
                        </button>
                        <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
                            View All Success
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* INTERNS GRID - STAGGERED LAYOUT */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {interns.map((intern, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                // Stagger effect on desktop (md): Push down columns 2 and 4 (indices 1, 5... and 3, 7...)
                                // Actually simplistic staggered grid: 2nd and 4th column start lower? 
                                // Let's simplify: translate-y for visually staggering 2nd and 4th columns 
                                className={`bg-white rounded-[2rem] shadow-xl overflow-hidden group transition-transform duration-300
                                  ${(index % 4 === 1 || index % 4 === 3) ? 'md:translate-y-13' : ''}
                                `}
                            >
                                <div className="p-4 pb-0 bg-gradient-to-b from-blue-50 to-white">
                                    <div className="h-64 rounded-t-[1.5rem] overflow-hidden relative flex items-end justify-center">
                                        <img
                                            src={intern.image}
                                            alt={intern.name}
                                            className="w-full h-full  object-bottom group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-5 text-center bg-white rounded-b-[2rem]">
                                    <h3 className="text-xl font-bold text-gray-900 uppercase mb-1">{intern.name}</h3>
                                    <p className="text-sm font-semibold text-gray-600">{intern.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SUCCESS HIGHLIGHT SECTION - ANIL (FINAL CONFETTI WHITE DESIGN) */}
            {/* SUCCESS HIGHLIGHT SECTION - ANIL (FINAL CONFETTI WHITE DESIGN) */}
            <section className=" bg-white">
                <div className="rounded-[2rem] relative overflow-hidden flex flex-col md:flex-row items-center shadow-2xl bg-[#eff6ff] border border-blue-200 h-auto md:h-[480px]">

                    {/* Single Combined Background Image (Confetti ONLY) */}
                    <img
                        src={ConfettiBg}
                        alt="Success Background"
                        className="absolute inset-0 w-full h-full object-fill z-0 opacity-70"
                    />

                    {/* Image Section - Aligned with the Blue Arch */}
                    <div className="relative z-10 flex justify-center w-full mb-30 md:w-2/5 h-full items-end pb-0">
                        {/* Blue Arch Background */}
                        <div className="absolute bottom-0 w-75 h-[70%] bg-[#4085e6] rounded-t-[10rem] z-0"></div>

                        {/* Person Image */}
                        <div className="relative z-10 w-75 h-[75%] md:mb-0 mb-0 ">
                            <img
                                src={AnilSuccessImg}
                                alt="Anil"
                                className="w-full h-full object-cover object-top rounded-t-[5rem] "
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative z-10 flex text-center pr-8 md:pr-12 md:pl-0 pl-8 pb-10 md:pb-0 flex flex-col justify-center h-full">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <h2 className="text-xl md:text-2xl font-bold">
                                <span className="text-[#2d5284]">Intern Success </span>
                                <span className="text-[#a67b00]">Highlight</span>
                            </h2>
                            <FaAward className="text-[#a67b00] text-3xl" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
                            Anil did it.
                        </h2>

                        <p className="text-lg text-[#0056b3] font-semibold leading-relaxed mb-6">
                            Cyber Security intern who transitioned into a
                            <span className="font-bold"> full-time role </span>
                            at <span className="font-bold">Skyroot Aerospace</span>.
                        </p>

                        {/* Skyroot Logo area */}
                        <div className="flex flex-col items-center pt-2">
                            <div className="flex flex-col items-center gap-1 cursor-pointer">
                                <img
                                    src={SkyrootImg}
                                    alt="Skyroot Aerospace"
                                    className="h-19 w-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HIRING PARTNERS */}
            {/* <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-10">Hiring <span className="text-blue-600">Partners</span></h3>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        {partners.map((partner, idx) => (
                            <div key={idx} className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-xl p-6 w-48 h-24 flex items-center justify-center hover:shadow-lg transition-shadow">
                                <img src={partner.logo} alt={partner.name} className="max-h-12 w-auto object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* TESTIMONIALS - CAROUSEL 3 AT A TIME */}
            <section className="py-4 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center ">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Testimonials from Our <span className="text-gray-900">Mentees</span></h2>
                    </div>

                    <div className="relative">
                        {/* Navigation Arrows */}
                        <div className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-10 hidden md:block">
                            <button
                                onClick={prevTestimonial}
                                className="p-4 rounded-full bg-white shadow-xl hover:bg-gray-50 text-gray-800 transition-all hover:scale-110 active:scale-95 z-20"
                            >
                                <FaArrowLeft />
                            </button>
                        </div>
                        <div className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-10 hidden md:block">
                            <button
                                onClick={nextTestimonial}
                                className="p-4 rounded-full bg-white shadow-xl hover:bg-gray-50 text-gray-800 transition-all hover:scale-110 active:scale-95 z-20"
                            >
                                <FaArrowRight />
                            </button>
                        </div>

                        {/* Testimonial Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <AnimatePresence mode='popLayout'>
                                {getVisibleTestimonials().map((testimonial) => (
                                    <motion.div
                                        key={testimonial.name}
                                        layout
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-[#dbeafe] p-8 rounded-2xl flex flex-col gap-6 items-start shadow-sm h-full"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-16 h-16 rounded-full object-cover shadow-md"
                                            />
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                                <p className="text-xs font-semibold text-gray-600">{testimonial.role}</p>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-gray-700 text-sm leading-relaxed italic">
                                                "{testimonial.text}"
                                            </p>
                                        </div>

                                        <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-xs font-bold text-green-600 shadow-sm mt-auto">
                                            <span>📅</span> Oct 2025
                                        </span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-4 px-6 bg-[#f8f9fc]">
                <div className="">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-gray-900 mb-4">Still have <span className="text-gray-900">Doubts?</span></h2>
                        <p className="text-gray-500 text-sm">We have answered some of the frequently asked questions for you!</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-lg overflow-hidden transition-all duration-300 bg-[#e2e8f0]"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-4 px-6 text-left font-bold text-gray-800 hover:bg-opacity-80 transition-all"
                                >
                                    <span>{faq.question}</span>
                                    {openFaq === index ? (
                                        <FaChevronUp className="text-gray-600 bg-gray-300 p-1 rounded-full w-6 h-6" />
                                    ) : (
                                        <FaChevronDown className="text-gray-600 bg-gray-300 p-1 rounded-full w-6 h-6" /> // Simulating the small arrow container
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <InternshipFooter />
        </div>
    );
}
