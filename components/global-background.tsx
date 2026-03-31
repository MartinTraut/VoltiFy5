"use client"

import { ElectricCanvas } from "@/components/electric-canvas"

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-navy overflow-hidden">
      {/* Electric particle canvas */}
      <ElectricCanvas className="absolute inset-0" />

      {/* Ambient orbs - reduced on mobile via smaller size + less blur */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[60%] h-[60%] sm:w-[70%] sm:h-[70%] rounded-full blur-[60px] sm:blur-[100px] animate-drift-1"
        style={{ background: "radial-gradient(circle, rgba(253,191,0,0.15) 0%, rgba(253,191,0,0) 70%)" }}
      />
      <div
        className="absolute -bottom-[15%] -right-[10%] w-[55%] h-[55%] sm:w-[65%] sm:h-[65%] rounded-full blur-[50px] sm:blur-[90px] animate-drift-2"
        style={{ background: "radial-gradient(circle, rgba(253,191,0,0.18) 0%, rgba(253,191,0,0) 70%)" }}
      />
      {/* Third and fourth orb only on desktop */}
      <div
        className="hidden sm:block absolute top-[20%] left-[10%] w-[60%] h-[60%] rounded-full blur-[80px] animate-drift-3"
        style={{ background: "radial-gradient(circle, rgba(253,210,40,0.1) 0%, rgba(253,210,40,0) 65%)" }}
      />
      <div
        className="hidden sm:block absolute top-[0%] right-[-5%] w-[50%] h-[50%] rounded-full blur-[70px] animate-drift-4"
        style={{ background: "radial-gradient(circle, rgba(253,180,0,0.08) 0%, rgba(253,180,0,0) 60%)" }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(7,14,27,0.6) 100%)" }}
      />
    </div>
  )
}
