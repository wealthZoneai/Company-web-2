import React from 'react';
import { FaPython } from 'react-icons/fa';
import InternshipDetailLayout from '../../../components/InternshipDetailLayout';

const PythonFullStack: React.FC = () => {
    return (
        <InternshipDetailLayout
            title="Python Full Stack"
            subtitle="Become a versatile developer with Python."
            icon={<FaPython className="text-2xl" />}
            courseName="Python Full Stack"
            introTitle="What is Python Full Stack?"
            introContent={
                <p>
                    Python Full Stack development combines the power of Python for backend logic with modern frontend frameworks to build complete web applications. Python's simplicity and readability, coupled with powerful frameworks like Django and Flask, make it an excellent choice for rapid application development.
                </p>
            }
            careerOpportunities={[
                'Python Developer',
                'Django Developer',
                'Full Stack Engineer',
                'Backend Developer',
                'Web Application Developer'
            ]}
            skills={[
                'Python', 'Django', 'Flask', 'HTML/CSS', 'JavaScript', 'SQL', 'REST APIs'
            ]}
        />
    );
};

export default PythonFullStack;
