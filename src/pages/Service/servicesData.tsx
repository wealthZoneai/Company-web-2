import React from 'react';
import {
    FaCode,
    FaHeadset,
    FaCloud,
    FaRobot,
    FaBriefcase,
    FaBullhorn,
    FaFileMedicalAlt,
    FaChartBar,
    FaMapMarkedAlt,
    FaMapPin
} from 'react-icons/fa';

export interface ServiceDetailItem {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: React.ReactNode;
    iconColorClass: string;
    iconBgClass: string;
    heroImage: string;
    benefits: {
        title: string;
        description: string;
    }[];
    features: {
        title: string;
        description: string;
    }[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
}

export const servicesData: ServiceDetailItem[] = [
    {
        id: 'data-analytics',
        title: 'Data Analytics',
        shortDescription: 'Unlock powerful insights from your data to make smarter, faster business decisions',
        fullDescription: 'Transform your raw data into tangible business growth and gain a competitive edge in your industry with our advanced analytics solutions.',
        icon: <FaChartBar />,
        iconColorClass: 'text-blue-600',
        iconBgClass: 'bg-blue-100',
        heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        benefits: [
            { title: 'Drive Growth', description: 'Utilize predictive analytics to identify new market opportunities and optimize your strategy for maximum revenue impact.' },
            { title: 'Enhance Efficiency', description: 'Streamline operations by identifying bottlenecks and inefficiencies through rigorous data analysis.' },
            { title: 'Mitigate Risks', description: 'Proactively detect potential risks and anomalies in your business processes before they escalate.' }
        ],
        features: [
            { title: 'Predictive Analytics', description: 'Anticipate future trends and behaviors with high accuracy to make proactive business decisions.' },
            { title: 'Real-time Dashboards', description: 'Monitor key performance indicators (KPIs) in real-time with intuitive and interactive visualizations.' },
            { title: 'Data Warehousing', description: 'Securely store and manage large volumes of data for easy retrieval and historical analysis.' },
            { title: 'Custom Reporting', description: 'Generate tailored reports that focus on the metrics that matter most to your stakeholders.' }
        ],
        process: [
            { step: 1, title: 'Data Collection', description: 'We gather data from multiple sources to create a unified view of your business landscape.' },
            { step: 2, title: 'Processing & Analysis', description: 'Our algorithms clean and analyze the data to extract meaningful patterns and relationships.' },
            { step: 3, title: 'Insight Delivery', description: 'We present actionable insights through clear reports and dashboards to drive decision-making.' }
        ]
    },
    {
        id: 'software-dev',
        title: 'Software Development',
        shortDescription: 'Build scalable, high-performance applications tailored to your unique business needs.',
        fullDescription: 'From concept to deployment, we build robust, scalable, and secure software solutions that drive innovation and efficiency.',
        icon: <FaCode />,
        iconColorClass: 'text-green-600',
        iconBgClass: 'bg-green-100',
        heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
        benefits: [
            { title: 'Scalability', description: 'Solutions designed to grow with your business, handling increased loads without compromising performance.' },
            { title: 'Security', description: 'Built-in security best practices to protect your data and ensure compliance with industry standards.' },
            { title: 'Innovation', description: 'Leverage the latest technologies to solve complex problems and stay ahead of the curve.' }
        ],
        features: [
            { title: 'Custom Web Apps', description: 'Tailor-made web applications that fit your specific business workflows and requirements.' },
            { title: 'Mobile Development', description: 'Native and cross-platform mobile apps to engage your customers on any device.' },
            { title: 'API Integration', description: 'Seamlessly connect your software with third-party tools and services.' },
            { title: 'Legacy Modernization', description: 'Upgrade and migrate old systems to modern architectures for better performance.' }
        ],
        process: [
            { step: 1, title: 'Requirement Analysis', description: 'We work closely with you to understand your goals and define the scope of the project.' },
            { step: 2, title: 'Development & Testing', description: 'Our agile team builds the solution in sprints, ensuring regular feedback and rigorous testing.' },
            { step: 3, title: 'Deployment & Support', description: 'We launch your software and provide ongoing maintenance to ensure smooth operation.' }
        ]
    },
    {
        id: 'it-consulting',
        title: 'IT Consulting',
        shortDescription: 'Strategic technology advice to optimize your infrastructure and digital roadmaps.',
        fullDescription: 'Navigate the complex technology landscape with our expert guidance. We help you align your IT strategy with your business goals.',
        icon: <FaHeadset />,
        iconColorClass: 'text-purple-600',
        iconBgClass: 'bg-purple-100',
        heroImage: 'https://images.unsplash.com/photo-1553877615-30c730a6cf34?q=80&w=2070&auto=format&fit=crop',
        benefits: [
            { title: 'Cost Optimization', description: 'Identify areas to reduce IT spending while maximizing value and performance.' },
            { title: 'Strategic Alignment', description: 'Ensure your technology investments directly support your long-term business objectives.' },
            { title: 'Risk Management', description: 'Assess and mitigate IT risks to ensure business continuity and resilience.' }
        ],
        features: [
            { title: 'Digital Transformation', description: 'Guiding your organization through the adoption of digital technologies.' },
            { title: 'Infrastructure Audits', description: 'Comprehensive assessment of your current IT setup to identify improvements.' },
            { title: 'Security Strategy', description: 'Developing robust cybersecurity frameworks to protect your assets.' },
            { title: 'Vendor Management', description: 'Helping you select and manage the right technology partners.' }
        ],
        process: [
            { step: 1, title: 'Assessment', description: 'We evaluate your current IT capability and business requirements.' },
            { step: 2, title: 'Strategy Definition', description: 'We develop a roadmap tailored to your specific needs and goals.' },
            { step: 3, title: 'Implementation', description: 'We assist in executing the strategy and monitoring its success.' }
        ]
    },
    {
        id: 'cloud-services',
        title: 'Cloud Services',
        shortDescription: 'Secure, scalable cloud solutions that provide flexibility and efficiency for your operations.',
        fullDescription: 'Accelerate your digital journey with our comprehensive cloud services. We help you migrate, manage, and optimize your cloud infrastructure.',
        icon: <FaCloud />,
        iconColorClass: 'text-sky-500',
        iconBgClass: 'bg-sky-100',
        heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        benefits: [
            { title: 'Flexibility', description: 'Scale resources up or down instantly to meet changing business demands.' },
            { title: 'Collaboration', description: 'Enable teams to access data and applications from anywhere, anytime.' },
            { title: 'Disaster Recovery', description: 'Ensure business continuity with robust cloud-based backup and recovery solutions.' }
        ],
        features: [
            { title: 'Cloud Migration', description: 'Seamlessly move your applications and data to the cloud with minimal downtime.' },
            { title: 'Hybrid Cloud', description: 'Integrate on-premise infrastructure with public cloud services for optimal flexibility.' },
            { title: 'Cloud Security', description: 'Advanced security protocols to protect your cloud environment.' },
            { title: 'DevOps', description: 'Automate and streamline your development and operations processes.' }
        ],
        process: [
            { step: 1, title: 'Planning', description: 'We assess your readiness and define the best cloud strategy for your needs.' },
            { step: 2, title: 'Migration', description: 'We execute the migration plan with a focus on data integrity and security.' },
            { step: 3, title: 'Optimization', description: 'We continuously monitor and tune your environment for cost and performance.' }
        ]
    },
    {
        id: 'ai-agents',
        title: 'AI Agents',
        shortDescription: 'Next-gen AI agents to automate workflows and enhance customer interactions.',
        fullDescription: 'Leverage the power of artificial intelligence to automate complex tasks and create personalized experiences for your customers.',
        icon: <FaRobot />,
        iconColorClass: 'text-red-500',
        iconBgClass: 'bg-red-100',
        heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
        benefits: [
            { title: 'Automation', description: 'Reduce manual effort by automating repetitive and complex tasks.' },
            { title: 'Personalization', description: 'Deliver tailored experiences to users based on their behavior and preferences.' },
            { title: '24/7 Availability', description: 'AI agents are always on, providing support and services around the clock.' }
        ],
        features: [
            { title: 'Chatbots', description: 'Intelligent conversational agents for customer support and engagement.' },
            { title: 'Process Automation', description: 'Automate business workflows using intelligent agents.' },
            { title: 'Recommendation Engines', description: 'Suggest products and content based on user analysis.' },
            { title: 'Natural Language Processing', description: 'Understand and interpret human language for better interaction.' }
        ],
        process: [
            { step: 1, title: 'Use Case Definition', description: 'Identify the best opportunities for AI implementation in your business.' },
            { step: 2, title: 'Model Training', description: 'Develop and train AI models using your specific data.' },
            { step: 3, title: 'Deployment & Tuning', description: 'Integrate the agents and continuously refine their performance.' }
        ]
    },
    {
        id: 'bpo-services',
        title: 'BPO Services',
        shortDescription: 'Efficient business process outsourcing to streamline operations and reduce costs.',
        fullDescription: 'Focus on your core competencies while we handle your non-core business processes with efficiency and quality.',
        icon: <FaBriefcase />,
        iconColorClass: 'text-yellow-600',
        iconBgClass: 'bg-yellow-100',
        heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
        benefits: [
            { title: 'Cost Reduction', description: 'Significantly lower operational costs through outsourced efficiency.' },
            { title: 'Access to Talent', description: 'Tap into a global pool of skilled professionals.' },
            { title: 'Scalability', description: 'Easily scale your operations without the overhead of hiring.' }
        ],
        features: [
            { title: 'Customer Service', description: 'Omnichannel support to handle customer inquiries effectively.' },
            { title: 'Back Office Support', description: 'Data entry, accounting, and administrative tasks.' },
            { title: 'Human Resources', description: 'Recruitment, payroll, and other HR functions.' },
            { title: 'Technical Support', description: 'IT helpdesk and technical troubleshooting.' }
        ],
        process: [
            { step: 1, title: 'Transition Planning', description: 'We map out the reliable transfer of processes.' },
            { step: 2, title: 'Training & Onboarding', description: 'Our team is trained on your specific systems and standards.' },
            { step: 3, title: 'Operations Management', description: 'We manage the day-to-day operations with strict quality control.' }
        ]
    },
    {
        id: 'marketing',
        title: 'Marketing Services',
        shortDescription: 'Data-driven marketing strategies to grow your brand and reach the right audience.',
        fullDescription: 'Elevate your brand and drive conversions with our comprehensive digital marketing strategies.',
        icon: <FaBullhorn />,
        iconColorClass: 'text-pink-500',
        iconBgClass: 'bg-pink-100',
        heroImage: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2076&auto=format&fit=crop',
        benefits: [
            { title: 'Brand Visibility', description: 'Increase your presence across all relevant digital channels.' },
            { title: 'Lead Generation', description: 'Attract high-quality leads that support your sales goals.' },
            { title: 'ROI Focus', description: 'Strategies designed to maximize the return on your marketing investment.' }
        ],
        features: [
            { title: 'SEO', description: 'Improve your search engine rankings to drive organic traffic.' },
            { title: 'Content Marketing', description: 'Create compelling content that engages and educates your audience.' },
            { title: 'Social Media Management', description: 'Build and manage your community on social platforms.' },
            { title: 'PPC Advertising', description: 'Targeted advertising campaigns for immediate results.' }
        ],
        process: [
            { step: 1, title: 'Market Research', description: 'We analyze your market, competitors, and audience.' },
            { step: 2, title: 'Campaign Strategy', description: 'We develop a multi-channel plan to reach your goals.' },
            { step: 3, title: 'Execution & Analysis', description: 'We launch campaigns and optimize based on performance data.' }
        ]
    },
    {
        id: 'medical-coding',
        title: 'Medical Coding',
        shortDescription: 'Accurate and compliant medical coding services for healthcare providers.',
        fullDescription: 'Ensure accuracy and compliance in your healthcare documentation with our expert coding services.',
        icon: <FaFileMedicalAlt />,
        iconColorClass: 'text-cyan-600',
        iconBgClass: 'bg-cyan-100',
        heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
        benefits: [
            { title: 'Accuracy', description: 'Minimize errors and claim denials with precise coding.' },
            { title: 'Compliance', description: 'Stay up-to-date with the latest healthcare regulations and standards.' },
            { title: 'Revenue Cycle', description: 'Improve cash flow by accelerating the billing process.' }
        ],
        features: [
            { title: 'ICD-10 Coding', description: 'Expert coding for diagnoses and inpatient procedures.' },
            { title: 'CPT/HCPCS Coding', description: 'Accurate coding for outpatient services and supplies.' },
            { title: 'Auditing Services', description: 'Reviewing records to ensure coding accuracy and compliance.' },
            { title: 'Clinical Documentation Improvement', description: 'Enhancing the quality of data in medical records.' }
        ],
        process: [
            { step: 1, title: 'Chart Review', description: 'Certified coders review patient records for relevant information.' },
            { step: 2, title: 'Code Assignment', description: 'We assign appropriate codes based on current standards.' },
            { step: 3, title: 'Quality Check', description: 'A secondary review ensures accuracy before submission.' }
        ]
    },
    {
        id: 'content-moderation',
        title: 'Content Moderation',
        shortDescription: 'Protect your community and brand reputation with real-time content moderation.',
        fullDescription: 'Safeguard your digital platforms and brand reputation with our vigilant content moderation services.',
        icon: <FaChartBar />,
        iconColorClass: 'text-orange-500',
        iconBgClass: 'bg-orange-100',
        heroImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
        benefits: [
            { title: 'User Safety', description: 'Create a safe environment for your community members.' },
            { title: 'Brand Protection', description: 'Prevent harmful content from damaging your brand image.' },
            { title: 'Compliance', description: 'Ensure your platform adheres to legal and regulatory requirements.' }
        ],
        features: [
            { title: 'Text Moderation', description: 'Filtering hate speech, spam, and other inappropriate text.' },
            { title: 'Image/Video Moderation', description: 'Detecting and removing explicit or harmful visual content.' },
            { title: 'User Profile Review', description: 'Verifying user identities and profiles.' },
            { title: 'Real-time Monitoring', description: '24/7 surveillance of platform activity.' }
        ],
        process: [
            { step: 1, title: 'Guidelines Definition', description: 'We work with you to establish clear community standards.' },
            { step: 2, title: 'Hybrid Moderation', description: 'Combining AI tools with human review for maximum accuracy.' },
            { step: 3, title: 'Reporting & Feedback', description: 'Regular reports on trends and moderation actions.' }
        ]
    },
    {
        id: 'customer-support',
        title: 'Customer Support',
        shortDescription: '24/7 customer support solutions to ensure high satisfaction and retention.',
        fullDescription: 'Deliver exceptional customer experiences with our dedicated support teams, available whenever your customers need them.',
        icon: <FaHeadset />,
        iconColorClass: 'text-teal-600',
        iconBgClass: 'bg-teal-100',
        heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
        benefits: [
            { title: 'Customer Satisfaction', description: 'Resolve issues quickly and effectively to keep customers happy.' },
            { title: 'Retention', description: 'Build loyalty through consistent and helpful support interactions.' },
            { title: 'Insight Gathering', description: 'Learn from customer feedback to improve your products and services.' }
        ],
        features: [
            { title: 'Help Desk', description: 'Centralized support for handling customer queries.' },
            { title: 'Live Chat', description: 'Real-time assistance on your website or app.' },
            { title: 'Email Support', description: 'Efficient handling of email inquiries.' },
            { title: 'Phone Support', description: 'Voice support for complex issues.' }
        ],
        process: [
            { step: 1, title: 'Training', description: 'Agents are trained on your products and brand voice.' },
            { step: 2, title: 'Support Delivery', description: 'We handle inquiries across your chosen channels.' },
            { step: 3, title: 'Quality Assurance', description: 'Monitoring interactions to maintain high standards.' }
        ]
    },
    {
        id: 'google-mapping',
        title: 'Google Mapping',
        shortDescription: 'Precise mapping and location data services for logistics and navigation.',
        fullDescription: 'Optimize your location-based strategies with precise mapping and geospatial data services.',
        icon: <FaMapMarkedAlt />,
        iconColorClass: 'text-lime-600',
        iconBgClass: 'bg-lime-100',
        heroImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop',
        benefits: [
            { title: 'Precision', description: 'Accurate location data for reliable navigation and logistics.' },
            { title: 'Visibility', description: 'Gain a clear view of your assets and operations geographically.' },
            { title: 'Efficiency', description: 'Optimize routes and locations to save time and resources.' }
        ],
        features: [
            { title: 'Data Annotation', description: 'Labeling geospatial data for AI training.' },
            { title: 'POI Verification', description: 'Verifying Points of Interest for accuracy.' },
            { title: 'Route Optimization', description: 'Planning the most efficient paths for logistics.' },
            { title: 'Indoor Mapping', description: 'Mapping internal spaces for large facilities.' }
        ],
        process: [
            { step: 1, title: 'Data Acquisition', description: 'Collecting geospatial data from various sources.' },
            { step: 2, title: 'Verification & Processing', description: 'Ensuring accuracy through rigorous checks.' },
            { step: 3, title: 'Integration', description: 'Delivering data in formats ready for your applications.' }
        ]
    },
    {
        id: 'software-testing',
        title: 'Software Testing',
        shortDescription: 'Comprehensive QA and testing to ensure your software is bug-free and reliable.',
        fullDescription: 'Ensure the highest quality for your software products with our comprehensive testing and QA services.',
        icon: <FaMapPin />,
        iconColorClass: 'text-rose-500',
        iconBgClass: 'bg-rose-100',
        heroImage: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop',
        benefits: [
            { title: 'Reliability', description: 'Deliver stable and robust software to your users.' },
            { title: 'Cost Savings', description: 'Fix defects early when they are cheaper to potential resolve.' },
            { title: 'User Experience', description: 'Ensure a smooth and error-free experience for your end users.' }
        ],
        features: [
            { title: 'Manual Testing', description: 'Human-led testing to find usability and logic issues.' },
            { title: 'Automated Testing', description: 'Scripts to run repetitive tests quickly and consistently.' },
            { title: 'Performance Testing', description: 'Checking how your software handles load and stress.' },
            { title: 'Security Testing', description: 'Identifying vulnerabilities in your application.' }
        ],
        process: [
            { step: 1, title: 'Test Planning', description: 'Defining the test strategy and scope.' },
            { step: 2, title: 'Execution', description: 'Running test cases and reporting defects.' },
            { step: 3, title: 'Reporting', description: 'Providing detailed reports on quality and readiness.' }
        ]
    },
];
