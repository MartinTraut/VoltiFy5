"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Zap, Check } from "lucide-react"

export function CTASection() {
  return (
    <section className="min-h-[80vh] sm:min-h-dvh flex flex-col justify-center relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand text-navy px-5 py-2.5 mb-8"
          >
            <Zap className="h-4 w-4 fill-navy" strokeWidth={0} />
            <span className="text-sm font-bold">Bereit loszulegen?</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
          >
            Ihr nächstes Projekt
            <br />
            <span className="text-brand">beginnt hier.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-base sm:text-lg text-slate-200 max-w-lg mx-auto leading-relaxed"
          >
            Kostenlose Erstberatung. Transparente Planung.
            Professionelle Umsetzung. Alles aus einer Hand.
          </motion.p>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {["Kostenlose Beratung", "Festpreisgarantie", "Antwort in 24h"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-white font-medium">
                <span className="h-5 w-5 rounded-full bg-brand/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-brand" strokeWidth={3} />
                </span>
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <a
              href="#kontakt"
              className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-7 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-navy transition-all duration-300 hover:bg-brand-light hover:shadow-[0_0_40px_-8px_rgba(253,191,0,0.5)]"
            >
              <span className="absolute inset-0 rounded-full bg-brand-light opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
              <span className="relative">Jetzt Beratung anfragen</span>
              <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+4979419596362"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/20 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:border-brand/50 hover:text-brand"
            >
              <Phone className="h-5 w-5" />
              07941 / 95 96 362
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
