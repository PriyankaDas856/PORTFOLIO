import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="min-h-screen section-padding pt-28 pb-20">
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="text-sm text-muted hover:text-primary transition-colors mb-8 inline-block">
          ← Back to blog
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">{post.category}</Badge>
          <span className="text-xs text-muted">{post.readTime}</span>
          <span className="text-xs text-muted">· {post.date}</span>
        </div>

        <h1 className="display-heading text-[clamp(2rem,5vw,3rem)] mb-8">{post.title}</h1>

        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
