import { cn } from "@/lib/utils"

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "mb-4 flex items-center gap-2 font-mono text-xs tracking-widest text-primary uppercase",
        className
      )}
    >
      <span className="h-px w-8 bg-primary" />
      {children}
    </div>
  )
}
