"use client"

import { MapPin } from "lucide-react";
import { AnimatedStat } from "@/app/components/animated-stat";
import { AnimatedElement } from "@/app/components/animated-element";
import { ImageCarousel } from "@/app/components/image-carousel";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import Link from "next/link";

export default function WyrwaPage() {
  return (
    <>
      <div className="bg-primary">
        <Header />
      </div>
      
      <main className="min-h-screen">
        <article className="bg-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mb-8">
              <Link href="/#inwestycje" className="text-secondary hover:underline flex items-center gap-2">
                ← Powrót do inwestycji
              </Link>
            </div>
            
            <AnimatedElement className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                Wyrwa Residence
              </h1>
              <p className="text-gray-500 flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5" />
                ul. Wyrwa, Kraków
              </p>
            </AnimatedElement>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <AnimatedElement>
                  <h2 className="text-2xl font-medium mb-4">
                    Prestiżowa lokalizacja
                  </h2>
                  <p className="text-gray-600">
                    Domy położone w sercu Krakowa, przy ul. Wyrwa, zapewniają
                    idealne połączenie spokoju, zieleni i bliskości miejskich
                    udogodnień. Lokalizacja ta oferuje łatwy dostęp do centrum miasta,
                    parków, szkół, restauracji i sklepów, co czyni ją idealnym miejscem
                    do życia dla rodzin i profesjonalistów.
                  </p>
                </AnimatedElement>

                <AnimatedElement delay={0.1}>
                  <h2 className="text-2xl font-medium mb-4">
                    Przemyślane wnętrza
                  </h2>
                  <p className="text-gray-600">
                    Każdy detal jest starannie zaprojektowany i wykonany, aby
                    zapewnić wyjątkową jakość. Od najlepszych materiałów po
                    mistrzowskie wykończenia, Twój dom odzwierciedla precyzję i
                    dbałość o szczegóły. Przestronne pokoje, duże okna zapewniające
                    naturalne światło oraz funkcjonalny układ sprawiają, że wnętrza
                    są zarówno eleganckie, jak i praktyczne.
                  </p>
                </AnimatedElement>

                <AnimatedElement delay={0.2}>
                  <h2 className="text-2xl font-medium mb-4">
                    Nowoczesna architektura
                  </h2>
                  <p className="text-gray-600">
                    Domy zaprojektowane z myślą o elegancji i funkcjonalności,
                    łączące minimalistyczny design z najwyższą jakością wykonania.
                    Fasady budynków harmonijnie wpisują się w otoczenie, jednocześnie
                    wyróżniając się nowoczesnym charakterem i ponadczasową estetyką.
                  </p>
                </AnimatedElement>

                <AnimatedElement delay={0.3}>
                  <h2 className="text-2xl font-medium mb-4">
                    Specyfikacja techniczna
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Powierzchnia domu: 130 m²</li>
                    <li>Liczba pięter: 2</li>
                    <li>Liczba sypialni: 3</li>
                    <li>Liczba łazienek: 2</li>
                    <li>Garaż: 1 stanowisko</li>
                    <li>Ogrzewanie: Pompa ciepła</li>
                    <li>Energooszczędność: Klasa A+</li>
                    <li>Ogród: Tak</li>
                  </ul>
                </AnimatedElement>

                <AnimatedElement delay={0.4} className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
                  <AnimatedStat
                    end={14}
                    label="Czas dojazdu do rynku"
                    suffix="min"
                  />
                  <AnimatedStat end={130} label="Powierzchnia domu" suffix="m2" />
                  <AnimatedStat end={2} label="Liczba domów" />
                </AnimatedElement>

                <AnimatedElement delay={0.5} className="pt-8">
                  <Link
                    href="mailto:kontakt@4vre.pl?subject=Zapytanie%20o%20Wyrwa%20Residence"
                    className="px-6 py-3 bg-secondary text-white rounded hover:bg-secondary/90 transition-all duration-300 hover:scale-105 inline-block"
                  >
                    Zapytaj o dostępność
                  </Link>
                </AnimatedElement>
              </div>

              <div className="space-y-8">
                <AnimatedElement delay={0.2} className="relative">
                  <ImageCarousel 
                    images={[
                      {
                        src: "/wyrwa_zewnatrz_1.jpg",
                        alt: "Nowoczesny dom typu nowoczesna stodoła"
                      },
                      {
                        src: "/wyrwa_zewnatrz_2.jpg",
                        alt: "Nowoczesny salon"
                      }, 
                      {
                        src: "/carousel-3.webp",
                        alt: "Luksusowe wnętrze z panoramicznym widokiem"
                      },
                      {
                        src: "/carousel-4.webp",
                        alt: "Nowoczesna sypialnia"
                      },
                      {
                        src: "/carousel-5.webp",
                        alt: "Nowoczesna lazienka"
                      }
                    ]}
                    autoplayDelay={5000}
                  />
                </AnimatedElement>

                <AnimatedElement delay={0.3}>
                  <h2 className="text-2xl font-medium mb-4">
                    Lokalizacja
                  </h2>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.0887937428456!2d19.93762!3d50.06303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b120a870a9b%3A0xc8aa80270cf24d4b!2sWyrwa%2C%2030-001%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1646000000000!5m2!1spl!2spl" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title="Mapa lokalizacji Wyrwa Residence"
                    ></iframe>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
} 