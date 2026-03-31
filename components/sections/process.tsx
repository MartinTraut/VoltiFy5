"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Phone, ClipboardList, HardHat, ThumbsUp, ArrowRight } from "lucide-react"

const steps = [
  {
    title: "Erstberatung",
    desc: "Wir hören zu. Persönliches Gespräch, ehrliche Beratung, Besichtigung vor Ort. Kostenlos und unverbindlich.",
    icon: Phone,
    detail: "Innerhalb von 48h",
  },
  {
    title: "Planung & Angebot",
    desc: "Detailliertes Konzept mit klarer Kostenkalkulation. Keine versteckten Posten. Sie entscheiden in Ruhe.",
    icon: ClipboardList,
    detail: "Festpreisgarantie",
  },
  {
    title: "Umsetzung",
    desc: "Unsere Meister arbeiten sauber, termingerecht und mit Respekt vor Ihrem Eigentum. Immer auf dem Laufenden.",
    icon: HardHat,
    detail: "Termingerecht",
  },
  {
    title: "Abnahme & Service",
    desc: "Gemeinsame Prüfung, Einweisung, Dokumentation. Auch danach sind wir für Sie da.",
    icon: ThumbsUp,
    detail: "Langzeit-Garantie",
  },
]

export function Process() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const interval = setInterval(() => setActive((p) => (p + 1) % 4), 3500)
    return () => clearInterval(interval)
  }, [visible])

  const ActiveIcon = steps[active].icon

  return (
    <section id="prozess" className="min-h-dvh flex flex-col justify-center py-16 sm:py-20 snap-start">
      <div ref={ref} className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: interactive display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Large animated step display */}
            <div className="relative aspect-[4/3] rounded-3xl bg-white/[0.03] border border-white/[0.06] overflow-hidden backdrop-blur-sm">
              {/* Background glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand/[0.06] rounded-full blur-[80px]"
                style={{ transform: "translate(-50%,-50%) translate3d(0,0,0)" }}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 sm:p-12 text-center">
                {/* Step number */}
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-[120px] sm:text-[160px] font-black text-white/[0.03] leading-none absolute top-4 right-6 select-none font-mono"
                >
                  {String(active + 1).padStart(2, "0")}
                </motion.div>

                {/* Icon */}
                <motion.div
                  key={`icon-${active}`}
                  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, type: "spring", damping: 15 }}
                  className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center mb-6 shadow-lg shadow-brand/35"
                >
                  <ActiveIcon className="h-7 w-7 text-white" strokeWidth={1.5} />
                </motion.div>

                {/* Title */}
                <motion.h3
                  key={`title-${active}`}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="text-2xl sm:text-3xl font-bold text-white"
                >
                  {steps[active].title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  key={`desc-${active}`}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-3 text-slate-400 max-w-sm leading-relaxed"
                >
                  {steps[active].desc}
                </motion.p>

                {/* Detail badge */}
                <motion.div
                  key={`detail-${active}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand/15 border border-brand/35 px-4 py-1.5 text-xs font-medium text-brand"
                >
                  {steps[active].detail}
                </motion.div>
              </div>

              {/* Progress bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/[0.04]">
                <motion.div
                  className="h-full bg-brand"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  key={active}
                  transition={{ duration: 3.5, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: heading + step list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-sm font-medium text-brand mb-4 uppercase tracking-wider">So arbeiten wir</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Ihr Projekt.
              <br />
              <span className="text-slate-400">Unser Ablauf.</span>
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Von der ersten Idee bis zum fertigen Projekt. Transparent, strukturiert, persönlich.
            </p>

            {/* Step buttons */}
            <div className="mt-10 space-y-3">
              {steps.map((step, i) => {
                const Icon = step.icon
                const isActive = active === i
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-full text-left flex items-center gap-4 rounded-xl p-4 transition-all duration-300 ${
                      isActive
                        ? "bg-brand/15 border border-brand/35"
                        : "bg-transparent border border-transparent hover:bg-white/[0.03]"
                    }`}
                  >
                    <div
                      className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive ? "bg-brand text-white" : "bg-white/5 text-slate-500"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[11px] font-mono font-bold ${
                            isActive ? "text-brand" : "text-slate-600"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className={`text-sm font-semibold ${isActive ? "text-white" : "text-slate-400"}`}>
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-medium transition-colors ${
                        isActive ? "text-brand" : "text-slate-600"
                      }`}
                    >
                      {step.detail}
                    </span>
                  </button>
                )
              })}
            </div>

            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 mt-8 text-sm font-semibold text-brand hover:text-brand-light transition-colors"
            >
              Jetzt Erstberatung anfragen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
