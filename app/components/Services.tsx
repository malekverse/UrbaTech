"use client"
import { Code, Globe, Smartphone, Cpu, PenTool, Layers, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import ScrollReveal from "./ScrollReveal"

const services = [
  {
    icon: <Globe className="w-12 h-12 mb-4 text-primary" />,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web solutions from design to deployment with modern technologies like React, Next.js, and Node.js.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
  },
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-primary" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    features: ["Cross-Platform", "Native Performance", "App Store Ready"],
  },
  {
    icon: <PenTool className="w-12 h-12 mb-4 text-primary" />,
    title: "Media Planning",
    description: "Strategic media planning and execution for maximum brand impact across digital channels.",
    features: ["Digital Strategy", "Brand Identity", "Campaign Management"],
  },
  {
    icon: <Layers className="w-12 h-12 mb-4 text-primary" />,
    title: "AR/VR Solutions",
    description: "Immersive augmented and virtual reality experiences for business and entertainment applications.",
    features: ["3D Modeling", "Interactive Experiences", "VR Training"],
  },
  {
    icon: <Cpu className="w-12 h-12 mb-4 text-primary" />,
    title: "AI Integration",
    description: "Implementing artificial intelligence solutions to automate and enhance business processes.",
    features: ["Machine Learning", "Chatbots", "Data Analytics"],
  },
  {
    icon: <Code className="w-12 h-12 mb-4 text-primary" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs and requirements.",
    features: ["Custom Solutions", "Scalable Architecture", "Ongoing Support"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground sm:text-5xl">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive IT solutions to help your business thrive in the digital age
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
              <motion.div
                className="bg-background p-8 rounded-2xl shadow-lg border border-border h-full group hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
