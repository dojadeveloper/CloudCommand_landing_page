"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useReveal } from "@/hooks/use-reveal"

export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      data-state={isVisible ? "visible" : "hidden"}
      className={cn(
        "group/reveal transition-[opacity,transform] duration-700 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className
      )}
    >
      {children}
    </Tag>
  )
}
