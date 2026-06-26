import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import { getDocContent } from "@/lib/docs";
import {
  DocsSidebar,
  MarkdownContent,
} from "@/components/docs/docs-components";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "docs.gettingStarted" });

  return {
    title: `${t("title")} | RTB0`,
  };
}

export default async function GettingStartedPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("docs");
  const nav = await getTranslations("nav");

  const content = getDocContent(locale as Locale, "getting-started");
  if (!content) {
    notFound();
  }

  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-6 py-12">
      <DocsSidebar
        gettingStartedLabel={t("gettingStarted.title")}
        aboutLabel={nav("about")}
        moreLabel={t("sidebar.more")}
      />
      <article className="min-w-0 flex-1 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">
          {t("gettingStarted.title")}
        </h1>
        <MarkdownContent>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </MarkdownContent>
      </article>
    </div>
  );
}
