import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { HeroHeader } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LenisProvider } from "@/components/shared/lenis-provider";



const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Sera - Digital Agency",
  description: "Sera - Premium digital services and solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}>
        <ThemeProvider defaultTheme="system" enableSystem disableTransitionOnChange>
          <LenisProvider>
            <HeroHeader />
            {children}
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
