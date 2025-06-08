import type { Metadata } from "next";
import "./globals.css";
import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Analytics from "@/components/analytics";
import { ContentSquare } from "@/components/contentsquare";




export const metadata: Metadata = {
  title: "Sera Agency - Custom Web Development & Business Automation",
  description: "Transform your business with custom web development, mobile apps, and automation solutions. Expert team delivering UX & branding, e-commerce, SEO & marketing services.",
  keywords: "web development, mobile apps, business automation, UX design, branding, e-commerce, SEO, marketing, custom software",
  authors: [{ name: "Sera Agency" }],
  creator: "Sera Agency",
  publisher: "Sera Agency",
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
    title: 'Sera Agency - Custom Web Development & Business Automation',
    description: 'Transform your business with custom web development, mobile apps, and automation solutions. Expert team delivering results.',
    siteName: 'Sera Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sera Agency - Web Development & Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sera Agency - Custom Web Development & Business Automation',
    description: 'Transform your business with custom web development, mobile apps, and automation solutions.',
    images: ['/og-image.jpg'],
    creator: '@sera_agency',
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
        <ContentSquare />
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
