import React from 'react';
import ExportedImage from 'next-image-export-optimizer';
import { AnimatedElement } from '@/app/components/animated-element';

export function AboutSection() {
  return (
    <article id="about" className="bg-background">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl  leading-tight ">
              4 Vision Real Estate – Tworzymy Przestrzeń Twoich Marzeń
            </h2>
            <p className="text-base md:text-lg">
              4 Vision Real Estate to dynamicznie rozwijająca się firma
              specjalizująca się w inwestycjach w domy jednorodzinne i działki
              na terenie Polski. Naszą misją jest tworzenie nowoczesnych
              przestrzeni, które spełniają najwyższe oczekiwania Klientów,
              łącząc funkcjonalność, estetykę i innowacyjne rozwiązania.
            </p>
            <p className="text-base md:text-lg">
              Nasza firma z pasją buduje swoją pozycję na rynku, stawiając na
              rozwój i zaufanie Klientów. Zachęcamy do śledzenia naszych
              postępów oraz zapoznania się z aktualną ofertą.
            </p>
          </AnimatedElement>
        </div>
      </div>
    </article>
  );
} 