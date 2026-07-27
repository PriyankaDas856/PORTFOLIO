export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS", "Responsive Design"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "FastAPI", "Express", "Django", "REST APIs", "GraphQL"],
  },
  {
    id: "ai",
    label: "AI & ML",
    skills: ["LangChain", "OpenAI API", "TensorFlow", "scikit-learn", "RAG Pipelines", "Computer Vision"],
  },
  {
    id: "database",
    label: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Pinecone", "MySQL"],
  },
  {
    id: "business",
    label: "Business",
    skills: ["Business Analysis", "Product Strategy", "Market Research", "Stakeholder Management", "Agile/Scrum"],
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["Git", "Docker", "AWS", "Figma", "VS Code", "Linear", "Notion"],
  },
  {
    id: "soft",
    label: "Soft Skills",
    skills: ["Leadership", "Communication", "Problem Solving", "Team Collaboration", "Presentation", "Mentoring"],
  },
];
