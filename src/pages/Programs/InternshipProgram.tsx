import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaCheckCircle, FaUserTie, FaRocket, FaCertificate, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import heroVideo from '../../assets/viedos/hero.mp4';

// Local Image Imports
import AIImg from '../../assets/images/AI.png';
import CyberImg from '../../assets/images/cybersecurity.png';
import CloudImg from '../../assets/images/Cloud.jpg';
import DataAnalyticsImg from '../../assets/images/Data Analytics.png';
import JavaImg from '../../assets/images/Java.jpg';
import MicrosoftImg from '../../assets/images/Microsoft Technologies.png';
import MernImg from '../../assets/images/Mern.jpg';
import PythonImg from '../../assets/images/Python.jpg';
import SalesImg from '../../assets/images/sales.jpg';
import QualityImg from '../../assets/images/Quality.jpg';
import RoboticImg from '../../assets/images/Robotic.avif';

// Partner Logo Imports
import WiproLogo from '../../assets/images/logo/wipro.png';
import DeloitteLogo from '../../assets/images/logo/Delotie.png';
import TeamleaseLogo from '../../assets/images/logo/Teamlease.png';
import PeopleStrongLogo from '../../assets/images/logo/PeopleStrong.png';
import QuessLogo from '../../assets/images/logo/Quess.png';
import SubNavbar from '../../components/intershipNavbar';
import InternshipFooter from '../../components/intershipFooter';
import Reviews from './Reviews/Reviews';

const partners = [
    { name: 'Wipro', logo: WiproLogo },
    { name: 'Deloitte', logo: DeloitteLogo },
    { name: 'TeamLease', logo: TeamleaseLogo },
    { name: 'PeopleStrong', logo: PeopleStrongLogo },
    { name: 'Quess', logo: QuessLogo }
];

const tracks = [
    {
        title: "AI & ML",
        description: "Focuses on developing algorithms, neural networks, and computer logic systems to solve complex problems.",
        icon: "🧠",
        image: AIImg
    },
    {
        title: "Cyber Security",
        description: "Network & Application security involves protecting computer network and its security multi levels.",
        icon: "🛡️",
        image: CyberImg
    },
    {
        title: "Cloud Technologies",
        description: "Cloud computing refers to the use of remote servers hosted and maintained via cloud technologies.",
        icon: "☁️",
        image: CloudImg
    },
    {
        title: "Data Analytics",
        description: "With multi levels of analyzing and visualization through Python, SQL and BI tool for accurate.",
        icon: "📊",
        image: DataAnalyticsImg
    },
    {
        title: "Java Full Stack Development",
        description: "Core Java, OOP, database development and modern Framework implementation.",
        icon: "☕",
        image: JavaImg
    },
    {
        title: "Microsoft Technologies",
        description: ".NET, MVC Framework & more Applications development implementation Cloud based and IT support.",
        icon: "🪟",
        image: MicrosoftImg
    },
    {
        title: "MERN Stack (React JS, Node JS)",
        description: "MongoDB Express React JS Node JS Develop modern Application with scale.",
        icon: "⚛️",
        image: MernImg
    },
    {
        title: "Python Full-Stack Development",
        description: "Flask, Django, analyze & Visualization through Python tool for better insight.",
        icon: "🐍",
        image: PythonImg
    },
    {
        title: "Sales Force",
        description: "CRM cloud based solution for better and efficient customer relationship automation.",
        icon: "☁️",
        image: SalesImg
    },
    {
        title: "Quality Assurance",
        description: "Core Testing manual and automated testing process for high security multi level levels of testing.",
        icon: "🔍",
        image: QualityImg
    },
    {
        title: "Robotic Engineer",
        description: "Interns gain skills for build automation, industrial AI and robots and Programming simulation.",
        icon: "🤖",
        image: RoboticImg
    }
];

const timeline = [
    { week: "Week 1-2", title: "Onboarding & Orientation", description: "Get familiar with company workflow, tools, and team coordination.." },
    { week: "Week 3-6", title: "Hands-On Task Assignment", description: "Work on assigned tasks and support ongoing projects." },
    { week: "Week 7-10", title: "Live Project Contribution", description: "Contribute directly to real-time project development." },
    { week: "Week 11-12", title: "Project Submission & Review", description: "Final submissions, feedback, and internship completion." }
];

const benefits = [
    { title: "Expert Learning", description: "Learn from industry experts with hands-on labs and tutorials.", color: "bg-green-50", icon: <FaRocket className="text-green-600" /> },
    { title: "Live Projects", description: "Get the chance to work on live projects for real world experience.", color: "bg-blue-50", icon: <FaRocket className="text-blue-600" /> },
    { title: "Mentorship", description: "Guided by professional mentors with multi-level experience.", color: "bg-purple-50", icon: <FaUserTie className="text-purple-600" /> },
    { title: "Professional Network", description: "Grow your network within the global tech community.", color: "bg-orange-50", icon: <FaRocket className="text-orange-600" /> },
    { title: "Placement Support", description: "Our team will support for job placement after completion.", color: "bg-pink-50", icon: <FaRocket className="text-pink-600" /> },
    { title: "Industry Certification", description: "Earn respected industry validation for your new skills.", color: "bg-cyan-50", icon: <FaCertificate className="text-cyan-600" /> },
    { title: "Full-Time Experience", description: "Join our program designed to accelerate your career.", color: "bg-indigo-50", icon: <FaRocket className="text-indigo-600" /> },
    { title: "Govt Approved", description: "Nurturing innovative workforce aligned with Govt initiatives.", color: "bg-yellow-50", icon: <FaRocket className="text-yellow-600" /> }
];

