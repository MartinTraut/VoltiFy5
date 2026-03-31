import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { Process } from "@/components/sections/process"
import { Gallery } from "@/components/sections/gallery"
import { Testimonials } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { GlobalBackground } from "@/components/global-background"

export default function Page() {
  return (
    <>
      <GlobalBackground />
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Gallery />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
