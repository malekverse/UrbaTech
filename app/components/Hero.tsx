"use client"
import { ArrowRight } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <ScrollReveal direction="left">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              <span className="text-gradient">URBA TECH</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Professional IT solutions for modern businesses. Full-stack web development, media planning, AR/VR, and
              more.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.4}>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#contact" className="apple-button">
                Get Started
              </a>
              <a href="#services" className="text-sm font-semibold leading-6 text-foreground flex items-center">
                Our Services <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal direction="right" delay={0.6}>
          <div className="mx-auto mt-16 lg:mt-0">
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="URBA TECH solutions"
                width={600}
                height={600}
                className="w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

