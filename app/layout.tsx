import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource-variable/sora/wght.css";
import { HtmlLangSync } from "@/components/html-lang-sync";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import "./globals.css";

const manrope = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [
    {
      path: "../public/fonts/manrope/manrope-latin.woff2",
      weight: "200 800",
      style: "normal",
    },
    {
      path: "../public/fonts/manrope/manrope-latin-ext.woff2",
      weight: "200 800",
      style: "normal",
    },
  ],
});


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://enunpunto.com"),
  icons: {
    icon: "/icons/favicon.png",
    apple: "/icons/favicon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const lang = slug?.[0] === "es" ? "es" : "en";

  return (
    <html lang={lang} className={manrope.variable}>
      <body>
        <HtmlLangSync />
        <RevealOnScroll />
        {children}
      </body>
    </html>
  );
}
