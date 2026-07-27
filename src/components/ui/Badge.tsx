import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "accent" | "outline" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-primary/10 text-primary": variant === "default",
          "bg-secondary/10 text-secondary": variant === "accent",
          "border border-border text-muted": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
