'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="relative bg-nutrilens-soft py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2936"
                alt="Nutritionist analyzing food"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nutrilens-text/20 to-transparent" />
            </div>

            {/* Floating Accent */}
            <div className="absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-nutrilens-accent/10 blur-3xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-nutrilens-accent">
              About NutriLens
            </p>

            <h2 className="font-display text-4xl font-bold leading-tight text-nutrilens-text md:text-5xl lg:text-6xl">
              Your Personal
              <span className="mt-2 block text-nutrilens-accent">Nutrition Guide</span>
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-nutrilens-muted">
              <p>
                Hi, I'm Sarah Chen, a registered dietitian with over 8 years of experience helping people build healthier relationships with food. I created NutriLens because I believe everyone deserves access to accurate nutrition information without the complexity.
              </p>

              <p>
                Our AI-powered scanner makes it easy to understand what's in your meals, while our personalized recommendations help you make better food choices. Whether you're managing a health condition, trying to lose weight, or just want to eat more mindfully, we're here to support your journey.
              </p>

              <p>
                Every analysis includes expert tips from certified nutrition professionals, ensuring you get reliable, science-based guidance you can trust.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="h-px flex-1 bg-gradient-to-r from-nutrilens-accent to-transparent" />
              <p className="font-display text-2xl font-bold text-nutrilens-accent">Last updated: April 5, 2026</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-nutrilens-accent/5 blur-3xl" />
    </section>
  )
}
