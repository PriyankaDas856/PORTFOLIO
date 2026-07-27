export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export const LEADERSHIP: LeadershipItem[] = [
  {
    id: "tech-club",
    role: "Technical Lead",
    organization: "Jain University Tech Club",
    period: "2024 — Present",
    description: "Leading a team of 20+ students building AI and web projects for university and community impact.",
    highlights: [
      "Organized 3 hackathons with 200+ participants",
      "Mentored 15 junior developers on React and Python",
      "Established weekly tech talk series",
    ],
  },
  {
    id: "ai-society",
    role: "Founder & President",
    organization: "AI Innovation Society",
    period: "2024 — Present",
    description: "Founded student organization focused on practical AI applications and industry collaboration.",
    highlights: [
      "Grew membership to 50+ active members",
      "Hosted workshops with industry professionals",
      "Led team to Smart India Hackathon finals",
    ],
  },
  {
    id: "open-source",
    role: "Open Source Contributor",
    organization: "Various Projects",
    period: "2023 — Present",
    description: "Contributing to open source projects in AI tooling, developer experience, and accessibility.",
    highlights: [
      "10+ repositories with active maintenance",
      "Contributions to documentation and bug fixes",
      "Created starter templates used by 100+ developers",
    ],
  },
];
