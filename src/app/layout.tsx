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
  title: "Sera - Digital Agency for DTC Founders ",
  description: "Built for DTC founders who want websites that actually convert and systems that work. We partner with e-commerce businesses to create digital experiences that turn visitors into customers and browsers into loyal buyers.",
  keywords: "DTC digital agency, e-commerce development, conversion optimization, email automation, SMS marketing, UI/UX design, personalization systems, analytics, DTC founders, direct-to-consumer, website conversion",
  authors: [{ name: "Sera" }],
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
    title: 'Sera - Digital Agency for DTC Founders',
    description: 'Built for DTC founders who want websites that actually convert and systems that work. We solve the core problems that keep founders up at night.',
    siteName: 'Sera',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sera - Digital Agency for DTC Founders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sera - Digital Agency for DTC Founders',
    description: 'Built for DTC founders who want websites that actually convert and systems that work. Partnership over transactions.',
    images: ['/og-image.png'],
    creator: '@sera_works',
  },
  alternates: {
    canonical: 'https://seraworks.com',
  },
  category: 'technology',
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
