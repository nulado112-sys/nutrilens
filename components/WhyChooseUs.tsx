'use client'

import { motion } from 'framer-motion'
import { Camera, Zap, Shield, Heart } from 'lucide-react'

const benefits = [
  {
    icon: <Camera className="h-12 w-12" />,
    title: 'Instant Analysis',
    description: 'Get detailed nutrition information in seconds with just a photo of your meal.',
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: 'AI-Powered Accuracy',
    description: 'Advanced machine learning ensures 95%+ accuracy for food recognition and calorie counting.',
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: 'Privacy First',
    description: 'Your food photos are analyzed instantly and never stored on our servers.',
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: 'Dietitian Approved',
    description: 'Every analysis includes personalized tips from certified nutrition experts.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-nutrilens-text mb-4">
            Why Choose NutriLens
          </h2>
          <p className="text-nutrilens-muted max-w-2xl mx-auto">
            Join thousands of users who have transformed their relationship with food
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-nutrilens-soft rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-nutrilens-accent">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-nutrilens-text mb-3">
                {benefit.title}
              </h3>
              <p className="text-nutrilens-muted">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

