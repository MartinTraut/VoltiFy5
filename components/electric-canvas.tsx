"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export function ElectricCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isMobile = window.innerWidth < 768

    let raf: number
    let w = 0
    let h = 0
    let mouse = { x: -1000, y: -1000 }
    const particles: Particle[] = []
    const COUNT = isMobile ? 40 : 100
    const CONNECT_DIST = isMobile ? 120 : 160
    const MOUSE_DIST = 220

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2)
      w = canvas!.clientWidth
      h = canvas!.clientHeight
      canvas!.width = w * dpr
      canvas!.height = h * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function init() {
      resize()
      particles.length = 0
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 0.8,
        })
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        if (!isMobile) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_DIST) {
            const force = (MOUSE_DIST - dist) / MOUSE_DIST * 0.02
            p.vx += dx * force
            p.vy += dy * force
          }
        }

        p.vx *= 0.998
        p.vy *= 0.998

        // Particle dot - simple circle, no glow on mobile
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = isMobile ? "rgba(253, 210, 50, 0.8)" : "rgba(253, 210, 50, 1)"
        ctx!.fill()

        // Glow only on desktop
        if (!isMobile) {
          ctx!.beginPath()
          ctx!.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2)
          ctx!.fillStyle = "rgba(253, 191, 0, 0.15)"
          ctx!.fill()
        }

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const cdx = p.x - q.x
          const cdy = p.y - q.y
          const cd = Math.sqrt(cdx * cdx + cdy * cdy)
          if (cd < CONNECT_DIST) {
            const alpha = (1 - cd / CONNECT_DIST) * (isMobile ? 0.2 : 0.35)
            ctx!.beginPath()
            ctx!.moveTo(p.x, p.y)
            ctx!.lineTo(q.x, q.y)
            ctx!.strokeStyle = `rgba(253, 200, 20, ${alpha})`
            ctx!.lineWidth = 0.7
            ctx!.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    function onMouse(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    function onLeave() {
      mouse = { x: -1000, y: -1000 }
    }

    init()
    draw()

    window.addEventListener("resize", resize)
    if (!isMobile) {
      canvas.addEventListener("mousemove", onMouse)
      canvas.addEventListener("mouseleave", onLeave)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", onMouse)
      canvas.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
