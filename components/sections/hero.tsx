"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { LayoutGroup } from "motion/react"
import { ArrowRight } from "lucide-react"
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
      <motion.div
        style={{ y, opacity }}
        className="relative flex-1 flex flex-col justify-end pb-8 sm:justify-center sm:pb-0 mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-12 pt-20"
      >
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
        >
          <LayoutGroup>
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-tight text-white sm:leading-[1.08]">
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
                  mainClassName="inline-flex text-brand overflow-hidden py-1 sm:py-3 px-2.5 sm:px-6 border-2 border-brand/60 rounded-lg sm:rounded-2xl"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="mt-5 sm:mt-10 text-base sm:text-lg text-slate-300 max-w-md leading-relaxed"
        >
          5 Elektrotechnikermeister. Über 50 Jahre Erfahrung.
          Ihre Vision, unsere Umsetzung.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
          className="mt-5 sm:mt-8 flex flex-row gap-3"
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

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
          className="mt-5 sm:mt-6"
        >
          <div className="inline-flex items-center gap-2 sm:gap-0 sm:rounded-full sm:border sm:border-brand/40 sm:bg-brand/15 sm:px-4 sm:py-2">
            <div className="flex -space-x-1.5">
              {["bg-brand", "bg-brand", "bg-brand-dark", "bg-brand-dark"].map((bg, i) => (
                <div
                  key={i}
                  className={`h-6 w-6 sm:h-7 sm:w-7 rounded-full ${bg} border-2 border-navy flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-white`}
                >
                  {["TB", "SM", "MW", "FS"][i]}
                </div>
              ))}
            </div>
            <div className="pl-1 sm:pl-3 flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3 w-3 fill-brand text-brand" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300">
                <strong className="font-semibold text-brand">100+</strong> Kunden
              </p>
            </div>
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
              className={`${i === 1 ? "text-center" : i === 2 ? "text-right" : "text-left"}`}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-mono tabular-nums tracking-tight">
                <Counter end={s.v} suffix={s.s} />
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 uppercase tracking-wider">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
