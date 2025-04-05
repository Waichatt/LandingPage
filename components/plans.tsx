"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export default function Plans() {
  const { t } = useLanguage()

  const plans = [
    {
      title: t("plans.basic.title"),
      price: t("plans.basic.price"),
      period: t("plans.basic.period"),
      features: [t("plans.basic.feature1"), t("plans.basic.feature2"), t("plans.basic.feature3")],
      limitations: [t("plans.basic.limitation")],
      cta: t("plans.basic.cta"),
      popular: false,
    },
    {
      title: t("plans.pro.title"),
      price: t("plans.pro.price"),
      period: t("plans.pro.period"),
      features: [t("plans.pro.feature1"), t("plans.pro.feature2"), t("plans.pro.feature3"), t("plans.pro.feature4")],
      limitations: [],
      cta: t("plans.pro.cta"),
      popular: true,
    },
    {
      title: t("plans.business.title"),
      price: t("plans.business.price"),
      period: t("plans.business.period"),
      features: [
        t("plans.business.feature1"),
        t("plans.business.feature2"),
        t("plans.business.feature3"),
        t("plans.business.feature4"),
        t("plans.business.feature5"),
      ],
      limitations: [],
      cta: t("plans.business.cta"),
      popular: false,
    },
    {
      title: t("plans.custom.title"),
      price: t("plans.custom.price"),
      period: "",
      features: [
        t("plans.custom.feature1"),
        t("plans.custom.feature2"),
        t("plans.custom.feature3"),
        t("plans.custom.feature4"),
        t("plans.custom.feature5"),
      ],
      limitations: [],
      cta: t("plans.custom.cta"),
      popular: false,
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="plans" className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("plans.title")}</h2>
          <p className="text-lg text-gray-300">{t("plans.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gray-800 rounded-xl overflow-hidden ${
                plan.popular ? "border-2 border-green-500 relative" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-semibold">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <X className="w-5 h-5 text-red-500 mr-2" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.popular ? "bg-green-600 hover:bg-green-700" : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

