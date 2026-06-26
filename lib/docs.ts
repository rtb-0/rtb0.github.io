import fs from "fs";
import path from "path";
import type { Locale } from "@/i18n/routing";

export function getDocContent(locale: Locale, slug: string): string | null {
  const filePath = path.join(
    process.cwd(),
    "content",
    "docs",
    locale,
    `${slug}.md`,
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf-8");
}
