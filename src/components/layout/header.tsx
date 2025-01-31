"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { SiteHeader } from "@/components/layout/site-header"

export function Header() {
  return (
    <div className="bg-[#E5EEF3]">
      <SiteHeader />
      <HeroSection />
    </div>
  )
} 