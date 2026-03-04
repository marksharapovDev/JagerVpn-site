"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer"
import { SITE_CONFIG } from "@/lib/constants"
import { Check } from "lucide-react"
import { useState } from "react"

const PRICE_MAP: Record<number, number> = { 3: 720, 6: 1400, 12: 2800 }
const PLAN_OPTIONS = [3, 6, 12]

function calculatePrice(months: number): number {
  return PRICE_MAP[months] ?? 0
}

function monthLabel(months: number): string {
  if (months === 1) return "месяц"
  if (months >= 2 && months <= 4) return "месяца"
  return "месяцев"
}

const monthlyFeatures = ["1 устройство", "Все страны", "Поддержка 24/7"]
const flexFeatures = ["3 устройства", "Все страны", "Приоритетная поддержка"]

export function Pricing() {
  const [selectedMonths, setSelectedMonths] = useState(3)
  const price = calculatePrice(selectedMonths)

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

          {/* Card 1 — Month */}
          <StaggerItem>
            <div className="glass-card relative flex h-full flex-col rounded-2xl p-8">
              <h3 className="mb-4 text-lg font-semibold glass-subheading">
                1 Месяц
              </h3>
              <div className="mb-1">
                <span className="text-4xl font-extrabold glass-hero">250₽</span>
                <span className="text-sm glass-muted"> </span>
              </div>
              <p className="mb-6 text-xs glass-muted">в месяц</p>
              <ul className="mb-8 flex flex-grow flex-col gap-3">
                {monthlyFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm glass-body">
                    <Check size={15} className="shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="glass-btn-wrap block w-full">
                <a
                  href={SITE_CONFIG.telegramBot}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn w-full text-base"
                >
                  <span>Перейти в бота</span>
                </a>
              </div>
            </div>
          </StaggerItem>

          {/* Card 2 — Flexible */}
          <StaggerItem>
            <div className="glass-card glass-card-green relative flex h-full flex-col rounded-2xl p-8 scale-[1.03]">
              {/* Badge */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-primary/40 bg-background/70 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                Выбери сам
              </span>

              {/* Month selector */}
              <div className="mb-5 flex rounded-xl overflow-hidden border border-white/10 bg-white/5">
                {PLAN_OPTIONS.map((months) => (
                  <button
                    key={months}
                    onClick={() => setSelectedMonths(months)}
                    className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                      selectedMonths === months
                        ? "bg-primary text-white"
                        : "glass-muted hover:text-white"
                    }`}
                  >
                    {months} {monthLabel(months)}
                  </button>
                ))}
              </div>

              {/* Price */}
              <div className="mb-1">
                <span className="text-4xl font-extrabold glass-hero">{price}₽</span>
              </div>
              <p className="mb-6 text-xs glass-muted">
                за {selectedMonths} {monthLabel(selectedMonths)} · {Math.round(price / selectedMonths)}₽ в месяц
              </p>

              {/* Feature list */}
              <ul className="mb-8 flex flex-grow flex-col gap-3">
                {flexFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm glass-body">
                    <Check size={15} className="shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="glass-btn-wrap block w-full">
                <a
                  href={SITE_CONFIG.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn glass-btn-green w-full text-base"
                >
                  <span>Перейти в бота</span>
                </a>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  )
}
