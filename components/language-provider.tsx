"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "es" | "en"

type Translations = {
  [key: string]: {
    es: string
    en: string
  }
}

// Translations dictionary
const translations: Translations = {
  // Navbar
  "nav.home": {
    es: "Inicio",
    en: "Home",
  },
  "nav.about": {
    es: "¿Qué es WaiChatt?",
    en: "What is WaiChatt?",
  },
  "nav.plans": {
    es: "Planes",
    en: "Plans",
  },
  "nav.testimonials": {
    es: "Testimonios",
    en: "Testimonials",
  },
  "nav.contact": {
    es: "Contacto",
    en: "Contact",
  },

  // Hero
  "hero.title": {
    es: "Revoluciona tu comunicación con",
    en: "Revolutionize your communication with",
  },
  "hero.subtitle": {
    es: "Agentes de IA integrados con WhatsApp",
    en: "AI agents integrated with WhatsApp",
  },
  "hero.cta": {
    es: "Comenzar ahora",
    en: "Get started",
  },

  // About
  "about.title": {
    es: "¿Qué es WaiChatt?",
    en: "What is WaiChatt?",
  },
  "about.description": {
    es: "WaiChatt es una plataforma innovadora que integra agentes de inteligencia artificial con WhatsApp, permitiéndote automatizar conversaciones, responder consultas y vender productos de manera eficiente. Nuestros agentes aprenden de cada interacción para ofrecer respuestas cada vez más precisas y personalizadas.",
    en: "WaiChatt is an innovative platform that integrates artificial intelligence agents with WhatsApp, allowing you to automate conversations, answer queries, and sell products efficiently. Our agents learn from each interaction to provide increasingly accurate and personalized responses.",
  },
  "about.feature1.title": {
    es: "Automatización Inteligente",
    en: "Intelligent Automation",
  },
  "about.feature1.description": {
    es: "Automatiza respuestas a preguntas frecuentes y libera tiempo para tareas más importantes.",
    en: "Automate responses to frequently asked questions and free up time for more important tasks.",
  },
  "about.feature2.title": {
    es: "Ventas 24/7",
    en: "24/7 Sales",
  },
  "about.feature2.description": {
    es: "Vende tus productos y servicios a cualquier hora del día sin intervención humana.",
    en: "Sell your products and services at any time of day without human intervention.",
  },
  "about.feature3.title": {
    es: "Análisis Detallado",
    en: "Detailed Analytics",
  },
  "about.feature3.description": {
    es: "Obtén insights valiosos sobre las conversaciones y comportamiento de tus clientes.",
    en: "Gain valuable insights into your customers' conversations and behavior.",
  },

  // Plans
  "plans.title": {
    es: "Nuestros Planes",
    en: "Our Plans",
  },
  "plans.subtitle": {
    es: "Encuentra el plan perfecto para tu negocio",
    en: "Find the perfect plan for your business",
  },
  "plans.basic.title": {
    es: "Básico",
    en: "Basic",
  },
  "plans.basic.price": {
    es: "$60",
    en: "$60",
  },
  "plans.basic.period": {
    es: "/mes",
    en: "/month",
  },
  "plans.basic.feature1": {
    es: "1000 mensajes",
    en: "1000 messages",
  },
  "plans.basic.feature2": {
    es: "Respuestas automáticas",
    en: "Automatic responses",
  },
  "plans.basic.feature3": {
    es: "Soporte por email",
    en: "Email support",
  },
  "plans.basic.limitation": {
    es: "Sin venta de productos",
    en: "No product sales",
  },
  "plans.basic.cta": {
    es: "Elegir plan",
    en: "Choose plan",
  },

  "plans.pro.title": {
    es: "Pro",
    en: "Pro",
  },
  "plans.pro.price": {
    es: "$180",
    en: "$180",
  },
  "plans.pro.period": {
    es: "/mes",
    en: "/month",
  },
  "plans.pro.feature1": {
    es: "5000 mensajes",
    en: "5000 messages",
  },
  "plans.pro.feature2": {
    es: "Venta de productos",
    en: "Product sales",
  },
  "plans.pro.feature3": {
    es: "Soporte prioritario",
    en: "Priority support",
  },
  "plans.pro.feature4": {
    es: "Análisis básico",
    en: "Basic analytics",
  },
  "plans.pro.cta": {
    es: "Elegir plan",
    en: "Choose plan",
  },

  "plans.business.title": {
    es: "Empresarial",
    en: "Business",
  },
  "plans.business.price": {
    es: "$350",
    en: "$350",
  },
  "plans.business.period": {
    es: "/mes",
    en: "/month",
  },
  "plans.business.feature1": {
    es: "15000 mensajes",
    en: "15000 messages",
  },
  "plans.business.feature2": {
    es: "Venta de productos",
    en: "Product sales",
  },
  "plans.business.feature3": {
    es: "Soporte 24/7",
    en: "24/7 support",
  },
  "plans.business.feature4": {
    es: "Análisis avanzado",
    en: "Advanced analytics",
  },
  "plans.business.feature5": {
    es: "Múltiples agentes",
    en: "Multiple agents",
  },
  "plans.business.cta": {
    es: "Elegir plan",
    en: "Choose plan",
  },

  "plans.custom.title": {
    es: "A Medida",
    en: "Custom",
  },
  "plans.custom.price": {
    es: "Contactar",
    en: "Contact us",
  },
  "plans.custom.feature1": {
    es: "Mensajes ilimitados",
    en: "Unlimited messages",
  },
  "plans.custom.feature2": {
    es: "Venta de productos",
    en: "Product sales",
  },
  "plans.custom.feature3": {
    es: "Soporte dedicado",
    en: "Dedicated support",
  },
  "plans.custom.feature4": {
    es: "Integración personalizada",
    en: "Custom integration",
  },
  "plans.custom.feature5": {
    es: "Entrenamiento a medida",
    en: "Custom training",
  },
  "plans.custom.cta": {
    es: "Contactar",
    en: "Contact us",
  },

  // Testimonials
  "testimonials.title": {
    es: "Lo que dicen nuestros clientes",
    en: "What our customers say",
  },
  "testimonials.client1.name": {
    es: "María García",
    en: "Maria Garcia",
  },
  "testimonials.client1.position": {
    es: "Dueña de Tienda Online",
    en: "Online Store Owner",
  },
  "testimonials.client1.text": {
    es: "WaiChatt ha transformado completamente mi negocio. Ahora puedo atender a mis clientes 24/7 y las ventas han aumentado un 40% desde que implementamos el sistema.",
    en: "WaiChatt has completely transformed my business. Now I can serve my customers 24/7 and sales have increased by 40% since we implemented the system.",
  },
  "testimonials.client2.name": {
    es: "Carlos Rodríguez",
    en: "Carlos Rodriguez",
  },
  "testimonials.client2.position": {
    es: "Gerente de Marketing",
    en: "Marketing Manager",
  },
  "testimonials.client2.text": {
    es: "La capacidad de nuestro agente de WaiChatt para responder preguntas complejas sobre nuestros productos es impresionante. Nuestros clientes están encantados con la rapidez y precisión del servicio.",
    en: "Our WaiChatt agent's ability to answer complex questions about our products is impressive. Our customers are delighted with the speed and accuracy of the service.",
  },
  "testimonials.client3.name": {
    es: "Laura Martínez",
    en: "Laura Martinez",
  },
  "testimonials.client3.position": {
    es: "Consultora de Negocios",
    en: "Business Consultant",
  },
  "testimonials.client3.text": {
    es: "Recomiendo WaiChatt a todos mis clientes. Es una herramienta indispensable para cualquier negocio que quiera mejorar su servicio al cliente y aumentar sus ventas sin incrementar sus costos operativos.",
    en: "I recommend WaiChatt to all my clients. It's an indispensable tool for any business looking to improve their customer service and increase sales without increasing their operational costs.",
  },

  // Contact
  "contact.title": {
    es: "Contacto",
    en: "Contact",
  },
  "contact.subtitle": {
    es: "Estamos aquí para ayudarte",
    en: "We're here to help",
  },
  "contact.form.name": {
    es: "Nombre",
    en: "Name",
  },
  "contact.form.email": {
    es: "Email",
    en: "Email",
  },
  "contact.form.message": {
    es: "Mensaje",
    en: "Message",
  },
  "contact.form.submit": {
    es: "Enviar mensaje",
    en: "Send message",
  },
  "contact.whatsapp": {
    es: "Contáctanos por WhatsApp",
    en: "Contact us via WhatsApp",
  },

  // Footer
  "footer.rights": {
    es: "Todos los derechos reservados",
    en: "All rights reserved",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

