import Image from "next/image";
import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  subtitle: string;
  gradient?: string;
  image?: string;
  imageClassName?: string;
  icon?: ReactNode;
};

function SparklesIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 text-primary"
      aria-hidden
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
    </svg>
  );
}

function FeatureCard({
  title,
  subtitle,
  gradient,
  image,
  imageClassName,
  icon,
}: FeatureCardProps) {
  return (
    <div
      className="relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-card p-6 md:aspect-[1.1/1] md:min-h-0"
      style={gradient ? { background: gradient } : undefined}
    >
      {image && (
        <Image
          src={image}
          alt=""
          width={800}
          height={533}
          aria-hidden
          className={
            imageClassName ??
            "pointer-events-none absolute rounded-xl dark:opacity-80"
          }
        />
      )}
      {icon && !image && <div className="mb-4">{icon}</div>}
      {image && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-2/5 bg-gradient-to-t from-card via-card/80 to-transparent"
          aria-hidden
        />
      )}
      <div className="feature-card-text relative z-10">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}

export type Feature = {
  key: string;
  title: string;
  subtitle: string;
  gradient?: string;
  image?: string;
  imageClassName?: string;
  showIcon?: boolean;
};

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.key}
            title={feature.title}
            subtitle={feature.subtitle}
            gradient={feature.gradient}
            image={feature.image}
            imageClassName={feature.imageClassName}
            icon={feature.showIcon ? <SparklesIcon /> : undefined}
          />
        ))}
      </div>
    </section>
  );
}
