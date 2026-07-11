import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { PainList } from "@/components/pain-list"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Testimonial } from "@/components/testimonial"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PainList />
        <HowItWorks />
        <Pricing />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
