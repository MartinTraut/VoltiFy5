"use client"

import React from "react"
import { motion } from "motion/react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  text: string
  name: string
  role: string
  initials: string
  service?: string
  rating?: number
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {[0, 1].map((_, loopIdx) => (
          <React.Fragment key={loopIdx}>
            {testimonials.map((t, i) => (
              <div
                key={`${loopIdx}-${i}`}
                className="relative p-5 rounded-2xl border border-white/[0.08] bg-navy-light max-w-xs w-full"
              >
                {/* Sterne */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating ?? 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-brand text-brand" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-white/90 leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Autor */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/[0.08]">
                  <div className="h-10 w-10 rounded-full bg-brand flex items-center justify-center text-xs font-bold text-navy shrink-0">
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-white leading-tight">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-400 leading-tight mt-0.5">
                      {t.role}
                    </div>
                  </div>
                  {t.service && (
                    <span className="text-[10px] font-bold text-brand uppercase tracking-wider bg-brand/15 border border-brand/30 rounded-full px-2.5 py-1 shrink-0">
                      {t.service}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
