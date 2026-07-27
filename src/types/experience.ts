export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  achievements: string[];
  technologies: string[];
  responsibilities: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "iit-bhubaneswar",
    company: "IIT Bhubaneswar Collaboration",
    role: "Research & Development Collaborator",
    duration: "2025 — Present",
    location: "Remote",
    type: "Academic Collaboration",
    achievements: [
      "Contributed to AI-driven research initiatives with interdisciplinary teams",
      "Developed prototypes bridging academic research and product applications",
      "Presented findings on intelligent systems and data-driven decision making",
    ],
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    responsibilities: [
      "Collaborate with faculty and researchers on AI/ML projects",
      "Design and implement proof-of-concept applications",
      "Document research outcomes and technical architecture",
    ],
  },
  {
    id: "motioncut",
    company: "MotionCut",
    role: "Product Engineering Intern",
    duration: "2025",
    location: "Bangalore, India",
    type: "Internship",
    achievements: [
      "Shipped features improving user engagement by 35%",
      "Redesigned core workflows reducing task completion time by 40%",
      "Built reusable component library adopted across the product",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
    responsibilities: [
      "Develop full-stack features from design to deployment",
      "Collaborate with design team on UI/UX implementation",
      "Participate in product planning and sprint ceremonies",
    ],
  },
  {
    id: "internselite",
    company: "InternsElite",
    role: "Full Stack Developer Intern",
    duration: "2024 — 2025",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Built and deployed 3 client-facing web applications",
      "Improved application performance achieving 95+ Lighthouse scores",
      "Mentored junior interns on React best practices",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    responsibilities: [
      "Develop responsive web applications for diverse clients",
      "Implement RESTful APIs and database schemas",
      "Conduct code reviews and maintain documentation",
    ],
  },
  {
    id: "oasis-infobyte",
    company: "Oasis Infobyte",
    role: "Web Development Intern",
    duration: "2024",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Delivered 5+ production-ready web modules on schedule",
      "Reduced page load times by 50% through optimization",
      "Received Star Performer recognition for exceptional delivery",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Git"],
    responsibilities: [
      "Build and maintain client websites and web applications",
      "Implement responsive designs from Figma mockups",
      "Debug and resolve production issues",
    ],
  },
  {
    id: "krutanic",
    company: "Krutanic Solutions",
    role: "Software Development Intern",
    duration: "2024",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Contributed to internal tools automating business workflows",
      "Integrated third-party APIs reducing manual data entry by 60%",
      "Created technical documentation for onboarding new developers",
    ],
    technologies: ["Python", "Django", "JavaScript", "MySQL", "Docker"],
    responsibilities: [
      "Develop backend services and API integrations",
      "Write unit tests and maintain code quality standards",
      "Support deployment and monitoring of applications",
    ],
  },
];
