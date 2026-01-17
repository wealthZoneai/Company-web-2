import React from 'react';
import { FaRobot } from 'react-icons/fa';
import InternshipDetailLayout from '../../../components/InternshipDetailLayout';

const RoboticEngineer: React.FC = () => {
    return (
        <InternshipDetailLayout
            title="Robotic Engineer"
            subtitle="Master the art of building intelligent automated systems."
            icon={<FaRobot className="text-2xl" />}
            courseName="Robotic Engineer"
            introTitle="What is Robotic Engineering?"
            introContent={
                <p>
                    Robotics Engineering is an interdisciplinary field that combines mechanical design, electronics, control systems, and software development to design, build, and operate intelligent automated systems. This program focuses on developing smart robots capable of sensing, decision-making, and autonomous action using technologies such as sensors, actuators, embedded systems, artificial intelligence, and programming.
                </p>
            }
            careerOpportunities={[
                'Robotics Engineer',
                'Automation Engineer',
                'Controls Engineer',
                'AI Specialist',
                'Mechatronics Engineer'
            ]}
            skills={[
                'ROS', 'Python', 'C++', 'PLC', 'Arduino', 'Sensors', 'Computer Vision', 'Kinematics'
            ]}
        />
    );
};

export default RoboticEngineer;
