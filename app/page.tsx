import Hero from "./components/Hero"
import Services from "./components/Services"
import PortfolioGrid from "./components/PortfolioGrid"
import AboutUs from "./components/AboutUs"
import Testimonials from "./components/Testimonials"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import { FloatingActionButton } from "./components/FloatingActionButton"
import ParallaxSection from "./components/ParallaxSection"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ParallaxSection />
      <PortfolioGrid />
      <AboutUs />
      <Testimonials />
      <Marquee />
      <ContactForm />
      <FloatingActionButton />
    </>
  )
}

