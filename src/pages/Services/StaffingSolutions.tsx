import React from 'react';
import {
    FaUsers,
    FaClock,
    FaBullseye,
    FaHeadset,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa';

const StaffingSolutions: React.FC = () => {
    return (
        <section className="bg-white px-6">
            <div className=" space-y-20">

                {/* --- Header & Grid Section --- */}
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                            Comprehensive Staffing Solutions
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto font-medium">
                            From temporary assignments to executive placements, We provide tailored staffing services to meet your unique business needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Card 1: Permanent Placement */}
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-500 text-2xl mb-6">
                                <FaUsers />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Permanent Placement
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Quick access to skilled professionals for short-term projects, seasonal demands, or unexpected vacancies.
                            </p>
                        </div>

                        {/* Card 2: Contract-To-Hire */}
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                                <FaClock />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Contract-To-Hire
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Test drive potential employees before committing to a full-time hire.
                            </p>
                        </div>

                        {/* Card 3: Executive Search */}
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 text-2xl mb-6">
                                <FaBullseye />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Executive Search
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Specialized recruitment for C-suite and senior leadership positions.
                            </p>
                        </div>

                        {/* Card 4: 24/7 Support */}
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-500 text-2xl mb-6">
                                <FaHeadset />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                24/7 Support
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Round-the-clock assistance to address any staffing emergencies or concerns.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- Contact / Form Section --- */}
                <div className="grid lg:grid-cols-2 gap-12 items-start ">

                    {/* Left: Contact Info */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-[#0B52A0]">
                                Ready To Build Your Dream Team?
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#0B52A0] rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Contact us</h4>
                                    <p className="text-gray-600">0000000000</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#0B52A0] rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Email us</h4>
                                    <p className="text-gray-600">contact@staffpro.com</p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#0B52A0] rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Visit us</h4>
                                    <p className="text-gray-600">123 Business Ave, Suite 100, NY 10001</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-900 flex">
                                        Full Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-900 flex">
                                        Email Address<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-900 flex">
                                        Company Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-900 flex">
                                        Phone Number<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900 flex">
                                    Tell us about your staffing needs <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#0B52A0] text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default StaffingSolutions;
