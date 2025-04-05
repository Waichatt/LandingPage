"use client"
import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  const flagSrc = language === "es" ? "/argentina.svg" : "/eeuu.svg";
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="WaiChatt Logo"
              width={50}
              height={50}
              className="mr-3"
            />
            <span className="text-xl font-bold text-white">WaiChatt</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-green-400 transition-colors"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-green-400 transition-colors"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("plans")}
              className="text-white hover:text-green-400 transition-colors"
            >
              {t("nav.plans")}
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white hover:text-green-400 transition-colors"
            >
              {t("nav.testimonials")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-green-400 transition-colors"
            >
              {t("nav.contact")}
            </button>
            <div className="flex items-center justify-center gap-3">
              <Image src={flagSrc} width={45} height={45} alt="Bandera" />
              <Button

                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
              >
                {language === "es" ? "EN" : "ES"}

              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white py-2 hover:text-green-400 transition-colors"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white py-2 hover:text-green-400 transition-colors"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("plans")}
                className="text-white py-2 hover:text-green-400 transition-colors"
              >
                {t("nav.plans")}
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-white py-2 hover:text-green-400 transition-colors"
              >
                {t("nav.testimonials")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white py-2 hover:text-green-400 transition-colors"
              >
                {t("nav.contact")}
              </button>
              <div className="flex items-center justify-start gap-3">
              <Image src={flagSrc} width={45} height={45} alt="Bandera" />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white w-20"
                >
                  {language === "es" ? "EN" : "ES"}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

