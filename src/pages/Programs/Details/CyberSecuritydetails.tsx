import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import InternshipDetailLayout from '../../../components/InternshipDetailLayout';

const CyberSecurityDetails: React.FC = () => {
    return (
        <InternshipDetailLayout
            title="Cyber Security"
            subtitle="Protect digital assets and secure the future."
            icon={<FaShieldAlt className="text-2xl" />}
            courseName="Cyber Security"
            introTitle="What is Cyber Security?"
            introContent={
                <p>
                    Cyber Security is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.
                </p>
            }
            careerOpportunities={[
                'Cyber Security Analyst',
                'Ethical Hacker',
                'Security Consultant',
                'Network Security Engineer',
                'SOC Analyst'
            ]}
            skills={[
                'Network Security', 'Ethical Hacking', 'Cryptography', 'Risk Management', 'Linux', 'Firewalls', 'SIEM'
            ]}
        />
    );
};

export default CyberSecurityDetails;
