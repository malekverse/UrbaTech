"use client"
import { motion } from "framer-motion"
import { Users, Award, Clock, Target } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

const stats = [
  { icon: <Users className="h-8 w-8" />, value: "50+", label: "Happy Clients" },
  { icon: <Award className="h-8 w-8" />, value: "100+", label: "Projects Completed" },
  { icon: <Clock className="h-8 w-8" />, value: "5+", label: "Years Experience" },
  { icon: <Target className="h-8 w-8" />, value: "99%", label: "Success Rate" },
]

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground sm:text-5xl">About Us</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are passionate tech innovators dedicated to transforming businesses through cutting-edge solutions
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">We are Tech Innovators</h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                At URBA TECH, we combine cutting-edge technology with strategic thinking to deliver IT solutions that
                drive business growth. Our team of experienced developers, designers, and strategists work
                collaboratively to push the boundaries of what's possible in the digital realm.
              </p>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                With a focus on innovation and client-centric approach, we've helped numerous businesses transform their
                digital presence and streamline their operations through custom technology solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Innovation First
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Client-Focused
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Quality Driven
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"
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
              <div className="relative bg-background rounded-2xl p-8 shadow-xl border border-border">
                <h4 className="text-xl font-bold text-foreground mb-6">Our Mission</h4>
                <p className="text-muted-foreground mb-6">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and success
                  in the digital age.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-sm text-muted-foreground">Cutting-edge technology solutions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-sm text-muted-foreground">Exceptional client service</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-sm text-muted-foreground">Continuous innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Section */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
