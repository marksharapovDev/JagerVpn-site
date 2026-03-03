import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { SITE_CONFIG } from "@/lib/constants";

export function Countries() {
  return (
    <section id="countries" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <FadeIn className="mb-4 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Доступные страны
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mb-14 text-center">
          <p className="text-muted">
            Подключайтесь к серверам в 50+ точках мира
          </p>
        </FadeIn>

        {/* Country cards grid — 3 cols mobile, 4 tablet, 6 desktop */}
        <StaggerContainer className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {SITE_CONFIG.countries.map((country) => (
            <StaggerItem key={country.name}>
              <div
                className={[
                  "group relative flex flex-col items-center gap-2 rounded-xl border bg-surface p-4 transition-all duration-300",
                  "hover:scale-105 hover:border-primary hover:shadow-[0_0_16px_rgba(0,229,160,0.15)]",
                  country.isPopular
                    ? "border-primary shadow-[0_0_12px_rgba(0,229,160,0.1)]"
                    : "border-border",
                ].join(" ")}
              >
                {/* Popular badge */}
                {country.isPopular && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full border border-primary bg-background px-2 py-0.5 text-[10px] font-medium text-primary">
                    Популярно
                  </span>
                )}

                {/* Flag */}
                <span className="text-4xl leading-none" role="img" aria-label={country.name}>
                  {country.flag}
                </span>

                {/* Country name */}
                <span className="text-center text-xs text-muted transition-all duration-300 group-hover:text-foreground">
                  {country.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* More countries note */}
        <FadeIn delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-muted">...и ещё 40+ стран</p>
        </FadeIn>
      </div>
    </section>
  );
}
