'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How accurate is the food scanner?',
    answer: 'Our AI achieves 95% accuracy on average for common foods. For best results, ensure good lighting and clear photos of individual food items.',
  },
  {
    question: 'Can I scan multiple foods in one photo?',
    answer: 'Yes! The scanner can analyze multiple food items in a single image. It will identify each item separately and provide combined nutrition data.',
  },
  {
    question: 'Is my data private and secure?',
    answer: 'Absolutely. We use end-to-end encryption and never store your food photos. All analysis happens in real-time and images are discarded immediately.',
  },
  {
    question: 'What if the scanner doesn\'t recognize my food?',
    answer: 'If accuracy is below 70%, you can manually enter nutrition data or contact our dietitians for help. We\'re constantly improving our food database.',
  },
  {
    question: 'Can I use this for restaurant meals?',
    answer: 'Yes! The scanner works great for restaurant food. Just take a clear photo of your plate before eating.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for all paid services. If you\'re not satisfied, we\'ll refund your payment.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-nutrilens-soft">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-nutrilens-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-nutrilens-muted">
            Everything you need to know about NutriLens
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-nutrilens-soft/50 transition-colors"
              >
                <span className="font-medium text-nutrilens-text pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-nutrilens-muted transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-4"
                >
                  <p className="text-nutrilens-muted">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}