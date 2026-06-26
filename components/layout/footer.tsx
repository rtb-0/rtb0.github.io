import { getTranslations } from "next-intl/server";

const START_YEAR = 2024;

function getYearRange() {
  const currentYear = new Date().getFullYear();
  return currentYear > START_YEAR
    ? `${START_YEAR}–${currentYear}`
    : `${START_YEAR}`;
}

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-border bg-muted pb-[env(safe-area-inset-bottom)] dark:bg-neutral-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-12 text-muted-foreground sm:items-start md:justify-start">
        <a
          href="https://github.com/rtb-0"
          target="_blank"
          rel="noopener noreferrer"
          title={t("githubLabel")}
          className="flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-primary"
        >
          {t("copyright", { yearRange: getYearRange() })}
        </a>
      </div>
    </footer>
  );
}
