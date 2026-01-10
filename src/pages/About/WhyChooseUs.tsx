import React from 'react';

export default function WhyChooseUs() {
    return (
        <section className=" px-6 py-2 ">
            {/* Heading with blue vertical line */}
            <div className="flex items-center gap-3 mb-10">
                <div className="w-[3px] h-8 bg-blue-600 rounded-full"></div>
                <h2 className="text-blue-700 font-bold text-3xl">
                    Why Choose Us
                </h2>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
                {/* Expertise & Innovation */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
                            {/* Bulb / Innovation Icon */}
                            <svg
                                className="w-7 h-7 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a7 7 0 00-4 12c.5.5 1 1.5 1 2h6c0-.5.5-1.5 1-2a7 7 0 00-4-12z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6" />
                            </svg>
                        </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-2">
                        Expertise & Innovation
                    </h4>

                    <p className="text-sm text-gray-600 leading-6">
                        Our team combines deep industry expertise with innovative thinking to
                        deliver intelligent, future-ready solutions.
                    </p>
                </div>

                {/* End-to-End Solutions */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
                            {/* Layers / Solutions Icon */}
                            <svg
                                className="w-7 h-7 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 5-9 5-9-5 9-5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 5 9-5" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l9 5 9-5" />
                            </svg>
                        </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-2">
                        End-to-End Solutions
                    </h4>

                    <p className="text-sm text-gray-600 leading-6">
                        From strategy and design to development and deployment, we provide
                        complete solutions tailored to your business needs.
                    </p>
                </div>

                {/* Security & Quality */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
                            {/* Shield / Security Icon */}
                            <svg
                                className="w-7 h-7 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                            </svg>
                        </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-2">
                        Security & Quality
                    </h4>

                    <p className="text-sm text-gray-600 leading-6">
                        We follow strict security standards and quality processes to ensure
                        reliable, scalable, and high-performance solutions.
                    </p>
                </div>
            </div>
        </section>
    );
}