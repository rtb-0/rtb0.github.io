import { Footer } from "@/components/layout/footer";
import { LocaleAttr } from "@/components/layout/locale-attr";
import { Navbar } from "@/components/layout/navbar";
import { Providers } from "@/components/providers";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleAttr locale={locale} />
      <Providers>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </Providers>
    </NextIntlClientProvider>
  );
}
