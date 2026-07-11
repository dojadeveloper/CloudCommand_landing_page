import { Check } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionLabel } from "@/components/section-label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Básico",
    price: "$799.99",
    note: "El punto de partida para dejar el papel atrás",
    featured: false,
    features: [
      "Menú digital con QR",
      "Toma de órdenes por mesero",
      "Impresión automática por estaciones",
      "Ticket de cobro por terminal",
      "Cambio de mesa y reapertura de órdenes",
      "Reportes exportables a Excel",
      "Panel admin de menú, usuarios y terminales",
    ],
  },
  {
    name: "Pro",
    price: "$1,699.99",
    note: "El más elegido: control financiero y de equipo",
    featured: true,
    features: [
      "Todo lo de Básico",
      "Autofactura con QR en el ticket",
      "Gestión de inventario inteligente",
      "Rendimiento de meseros",
      "Calculadora de reparto de propinas",
      "Landing page con reservaciones online",
    ],
  },
  {
    name: "Premium",
    price: "$3,299.99",
    note: "Para cadenas y operaciones multi-sucursal",
    featured: false,
    features: [
      "Todo lo de Pro",
      "Chatbot con IA para consultas de negocio",
      "Recomendaciones basadas en datos",
      "Sistema de fidelidad de clientes",
      "Gestión multi-sucursal",
    ],
  },
]

export function Pricing() {
  return (
    <section id="planes" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-xl">
        <SectionLabel>Cuenta por cobrar</SectionLabel>
        <h2 className="font-heading text-[clamp(1.9rem,3.2vw,2.6rem)] leading-tight font-bold text-foreground">
          Un plan para cada etapa de tu restaurante
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Empieza con lo esencial y crece hacia automatización total. Sin contratos forzosos.
        </p>
      </Reveal>

      <Reveal className="mt-14 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "relative gap-0 border-0 px-1 pt-1 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5",
              plan.featured
                ? "ring-2 ring-primary hover:shadow-2xl hover:shadow-primary/30"
                : "hover:shadow-xl hover:shadow-black/20"
            )}
          >
            {plan.featured && (
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-primary px-3 py-1 font-mono text-[0.65rem] font-bold tracking-wide text-primary-foreground uppercase">
                Recomendado
              </div>
            )}
            <CardContent className="flex grow flex-col pt-6">
              <div className="font-heading text-base font-semibold">{plan.name}</div>
              <div className="mt-2 font-heading text-3xl font-bold">
                {plan.price}
                <span className="ml-1 text-sm font-medium text-card-foreground/60">/mes</span>
              </div>
              <div className="mt-2 border-b border-dashed border-paper-line pb-4 text-sm text-card-foreground/60">
                {plan.note}
              </div>

              <ul className="mt-5 flex grow flex-col gap-3">
                {plan.features.map((feature, i) => (
                  <li
                    key={feature}
                    className={cn(
                      "flex items-start gap-2.5 text-sm text-card-foreground/75 opacity-0 -translate-x-1 transition-[opacity,transform] duration-500 ease-out group-data-[state=visible]/reveal:translate-x-0 group-data-[state=visible]/reveal:opacity-100",
                      i === 0 && plan.name !== "Básico" && "font-semibold text-card-foreground"
                    )}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={2.5} />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="bg-transparent px-6 pt-2 pb-6">
              <Button
                asChild
                variant={plan.featured ? "default" : "outline"}
                className={cn(
                  "w-full",
                  !plan.featured &&
                    "border-card-foreground/20 bg-transparent text-card-foreground hover:bg-card-foreground/5"
                )}
              >
                <a href="#contacto">Solicita una demo</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Reveal>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Precios en pesos mexicanos, más IVA. El onboarding es personalizado — no hay registro automático.
      </p>
    </section>
  )
}
