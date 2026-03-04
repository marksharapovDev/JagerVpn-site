import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { SITE_CONFIG } from "@/lib/constants";

interface PricingPlan {
  name: string;
  price: string;
  billing?: string;
  badge?: string;
  devices: number;
  features: string[];
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Месяц",
    price: "$7",
    billing: "в месяц",
    devices: 1,
    features: [
      "1 устройство",
      "Все страны",
      "Поддержка 24/7",
    ],
  },
  {
    name: "3 месяца",
    price: "$5",
    billing: "в месяц · $15 за 3 месяца",
    badge: "Популярно",
    devices: 3,
    features: [
      "3 устройства",
      "Все страны",
      "Приоритетная поддержка",
    ],
    isPopular: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="flex min-h-screen items-center">
      <div className="w-full mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Section heading */}
        <FadeIn className="mb-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl glass-heading">
            Простые тарифы
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mb-14 text-center">
          <p className="glass-muted">Без скрытых платежей. Отмена в любой момент.</p>
        </FadeIn>

        {/* Pricing cards */}
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={[
                  "glass-card relative flex h-full flex-col rounded-2xl p-8",
                  plan.isPopular ? "glass-card-green scale-[1.03]" : "",
                ].join(" ")}
              >
                {/* Badge */}
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-primary/40 bg-background/70 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                    {plan.badge}
                  </span>
                )}

                {/* Plan name */}
                <h3 className="mb-4 text-lg font-semibold glass-subheading">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-4xl font-extrabold glass-hero">
                    {plan.price}
                  </span>
                  <span className="text-sm glass-muted"> /мес</span>
                </div>
                {plan.billing && (
                  <p className="mb-6 text-xs glass-muted">{plan.billing}</p>
                )}

                {/* Feature list */}
                <ul className="mb-8 flex flex-grow flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm glass-body">
                      <Check size={15} className="shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA — links to Telegram bot */}
                <div className="glass-btn-wrap block w-full">
                  <a
                    href={SITE_CONFIG.telegramBot}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "glass-btn w-full text-base",
                      plan.isPopular ? "glass-btn-green" : "",
                    ].join(" ")}
                  >
                    <span>Начать</span>
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
