import { FadeIn } from "@/components/animations/FadeIn"
import { Footer } from "@/components/layout/Footer"
import { SITE_CONFIG } from "@/lib/constants"
import { Send } from "lucide-react"

export function CTA() {
  return (
    <section
      id="cta"
      className="flex min-h-screen flex-col"
    >
      {/* Main CTA content — vertically centered in the remaining space */}
      <div className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl glass-heading">
              Не тормози, подключайся!
            </h2>
          </FadeIn>

          {/* Sub-text */}
          <FadeIn delay={0.1}>
            <p className="mb-10 glass-muted">
              Подключитесь к JagerVPN сегодня — настройка займёт менее 2 минут
            </p>
          </FadeIn>

          {/* Action buttons */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col w-fit min-w-80 mx-auto gap-4 sm:w-auto sm:min-w-0 sm:flex-row sm:justify-center">
              {/* Primary — Telegram bot */}
              <div className="glass-btn-wrap sm:inline-block sm:w-auto">
                <a
                  href={SITE_CONFIG.telegramBot}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn glass-btn-green w-full text-base sm:w-auto"
                >
                  <span><Send size={16} />Открыть бота</span>
                </a>
                <div className="glass-btn-shadow" />
              </div>

              {/* Ghost — Telegram channel */}
              <div className="glass-btn-wrap sm:inline-block sm:w-auto">
                <a
                  href={SITE_CONFIG.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn w-full text-base sm:w-auto"
                >
                  <span><Send size={16} />Вступить в канал</span>
                </a>
                <div className="glass-btn-shadow" />
              </div>
            </div>
          </FadeIn>

          {/* Platform availability note */}
          <FadeIn delay={0.3}>
            <p className="mt-8 text-xs glass-muted">
              Доступно на iOS, Android, Windows, macOS
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Footer: on desktop, break out of the constrained div to full page width */}
      <div className="lg:-ml-16 lg:w-screen lg:relative lg:z-[10]">
        <Footer />
      </div>
    </section>
  );
}
