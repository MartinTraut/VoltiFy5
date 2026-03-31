import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Voltify5 GmbH | Elektrotechnik auf Meisterniveau in Öhringen",
  description:
    "5 Elektrotechnikermeister mit über 50 Jahren Erfahrung. Ihr Partner für Elektroinstallation, Photovoltaik, Smart Home, Beleuchtungskonzepte und Elektroprüfungen in Öhringen und Umgebung.",
  keywords: [
    "Elektrotechnik Öhringen",
    "Elektriker Öhringen",
    "Elektroinstallation",
    "Photovoltaik Öhringen",
    "Smart Home",
    "Elektroprüfung",
    "Beleuchtungskonzepte",
    "Voltify5",
    "Elektrotechnikermeister",
    "Solaranlage Hohenlohe",
  ],
  openGraph: {
    title: "Voltify5 GmbH | Elektrotechnik auf Meisterniveau",
    description:
      "5 Meister. 50 Jahre Erfahrung. Maßgeschneiderte Elektrotechnik-Lösungen für Privat und Gewerbe.",
    type: "website",
    locale: "de_DE",
    url: "https://www.voltify5.de",
    siteName: "Voltify5 GmbH",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Voltify5 GmbH" }],
  alternates: { canonical: "https://www.voltify5.de" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ElectricalContractor",
              name: "Voltify5 GmbH",
              description:
                "Elektrotechnik auf Meisterniveau – 5 Meister mit über 50 Jahren Erfahrung",
              url: "https://www.voltify5.de",
              telephone: "+49-7941-9596362",
              email: "info@voltify5.de",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Probsthof 4",
                addressLocality: "Öhringen",
                postalCode: "74613",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.2015622,
                longitude: 9.501104,
              },
              openingHours: "Mo-Fr 07:00-18:00",
              founder: { "@type": "Person", name: "Ulrich Knobloch" },
              foundingDate: "2025",
              numberOfEmployees: { "@type": "QuantitativeValue", value: 5 },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 49.2015622,
                  longitude: 9.501104,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Elektrotechnik-Leistungen",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Elektroinstallation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Photovoltaik",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Smart Home",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Elektroprüfungen",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Beleuchtungskonzepte",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Service & Wartung",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  )
}
