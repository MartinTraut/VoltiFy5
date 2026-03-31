"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check, Users, Zap, CalendarCheck } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

const points = [
  "Spezialisiert auf Privat- und Gewerbeobjekte",
  "Photovoltaik-Experten mit Komplett-Service",
  "Zertifizierte Elektroprüfungen nach VDE",
  "Persönliche Betreuung von A bis Z",
]

export function About() {
  return (
    <section id="ueber-uns" className="min-h-dvh flex flex-col justify-center py-16 sm:py-20 overflow-hidden">
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
            {/* Bild */}
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="https://voltify5.de/wp-content/uploads/go-x/u/6630f8ee-01a7-4efa-b847-565a09954e6a/l531,t0,w1318,h1318/image.jpg"
                alt="Das Voltify5 Team. 5 Elektrotechnikermeister."
                width={640}
                height={640}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Oben links: 5 Meister */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="absolute -top-3 -left-2 sm:-top-6 sm:-left-6 z-10 rounded-xl sm:rounded-2xl bg-brand text-navy px-3 py-2.5 sm:px-5 sm:py-4 shadow-2xl shadow-brand/40 ring-1 ring-brand/50"
            >
              <div className="flex items-center gap-2.5">
                <Users className="h-4 w-4 text-navy/70" strokeWidth={2} />
                <span className="text-[10px] font-bold uppercase tracking-wider text-navy/60">Team</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono leading-none mt-1.5 sm:mt-2">5</div>
              <div className="text-[11px] font-bold text-navy/70 mt-0.5">Meister</div>
            </motion.div>

            {/* Oben rechts: 1.000+ Projekte */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
              className="absolute -top-3 -right-2 sm:-top-6 sm:-right-6 z-10 rounded-xl sm:rounded-2xl bg-navy/90 backdrop-blur-xl text-white px-3 py-2.5 sm:px-5 sm:py-4 shadow-2xl ring-1 ring-white/[0.1]"
            >
              <div className="flex items-center gap-2.5">
                <Zap className="h-4 w-4 text-brand" strokeWidth={2} />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Projekte</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono leading-none mt-1.5 sm:mt-2">
                1.000<span className="text-brand">+</span>
              </div>
              <div className="text-[11px] font-medium text-slate-400 mt-0.5">abgeschlossen</div>
            </motion.div>

            {/* Unten rechts: 50+ Jahre */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease }}
              className="absolute -bottom-3 -right-2 sm:-bottom-6 sm:-right-6 z-10 rounded-xl sm:rounded-2xl bg-navy/90 backdrop-blur-xl text-white px-3 py-2.5 sm:px-5 sm:py-4 shadow-2xl ring-1 ring-white/[0.1]"
            >
              <div className="flex items-center gap-2.5">
                <CalendarCheck className="h-4 w-4 text-brand" strokeWidth={2} />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Erfahrung</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono leading-none mt-1.5 sm:mt-2">
                50<span className="text-brand">+</span>
              </div>
              <div className="text-[11px] font-medium text-slate-400 mt-0.5">Jahre</div>
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
              <span className="text-brand">Eine Mission.</span>
            </h2>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
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
                  <div className="h-5 w-5 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
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
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-navy transition-all duration-300 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/40"
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
                <div className="text-xs text-slate-400">
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
