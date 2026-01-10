import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaCertificate, FaLaptop, FaDownload, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProgramComparisonTable from '../../../components/ProgramComparisonTable';
import DataAnalyticsImg from '../../assets/images/Data Analytics.png'; // Reusing existing asset if available, or placeholder

const DataAnalytics: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Header / Hero Section */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
                    <Link to="/programs/internship" className="text-gray-500 hover:text-blue-600 transition-colors">
                        <FaArrowLeft />
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center p-2">
                            {/* Placeholder Icon or Image */}
                            <span className="text-2xl">📊</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">Data Analytics</h1>
                            <p className="text-xs text-gray-500">Master the art of turning data into actionable insights.</p>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors">
                            Apply now
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">

                {/* Intro Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">What is Data Analytics?</h2>
                    <p className="text-gray-600 leading-relaxed max-w-4xl text-sm">
                        Data Analytics is the science of analyzing raw data to make conclusions about that information. Many of the techniques and processes of data analytics have been automated into mechanical processes and algorithms that work over raw data for human consumption. Data Analytics is the science of analyzing raw data to make conclusions about that information. Many of the techniques and processes of data analytics have been automated into mechanical processes and algorithms that work over raw data for human consumption.
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
                                        <span className="text-sm font-bold text-gray-900">AP & TG Government</span>
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
                                {['Data Analyst', 'Business Intelligence Analyst', 'Marketing Analyst', 'Operations Analyst'].map((job) => (
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
                                {['Python', 'SQL', 'Tableau', 'Power BI', 'Statistical Analysis', 'Data Cleaning', 'Predictive Modeling'].map((skill) => (
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
                <section className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-900 font-bold">
                                <tr>
                                    <th className="p-4 border-b border-gray-200 min-w-[200px]">Features</th>
                                    <th className="p-4 border-b border-gray-200 text-center min-w-[150px]">Training</th>
                                    <th className="p-4 border-b border-gray-200 text-center min-w-[150px]">Internship</th>
                                    <th className="p-4 border-b border-gray-200 text-center min-w-[150px]">Internship & Placement</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <TableRow label="6 week work integration Program" t={false} i={true} ip={true} />
                                <TableRow label="Program Duration" textT="45 Days" textI="3 Months" textIP="6 Months" />
                                <TableRow label="Hours of Learning" textT="100+" textI="200+" textIP="400+" />
                                <TableRow label="Projects" textT="2 Major" textI="4 Major" textIP="8 Major + Live" />
                                <TableRow label="Certifications" textT="Course Completion" textI="Internship + Course" textIP="Govt + Internship + Course" />
                                <TableRow label="Resume Optimization" t={false} i={true} ip={true} />
                                <TableRow label="Portfolio Optimization" t={false} i={true} ip={true} />
                                <TableRow label="Placement Assistance" t={false} i={false} ip={true} />
                                <TableRow label="Mock Interviews" t={false} i={false} ip={true} />
                                <TableRow label="Price" textT="₹ 5000" textI="₹ 10000" textIP="₹ 25000" highlight />
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

// Helper for Table Rows
const TableRow: React.FC<{
    label: string;
    t?: boolean; i?: boolean; ip?: boolean;
    textT?: string; textI?: string; textIP?: string;
    highlight?: boolean;
}> = ({ label, t, i, ip, textT, textI, textIP, highlight }) => {

    const renderCell = (bool?: boolean, text?: string) => {
        if (text) return <span className="font-semibold">{text}</span>;
        return bool ? <FaCheckCircle className="text-green-500 mx-auto text-lg" /> : <span className="text-gray-300">-</span>;
    };

    return (
        <tr className={`hover:bg-gray-50/50 transition-colors ${highlight ? 'bg-blue-50/30' : ''}`}>
            <td className="p-4 border-r border-gray-100 font-semibold text-gray-700">{label}</td>
            <td className="p-4 border-r border-gray-100 text-center text-gray-600">{renderCell(t, textT)}</td>
            <td className="p-4 border-r border-gray-100 text-center text-gray-600">{renderCell(i, textI)}</td>
            <td className="p-4 text-center text-gray-900 font-bold">{renderCell(ip, textIP)}</td>
        </tr>
    );
}

export default DataAnalytics;
