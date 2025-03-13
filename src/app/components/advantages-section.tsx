"use client";

import { Leaf, Shield, User, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCard } from "./animated-card";
import ExportedImage from "next-image-export-optimizer";

export function AdvantagesSection() {
  return (
    <section className="bg-primary py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between mb-16 relative">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl  leading-tight mb-4">
              Poznaj nasze atuty
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Elegant Home Card */}
          <AnimatedCard delay={0.1} className="md:col-span-2">
            <div className="bg-background rounded-[32px] p-8 h-full">
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="space-y-4 md:w-2/3 flex flex-col justify-center">
                  <h3 className="text-2xl font-medium">
                    Innowacyjne domy
                  </h3>
                  <p >
                    Tworzymy nowoczesne przestrzenie, które łączą technologię z
                    komfortem życia.
                  </p>
                </div>
                <div className="relative md:w-1/3 h-64 md:h-auto rounded-2xl overflow-hidden">
                  <ExportedImage
                    src="/modern_barn.png"
                    alt="Elegant home interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Legal Assistance Card */}
          <AnimatedCard delay={0.2}>
            <div className="bg-background rounded-3xl p-8 h-full">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
                className="h-12 w-12 rounded-full flex items-center justify-center mb-6"
              >
                <Leaf className="h-6 w-6" />
              </motion.div>
              <h3 className="text-2xl font-medium mb-4">
                Energooszczędne rozwiązania
              </h3>
              <p >
                Oszczęność dzięki nowoczesnym systemom energetycznym.
              </p>
            </div>
          </AnimatedCard>
          {/* Legal Assistance Card */}
          <AnimatedCard delay={0.3}>
            <div className="bg-background rounded-3xl p-8 h-full">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
                className="h-12 w-12  rounded-full flex items-center justify-center mb-6"
              >
                <Shield className="h-6 w-6" />
              </motion.div>
              <h3 className="text-2xl font-medium mb-4">
                Bezstresowy proces zakupu
              </h3>
              <p >
                Kompleksowe wsparcie na każdym etapie budowy i zakupu.
              </p>
            </div>
          </AnimatedCard>
          {/* Legal Assistance Card */}
          <AnimatedCard delay={0.4}>
            <div className="bg-background rounded-3xl p-8 h-full">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
                className="h-12 w-12  rounded-full flex items-center justify-center mb-6"
              >
                <User className="h-6 w-6" />
              </motion.div>
              <h3 className="text-2xl font-medium mb-4">
                Indywidualne podejście
              </h3>
              <p >
                Każdy projekt dopasowujemy do Twoich potrzeb i oczekiwań,
                tworząc przestrzeń idealną dla Ciebie i Twojej rodziny.
              </p>
            </div>
          </AnimatedCard>

          {/* Seamless Buying Card */}
          <AnimatedCard delay={0.5}>
            <div className="bg-background rounded-3xl p-8 h-full">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
                className="h-12 w-12  rounded-full flex items-center justify-center mb-6"
              >
                <MapPin className="h-6 w-6" />
              </motion.div>
              <h3 className="text-2xl font-medium mb-4">
                Topowe lokalizacje
              </h3>
              <p >
                Oferujemy domy w starannie dobranych miejscach, łączących spokój
                i wygodę życia.
              </p>
            </div>
          </AnimatedCard>
          {/* Modern Apartments Card */}
          <AnimatedCard delay={0.6} className="md:col-span-2">
            <div className="bg-background rounded-3xl p-8 h-full">
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="relative md:w-1/3 h-48 md:h-auto rounded-2xl overflow-hidden group">
                  <ExportedImage
                    src="/modern_barn_inside.webp"
                    alt="Modern apartment building"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-4 md:w-2/3 flex flex-col justify-center">
                  <h3 className="text-2xl font-medium">
                    Precyzja wykonania
                  </h3>
                  <p >
                    Każdy detal naszych domów jest dopracowany z najwyższą
                    starannością i dbałością o jakość.
                  </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="mt-auto"
                  >
                    {/* <Link href="/apartments" className="inline-flex items-center hover:opacity-80">
                      Browse apartments
                      <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </Link> */}
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
