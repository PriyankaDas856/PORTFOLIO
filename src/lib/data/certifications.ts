export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  logo: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "ibm-ai",
    title: "IBM AI Engineering Professional Certificate",
    issuer: "IBM",
    date: "2025",
    credentialId: "IBM-AI-2025",
    link: "https://coursera.org",
    logo: "IBM",
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-CP-2024",
    link: "https://aws.amazon.com/certification",
    logo: "AWS",
  },
  {
    id: "linkedin-react",
    title: "React.js Essential Training",
    issuer: "LinkedIn Learning",
    date: "2024",
    link: "https://linkedin.com/learning",
    logo: "LinkedIn",
  },
  {
    id: "linkedin-ux",
    title: "UX Design Foundations",
    issuer: "LinkedIn Learning",
    date: "2024",
    link: "https://linkedin.com/learning",
    logo: "LinkedIn",
  },
  {
    id: "ibm-data",
    title: "Data Science Methodology",
    issuer: "IBM",
    date: "2024",
    credentialId: "IBM-DS-2024",
    link: "https://coursera.org",
    logo: "IBM",
  },
];
