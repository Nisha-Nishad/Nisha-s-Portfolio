export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const personalInfo = {
  name: "Nisha Nishad",
  firstName: "Nisha",
  lastName: "Nishad",
  degree: "B.Tech in Computer Science & Engineering (AIML)",
  heroBio:
    "I build fast, responsive, and user-friendly web applications with React, TypeScript, and modern tools — blending clean architecture with AI to turn innovative ideas into real-world products.",
  roles: "Web Developer | AI & ML Engineer",
  title: "Web Developer & AI/ML Enthusiast",
  subtitle: "B.Tech CSE (AIML) Graduate • Web Developer | AI & ML Engineer",
  bio: "I enjoy building intelligent, scalable, and user-friendly applications using modern web technologies, machine learning, and generative AI. Passionate about problem-solving, continuous learning, and delivering high-quality digital solutions.",
  aboutP1: "I hold a B.Tech degree in Computer Science & Engineering with a specialization in Artificial Intelligence & Machine Learning (AIML). As a Web Developer and Machine Learning Engineer, I enjoy turning complex concepts into responsive, high-performance applications and solving real-world challenges through modern technology.",
  aboutP2: "I work across both frontend and backend technologies, and I love the process of transforming ideas into robust digital products — writing clean, maintainable code, building structured APIs, and crafting intuitive user experiences.",
  email: "snishanishad@gmail.com",
  phone: "XXXXXXXX47",
  phoneDisplay: "XXXXXXXX47",
  linkedin: "https://www.linkedin.com/in/nisha-nishad-b94877286/",
  linkedinDisplay: "linkedin.com/in/nisha-nishad-b94877286/",
  github: "https://github.com/Nisha-Nishad",
  twitter: "https://x.com/Snisha0908",
  resume: "/resume.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Crafting lightning-fast, interactive, and responsive user interfaces.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Vite & Next.js",
      "Responsive Design",
      "State Management",
    ],
  },
  {
    title: "Backend & Database",
    description: "Developing scalable APIs, secure authentication, and data architecture.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "RESTful APIs",
      "SQL",
      "Authentication (JWT/OAuth)",
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Building intelligent algorithms, neural models, and data-driven intelligence.",
    skills: [
      "Python",
      "Machine Learning",
      "Generative AI",
      "Big Data Computing",
      "Edge ML & IoT",
      "Data Structures & Algorithms",
      "Model Evaluation",
    ],
  },
  {
    title: "Programming & Developer Tools",
    description: "Core languages, version control, API testing, and deployment platforms.",
    skills: [
      "C & C++",
      "Java",
      "Python",
      "Flutter",
      "Git & GitHub",
      "Postman",
      "Render & Vercel",
      "VS Code",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "ShopEase - E-Commerce Platform",
    description:
      "ShopEase is a modern, responsive full-stack e-commerce platform that offers a seamless shopping experience, featuring curated product categories, dynamic search, interactive cart management, a wishlist, and smooth checkout workflows across all devices.",
    image: "/assets/shopease-showcase.png",
    imageAlt:
      "ShopEase e-commerce application desktop and mobile responsive showcase",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API", "E-Commerce", "Responsive Design"],
    liveUrl: "https://shopease-jiz6.onrender.com/",
    githubUrl: "https://github.com/Nisha-Nishad/ShopEase",
  },
];
