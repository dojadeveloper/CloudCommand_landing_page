import { Space_Grotesk, Public_Sans, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"

const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const fontSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Comandium · Sistema de gestión digital para restaurantes",
  description:
    "Comandium digitaliza tu restaurante: menú QR, toma de órdenes, impresión por estación, cobro y reportes de ventas. Deja las comandas de papel atrás.",
  openGraph: {
    title: "Comandium · Sistema de gestión digital para restaurantes",
    description:
      "Menú QR, órdenes, cocina e impresión, cobro y reportes — todo en una sola plataforma para restaurantes en México.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es-MX"
      className={cn(fontHeading.variable, fontSans.variable, fontMono.variable)}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
