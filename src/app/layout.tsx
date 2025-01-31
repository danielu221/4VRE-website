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
  keywords: ["nieruchomości Kraków", "domy na sprzedaż", "luksusowe domy", "Wyrwa Residence", "nowoczesne domy", "4 Vision Real Estate"],
  authors: [{ name: "4 Vision Real Estate" }],
  creator: "4 Vision Real Estate",
  publisher: "4 Vision Real Estate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://4vre.pl",
    title: "4 Vision Real Estate | Nowoczesne domy w Krakowie",
    description: "4 Vision Real Estate - Nowoczesne domy dla nowoczesnego życia. Luksusowe nieruchomości w prestiżowych lokalizacjach Krakowa.",
    siteName: "4 Vision Real Estate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mulish.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
