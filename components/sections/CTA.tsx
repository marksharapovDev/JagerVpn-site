import { Send } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE_CONFIG } from "@/lib/constants";

export function CTA() {
  return (
    <section
      id="cta"
      className="border-b border-t border-border bg-surface py-24"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {/* Heading */}
        <FadeIn>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Готовы защитить свою приватность?
          </h2>
        </FadeIn>

        {/* Sub-text */}
        <FadeIn delay={0.1}>
          <p className="mb-10 text-muted">
            Подключитесь к JagerVPN сегодня — настройка займёт менее 2 минут
          </p>
        </FadeIn>

        {/* Action buttons */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* Primary — Telegram bot */}
            <a
              href={SITE_CONFIG.telegramBot}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-background transition-all duration-300 hover:bg-primary-dark hover:shadow-[0_0_30px_rgba(0,229,160,0.35)] sm:w-auto"
            >
              <Send size={16} />
              Открыть бота
            </a>

            {/* Ghost — Telegram channel */}
            <a
              href={SITE_CONFIG.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary sm:w-auto"
            >
              <Send size={16} />
              Вступить в канал
            </a>
          </div>
        </FadeIn>

        {/* Platform availability note */}
        <FadeIn delay={0.3}>
          <p className="mt-8 text-xs text-muted">
            Доступно на iOS, Android, Windows, macOS
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
