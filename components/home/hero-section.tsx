import type { ReactNode } from "react";

export function HeroBadge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground">
      {children}
    </div>
  );
}

export function HeroSection({
  badge,
  headline,
  headlineBreak,
  subtitle,
  cta,
}: {
  badge: ReactNode;
  headline: string;
  headlineBreak: string;
  subtitle: string;
  cta: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 text-center sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-4xl">
        {badge}
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {headline}
          <br className="hidden sm:block" />
          {headlineBreak}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {subtitle}
        </p>
        <div className="mt-8">{cta}</div>
      </div>
    </section>
  );
}
