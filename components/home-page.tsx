import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { siteConfig } from "@/config/site";
import { content, pageUrl, servicePageKeys } from "@/content/site-content";
import { imageSet } from "@/content/shared";
import type { Locale } from "@/lib/routes";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <>
      <section className="hero section">
        <div className="hero-copy">
          <div className="hero-signature" aria-label="ENUNPUNTO">
            <Image className="hero-brand-symbol" src={siteConfig.symbolPath} alt="" width={263} height={150} priority />
            <span className="hero-brand-lockup">
              <span className="hero-brand-name">{siteConfig.name}</span>
              <span className="hero-brand-descriptor">{siteConfig.descriptor}</span>
            </span>
          </div>
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p>{copy.hero.text}</p>
          <div className="hero-actions">
            <Link className="button" href={pageUrl(locale, "contact")}>{copy.hero.primary}</Link>
            <Link className="text-link" href={pageUrl(locale, "services")}>{copy.hero.secondary}</Link>
          </div>
        </div>
        <div className="hero-images" aria-label="Residential property scenes">
          <Image src={imageSet.coastal} alt="Coastal residential property" width={900} height={1100} priority />
          <Image src={imageSet.modern} alt="Modern middle-scale home interior" width={700} height={600} priority />
          <Image src={imageSet.technology} alt="Discreet smart-home control detail" width={700} height={600} priority />
          <span>Riviera Maya · Huatulco</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="Trust indicators" data-reveal>
        {copy.trust.map((item) => <span key={item}>{item}</span>)}
      </section>

      <section className="section split" data-reveal>
        <Image src={imageSet.editorial} alt="Quiet residential architecture" width={1000} height={760} />
        <div className="accent-copy">
          <p className="eyebrow">{copy.problem.kicker}</p>
          <h2>{copy.problem.title}</h2>
          <p>{copy.problem.text}</p>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">{copy.servicesEyebrow}</p>
            <h2>{copy.servicesTitle}</h2>
          </div>
          <p>{copy.servicesIntro}</p>
        </div>
        <div className="service-list">
          {servicePageKeys.map((key) => (
            <article className="service-row" key={key} data-reveal>
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

      <section className="section detail-band">
        <div className="detail-heading" data-reveal>
          <p className="eyebrow">{copy.detailBand.kicker}</p>
          <h2>{copy.detailBand.title}</h2>
        </div>
        <div className="detail-mosaic">
          {copy.detailBand.images.map((item, index) => (
            <figure
              className="detail-figure"
              key={item.src}
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties & Record<"--reveal-delay", string>}
            >
              <Image src={item.src} alt={item.alt} width={index === 0 ? 900 : 620} height={index === 0 ? 760 : 430} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="privacy-note" data-reveal>
          <h3>{copy.detailBand.privacy.title}</h3>
          <p>{copy.detailBand.privacy.text}</p>
        </div>
      </section>

      <section className="process" data-reveal>
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

      <section className="section property-types" data-reveal>
        <h2>{copy.propertyTypes.title}</h2>
        <Image className="property-types-image" src={imageSet.editorial} alt="Representative residential property interior" width={1000} height={620} />
        <ul>
          {copy.propertyTypes.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="technology-band">
        <div className="section technology-inner" data-reveal>
          <div>
            <p className="eyebrow">{copy.technology.kicker}</p>
            <h2>{copy.technology.title}</h2>
            <p>{copy.technology.text}</p>
            <Link className="text-link light" href={pageUrl(locale, "smartLiving")}>{copy.technology.link}</Link>
          </div>
          <Image src={imageSet.technology} alt="Discreet technology in a residential setting" width={1000} height={760} />
          <div className="technology-details" data-reveal>
            {[imageSet.technology, imageSet.service, imageSet.maintenance].map((src, index) => (
              <figure
                key={src}
                data-reveal
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties & Record<"--reveal-delay", string>}
              >
                <Image src={src} alt={["Discreet smart-home control detail", "Preventive residential property inspection", "Residential maintenance detail"][index]} width={420} height={280} />
                <figcaption>{copy.technology.details[index]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section split senior-section" data-reveal>
        <div className="senior-images" data-reveal>
          <Image src={imageSet.senior} alt="Comfortable safe home details" width={1000} height={760} />
          <Image src={imageSet.lived} alt="Comfortable lived-in residential space" width={520} height={420} />
        </div>
        <div>
          <h2>{copy.senior.title}</h2>
          <p>{copy.senior.text}</p>
          <ul>
            {copy.senior.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
        </div>
      </section>

      <section className="areas-band">
        <div className="section areas" data-reveal>
          <div>
            <h2>{copy.areas.title}</h2>
            <p>{copy.areas.note}</p>
          </div>
          <ul>
            {copy.areas.items.map((area) => <li key={area}>{area}</li>)}
          </ul>
          <figure className="areas-image" data-reveal>
            <Image src={imageSet.coastal} alt="Representative coastal residence" width={620} height={700} />
            <figcaption>{copy.areas.caption}</figcaption>
          </figure>
          <p className="areas-closing">{copy.areas.closing}</p>
        </div>
      </section>

      <section className="section final-cta" id="contact" data-reveal>
        <div>
          <Image className="final-cta-image" src={imageSet.maintenance} alt="Residential maintenance detail" width={760} height={360} />
          <h2>{copy.finalCta.title}</h2>
          <p>{copy.finalCta.text}</p>
          <WhatsAppLink locale={locale} />
        </div>
        <ContactForm copy={copy.form} />
      </section>
    </>
  );
}
