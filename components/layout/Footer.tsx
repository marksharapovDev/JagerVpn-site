import Image from "next/image";
import { Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Логотип JagerVPN"
                width={28}
                height={28}
                className="h-7 w-auto"
              />
              <span className="font-bold text-primary">{SITE_CONFIG.siteName}</span>
            </div>
            <p className="text-sm text-muted">{SITE_CONFIG.tagline}</p>
          </div>

          {/* Navigation column */}
          <nav className="flex flex-col gap-2 sm:items-center">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-all duration-300 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Telegram links column */}
          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href={SITE_CONFIG.telegramBot}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-all duration-300 hover:text-primary"
            >
              <Send size={14} />
              Telegram Бот
            </a>
            <a
              href={SITE_CONFIG.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-all duration-300 hover:text-primary"
            >
              <Send size={14} />
              Telegram Канал
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted">
            © {currentYear} {SITE_CONFIG.siteName}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
