"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Handle nav clicks: update URL, let CSS scroll-snap + scroll-behavior do the rest
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!link) return
      const href = link.getAttribute("href")
      if (!href || href === "#") return
      const target = document.querySelector(href)
      if (!target) return

      e.preventDefault()
      window.history.pushState(null, "", href)
      target.scrollIntoView({ behavior: "smooth" })
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}
