"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { LayoutGroup } from "motion/react"
import { ArrowRight, Star } from "lucide-react"
import { TextRotate } from "@/components/ui/text-rotate"

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

const ease = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative h-[100svh] flex flex-col overflow-hidden"
    >
      {/* Main content - vertikal zentriert, gleichmäßig verteilt */}
      <motion.div
        style={{ y, opacity }}
        className="relative flex-1 flex flex-col items-center justify-center text-center mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-12 pt-20 sm:pt-16"
      >
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
        >
          <LayoutGroup>
            <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-tight text-white sm:leading-[1.08]">
              <motion.span
                className="block"
                layout
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                Strom ist
              </motion.span>
              <motion.span className="block mt-1 sm:mt-3" layout>
                <TextRotate
                  texts={[
                    "Vertrauenssache.",
                    "Meistersache.",
                    "Zukunftssache.",
                    "Chefsache.",
                    "Präzisionssache.",
                  ]}
                  mainClassName="inline-flex text-brand overflow-hidden py-1 sm:py-3 px-2 sm:px-6 border-2 border-brand/60 rounded-lg sm:rounded-2xl"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.02}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 350 }}
                  rotationInterval={3000}
                />
              </motion.span>
            </h1>
          </LayoutGroup>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mt-5 sm:mt-8 text-[15px] sm:text-lg text-slate-300 max-w-md leading-relaxed"
        >
          5 Elektrotechnikermeister. Über 50 Jahre Erfahrung.
          Ihre Vision, unsere Umsetzung.
        </motion.p>

        {/* CTAs - zentriert */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
          className="mt-5 sm:mt-8 flex flex-row gap-3 justify-center"
        >
          <a
            href="#kontakt"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 sm:px-8 py-3.5 sm:py-4 text-[15px] sm:text-base font-bold text-navy transition-all duration-300 hover:bg-brand-light hover:shadow-[0_0_40px_-5px_rgba(253,191,0,0.6)] active:scale-[0.98]"
          >
            <span className="absolute inset-0 rounded-full bg-brand opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50" />
            <span className="relative">Projekt starten</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#leistungen"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 sm:px-7 py-3.5 text-[15px] sm:text-sm font-medium text-slate-300 transition-all duration-300 hover:border-white/25 hover:text-white"
          >
            Leistungen
          </a>
        </motion.div>

        {/* Trust badge - cleaner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-5 sm:mt-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-brand text-brand" />
              ))}
            </div>
            <div className="h-4 w-px bg-white/10" />
            <p className="text-xs sm:text-sm text-white font-medium">
              <strong className="text-brand">100+</strong> zufriedene Kunden
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats - fest am unteren Rand */}
      <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-12 pb-6 sm:pb-10">
        <div className="grid grid-cols-3 border-t border-white/8 pt-5 sm:pt-8">
          {[
            { v: 50, s: "+", l: "Jahre Erfahrung", delay: 0.9 },
            { v: 5, s: "", l: "Meisterbetriebe", delay: 1.0 },
            { v: 1000, s: "+", l: "Projekte", delay: 1.1 },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: s.delay, ease }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-mono tabular-nums tracking-tight">
                <Counter end={s.v} suffix={s.s} />
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase tracking-wider">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
