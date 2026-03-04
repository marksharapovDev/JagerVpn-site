import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { SITE_CONFIG } from "@/lib/constants";

export function Countries() {
  return (
    <section id="countries" className="flex min-h-screen items-center">
      <div className="w-full mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Section heading */}
        <FadeIn className="mb-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl glass-heading">
            Доступные страны
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mb-14 text-center">
          <p className="glass-muted">
            Четыре оптимизированных локации для лучшего опыта
          </p>
        </FadeIn>

        {/* Country cards grid — 2 cols mobile, 4 desktop */}
        <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6">
          {SITE_CONFIG.countries.map((country) => (
            <StaggerItem key={country.name}>
              <div
                className={[
                  "glass-card group relative flex flex-col items-center gap-3 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 h-full",
                  country.isPopular ? "glass-card-green" : "",
                ].join(" ")}
              >
                {/* Popular badge */}
                {country.isPopular && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full border border-primary/40 bg-background/70 px-3 py-0.5 text-xs font-medium text-primary backdrop-blur-sm whitespace-nowrap">
                    Популярно
                  </span>
                )}

                {/* Flag */}
                <span className="text-6xl leading-none mt-2" role="img" aria-label={country.name}>
                  {country.flag}
                </span>

                {/* Country name */}
                <span className="text-lg font-semibold text-foreground">
                  {country.name}
                </span>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed transition-colors duration-300 group-hover:text-foreground/70">
                  {country.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        {/* Footer note */}
        <FadeIn delay={0.2} className="mt-10 text-center">
          <p className="text-sm glass-muted">Также мы регулярно добавляем новые регионы для лучшего клиентского опыта!</p>
        </FadeIn>
      </div>
    </section>
  );
}
