export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;

  category: string;
  year: string;
  status: "Live" | "In Development" | "Research";
  featured: boolean;

  accent: string;
  image: string;

  problem: string;
  solution: string;

  features: string[];
  architecture: string;
  techStack: string[];

  challenges: string[];
  impact: string[];

  research?: string;

  timeline: {
    phase: string;
    duration: string;
  }[];

  lessonsLearned: string[];
  futureScope: string[];

  github?: string;
  liveDemo?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "medpass",

    title: "MedPass",

    tagline:
      "AI-powered digital healthcare passport for secure medical record management.",

    description:
      "MedPass is a full-stack healthcare platform designed to centralize fragmented medical records while making them secure, accessible, and easier to understand. Patients can upload prescriptions, reports, scans, and laboratory documents into one encrypted workspace where AI generates simplified summaries and emergency responders can securely access critical information using QR-based emergency access.",

    category: "Healthcare • Artificial Intelligence",

    year: "2026",

    status: "In Development",

    featured: true,

    accent: "#5B7CFA",

    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",

    problem:
      "Healthcare records are typically scattered across hospitals, laboratories, clinics, and personal storage. Patients frequently struggle to organize reports, remember treatments, or share complete medical histories with new healthcare providers. During emergencies, doctors often lack immediate access to essential patient information, delaying treatment.",

    solution:
      "MedPass introduces a centralized digital health passport that securely stores medical records, organizes them automatically, and leverages AI to explain complex medical reports in simpler language. The platform also provides QR-based emergency access that exposes only critical health information while protecting sensitive patient data.",

    features: [
      "Centralized cloud-based medical record management",

      "AI-powered report interpretation and simplified summaries",

      "Encrypted QR-based emergency medical access",

      "Patient profile with allergies, blood group and emergency contacts",

      "Role-based authentication using Supabase Auth",

      "Secure file uploads with structured metadata",

      "Medical history timeline",

      "Searchable medical documents",

      "Responsive web dashboard",

      "Cross-platform mobile experience using React Native (Expo)"
    ],

    architecture:
      "The platform follows a modular architecture consisting of a React Native mobile application, a Next.js web portal for emergency QR access, Supabase Authentication for secure identity management, PostgreSQL for structured healthcare data, Supabase Storage for encrypted document storage, and AI-powered backend services responsible for interpreting uploaded medical documents.",

    techStack: [
      "React Native (Expo)",
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Supabase Storage",
      "Supabase Auth",
      "Tailwind CSS",
      "OpenAI API",
      "OCR"
    ],

    challenges: [
      "Designing healthcare workflows that remain simple for non-technical users",

      "Building secure document access without compromising usability",

      "Structuring uploaded medical reports into searchable records",

      "Generating AI summaries without presenting medical diagnoses",

      "Maintaining scalability while handling large document uploads"
    ],

    impact: [
      "Provides a single platform for managing lifelong medical records",

      "Reduces manual searching through physical medical files",

      "Improves accessibility of healthcare information",

      "Makes medical reports easier for patients to understand",

      "Demonstrates practical application of AI in digital healthcare"
    ],

    research:
      "The project was designed after studying existing healthcare management systems, identifying limitations in fragmented record keeping, and analysing how AI could improve accessibility without replacing professional medical advice.",

    timeline: [
      {
        phase: "Problem Research",
        duration: "2 Weeks"
      },
      {
        phase: "System Design",
        duration: "2 Weeks"
      },
      {
        phase: "Database & Backend",
        duration: "3 Weeks"
      },
      {
        phase: "Frontend Development",
        duration: "4 Weeks"
      },
      {
        phase: "AI Integration",
        duration: "2 Weeks"
      },
      {
        phase: "Testing & Refinement",
        duration: "Ongoing"
      }
    ],

    lessonsLearned: [
      "Healthcare applications demand security-first thinking from the beginning.",

      "AI should support users by simplifying information rather than replacing professionals.",

      "Database design has a significant impact on future scalability.",

      "User trust depends heavily on transparency and privacy."
    ],

    futureScope: [
      "Hospital integration through standardized healthcare APIs",

      "Wearable device synchronization",

      "Medicine reminder automation",

      "Doctor appointment scheduling",

      "Multilingual AI summaries",

      "Offline emergency access"
    ],

    github: "https://github.com/PriyankaDas856/Medpass"
  },
    {
    slug: "skylark-bi-agent",

    title: "Skylark BI Agent",

    tagline:
      "AI-powered business intelligence assistant for conversational analytics.",

    description:
      "Skylark BI Agent enables business users to analyse operational data using natural language instead of dashboards or SQL. It connects with Monday.com boards, normalizes business data, and leverages large language models to answer analytical questions with contextual insights.",

    category: "Artificial Intelligence • Business Intelligence",

    year: "2026",

    status: "Live",

    featured: true,

    accent: "#7B61FF",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",

    problem:
      "Operational teams often rely on analysts for routine reporting because business data is fragmented across multiple boards and spreadsheets. Non-technical users struggle to extract actionable insights without SQL knowledge.",

    solution:
      "The BI Agent automatically retrieves data from Monday.com, normalizes inconsistencies, analyses datasets using AI, and allows users to ask questions in plain English while receiving contextual summaries, trends, and recommendations.",

    features: [
      "Natural language business analytics",

      "Monday.com GraphQL integration",

      "Automatic dataset normalization",

      "Data quality reporting",

      "Context-aware AI responses",

      "FastAPI backend",

      "REST API architecture",

      "Interactive dashboard",

      "Business KPI summarization",

      "Conversation memory"
    ],

    architecture:
      "The application follows a service-oriented architecture consisting of a FastAPI backend, Monday.com GraphQL API integration layer, preprocessing pipeline for data normalization, AI orchestration layer for natural-language reasoning, and a React frontend that presents conversational business insights.",

    techStack: [
      "FastAPI",
      "Python",
      "React",
      "TypeScript",
      "Monday.com API",
      "GraphQL",
      "Pandas",
      "OpenAI API",
      "Tailwind CSS"
    ],

    challenges: [
      "Handling inconsistent column structures across multiple boards",

      "Cleaning incomplete datasets before AI analysis",

      "Reducing hallucinations during analytical reasoning",

      "Maintaining fast response times for large datasets",

      "Designing prompts that produce reliable business insights"
    ],

    impact: [
      "Simplifies business analytics for non-technical stakeholders",

      "Automates repetitive reporting workflows",

      "Reduces manual spreadsheet analysis",

      "Improves accessibility of operational insights",

      "Demonstrates practical enterprise AI integration"
    ],

    research:
      "The project involved analysing real business workflows, studying BI dashboards, and understanding how conversational AI can improve decision-making for business teams.",

    timeline: [
      {
        phase: "Requirement Analysis",
        duration: "1 Week"
      },
      {
        phase: "API Integration",
        duration: "2 Weeks"
      },
      {
        phase: "Backend Development",
        duration: "3 Weeks"
      },
      {
        phase: "AI Integration",
        duration: "2 Weeks"
      },
      {
        phase: "Testing",
        duration: "2 Weeks"
      }
    ],

    lessonsLearned: [
      "Data quality is more important than model complexity.",

      "Prompt engineering significantly affects analytical accuracy.",

      "Business users value explainability over technical depth.",

      "Normalization pipelines greatly improve AI consistency."
    ],

    futureScope: [
      "Support multiple BI platforms",

      "Predictive analytics",

      "Scheduled reporting",

      "Interactive charts",

      "Voice-based querying"
    ]
  },

  {
    slug: "iiris",

    title: "IIRIS",

    tagline:
      "AI-powered intelligent incident response and monitoring platform.",

    description:
      "IIRIS is a modern incident management platform that helps IT teams detect, prioritise, and respond to infrastructure incidents using machine learning, automated workflows, and real-time monitoring.",

    category: "Artificial Intelligence • DevOps",

    year: "2025",

    status: "Live",

    featured: true,

    accent: "#10B981",

    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&q=80",

    problem:
      "Large organisations receive thousands of infrastructure alerts every day. Manual investigation causes delayed responses, alert fatigue, and inconsistent incident handling.",

    solution:
      "IIRIS groups related alerts, classifies incident severity, recommends remediation steps, and provides a centralized incident timeline for faster operational decision-making.",

    features: [
      "Real-time incident monitoring",

      "AI severity prediction",

      "Alert correlation",

      "Incident timeline",

      "Automated notification workflows",

      "Knowledge-base recommendations",

      "Root cause assistance",

      "Dashboard analytics"
    ],

    architecture:
      "The platform uses an event-driven backend where monitoring events are streamed into AI classification services before being delivered to a React dashboard through WebSockets for real-time updates.",

    techStack: [
      "Python",
      "FastAPI",
      "React",
      "WebSockets",
      "Docker",
      "PostgreSQL",
      "scikit-learn"
    ],

    challenges: [
      "Processing thousands of incoming alerts efficiently",

      "Reducing duplicate incident creation",

      "Improving classification accuracy",

      "Designing dashboards for high-pressure operational environments"
    ],

    impact: [
      "Accelerates incident investigation",

      "Reduces operational noise",

      "Improves visibility into infrastructure health",

      "Demonstrates practical AI-assisted DevOps workflows"
    ],

    timeline: [
      {
        phase: "Research",
        duration: "2 Weeks"
      },
      {
        phase: "Backend",
        duration: "4 Weeks"
      },
      {
        phase: "ML Pipeline",
        duration: "3 Weeks"
      },
      {
        phase: "Frontend",
        duration: "3 Weeks"
      }
    ],

    lessonsLearned: [
      "Reliable monitoring requires both automation and human oversight.",

      "Performance becomes increasingly important as event volume grows.",

      "Clear visualisation improves operational efficiency."
    ],

    futureScope: [
      "Predictive incident prevention",

      "Cloud-native deployment",

      "Automated remediation",

      "Multi-cloud monitoring",

      "Infrastructure health scoring"
    ],

    github: "https://github.com/PriyankaDas856/IIRIS"
  },
    {
    slug: "crowdmind-ai",

    title: "CrowdMind AI",

    tagline:
      "Collaborative intelligence platform for structured decision making.",

    description:
      "CrowdMind AI enables organisations and communities to make better decisions by combining collective human intelligence with AI-powered idea clustering, summarisation, and prioritisation. Instead of relying on long discussions or scattered feedback, it transforms hundreds of opinions into structured, actionable insights.",

    category: "Artificial Intelligence • Collaboration",

    year: "2025",

    status: "In Development",

    featured: true,

    accent: "#F59E0B",

    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80",

    problem:
      "Important organisational decisions often involve numerous stakeholders whose ideas are difficult to collect, organise, and evaluate efficiently. Valuable insights are frequently overlooked during manual discussions.",

    solution:
      "CrowdMind AI provides anonymous idea submission, AI-based clustering of similar suggestions, intelligent summarisation, collaborative voting, and transparent decision tracking to improve participation and decision quality.",

    features: [
      "Anonymous idea submission",

      "AI-powered idea clustering",

      "Semantic similarity detection",

      "Collaborative voting",

      "Decision analytics dashboard",

      "Sentiment analysis",

      "Discussion summaries",

      "Role-based workspace management"
    ],

    architecture:
      "The platform combines a Next.js frontend with Supabase Authentication, PostgreSQL, realtime collaboration services, and an LLM-powered semantic clustering engine to organise discussions into meaningful decision groups.",

    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "OpenAI API",
      "Framer Motion"
    ],

    challenges: [
      "Preventing duplicate idea clustering",

      "Maintaining fairness during collaborative voting",

      "Summarising lengthy discussions accurately",

      "Balancing anonymity with accountability"
    ],

    impact: [
      "Encourages broader stakeholder participation",

      "Reduces manual effort in analysing discussions",

      "Improves transparency during decision making",

      "Demonstrates practical AI-assisted collaboration"
    ],

    timeline: [
      {
        phase: "Research",
        duration: "2 Weeks"
      },
      {
        phase: "Design",
        duration: "2 Weeks"
      },
      {
        phase: "Development",
        duration: "5 Weeks"
      },
      {
        phase: "Testing",
        duration: "Ongoing"
      }
    ],

    lessonsLearned: [
      "AI should organise discussions without replacing human judgement.",

      "Simple interfaces increase participation.",

      "Realtime collaboration requires careful database design."
    ],

    futureScope: [
      "Enterprise workspace support",

      "Video meeting integration",

      "Organisation-wide analytics",

      "AI moderation",

      "Knowledge graph generation"
    ]
  },

  {
    slug: "ecolens-india",

    title: "EcoLens India",

    tagline:
      "Computer vision platform for environmental monitoring.",

    description:
      "EcoLens India applies computer vision and geospatial analytics to monitor forests, pollution, urban expansion, and environmental change using satellite imagery. The platform provides researchers and organisations with visual insights for sustainable planning.",

    category: "Artificial Intelligence • Sustainability",

    year: "2025",

    status: "Research",

    featured: true,

    accent: "#059669",

    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80",

    problem:
      "Environmental monitoring traditionally depends on manual surveys that are expensive, slow, and unable to cover large geographical regions effectively.",

    solution:
      "EcoLens automates environmental analysis using satellite imagery, deep learning models, and interactive geographic dashboards that identify meaningful environmental changes over time.",

    features: [
      "Satellite image processing",

      "Forest cover analysis",

      "Change detection",

      "Environmental dashboards",

      "Interactive GIS visualisation",

      "Historical comparison",

      "Pollution monitoring",

      "Research data export"
    ],

    architecture:
      "EcoLens combines deep learning image segmentation models with geospatial processing pipelines and an interactive React dashboard that visualises environmental changes through map-based interfaces.",

    techStack: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "React",
      "Mapbox",
      "GDAL",
      "AWS"
    ],

    challenges: [
      "Processing large satellite datasets",

      "Training accurate segmentation models",

      "Handling seasonal environmental variation",

      "Visualising complex geographic information"
    ],

    impact: [
      "Supports environmental research",

      "Encourages sustainable planning",

      "Demonstrates AI applications beyond traditional software products",

      "Highlights practical use of computer vision"
    ],

    timeline: [
      {
        phase: "Research",
        duration: "3 Weeks"
      },
      {
        phase: "Dataset Preparation",
        duration: "4 Weeks"
      },
      {
        phase: "Model Training",
        duration: "4 Weeks"
      },
      {
        phase: "Dashboard Development",
        duration: "3 Weeks"
      }
    ],

    lessonsLearned: [
      "Data quality directly influences model performance.",

      "Visualisation is equally as important as prediction accuracy.",

      "Environmental AI requires continuous validation."
    ],

    futureScope: [
      "Drone imagery support",

      "Real-time monitoring",

      "Government integration",

      "Carbon footprint estimation",

      "Disaster prediction assistance"
    ]
  }
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((project) => project.featured);
}