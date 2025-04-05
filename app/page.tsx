import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Plans from "@/components/plans"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

