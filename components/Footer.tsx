'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ['Scanner', 'How It Works', 'Pricing', 'FAQ'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Support: ['Contact', 'Help Center', 'Privacy', 'Terms'],
  }

  return (
    <footer className="relative overflow-hidden bg-nutrilens-text text-white">
      {/* Top Border */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-nutrilens-accent to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="font-display text-2xl font-bold text-white mb-4">
              NutriLens
            </div>
            <p className="text-nutrilens-muted mb-6 max-w-xs">
              Know exactly what you're eating with AI-powered food analysis.
            </p>
            <p className="text-sm text-nutrilens-muted">
              Made with 🌱 in Lebanon
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-display text-lg font-bold text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-nutrilens-muted hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-nutrilens-muted/20"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-nutrilens-muted">
              © {currentYear} NutriLens. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-nutrilens-muted">
              <a href="#" className="transition-colors duration-300 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors duration-300 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-nutrilens-accent/5 blur-3xl" />
    </footer>
  )
}
