"use client"

import { MapPin } from "lucide-react";
import { AnimatedStat } from "@/app/components/animated-stat";
import { Footer } from "@/app/components/footer";
import { AdvantagesSection } from "@/app/components/advantages-section";
import { HeroSection } from "@/app/components/hero-section";
import { AnimatedElement } from "@/app/components/animated-element";
import { Header } from "@/app/components/header";
import ExportedImage from "next-image-export-optimizer";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#E5EEF3]">
        <Header />
        <HeroSection />
      </div>

      {/* About Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement 
              direction="left"
              className="relative h-[400px] md:h-[600px] order-2 md:order-1"
            >
              <ExportedImage
                src="/minimal.jpg"
                alt="Modern high-rise building"
                fill
                className="object-cover rounded-lg"
              />
            </AnimatedElement>
            <AnimatedElement 
              direction="right"
              className="space-y-8 order-1 md:order-2"
            >
              <h2 className="text-[#2D3134] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ">
                4 Vision Real Estate – Tworzymy Przestrzeń Twoich Marzeń
              </h2>
              <p className="text-gray-600 text-lg">
                4 Vision Real Estate to dynamicznie rozwijająca się firma
                specjalizująca się w inwestycjach w domy jednorodzinne i działki
                na terenie Polski. Naszą misją jest tworzenie nowoczesnych
                przestrzeni, które spełniają najwyższe oczekiwania Klientów,
                łącząc funkcjonalność, estetykę i innowacyjne rozwiązania.
              </p>
              <p className="text-gray-600 text-lg">
                Nasza firma z pasją buduje swoją pozycję na rynku, stawiając na
                rozwój i zaufanie Klientów. Zachęcamy do śledzenia naszych
                postępów oraz zapoznania się z aktualną ofertą.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <AdvantagesSection />

      {/* Projects Section */}
      {/* <section className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex justify-between items-center mb-12">
            <div className="max-w-2xl">
              <h2 className="text-[#2D3134] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Obecne inwestycje</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src="/house.png" alt="Vintage Villa" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#2D3134]">Wyrwa Residence</h3>
                <p className="text-gray-500 flex items-center gap-2 mt-2">
                  <MapPin className="h-4 w-4" />
                  ul. Wyrwa, Kraków
                </p>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      {/* Art of Living Section */}
      <section id="inwestycje" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <AnimatedElement className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[#2D3134] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Obecne inwestycje
            </h2>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <AnimatedElement>
                <h2 className="text-[#2D3134] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Wyrwa Residence
                </h2>
                <p className="text-gray-500 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  ul. Wyrwa, Kraków
                </p>
              </AnimatedElement>

              <AnimatedElement delay={0.1} className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-medium text-[#2D3134] mb-4">
                  Prestiżowa lokalizacja
                </h3>
                <p className="text-gray-600">
                  Domy położone w sercu Krakowa, przy ul. Wyrwa, zapewniają
                  idealne połączenie spokoju, zieleni i bliskości miejskich
                  udogodnień.
                </p>
              </AnimatedElement>

              <AnimatedElement delay={0.2} className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-medium text-[#2D3134] mb-4">
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
                <h3 className="text-2xl font-medium text-[#2D3134] mb-4">
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
              className="relative h-[800px]"
            >
              <ExportedImage
                src="/modern_barn_inside.webp"
                alt="Luksusowe wnętrze z panoramicznym widokiem"
                fill
                className="object-cover rounded-lg"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
