export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "building-ai-products",
    title: "Building AI Products That People Actually Use",
    excerpt:
      "Lessons from shipping 5 AI-powered products — what works, what fails, and how to bridge the gap between demo and daily use.",
    date: "2025-06-15",
    category: "AI",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "design-systems-for-startups",
    title: "Design Systems for Startups: Start Small, Scale Smart",
    excerpt:
      "You don't need a 200-component library on day one. Here's how to build design systems that grow with your product.",
    date: "2025-05-20",
    category: "Design",
    readTime: "6 min",
  },
  {
    slug: "from-idea-to-mvp",
    title: "From Idea to MVP in 4 Weeks",
    excerpt:
      "My framework for validating ideas quickly — research, design, build, and ship without sacrificing quality.",
    date: "2025-04-10",
    category: "Product",
    readTime: "10 min",
    featured: true,
  },
  {
    slug: "healthcare-ux-challenges",
    title: "UX Challenges in Healthcare Technology",
    excerpt:
      "Designing for patients, providers, and compliance — navigating the unique constraints of health tech.",
    date: "2025-03-05",
    category: "UX",
    readTime: "7 min",
  },
];

export const BLOG_CATEGORIES = ["All", "AI", "Design", "Product", "UX", "Engineering"] as const;
