"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Image
              src="/logo.png"
              alt="WaiChatt Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="text-xl font-bold text-white">WaiChatt</span>
          </div>

          <div className="text-gray-400 text-sm">
            &copy; {currentYear} WaiChatt. {t("footer.rights")}.
          </div>
        </div>
      </div>
    </footer>
  )
}

