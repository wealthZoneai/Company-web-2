import React from 'react';
import { FaReact } from 'react-icons/fa';
import InternshipDetailLayout from '../../../components/InternshipDetailLayout';

const MernStack: React.FC = () => {
    return (
        <InternshipDetailLayout
            title="MERN Stack"
            subtitle="Master MongoDB, Express, React, and Node.js."
            icon={<FaReact className="text-2xl" />}
            courseName="MERN Stack"
            introTitle="What is MERN Stack?"
            introContent={
                <p>
                    The MERN stack is a popular JavaScript software stack for building dynamic web sites and web applications. It consists of MongoDB, Express.js, React.js, and Node.js. Because all components of the stack support programming in JavaScript, MERN is often used for building efficient, scalable, and modern web applications.
                </p>
            }
            careerOpportunities={[
                'MERN Stack Developer',
                'Frontend Developer',
                'Backend Developer',
                'Full Stack Engineer',
                'JavaScript Developer'
            ]}
            skills={[
                'MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript (ES6+)', 'REST APIs', 'Redux'
            ]}
        />
    );
};

export default MernStack;