export default function InternshipProgram() {
    const navigate = useNavigate();
    return (
        <>
            <SubNavbar />
            <div className="bg-white min-h-screen ">

                {/* Hero Section */}
                <section id="overview" className="relative h-[60vh] flex items-center overflow-hidden">
                    <video
                        src={heroVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black mb-6"
                        >
                            Internship <span className="text-blue-500">Program</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl max-w-2xl text-gray-200 leading-relaxed"
                        >
                            Our Internship Program is designed to bridge the gap between academic learning and real-world industry experience. We equip students with practical skills, hands-on projects, and professional guidance to help them confidently enter the tech industry.
                        </motion.p>
                    </div>
                </section>

                {/* Partners Section - Infinite Carousel */}
                <section className="py-12 bg-gray-50 overflow-hidden border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Our <span className="text-blue-600">Partners</span></p>
                    </div>

                    <div className="relative flex overflow-hidden">
                        <motion.div
                            className="flex items-center gap-12 md:gap-24 whitespace-nowrap py-4"
                            animate={{ x: [0, -1035] }} // Half of the doubled content length
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {/* Doubling the logos for infinite loop */}
                            {[...partners, ...partners, ...partners].map((partner, idx) => (
                                <img
                                    key={`${partner.name}-${idx}`}
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-10 md:h-14 w-auto object-contain hover:scale-110 transition-all duration-300"
                                />
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Tracks Section */}
                <section id="tracks" className="py-2 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-gray-900 mb-4">Available <span className="text-blue-600">Tracks</span></h2>
                            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {tracks.map((track, index) => (
                                <motion.div
                                    key={track.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="h-40 overflow-hidden">
                                        <img src={track.image} alt={track.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{track.title}</h3>
                                        <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">{track.description}</p>
                                        <button
                                            onClick={() => {
                                                if (track.title === "Data Analytics") {
                                                    navigate("/programs/internship/data-analytics");
                                                } else if (track.title === "Robotic Engineer") {
                                                    navigate("/programs/internship/robotic-engineer");
                                                } else if (track.title === "Microsoft Technologies") {
                                                    navigate("/programs/internship/microsoft-technologies");
                                                } else if (track.title === "Python Full-Stack Development") {
                                                    navigate("/programs/internship/python-fullstack");
                                                } else if (track.title === "MERN Stack (React JS, Node JS)") {
                                                    navigate("/programs/internship/mern-stack");
                                                } else if (track.title === "Sales Force") {
                                                    navigate("/programs/internship/salesforce");
                                                } else if (track.title === "Quality Assurance") {
                                                    navigate("/programs/internship/quality-assurance");
                                                } else if (track.title === "Cloud Technologies") {
                                                    navigate("/programs/internship/cloud-technologies");
                                                } else if (track.title === "Cyber Security") {
                                                    navigate("/programs/internship/cyber-security");
                                                } else if (track.title === "AI & ML") {
                                                    navigate("/programs/internship/ai-ml");
                                                } else if (track.title === "Java Full Stack Development") {
                                                    navigate("/programs/internship/java-fullstack");
                                                }
                                            }}
                                            className="flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all duration-300"
                                        >
                                            View Details <FaArrowRight className="text-xs" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section id="timeline" className="py-2 bg-gray-50 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-gray-900 mb-4">Program <span className="text-blue-600">Timeline</span></h2>
                            <p className="text-gray-600">Working On <span className="text-blue-600 font-bold">Real Time Project</span></p>
                        </div>

                        <div className="relative max-w-4xl mx-auto">
                            <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-blue-600/20 -translate-x-1/2 hidden md:block" />

                            <div className="space-y-12 md:space-y-0">
                                {timeline.map((item, index) => (
                                    <div key={item.week} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10" />

                                        <div className="w-full md:w-1/2 md:px-12">
                                            <motion.div
                                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
                                            >
                                                <span className="text-blue-600 text-xs font-black uppercase mb-2 block">{item.week}</span>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                                <p className="text-gray-500 text-sm">{item.description}</p>
                                            </motion.div>
                                        </div>
                                        <div className="w-0 md:w-1/2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Join Section */}
                <section id="benefits" className="py-4 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-gray-900 mb-4">Why Join <span className="text-blue-600">Our Program</span></h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">Transform your career with hands-on experience and expert guidance designed to accelerate your professional journey.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`${benefit.color} p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300`}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm text-xl shrink-0">
                                            {benefit.icon}
                                        </div>
                                        <h3 className="text-l font-bold text-gray-900">{benefit.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <InternshipFooter />
        </>
    );
}
