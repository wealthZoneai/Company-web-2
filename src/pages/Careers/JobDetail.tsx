import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { jobs } from './careersData';
import JobHeader from './components/JobHeader';
import JobDescription from './components/JobDescription';
import JobApplicationForm from './components/JobApplicationForm';

const JobDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const job = jobs.find(j => j.id === Number(id));

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!job) {
        return <Navigate to="/careers" replace />;
    }

    return (
        <div className="w-full min-h-screen bg-slate-100 py-10 font-sans">
            <div className="max-w-5xl mx-auto px-4">

                <JobHeader
                    title={job.title}
                    location={job.location}
                    type={job.type}
                />

                <JobDescription
                    description={job.description}
                    responsibilities={job.responsibilities}
                    qualifications={job.qualifications}
                />

                <JobApplicationForm />



            </div>
        </div>
    );
};

export default JobDetail;
