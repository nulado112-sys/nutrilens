'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-luxury-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/bg4.jpg"
          alt="Sierra Distribution Company"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-luxury-black/40 to-luxury-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-display text-6xl font-bold leading-tight text-luxury-white md:text-8xl lg:text-9xl">
              Globally Connected
              <span className="block gold-text-gradient">Locally Invested</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto mt-8 max-w-2xl text-lg font-light text-luxury-gray md:text-xl lg:text-2xl"
          >
            Sierra Distribution Company - Your trusted partner for premium food and beverage distribution in West Africa
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-luxury-gold px-12 py-5 text-lg font-semibold text-luxury-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/50"
            >
              <span className="relative z-10">Explore Partnership</span>
              <div className="absolute inset-0 shimmer-effect animate-shimmer" />
            </a>

            <a
              href="#products"
              className="group rounded-full border-2 border-luxury-gold px-12 py-5 text-lg font-semibold text-luxury-gold transition-all duration-300 hover:bg-luxury-gold hover:text-luxury-black"
            >
              View Portfolio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-light uppercase tracking-widest text-luxury-gray">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-12 w-6 rounded-full border-2 border-luxury-gold/50 p-1"
          >
            <div className="h-2 w-2 rounded-full bg-luxury-gold" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
