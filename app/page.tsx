import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Countries } from "@/components/sections/Countries";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { FixedVideo } from "@/components/ui/FixedVideo";
import { FullPageScroller } from "@/components/animations/FullPageScroller";

export default function Home() {
  return (
    <>
      <Header />
      <FullPageScroller />

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
    </>
  );
}
