"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionLabel } from "@/components/section-label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const MONTHS_FREE = 2

const plans = [
  {
    name: "Básico",
    monthly: 799.99,
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
    monthly: 1699.99,
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
    monthly: 3299.99,
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

const currency = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 2,
})

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly")

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

      <Reveal className="mt-10 flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              billing === "monthly"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Mensual
          </button>
          <button
            type="button"
            onClick={() => setBilling("annual")}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              billing === "annual"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Anual
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[0.65rem] font-bold uppercase",
                billing === "annual"
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-success/15 text-success"
              )}
            >
              {MONTHS_FREE} meses gratis
            </span>
          </button>
        </div>
      </Reveal>

      <Reveal className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => {
          const annualTotal = plan.monthly * (12 - MONTHS_FREE)
          const price = billing === "monthly" ? plan.monthly : annualTotal
          const period = billing === "monthly" ? "/mes" : "/año"

          return (
            <div key={plan.name} className="relative">
              {plan.featured && (
                <div className="absolute -top-3 left-6 z-10 rounded-sm bg-primary px-3 py-1 font-mono text-[0.65rem] font-bold tracking-wide whitespace-nowrap text-primary-foreground uppercase shadow-sm">
                  Recomendado
                </div>
              )}
              <Card
                className={cn(
                  "h-full gap-0 border-0 px-1 pt-1 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5",
                  plan.featured
                    ? "ring-2 ring-primary hover:shadow-2xl hover:shadow-primary/30"
                    : "hover:shadow-xl hover:shadow-black/20"
                )}
              >
                <CardContent className="flex grow flex-col pt-6">
                  <div className="font-heading text-base font-semibold">{plan.name}</div>
                  <div className="mt-2 font-heading text-3xl font-bold">
                    {currency.format(price)}
                    <span className="ml-1 text-sm font-medium text-card-foreground/60">
                      {period}
                    </span>
                  </div>
                  {billing === "annual" && (
                    <div className="mt-1 text-sm font-medium text-success">
                      Equivale a {currency.format(annualTotal / 12)}/mes · {MONTHS_FREE} meses
                      gratis
                    </div>
                  )}
                  <div className="mt-2 border-b border-dashed border-paper-line pb-4 text-sm text-card-foreground/60">
                    {plan.note}
                  </div>

                  <ul className="mt-5 flex grow flex-col gap-3">
                    {plan.features.map((feature, i) => (
                      <li
                        key={feature}
                        className={cn(
                          "flex -translate-x-1 items-start gap-2.5 text-sm text-card-foreground/75 opacity-0 transition-[opacity,transform] duration-500 ease-out group-data-[state=visible]/reveal:translate-x-0 group-data-[state=visible]/reveal:opacity-100",
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
            </div>
          )
        })}
      </Reveal>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Precios en pesos mexicanos, más IVA. El onboarding es personalizado — no hay registro
        automático.
      </p>
    </section>
  )
}
