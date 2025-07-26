"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={ref} className="relative h-[50vh] overflow-hidden bg-black flex items-center justify-center">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
      />
      <motion.div className="relative z-10 text-center px-4" style={{ opacity, scale }}>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Innovative Technology Solutions</h2>
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
          Transforming businesses through cutting-edge IT services and digital experiences
        </p>
      </motion.div>
    </section>
  )
}

