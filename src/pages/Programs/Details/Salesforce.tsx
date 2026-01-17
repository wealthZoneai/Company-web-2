import React from 'react';
import { FaCloud } from 'react-icons/fa';
import InternshipDetailLayout from '../../../components/InternshipDetailLayout';

const Salesforce: React.FC = () => {
    return (
        <InternshipDetailLayout
            title="Salesforce"
            subtitle="Master the world's #1 CRM platform."
            icon={<FaCloud className="text-2xl" />}
            courseName="Salesforce"
            introTitle="What is Salesforce?"
            introContent={
                <p>
                    Salesforce is a leading cloud-based Customer Relationship Management (CRM) platform that enables organizations to effectively manage and streamline their sales, marketing, customer service, and business operations from a single unified system. It helps businesses build stronger customer relationships by organizing customer data, tracking interactions, and automating key processes.
                </p>
            }
            careerOpportunities={[
                'Salesforce Developer',
                'Salesforce Admin',
                'CRM Consultant',
                'App Builder',
                'Solution Architect'
            ]}
            skills={[
                'Apex', 'Visualforce', 'Lightning Web Components', 'SOQL/SOSL', 'CRM Administration', 'Process Automation'
            ]}
        />
    );
};

export default Salesforce;
