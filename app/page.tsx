import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Countries } from "@/components/sections/Countries";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Countries />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
