import Link from "next/link";
import Image from "next/image";
import { content } from "@/content/site-content";
import { siteConfig } from "@/config/site";
import { pathFor, type Locale } from "@/lib/routes";
import { LanguageSwitch } from "@/components/language-switch";

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <header className="site-header">
      <Link className="brand" href={pathFor(locale, "home")} aria-label="ENUNPUNTO home">
        <Image className="brand-mark" src={siteConfig.logoPath} alt="" width={54} height={54} priority />
        <span className="brand-name">ENUNPUNTO</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {copy.nav.map((item) => (
          <Link key={item.page} href={pathFor(locale, item.page)}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <LanguageSwitch locale={locale} label={copy.switchLabel} />
        <Link className="button small" href={pathFor(locale, "contact")}>
          {copy.ctaLabel}
        </Link>
      </div>
      <details className="mobile-menu">
        <summary>{locale === "en" ? "Menu" : "Menú"}</summary>
        <div>
          <Link className="mobile-brand" href={pathFor(locale, "home")} aria-label="ENUNPUNTO home">
            <Image className="brand-mark" src={siteConfig.logoPath} alt="" width={54} height={54} />
            <span className="brand-name">ENUNPUNTO</span>
          </Link>
          {copy.nav.map((item) => (
            <Link key={item.page} href={pathFor(locale, item.page)}>
              {item.label}
            </Link>
          ))}
          <Link className="button" href={pathFor(locale, "contact")}>
            {copy.ctaLabel}
          </Link>
        </div>
      </details>
    </header>
  );
}
