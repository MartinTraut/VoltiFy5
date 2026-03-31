"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Expand } from "lucide-react"

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
    <section id="projekte" className="min-h-dvh flex flex-col justify-center py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sm font-medium text-brand mb-4 uppercase tracking-wider">Referenzprojekte</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Qualität,
            <br />
            <span className="text-brand">die man sieht.</span>
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Ausgewählte Projekte aus dem Hohenlohekreis. Von der Privatinstallation
            bis zur gewerblichen Großanlage.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="rounded-2xl border border-white/[0.08] bg-navy-light overflow-hidden mb-10">
          <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
            {[
              { end: 1000, suffix: "+", label: "Projekte", accent: false },
              { end: 100, suffix: "%", label: "Zufriedenheit", accent: true },
              { end: 50, suffix: "+", label: "Jahre Erfahrung", accent: false },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="relative p-6 sm:py-8 sm:px-8 text-center"
              >
                {/* Dezenter Glow bei Accent */}
                {s.accent && (
                  <div className="absolute inset-0 bg-brand/[0.04] pointer-events-none" />
                )}
                <div className="relative">
                  <div className={`text-2xl sm:text-4xl lg:text-5xl font-black font-mono leading-none tracking-tight ${
                    s.accent ? "text-brand" : "text-white"
                  }`}>
                    <Counter end={s.end} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-slate-400 mt-2.5 uppercase tracking-wider font-semibold">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] transition-[border-color] duration-500 hover:border-brand/40"
              onClick={() => setSelected(i)}
            >
              {/* Bild */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover will-change-transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0,1)] group-hover:scale-[1.05]"
                />
                {/* Gradient unten für nahtlosen Übergang */}
                <div className="absolute inset-x-0 -bottom-[1px] h-16 bg-gradient-to-t from-navy-light to-transparent" />
                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-bold text-brand uppercase tracking-[0.12em] bg-navy/80 backdrop-blur-md rounded-full px-2.5 py-1 border border-brand/30">
                    {p.category}
                  </span>
                </div>
                {/* Expand icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="w-8 h-8 rounded-lg bg-navy/70 backdrop-blur-md flex items-center justify-center border border-white/10">
                    <Expand className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
              </div>

              {/* Textbereich */}
              <div className="bg-navy-light p-5 mb-[-1px]">
                <h3 className="text-base font-bold text-white leading-tight">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-8 py-4 text-base font-bold text-navy transition-all duration-300 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/40"
          >
            Projekt besprechen
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden bg-navy-light border border-white/[0.1]"
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
                <span className="text-xs font-bold text-brand uppercase tracking-wider">
                  {projects[selected].category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {projects[selected].title}
                </h3>
                <p className="text-sm text-slate-300 mt-1">{projects[selected].desc}</p>
              </div>
            </motion.div>
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
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
