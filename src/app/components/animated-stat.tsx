"use client"

import { useEffect, useRef, useState } from "react"
import { useCounter } from "@/app/hooks/use-counter"

interface AnimatedStatProps {
  end: number
  label: string
  suffix?: string
}

export function AnimatedStat({ end, label, suffix = "" }: AnimatedStatProps) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCounter(isInView ? end : 0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.5,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={ref} className="space-y-2">
      <p className="text-4xl font-bold">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-gray-500 uppercase tracking-wider">{label}</p>
    </div>
  )
}

