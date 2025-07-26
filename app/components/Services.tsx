"use client"
import { Code, Globe, Smartphone, Cpu, PenTool, Layers } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

const services = [
  {
    icon: <Globe className="w-12 h-12 mb-4 text-foreground" />,
    title: "Full-Stack Web Development",
    description: "End-to-end web solutions from design to deployment with modern technologies.",
  },
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-foreground" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: <PenTool className="w-12 h-12 mb-4 text-foreground" />,
    title: "Media Planning",
    description: "Strategic media planning and execution for maximum brand impact.",
  },
  {
    icon: <Layers className="w-12 h-12 mb-4 text-foreground" />,
    title: "AR/VR Solutions",
    description: "Immersive augmented and virtual reality experiences for business and entertainment.",
  },
  {
    icon: <Cpu className="w-12 h-12 mb-4 text-foreground" />,
    title: "AI Integration",
    description: "Implementing artificial intelligence solutions to automate and enhance business processes.",
  },
  {
    icon: <Code className="w-12 h-12 mb-4 text-foreground" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-black mb-16 text-center text-foreground">Our Services</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="bg-background p-6 rounded-lg shadow-md border border-border h-full">
                {service.icon}
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

