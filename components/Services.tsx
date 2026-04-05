'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const services = [
  {
    name: 'Free Scanner',
    price: 'Free',
    period: 'forever',
    features: [
      'Unlimited food scans',
      'Basic nutrition analysis',
      'Health score & tips',
      'Save to journal',
    ],
    popular: false,
  },
  {
    name: '1-on-1 Consultation',
    price: '$99',
    period: 'session',
    features: [
      'Everything in Free Scanner',
      '30-minute video call',
      'Personalized meal plan',
      'Email support for 1 week',
      'Custom recipe recommendations',
    ],
    popular: true,
  },
  {
    name: 'Custom Meal Plans',
    price: '$299',
    period: 'month',
    features: [
      'Everything in Consultation',
      'Weekly meal plans',
      'Grocery lists',
      'Progress tracking',
      'Monthly check-ins',
      'Priority support',
    ],
    popular: false,
  },
]

export default function Services() {
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
            Services & Pricing
          </h2>
          <p className="text-nutrilens-muted max-w-2xl mx-auto">
            Choose the plan that fits your nutrition journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                service.popular
                  ? 'bg-nutrilens-accent text-white shadow-xl scale-105'
                  : 'bg-nutrilens-soft text-nutrilens-text'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-nutrilens-text text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold mb-2">
                  {service.name}
                </h3>
                <div className="text-4xl font-bold mb-1">
                  {service.price}
                </div>
                <div className={`text-sm ${service.popular ? 'text-white/80' : 'text-nutrilens-muted'}`}>
                  per {service.period}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className={`h-5 w-5 ${service.popular ? 'text-white' : 'text-nutrilens-accent'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-full py-3 font-medium transition-colors ${
                  service.popular
                    ? 'bg-white text-nutrilens-accent hover:bg-white/90'
                    : 'bg-nutrilens-accent text-white hover:bg-nutrilens-accent/90'
                }`}
              >
                {service.price === 'Free' ? 'Get Started' : 'Book Now'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}