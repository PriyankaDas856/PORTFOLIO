import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, PROJECTS } from "@/types/projects";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.tagline, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
