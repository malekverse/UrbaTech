"use client"
import Image from "next/image"
import ScrollReveal from "./ScrollReveal"

const testimonials = [
  {
    quote:
      "URBA TECH transformed our business with their custom web solution. Their technical expertise and attention to detail exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CTO, TechCorp",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with URBA TECH was a game-changer for our startup. Their mobile app development skills significantly improved our user engagement.",
    author: "Michael Chen",
    position: "Founder, InnovateTech",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The team at URBA TECH are true professionals. Their AR solution helped us showcase our products in an innovative way that boosted our sales.",
    author: "Emily Rodriguez",
    position: "Marketing Director, FutureBrands",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-black mb-16 text-center text-foreground">What Our Clients Say</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.author} delay={index * 0.2} direction="up">
              <div className="bg-secondary p-6 rounded-lg shadow-md border border-border h-full">
                <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

