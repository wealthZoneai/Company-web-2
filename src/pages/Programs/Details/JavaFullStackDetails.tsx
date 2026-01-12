import React, { useState } from 'react';
import { FaCheckCircle, FaClock, FaCertificate, FaLaptop, FaDownload, FaArrowLeft, FaJava } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProgramComparisonTable from '../../../components/ProgramComparisonTable';
import ApplicationModal from '../../../components/ApplicationModal';

const JavaFullStack: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="bg-white min-h-screen font-sans">
            <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
                    <Link to="/programs/internship" className="text-gray-500 hover:text-blue-600 transition-colors">
                        <FaArrowLeft />
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center p-2 text-blue-600">
                            <FaJava className="text-2xl" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">Java Fullstack Development</h1>
                            <p className="text-xs text-gray-500">Build robust enterprise applications with Java.</p>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors"
                        >
                            Apply now
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">What is Java Full Stack Development?</h2>
                    <p className="text-gray-600 leading-relaxed max-w-4xl text-sm">
                        Java Full Stack Development involves designing and building complete web applications using Java for the backend along with modern frontend technologies. It focuses on developing robust, secure, and scalable applications that handle user interactions, business logic, data processing, and system integration. On the backend, Java frameworks such as Spring, Spring Boot, and Hibernate are used to implement server-side logic, RESTful APIs, authentication, and data management. These technologies efficiently process application data, enforce business rules, and ensure high performance and security.
                    </p>
                </section>

                <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-7 space-y-8">
                        <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                            <h3 className="text-blue-700 font-bold mb-4">Internship Highlights</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">100% Online & Flexible</h4>
                                        <p className="text-xs text-gray-500">Learn at your own pace with 24/7 access to course material.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Industry-Recognized Certification</h4>
                                        <p className="text-xs text-gray-500">Earn a certificate valued by top tech companies worldwide.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Hands-on Labs</h4>
                                        <p className="text-xs text-gray-500">Practice in realistic virtual environments.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="text-blue-700 font-bold mb-4">Program Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                        <FaClock className="text-xs" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-500 block">Duration</span>
                                        <span className="text-sm font-bold text-gray-900">6 Months</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                        <FaCertificate className="text-xs" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-500 block">Certification</span>
                                        <span className="text-sm font-bold text-gray-900">AP & TG Government,MSME,Skill-India </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                        <FaLaptop className="text-xs" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-500 block">Mode</span>
                                        <span className="text-sm font-bold text-gray-900">Online</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-5 space-y-8">
                        <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                            <h3 className="text-blue-700 font-bold mb-4">Careers Opportunities</h3>
                            <ul className="space-y-2">
                                {['Java Full Stack Developer', 'Backend Developer', 'Software Engineer', 'Application Developer', 'Enterprise Architect'].map((job) => (
                                    <li key={job} className="flex items-center gap-2 text-sm text-gray-700">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        {job}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="text-blue-700 font-bold mb-4">Skills You'll Gain</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Java', 'Spring Boot', 'Hibernate', 'Microservices', 'REST APIs', 'SQL', 'React/Angular'].map((skill) => (
                                    <span key={skill} className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-blue-300 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold py-4 rounded-xl transition-all">
                            <FaDownload /> Download Curriculum
                        </button>
                    </div>
                </div>

                <ProgramComparisonTable />
                <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} courseName="Java Full Stack" />
            </div>
        </div>
    );
};

export default JavaFullStack;
