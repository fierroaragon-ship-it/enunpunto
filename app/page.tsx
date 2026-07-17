import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { content } from "@/content/site-content";
import { siteConfig } from "@/config/site";
import { pathFor } from "@/lib/routes";

export const metadata: Metadata = {
  title: content.en.pages.home.title,
  description: content.en.pages.home.description,
  alternates: {
    canonical: pathFor("en", "home"),
    languages: {
      en: pathFor("en", "home"),
      es: pathFor("es", "home"),
      "x-default": pathFor("en", "home"),
    },
  },
  openGraph: {
    title: content.en.pages.home.title,
    description: content.en.pages.home.description,
    url: pathFor("en", "home"),
    siteName: siteConfig.name,
    type: "website",
    images: [siteConfig.logoPath, "/images/coastal-property.jpg"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: content.en.pages.home.title,
    description: content.en.pages.home.description,
    images: [siteConfig.logoPath, "/images/coastal-property.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <SiteHeader locale="en" />
      <main>
        <HomePage locale="en" />
      </main>
      <SiteFooter locale="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ENUNPUNTO",
            url: siteConfig.baseUrl,
            description: content.en.pages.home.description,
          }),
        }}
      />
    </>
  );
}
