"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import ExportedImage from "next-image-export-optimizer"

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
          <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
           Nowoczesne domy dla nowoczesnego życia
          </h1>
          <p className="text-lg opacity-80">Tworzymy domy jednorodzinne, które realizują marzenia</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link
              href="#inwestycje"
              className="px-3 md:px-6 py-3 bg-secondary text-white rounded hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
            >
              Nasze inwestycje
            </Link>
            <Link
              href="#footer"
              className="px-3 md:px-6 py-3 border rounded hover:bg-foreground/10 transition-all duration-300 hover:scale-105"
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
          <ExportedImage
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

