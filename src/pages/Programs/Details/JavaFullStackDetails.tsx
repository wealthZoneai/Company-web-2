import React from 'react';
import { FaJava } from 'react-icons/fa';
import InternshipDetailLayout from '../../../components/InternshipDetailLayout';

const JavaFullStackDetails: React.FC = () => {
    return (
        <InternshipDetailLayout
            title="Java Full Stack"
            subtitle="Build robust enterprise applications."
            icon={<FaJava className="text-2xl" />}
            courseName="Java Full Stack"
            introTitle="What is Java Full Stack?"
            introContent={
                <p>
                    Java Full Stack development involves building both the front-end (user interface) and back-end (server, database, and application logic) of web applications using Java technologies. This program equips you with the skills to design, develop, and deploy scalable enterprise-grade applications.
                </p>
            }
            careerOpportunities={[
                'Full Stack Developer',
                'Java Developer',
                'Backend Developer',
                'Software Engineer',
                'Enterprise Architect'
            ]}
            skills={[
                'Java', 'Spring Boot', 'Hibernate', 'Microservices', 'React/Angular', 'SQL', 'REST APIs'
            ]}
        />
    );
};

export default JavaFullStackDetails;
