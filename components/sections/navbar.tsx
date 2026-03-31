"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Logo } from "@/components/logo"

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#prozess", label: "Ablauf" },
  { href: "#projekte", label: "Projekte" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-[72px] items-center justify-between">
          <a href="#" className="shrink-0">
            <Logo light />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.84rem] font-medium text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+4979419596362"
              className="text-[0.84rem] font-medium text-slate-400 hover:text-white transition-colors duration-200"
            >
              07941 / 95 96 362
            </a>
            <a
              href="#kontakt"
              className="rounded-full bg-brand px-5 py-2 text-[0.84rem] font-semibold text-white transition-colors duration-200 hover:bg-brand"
            >
              Kontakt
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-[60] lg:hidden p-2 -mr-2"
            aria-label="Menü"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-px w-5 rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "translate-y-[7.5px] rotate-45 bg-white" : "bg-white"
              }`} />
              <span className={`block h-px w-5 rounded-full transition-all duration-200 ${
                mobileOpen ? "opacity-0" : "bg-white"
              }`} />
              <span className={`block h-px w-5 rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "-translate-y-[7.5px] -rotate-45 bg-white" : "bg-white"
              }`} />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-navy-light border-l border-white/[0.06] lg:hidden"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                <div className="flex-1 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-3 text-[0.95rem] font-medium text-slate-300 hover:text-brand transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="pt-6 border-t border-white/[0.06] space-y-3">
                  <a href="tel:+4979419596362" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-500">
                    <Phone className="h-4 w-4" />
                    07941 / 95 96 362
                  </a>
                  <a
                    href="#kontakt"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white"
                  >
                    Kontakt
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
