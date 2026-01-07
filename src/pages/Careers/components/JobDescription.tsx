import React from 'react';
import { CheckCircle } from "lucide-react";

interface JobDescriptionProps {
    description: string;
    responsibilities: string[];
    qualifications: string[];
}

// Helper Components (Internal)
const Section = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <div className="bg-white rounded-lg border p-6 mb-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">{title}</h2>
        {children}
    </div>
);

const List = ({ items }: { items: string[] }) => (
    <ul className="space-y-3">
        {items.map((item, i) => (
            <li key={i} className="flex gap-2 text-slate-600">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                <span className="text-sm leading-relaxed">{item}</span>
            </li>
        ))}
    </ul>
);

const JobDescription: React.FC<JobDescriptionProps> = ({ description, responsibilities, qualifications }) => {
    return (
        <>
            {/* About */}
            <Section title="About the Role">
                <p className="text-slate-600 leading-relaxed text-sm">
                    {description}
                </p>
            </Section>

            {/* Responsibilities */}
            <Section title="Key Responsibilities">
                <List items={responsibilities} />
            </Section>

            {/* Qualifications */}
            <Section title="Essential Qualifications">
                <List items={qualifications} />
            </Section>
        </>
    );
};

export default JobDescription;
