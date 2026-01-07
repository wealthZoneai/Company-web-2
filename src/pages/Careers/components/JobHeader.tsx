import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, ArrowLeft } from "lucide-react";

interface JobHeaderProps {
    title: string;
    location: string;
    type: string;
}

const JobHeader: React.FC<JobHeaderProps> = ({ title, location, type }) => {
    return (
        <div className="mb-6">
            {/* Back Button */}
            <div className="mb-4">
                <Link to="/careers" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    <ArrowLeft size={16} />
                    Back to Careers
                </Link>
            </div>

            {/* Header Box */}
            <div className="bg-white rounded-lg border p-6">
                <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                        <MapPin size={14} /> {location}
                    </span>
                    <span className="flex items-center gap-1">
                        <Briefcase size={14} /> {type}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default JobHeader;
