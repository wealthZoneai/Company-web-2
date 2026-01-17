import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface TableRowProps {
    label: string;
    t?: boolean; i?: boolean; i2?: boolean; ip?: boolean;
    textT?: string; textI?: string; textI2?: string; textIP?: string;
    highlight?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ label, t, i, i2, ip, textT, textI, textI2, textIP, highlight }) => {
    const renderCell = (bool?: boolean, text?: string) => {
        if (text) return <span className="font-semibold">{text}</span>;
        return bool ? <FaCheckCircle className="text-green-500 mx-auto text-lg" /> : <span className="text-gray-300">-</span>;
    };

    return (
        <tr className={`hover:bg-gray-50/50 transition-colors ${highlight ? 'bg-blue-50/30' : ''}`}>
            <td className="p-4 border-r border-gray-100 font-semibold text-gray-700">{label}</td>
            <td className="p-4 border-r border-gray-100 text-center text-gray-600">{renderCell(t, textT)}</td>
            <td className="p-4 border-r border-gray-100 text-center text-gray-600">{renderCell(i, textI)}</td>
            <td className="p-4 border-r border-gray-100 text-center text-gray-600">{renderCell(i2, textI2)}</td>
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
                            <th className="p-4 border-b border-gray-200 text-center min-w-[150px]">Internship 2</th>
                            <th className="p-4 border-b border-gray-200 text-center min-w-[150px]">Internship 3</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <TableRow label="Program Duration" textT="30-45 Days" textI="6 Months" textI2="6 Months" textIP="6 Months" />
                        {/* <TableRow label="" textT="100+" textI="200+" textI2="200+" textIP="400+" /> */}

                        
                        <TableRow label="Projects" textT="Training" textI="Mulitiple Live projects" textI2="Mulitiple Live projects" textIP=" Mulitiple Live projects" />
                                                <TableRow label="HRM" textT="HRM" textI="HRM" textI2="HRM" textIP="HRM" />

                        <TableRow label="Certification" textT="WZG-AI" textI="AP/TS(MSME),WZG-AI,National Skill" textI2="AP/TS(MSME),WZG-AI,National Skill" textIP="AP/TS(MSME),WZG-AI,National Skill" />

                        <TableRow label="Resume Optimization" t={false} i={true} i2={true} ip={true} />
                        {/* <TableRow label="Portfolio Optimization" t={false} i={true} i2={true} ip={true} /> */}
                        <TableRow label="Mock Interviews" t={false} i={true} i2={true} ip={true} />
                        <TableRow label="Stifund" textT="" textI="" textI2="₹ 5,000 to 7,000" textIP="₹ 5,000 to 7,000" highlight />
                        {/* <TableRow label=" " t={false} i={false} i2={false} ip={true}" /> */}
                        <TableRow label="Job Assistance" t={false} i={false} i2={false} ip={true} />

                        <TableRow label="Price" textT="₹ 35,000" textI="₹ 50,000" textI2="₹ 60,000" textIP="₹ 70,000" highlight />
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ProgramComparisonTable;
