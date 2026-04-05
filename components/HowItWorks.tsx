'use client'

import { motion } from 'framer-motion'
import { Camera, Zap, Heart } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Snap a photo',
    description: 'Take a clear picture of your meal using your phone camera.',
    icon: Camera,
  },
  {
    number: 2,
    title: 'AI analyzes instantly',
    description: 'Our advanced AI identifies the food and calculates precise nutrition data.',
    icon: Zap,
  },
  {
    number: 3,
    title: 'Get dietitian insights',
    description: 'Receive personalized tips and health recommendations from certified nutrition experts.',
    icon: Heart,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-nutrilens-soft">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-nutrilens-text mb-4">
            How It Works
          </h2>
          <p className="text-nutrilens-muted max-w-2xl mx-auto">
            Get accurate nutrition information in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-nutrilens-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-nutrilens-text rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-nutrilens-text mb-2">
                {step.title}
              </h3>
              <p className="text-nutrilens-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}