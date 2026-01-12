import React, { useState, useEffect } from 'react';
import { FaTimes, FaUser, FaPhone, FaEnvelope, FaGraduationCap, FaCalendar, FaBook, FaFileUpload, FaPaperPlane, FaDesktop } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseName: string;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, courseName }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        qualification: '',
        yearOfPassing: '',
        course: courseName,
        message: '',
        resume: null as File | null
    });

    // Update course when prop changes
    useEffect(() => {
        setFormData(prev => ({ ...prev, course: courseName }));
    }, [courseName]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert("Application Submitted Successfully!");
        onClose();
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={handleBackdropClick}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative"
                    >
                        {/* Header */}
                        <div className="bg-blue-600 p-6 flex items-center justify-between text-white relative overflow-hidden">
                            <div className="relative z-10 flex items-center gap-4">
                                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <FaDesktop className="text-2xl" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Apply for Internship</h2>
                                    <p className="text-blue-100 text-sm">Professional Internship Program</p>
                                </div>
                            </div>

                            {/* Decorative Circles */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

                            <button
                                onClick={onClose}
                                className="relative z-10 p-2 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Form */}
                        <div className="p-8 max-h-[85vh] overflow-y-auto">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-bold text-gray-900">Application Form</h3>
                                    <p className="text-sm text-gray-500">Fill out the form below to apply for our Internship Program. All fields are required.</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="relative group">
                                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                                        <input
                                            type="text"
                                            placeholder="Candidate Name"
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    {/* Mobile */}
                                    <div className="relative group">
                                        <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                                        <input
                                            type="tel"
                                            placeholder="Mobile Number"
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all"
                                            value={formData.mobile}
                                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="relative group md:col-span-2">
                                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    {/* Qualification */}
                                    <div className="relative group">
                                        <FaGraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                                        <select
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all appearance-none text-gray-500"
                                            value={formData.qualification}
                                            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                                        >
                                            <option value="">Select Qualification</option>
                                            <option value="B.Tech">B.Tech</option>
                                            <option value="B.E">B.E</option>
                                            <option value="M.Tech">M.Tech</option>
                                            <option value="BCA">BCA</option>
                                            <option value="MCA">MCA</option>
                                            <option value="Degree">Degree</option>
                                        </select>
                                    </div>

                                    {/* Year of Passing */}
                                    <div className="relative group">
                                        <FaCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                                        <input
                                            type="text"
                                            placeholder="Year of Passing"
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all"
                                            value={formData.yearOfPassing}
                                            onChange={(e) => setFormData({ ...formData, yearOfPassing: e.target.value })}
                                        />
                                    </div>

                                    {/* Course Interested - Read Only */}
                                    <div className="relative group md:col-span-2">
                                        <FaBook className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                                        <input
                                            type="text"
                                            placeholder="Course Interested in"
                                            readOnly
                                            className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-600 font-semibold cursor-not-allowed outline-none"
                                            value={formData.course}
                                        />
                                    </div>

                                    {/* File Upload */}
                                    <div className="relative group md:col-span-2">
                                        <div className="flex items-center w-full">
                                            <label className="flex flex-col items-center w-full px-4 py-6 bg-gray-50 text-blue rounded-xl tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all border-dashed border-gray-300">
                                                <FaFileUpload className="text-3xl text-blue-500 mb-2" />
                                                <span className="mt-2 text-sm leading-normal text-gray-500">Select Resume (PDF/Doc)</span>
                                                <input type='file' className="hidden" />
                                            </label>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="relative group md:col-span-2">
                                        <textarea
                                            placeholder="Additional Message (Optional)"
                                            rows={3}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all resize-none"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="pt-4 border-t border-gray-100">
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                    >
                                        <FaPaperPlane /> Submit Application
                                    </button>
                                    <p className="text-center text-xs text-gray-400 mt-4">
                                        By clicking Submit, you agree to our Terms & Conditions
                                    </p>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ApplicationModal;
