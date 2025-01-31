"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedElementProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right"
}

export function AnimatedElement({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: AnimatedElementProps) {
  const directionOffset = {
    up: { y: 20 },
    left: { x: -20 },
    right: { x: 20 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 