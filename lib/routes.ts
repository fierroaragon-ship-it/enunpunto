export type Locale = "en" | "es";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const slugs = {
  en: {
    home: "",
    services: "services",
    propertyCare: "property-care",
    smartLiving: "smart-living",
    seniorSafeHomes: "senior-safe-homes",
    maintenance: "maintenance-response",
    howItWorks: "how-it-works",
    serviceAreas: "service-areas",
    about: "about",
    contact: "contact",
    privacy: "privacy",
  },
  es: {
    home: "",
    services: "servicios",
    propertyCare: "cuidado-de-propiedades",
    smartLiving: "hogar-inteligente",
    seniorSafeHomes: "hogares-seguros-adultos-mayores",
    maintenance: "mantenimiento-respuesta",
    howItWorks: "como-funciona",
    serviceAreas: "zonas-de-servicio",
    about: "nosotros",
    contact: "contacto",
    privacy: "privacidad",
  },
} as const;

export type PageKey = keyof typeof slugs.en;

export function pathFor(locale: Locale, page: PageKey) {
  const slug = slugs[locale][page];
  if (locale === "en") return slug ? `/${slug}` : "/";
  return slug ? `/es/${slug}` : "/es";
}

export function alternateFor(currentPath: string, targetLocale: Locale) {
  const normalized = currentPath.replace(/^\/es\/?/, "/").replace(/^\/+/, "");
  const sourceLocale: Locale = currentPath.startsWith("/es") ? "es" : "en";
  const sourceSlugs = slugs[sourceLocale];
  const page = (Object.keys(sourceSlugs) as PageKey[]).find(
    (key) => sourceSlugs[key] === normalized,
  ) || "home";

  return pathFor(targetLocale, page);
}

export function pageFromSegments(segments?: string[]) {
  const safeSegments = segments || [];
  const locale: Locale = safeSegments[0] === "es" ? "es" : "en";
  const slug = locale === "es" ? safeSegments.slice(1).join("/") : safeSegments.join("/");
  const page = (Object.keys(slugs[locale]) as PageKey[]).find((key) => slugs[locale][key] === slug);
  return page ? { locale, page } : null;
}
