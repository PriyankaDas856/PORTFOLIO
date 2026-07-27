import Link from "next/link";
import { NOW, BOOKSHELF, FAVORITE_TOOLS, WORKFLOW } from "@/lib/data/now";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Now",
  description: "What Priyanka Das is currently learning, building, and reading.",
};

export default function NowPage() {
  return (
    <div className="min-h-screen section-padding pt-28 pb-20">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-muted hover:text-primary transition-colors mb-8 inline-block">
          ← Back home
        </Link>

        <span className="label-mono text-primary mb-4 block">Now</span>
        <h1 className="display-heading text-[clamp(2rem,5vw,3.5rem)] mb-2">What I&apos;m up to</h1>
        <p className="text-xs text-muted mb-12">Last updated: {NOW.lastUpdated}</p>

        <div className="space-y-12">
          <section>
            <h2 className="display-heading text-xl mb-4">Currently Learning</h2>
            <div className="space-y-4">
              {NOW.learning.map((item) => (
                <div key={item.topic} className="card p-5">
                  <p className="font-medium text-sm mb-1">{item.topic}</p>
                  <p className="text-xs text-muted font-light">{item.progress}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="display-heading text-xl mb-4">Building</h2>
            <ul className="space-y-2">
              {NOW.building.map((item) => (
                <li key={item} className="text-sm text-muted font-light flex gap-2">
                  <span className="text-primary">→</span> {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="display-heading text-xl mb-4">Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {NOW.reading.map((book) => (
                <div key={book.title} className="card p-4">
                  <p className="text-sm font-medium">{book.title}</p>
                  <p className="text-xs text-muted">{book.author}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="display-heading text-xl mb-4">Open To</h2>
            <div className="flex flex-wrap gap-2">
              {NOW.openTo.map((item) => (
                <Badge key={item} variant="accent">{item}</Badge>
              ))}
            </div>
          </section>

          <section>
            <h2 className="display-heading text-xl mb-4">Bookshelf</h2>
            <div className="space-y-2">
              {BOOKSHELF.map((book) => (
                <div key={book.title} className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="font-light">{book.title} — {book.author}</span>
                  <span className="text-xs text-muted">{book.category}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="display-heading text-xl mb-4">Workflow</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WORKFLOW.map((step) => (
                <div key={step.step} className="card p-4">
                  <span className="label-mono text-primary">{step.step}</span>
                  <p className="font-medium text-sm mt-1">{step.title}</p>
                  <p className="text-xs text-muted font-light mt-1">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="display-heading text-xl mb-4">Favorite Tools</h2>
            <div className="flex flex-wrap gap-2">
              {FAVORITE_TOOLS.map((tool) => (
                <span key={tool.name} className="rounded-full border border-border px-4 py-2 text-sm">
                  {tool.name}
                </span>
              ))}
            </div>
          </section>

          <p className="text-xs text-muted font-light">
            📍 {NOW.location} · 🎧 {NOW.listening}
          </p>
        </div>
      </div>
    </div>
  );
}
