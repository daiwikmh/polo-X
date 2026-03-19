"use client"

import { useEffect, useRef } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12">
      <AnimatedNoise opacity={0.03} />

      {/* Left vertical label */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          DEFI YIELD
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full">

        {/* Section label */}
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          01 / AUTONOMOUS PROTOCOL
        </span>

        {/* Primary heading */}
        <h1 className="mt-6 font-[var(--font-bebas)] text-[clamp(5rem,18vw,16rem)] leading-none tracking-tight">
          POLO
        </h1>

        {/* Accent divider */}
        <div className="w-16 h-px bg-accent mt-2 mb-6" />

        {/* Subtitle */}
        <h2 className="font-[var(--font-bebas)] text-muted-foreground/60 text-[clamp(1rem,3vw,2rem)] tracking-wide">
          AUTONOMOUS DEFI YIELD MANAGEMENT
        </h2>

        <p className="mt-8 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
          POLO finds the best rates across YO Protocol vaults, moves your assets when the math says to, and pulls them out if a vault goes wrong.
        </p>

        <div className="mt-12 flex items-center gap-8">
          <a
            href="https://polo-trade.vercel.app/dashboard/"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover text="Launch App" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </section>
  )
}
