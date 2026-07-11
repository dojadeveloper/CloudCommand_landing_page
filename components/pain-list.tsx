import { CheckCircle2, CreditCard, LineChart, BookOpen } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionLabel } from "@/components/section-label"

const pains = [
  {
    icon: CheckCircle2,
    title: "Errores por comandas en papel",
    body: "Letra ilegible, papeles perdidos y mala coordinación entre cocina caliente y fría generan platillos equivocados y clientes molestos.",
  },
  {
    icon: CreditCard,
    title: "Cero trazabilidad financiera",
    body: "Sin desglose por terminal de pago es imposible saber quién cobró qué, o detectar un faltante antes de que sea un problema mayor.",
  },
  {
    icon: LineChart,
    title: "Decisiones sin datos",
    body: "Sin reportes claros, no sabes qué platillo se vende más, en qué horario, ni dónde se te está yendo el dinero.",
  },
  {
    icon: BookOpen,
    title: "Carta desactualizada y cara",
    body: "Reimprimir el menú cada vez que cambian precios o platillos es lento y costoso. Y mientras tanto, el cliente ve precios viejos.",
  },
]

export function PainList() {
  return (
    <section id="problema" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-xl">
        <SectionLabel>Comanda #001 · El problema</SectionLabel>
        <h2 className="font-heading text-[clamp(1.9rem,3.2vw,2.6rem)] leading-tight font-bold text-foreground">
          Operar con papel te está costando dinero que no ves
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Son errores pequeños que se acumulan todos los días: una comanda mal leída, un cambio de mesa que no se anota, un corte de caja que no cuadra.
        </p>
      </Reveal>

      <div className="mt-12 flex flex-col">
        {pains.map((pain, i) => (
          <Reveal
            key={pain.title}
            className="group grid grid-cols-[3rem_1fr] gap-6 border-t border-border px-3 py-8 transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] last:border-b hover:-translate-y-0.5 hover:bg-secondary/30 sm:grid-cols-[5rem_auto_1fr]"
          >
            <div className="font-mono text-sm font-bold text-muted-foreground">
              {String(i + 1).padStart(3, "0")}
            </div>
            <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:rotate-3 sm:col-start-2">
              <pain.icon className="size-5" strokeWidth={1.8} />
            </div>
            <div className="col-span-2 sm:col-span-1 sm:col-start-3">
              <h3 className="font-heading text-lg font-semibold text-foreground">{pain.title}</h3>
              <p className="mt-1.5 max-w-[60ch] text-muted-foreground">{pain.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
