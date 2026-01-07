import React from 'react';
import { Upload } from "lucide-react";

// Helper components
const Input = ({
    label,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
}) => (
    <div>
        <label className="text-sm font-medium text-slate-700 block mb-1">
            {label}
        </label>
        <input
            {...props}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
    </div>
);

const Select = ({
    label,
    options,
}: {
    label: string;
    options: string[];
}) => (
    <div>
        <label className="text-sm font-medium text-slate-700 block mb-1">
            {label}
        </label>
        <select className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>Select Experience Type</option>
            {options.map((opt) => (
                <option key={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

const JobApplicationForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Application Submitted Successfully!");
    };

    return (
        <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl border p-6 mt-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Apply for this position
            </h3>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Name" placeholder="Enter Your name" required />
                <Input label="Email" placeholder="Enter Your Email" type="email" required />
                <Input
                    label="Phone Number"
                    placeholder="Enter mobile number"
                    type="tel"
                    required
                />
                <Select
                    label="Experience Type"
                    options={["Fresher", "1–3 Years", "3–5 Years", "5+ Years"]}
                />

                {/* Upload */}
                <div className="md:col-span-2">
                    <label className="text-sm font-medium text-slate-700 block mb-2">
                        Upload Resume
                    </label>
                    <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg py-6 text-slate-500 cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-colors group relative">
                        <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            accept=".pdf,.doc,.docx"
                        />
                        <div className="flex items-center gap-2 text-sm">
                            <Upload size={16} className="group-hover:text-blue-500" />
                            <span className="group-hover:text-blue-600">Choose file or drag here</span>
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                        PDF, DOC, DOCX Max 5MB
                    </p>
                </div>

                <div className="md:col-span-2 mt-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition shadow-lg shadow-blue-600/20"
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobApplicationForm;
