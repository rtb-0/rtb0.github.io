import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";

function DocumentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-primary"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

export function CardLink({
  href,
  title,
  subtitle,
}: {
  href: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Link
      href={href}
      className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-muted/50"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <DocumentIcon />
      </div>
      <div>
        <h3 className="font-semibold text-foreground group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </Link>
  );
}

export function DocsSidebar({
  gettingStartedLabel,
  aboutLabel,
  moreLabel,
}: {
  gettingStartedLabel: string;
  aboutLabel: string;
  moreLabel: string;
}) {
  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <nav className="sticky top-20 space-y-6 text-sm">
        <div>
          <Link
            href="/docs/getting-started"
            className="block rounded-md px-2 py-1.5 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {gettingStartedLabel}
          </Link>
        </div>
        <div>
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {moreLabel}
          </p>
          <Link
            href="/about"
            className="block rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {aboutLabel}
          </Link>
        </div>
      </nav>
    </aside>
  );
}

export function MarkdownContent({ children }: { children: ReactNode }) {
  return <div className="prose-custom">{children}</div>;
}
