"use client";

import {
  Flag,
  Ruler,
  Home,
  Fence,
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
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Footer } from "@/app/components/footer";
import { IconCard } from "@/app/components/icon-card";
import { Button } from "@/components/ui/button";

export default function WyrwaPage() {
  const propertyDetails = [
    {
      icon: <Home className="w-8 h-8 " />,
      value: "02",
      label: "LICZBA DOMÓW",
    },
    {
      icon: <Flag className="w-8 h-8 " />,
      value: "450 m²",
      subValue: "/ dom",
      label: "POW. DZIAŁKI",
    },
    {
      icon: <Ruler className="w-8 h-8 " />,
      value: "107 m²",
      subValue: "/ dom",
      label: "POW. UŻYTKOWA",
    },
    {
      icon: <Fence className="w-8 h-8 " />,
      value: "343 m²",
      subValue: "/ dom",
      label: "POW. OGRODU",
    },
  ];

  const amenities = [
    {
      icon: <Heater size={124} absoluteStrokeWidth={true} />,
      title: "OGRZEWANIE",
      subtitle: "PODŁOGOWE",
    },
    {
      icon: <Cable size={124} absoluteStrokeWidth={true} />,
      title: "INTERNET",
      subtitle: "ŚWIATŁOWÓD",
    },
    {
      icon: <AirVent size={124} absoluteStrokeWidth={true} />,
      title: "INSTALACJA",
      subtitle: "POD KLIMATYZACJĘ",
    },
    {
      icon: <Grid2X2Plus size={124} absoluteStrokeWidth={true} />,
      title: "INSTALACJA",
      subtitle: "POD FOTOWOLTAIKĘ",
    },
    {
      icon: <BrickWall size={124} absoluteStrokeWidth={true} />,
      title: "MOŻLIWOŚĆ",
      subtitle: "ADAPTACJI WNĘTRZ",
    },
    {
      icon: <Rotate3D size={124} absoluteStrokeWidth={true} />,
      title: "ORIENTACJA",
      subtitle: "WSCH. - ZACH.",
    },
  ];

  const locationAmenities = [
    {
      icon: <School className="w-10 h-10" strokeWidth={1} />,
      name: "SZKOŁA",
      distance: "1.2 km",
      time: "3 minuty",
    },
    {
      icon: <Building className="w-10 h-10" strokeWidth={1} />,
      name: "GALERIA",
      distance: "4 km",
      time: "7 minut",
    },
    {
      icon: <Building2 className="w-10 h-10" strokeWidth={1} />,
      name: "SZPITAL",
      distance: "X km",
      time: "X minut",
    },
    {
      icon: <TreePine className="w-10 h-10" strokeWidth={1} />,
      name: "PARK",
      distance: "2 km",
      time: "5 minut",
    },
    {
      icon: <Landmark className="w-10 h-10" strokeWidth={1} />,
      name: "RYNEK",
      distance: "12 km",
      time: "15 minut",
    },
  ];

  return (
    <>
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("/wyrwa_wnetrze_12.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Info Card */}
        <Card className="absolute bottom-16 left-16 flex flex-col w-[450px] bg-[#f3efea]/70 backdrop-blur-[10px] rounded-3xl overflow-hidden border-none">
          <CardContent className="flex flex-col gap-6 p-9 w-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 " />
                  <span className=" text-xs leading-6 whitespace-nowrap">
                    UL. WYRWA, KRAKÓW
                  </span>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <h2 className="mt-[-1.00px]  text-5xl leading-[normal]">
                    Wyrwa Residence
                  </h2>
                </div>
              </div>

              <p className=" text-base leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 w-full">
              {propertyDetails.map((detail, index) => (
                <Card
                  key={index}
                  className="flex w-40 items-center gap-3 px-3 py-[9px] bg-primary rounded-xl overflow-hidden border-none"
                >
                  <CardContent className="flex items-center gap-3 p-0">
                    {detail.icon}
                    <div className="flex flex-col h-[42px] justify-center gap-1.5">
                      <div className=" text-base leading-[normal]">
                        {detail.value}
                        {detail.subValue && (
                          <span className="text-[10px]">{detail.subValue}</span>
                        )}
                      </div>
                      <div className="text-[10px]  leading-[normal]">
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
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Atuty
          </h2>
          <h3 className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:[grid-template-columns:repeat(3,minmax(0,320px))] gap-6 justify-center">
            {amenities.map((amenity, index) => (
              <IconCard
                key={index}
                icon={amenity.icon}
                title={amenity.title}
                subtitle={amenity.subtitle}
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-secondary border-foreground" />
      {/* Floors & plans */}
      <section className="bg-background py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className=" mx-auto">
            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex space-x-2 border-b pb-2">
                  <button className="px-4 py-2 text-sm font-medium ">
                    Ogród
                  </button>
                  <button className="px-4 py-2 text-sm font-medium ">
                    Parter
                  </button>
                  <button className="px-4 py-2 text-sm font-medium ">
                    Piętro
                  </button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Left column - Text content */}
                  <div className="w-full md:w-1/2 p-9">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                      Ogród
                    </h2>
                    <p className=" mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <div className="w-5 h-5 mr-2 border border-foreground flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Lorem ipsum dolor sit</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 mr-2 border border-foreground flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Lorem ipsum dolor sit</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 mr-2 border border-foreground flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Lorem ipsum dolor sit</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 mr-2 border border-foreground flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Lorem ipsum dolor sit</span>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium"
                      >
                        OPIS POSIADŁOŚCI PDF
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2"
                        >
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right column - Floor plan image */}
                  <div className="w-full md:w-1/2 p-9">
                    <img
                      src="/images/floor-plan.jpg"
                      alt="Plan mieszkania"
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/600x400/e2e8f0/64748b?text=Plan+mieszkania";
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <hr className="border-t border-secondary border-foreground" />
      {/* Location */}
      <section className="bg-background py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="/images/floor-plan.jpg"
                alt="Plan mieszkania"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/600x400/e2e8f0/64748b?text=Plan+mieszkania";
                }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                Lokalizacja
              </h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>

              <div className="space-y-6 mt-10">
                {locationAmenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-secondary pb-3"
                  >
                    <div className="flex items-center">
                      <div className="mr-6">{amenity.icon}</div>
                      <span className="font-medium text-lg">
                        {amenity.name}
                      </span>
                    </div>
                    <div className="text-right text-lg">
                      {amenity.distance} | {amenity.time}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button
                  variant="outline"
                  className="h-14 gap-3 px-6 py-4 rounded-xl border border-solid border-secondary"
                >
                  <span className="px-4 [font-family:'Mulish-Regular',Helvetica] font-normal text-lg leading-6 whitespace-nowrap">
                    OTWÓRZ MAPY
                  </span>
                  <Map className="!w-6 !h-6"  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery */}
      <hr className="border-t border-secondary border-foreground" />
      <section className="bg-primary py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Galeria
          </h2>
          <h3 className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
          
        </div>
      </section>

      <Footer />
    </>
  );
}
