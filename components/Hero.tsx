'use client'

import { motion } from 'framer-motion'
import { Camera, Play, X } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false)

  const scrollToAnalyzer = () => {
    document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' })
  }

  const openDemo = () => {
    setShowDemo(true)
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-nutrilens-bg px-6 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Know exactly what
              <span className="block text-nutrilens-accent">you're eating</span>
            </h1>
            <p className="text-xl text-nutrilens-muted mb-8 max-w-lg mx-auto lg:mx-0">
              Snap a photo of any meal. Get instant nutrition insights from a certified dietitian's AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToAnalyzer}
                className="flex items-center justify-center gap-2 rounded-full bg-nutrilens-accent px-8 py-4 text-white hover:bg-nutrilens-accent/90 transition-colors"
              >
                <Camera className="h-5 w-5" />
                Try the Scanner
              </button>
              <button
                onClick={openDemo}
                className="flex items-center justify-center gap-2 rounded-full border border-nutrilens-accent px-8 py-4 text-nutrilens-accent hover:bg-nutrilens-accent hover:text-white transition-colors"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-80 h-[600px] bg-black rounded-[3rem] p-4 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-6 bg-gray-100 flex items-center justify-between px-4">
                    <span className="text-xs text-gray-600">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-6 h-full flex flex-col">
                    <h2 className="font-display text-2xl font-bold text-nutrilens-text mb-4">
                      NutriLens
                    </h2>

                    {/* Food Image Placeholder */}
                    <div className="flex-1 bg-nutrilens-soft rounded-2xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="h-12 w-12 text-nutrilens-accent mx-auto mb-2" />
                        <p className="text-nutrilens-muted text-sm">Tap to scan food</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-nutrilens-muted">Chocolate Bar</span>
                        <span className="font-bold text-nutrilens-text">95% confidence</span>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-nutrilens-accent mb-2">245</div>
                        <div className="text-nutrilens-muted text-sm">calories</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Protein</span>
                          <span>3g</span>
                        </div>
                        <div className="w-full bg-nutrilens-soft rounded-full h-2">
                          <div className="bg-nutrilens-accent h-2 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-nutrilens-soft rounded-full flex items-center justify-center">
                <span className="text-2xl">🍫</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-nutrilens-accent rounded-full flex items-center justify-center">
                <span className="text-white text-lg">✓</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Demo Modal */}
    {showDemo && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-white rounded-2xl p-8 max-w-2xl w-full mx-4"
        >
          <button
            onClick={() => setShowDemo(false)}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center">
            <h3 className="font-display text-2xl font-bold text-nutrilens-text mb-4">
              How NutriLens Works
            </h3>
            <div className="aspect-video bg-nutrilens-soft rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <Play className="h-16 w-16 text-nutrilens-accent mx-auto mb-4" />
                <p className="text-nutrilens-muted">Demo video coming soon!</p>
                <p className="text-sm text-nutrilens-muted mt-2">
                  For now, try the scanner above to see it in action.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setShowDemo(false)
                scrollToAnalyzer()
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-nutrilens-accent px-6 py-3 text-white hover:bg-nutrilens-accent/90 transition-colors"
            >
              <Camera className="h-5 w-5" />
              Try It Now
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </>
  )
}
