import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface TableRowProps {
    label: string;
    t?: boolean; i?: boolean; ip?: boolean;
    textT?: string; textI?: string; textIP?: string;
    highlight?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ label, t, i, ip, textT, textI, textIP, highlight }) => {
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
};

const ProgramComparisonTable: React.FC = () => {
    return (
        <section className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-900 font-bold">
                        <tr>
                            <th className="p-4 border-b border-gray-200 min-w-[200px]">Features</th>
                            <th className="p-4 border-b border-gray-200 text-center min-w-[150px]">Training</th>
                            <th className="p-4 border-b border-gray-200 text-center min-w-[150px]">Internship</th>
                            <th className="p-4 border-b border-gray-200 text-center min-w-[150px]">Internship & Placement Assistance</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <TableRow label="Program Duration" textT="30-45 Days" textI="6 Months" textIP="6 Months & 1 Year" />
                        <TableRow label="Hours of Learning" textT="100+" textI="200+" textIP="400+" />
                        <TableRow label="Projects" textT="Mulitiple Live projects" textI="Mulitiple Live projects" textIP=" Mulitiple Live projects" />
                        <TableRow label="Resume Optimization" t={false} i={true} ip={true} />
                        <TableRow label="Portfolio Optimization" t={false} i={true} ip={true} />
                        <TableRow label="Mock Interviews" t={false} i={false} ip={true} />
                        <TableRow label="Price" textT="₹ 5000" textI="₹ 10000" textIP="₹ 25000" highlight />
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ProgramComparisonTable;
