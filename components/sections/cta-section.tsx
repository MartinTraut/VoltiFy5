"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section className="min-h-dvh flex flex-col justify-center snap-start relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand/35 bg-brand/15 px-4 py-2 mb-8"
          >
            <Zap className="h-4 w-4 text-brand fill-brand" strokeWidth={0} />
            <span className="text-sm font-medium text-brand">Bereit loszulegen?</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
          >
            Lassen Sie uns
            <br />
            <span className="text-brand">gemeinsam starten.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg text-slate-400 max-w-lg mx-auto leading-relaxed"
          >
            Kostenlose Erstberatung. Transparente Planung.
            Professionelle Umsetzung. Alles aus einer Hand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-8 py-4 text-base font-bold text-navy transition-all duration-200 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/35"
            >
              Jetzt Beratung anfragen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+4979419596362"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/10 px-8 py-4 text-base font-medium text-slate-300 transition-all duration-200 hover:border-white/25 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              07941 / 95 96 362
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-600"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Kostenlos
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Unverbindlich
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Innerhalb 24h
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
