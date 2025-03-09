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
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "4 Vision Real Estate",
          "description": "Dynamicznie rozwijająca się firma specjalizująca się w inwestycjach w domy jednorodzinne i działki na terenie Polski.",
          "url": "https://4vre.pl",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kraków",
            "addressCountry": "PL"
          },
          "areaServed": {
            "@type": "City",
            "name": "Kraków"
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
