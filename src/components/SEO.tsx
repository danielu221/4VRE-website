import Head from 'next/head';
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = '4 Vision Real Estate | Nowoczesne domy w Krakowie',
  description = '4 Vision Real Estate - Nowoczesne domy dla nowoczesnego życia. Luksusowe nieruchomości w prestiżowych lokalizacjach Krakowa.',
  canonicalUrl = 'https://4vre.pl',
  ogImage = 'https://4vre.pl/wyrwa_zewnatrz_1.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
}) => {
  return (
    <Head>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:site_name" content="4 Vision Real Estate" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/4vre-logo-horizontal-black.svg" />
      
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#000000" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="4 Vision Real Estate" />
      <meta name="keywords" content="nieruchomości Kraków, domy na sprzedaż, luksusowe domy, Wyrwa Residence, nowoczesne domy, 4 Vision Real Estate, inwestycje deweloperskie, domy jednorodzinne Kraków, ekskluzywne nieruchomości" />
    </Head>
  );
};

export default SEO; 