"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: t("testimonials.client1.name"),
      position: t("testimonials.client1.position"),
      text: t("testimonials.client1.text"),
    },
    {
      name: t("testimonials.client2.name"),
      position: t("testimonials.client2.position"),
      text: t("testimonials.client2.text"),
    },
    {
      name: t("testimonials.client3.name"),
      position: t("testimonials.client3.position"),
      text: t("testimonials.client3.text"),
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("testimonials.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl relative"
            >
              <Quote className="w-10 h-10 text-green-500 opacity-30 absolute top-4 right-4" />
              <p className="text-gray-300 mb-6 italic">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

