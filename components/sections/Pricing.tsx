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
  {
    name: "Год",
    price: "$3",
    billing: "в месяц · $36 в год",
    badge: "Выгоднее всего",
    devices: 5,
    features: [
      "5 устройств",
      "Все страны",
      "Приоритетная поддержка",
      "Бесплатная настройка",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <FadeIn className="mb-4 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Простые тарифы
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mb-14 text-center">
          <p className="text-muted">Без скрытых платежей. Отмена в любой момент.</p>
        </FadeIn>

        {/* Pricing cards */}
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={[
                  "relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300",
                  plan.isPopular
                    ? "scale-[1.03] border-primary bg-surface shadow-[0_0_32px_rgba(0,229,160,0.15)]"
                    : "border-border bg-surface hover:border-primary hover:shadow-[0_0_20px_rgba(0,229,160,0.08)]",
                ].join(" ")}
              >
                {/* Badge */}
                {plan.badge && (
                  <span
                    className={[
                      "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold",
                      plan.isPopular
                        ? "bg-primary text-background"
                        : "border border-border bg-surface text-muted",
                    ].join(" ")}
                  >
                    {plan.badge}
                  </span>
                )}

                {/* Plan name */}
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-4xl font-extrabold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted"> /мес</span>
                </div>
                {plan.billing && (
                  <p className="mb-6 text-xs text-muted">{plan.billing}</p>
                )}

                {/* Feature list */}
                <ul className="mb-8 flex flex-grow flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check size={15} className="shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA — links to Telegram bot */}
                <a
                  href={SITE_CONFIG.telegramBot}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "block rounded-xl py-3 text-center text-sm font-semibold transition-all duration-300",
                    plan.isPopular
                      ? "bg-primary text-background hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(0,229,160,0.3)]"
                      : "border border-border text-foreground hover:border-primary hover:text-primary",
                  ].join(" ")}
                >
                  Начать
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
