import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { content, pageUrl, servicePageKeys } from "@/content/site-content";
import { imageSet } from "@/content/shared";
import type { Locale } from "@/lib/routes";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <>
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p>{copy.hero.text}</p>
          <div className="hero-actions">
            <Link className="button" href={pageUrl(locale, "contact")}>{copy.hero.primary}</Link>
            <Link className="text-link" href={pageUrl(locale, "services")}>{copy.hero.secondary}</Link>
          </div>
          <p className="hero-line">{copy.hero.line}</p>
        </div>
        <div className="hero-images" aria-label="Residential property scenes">
          <Image src={imageSet.coastal} alt="Coastal residential property" width={900} height={1100} priority />
          <Image src={imageSet.modern} alt="Modern middle-scale home interior" width={700} height={600} priority />
          <Image src={imageSet.lived} alt="Comfortable lived-in residential space" width={700} height={600} priority />
        </div>
      </section>

      <section className="trust-strip" aria-label="Trust indicators">
        {copy.trust.map((item) => <span key={item}>{item}</span>)}
      </section>

      <section className="section split">
        <Image src={imageSet.editorial} alt="Quiet residential architecture" width={1000} height={760} />
        <div>
          <h2>{copy.problem.title}</h2>
          <p>{copy.problem.text}</p>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <h2>{copy.servicesTitle}</h2>
          <p>{copy.servicesIntro}</p>
        </div>
        <div className="service-list">
          {servicePageKeys.map((key) => (
            <article className="service-row" key={key}>
              <Image src={copy.services[key].image} alt="" width={760} height={520} />
              <div>
                <h3>{copy.services[key].title}</h3>
                <p>{copy.services[key].text}</p>
                <Link className="text-link" href={pageUrl(locale, key)}>{copy.services[key].link}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process">
        <h2>{copy.how.title}</h2>
        <div className="steps">
          {copy.how.steps.map((step, index) => (
            <article key={step.title}>
              <span>{locale === "en" ? "Step" : "Paso"} {index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section property-types">
        <h2>{copy.propertyTypes.title}</h2>
        <ul>
          {copy.propertyTypes.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section split reverse">
        <div>
          <h2>{copy.technology.title}</h2>
          <p>{copy.technology.text}</p>
        </div>
        <Image src={imageSet.technology} alt="Discreet technology in a residential setting" width={1000} height={760} />
      </section>

      <section className="section split">
        <Image src={imageSet.senior} alt="Comfortable safe home details" width={1000} height={760} />
        <div>
          <h2>{copy.senior.title}</h2>
          <p>{copy.senior.text}</p>
        </div>
      </section>

      <section className="section areas">
        <div>
          <h2>{copy.areas.title}</h2>
          <p>{copy.areas.note}</p>
        </div>
        <ul>
          {copy.areas.items.map((area) => <li key={area}>{area}</li>)}
        </ul>
      </section>

      <section className="section selected-work">
        <div>
          <h2>{copy.work.title}</h2>
          <p>{copy.work.note}</p>
        </div>
        <ul>
          {copy.work.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section final-cta" id="contact">
        <div>
          <h2>{copy.finalCta.title}</h2>
          <p>{copy.finalCta.text}</p>
          <WhatsAppLink locale={locale} />
        </div>
        <ContactForm copy={copy.form} />
      </section>
    </>
  );
}
