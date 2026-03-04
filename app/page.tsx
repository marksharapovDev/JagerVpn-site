import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Countries } from "@/components/sections/Countries";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { FixedVideo } from "@/components/ui/FixedVideo";

export default function Home() {
  return (
    <>
      <Header />

      {/* Video stays fixed on the right on desktop (lg+) */}
      <FixedVideo />

      {/* All scrollable content — shifted left on lg+ to give room to the fixed video */}
      <div className="lg:mr-[42vw] lg:pl-16">
        <main>
          <Hero />
          <Features />
          <Countries />
          <Pricing />
          <CTA />
        </main>
      </div>

      {/* Footer outside the content wrapper — spans full page width */}
      <Footer />
    </>
  );
}
