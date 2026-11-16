import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const viewport: Viewport = {
  themeColor: "#7047EB",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  category: "business",
  keywords: [
    "Novanode",
    "agence marketing Tunis",
    "studio créatif Tunisie",
    "marketing digital Tunisie",
    "création de marque Tunis",
    "technologie marketing Tunisie",
  ],
  authors: [{ name: site.founder, url: site.url }],
  creator: site.founder,
  publisher: site.name,
  alternates: {
    canonical: "/",
    languages: {
      "fr-TN": "/",
      fr: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: site.ogLocale,
    alternateLocale: ["fr_FR"],
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    countryName: site.country,
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "content-language": site.locale,
    "geo.region": site.region,
    "geo.placename": site.city,
    "geo.position": `${site.latitude};${site.longitude}`,
    ICBM: `${site.latitude}, ${site.longitude}`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      slogan: site.slogan,
      description: site.description,
      logo: `${site.url}/mark.svg`,
      founder: {
        "@type": "Person",
        name: site.founder,
      },
      areaServed: {
        "@type": "Country",
        name: site.country,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressCountry: site.countryCode,
      },
      knowsAbout: ["Marketing", "Création", "Technologie"],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      inLanguage: site.locale,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: site.title,
      description: site.description,
      inLanguage: site.locale,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={site.locale} className={`${inter.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full bg-paper font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
