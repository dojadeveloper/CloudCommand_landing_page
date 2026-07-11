import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"

export function Testimonial() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="flex flex-col items-start gap-8 border-l-2 border-primary pl-8">
        <Badge variant="outline" className="text-muted-foreground">
          Caso real · Puebla, MX
        </Badge>

        <p className="max-w-3xl font-heading text-2xl leading-snug font-medium text-foreground sm:text-3xl">
          &ldquo;Dejamos de perder pedidos entre cocina y salón, y por primera vez sabemos exactamente qué se vende cada semana.&rdquo;
        </p>

        <div className="group flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
            D
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">Equipo Deli&apos;s</div>
            <div className="text-sm text-muted-foreground">Restaurante, Puebla — primer cliente de Comandium</div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
