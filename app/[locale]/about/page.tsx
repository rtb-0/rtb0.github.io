import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: `${t("title")} | RTB0`,
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const creditLinks = [
    {
      href: "https://en.wikipedia.org/wiki/Real-time_bidding",
      label: t("credits.rtb"),
    },
    {
      href: "https://en.wikipedia.org/wiki/Web_analytics",
      label: t("credits.analytics"),
    },
    {
      href: "https://en.wikipedia.org/wiki/Online_advertising",
      label: t("credits.integrations"),
    },
    {
      href: "https://en.wikipedia.org/wiki/Ad_fraud",
      label: t("credits.security"),
    },
  ];

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
      <div className="prose-custom mt-8">
        <p>{t("paragraph1")}</p>
        <p>{t("paragraph2")}</p>
        <p>{t("paragraph3")}</p>
        <h2>{t("creditsTitle")}</h2>
        <p>{t("creditsIntro")}</p>
        <ul>
          {creditLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
