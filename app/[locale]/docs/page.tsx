import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  CardLink,
  DocsSidebar,
} from "@/components/docs/docs-components";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "docs" });

  return {
    title: `${t("title")} | RTB0`,
  };
}

export default async function DocsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("docs");
  const nav = await getTranslations("nav");

  const featureKeys = [
    "rtb",
    "analytics",
    "config",
    "performance",
    "ui",
    "security",
    "impact",
  ] as const;

  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-6 py-12">
      <DocsSidebar
        gettingStartedLabel={t("gettingStarted.title")}
        aboutLabel={nav("about")}
        moreLabel={t("sidebar.more")}
      />
      <article className="min-w-0 flex-1 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">{t("introTitle")}</h1>
        <div className="prose-custom mt-8">
          <p>{t("welcome")}</p>
          <h2>{t("whatIsTitle")}</h2>
          <p>{t("whatIsBody")}</p>
          <h2>{t("featuresTitle")}</h2>
          <ul>
            {featureKeys.map((key) => (
              <li key={key}>{t(`features.${key}`)}</li>
            ))}
          </ul>
          <p>{t("getStartedCta")}</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <CardLink
            href="/docs/getting-started"
            title={t("gettingStartedCard.title")}
            subtitle={t("gettingStartedCard.subtitle")}
          />
        </div>
      </article>
    </div>
  );
}
