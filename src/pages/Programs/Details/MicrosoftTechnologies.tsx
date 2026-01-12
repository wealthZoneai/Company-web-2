import React, { useState } from 'react';
import { FaCheckCircle, FaClock, FaCertificate, FaLaptop, FaDownload, FaArrowLeft, FaWindows } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProgramComparisonTable from '../../../components/ProgramComparisonTable';
import ApplicationModal from '../../../components/ApplicationModal';
import MicrosoftImg from '../../../assets/images/Microsoft Technologies.png';

const MicrosoftTechnologies: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Header / Hero Section */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
                    <Link to="/programs/internship" className="text-gray-500 hover:text-blue-600 transition-colors">
                        <FaArrowLeft />
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center p-2 text-blue-600">
                            <FaWindows className="text-2xl" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">Microsoft Technologies</h1>
                            <p className="text-xs text-gray-500">Build enterprise solutions using Microsoft tools.</p>
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

                {/* Intro Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">What is Microsoft Technologies?</h2>
                    <p className="text-gray-600 leading-relaxed max-w-4xl text-sm">
                        Microsoft Technologies form a comprehensive ecosystem of tools, frameworks, and platforms that enable developers and organizations to build secure, scalable, and high-performance applications for modern business needs. They are widely used in enterprise software development, cloud computing, and digital transformation.
                    </p>
                </section>

                {/* Info Grid */}
                <div className="grid md:grid-cols-12 gap-8">
                    {/* Left Column (Highlights & Details) */}
                    <div className="md:col-span-7 space-y-8">
                        {/* Internship Highlights */}
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
                                        <p className="text-xs text-gray-500">Practice in realistic virtual environments simulating actual cyber attacks.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Program Details */}
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

                    {/* Right Column (Opportunities & Skills) */}
                    <div className="md:col-span-5 space-y-8">
                        {/* Career Opportunities */}
                        <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                            <h3 className="text-blue-700 font-bold mb-4">Careers Opportunities</h3>
                            <ul className="space-y-2">
                                {['.NET Developer', 'Software Engineer', 'Full Stack Developer', 'Cloud Solutions Architect'].map((job) => (
                                    <li key={job} className="flex items-center gap-2 text-sm text-gray-700">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        {job}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Skills You'll Gain */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="text-blue-700 font-bold mb-4">Skills You'll Gain</h3>
                            <div className="flex flex-wrap gap-2">
                                {['C#', '.NET Core', 'Azure', 'SQL Server', 'ASP.NET MVC', 'Web API', 'DevOps'].map((skill) => (
                                    <span key={skill} className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Download Curriculum */}
                        <button className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-blue-300 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold py-4 rounded-xl transition-all">
                            <FaDownload /> Download Curriculum
                        </button>
                    </div>
                </div>

                {/* Comparison Table */}
                <ProgramComparisonTable />
                <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} courseName="Microsoft Technologies" />
            </div>
        </div>
    );
};

export default MicrosoftTechnologies;
