"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

const points = [
  "Spezialisiert auf Privat- und Gewerbeobjekte",
  "Photovoltaik-Experten mit Komplett-Service",
  "Zertifizierte Elektroprüfungen nach VDE",
  "Persönliche Betreuung von A bis Z",
]

export function About() {
  return (
    <section id="ueber-uns" className="min-h-dvh flex flex-col justify-center py-16 sm:py-20 overflow-hidden snap-start">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="https://voltify5.de/wp-content/uploads/go-x/u/6630f8ee-01a7-4efa-b847-565a09954e6a/l531,t0,w1318,h1318/image.jpg"
                alt="Das Voltify5 Team. 5 Elektrotechnikermeister."
                width={640}
                height={640}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating stats */}
            {/* Top-left: Meister badge */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="absolute -top-4 left-4 sm:top-5 sm:left-5 rounded-2xl bg-brand text-white px-5 py-4 shadow-2xl shadow-brand/40 ring-1 ring-brand/30"
            >
              <div className="text-3xl font-bold font-mono leading-none">5</div>
              <div className="text-[11px] text-white/90 mt-1 font-medium">Meister</div>
            </motion.div>

            {/* Bottom-right: Jahre card */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
              className="absolute -bottom-4 right-4 sm:bottom-5 sm:right-5 rounded-2xl bg-navy/90 backdrop-blur-xl text-white px-6 py-5 shadow-2xl ring-1 ring-white/10"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold font-mono leading-none">50</span>
                <span className="text-brand text-xl font-bold">+</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider font-medium">
                Jahre Erfahrung
              </div>
            </motion.div>

            {/* Top-right: small accent badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55, ease }}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 rounded-xl bg-white/10 backdrop-blur-xl px-4 py-3 shadow-xl ring-1 ring-white/10"
            >
              <div className="text-2xl font-bold font-mono text-white leading-none">1.000<span className="text-brand">+</span></div>
              <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-medium">Projekte</div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-medium text-brand mb-4 uppercase tracking-wider">Über uns</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              5 Meister.
              <br />
              <span className="text-slate-400">Eine Mission.</span>
            </h2>

            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              2025 haben sich fünf Elektrotechnikermeister in Öhringen zu
              Voltify5 vereint. Seitdem steht unser Name für kompromisslose
              Qualität im gesamten Hohenlohekreis. Keine leeren Versprechen,
              sondern Ergebnisse.
            </p>

            {/* Checkpoints */}
            <ul className="mt-8 space-y-3">
              {points.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.07, ease }}
                  className="flex items-center gap-3"
                >
                  <div className="h-5 w-5 rounded-full bg-brand/15 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-brand" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-slate-300">{p}</span>
                </motion.li>
              ))}
            </ul>

            {/* Trust + CTA row */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-navy transition-colors hover:bg-brand-light hover:shadow-lg hover:shadow-brand/40"
              >
                Kontakt aufnehmen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {["bg-brand", "bg-brand", "bg-brand-dark", "bg-brand-dark"].map((bg, i) => (
                    <div
                      key={i}
                      className={`h-7 w-7 rounded-full ${bg} border-2 border-navy flex items-center justify-center text-[10px] font-bold text-white`}
                    >
                      {["TB", "SM", "MW", "FS"][i]}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-slate-500">
                  <strong className="text-white font-semibold">100+</strong> zufriedene Kunden
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
