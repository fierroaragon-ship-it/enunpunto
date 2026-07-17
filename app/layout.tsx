import type { Metadata } from "next";
import { HtmlLangSync } from "@/components/html-lang-sync";
import "./globals.css";

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
    <html lang={lang}>
      <body>
        <HtmlLangSync />
        {children}
      </body>
    </html>
  );
}
