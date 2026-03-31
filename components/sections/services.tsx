"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Plug, ShieldCheck, Lightbulb, Sun, Cpu, Wrench, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Elektroinstallation",
    subtitle: "Neubau & Sanierung",
    description: "Wohn- und Gewerbeimmobilien. Normgerecht, zukunftssicher, dokumentiert.",
    icon: Plug,
    image: "https://voltify5.de/wp-content/uploads/go-x/u/3909915f-fe34-4cf0-85de-b91db2316ba8/l0,t0,w2000,h1500/image-768x576.jpg",
  },
  {
    title: "Photovoltaik",
    subtitle: "Energie vom Dach",
    description: "Planung, Montage und Inbetriebnahme inkl. Speicher und Anmeldung.",
    icon: Sun,
    image: "https://voltify5.de/wp-content/uploads/go-x/u/78aa7513-dc55-44c2-9fe4-50ea46b8fad6/l102,t61,w1691,h1268/image-768x576.jpg",
  },
  {
    title: "Smart Home & KNX",
    subtitle: "Gebäudesteuerung",
    description: "Licht, Heizung, Jalousien und Sicherheit intelligent vernetzt.",
    icon: Cpu,
    image: "https://voltify5.de/wp-content/uploads/go-x/u/9b1d5456-3354-4b1a-9585-74b47d862c99/l0,t128,w1500,h1125/image-768x576.jpg",
  },
  {
    title: "E-Check & Prüfung",
    subtitle: "VDE-Norm",
    description: "Elektroprüfungen für Betriebe und Vermieter. Rechtssicher.",
    icon: ShieldCheck,
    image: "https://voltify5.de/wp-content/uploads/go-x/u/65a33db3-260a-4d6e-8e25-117d2a3f84e7/l50,t268,w1597,h1198/image-768x576.jpg",
  },
  {
    title: "Lichtplanung",
    subtitle: "LED-Konzepte",
    description: "Individuelle Beleuchtung für Wohnräume, Büros und Gewerbe.",
    icon: Lightbulb,
    image: "https://voltify5.de/wp-content/uploads/go-x/u/43b1e083-84f2-4346-b326-6eb230049088/l0,t57,w1500,h1125/image-768x576.jpg",
  },
  {
    title: "Wartung & Notdienst",
    subtitle: "Schnelle Hilfe",
    description: "Störungsbeseitigung, Reparatur und Wartung Ihrer Anlagen.",
    icon: Wrench,
    image: "https://voltify5.de/wp-content/uploads/go-x/u/676d82dc-2cac-4eb8-a71d-62d1004d955e/l0,t69,w1381,h1036/image-768x576.jpg",
  },
]

export function Services() {
  return (
    <section id="leistungen" className="flex flex-col justify-center py-16 sm:py-20">
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
            <span className="text-brand">einer Hand.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Von der Elektroinstallation über Photovoltaik bis zum Smart Home.
            Ihr Meisterbetrieb für den gesamten Hohenlohekreis.
          </p>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.25, 0.1, 0, 1] } }}
                className="group flex flex-col rounded-2xl overflow-hidden border border-white/[0.1] hover:border-brand/40"
              >
                {/* Bild - mb-[-1px] schließt Subpixel-Gap */}
                <div className="relative aspect-[3/2] overflow-hidden mb-[-1px]">
                  <Image
                    src={s.image}
                    alt={`${s.title} Voltify5 Öhringen`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover will-change-transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-x-0 -bottom-[1px] h-20 bg-gradient-to-t from-navy-light to-transparent" />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] font-bold text-brand uppercase tracking-[0.12em] bg-navy/80 backdrop-blur-md rounded-full px-2.5 py-1 border border-brand/30 transition-colors duration-500 group-hover:bg-brand group-hover:text-navy group-hover:border-brand">
                      {s.subtitle}
                    </span>
                  </div>
                </div>

                {/* Text-Block */}
                <div className="flex-1 flex items-start gap-3.5 bg-navy-light p-5 relative z-[1]">
                  <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center shrink-0 shadow-lg shadow-brand/30 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0,1)] group-hover:scale-110">
                    <Icon className="h-[18px] w-[18px] text-navy" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-white leading-tight tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] text-slate-400 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-600 shrink-0 mt-1 transition-[color,transform] duration-500 ease-[cubic-bezier(0.25,0.1,0,1)] group-hover:text-brand group-hover:translate-x-1" />
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
          className="mt-10 flex justify-center"
        >
          <div className="rounded-2xl sm:rounded-full border border-brand/20 bg-navy-light px-6 py-4 sm:pl-6 sm:pr-2 sm:py-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 sm:inline-flex">
            <p className="text-[15px] text-white font-medium">Nicht das Richtige dabei?</p>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 sm:px-5 sm:py-2.5 text-sm font-bold text-navy transition-all duration-300 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/30"
            >
              Kontakt aufnehmen
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
