import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";
import { PROJECTS } from "@/types/projects";
import { getAllSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const projectUrls = PROJECTS.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const blogUrls = getAllSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/now`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ...projectUrls,
    ...blogUrls,
  ];
}
