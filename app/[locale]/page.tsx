import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HeroBadge, HeroSection } from "@/components/home/hero-section";
import { FeatureGrid } from "@/components/home/feature-grid";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  const features = [
    {
      key: "monetization",
      title: t("features.monetization.title"),
      subtitle: t("features.monetization.subtitle"),
      gradient:
        "radial-gradient(ellipse at 50% 80%, rgba(0,123,255,0.15), hsla(0,0%,100%,0))",
      image: "/images/index-ef-traffic-sm.jpg",
      imageClassName:
        "pointer-events-none absolute top-[40%] left-[24px] w-[180%] max-w-none rounded-xl sm:w-[110%] dark:opacity-80",
    },
    {
      key: "rtb",
      title: t("features.rtb.title"),
      subtitle: t("features.rtb.subtitle"),
      gradient:
        "radial-gradient(ellipse at 50% 80%, rgba(34,139,34,0.15), hsla(0,0%,100%,0))",
      image: "/images/index-rtb-sm.jpg",
      imageClassName:
        "pointer-events-none absolute top-[40%] left-[36px] w-[180%] max-w-none rounded-xl sm:w-[110%] dark:opacity-80",
    },
    {
      key: "analytics",
      title: t("features.analytics.title"),
      subtitle: t("features.analytics.subtitle"),
      gradient:
        "radial-gradient(ellipse at 50% 80%, rgba(255,193,7,0.15), hsla(0,0%,100%,0))",
      image: "/images/index-analytics-sm.jpg",
      imageClassName:
        "pointer-events-none absolute top-[40%] left-[36px] w-[110%] max-w-none rounded-xl sm:w-[110%] dark:opacity-80",
    },
    {
      key: "integration",
      title: t("features.integration.title"),
      subtitle: t("features.integration.subtitle"),
      gradient:
        "radial-gradient(ellipse at 50% 80%, rgba(0,123,255,0.1), hsla(0,0%,100%,0))",
      image: "/images/feature-integration.svg",
      imageClassName:
        "pointer-events-none absolute top-[8%] left-1/2 w-[85%] max-w-none -translate-x-1/2 dark:opacity-80",
    },
    {
      key: "responsive",
      title: t("features.responsive.title"),
      subtitle: t("features.responsive.subtitle"),
      gradient:
        "radial-gradient(ellipse at 50% 80%, rgba(34,139,34,0.1), hsla(0,0%,100%,0))",
      image: "/images/feature-responsive.svg",
      imageClassName:
        "pointer-events-none absolute top-[8%] left-1/2 w-[85%] max-w-none -translate-x-1/2 dark:opacity-80",
    },
    {
      key: "more",
      title: t("features.more.title"),
      subtitle: t("features.more.subtitle"),
      gradient:
        "radial-gradient(ellipse at 50% 80%, rgba(255,193,7,0.1), hsla(0,0%,100%,0))",
      image: "/images/feature-more.svg",
      imageClassName:
        "pointer-events-none absolute top-[8%] left-1/2 w-[85%] max-w-none -translate-x-1/2 dark:opacity-80",
    },
  ];

  return (
    <>
      <HeroSection
        badge={
          <HeroBadge>
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
            <span>{t("badge")}</span>
            <span aria-hidden>→</span>
          </HeroBadge>
        }
        headline={t("headline")}
        headlineBreak={t("headlineBreak")}
        subtitle={t("subtitle")}
        cta={
          <Link
            href="/docs"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("cta")}
          </Link>
        }
      />
      <FeatureGrid features={features} />
    </>
  );
}
