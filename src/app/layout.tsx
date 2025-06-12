import type { Metadata } from "next";
import "./globals.css";
import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Analytics from "@/components/analytics";
import ScrollTracker from "@/components/scroll-tracker";
import { ContentSquare } from "@/components/contentsquare";
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';




export const metadata: Metadata = {
  metadataBase: new URL('https://seraworks.com'),
  title: "Sera - Digital Flagships for Ambitious DTC Brands | E-Commerce Development & Systems",
  description: "We build digital flagships for ambitious DTC brands—sites that convert and systems that scale. From storefronts to internal tools, we help brands move faster with less overhead and more control. Execution-first partnership for founders ready to scale.",
  keywords: "digital flagships, DTC e-commerce development, conversion optimization, ambitious DTC brands, e-commerce systems that scale, internal tools development, personalization systems, email SMS automation, UI UX design brand development, analytics data insights, execution-first agency, revenue-focused development, DTC founders scaling, e-commerce native development, transparent process agency",
  authors: [{ name: "Sera", url: "https://seraworks.com" }],
  creator: "Sera",
  publisher: "Sera",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seraworks.com',
    title: 'Sera - Digital Flagships for Ambitious DTC Brands',
    description: 'We build digital flagships for ambitious DTC brands—sites that convert and systems that scale. Most design agencies build visuals. We build leverage. Execution-first partnership for founders ready to scale.',
    siteName: 'Sera',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sera - Digital Flagships for Ambitious DTC Brands | E-Commerce Development & Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sera - Digital Flagships for Ambitious DTC Brands',
    description: 'We build digital flagships for ambitious DTC brands—sites that convert and systems that scale. Execution-first partnership. Revenue-focused execution.',
    images: ['/og-image.png'],
    creator: '@sera_works',
    site: '@sera_works',
  },
  alternates: {
    canonical: 'https://seraworks.com',
  },
  category: 'business',
  classification: 'E-commerce Development Agency',
  other: {
    'business:contact_data:locality': 'Global',
    'business:contact_data:region': 'Worldwide',
    'article:author': 'Carl Harrisson',
    'article:publisher': 'Sera',
  },
};

export default function RootLayout({
  children,

}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sera",
              description: "We build digital flagships for ambitious DTC brands—sites that convert and systems that scale.",
              url: "https://seraworks.com",
              logo: "https://seraworks.com/logo.png",
              image: "https://seraworks.com/og-image.png",
              founder: {
                "@type": "Person",
                name: "Carl Harrisson",
                jobTitle: "Sera Founder"
              },
              sameAs: [
                "https://twitter.com/sera_works"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Business Inquiries",
                url: "https://seraworks.com"
              },
              areaServed: "Worldwide",
              serviceType: [
                "E-Commerce Development",
                "UI/UX Design",
                "Brand Development",
                "Personalization Systems",
                "Email Marketing Automation",
                "SMS Marketing Automation",
                "Internal Tools Development",
                "Analytics & Data Insights"
              ],
              target: {
                "@type": "Audience",
                name: "DTC Brands and E-commerce Founders"
              }
            })
          }}
        />
      </head>
      <body>
        <Analytics />
        <ScrollTracker />
        <ContentSquare />
        <VercelAnalytics />
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
