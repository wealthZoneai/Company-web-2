import React from 'react';
import { FaWindows } from 'react-icons/fa';
import InternshipDetailLayout from '../../../components/InternshipDetailLayout';

const MicrosoftTechnologies: React.FC = () => {
    return (
        <InternshipDetailLayout
            title="Microsoft Technologies"
            subtitle="Master the .NET ecosystem."
            icon={<FaWindows className="text-2xl" />}
            courseName="Microsoft Technologies"
            introTitle="What are Microsoft Technologies?"
            introContent={
                <p>
                    Microsoft Technologies encompass a wide range of tools, frameworks, and platforms used for building various types of applications. This program primarily focuses on the .NET ecosystem, C# programming, and Azure cloud services, empowering you to build robust desktop, web, and cloud applications.
                </p>
            }
            careerOpportunities={[
                '.NET Developer',
                'C# Developer',
                'Azure Specialist',
                'SharePoint Developer',
                'Software Architect'
            ]}
            skills={[
                'C#', '.NET Core', 'ASP.NET', 'Azure', 'SQL Server', 'MVC', 'Entity Framework'
            ]}
        />
    );
};

export default MicrosoftTechnologies;
