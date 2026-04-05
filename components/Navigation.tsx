'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChefHat } from 'lucide-react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Analyzer', href: '#analyzer' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-700 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <div className="relative">
              <span className="font-display text-2xl font-bold text-nutrilens-text">NutriLens</span>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute -top-2 -right-6"
              >
                <ChefHat className="h-4 w-4 text-nutrilens-accent" />
              </motion.div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-nutrilens-text hover:text-nutrilens-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-nutrilens-accent px-6 py-2 text-white hover:bg-nutrilens-accent/90 transition-colors">
              Book a Session
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`block h-0.5 w-6 bg-nutrilens-text transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
              <span className={`block h-0.5 w-6 bg-nutrilens-text transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-6 bg-nutrilens-text transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-nutrilens-soft py-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-6 py-2 text-nutrilens-text hover:text-nutrilens-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 pt-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full rounded-full bg-nutrilens-accent px-6 py-2 text-white hover:bg-nutrilens-accent/90 transition-colors"
              >
                Book a Session
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
