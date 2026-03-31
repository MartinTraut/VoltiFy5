"use client"

import { motion } from "framer-motion"
import { Phone, ClipboardList, HardHat, ThumbsUp, ArrowRight } from "lucide-react"

const steps = [
  {
    title: "Erstberatung",
    desc: "Persönliches Gespräch, ehrliche Beratung und Besichtigung vor Ort. Kostenlos und unverbindlich.",
    icon: Phone,
    detail: "Innerhalb 48h",
    num: "01",
  },
  {
    title: "Planung & Angebot",
    desc: "Detailliertes Konzept mit klarer Kostenkalkulation. Keine versteckten Posten, keine Überraschungen.",
    icon: ClipboardList,
    detail: "Festpreisgarantie",
    num: "02",
  },
  {
    title: "Umsetzung",
    desc: "Unsere Meister arbeiten sauber, termingerecht und mit Respekt vor Ihrem Eigentum.",
    icon: HardHat,
    detail: "Termingerecht",
    num: "03",
  },
  {
    title: "Abnahme & Service",
    desc: "Gemeinsame Prüfung, Einweisung und Dokumentation. Auch danach für Sie da.",
    icon: ThumbsUp,
    detail: "Langzeit-Garantie",
    num: "04",
  },
]

export function Process() {
  return (
    <section id="prozess" className="flex flex-col justify-center py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sm font-medium text-brand mb-4 uppercase tracking-wider">So arbeiten wir</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Vier Schritte.
            <br />
            <span className="text-brand">Ein Ergebnis.</span>
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Transparent, strukturiert und persönlich. Von der ersten Idee bis zum fertigen Projekt.
          </p>
        </motion.div>

        {/* 4 Karten - alle leuchten beim Sichtbar-Werden */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative w-full text-left flex flex-col rounded-2xl overflow-hidden border border-brand/40 bg-navy-light"
              >
                {/* Brand-Leiste oben */}
                <div className="h-1 bg-brand" />

                {/* Karten-Inhalt */}
                <div className="flex-1 flex flex-col p-5 sm:p-6">
                  {/* Kopfzeile */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[28px] sm:text-[36px] font-black font-mono leading-none text-brand/30">
                      {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-brand text-navy">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Titel */}
                  <h3 className="text-[17px] font-bold leading-tight text-white">
                    {step.title}
                  </h3>

                  {/* Beschreibung */}
                  <p className="mt-2.5 text-[13px] leading-relaxed flex-1 text-slate-400">
                    {step.desc}
                  </p>

                  {/* Detail-Badge */}
                  <div className="mt-5 self-start inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-brand text-navy">
                    {step.detail}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-navy transition-all duration-300 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/40"
          >
            Jetzt Erstberatung anfragen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
