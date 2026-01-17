import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import InternshipDetailLayout from '../../../components/InternshipDetailLayout';

const CloudTechnologies: React.FC = () => {
    return (
        <InternshipDetailLayout
            title="Cloud Technologies"
            subtitle="Master AWS, Azure, and Google Cloud Platform."
            icon={<FaCloudUploadAlt className="text-2xl" />}
            courseName="Cloud Technologies"
            introTitle="What is Cloud Technologies?"
            introContent={
                <p>
                    Cloud Technologies enable businesses to store, manage, process, and analyze data using scalable and secure cloud platforms such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Instead of relying on traditional on-premise infrastructure, organizations can access computing resources on demand, reducing costs and improving flexibility.
                </p>
            }
            careerOpportunities={[
                'Cloud Engineer',
                'DevOps Engineer',
                'Cloud Architect',
                'AWS Specialist',
                'Azure Administrator'
            ]}
            skills={[
                'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Linux', 'Terraform'
            ]}
        />
    );
};

export default CloudTechnologies;
