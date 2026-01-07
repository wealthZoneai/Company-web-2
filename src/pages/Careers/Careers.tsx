import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaRobot,
    FaChartLine,
    FaUserTie,
    FaUsers,
    FaGlobe,
    FaRocket,
    FaCheckCircle
} from 'react-icons/fa';

// Local Image Imports
import AIImg from '../../assets/images/AI.png';
import JavaImg from '../../assets/images/Java.jpg';
import MernImg from '../../assets/images/Mern.jpg';
import PythonImg from '../../assets/images/Python.jpg';
import CyberImg from '../../assets/images/cybersecurity.png';
import CloudImg from '../../assets/images/Cloud.jpg';
import MarketingImg from '../../assets/images/Ourserves/Marketing.avif';

// --- Types ---
interface Benefit {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    iconColor: string;
    bgColor: string;
}

interface Job {
    id: number;
    title: string;
    description: string;
    image: string;
}

// --- Data ---
const benefits: Benefit[] = [
    {
        id: 1,
        title: "Cutting-edge Technologies",
        description: "Engage with the latest tools and tech frameworks to drive innovation and success.",
        icon: <FaRobot />,
        iconColor: "text-orange-500",
        bgColor: "bg-orange-50"
    },
    {
        id: 2,
        title: "Growth-Focused Environment",
        description: "We are committed to your professional and personal development.",
        icon: <FaChartLine />,
        iconColor: "text-purple-500",
        bgColor: "bg-purple-50"
    },
    {
        id: 3,
        title: "Expert Mentorship",
        description: "Learn from seasoned leaders and experts from the tech industry.",
        icon: <FaUserTie />,
        iconColor: "text-green-500",
        bgColor: "bg-green-50"
    },
    {
        id: 4,
        title: "Inclusive & Collaborative Culture",
        description: "Be part of a diverse team that values every voice and idea.",
        icon: <FaUsers />,
        iconColor: "text-pink-500",
        bgColor: "bg-pink-50"
    },
    {
        id: 5,
        title: "Global Projects Impact",
        description: "Work on challenging projects that creates real-world results.",
        icon: <FaGlobe />,
        iconColor: "text-blue-500",
        bgColor: "bg-blue-50"
    },
    {
        id: 6,
        title: "Innovation-First Workplace",
        description: "We encourage creativity, experimentation and bold new ideas.",
        icon: <FaRocket />,
        iconColor: "text-red-500",
        bgColor: "bg-red-50"
    }
];

const jobs: Job[] = [
    {
        id: 1,
        title: "UI/UX Designer",
        description: "Craft intuitive, user-centric interfaces and visually appealing designs that enhance usability and engagement.",
        image: AIImg
    },
    {
        id: 2,
        title: "Java Developer",
        description: "Build robust backend architectures and applications using Java with a focus on performance to scalability.",
        image: JavaImg
    },
    {
        id: 3,
        title: "React JS Developer",
        description: "Develop fast, responsive and dynamic web interfaces using React and modern frontend technologies.",
        image: MernImg
    },
    {
        id: 4,
        title: "Digital Marketing",
        description: "Create and execute online marketing strategies to drive brand visibility, engagement and conversions.",
        image: MarketingImg
    },
    {
        id: 5,
        title: "AWS Engineer",
        description: "Design, deploy and manage cloud solutions on AWS, ensuring availability, security and efficiency.",
        image: CloudImg
    },
    {
        id: 6,
        title: "Python Developer",
        description: "Build automation scripts, backend systems and data-driven applications using Python and its frameworks.",
        image: PythonImg
    },
    {
        id: 7,
        title: "Cyber Security Analyst",
        description: "Protect systems and networks from cyber threats by monitoring, detecting and resolving security incidents.",
        image: CyberImg
    }
];

const Careers: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-white min-h-screen font-sans">

            {/* --- Hero Section --- */}
            <section className="relative h-[500px] w-full">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Office Meeting"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/60"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Explore Our Expertise
                    </h1>
                    <p className="text-gray-200 max-w-2xl text-lg font-medium">
                        From data-driven insights to robust software solutions, we offer a wide range of visions to meet your business needs
                    </p>
                    <button
                        onClick={() => {
                            const element = document.getElementById('open-positions');
                            element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-[#0B52A0] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors shadow-lg"
                    >
                        View Open Positions
                    </button>
                </div>
            </section>

            {/* --- Why Work With Us --- */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-blue-800">Why Work With Us</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow text-center flex flex-col items-center space-y-4">
                            <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center text-3xl ${benefit.iconColor}`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Our Culture --- */}
            <section className="bg-white py-16 px-6 max-w-7xl mx-auto mb-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <span className="text-blue-600 font-bold mb-2 block">Our Culture</span>
                            <h2 className="text-3xl font-bold text-gray-900">
                                Innovation, Integrity, Impact
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Our culture is built on a foundation of innovation, commitment to insights, and passion to make positive impact. We foster an environment where creativity thrives, and every team member is empowered to contribute their unique perspectives.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                <p className="text-gray-700 font-medium">
                                    <span className="font-bold text-black">Growth Mindset</span> : We value detailed accountability.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                <p className="text-gray-700 font-medium">
                                    <span className="font-bold text-black">Customer First</span> : Our clients success is our own.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                <p className="text-gray-700 font-medium">
                                    <span className="font-bold text-black">Think Big</span> : We challenge the status quo and push boundaries.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                            alt="Office Culture"
                            className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
                        />
                        <div className="absolute -bottom-12 -right-12 w-2/3 border-8 border-white rounded-3xl overflow-hidden shadow-xl hidden md:block">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                alt="Teamwork"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Open Positions --- */}
            <section id="open-positions" className="py-24 px-6 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-2">
                        <span className="text-blue-600 font-bold">Join Us</span>
                        <h2 className="text-3xl font-bold text-gray-900">Current Open Positions</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobs.map((job) => (
                            <div key={job.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={job.image}
                                        alt={job.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow space-y-4">
                                    <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                                        {job.description}
                                    </p>
                                    <div className="pt-4 mt-auto">
                                        <button
                                            onClick={() => {
                                                if (job.title === "UI/UX Designer") navigate('/careers/job-details');
                                                if (job.title === "Java Developer") navigate('/careers/java-developer');
                                                if (job.title === "React JS Developer") navigate('/careers/react-developer');
                                                if (job.title === "Digital Marketing") navigate('/careers/digital-marketing');
                                                if (job.title === "AWS Engineer") navigate('/careers/aws-engineer');
                                                if (job.title === "Python Developer") navigate('/careers/python-developer');
                                                if (job.title === "Cyber Security Analyst") navigate('/careers/cyber-security');
                                            }}
                                            className="w-full bg-[#0B52A0] text-white py-2.5 rounded-md font-bold text-sm hover:bg-blue-800 transition-colors"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Footer --- */}
            <section className="bg-blue-50 py-16 px-6 mt-20">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
                        Ready to power your wealth with intelligence?
                    </h2>
                    <p className="text-gray-600 font-medium text-sm">
                        Connect with our team to discuss how WZG-AI can help you achieve your Financial Ambitions
                    </p>
                    <div className="flex gap-4 justify-center pt-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-[#1877F2] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors text-sm"
                        >
                            Contact Us
                        </button>
                        <button
                            onClick={() => navigate('/services')}
                            className="bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors text-sm"
                        >
                            Our Services
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
