"use client"

import { ElectricCanvas } from "@/components/electric-canvas"

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-navy overflow-hidden">
      {/* Electric particle canvas */}
      <ElectricCanvas className="absolute inset-0" />

      {/* Juicy ambient gradient orbs - stronger opacity */}
      <div
        className="absolute -top-[20%] -left-[15%] w-[65%] h-[65%] rounded-full blur-[120px] animate-drift-1"
        style={{ background: "radial-gradient(circle, rgba(253,191,0,0.12) 0%, rgba(253,191,0,0) 70%)" }}
      />
      <div
        className="absolute -bottom-[20%] -right-[15%] w-[60%] h-[60%] rounded-full blur-[100px] animate-drift-2"
        style={{ background: "radial-gradient(circle, rgba(253,191,0,0.14) 0%, rgba(253,191,0,0) 70%)" }}
      />
      <div
        className="absolute top-[25%] left-[15%] w-[55%] h-[55%] rounded-full blur-[90px] animate-drift-3"
        style={{ background: "radial-gradient(circle, rgba(253,191,0,0.08) 0%, rgba(253,191,0,0) 65%)" }}
      />
      <div
        className="absolute top-[5%] right-[-5%] w-[45%] h-[45%] rounded-full blur-[80px] animate-drift-4"
        style={{ background: "radial-gradient(circle, rgba(253,170,0,0.07) 0%, rgba(253,170,0,0) 60%)" }}
      />

      {/* Subtle warm tint across entire background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(253,191,0,0.03) 0%, transparent 50%, rgba(253,191,0,0.02) 100%)" }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(7,14,27,0.5) 100%)" }}
      />
    </div>
  )
}
