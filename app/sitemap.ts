import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { pathFor, slugs, type PageKey } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.keys(slugs.en) as PageKey[];
  return pages.flatMap((page) => [
    {
      url: `${siteConfig.baseUrl}${pathFor("en", page)}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteConfig.baseUrl}${pathFor("en", page)}`,
          es: `${siteConfig.baseUrl}${pathFor("es", page)}`,
        },
      },
    },
    {
      url: `${siteConfig.baseUrl}${pathFor("es", page)}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteConfig.baseUrl}${pathFor("en", page)}`,
          es: `${siteConfig.baseUrl}${pathFor("es", page)}`,
        },
      },
    },
  ]);
}
