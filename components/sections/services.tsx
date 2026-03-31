"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Plug, ShieldCheck, Lightbulb, Sun, Cpu, Wrench, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Elektroinstallation",
    subtitle: "Neubau & Sanierung",
    description: "Komplette Elektroinstallation für Wohn- und Gewerbeimmobilien. Normgerecht, zukunftssicher, dokumentiert.",
    icon: Plug,
    image: "https://voltify5.de/wp-content/uploads/go-x/u/3909915f-fe34-4cf0-85de-b91db2316ba8/l0,t0,w2000,h1500/image-768x576.jpg",
  },
  {
    title: "Photovoltaik",
    subtitle: "Energie vom Dach",
    description: "Planung, Montage und Inbetriebnahme Ihrer Solaranlage. Inklusive Speicherlösung und Anmeldung.",
    icon: Sun,
    image: "https://voltify5.de/wp-content/uploads/go-x/u/78aa7513-dc55-44c2-9fe4-50ea46b8fad6/l102,t61,w1691,h1268/image-768x576.jpg",
  },
  {
    title: "Smart Home",
    subtitle: "KNX-Steuerung",
    description: "Licht, Heizung, Jalousien und Sicherheit intelligent vernetzt. Komfort auf Knopfdruck.",
    icon: Cpu,
    image: "https://voltify5.de/wp-content/uploads/go-x/u/9b1d5456-3354-4b1a-9585-74b47d862c99/l0,t128,w1500,h1125/image-768x576.jpg",
  },
  {
    title: "E-Check & Prüfung",
    subtitle: "VDE-Norm",
    description: "Elektroprüfungen für Betriebe und Vermieter. Rechtssicher, dokumentiert, termingerecht.",
    icon: ShieldCheck,
    image: "https://voltify5.de/wp-content/uploads/go-x/u/65a33db3-260a-4d6e-8e25-117d2a3f84e7/l50,t268,w1597,h1198/image-768x576.jpg",
  },
  {
    title: "Lichtplanung",
    subtitle: "LED-Konzepte",
    description: "Individuelle Beleuchtung für Wohnräume, Büros und Gewerbe. Energieeffizient und stimmungsvoll.",
    icon: Lightbulb,
    image: "https://voltify5.de/wp-content/uploads/go-x/u/43b1e083-84f2-4346-b326-6eb230049088/l0,t57,w1500,h1125/image-768x576.jpg",
  },
  {
    title: "Wartung & Notdienst",
    subtitle: "Schnelle Hilfe",
    description: "Störungsbeseitigung, Reparatur und regelmäßige Wartung Ihrer elektrischen Anlagen.",
    icon: Wrench,
    image: "https://voltify5.de/wp-content/uploads/go-x/u/676d82dc-2cac-4eb8-a71d-62d1004d955e/l0,t69,w1381,h1036/image-768x576.jpg",
  },
]

export function Services() {
  return (
    <section id="leistungen" className="min-h-dvh flex flex-col justify-center py-16 sm:py-20 snap-start">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sm font-medium text-brand mb-4 uppercase tracking-wider">
            Leistungen
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Alles aus
            <br />
            <span className="text-slate-400">einer Hand.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed">
            Von der Elektroinstallation über Photovoltaik bis zum Smart Home.
            Ihr Meisterbetrieb für den gesamten Hohenlohekreis.
          </p>
        </motion.div>

        {/* 3x2 Grid - alle gleich groß */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-500 hover:border-brand/45 aspect-[4/3]"
              >
                {/* Full color background image */}
                <div className="absolute inset-0">
                  <Image
                    src={s.image}
                    alt={`${s.title} Voltify5 Öhringen`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />
                </div>

                {/* Content */}
                <div className="relative flex flex-col justify-between h-full p-6">
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand backdrop-blur-sm flex items-center justify-center shadow-lg shadow-brand/40">
                      <Icon className="h-5 w-5 text-navy" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-bold text-brand uppercase tracking-[0.15em] bg-navy/70 backdrop-blur-md rounded-full px-3 py-1.5 border border-brand/35">
                      {s.subtitle}
                    </span>
                  </div>

                  {/* Bottom text */}
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight drop-shadow-lg">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-white/85 leading-relaxed drop-shadow-md">
                      {s.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6"
        >
          <p className="text-sm text-slate-400">
            Nicht das Richtige dabei? Wir beraten Sie gerne persönlich.
          </p>
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-navy transition-all duration-300 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/40"
          >
            Kontakt aufnehmen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
