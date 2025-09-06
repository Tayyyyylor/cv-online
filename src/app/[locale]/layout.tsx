import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/styles/globals.scss";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import Script from "next/script";
import { heavitasFont } from "../fonts";

const siteUrl = "https://www.bryanhoublon.com";
const fullName = "Bryan Houblon";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${fullName} — Développeur Full-Stack`,
    template: `%s — ${fullName}`,
  },
  description: `Portfolio de ${fullName}, développeur Full-Stack (Next.js, TypeScript). Projets, expériences et contact.`,
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Bryan Houblon • Développeur Web",
    statusBarStyle: "black-translucent",
  },
  keywords: [
    "nextjs",
    "bryan",
    "houblon",
    "bryan houblon",
    "Bryan Houblon",
    "Développeur Full-Stack",
    "Développeur Web",
    "Bryan",
    "Houblon",
    "Bryan Houblon",
    "bryan houblon développeur web",
    "bryan houblon développeur web full-stack",
    "bryan houblon développeur web fullstack",
    "bryan houblon développeur web fullstack next.js",
    "bryan Houblon développeur web fullstack react",
    "portfolio",
    "développeur",
    "developpeur web",
    "developpeur web fullstack",
    "reactjs",
    "React",
    "Paris",
    "Développeur Paris",
  ],
  openGraph: {
    type: "website",
    url: `${siteUrl}/fr`,
    title: `${fullName} — Développeur Full-Stack`,
    description: `Portfolio de ${fullName}`,
    siteName: "Bryan Houblon • Développeur Web",
    images: [{ url: "/og-fr.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${fullName} — Développeur Full-Stack`,
    description: `Portfolio de ${fullName}`,
    images: ["/og-fr.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bryan Houblon",
  alternateName: ["Houblon Bryan"],
  jobTitle: "Développeur Full-Stack",
  url: "https://www.bryanhoublon.com",
  email: "mailto:bryan.houblon@gmail.com",
  sameAs: [
    "https://github.com/tayyyyylor",
    "https://x.com/_Tayylor_G",
    "https://www.linkedin.com/in/bryan-houblon-172121211/",
  ],
};
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={heavitasFont.variable}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
            <Script
              id="ld-person"
              type="application/ld+json"
              strategy="afterInteractive"
            >
              {JSON.stringify(personLd)}
            </Script>
            <Analytics />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
