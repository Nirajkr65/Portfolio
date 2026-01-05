import solvix from "../assets/solvix.jpg";
import tcs_ion from "../assets/tcs_ion.png";
import profile from "../assets/image2.jpeg";

export const personalInfo = {
    name: "Niraj Kumar",
    fullName: "Niraj Kumar",
    role: "Full Stack Developer",
    description: "A dedicated Developer specializing in building high-performance web applications and seamless digital experiences.",
    stats: [
        { label: "DSA Problems", value: "300+" },
        { label: "Tech Skills", value: "10+" },
    ],
    socialLinks: [
        {
            name: "GitHub",
            icon: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
            link: "https://github.com/Nirajkr65",
            color: "bg-[#171515]",
        },
        {
            name: "LinkedIn",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
            link: "https://www.linkedin.com/in/niraj-kumar-4b3405292/",
            color: "bg-[#0077B5]",
        },
        {
            name: "Gmail",
            icon: "https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg",
            link: "mailto:niraj.kumarrr65@gmail.com",
            color: "bg-[#EA4335]",
        },
        {
            name: "Instagram",
            icon: "https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg",
            link: "https://www.instagram.com/_niraj65_/?hl=en",
            color: "bg-[#E4405F]",
        },
    ],
    profilePic: profile,
};

export const navLinks = [
    {
        id: "about",
        title: "About",
        icon: "👤",
    },
    {
        id: "work",
        title: "Skills",
        icon: "🛠️",
    },
    {
        id: "projects",
        title: "Projects",
        icon: "💻",
    },
    {
        id: "profiles",
        title: "Profiles",
        icon: "🔗",
    },
    {
        id: "education",
        title: "Education",
        icon: "🎓",
    },
    {
        id: "certifications",
        title: "Certifications",
        icon: "📜",
    },
    {
        id: "contact",
        title: "Contact me",
        icon: "✉️",
    },
];

const services = [
    {
        title: "Full Stack Web Developer",
        icon: "https://cdn-icons-png.flaticon.com/512/2721/2721617.png", // Placeholder
    },
    {
        title: "React Developer",
        icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", // Placeholder
    },
    {
        title: "Backend Developer",
        icon: "https://cdn-icons-png.flaticon.com/512/2166/2166820.png", // Placeholder
    },
    {
        title: "Database Manager",
        icon: "https://cdn-icons-png.flaticon.com/512/9355/9355238.png", // Placeholder
    },
];

const skillCategories = [
    {
        title: "MERN Stack",
        icon: "🌐",
        skills: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Express.js", icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        ],
    },
    {
        title: "Frontend",
        icon: "🎨",
        skills: [
            { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
            { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        ],
    },
    {
        title: "Languages",
        icon: "💻",
        skills: [
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        ],
    },
    {
        title: "Backend & DB",
        icon: "🗄️",
        skills: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        ],
    },
    {
        title: "Tools",
        icon: "🧰",
        skills: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        ],
    },
];

const experiences = [
    {
        title: "B.Tech in Computer Science",
        company_name: "Birla Institute of Technology, Mesra",
        icon: "https://upload.wikimedia.org/wikipedia/en/d/d2/Birla_Institute_of_Technology_Mesra.png",
        iconBg: "#E6DEDD",
        date: "2023 - 2027",
        points: [
            "Pursuing B.Tech in Computer Science and Engineering.",
            "Current CGPA: 8.1.",
            "Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, DBMS.",
        ],
    },
    {
        title: "Schooling (CBSE)",
        company_name: "Bns Dav Public School,Giridih.",
        icon: "https://upload.wikimedia.org/wikipedia/en/e/eb/DAV_CMC_Logo.svg",
        iconBg: "#E6DEDD",
        date: "2020 - 2022",
        points: [
            "Completed schooling with 92% percentage.",
            "Focus on Science and Mathematics.",
        ],
    },
];

const testimonials = [];

const projects = [
    {
        name: "Swiggy Clone",
        description:
            "A full-stack food delivery experience that clones Swiggy. Built with React.js and MongoDB, featuring a fully functional UI and backend integration.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: "https://5.imimg.com/data5/ANDROID/Default/2021/5/EZ/FT/GZ/130133306/product-jpeg.jpg",
        source_code_link: "https://github.com/Nirajkr65/swiggy",
    },
    {
        name: "SOLVIX",
        description:
            "A comprehensive coding platform designed to provide a seamless environment for developers to practice, collaborate, and enhance their coding skills. Features a modern UI and robust problem-solving tools.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node.js",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: solvix,
        source_code_link: "https://github.com/Nirajkr65/SOlvix-org.git",
        live_link: "https://solvixdev.vercel.app/",
    },
];

const codingProfiles = [
    {
        name: "LeetCode",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg",
        link: "https://leetcode.com/u/niraj65/",
    },
    {
        name: "GeeksforGeeks",
        icon: "https://media.geeksforgeeks.org/wp-content/uploads/20210511160813/g4g.jpg",
        link: "https://www.geeksforgeeks.org/profile/nirajkr65",
    },
    {
        name: "InterviewBit",
        icon: "https://assets.interviewbit.com/assets/ib-logo-904db47f8d2208f21a168bfe4851e0fdcc041f2487b6a8ec0b181d3724dbd012.png",
        link: "https://www.interviewbit.com/profile/niraj_669/",
    },
];

const certifications = [
    {
        name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle",
        icon: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg",
        date: "2025",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3E548D49CC1BB3E6D02585143863BA55545078105C78DB5FA533907433329F6F",
    },
    {
        name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        issuer: "Oracle",
        icon: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg",
        date: "2025",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=EA3370BD6238CACE55339B217F5F0B896F36FDC7E4CDCBCBD8AC215315D1D5D4",
    },
    {
        name: "TCS iON Career Edge - Young Professional",
        issuer: "TCS iON",
        icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
        date: "2025",
        link: tcs_ion,
        buttonText: "View Certificate",
        isAI: true,
    },
];

export { services, skillCategories, experiences, testimonials, projects, codingProfiles, certifications };
