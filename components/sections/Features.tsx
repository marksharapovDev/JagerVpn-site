import { Zap, Shield, EyeOff, Globe, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Молниеносная скорость",
    description: "До 1 Гбит/с на всех серверах",
  },
  {
    icon: Shield,
    title: "Военное шифрование",
    description: "AES-256 на всех подключениях",
  },
  {
    icon: EyeOff,
    title: "Политика без логов",
    description: "Мы никогда не храним данные вашей активности",
  },
  {
    icon: Globe,
    title: "50+ стран",
    description: "Серверы по всему миру",
  },
];

export function Features() {
  return (
    <section id="features" className="flex min-h-screen items-center">
      <div className="w-full mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Section heading */}
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl glass-heading">
            Почему JagerVPN?
          </h2>
        </FadeIn>

        {/* Feature cards grid */}
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                {/* Hover: border fades to primary, green glow appears */}
                <div className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_24px_rgba(0,229,160,0.12)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-2 transition-all duration-300 group-hover:bg-[rgba(0,229,160,0.08)]">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold glass-subheading">
                      {feature.title}
                    </h3>
                    <p className="text-sm glass-body">{feature.description}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
