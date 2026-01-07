import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    FaArrowLeft,
    FaMapMarkerAlt,
    FaClock,
    FaCheckCircle,
    FaUpload,
    FaPaperPlane
} from 'react-icons/fa';

// Local Image Import
import PythonImg from '../../assets/images/Python.jpg';

const PythonDeveloper: React.FC = () => {
    const navigate = useNavigate();
    const [fileName, setFileName] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <div className="bg-white font-sans">
            {/* Header / Hero with Python Background */}
            <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden">
                <img
                    src={PythonImg}
                    alt="Python Development"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[2px]"></div>

                <div className="absolute inset-0 flex flex-col p-6 text-left">
                    <div className="max-w-7xl mx-auto w-full">
                        <Link to="/careers" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 text-sm font-medium">
                            <FaArrowLeft /> Back to Careers
                        </Link>
                    </div>
                    <div className="flex-grow flex items-center">
                        <div className="max-w-7xl mx-auto w-full">
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Python Developer</h1>
                            <div className="flex flex-wrap gap-6 text-blue-200 font-medium text-sm">
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt /> Hyderabad
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaClock /> Full Time
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" px-6 py-12 space-y-12">
                {/* About the Role */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">About the Role</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We are looking for a Python Developer to join our engineering team and help us develop and maintain various software products. Python Developer responsibilities include writing and testing code, debugging programs and integrating applications with third-party web services. To be successful in this role, you should have experience using server-side logic and work well in a team. Ultimately, you'll build highly responsive web applications that align with our business needs.
                    </p>
                </section>

                {/* Key Responsibilities */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Key Responsibilities</h2>
                    <ul className="space-y-3">
                        {[
                            "Write effective, scalable code.",
                            "Develop back-end components to improve responsiveness and overall performance.",
                            "Integrate user-facing elements into applications.",
                            "Test and debug programs.",
                            "Improve functionality of existing systems.",
                            "Implement security and data protection solutions.",
                            "Coordinate with internal teams to understand user requirements and provide technical solutions."
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-600">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Essential Qualifications */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Essential Qualifications</h2>
                    <ul className="space-y-3">
                        {[
                            "Work experience as a Python Developer.",
                            "Expertise in at least one popular Python framework (like Django, Flask or Pyramid).",
                            "Knowledge of object-relational mapping (ORM).",
                            "Familiarity with front-end technologies (like JavaScript and HTML5).",
                            "Team spirit and good problem-solving skills.",
                            "BSc in Computer Science, Engineering or relevant field.",
                            "Understanding of databases and SQL."
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-600">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Application Form */}
                <section className="bg-white border border-gray-100 rounded-[40px] shadow-2xl overflow-hidden">
                    <div className="p-8 md:p-12 space-y-8">
                        <h2 className="text-2xl font-bold text-gray-900 text-center">Apply for Python Developer position</h2>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block font-bold text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your name"
                                        className="w-full px-4 py-3 bg-blue-50/50 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-sans"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-bold text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="w-full px-4 py-3 bg-blue-50/50 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-sans"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-bold text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter mobile number"
                                        className="w-full px-4 py-3 bg-blue-50/50 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-sans"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-bold text-gray-700">Experience Type</label>
                                    <select className="w-full px-4 py-3 bg-blue-50/50 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none text-gray-500 text-sm font-sans">
                                        <option value="">Select Experience Type</option>
                                        <option value="fresher">Fresher</option>
                                        <option value="1-2">1-2 Years</option>
                                        <option value="3-5">3-5 Years</option>
                                        <option value="5+">5+ Years</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block font-bold text-gray-700 text-center">Upload Resume</label>
                                <div className="relative border-2 border-dashed border-blue-100 bg-blue-50/30 rounded-2xl p-8 flex flex-col items-center justify-center space-y-2 hover:bg-blue-50/50 transition-all group cursor-pointer">
                                    <input
                                        type="file"
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        onChange={handleFileChange}
                                    />
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                        <FaUpload />
                                    </div>
                                    <span className="font-medium text-gray-600">{fileName || "Choose file or drag here"}</span>
                                    <span className="text-xs text-gray-400">PDF, DOC, DOCX (Max 5MB)</span>
                                </div>
                            </div>

                            <div className="flex justify-center pt-4">
                                <button type="button" className="bg-[#1D59AE] text-white px-12 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-blue-800 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                                    <FaPaperPlane /> Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>

            {/* CTA Footer */}
            <section className="bg-blue-50 py-16 px-6 mb-12">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D59AE]">
                        Ready to power your wealth with intelligence?
                    </h2>
                    <p className="text-gray-600 font-medium text-lg leading-relaxed">
                        Connect with our team to discover how WZG-AI can help you achieve your Financial Ambitions
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PythonDeveloper;
