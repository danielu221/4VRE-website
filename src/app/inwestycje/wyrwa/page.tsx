"use client";

import {
  Flag,
  Ruler,
  Home,
  MapPinIcon,
  AirVent,
  Heater,
  Cable,
  Grid2X2Plus,
  BrickWall,
  Rotate3D,
  School,
  Building,
  Building2,
  TreePine,
  Landmark,
  Map,
  CarFront,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/app/components/footer";
import { IconCard } from "@/app/components/icon-card";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/app/components/gallery";
import { Header } from "@/app/components/header";
import { FloorPlans } from "@/app/components/floor-plans";
import { motion } from "framer-motion";
import { AnimatedCard } from "@/app/components/animated-card";
import { BackgroundCarousel } from "@/app/components/background-carousel";

export default function WyrwaPage() {
  const propertyDetails = [
    {
      icon: <Home className="w-6 h-6 md:w-8 md:h-8 " />,
      value: "02",
      label: "LICZBA DOMÓW",
    },
    {
      icon: <Flag className="w-6 h-6 md:w-8 md:h-8 " />,
      value: "500 m²",
      subValue: "/ dom",
      label: "POW. DZIAŁKI",
    },
    {
      icon: <Ruler className="w-6 h-6 md:w-8 md:h-8 " />,
      value: "110 m²",
      subValue: "/ dom",
      label: "POW. UŻYTKOWA",
    },
    {
      icon: <CarFront className="w-6 h-6 md:w-8 md:h-8 " />,
      value: "02",
      subValue: "/ dom",
      label: "MSC. POSTOJOWE",
    },
  ];

  const amenities = [
    {
      icon: <Heater size={72} absoluteStrokeWidth={true} />,
      iconDesktop: <Heater size={124} absoluteStrokeWidth={true} />,
      title: "OGRZEWANIE",
      subtitle: "PODŁOGOWE",
    },
    {
      icon: <Cable size={72} absoluteStrokeWidth={true} />,
      iconDesktop: <Cable size={124} absoluteStrokeWidth={true} />,
      title: "INTERNET",
      subtitle: "ŚWIATŁOWÓD",
    },
    {
      icon: <AirVent size={72} absoluteStrokeWidth={true} />,
      iconDesktop: <AirVent size={124} absoluteStrokeWidth={true} />,
      title: "INSTALACJA",
      subtitle: "POD KLIMATYZACJĘ",
    },
    {
      icon: <Grid2X2Plus size={72} absoluteStrokeWidth={true} />,
      iconDesktop: <Grid2X2Plus size={124} absoluteStrokeWidth={true} />,
      title: "INSTALACJA",
      subtitle: "POD FOTOWOLTAIKĘ",
    },
    {
      icon: <BrickWall size={72} absoluteStrokeWidth={true} />,
      iconDesktop: <BrickWall size={124} absoluteStrokeWidth={true} />,
      title: "MOŻLIWOŚĆ",
      subtitle: "ADAPTACJI WNĘTRZ",
    },
    {
      icon: <Rotate3D size={72} absoluteStrokeWidth={true} />,
      iconDesktop: <Rotate3D size={124} absoluteStrokeWidth={true} />,
      title: "ORIENTACJA",
      subtitle: "WSCH. - ZACH.",
    },
  ];

  const locationAmenities = [
    {
      icon: <TreePine className="w-10 h-10" strokeWidth={1} />,
      name: "PARK ZDROJOWY",
      distance: "2 km",
      time: "4 minuty",
    },
    {
      icon: <Landmark className="w-10 h-10" strokeWidth={1} />,
      name: "RYNEK",
      distance: "12 km",
      time: "18 minut",
    },
    {
      icon: <School className="w-10 h-10" strokeWidth={1} />,
      name: "SZKOŁA",
      distance: "1 km",
      time: "3 minuty",
    },
    {
      icon: <Building className="w-10 h-10" strokeWidth={1} />,
      name: "CENTRUM HANDLOWE",
      distance: "3 km",
      time: "6 minut",
    },
    {
      icon: <Building2 className="w-10 h-10" strokeWidth={1} />,
      name: "SZPITAL",
      distance: "5 km",
      time: "11 minut",
    },
  ];

  const floorPlanTabs = [
    {
      id: "exterior",
      label: "Budynek z zewnątrz",
      title: "Budynek z zewnątrz",
      description: "Nowoczesna bryła budynku o minimalistycznej formie. Elewacja wykonana z wysokiej jakości materiałów łączących biel, szarość i naturalne drewno. Duże przeszklenia oraz przestronny taras idealnie komponują się z otaczającym ogrodem. Na zewnątrz wiata z miejscem na dwa samochody z możliwością zaaranżowania na garaż.",
      features: [
        "Nowoczesna architektura",
        "Duże przeszklenia",
        "Wiata z miejscem na dwa samochody",
        "Możliwość zaaranżowania wiaty na garaż",
        "Działka 500m²",
      ],
      imageSrc: "/wyrwa_zewnatrz_1.jpg",
    },
    {
      id: "parter",
      label: "Parter",
      title: "Parter",
      description: "Przestronna strefa dzienna z otwartą kuchnią, jadalnią i salonem. Duże przeszklenia zapewniają doskonałe doświetlenie wnętrza i bezpośredni dostęp do ogrodu. Dodatkowo na parterze znajduje się biuro, łazienka oraz pomieszczenie techniczne.",
      features: [
        "Salon z kuchnią (35.3m²)",
        "Biuro (8.4m²)",
        "Łazienka (4.4m²)",
        "Pomieszczenie techniczne (4.9m²)",
      ],
      imageSrc: "/plan_parter.png",
    },
    {
      id: "pietro",
      label: "Piętro",
      title: "Piętro",
      description: "Komfortowa strefa nocna z trzema sypialniami i łazienką. Główna sypialnia posiada własną garderobę. Wszystkie pomieszczenia są doskonale doświetlone i zapewniają maksymalną prywatność. Na piętrze znajdują się dwa balkony.",
      features: [
        "Sypialnia główna (21.7m²)",
        "Sypialnia gościnna 1 (7.9m²)",
        "Sypialnia gościnna 2 (12.1m²)",
        "Łazienka (4.8m²)",
        "Dwa balkony"
      ],
      imageSrc: "/plan_pietro.png",
    }
  ];

  return (
    <>
      <section className="relative w-full height-full-viewport">
        <Header />
        {/* Background Carousel */}
        <BackgroundCarousel 
          images={[
            "/wyrwa_zewnatrz_1.jpg",
            "/wyrwa_wnetrze_7.jpg",
            "/wyrwa_zewnatrz_2.jpg",
            "/wyrwa_wnetrze_14.jpg"
          ]}
          autoplayDelay={6000}
        />

        {/* Info Card */}
        <Card className="absolute bottom-16 right-0 left-0 mx-8 md:mx-0 md:left-16 flex flex-col min-w-[280px] max-w-[450px] md:w-[450px] bg-[#f3efea]/70 backdrop-blur-[10px] rounded-3xl overflow-hidden border-none">
          <CardContent className="flex flex-col gap-6 p-6 md:p-9 w-full ">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 " />
                  <span className=" text-xs leading-6 whitespace-nowrap">
                    UL. WYRWA, KRAKÓW
                  </span>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <h2 className="mt-[-1.00px]  text-4xl md:text-5xl leading-[normal] font-medium">
                    Wyrwa Residence
                  </h2>
                </div>
              </div>

              <p className="text-xs md:text-base md:leading-6">
              Kameralna i nowoczesna inwestycja z dwoma niezależnymi domami. Spokojne zacisze w dogodnej lokalizacji Krakowa.
              </p>
              <p className="text-xs md:text-base md:leading-6 font-bold">Termin realizacji: IV kwartał 2026</p>
            </div>

            <div className="grid [grid-template-columns:repeat(2,minmax(0,150px))] md:grid-cols-2 gap-2 md:gap-3 w-full mx-auto justify-center">
              {propertyDetails.map((detail, index) => (
                <Card
                  key={index}
                  className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-[9px] bg-primary rounded-xl overflow-hidden border-none"
                >
                  <CardContent className="flex items-center gap-2 md:gap-3 p-0">
                    {detail.icon}
                    <div className="flex flex-col h-[42px] justify-center gap-1.5">
                      <div className="text-[12px] md:text-base leading-[normal]">
                        {detail.value}
                        {detail.subValue && (
                          <span className="text-[7px] md:text-[10px]">{detail.subValue}</span>
                        )}
                      </div>
                      <div className="text-[7px] md:text-[10px] leading-[normal]">
                        {detail.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="bg-background py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Atuty
            </h2>
            <h3 className="text-center text-base md:text-lg">
              Nowoczesne rozwiązania technologiczne i wysokiej jakości wykończenie zapewniają komfort oraz funkcjonalność na najwyższym poziomie.
            </h3>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:[grid-template-columns:repeat(3,minmax(0,320px))] gap-6 justify-center">
            {amenities.map((amenity, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <IconCard
                  icon={amenity.icon}
                  iconDesktop={amenity.iconDesktop}
                  title={amenity.title}
                  subtitle={amenity.subtitle}
                />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-secondary border-foreground" />
      {/* Floors & plans */}
      <FloorPlans tabs={floorPlanTabs} />

      <hr className="border-t border-secondary border-foreground" />
      {/* Location */}
      <section className="bg-background py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col flex-col-reverse md:flex-row gap-12">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1070.9310553478367!2d19.95687695698135!3d49.99571694335196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDU5JzQ0LjEiTiAxOcKwNTcnMjIuOCJF!5e0!3m2!1spl!2spl!4v1741768777774!5m2!1spl!2spl" 
                width="720" 
                height="680" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[450px] md:h-full rounded-lg"
              ></iframe>
            </motion.div>
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                Lokalizacja
              </h2>
              <h3 className="text-base"> Inwestycja zlokalizowana w zielonej, kameralnej części Krakowa (Swoszowice), oferująca idealną równowagę między spokojem podmiejskiego życia a szybkim dostępem do centrum miasta. W pobliżu znajdują się tereny rekreacyjne, parki oraz pełna infrastruktura miejska niezbędna do komfortowego życia.
              </h3>

              <div className="space-y-6 mt-10">
                {locationAmenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between border-b border-secondary pb-3"
                  >
                    <div className="flex items-center">
                      <motion.div 
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.2 }}
                        className="mr-6"
                      >
                        {amenity.icon}
                      </motion.div>
                      <span className="font-medium text-lg">
                        {amenity.name}
                      </span>
                    </div>
                    <div className="text-right text-lg">
                      {amenity.distance} | {amenity.time}
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <Button
                  variant="outline"
                  className="w-full md:w-auto h-14 gap-3 px-6 py-4 rounded-xl border border-solid border-secondary"
                  asChild
                >
                  <a 
                    href="https://www.google.com/maps/place/49%C2%B059'44.1%22N+19%C2%B057'22.8%22E/@49.995717,19.956877,18z/data=!4m4!3m3!8m2!3d49.9955833!4d19.9563333?hl=pl&entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center"
                  >
                    <span className="px-4 [font-family:'Mulish-Regular',Helvetica] font-normal text-lg leading-6 whitespace-nowrap">
                      OTWÓRZ MAPY
                    </span>
                    <Map className="!w-6 !h-6"  />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Gallery */}
      <hr className="border-t border-secondary border-foreground" />
      <section className="bg-primary py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Galeria
            </h2>
            <h3 className="text-center text-base md:text-lg mb-12">
              Odkryj piękno i elegancję naszych wnętrz. Każde pomieszczenie zostało zaprojektowane z dbałością o detale, 
              komfort i nowoczesny styl.
            </h3>
          </motion.div>
          
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Gallery 
              images={[
                {
                  src: "/wyrwa_zewnatrz_1.jpg",
                  alt: "Wyrwa Residence - zewnątrz",
                  width: 1200,
                  height: 1200
                },
                {
                  src: "/wyrwa_zewnatrz_2.jpg",
                  alt: "Wyrwa Residence - zewnątrz",
                  width: 1200,
                  height: 1200
                },
                {
                  src: "/wyrwa_zewnatrz_3.jpg",
                  alt: "Wyrwa Residence - zewnątrz",
                  width: 1200,
                  height: 1200
                },
                {
                  src: "/wyrwa_zewnatrz_4.jpg",
                  alt: "Wyrwa Residence - zewnątrz",
                  width: 1200,
                  height: 1200
                },
                {
                  src: "/wyrwa_zewnatrz_5.jpg",
                  alt: "Wyrwa Residence - zewnątrz",
                  width: 1200,
                  height: 1200
                },
                {
                  src: "/wyrwa_wnetrze_2.jpg",
                  alt: "Wyrwa Residence - wnętrze",
                  width: 1200,
                  height: 1200
                },
                {
                  src: "/wyrwa_wnetrze_7.jpg",
                  alt: "Wyrwa Residence - wnętrze",
                  width: 1200,
                  height: 1200
                },
                {
                  src: "/wyrwa_wnetrze_8.jpg",
                  alt: "Wyrwa Residence - wnętrze",
                  width: 1200,
                  height: 1200
                },
                {
                  src: "/wyrwa_wnetrze_14.jpg",
                  alt: "Wyrwa Residence - wnętrze",
                  width: 1200,
                  height: 1200
                }
              ]}
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
