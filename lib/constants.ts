export interface Country {
  name: string;
  flag: string;
  isPopular: boolean;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  siteName: string;
  tagline: string;
  telegramBot: string;
  telegramChannel: string;
  navLinks: NavLink[];
  countries: Country[];
}

// ─────────────────────────────────────────────
// SITE CONFIGURATION
// To update Telegram links, change telegramBot and telegramChannel below.
// ─────────────────────────────────────────────
export const SITE_CONFIG: SiteConfig = {
  siteName: "JagerVPN",
  tagline: "Опьяняющая скрорость.",

  telegramBot: "https://t.me/JagerVPN_bot",
  telegramChannel: "https://t.me/jagervpn",

  navLinks: [
    { label: "Главная", href: "#hero" },
    { label: "Возможности", href: "#features" },
    { label: "Страны", href: "#countries" },
    { label: "Тарифы", href: "#pricing" },
  ],

  countries: [
    { name: "Нидерланды", flag: "🇳🇱", isPopular: true, description: "Стабильный канал без потерь пакетов — надёжное соединение круглосуточно." },
    { name: "Россия", flag: "🇷🇺", isPopular: false, description: "Низкая задержка и мгновенный пинг — идеально для онлайн-игр." },
    { name: "Швеция", flag: "🇸🇪", isPopular: false, description: "Максимальная скорость без ограничений — свобода от любых блокировок." },
    { name: "Финляндия", flag: "🇫🇮", isPopular: false, description: "Быстрое соединение без цензуры — открытый интернет без фильтров." },
  ],
};
