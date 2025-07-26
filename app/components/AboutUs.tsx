"use client"
import ScrollReveal from "./ScrollReveal"

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-black mb-8 text-center text-foreground">About Us</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">We are Tech Innovators</h3>
              <p className="text-muted-foreground mb-6">
                At URBA TECH, we combine cutting-edge technology with strategic thinking to deliver IT solutions that
                drive business growth. Our team of experienced developers, designers, and strategists work
                collaboratively to push the boundaries of what's possible in the digital realm.
              </p>
              <p className="text-muted-foreground">
                With a focus on innovation and client-centric approach, we've helped numerous businesses transform their
                digital presence and streamline their operations through custom technology solutions.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black dark:from-gray-200 dark:to-white rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-background rounded-lg transform -rotate-3 flex items-center justify-center border border-border">
                <p className="text-2xl font-bold text-foreground">Innovation in Action</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

