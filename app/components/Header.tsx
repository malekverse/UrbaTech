"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Only show the theme toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">URBA TECH</span>
            <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=120" alt="URBA TECH Logo" />
          </Link>
        </div>
        <div className="flex gap-x-12">
          <Link
            href="#services"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary/80 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#work"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary/80 transition-colors"
          >
            Work
          </Link>
          <Link
            href="#about"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary/80 transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary/80 transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}

