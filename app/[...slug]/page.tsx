import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { HomePage } from "@/components/home-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { imageSet } from "@/content/shared";
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
  const internalImages: Partial<Record<PageKey, { src: string; alt: string }>> = {
    propertyCare: { src: imageSet.service, alt: "Preventive residential property inspection" },
    smartLiving: { src: imageSet.technology, alt: "Discreet smart-home control detail" },
    seniorSafeHomes: { src: imageSet.senior, alt: "Comfortable safe home details" },
    maintenance: { src: imageSet.maintenance, alt: "Residential maintenance detail" },
    serviceAreas: { src: imageSet.coastal, alt: "Representative coastal residence" },
    about: { src: imageSet.editorial, alt: "Representative residential property interior" },
    contact: { src: imageSet.lived, alt: "Comfortable lived-in residential space" },
  };
  const internalImage = internalImages[page];

  return (
    <main>
      <section className="page-hero section">
        <p className="eyebrow">{siteConfig.descriptor}</p>
        <h1>{meta.title.replace(" | ENUNPUNTO", "")}</h1>
        <p>{meta.intro}</p>
      </section>

      {page === "services" ? <section className="section"><ServicesOverview locale={locale} /></section> : null}

      {service ? (
        <section className="section service-detail service-detail-visual" data-reveal>
          <Image src={internalImage?.src ?? service.image} alt={internalImage?.alt ?? "Representative residential service detail"} width={920} height={620} />
          <div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
            <a className="button" href={pageUrl(locale, "contact")}>{copy.ctaLabel}</a>
          </div>
        </section>
      ) : null}

      {page === "howItWorks" ? (
        <section className="process internal-process" data-reveal>
          <div className="section process-layout">
            <Image className="process-image" src={imageSet.service} alt="Preventive residential property inspection" width={900} height={680} />
            <div className="process-copy">
              <p className="eyebrow">{copy.how.kicker}</p>
              <h2>{copy.how.title}</h2>
              <div className="steps">
                {copy.how.steps.map((step) => (
                  <article key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {page === "serviceAreas" ? (
        <section className="areas-band">
          <div className="section areas" data-reveal>
            <div><h2>{copy.areas.title}</h2><p>{copy.areas.note}</p></div>
            <ul>{copy.areas.items.map((area) => <li key={area}>{area}</li>)}</ul>
            <figure className="areas-image" data-reveal>
              <Image src={internalImage?.src ?? imageSet.coastal} alt={internalImage?.alt ?? "Representative coastal residence"} width={620} height={700} />
              <figcaption>{copy.areas.caption}</figcaption>
            </figure>
            <p className="areas-closing">{copy.areas.closing}</p>
          </div>
        </section>
      ) : null}

      {page === "about" ? (
        <section className="section prose prose-visual" data-reveal>
          <Image src={internalImage?.src ?? imageSet.editorial} alt={internalImage?.alt ?? "Representative residential property interior"} width={900} height={640} />
          <div>
            <h2>{copy.about.title}</h2>
            <p>{copy.about.text}</p>
          </div>
        </section>
      ) : null}

      {page === "contact" ? (
        <section className="section contact-page" data-reveal>
          <div>
            <Image className="contact-page-image" src={internalImage?.src ?? imageSet.lived} alt={internalImage?.alt ?? "Comfortable lived-in residential space"} width={760} height={420} />
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
