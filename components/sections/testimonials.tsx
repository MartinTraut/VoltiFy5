"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "motion/react"
import { Star } from "lucide-react"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns"

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [go, setGo] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setGo(true),
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!go) return
    let raf: number
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / 2000, 1)
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [go, end])

  return (
    <span ref={ref}>
      {count.toLocaleString("de-DE")}
      {suffix}
    </span>
  )
}

const testimonials = [
  {
    text: "Die komplette Elektroinstallation unseres Neubaus wurde von Voltify5 durchgeführt. Von der Beratung bis zur Abnahme lief alles reibungslos und termingerecht.",
    name: "Thomas Berger",
    role: "Hausbesitzer, Öhringen",
    initials: "TB",
    service: "Installation",
  },
  {
    text: "Unsere Photovoltaikanlage wurde perfekt geplant und installiert. Die Energiekosten sind deutlich gesunken. Kompetente Beratung von der ersten Minute.",
    name: "Sandra Müller",
    role: "Geschäftsführerin, Müller GmbH",
    initials: "SM",
    service: "Solar",
  },
  {
    text: "Für unsere Arztpraxis brauchten wir eine zuverlässige Elektroprüfung. Gründliche, diskrete Arbeit, ohne den Praxisbetrieb zu stören.",
    name: "Dr. Marcus Weber",
    role: "Praxisinhaber, Öhringen",
    initials: "MW",
    service: "E-Check",
  },
  {
    text: "Unser Zuhause ist dank Voltify5 komplett vernetzt. Licht, Heizung, Sicherheit, alles intelligent gesteuert. Hervorragende Umsetzung.",
    name: "Familie Schneider",
    role: "Smart Home Kunden, Künzelsau",
    initials: "FS",
    service: "Smart Home",
  },
  {
    text: "Die Beleuchtung in unserem Restaurant wurde von Voltify5 komplett neu konzipiert. Unsere Gäste sind begeistert vom Ambiente.",
    name: "Michael Braun",
    role: "Gastronom, Öhringen",
    initials: "MB",
    service: "Licht",
  },
  {
    text: "Nach einem Kurzschluss waren sie innerhalb einer Stunde da. Schnelle Fehleranalyse, saubere Reparatur. Genau so muss Handwerk sein.",
    name: "Petra Hoffmann",
    role: "Hausbesitzerin, Neuenstein",
    initials: "PH",
    service: "Notdienst",
  },
  {
    text: "Voltify5 hat unsere gesamte Büroetage elektrotechnisch modernisiert. Professionell, pünktlich, preislich fair. Gerne wieder!",
    name: "Jens Keller",
    role: "Facility Manager, Hohenlohe",
    initials: "JK",
    service: "Gewerbe",
  },
  {
    text: "Die Solaranlage auf unserem Firmendach amortisiert sich schneller als prognostiziert. Erstklassige Planung und Installation.",
    name: "Andrea Wagner",
    role: "Unternehmerin, Künzelsau",
    initials: "AW",
    service: "Solar",
  },
  {
    text: "Endlich ein Elektriker, der zuhört, mitdenkt und sauber arbeitet. Die Zusammenarbeit war von Anfang bis Ende vorbildlich.",
    name: "Klaus Richter",
    role: "Architekt, Schwäbisch Hall",
    initials: "KR",
    service: "Installation",
  },
]

const col1 = testimonials.slice(0, 3)
const col2 = testimonials.slice(3, 6)
const col3 = testimonials.slice(6, 9)

export function Testimonials() {
  return (
    <section id="referenzen" className="flex flex-col justify-center py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sm font-medium text-brand mb-4 uppercase tracking-wider">Referenzen</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Was unsere
            <br />
            <span className="text-brand">Kunden sagen.</span>
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Vertrauen entsteht durch Ergebnisse. Über 100 zufriedene Kunden
            aus Öhringen und dem Hohenlohekreis sprechen für sich.
          </p>
        </motion.div>

        {/* Stats-Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/[0.08] bg-navy-light overflow-hidden mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {/* Google Bewertung - Highlight */}
            <div className="relative p-5 sm:p-6 md:p-8 bg-brand text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-navy font-mono leading-none tracking-tight">
                  5.0
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3 w-3 md:h-4 md:w-4 fill-navy text-navy" />
                  ))}
                </div>
              </div>
              <div className="text-[10px] md:text-xs text-navy/60 mt-1.5 uppercase tracking-wider font-bold">
                Google Bewertung
              </div>
            </div>

            {/* 100% Weiterempfehlung */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative p-5 sm:p-6 md:p-8 border-l border-white/[0.06] text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-mono leading-none tracking-tight">
                <Counter end={100} suffix="%" />
              </div>
              <div className="text-[10px] md:text-xs text-slate-400 mt-1.5 uppercase tracking-wider font-semibold">
                Weiterempfehlung
              </div>
            </motion.div>

            {/* 100+ Kunden */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative p-5 sm:p-6 md:p-8 border-l border-t md:border-t-0 border-white/[0.06] text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-mono leading-none tracking-tight">
                <Counter end={100} suffix="+" />
              </div>
              <div className="text-[10px] md:text-xs text-slate-400 mt-1.5 uppercase tracking-wider font-semibold">
                Kunden
              </div>
            </motion.div>

            {/* 1.000+ Projekte */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative p-5 sm:p-6 md:p-8 border-l border-t md:border-t-0 border-white/[0.06] text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-mono leading-none tracking-tight">
                <Counter end={1000} suffix="+" />
              </div>
              <div className="text-[10px] md:text-xs text-slate-400 mt-1.5 uppercase tracking-wider font-semibold">
                Projekte
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scrolling columns */}
        <div
          className="flex justify-center gap-4 max-h-[400px] sm:max-h-[520px] overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <TestimonialsColumn testimonials={col1} duration={22} />
          <TestimonialsColumn testimonials={col2} duration={28} className="hidden md:block" />
          <TestimonialsColumn testimonials={col3} duration={20} className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
