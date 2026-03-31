"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight } from "lucide-react"

const projects = [
  {
    src: "https://voltify5.de/wp-content/uploads/go-x/u/4d989e67-3275-4654-a62d-6525fdee6e00/image.jpg",
    title: "Neubau Elektroinstallation",
    desc: "Komplettinstallation eines Einfamilienhauses mit KNX-Steuerung.",
    category: "Installation",
  },
  {
    src: "https://voltify5.de/wp-content/uploads/go-x/u/dc39ac73-59f7-4c6e-859b-75d2e5ce7b5f/image.jpg",
    title: "Gewerbliche Elektrotechnik",
    desc: "Starkstromversorgung und Sicherheitstechnik für Produktionshalle.",
    category: "Gewerbe",
  },
  {
    src: "https://voltify5.de/wp-content/uploads/go-x/u/8ec9a1e5-4d64-43a7-a0c2-1035165b5d24/image.jpg",
    title: "Photovoltaikanlage 12kWp",
    desc: "Planung, Montage und Inbetriebnahme einer Solaranlage.",
    category: "Solar",
  },
  {
    src: "https://voltify5.de/wp-content/uploads/go-x/u/ec25cc27-8d26-4f69-b858-7c6b30bdf89c/image.jpg",
    title: "Lichtkonzept Bürogebäude",
    desc: "Energieeffiziente LED-Beleuchtung mit Tageslichtsensorik.",
    category: "Beleuchtung",
  },
]

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="projekte" className="min-h-dvh flex flex-col justify-center py-16 sm:py-20 snap-start">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <p className="text-sm font-medium text-brand mb-4 uppercase tracking-wider">Referenzprojekte</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Qualität,
              <br />
              <span className="text-slate-400">die man sieht.</span>
            </h2>
            <p className="mt-5 text-slate-400 leading-relaxed">
              Ausgewählte Projekte aus dem Hohenlohekreis. Von der Privatinstallation
              bis zur gewerblichen Großanlage.
            </p>
            <div className="mt-8 flex items-baseline gap-6">
              <div>
                <div className="text-3xl font-bold text-white font-mono">1.000+</div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Projekte</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-mono">100%</div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Zufriedenheit</div>
              </div>
            </div>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 mt-8 text-sm font-semibold text-brand hover:text-brand-light transition-colors"
            >
              Projekt besprechen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Right: project cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group cursor-pointer"
                onClick={() => setSelected(i)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/[0.03] ring-1 ring-white/[0.06]">
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  />
                  {/* Hover reveal overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[10px] font-semibold text-brand uppercase tracking-[0.2em]">
                      {p.category}
                    </span>
                    <h3 className="text-base font-semibold text-white mt-1">{p.title}</h3>
                  </div>
                </div>
                <div className="mt-4 transition-opacity duration-300 group-hover:opacity-0">
                  <span className="text-[11px] font-medium text-brand uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="text-base font-semibold text-white mt-1">{p.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden bg-navy ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={projects[selected].src}
                  alt={projects[selected].title}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-brand uppercase tracking-wider">
                  {projects[selected].category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {projects[selected].title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">{projects[selected].desc}</p>
              </div>
            </motion.div>
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelected(null)}
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
