import Link from "next/link"
import { MapPin } from "lucide-react"
import { AnimatedStat } from "@/app/components/animated-stat"
import { Footer } from "@/app/components/footer"
import { AdvantagesSection } from "@/app/components/advantages-section"
import { HeroSection } from "@/app/components/hero-section"
import ExportedImage from "next-image-export-optimizer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#E5EEF3]">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-[#2D3134] text-xl font-semibold">
              4 Vision Real Estate
            </Link>
            {/* <ul className="hidden md:flex items-center gap-8">
              <li>
                <Link href="/" className="text-[#2D3134] hover:opacity-80 transition-opacity">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#2D3134] hover:opacity-80 transition-opacity">
                  O NAS
                </Link>
              </li>
              <li>
                <Link href="/project" className="text-[#2D3134] hover:opacity-80 transition-opacity">
                  INWESTYCJE
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#2D3134] hover:opacity-80 transition-opacity">
                  KONTAKT
                </Link>
              </li>
            </ul> */}
          </nav>
        </header>

        <HeroSection />
      </div>

      {/* About Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[600px] order-2 md:order-1">
              <ExportedImage
                src="/minimal.jpg"
                alt="Modern high-rise building"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-8  order-1 md:order-2">
              <h2 className="text-[#2D3134] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ">
              4 Vision Real Estate – Tworzymy Przestrzeń Twoich Marzeń
              </h2>
              <p className="text-gray-600 text-lg">
              4 Vision Real Estate to dynamicznie rozwijająca się firma specjalizująca się w inwestycjach w domy jednorodzinne i działki na terenie Polski. Naszą misją jest tworzenie nowoczesnych przestrzeni, które spełniają najwyższe oczekiwania Klientów, łącząc funkcjonalność, estetykę i innowacyjne rozwiązania.
              </p>
              <p className="text-gray-600 text-lg">
              Nasza firma z pasją buduje swoją pozycję na rynku, stawiając na rozwój i zaufanie Klientów. Zachęcamy do śledzenia naszych postępów oraz zapoznania się z aktualną ofertą.
              </p>
            
            </div>
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
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[#2D3134] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Obecne inwestycje
            </h2>
            
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
            <h2 className="text-[#2D3134] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Wyrwa Residence
            </h2>
            <p className="text-gray-500 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  ul. Wyrwa, Kraków
                </p>
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-medium text-[#2D3134] mb-4">
                Prestiżowa lokalizacja
                </h3>
                <p className="text-gray-600">
                Domy położone w sercu Krakowa, przy ul. Wyrwa, zapewniają idealne połączenie spokoju, zieleni i bliskości miejskich udogodnień.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8">
                
                <h3 className="text-2xl font-medium text-[#2D3134] mb-4">
                Przemyślane wnętrza
                </h3>
                <p className="text-gray-600">
                  Każdy detal jest starannie zaprojektowany i wykonany, aby zapewnić wyjątkową jakość. Od najlepszych materiałów po mistrzowskie wykończenia, Twój dom odzwierciedla precyzję i dbałość o szczegóły.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-medium text-[#2D3134] mb-4">
                Nowoczesna architektura
                </h3>
                <p className="text-gray-600">
                Domy zaprojektowane z myślą o elegancji i funkcjonalności, łączące minimalistyczny design z najwyższą jakością wykonania.
                </p>
              </div>

        
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-gray-200 pt-8">
                <AnimatedStat end={14} label="Czas dojazdu do rynku" suffix="min" />
                <AnimatedStat end={130} label="Powierzchnia domu" suffix="m2" />
                <AnimatedStat end={2} label="Liczba domów " />
              </div>
            </div>

            <div className="relative h-[800px]">
              <ExportedImage
                src="/modern_barn_inside.webp"
                alt="Luksusowe wnętrze z panoramicznym widokiem"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

