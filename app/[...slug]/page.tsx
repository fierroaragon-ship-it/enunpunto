import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { HomePage } from "@/components/home-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { content, pageUrl, servicePageKeys } from "@/content/site-content";
import { siteConfig } from "@/config/site";
import { pageFromSegments, pathFor, slugs, type Locale, type PageKey } from "@/lib/routes";

type PageProps = { params: Promise<{ slug?: string[] }> };

function getPage(slug?: string[]) {
  const parsed = pageFromSegments(slug);
  if (!parsed) notFound();
  return parsed;
}

export function generateStaticParams() {
  const params: { slug?: string[] }[] = [{ slug: ["es"] }];

  (Object.keys(slugs.en) as PageKey[]).forEach((page) => {
    if (page !== "home") params.push({ slug: [slugs.en[page]] });
  });

  (Object.keys(slugs.es) as PageKey[]).forEach((page) => {
    if (page !== "home") params.push({ slug: ["es", slugs.es[page]] });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { locale, page } = getPage(slug);
  const copy = content[locale];
  const pageMeta = copy.pages[page];
  const canonical = pageUrl(locale, page);
  const alternates = {
    canonical,
    languages: {
      en: pathFor("en", page),
      es: pathFor("es", page),
      "x-default": pathFor("en", page),
    },
  };

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    alternates,
    openGraph: {
      title: pageMeta.title,
      description: pageMeta.description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      images: [siteConfig.logoPath, "/images/coastal-property.jpg"],
      locale: locale === "en" ? "en_US" : "es_MX",
    },
    twitter: {
      card: "summary_large_image",
      title: pageMeta.title,
      description: pageMeta.description,
      images: [siteConfig.logoPath, "/images/coastal-property.jpg"],
    },
  };
}

function ServicesOverview({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <div className="inner-list">
      {servicePageKeys.map((key) => (
        <a key={key} href={pageUrl(locale, key)}>
          <span>{copy.services[key].title}</span>
          <p>{copy.services[key].text}</p>
        </a>
      ))}
    </div>
  );
}

function StandardPage({ locale, page }: { locale: Locale; page: PageKey }) {
  const copy = content[locale];
  const meta = copy.pages[page];
  const service = servicePageKeys.includes(page as (typeof servicePageKeys)[number])
    ? copy.services[page as (typeof servicePageKeys)[number]]
    : null;

  return (
    <main>
      <section className="page-hero section">
        <p className="eyebrow">{siteConfig.descriptor}</p>
        <h1>{meta.title.replace(" | ENUNPUNTO", "")}</h1>
        <p>{meta.intro}</p>
      </section>

      {page === "services" ? <section className="section"><ServicesOverview locale={locale} /></section> : null}

      {service ? (
        <section className="section service-detail">
          <h2>{service.title}</h2>
          <p>{service.text}</p>
          <a className="button" href={pageUrl(locale, "contact")}>{copy.ctaLabel}</a>
        </section>
      ) : null}

      {page === "howItWorks" ? (
        <section className="section steps">
          {copy.how.steps.map((step, index) => (
            <article key={step.title}>
              <span>{locale === "en" ? "Step" : "Paso"} {index + 1}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          ))}
        </section>
      ) : null}

      {page === "serviceAreas" ? (
        <section className="section areas">
          <div><h2>{copy.areas.title}</h2><p>{copy.areas.note}</p></div>
          <ul>{copy.areas.items.map((area) => <li key={area}>{area}</li>)}</ul>
        </section>
      ) : null}

      {page === "about" ? (
        <section className="section prose">
          <h2>{copy.about.title}</h2>
          <p>{copy.about.text}</p>
        </section>
      ) : null}

      {page === "contact" ? (
        <section className="section contact-page">
          <div>
            <h2>{copy.form.title}</h2>
            <p>{copy.form.text}</p>
          </div>
          <ContactForm copy={copy.form} />
        </section>
      ) : null}

      {page === "privacy" ? (
        <section className="section prose">
          <h2>{copy.privacy.title}</h2>
          <p>{copy.privacy.text}</p>
          {copy.privacy.sections.map((section) => (
            <section key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </section>
          ))}
        </section>
      ) : null}
    </main>
  );
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const { locale, page } = getPage(slug);

  return (
    <>
      <SiteHeader locale={locale} />
      {page === "home" ? <main><HomePage locale={locale} /></main> : <StandardPage locale={locale} page={page} />}
      <SiteFooter locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ENUNPUNTO",
            url: siteConfig.baseUrl,
            description: content[locale].pages.home.description,
          }),
        }}
      />
    </>
  );
}
