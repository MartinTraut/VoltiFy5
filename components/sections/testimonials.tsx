"use client"

import { motion } from "motion/react"
import { Star, Quote } from "lucide-react"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns"

const testimonials = [
  {
    text: "Die komplette Elektroinstallation unseres Neubaus wurde von Voltify5 durchgeführt. Von der Beratung bis zur Abnahme lief alles reibungslos und termingerecht. Absolute Profis!",
    name: "Thomas Berger",
    role: "Hausbesitzer, Öhringen",
    initials: "TB",
    service: "Elektroinstallation",
  },
  {
    text: "Unsere Photovoltaikanlage wurde perfekt geplant und installiert. Die Energiekosten sind deutlich gesunken. Kompetente Beratung von der ersten Minute.",
    name: "Sandra Müller",
    role: "Geschäftsführerin, Müller GmbH",
    initials: "SM",
    service: "Photovoltaik",
  },
  {
    text: "Für unsere Arztpraxis brauchten wir eine zuverlässige Elektroprüfung. Gründliche, diskrete Arbeit, ohne den Praxisbetrieb zu stören. Absolut empfehlenswert!",
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
    text: "Die Beleuchtung in unserem Restaurant wurde von Voltify5 komplett neu konzipiert. Unsere Gäste sind begeistert. Tolle Beratung, tolles Ergebnis.",
    name: "Michael Braun",
    role: "Gastronom, Öhringen",
    initials: "MB",
    service: "Lichtplanung",
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
    text: "Die Solaranlage auf unserem Firmendach amortisiert sich schneller als prognostiziert. Erstklassige Planung und Installation. Danke Voltify5!",
    name: "Andrea Wagner",
    role: "Unternehmerin, Künzelsau",
    initials: "AW",
    service: "Solar",
  },
  {
    text: "Endlich ein Elektriker, der zuhört, mitdenkt und sauber arbeitet. Die Zusammenarbeit mit Voltify5 war von Anfang bis Ende vorbildlich.",
    name: "Klaus Richter",
    role: "Architekt, Schwäbisch Hall",
    initials: "KR",
    service: "Elektroinstallation",
  },
]

const col1 = testimonials.slice(0, 3)
const col2 = testimonials.slice(3, 6)
const col3 = testimonials.slice(6, 9)

export function Testimonials() {
  return (
    <section id="referenzen" className="min-h-dvh flex flex-col justify-center py-16 sm:py-20 snap-start">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <p className="text-sm font-medium text-brand mb-4 uppercase tracking-wider">Referenzen</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Was unsere
              <br />
              <span className="text-slate-400">Kunden sagen.</span>
            </h2>
            <p className="mt-5 text-slate-400 leading-relaxed max-w-md">
              Vertrauen entsteht durch Ergebnisse. Über 100 zufriedene Kunden
              aus Öhringen und dem Hohenlohekreis sprechen für sich.
            </p>
          </motion.div>

          {/* Rating highlight card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex items-end lg:justify-end"
          >
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8">
              <div className="flex items-center gap-6">
                {/* Big score */}
                <div className="relative">
                  <div className="text-7xl font-black text-white font-mono leading-none">5.0</div>
                  <div className="absolute -top-2 -right-3">
                    <Quote className="h-5 w-5 text-brand fill-brand" />
                  </div>
                </div>

                <div className="h-16 w-px bg-white/10" />

                <div className="space-y-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-brand text-brand" />
                    ))}
                  </div>
                  <div className="text-xs text-slate-500">Google Bewertungen</div>
                  <div className="flex gap-4">
                    <div>
                      <span className="text-xl font-bold text-white font-mono">100<span className="text-brand">%</span></span>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">Empfehlung</div>
                    </div>
                    <div>
                      <span className="text-xl font-bold text-white font-mono">100<span className="text-brand">+</span></span>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">Kunden</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scrolling columns */}
        <div
          className="flex justify-center gap-4 max-h-[560px] overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <TestimonialsColumn testimonials={col1} duration={20} />
          <TestimonialsColumn testimonials={col2} duration={25} className="hidden md:block" />
          <TestimonialsColumn testimonials={col3} duration={18} className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
