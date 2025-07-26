"use client"

import type { ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  amount = 0.3,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { y: 50, opacity: 0 }
      case "down":
        return { y: -50, opacity: 0 }
      case "left":
        return { x: 50, opacity: 0 }
      case "right":
        return { x: -50, opacity: 0 }
      case "none":
        return { opacity: 0 }
      default:
        return { y: 50, opacity: 0 }
    }
  }

  const getAnimateValues = () => {
    if (isInView) {
      return { y: 0, x: 0, opacity: 1 }
    }
    return getDirectionValues()
  }

  return (
    <motion.div
      ref={ref}
      initial={getDirectionValues()}
      animate={getAnimateValues()}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

