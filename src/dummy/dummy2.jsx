export default {
    firstName: 'Nikhil',
    lastName: 'Bisen',
    jobTitle: 'Frontend Developer',
    address: 'Nagpur, Maharashtra',
    phone: '9673409650',
    email: 'bisennikhil9@gmail.com',
    themeColor: "#1b4ea9",
    summary: 'Passionate Frontend Developer with expertise in building modern and interactive web applications. Adept at developing scalable solutions using React, Redux, and JavaScript frameworks. Strong problem-solving skills and an eye for detail.',

    experience: [
        {
            id: 1,
            title: 'Full Stack Developer',
            companyName: 'Amazon',
            city: 'New York',
            state: 'NY',
            startDate: 'Jan 2021',
            endDate: '',
            currentlyWorking: true,
            workSummery: '• Designed, developed, and maintained full-stack applications using React and Node.js.\n' +
                '• Implemented responsive user interfaces ensuring cross-browser compatibility.\n' +
                '• Created RESTful APIs with Node.js and Express, improving backend efficiency.\n' +
                '• Maintained the React Native in-house organization application.'
        },
        {
            id: 2,
            title: 'Frontend Developer',
            companyName: 'Google',
            city: 'Charlotte',
            state: 'NC',
            startDate: 'May 2019',
            endDate: 'Jan 2021',
            currentlyWorking: false,
            workSummery: '• Developed and optimized React components for improved performance.\n' +
                '• Enhanced UI/UX by collaborating closely with designers and stakeholders.\n' +
                '• Integrated APIs, reducing page load time by 40%.\n' +
                '• Implemented automated testing, increasing code coverage by 25%.'
        }
    ],

    education: [
        {
            id: 1,
            universityName: 'Western Illinois University',
            startDate: 'Aug 2018',
            endDate: 'Dec 2019',
            degree: 'Master',
            major: 'Computer Science',
            description: 'Focused on full-stack development, database management, and AI integration. Engaged in multiple web development projects and research on scalable software architectures.'
        }
    ],

    skills: [
        { id: 1, name: 'Angular', rating: 80 },
        { id: 2, name: 'React', rating: 100 },
        { id: 3, name: 'MySQL', rating: 80 },
        { id: 4, name: 'React Native', rating: 100 }
    ],

    certificates: [
        {
            id: 1,
            certificateTitle: 'React Developer Certification',
            description: 'Certification provided by Udemy in March 2022.',
        },
        {
            id: 2,
            certificateTitle: 'Full Stack Web Development',
            description: 'Completed on Coursera in July 2021.',
        },
        {
            id: 3,
            certificateTitle: 'JavaScript Algorithms & Data Structures',
            description: 'Earned through freeCodeCamp in Dec 2020.',
        }
    ],

    projects: [
        {
            id: 1,
            title: 'Resume Builder App',
            link: 'https://your-resume-builder-link.com', 
            description: 'Developed a MERN-stack resume builder application with customizable templates, AI-powered data parsing, and PDF export functionality.',
        },
        {
            id: 2,
            title: 'E-commerce Platform',
            link: 'https://your-ecommerce-platform.com', 
            description: 'Built a scalable e-commerce platform with secure payment gateways and real-time order tracking.',
        },
        {
            id: 3,
            title: 'AI-Based Web Scraper',
            link: 'https://your-ai-scraper.com', 
            description: 'Created an AI-enhanced web scraper for extracting job postings from company websites.',
        }
    ],

    publications: [
        {
            id: 1,
            title: 'Optimizing React Performance',
            publisher: 'Tech Journal',
            url: 'https://techjournal.com/react-performance'
        },
        {
            id: 2,
            title: 'AI-Powered Web Scraping Techniques',
            publisher: 'Data Science Monthly',
            url: 'https://datasciencemonthly.com/ai-web-scraping'
        },
        {
            id: 3,
            title: 'Building Scalable Frontend Architectures',
            publisher: 'WebDev Magazine',
            url: 'https://webdevmag.com/scalable-frontend'
        }
    ],

    recommendations: [
        {
            id: 1,
            name: 'John Doe',
            relationship: 'Former Manager at Google',
            recommendation: 'Nikhil is an exceptional frontend developer with a deep understanding of modern JavaScript frameworks. His contributions to our projects significantly improved performance and user engagement.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            relationship: 'Senior Engineer at Amazon',
            recommendation: 'Nikhil consistently delivers high-quality code and innovative solutions. His ability to adapt to new technologies and work collaboratively makes him an asset to any team.'
        },
        {
            id: 3,
            name: 'Mark Johnson',
            relationship: 'CTO at Tech Startup',
            recommendation: 'Nikhil’s technical expertise and problem-solving skills helped our startup build a scalable, user-friendly platform. Highly recommended!'
        }
    ],

    languages: [
        { id: 1, name: 'English', proficiency: 'Fluent' },
        { id: 2, name: 'Hindi', proficiency: 'Native' },
        { id: 3, name: 'Spanish', proficiency: 'Intermediate' }
    ],

    achievementsAndExtracurricular: [
        {
            id: 1,
            title: 'Hackathon Winner',
            description: 'Won 1st place in a national-level hackathon for building a real-time collaboration tool.'
        },
        {
            id: 2,
            title: 'Tech Blog Contributor',
            description: 'Published multiple articles on frontend development and JavaScript performance optimization.'
        },
        {
            id: 3,
            title: 'Open Source Contributor',
            description: 'Contributed to multiple open-source projects, improving accessibility and performance of web applications.'
        }
    ]
};

