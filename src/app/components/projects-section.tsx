"use client"

import { MapPin } from "lucide-react";
import { AnimatedStat } from "@/app/components/animated-stat";
import { AnimatedElement } from "@/app/components/animated-element";
import { ImageCarousel } from "@/app/components/image-carousel";

export function ProjectsSection() {
  return (
    <article id="inwestycje" className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <AnimatedElement className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Obecne inwestycje
          </h2>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <AnimatedElement>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Wyrwa Residence
              </h2>
              <p className="text-gray-500 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                ul. Wyrwa, Kraków
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.1} className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-medium mb-4">
                Prestiżowa lokalizacja
              </h3>
              <p className="text-gray-600">
                Domy położone w sercu Krakowa, przy ul. Wyrwa, zapewniają
                idealne połączenie spokoju, zieleni i bliskości miejskich
                udogodnień.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.2} className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-medium mb-4">
                Przemyślane wnętrza
              </h3>
              <p className="text-gray-600">
                Każdy detal jest starannie zaprojektowany i wykonany, aby
                zapewnić wyjątkową jakość. Od najlepszych materiałów po
                mistrzowskie wykończenia, Twój dom odzwierciedla precyzję i
                dbałość o szczegóły.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.3} className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-medium mb-4">
                Nowoczesna architektura
              </h3>
              <p className="text-gray-600">
                Domy zaprojektowane z myślą o elegancji i funkcjonalności,
                łączące minimalistyczny design z najwyższą jakością wykonania.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.4} className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-gray-200 pt-8">
              <AnimatedStat
                end={14}
                label="Czas dojazdu do rynku"
                suffix="min"
              />
              <AnimatedStat end={130} label="Powierzchnia domu" suffix="m2" />
              <AnimatedStat end={2} label="Liczba domów " />
            </AnimatedElement>
          </div>

          <AnimatedElement 
            delay={0.2}
            className="relative"
          >
            <ImageCarousel 
              images={[
                {
                  src: "/carousel-1.webp",
                  alt: "Nowoczesny dom typu nowoczesna stodoła"
                },
                {
                  src: "/carousel-2.webp",
                  alt: "Nowoczesny salon"
                }, 
                {
                  src: "/carousel-3.webp",
                  alt: "Luksusowe wnętrze z panoramicznym widokiem"
                },
                {
                  src: "/carousel-4.webp",
                  alt: "Nowoczesna sypialnia"
                },   {
                  src: "/carousel-5.webp",
                  alt: "Nowoczesna lazienka"
                },
                // Add more images as needed
              ]}
              autoplayDelay={5000} // Optional: customize delay in milliseconds
            />
          </AnimatedElement>
        </div>
      </div>
    </article>
  );
} 