"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

const zigzag =
  "polygon(0 0,100% 0,100% 96%,95% 100%,90% 96%,85% 100%,80% 96%,75% 100%,70% 96%,65% 100%,60% 96%,55% 100%,50% 96%,45% 100%,40% 96%,35% 100%,30% 96%,25% 100%,20% 96%,15% 100%,10% 96%,5% 100%,0 96%)"

const START_DELAY_MS = 250
const DURATION_MS = 750

export function Ticket({ className }: { className?: string }) {
  const [printed, setPrinted] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPrinted(true)
      return
    }
    const timer = setTimeout(() => setPrinted(true), START_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={cn("flex flex-col items-center", className)}>
      {/* ranura de la impresora: el papel sale de aquí hacia arriba */}
      <div className="h-1.5 w-[78%] max-w-[280px] rounded-full bg-black/50 shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]" />

      <div
        className="-mt-px w-full max-w-[340px] bg-card px-6 pt-6 pb-10 font-mono text-card-foreground shadow-2xl shadow-black/40 transition-[clip-path,transform] ease-out"
        style={{
          clipPath: printed ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
          transform: printed ? "translateY(0)" : "translateY(-10px)",
          transitionDuration: `${DURATION_MS}ms`,
        }}
      >
        <div className="text-center">
          <div className="text-sm font-bold tracking-wide">COMANDIUM</div>
          <div className="mt-1 text-[0.68rem] text-card-foreground/60">
            Cocina Caliente · Estación C
          </div>
        </div>

        <hr className="my-4 border-t border-dashed border-paper-line" />

        <div className="flex justify-between text-[0.68rem] text-card-foreground/60">
          <span>MESA 4 · ORD #184</span>
          <span>13:42</span>
        </div>

        <div className="mt-4 flex flex-col gap-2.5">
          <div className="flex justify-between gap-2 text-[0.78rem]">
            <div className="flex flex-col">
              <span>2× COM-015 Milanesa</span>
              <span className="text-[0.64rem] text-card-foreground/60">sin cebolla</span>
            </div>
          </div>
          <div className="flex justify-between gap-2 text-[0.78rem]">
            <div className="flex flex-col gap-0.5">
              <span>1× COM-032 Wrap pollo</span>
              <span className="w-fit rounded-sm bg-primary/10 px-1.5 py-0.5 text-[0.6rem] font-bold tracking-wide text-primary">
                PARA LLEVAR
              </span>
            </div>
          </div>
          <div className="flex justify-between gap-2 text-[0.78rem]">
            <span>3× BEB-007 Limonada</span>
          </div>
        </div>

        <hr className="my-4 border-t border-dashed border-paper-line" />

        <div className="flex items-baseline justify-between">
          <span className="text-[0.72rem] font-medium tracking-wide text-card-foreground/60 uppercase">
            Total
          </span>
          <span className="text-base font-bold">$312.00</span>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-[0.68rem] font-bold text-success">
          <span className="size-1.5 rounded-full bg-success shadow-[0_0_0_3px_rgba(111,148,105,0.2)]" />
          Impreso en 1.8s · Terminal 2
        </div>
      </div>
    </div>
  )
}
