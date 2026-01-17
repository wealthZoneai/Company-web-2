import React from 'react';
import { FaCheckDouble } from 'react-icons/fa';
import InternshipDetailLayout from '../../../components/InternshipDetailLayout';

const QualityAssurance: React.FC = () => {
    return (
        <InternshipDetailLayout
            title="Quality Assurance"
            subtitle="Ensure software quality and reliability."
            icon={<FaCheckDouble className="text-2xl" />}
            courseName="Quality Assurance"
            introTitle="What is Quality Assurance?"
            introContent={
                <p>
                    Quality Assurance (QA) is a systematic process of ensuring that products and services meet specified requirements and quality standards. In software development, QA involves testing applications to identify bugs, defects, and vulnerabilities before they reach the end-user, ensuring a seamless user experience.
                </p>
            }
            careerOpportunities={[
                'QA Engineer',
                'Software Tester',
                'Automation Engineer',
                'Test Lead',
                'Quality Analyst'
            ]}
            skills={[
                'Manual Testing', 'Selenium', 'Java/Python for Testing', 'JIRA', 'TestNG', 'API Testing', 'SQL'
            ]}
        />
    );
};

export default QualityAssurance;
