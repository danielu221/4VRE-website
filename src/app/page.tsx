"use client"

import { Footer } from "@/app/components/footer";
import { AdvantagesSection } from "@/app/components/advantages-section";
import { HeroSection } from "@/app/components/hero-section";
import { Header } from "@/app/components/header";
import Script from "next/script";
import { AboutSection } from "@/app/components/about-section";
import { ProjectsSection } from "@/app/components/projects-section";

export default function Page() {
  return (
    <>
      {/* Organization Schema */}
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "4 Vision Real Estate",
          "description": "Dynamicznie rozwijająca się firma specjalizująca się w inwestycjach w domy jednorodzinne i działki na terenie Polski.",
          "url": "https://4vre.pl",
          "logo": "https://4vre.pl/4vre-logo-horizontal-black.svg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kraków",
            "addressCountry": "PL"
          },
          "areaServed": {
            "@type": "City",
            "name": "Kraków"
          },
          "sameAs": [
            "https://www.facebook.com/4visionrealestate",
            "https://www.instagram.com/4visionrealestate"
          ]
        })}
      </Script>

      {/* Real Estate Project Schema */}
      <Script id="real-estate-project-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Wyrwa Residence",
          "description": "Luksusowe domy jednorodzinne w prestiżowej lokalizacji w Krakowie. Nowoczesna architektura, wysokiej jakości materiały, funkcjonalne wnętrza.",
          "brand": {
            "@type": "Brand",
            "name": "4 Vision Real Estate"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "PLN",
            "availability": "https://schema.org/InStock"
          },
          "image": [
            "https://4vre.pl/wyrwa_zewnatrz_1.jpg",
            "https://4vre.pl/wyrwa_zewnatrz_2.jpg",
            "https://4vre.pl/wyrwa_wnetrze_1.jpg"
          ]
        })}
      </Script>

      {/* Local Business Schema */}
      <Script id="local-business-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "4 Vision Real Estate",
          "image": "https://4vre.pl/4vre-logo-horizontal-black.svg",
          "telephone": "+48123456789",
          "email": "kontakt@4vre.pl",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kraków",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "50.0647",
            "longitude": "19.9450"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          }
        })}
      </Script>

      <main className="min-h-screen">
        <div className="bg-primary">
          <Header />
          <HeroSection />
        </div>

        {/* About Section */}
        <AboutSection />

        {/* Advantages Section */}
        <AdvantagesSection />

        {/* Projects Section */}
        <ProjectsSection />

        <Footer />
      </main>
    </>
  );
}
