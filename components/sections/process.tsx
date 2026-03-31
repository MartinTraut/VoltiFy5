"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { Phone, ClipboardList, HardHat, ThumbsUp, ArrowRight, Check } from "lucide-react"

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
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)
  const [paused, setPaused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible || paused) return
    const id = setInterval(() => setActive((p) => (p + 1) % 4), 6000)
    return () => clearInterval(id)
  }, [visible, paused])

  const pick = useCallback((i: number) => {
    setActive(i)
    setPaused(true)
    setTimeout(() => setPaused(false), 10000)
  }, [])

  return (
    <section id="prozess" className="min-h-dvh flex flex-col justify-center py-16 sm:py-20">
      <div ref={ref} className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
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

        {/* 4 Karten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isActive = active === i
            const isPast = i < active

            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => pick(i)}
                className={`relative w-full text-left flex flex-col rounded-2xl overflow-hidden transition-[border-color,box-shadow] duration-500 ${
                  isActive
                    ? "border-2 border-brand/60 shadow-[0_0_30px_-10px_rgba(253,191,0,0.2)]"
                    : "border border-white/[0.08] hover:border-white/[0.15]"
                }`}
              >
                {/* Progress-Bar */}
                <div className="h-1 bg-navy-card">
                  {isActive && (
                    <motion.div
                      className="h-full bg-brand"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      key={`bar-${i}-${active}-${paused}`}
                      transition={{ duration: paused ? 10 : 6, ease: "linear" }}
                    />
                  )}
                  {isPast && <div className="h-full w-full bg-brand" />}
                </div>

                {/* Karten-Inhalt */}
                <div className={`flex-1 flex flex-col p-6 transition-colors duration-500 ${
                  isActive ? "bg-navy-light" : "bg-navy-card/50"
                }`}>
                  {/* Kopfzeile: Nummer + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[28px] sm:text-[40px] font-black font-mono leading-none transition-colors duration-500 ${
                      isActive ? "text-brand" : isPast ? "text-brand/30" : "text-white/[0.06]"
                    }`}>
                      {step.num}
                    </span>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-[background-color,color,box-shadow] duration-500 ${
                      isActive
                        ? "bg-brand text-navy shadow-lg shadow-brand/40"
                        : isPast
                          ? "bg-brand/20 text-brand"
                          : "bg-white/[0.05] text-slate-500"
                    }`}>
                      {isPast ? (
                        <Check className="h-5 w-5" strokeWidth={2.5} />
                      ) : (
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      )}
                    </div>
                  </div>

                  {/* Titel */}
                  <h3 className={`text-[17px] font-bold leading-tight transition-colors duration-500 ${
                    isActive ? "text-white" : "text-slate-200"
                  }`}>
                    {step.title}
                  </h3>

                  {/* Beschreibung */}
                  <p className={`mt-2.5 text-[13px] leading-relaxed flex-1 transition-colors duration-500 ${
                    isActive ? "text-slate-300" : "text-slate-500"
                  }`}>
                    {step.desc}
                  </p>

                  {/* Detail-Badge */}
                  <div className={`mt-5 self-start inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-[background-color,color,border-color] duration-500 ${
                    isActive
                      ? "bg-brand text-navy"
                      : isPast
                        ? "bg-brand/15 text-brand border border-brand/30"
                        : "bg-white/[0.04] text-slate-500 border border-white/[0.06]"
                  }`}>
                    {step.detail}
                  </div>
                </div>
              </motion.button>
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
            className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-8 py-4 text-base font-bold text-navy transition-all duration-300 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/40"
          >
            Jetzt Erstberatung anfragen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
