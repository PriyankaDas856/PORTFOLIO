export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  metric?: { value: number; suffix: string; label: string };
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "patent",
    title: "Patent Filed",
    description: "Filed patent for an AI-driven healthcare record management system (MedPass innovation).",
    year: "2025",
    metric: { value: 1, suffix: "", label: "Patent Filed" },
  },
  {
    id: "star-performer",
    title: "Star Performer Award",
    description: "Recognized for exceptional delivery and innovation during internship at Oasis Infobyte.",
    year: "2024",
    metric: { value: 1, suffix: "", label: "Award Received" },
  },
  {
    id: "smart-india-hackathon",
    title: "Smart India Hackathon",
    description: "Presented EcoLens India — AI-powered environmental monitoring platform for sustainable development.",
    year: "2024",
    metric: { value: 50000, suffix: "+", label: "Sq Km Monitored" },
  },
  {
    id: "projects-shipped",
    title: "Products Shipped",
    description: "Built and deployed 5+ AI-powered products spanning healthcare, analytics, and sustainability.",
    year: "2024 — Present",
    metric: { value: 5, suffix: "+", label: "Projects Built" },
  },
  {
    id: "internships",
    title: "Industry Experience",
    description: "Completed internships across product engineering, full-stack development, and research.",
    year: "2024 — Present",
    metric: { value: 5, suffix: "+", label: "Internships" },
  },
  {
    id: "open-source",
    title: "Open Source",
    description: "Active contributor with repositories focused on AI tools and developer experience.",
    year: "Present",
    metric: { value: 10, suffix: "+", label: "Repositories" },
  },
];
