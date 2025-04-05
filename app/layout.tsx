import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WaiChatt",
  description:
    "WaiChatt ofrece agentes de inteligencia artificial integrados con WhatsApp para mejorar la comunicación con tus clientes.",
  keywords: "WhatsApp, IA, inteligencia artificial, chatbot, agentes virtuales, automatización",
  generator: 'Next.js',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="">
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>

      </body>
    </html>
  )
}
