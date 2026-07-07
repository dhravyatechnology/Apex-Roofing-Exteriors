import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.businessName} | Roofing Company in Tampa, FL`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description:
    "Bold, professional roofing and exterior services for Tampa Bay homes and commercial properties, including roof repair, replacement, storm damage review, and exterior protection.",
  keywords: [
    "roofing company Tampa",
    "roof repair Tampa FL",
    "roof replacement Tampa",
    "storm damage roof inspection Tampa",
    "commercial roofing Tampa Bay",
    "Apex Roofing & Exteriors",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: `${siteConfig.businessName} | Roofing Company in Tampa, FL`,
    description:
      "Roof repair, replacement, storm damage review, and exterior protection services for Tampa Bay properties.",
    url: siteConfig.url,
    siteName: siteConfig.businessName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1632759145358-e5257fb6c5e5?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 800,
        alt: "Roofing crew working on a residential roof",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | Tampa Roofing Company`,
    description:
      "Professional roofing and exterior protection for Tampa Bay homes and commercial properties.",
    images: [
      "https://images.unsplash.com/photo-1632759145358-e5257fb6c5e5?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
