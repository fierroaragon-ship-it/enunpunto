"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { alternateFor, type Locale } from "@/lib/routes";

export function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const target: Locale = locale === "en" ? "es" : "en";
  const targetPath = alternateFor(pathname, target);

  useEffect(() => {
    window.localStorage.setItem("enunpunto-locale", locale);
  }, [locale]);

  return (
    <Link className="language-switch" href={targetPath} hrefLang={target} aria-label={`${label}: ${target.toUpperCase()}`}>
      <span aria-hidden="true">EN</span>
      <span className="language-divider" aria-hidden="true">/</span>
      <span aria-hidden="true">ES</span>
    </Link>
  );
}
