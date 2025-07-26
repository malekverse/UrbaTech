"use client"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"
import ScrollReveal from "./ScrollReveal"

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <ScrollReveal direction="left">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                🚀 New AI Solutions Available
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="text-gradient">URBA TECH</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-muted-foreground">
                Innovation Meets Excellence
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Transform your business with cutting-edge IT solutions. From full-stack web development to immersive AR/VR
              experiences, we deliver technology that drives growth and innovation.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.4}>
            <div className="mt-10 flex items-center gap-x-6">
              <button onClick={() => smoothScrollTo("contact")} className="apple-button flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                onClick={() => smoothScrollTo("services")}
                className="flex items-center text-sm font-semibold leading-6 text-foreground hover:text-primary/80 transition-colors"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.6}>
            <div className="mt-10 flex items-center gap-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="h-8 w-8 rounded-full ring-2 ring-background"
                    src={`/placeholder.svg?height=32&width=32&text=${i}`}
                    alt={`Client ${i}`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">50+</span> satisfied clients
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="right" delay={0.6}>
          <div className="mx-auto mt-16 lg:mt-0">
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <img
                src="/placeholder.svg?height=600&width=600&text=Tech+Innovation"
                alt="URBA TECH solutions"
                width={600}
                height={600}
                className="relative w-[500px] rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
              />

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <span className="text-sm font-bold">AI</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-3 rounded-full shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
              >
                <span className="text-sm font-bold">AR/VR</span>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-secondary/20 to-primary/20 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  )
}
