import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "@/components/shared/theme-provider";
import { HeroHeader } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LenisProvider } from "@/components/shared/lenis-provider";
import { Toaster } from "@/components/ui/overlay/sonner";
import { ApolloTracker } from "@/components/shared/apollo-tracker";

const neueHaasRoman = localFont({
  src: '../../public/NeueHaasDisplayRoman.ttf',
  variable: '--font-neue-haas'
})

const meltmino = localFont({
  src: '../../public/MeltminoRegular.ttf',
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: "Sera - Digital Agency",
  description: "Sera - Premium digital services and solutions",
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      }
    ],
    apple: {
      url: "/favicon_io/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    },
    other: [
      {
        rel: "android-chrome",
        url: "/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        rel: "android-chrome",
        url: "/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${neueHaasRoman.variable} ${meltmino.variable} font-neue-haas overflow-x-hidden antialiased`}>
        <ThemeProvider defaultTheme="system" enableSystem disableTransitionOnChange>
          <LenisProvider>
            <HeroHeader />
            {children}
            <Footer />
            <Toaster />
            <Analytics />
            <ApolloTracker />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
