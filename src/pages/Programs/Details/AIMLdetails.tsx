import React from 'react';
import { FaBrain } from 'react-icons/fa';
import InternshipDetailLayout from '../../../components/InternshipDetailLayout';

const AIMLDetails: React.FC = () => {
    return (
        <InternshipDetailLayout
            title="Artificial Intelligence & Machine Learning"
            subtitle="Understand the future with AI & ML."
            icon={<FaBrain className="text-2xl" />}
            courseName="AI & ML"
            introTitle="What is AI & ML?"
            introContent={
                <p>
                    Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries by enabling machines to learn from data and make intelligent decisions. This program covers the fundamentals of AI, neural networks, deep learning, and natural language processing, empowering you to build smart applications.
                </p>
            }
            careerOpportunities={[
                'AI Engineer',
                'Machine Learning Engineer',
                'Data Scientist',
                'NLP Engineer',
                'Computer Vision Engineer'
            ]}
            skills={[
                'Python', 'TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'Neural Networks'
            ]}
        />
    );
};

export default AIMLDetails;
