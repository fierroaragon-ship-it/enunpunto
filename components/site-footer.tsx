import Link from "next/link";
import Image from "next/image";
import { content } from "@/content/site-content";
import { pathFor, type Locale } from "@/lib/routes";
import { siteConfig } from "@/config/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <footer className="site-footer" data-reveal>
      <div className="footer-brand">
        <Image className="footer-symbol" src={siteConfig.symbolLightPath} alt="" width={263} height={150} />
        <div className="footer-lockup">
          <span className="footer-name">{siteConfig.name}</span>
          <span className="footer-descriptor">{siteConfig.descriptor}</span>
        </div>
      </div>
      <nav aria-label="Footer navigation">
        <Link href={pathFor(locale, "services")}>{copy.nav[0].label}</Link>
        <Link href={pathFor(locale, "serviceAreas")}>{copy.nav[2].label}</Link>
        <Link href={pathFor(locale, "about")}>{copy.nav[3].label}</Link>
        <Link href={pathFor(locale, "contact")}>{copy.nav[4].label}</Link>
        <Link href={pathFor(locale, "privacy")}>{locale === "en" ? "Privacy" : "Privacidad"}</Link>
        <Link href={pathFor(locale === "en" ? "es" : "en", "home")}>EN / ES</Link>
      </nav>
      <p className="site-credit">{locale === "en" ? "Website by FIKAMI" : "Sitio web por FIKAMI"}</p>
    </footer>
  );
}
