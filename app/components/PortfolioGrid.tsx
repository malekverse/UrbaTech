"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import ScrollReveal from "./ScrollReveal"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack online store with payment integration and inventory management",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Corporate Dashboard",
    description: "Data visualization and analytics platform for enterprise decision-making",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and health metrics",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Mobile App",
  },
  {
    id: 4,
    title: "Virtual Showroom",
    description: "AR experience allowing customers to visualize products in their space",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "AR/VR",
  },
  {
    id: 5,
    title: "Media Campaign",
    description: "Integrated digital marketing strategy for product launch",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Media Planning",
  },
  {
    id: 6,
    title: "AI Chatbot",
    description: "Intelligent customer service solution with natural language processing",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "AI Integration",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Work</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A showcase of our innovative IT solutions and technical expertise.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="none" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1} amount={0.2}>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-background rounded-lg shadow-md overflow-hidden hover-lift transition-all duration-300 ease-in-out border border-border h-full"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    >
                      <p className="text-white text-center px-4">{project.description}</p>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-muted-foreground mb-1">{project.category}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <a href="#" className="text-primary hover:underline inline-flex items-center">
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
