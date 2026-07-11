import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Cta() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">
      <div className="bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16">
        <h2 className="font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-bold">
          ¿Listo para dejar el papel atrás?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-primary-foreground/85">
          Agenda una demo de 20 minutos. Te mostramos el sistema con tu propio menú y resolvemos tus dudas sin compromiso.
        </p>

        <Button
          size="lg"
          className="mt-8 h-11 bg-background px-6 text-[0.95rem] text-foreground hover:bg-background/90"
          asChild
        >
          <a href="mailto:dojaque.developer@gmail.com?subject=Demo%20Comandium">
            Solicita una demo
            <ArrowRight className="size-4" />
          </a>
        </Button>

        <div className="mt-8 flex flex-wrap justify-center gap-6 font-mono text-sm text-primary-foreground/85">
          <a href="mailto:dojaque.developer@gmail.com" className="font-semibold hover:underline">
            dojaque.developer@gmail.com
          </a>
          <a
            href="https://wa.me/522292234703"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            WhatsApp +52 229 223 4703
          </a>
        </div>
      </div>
    </section>
  )
}
