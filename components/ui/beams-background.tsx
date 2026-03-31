"use client"

import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface Beam {
  x: number
  y: number
  width: number
  length: number
  angle: number
  speed: number
  opacity: number
  hue: number
  pulse: number
  pulseSpeed: number
}

function createBeam(width: number, height: number): Beam {
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle: -35 + Math.random() * 10,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: 20 + Math.random() * 30,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  }
}

export function BeamsBackground({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const beamsRef = useRef<Beam[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas!.width = canvas!.clientWidth * dpr
      canvas!.height = canvas!.clientHeight * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      beamsRef.current = Array.from({ length: 25 }, () =>
        createBeam(canvas!.clientWidth, canvas!.clientHeight)
      )
    }

    function resetBeam(beam: Beam, index: number) {
      const w = canvas!.clientWidth
      const col = index % 3
      const spacing = w / 3
      beam.y = canvas!.clientHeight + 100
      beam.x = col * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5
      beam.width = 80 + Math.random() * 100
      beam.speed = 0.4 + Math.random() * 0.4
      beam.hue = 20 + Math.random() * 25
      beam.opacity = 0.15 + Math.random() * 0.1
      return beam
    }

    function draw() {
      const w = canvas!.clientWidth
      const h = canvas!.clientHeight
      ctx!.clearRect(0, 0, w, h)
      ctx!.filter = "blur(35px)"

      beamsRef.current.forEach((beam, i) => {
        beam.y -= beam.speed
        beam.pulse += beam.pulseSpeed
        if (beam.y + beam.length < -100) resetBeam(beam, i)

        ctx!.save()
        ctx!.translate(beam.x, beam.y)
        ctx!.rotate((beam.angle * Math.PI) / 180)

        const o = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2)
        const g = ctx!.createLinearGradient(0, 0, 0, beam.length)
        g.addColorStop(0, `hsla(${beam.hue}, 90%, 55%, 0)`)
        g.addColorStop(0.1, `hsla(${beam.hue}, 90%, 55%, ${o * 0.5})`)
        g.addColorStop(0.4, `hsla(${beam.hue}, 90%, 55%, ${o})`)
        g.addColorStop(0.6, `hsla(${beam.hue}, 90%, 55%, ${o})`)
        g.addColorStop(0.9, `hsla(${beam.hue}, 90%, 55%, ${o * 0.5})`)
        g.addColorStop(1, `hsla(${beam.hue}, 90%, 55%, 0)`)

        ctx!.fillStyle = g
        ctx!.fillRect(-beam.width / 2, 0, beam.width, beam.length)
        ctx!.restore()
      })

      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className={cn("relative w-full overflow-hidden bg-navy", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: "blur(15px)" }}
      />
      <motion.div
        className="absolute inset-0 bg-navy/5"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        style={{ backdropFilter: "blur(50px)" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
