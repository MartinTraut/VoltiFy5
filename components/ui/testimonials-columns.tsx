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
                className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm max-w-xs w-full transition-all duration-500 hover:border-brand/35 hover:bg-white/[0.04]"
              >
                {/* Quote mark */}
                <div className="absolute top-4 right-5 text-4xl font-serif text-brand/10 leading-none select-none">&ldquo;</div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating ?? 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-brand text-brand" />
                  ))}
                </div>

                <p className="text-[13px] text-slate-300 leading-relaxed">
                  {t.text}
                </p>

                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/[0.05]">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-[11px] font-bold text-white shrink-0 shadow-lg shadow-brand/30">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white leading-tight">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-slate-500 leading-tight">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
