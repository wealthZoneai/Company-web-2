export interface Job {
    id: number;
    title: string;
    location: string;
    type: string;
    description: string;
    image: string;
    responsibilities: string[];
    qualifications: string[];
}

export const jobs: Job[] = [
    {
        id: 1,
        title: "UI/UX Designer",
        location: "Hyderabad",
        type: "Full Time",
        description: "Craft intuitive, user-centric interfaces and visually appealing designs that enhance usability and engagement. Our Culture is built on a foundation of innovation, a commitment to integrity, and a drive to make a positive impact. we faster an environment where creativity thrives, and every team member is empowered to contribute their unique perspectives",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d4f?q=80&w=2070&auto=format&fit=crop",
        responsibilities: [
            "Collaborate with product managers and developers to understand user requirements.",
            "Develop wireframes, user flows, and high-fidelity prototypes.",
            "Conduct user research and translate feedback into design improvements.",
            "Maintain and evolve our design system and brand guidelines."
        ],
        qualifications: [
            "A strong portfolio showcasing your design skills and process.",
            "Strong understanding of user-centered design principles and best practices.",
            "Experience working with design systems and component libraries.",
            "Ability to create detailed interaction designs and micro-interactions",
            "Familiarity with user research methods such as interviews, surveys, and usability tests.",
            "Ability to translate complex requirements into simple and elegant user experiences."
        ]
    },
    {
        id: 2,
        title: "Java Developer",
        location: "Hyderabad",
        type: "Full Time",
        description: "Build robust backend architectures and applications using Java with a focus on performance to scalability.",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
        responsibilities: [
            "Design and implement scalable Java-based applications.",
            "Optimize application performance and reliability.",
            "Collaborate with cross-functional teams to define features."
        ],
        qualifications: [
            "Proficiency in Java and Spring Boot.",
            "Experience with RESTful APIs and microservices.",
            "Knowledge of database management (SQL/NoSQL)."
        ]
    },
    {
        id: 3,
        title: "React JS Developer",
        location: "Hyderabad",
        type: "Full Time",
        description: "Develop fast, responsive and dynamic web interfaces using React and modern frontend technologies.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        responsibilities: [
            "Build reusable components and front-end libraries.",
            "Translate designs and wireframes into high-quality code.",
            "Optimize components for maximum performance across devices."
        ],
        qualifications: [
            "Strong proficiency in JavaScript/TypeScript and React.",
            "Experience with state management (Redux, Context API).",
            "Familiarity with modern CSS frameworks (Tailwind, Material UI)."
        ]
    },
    {
        id: 4,
        title: "Digital Marketing",
        location: "Hyderabad",
        type: "Full Time",
        description: "Create and execute online marketing strategies to drive brand visibility, engagement and conversions.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        responsibilities: [
            "Develop and manage digital marketing campaigns.",
            "Analyze metrics to optimize campaign performance.",
            "Collaborate with content creators to produce engaging material."
        ],
        qualifications: [
            "Experience in SEO, SEM, and social media marketing.",
            "Proficiency with analytics tools (Google Analytics).",
            "Strong communication and creative thinking skills."
        ]
    },
    {
        id: 5,
        title: "AWS Engineer",
        location: "Hyderabad",
        type: "Full Time",
        description: "Design, deploy and manage cloud solutions on AWS, ensuring availability, security and efficiency.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        responsibilities: [
            "Architect and deploy secure AWS cloud infrastructure.",
            "Monitor system performance and troubleshoot issues.",
            "Implement CI/CD pipelines for automated deployment."
        ],
        qualifications: [
            "Certification in AWS (Solutions Architect or similar).",
            "Experience with containerization (Docker, Kubernetes).",
            "Strong scripting skills (Python, Bash)."
        ]
    },
    {
        id: 6,
        title: "Python Developer",
        location: "Hyderabad",
        type: "Full Time",
        description: "Build automation scripts, backend systems and data-driven applications using Python and its frameworks.",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2064&auto=format&fit=crop",
        responsibilities: [
            "Develop efficient and testable Python code.",
            "Integrate user-facing elements with server-side logic.",
            "Implement security and data protection solutions."
        ],
        qualifications: [
            "Proficiency in Python and frameworks like Django or Flask.",
            "Understanding of multithreading and multiprocessing.",
            "Experience with ORM libraries."
        ]
    },
    {
        id: 7,
        title: "Cyber Security Analyst",
        location: "Hyderabad",
        type: "Full Time",
        description: "Protect systems and networks from cyber threats by monitoring, detecting and resolving security incidents.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
        responsibilities: [
            "Monitor networks for security breaches.",
            "Investigate and respond to security incidents.",
            "Conduct vulnerability assessments and penetration testing."
        ],
        qualifications: [
            "Knowledge of firewalls, proxies, and SIEM tools.",
            "Understanding of network protocols and security standards.",
            "Certification such as CISSP or CEH is a plus."
        ]
    }
];
