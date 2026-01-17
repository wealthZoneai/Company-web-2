import React from 'react';
import InternshipDetailLayout from '../../../components/InternshipDetailLayout';

const DataAnalytics: React.FC = () => {
    return (
        <InternshipDetailLayout
            title="Data Analytics"
            subtitle="Master the art of turning data into actionable insights."
            icon={<span className="text-2xl">📊</span>}
            courseName="Data Analytics"
            introTitle="What is Data Analytics?"
            introContent={
                <p>
                    Data Analytics is the science of analyzing raw data to make conclusions about that information. Many of the techniques and processes of data analytics have been automated into mechanical processes and algorithms that work over raw data for human consumption. Data Analytics is the science of analyzing raw data to make conclusions about that information. Many of the techniques and processes of data analytics have been automated into mechanical processes and algorithms that work over raw data for human consumption.
                </p>
            }
            careerOpportunities={[
                'Data Analyst',
                'Business Intelligence Analyst',
                'Marketing Analyst',
                'Operations Analyst'
            ]}
            skills={[
                'Python', 'SQL', 'Tableau', 'Power BI', 'Statistical Analysis', 'Data Cleaning', 'Predictive Modeling'
            ]}
        />
    );
};

export default DataAnalytics;
