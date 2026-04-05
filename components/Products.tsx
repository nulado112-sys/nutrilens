'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    category: 'Ceres Juices',
    image: '/images/hero/cranberry.png',
    items: ['100% Pure Juice', 'Nectar Range', 'Sparkling Juice'],
  },
  {
    category: 'Savanna Cider',
    image: '/images/hero/savanna-bottle.png',
    items: ['Premium Cider', 'Dry Apple', 'Light'],
  },
  {
    category: 'Pasta Selection',
    image: '/images/products/spaghetti-ad.jpg',
    items: ['Spaghetti', 'Penne', 'Fusilli'],
  },
  {
    category: 'Couscous',
    image: '/images/products/couscous-ad.jpg',
    items: ['Traditional', 'Quick Cook', 'Premium Grade'],
  },
  {
    category: 'Premium Wines',
    image: '/images/backgrounds/bg3.jpg',
    items: ['Nederburg', 'Obikwa', '4th Street'],
  },
  {
    category: 'Specialty Drinks',
    image: '/images/products/beverage1.jpg',
    items: ['Wow Juices', 'Rendez-vous', 'Maltamax'],
  },
]

export default function Products() {
  return (
    <section id="products" className="relative bg-luxury-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-luxury-gray-dark">
            Our Portfolio
          </p>
          <h2 className="font-display text-5xl font-bold leading-tight text-luxury-black md:text-6xl lg:text-7xl">
            Curated
            <span className="mt-2 block gold-text-gradient">Excellence</span>
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-luxury-black"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.category}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="font-display text-3xl font-bold text-luxury-white">
                    {product.category}
                  </h3>

                  <div className="mt-4 h-px w-16 bg-luxury-gold transition-all duration-500 group-hover:w-32" />

                  <ul className="mt-6 space-y-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {product.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-luxury-gray">
                        <div className="h-1 w-1 rounded-full bg-luxury-gold" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-luxury-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-block rounded-full border-2 border-luxury-black px-12 py-5 text-lg font-semibold text-luxury-black transition-all duration-300 hover:bg-luxury-black hover:text-luxury-gold"
          >
            Request Full Catalog
          </a>
        </motion.div>
      </div>
    </section>
  )
}
