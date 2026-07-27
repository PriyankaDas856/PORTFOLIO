import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Blog",
  description: "Thoughts on AI, product design, and building digital products.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen section-padding pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-muted hover:text-primary transition-colors mb-8 inline-block">
          ← Back home
        </Link>
        <span className="label-mono text-primary mb-4 block">Blog</span>
        <h1 className="display-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">Thoughts & learnings</h1>
        <p className="text-muted font-light mb-12 max-w-lg">
          Writing about AI products, design systems, and the craft of building software.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card card-hover p-6 md:p-8 block group"
            >
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="outline">{post.category}</Badge>
                <span className="text-xs text-muted">{post.readTime}</span>
                <span className="text-xs text-muted">· {post.date}</span>
              </div>
              <h2 className="display-heading text-xl mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-sm text-muted font-light leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
