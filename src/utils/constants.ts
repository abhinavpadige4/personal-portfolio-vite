export const skillsData = {
  frontend: [
    { name: "HTML", proficiency: 95 },
    { name: "CSS", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "TypeScript", proficiency: 80 },
    { name: "React", proficiency: 90 },
    { name: "Vue.js", proficiency: 70 },
    { name: "Svelte", proficiency: 60 },
  ],
  backend: [
    { name: "Node.js", proficiency: 80 },
    { name: "Express.js", proficiency: 75 },
    { name: "Python", proficiency: 70 },
    { name: "Django", proficiency: 65 },
    { name: "Firebase", proficiency: 75 },
    { name: "MongoDB", proficiency: 70 },
    { name: "PostgreSQL", proficiency: 65 },
  ],
  tools: [
    { name: "Git", proficiency: 90 },
    { name: "GitHub", proficiency: 85 },
    { name: "VS Code", proficiency: 95 },
    { name: "Figma", proficiency: 80 },
    { name: "Docker", proficiency: 60 },
    { name: "Webpack", proficiency: 55 },
    { name: "Vite", proficiency: 85 },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
    image: "/images/project1.jpg",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com/username/ecommerce-platform",
    live: "https://ecommerce-platform.vercel.app",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and drag-and-drop interface.",
    image: "/images/project2.jpg",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/username/task-manager",
    live: "https://task-manager-app.vercel.app",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A modern weather dashboard with API integration, location detection, and beautiful visualizations.",
    image: "/images/project3.jpg",
    tech: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    github: "https://github.com/username/weather-dashboard",
    live: "https://weather-dashboard.vercel.app",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "This personal portfolio website built with React, Vite, and Tailwind CSS.",
    image: "/images/project4.jpg",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "EmailJS"],
    github: "https://github.com/username/portfolio",
    live: "https://personal-portfolio-vite.vercel.app",
  },
];

export const experienceData = [
  {
    id: 1,
    date: "2022 - Present",
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    description: "Led development of responsive web applications using React and TypeScript. Improved performance by 40% through code optimization and implemented CI/CD pipelines.",
  },
  {
    id: 2,
    date: "2020 - 2022",
    role: "Frontend Developer",
    company: "Creative Solutions Agency",
    description: "Developed responsive websites and web applications for clients across various industries. Collaborated with designers to implement pixel-perfect designs.",
  },
  {
    id: 3,
    date: "2019 - 2020",
    role: "Junior Web Developer",
    company: "StartupXYZ",
    description: "Built and maintained WordPress websites, created custom themes and plugins, and provided technical support to clients.",
  },
  {
    id: 4,
    date: "2018 - 2019",
    role: "Web Development Intern",
    company: "Digital Media Co.",
    description: "Assisted in frontend development tasks, learned modern web technologies, and contributed to internal tools and dashboards.",
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/username", icon: "SiGithub" },
  { name: "LinkedIn", url: "https://linkedin.com/in/username", icon: "SiLinkedin" },
  { name: "Twitter", url: "https://twitter.com/username", icon: "SiTwitter" },
  { name: "Email", url: "mailto:email@example.com", icon: "SiGmail" },
];