import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Mulish } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "4 Vision Real Estate | Nowoczesne domy w Krakowie",
  description: "4 Vision Real Estate - Nowoczesne domy dla nowoczesnego życia. Luksusowe nieruchomości w prestiżowych lokalizacjach Krakowa. Wyrwa Residence - połączenie elegancji i funkcjonalności.",
  keywords: ["nieruchomości Kraków", "domy na sprzedaż", "luksusowe domy", "Wyrwa Residence", "nowoczesne domy", "4 Vision Real Estate", "inwestycje deweloperskie", "domy jednorodzinne Kraków", "ekskluzywne nieruchomości"],
  authors: [{ name: "4 Vision Real Estate" }],
  creator: "4 Vision Real Estate",
  publisher: "4 Vision Real Estate",
  alternates: {
    canonical: "https://4vre.pl",
    languages: {
      'pl-PL': "https://4vre.pl",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://4vre.pl",
    title: "4 Vision Real Estate | Nowoczesne domy w Krakowie",
    description: "4 Vision Real Estate - Nowoczesne domy dla nowoczesnego życia. Luksusowe nieruchomości w prestiżowych lokalizacjach Krakowa.",
    siteName: "4 Vision Real Estate",
    images: [
      {
        url: "https://4vre.pl/wyrwa_zewnatrz_1.jpg",
        width: 1200,
        height: 630,
        alt: "4 Vision Real Estate - Wyrwa Residence",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4 Vision Real Estate | Nowoczesne domy w Krakowie",
    description: "4 Vision Real Estate - Nowoczesne domy dla nowoczesnego życia. Luksusowe nieruchomości w prestiżowych lokalizacjach Krakowa.",
    images: ["https://4vre.pl/wyrwa_zewnatrz_1.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
  },
  category: "real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="canonical" href="https://4vre.pl" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mulish.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
