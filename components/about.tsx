"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { MessageSquare, ShoppingCart, BarChart3 } from "lucide-react"

export default function About() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <MessageSquare className="w-12 h-12 text-green-500" />,
      title: t("about.feature1.title"),
      description: t("about.feature1.description"),
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-green-500" />,
      title: t("about.feature2.title"),
      description: t("about.feature2.description"),
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-500" />,
      title: t("about.feature3.title"),
      description: t("about.feature3.description"),
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.title")}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{t("about.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

