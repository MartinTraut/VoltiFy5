"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, ArrowLeft, Expand } from "lucide-react"

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
  {
    src: "https://voltify5.de/wp-content/uploads/go-x/u/5c35d522-7369-4ecc-acb4-ec24b7ad543b/image.jpg",
    title: "Unterverteilung & Zählerschrank",
    desc: "Fachgerechter Aufbau und Verdrahtung nach aktueller VDE-Norm.",
    category: "Installation",
  },
  {
    src: "https://voltify5.de/wp-content/uploads/go-x/u/4d9247e5-b0f7-45a0-a42b-359a1663970e/image.jpg",
    title: "Sanierung Altbau",
    desc: "Kompletterneuerung der Elektroinstallation im denkmalgeschützten Gebäude.",
    category: "Sanierung",
  },
  {
    src: "https://voltify5.de/wp-content/uploads/go-x/u/411013b7-74c9-451b-bf82-7462b83aebfb/image.jpg",
    title: "Smart Home Vernetzung",
    desc: "Intelligente Gebäudesteuerung mit KNX für Einfamilienhaus.",
    category: "Smart Home",
  },
  {
    src: "https://voltify5.de/wp-content/uploads/go-x/u/62c8009b-e981-45d6-86b9-0d3b11aa3b46/image.jpg",
    title: "Außenbeleuchtung Gewerbe",
    desc: "LED-Konzept für Firmenaußengelände mit Bewegungssensorik.",
    category: "Beleuchtung",
  },
  {
    src: "https://voltify5.de/wp-content/uploads/go-x/u/91078ebb-92c0-4fc2-8b80-fbdcc4448aac/image.jpg",
    title: "Elektroprüfung Betrieb",
    desc: "Regelmäßige E-Check Prüfung für Gewerbebetrieb nach DGUV V3.",
    category: "E-Check",
  },
  {
    src: "https://voltify5.de/wp-content/uploads/go-x/u/7555d6c2-fb31-4ea3-ac4f-8b024339f261/image.jpg",
    title: "Starkstromversorgung",
    desc: "Installation einer Starkstromanlage für industrielle Fertigung.",
    category: "Gewerbe",
  },
  {
    src: "https://voltify5.de/wp-content/uploads/go-x/u/bb194df9-2eb6-469f-8da7-41947725469e/image.jpg",
    title: "Solaranlage Gewerbedach",
    desc: "30kWp Photovoltaikanlage auf Produktionshalle mit Speicher.",
    category: "Solar",
  },
]

// 2 Projekte pro Seite auf Desktop, 1 auf Mobile
const DESKTOP_PER_PAGE = 2
const MOBILE_PER_PAGE = 1

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)
  const [page, setPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const perPage = isMobile ? MOBILE_PER_PAGE : DESKTOP_PER_PAGE
  const totalPages = Math.ceil(projects.length / perPage)

  const prev = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages])
  const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages])

  const visible = projects.slice(page * perPage, page * perPage + perPage)

  return (
    <section id="projekte" className="flex flex-col justify-center py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-10"
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

        {/* Stats - kompakt */}
        <div className="rounded-xl border border-white/[0.08] bg-navy-light overflow-hidden mb-8">
          <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
            {[
              { end: 1000, suffix: "+", label: "Projekte", accent: false },
              { end: 100, suffix: "%", label: "Zufriedenheit", accent: true },
              { end: 50, suffix: "+", label: "Jahre Erfahrung", accent: false },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="relative px-3 py-3 sm:px-6 sm:py-4 text-center"
              >
                {s.accent && (
                  <div className="absolute inset-0 bg-brand/[0.04] pointer-events-none" />
                )}
                <div className="relative">
                  <div className={`text-xl sm:text-2xl lg:text-3xl font-bold font-mono leading-none tracking-tight ${
                    s.accent ? "text-brand" : "text-white"
                  }`}>
                    <Counter end={s.end} suffix={s.suffix} />
                  </div>
                  <div className="text-[9px] sm:text-[11px] text-slate-400 mt-1 uppercase tracking-wider font-medium">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {visible.map((p) => (
              <motion.div
                key={p.src}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
                className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] transition-[border-color] duration-500 hover:border-brand/40"
                onClick={() => setSelected(projects.indexOf(p))}
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
                  <div className="absolute inset-x-0 -bottom-[1px] h-16 bg-gradient-to-t from-navy-light to-transparent" />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-bold text-brand uppercase tracking-[0.12em] bg-navy/80 backdrop-blur-md rounded-full px-2.5 py-1 border border-brand/30">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 z-10 sm:opacity-0 transition-opacity duration-300 sm:group-hover:opacity-100">
                    <div className="w-8 h-8 rounded-lg bg-navy/70 backdrop-blur-md flex items-center justify-center border border-white/10">
                      <Expand className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="bg-navy-light p-5">
                  <h3 className="text-base font-bold text-white leading-tight">{p.title}</h3>
                  <p className="mt-1.5 text-[13px] text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Navigation: Dots + Pfeile + CTA */}
        <div className="mt-8 flex flex-col items-center gap-5">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page ? "w-8 bg-brand" : "w-1.5 bg-white/[0.15] hover:bg-white/[0.3]"
                }`}
              />
            ))}
          </div>

          {/* Pfeile */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/[0.1] bg-navy-light flex items-center justify-center text-white transition-colors duration-300 hover:border-brand/40 hover:text-brand"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <span className="text-xs text-slate-400 font-mono tabular-nums w-12 text-center">
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/[0.1] bg-navy-light flex items-center justify-center text-white transition-colors duration-300 hover:border-brand/40 hover:text-brand"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* CTA */}
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-navy transition-all duration-300 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/40"
          >
            Projekt besprechen
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
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
              <div className="p-5 sm:p-6">
                <span className="text-xs font-bold text-brand uppercase tracking-wider">
                  {projects[selected].category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  {projects[selected].title}
                </h3>
                <p className="text-sm text-slate-300 mt-1">{projects[selected].desc}</p>
              </div>
            </motion.div>
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
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
