"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

export function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("localeSwitcher");

  return (
    <div className="flex items-center gap-1">
      <span className="sr-only">{t("label")}</span>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`rounded-md px-2 py-1 text-sm font-medium transition-colors ${
            locale === loc
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
          aria-current={locale === loc ? "true" : undefined}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
