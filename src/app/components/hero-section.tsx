"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-12 md:pt-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-[#2D3134] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
           Nowoczesne domy dla nowoczesnego życia
          </h1>
          <p className="text-[#2D3134] text-lg opacity-80">Tworzymy domy jednorodzinne, które realizują marzenia</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#inwestycje"
              className="px-6 py-3 bg-[#2D3134] text-white rounded hover:bg-[#2D3134]/90 transition-all duration-300 hover:scale-105"
            >
              Nasze inwestycje
            </Link>
            <Link
              href="mailto:kontakt@4vre.pl"
              className="px-6 py-3 border border-[#2D3134] text-[#2D3134] rounded hover:bg-[#2D3134]/10 transition-all duration-300 hover:scale-105"
            >
              Skontaktuj się z nami
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut",delay: 0.3 }}
          className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
        >
          <Image
            src="/white_house_no_bg.png"
            alt="Nowoczesny budynek architektoniczny z wysuniętą sekcją"
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

