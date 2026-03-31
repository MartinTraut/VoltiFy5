import Image from "next/image"
import { cn } from "@/lib/utils"

const LOGO_URL =
  "https://www.voltify5.de/wp-content/uploads/go-x/u/c09b3ee1-e4eb-40a8-8a4f-72314f3dad61/image-320x97.png"

interface LogoProps {
  className?: string
  light?: boolean
}

export function Logo({ className, light = false }: LogoProps) {
  return (
    <Image
      src={LOGO_URL}
      alt="VoltiFy5"
      width={130}
      height={40}
      className={cn(
        "h-8 w-auto transition-[filter] duration-300",
        light ? "" : "brightness-0",
        className
      )}
      priority
    />
  )
}
