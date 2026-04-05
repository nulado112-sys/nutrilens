'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Rodriguez',
    result: 'Lost 15 lbs in 3 months',
    quote: 'NutriLens helped me understand my eating habits. The personalized tips made all the difference!',
    rating: 5
  },
  {
    name: 'James Chen',
    result: 'Better blood sugar control',
    quote: 'As someone with diabetes, having accurate nutrition info at my fingertips has been life-changing.',
    rating: 5
  },
  {
    name: 'Sarah Williams',
    result: 'Gained healthy weight',
    quote: 'I was underweight and struggling to eat enough. NutriLens helped me make nutritious choices.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-nutrilens-text mb-4">
            Real Results from Real People
          </h2>
          <p className="text-nutrilens-muted max-w-2xl mx-auto">
            Join thousands of users who have transformed their relationship with food
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-nutrilens-soft rounded-2xl p-8"
            >
              <Quote className="h-8 w-8 text-nutrilens-accent mb-4" />
              <p className="text-nutrilens-text mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-nutrilens-text">{testimonial.name}</p>
                  <p className="text-sm text-nutrilens-accent font-medium">{testimonial.result}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-nutrilens-accent text-nutrilens-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <div className="text-center">
            <p className="font-display text-5xl font-bold text-nutrilens-accent">10,000+</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-nutrilens-muted">Meals Analyzed</p>
          </div>
          <div className="text-center">
            <p className="font-display text-5xl font-bold text-nutrilens-accent">95%</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-nutrilens-muted">Accuracy Rate</p>
          </div>
          <div className="text-center">
            <p className="font-display text-5xl font-bold text-nutrilens-accent">4.9★</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-nutrilens-muted">User Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
