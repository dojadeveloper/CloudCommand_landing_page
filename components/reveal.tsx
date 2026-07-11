"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useReveal } from "@/hooks/use-reveal"

export function Reveal({
  children,
  className,
  style,
  as: Tag = "div",
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  as?: React.ElementType
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      data-state={isVisible ? "visible" : "hidden"}
      style={style}
      className={cn(
        "group/reveal transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className
      )}
    >
      {children}
    </Tag>
  )
}
