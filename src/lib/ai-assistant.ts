import { SITE, PROFILE, ROLES } from "@/lib/constants/site";
import { PROJECTS } from "@/types/projects";
import { EXPERIENCE } from "@/types/experience";
import { SKILLS } from "@/lib/data/skills";
import { ACHIEVEMENTS } from "@/lib/data/achievements";
import { NOW } from "@/lib/data/now";


interface KnowledgeEntry {
  keywords: string[];
  response: string;
}


const PROJECT_RESPONSES = PROJECTS.map((project) => ({
  keywords: [
    project.title.toLowerCase(),
    project.slug.replace(/-/g, " "),
    "project",
    "built",
    "created",
  ],

  response: `
${project.title}

${project.description}

Problem:
${project.problem}

Technology:
${project.techStack.join(", ")}

Impact:
${project.impact.join(", ")}
`,
}));



const KNOWLEDGE: KnowledgeEntry[] = [

  {
    keywords: [
      "who",
      "introduce",
      "yourself",
      "background",
      "bio",
      "profile"
    ],

    response:
`I'm ${SITE.name}, a ${SITE.role} graduating in ${SITE.graduation} from Jain University.

${PROFILE.summary}

My focus is building AI-powered products that combine engineering, design thinking, and real-world impact.`,
  },


  {
    keywords: [
      "skill",
      "skills",
      "technology",
      "technologies",
      "tech stack",
      "framework",
      "frameworks",
      "programming",
      "languages",
      "tools",
      "ai",
      "machine learning",
      "llm",
      "development"
    ],

    response:
`My technical skills include:

Programming:
Python, Java, C++, JavaScript, TypeScript, SQL

Frontend:
React, Next.js, Tailwind CSS

Backend:
FastAPI, Node.js, Express

AI:
LLMs, RAG pipelines, Machine Learning, Computer Vision

Databases:
PostgreSQL, MongoDB, Supabase

I also work on UI/UX design, product engineering, and business analysis.`,
  },


  {
    keywords: [
      "project",
      "projects",
      "built",
      "created",
      "application",
      "app",
      "product"
    ],

    response:
`I've built multiple projects across AI, healthcare, analytics, and sustainability.

Major projects include:

${PROJECTS.map(
(p)=>`• ${p.title}`
).join("\n")}

Ask me about any specific project.`,
  },


  {
    keywords: [
      "medpass",
      "healthcare",
      "medical",
      "patient",
      "hospital",
      "doctor",
      "records",
      "emergency",
      "qr"
    ],

    response:
`MedPass is an AI-powered digital healthcare passport.

It solves the problem of scattered medical records by providing:

• Centralized medical record management
• QR-based emergency access
• AI-assisted medical file interpretation
• Secure healthcare information sharing

Technology:
React Native, Next.js, Supabase, PostgreSQL, TypeScript, AI/LLM integration.

It is also the project behind Priyanka's patent application.`,
  },


  {
    keywords: [
      "skylark",
      "business intelligence",
      "bi",
      "analytics",
      "monday",
      "dashboard",
      "data analysis"
    ],

    response:
`Skylark BI Agent is an AI-powered business intelligence assistant.

It analyzes business data and generates insights from operational platforms.

Technology:
FastAPI, Python, APIs, AI integrations, and data processing.`,
  },


  {
    keywords: [
      "experience",
      "internship",
      "intern",
      "companies",
      "worked",
      "professional"
    ],

    response:
`Priyanka has experience across AI, web development, and product engineering.

Experience includes:

${EXPERIENCE.map(
(e)=>`• ${e.company} — ${e.role}`
).join("\n")}

Her work focuses on building practical software products.`,
  },


  {
    keywords: [
      "achievement",
      "achievements",
      "award",
      "patent",
      "hackathon"
    ],

    response:
`Achievements:

${ACHIEVEMENTS.map(
(a)=>`• ${a.title}: ${a.description}`
).join("\n")}`,
  },


  {
    keywords: [
      "contact",
      "email",
      "reach",
      "connect",
      "linkedin"
    ],

    response:
`You can contact Priyanka through:

Email:
${SITE.email}

Location:
${SITE.location}

She is open to:
${NOW.openTo.join(", ")}`,
  },


  {
    keywords: [
      "education",
      "college",
      "university",
      "degree",
      "study",
      "btech"
    ],

    response:
`Priyanka is pursuing B.Tech in Computer Science & Business Systems at Jain University.

Graduation:
${SITE.graduation}

The program combines computer science, technology, and business systems.`,
  },


  {
    keywords: [
      "why hire",
      "hire",
      "candidate",
      "strength",
      "good fit",
      "company"
    ],

    response:
`Priyanka combines three areas:

• Software engineering
• AI product development
• Product and design thinking

She has experience building complete AI-powered products, working on internships, and solving real-world problems through technology.`,
  },


  {
    keywords: [
      "currently",
      "learning",
      "now",
      "building",
      "reading"
    ],

    response:
`Currently:

Learning:
${NOW.learning.map(
(l)=>l.topic
).join(", ")}

Building:
${NOW.building.join(", ")}

Reading:
${NOW.reading.map(
(r)=>r.title
).join(", ")}`,
  },


  {
    keywords: [
      "role",
      "developer",
      "designer",
      "product engineer"
    ],

    response:
`Priyanka works across multiple roles:

${ROLES.join(", ")}

Her focus is AI-powered product engineering.`,
  },


  {
    keywords: [
      "location",
      "where",
      "based",
      "bangalore",
      "india"
    ],

    response:
`Priyanka is based in ${SITE.location}.

She moved to Bangalore for higher education and technology opportunities.`,
  },

];


const FALLBACK =
`I can help you learn about Priyanka's:

• Projects
• Skills
• AI work
• Internships
• Achievements
• Education
• Contact details

Try asking:
"Tell me about MedPass"
or
"What projects has Priyanka built?"`;



export function getAIResponse(input: string): string {

  const normalized = input
    .toLowerCase()
    .trim();


  let bestResponse = FALLBACK;
  let highestScore = 0;



  // Check projects with scoring

  for (const project of PROJECT_RESPONSES) {

    let score = 0;


    for (const keyword of project.keywords) {

      if (normalized.includes(keyword)) {

        score++;

      }

    }


    if (score > highestScore) {

      highestScore = score;
      bestResponse = project.response;

    }

  }



  // Check general knowledge with scoring

  for (const entry of KNOWLEDGE) {

    let score = 0;


    for (const keyword of entry.keywords) {

      if (normalized.includes(keyword)) {

        score++;

      }

    }


    if (score > highestScore) {

      highestScore = score;
      bestResponse = entry.response;

    }

  }



  return bestResponse;

}



export function getSuggestedQuestions(): string[] {
  return [
    "Tell me about Priyanka",
    "What projects has she built?",
    "Explain MedPass",
    "What technologies does she know?",
    "What AI projects has she worked on?",
    "Tell me about her internships",
    "What is her biggest achievement?",
    "Why should we hire Priyanka?",
    "What makes MedPass unique?",
    "What is her tech stack?",
    "Tell me about her patent",
    "Does she have experience with AI/ML?",
    "What is her education background?",
    "What roles is she looking for?",
    "How can I contact her?"
  ];
}