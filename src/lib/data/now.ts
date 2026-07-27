export const NOW = {
  lastUpdated: "July 2026",
  learning: [
    { topic: "Advanced RAG architectures", progress: "Deep diving into retrieval optimization" },
    { topic: "System design", progress: "Preparing for technical interviews" },
    { topic: "Product management", progress: "Reading Inspired by Marty Cagan" },
  ],
  building: [
    "MedPass — healthcare platform beta launch",
    "Portfolio v2 with AI assistant",
    "Open source CLI tool for developers",
  ],
  reading: [
    { title: "The Design of Everyday Things", author: "Don Norman" },
    { title: "Inspired", author: "Marty Cagan" },
    { title: "Designing Machine Learning Systems", author: "Chip Huyen" },
  ],
  listening: "Deep Work playlists and tech podcasts",
  location: "Bangalore, India",
  openTo: ["Internships", "Collaborations", "AI/Product roles", "Hackathons"],
} as const;

export const BOOKSHELF = [
  { title: "The Design of Everyday Things", author: "Don Norman", category: "Design" },
  { title: "Inspired", author: "Marty Cagan", category: "Product" },
  { title: "Clean Code", author: "Robert C. Martin", category: "Engineering" },
  { title: "Designing Machine Learning Systems", author: "Chip Huyen", category: "AI/ML" },
  { title: "Hooked", author: "Nir Eyal", category: "Product" },
  { title: "Don't Make Me Think", author: "Steve Krug", category: "UX" },
  { title: "Atomic Habits", author: "James Clear", category: "Personal Growth" },
  { title: "The Lean Startup", author: "Eric Ries", category: "Business" },
] as const;

export const WORKFLOW = [
  { step: "01", title: "Discover", description: "Research users, map problems, define success metrics" },
  { step: "02", title: "Design", description: "Wireframes → prototypes → visual design in Figma" },
  { step: "03", title: "Build", description: "Ship iteratively with TypeScript, tests, and CI/CD" },
  { step: "04", title: "Measure", description: "Analytics, user feedback, and continuous improvement" },
] as const;

export const FAVORITE_TOOLS = [
  { name: "VS Code", category: "Editor" },
  { name: "Figma", category: "Design" },
  { name: "Linear", category: "Project Management" },
  { name: "Notion", category: "Notes" },
  { name: "Raycast", category: "Productivity" },
  { name: "Vercel", category: "Deployment" },
  { name: "ChatGPT", category: "AI Assistant" },
  { name: "Arc Browser", category: "Browser" },
] as const;
