"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

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

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavClick = (sectionId: string) => {
    smoothScrollTo(sectionId)
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Services", id: "services" },
    { name: "Work", id: "work" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex-shrink-0">
            <span className="sr-only">URBA TECH</span>
            <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=120" alt="URBA TECH Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary/80 transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-1 px-4 pb-3 pt-2 bg-background/95 backdrop-blur-md border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary/80 hover:bg-secondary/50 rounded-md transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
