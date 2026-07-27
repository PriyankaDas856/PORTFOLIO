"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/types/blog";
import { TextReveal, BlurReveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="section-spacing section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="label-mono text-primary mb-4 block">Blog</span>
            <h2 className="display-heading text-[clamp(2rem,5vw,3.5rem)]">
              <TextReveal>Thoughts & learnings</TextReveal>
            </h2>
          </div>
          <Link href="/blog" className="text-sm text-muted hover:text-primary transition-colors flex items-center gap-1 group" data-cursor="button">
            View all posts
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlurReveal key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="card card-hover p-6 flex flex-col h-full group" data-cursor="button">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="text-xs text-muted">{post.readTime}</span>
                </div>
                <h3 className="font-medium text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed flex-1">{post.excerpt}</p>
                <span className="text-xs text-muted-foreground mt-4">{post.date}</span>
              </Link>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
