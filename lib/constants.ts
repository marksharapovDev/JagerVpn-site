export interface Country {
  name: string;
  flag: string;
  isPopular: boolean;
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

  // TODO: replace placeholders with your real Telegram bot and channel links
  telegramBot: "https://t.me/YOUR_BOT",
  telegramChannel: "https://t.me/YOUR_CHANNEL",

  navLinks: [
    { label: "Главная", href: "#hero" },
    { label: "Возможности", href: "#features" },
    { label: "Страны", href: "#countries" },
    { label: "Тарифы", href: "#pricing" },
  ],

  countries: [
    { name: "Германия", flag: "🇩🇪", isPopular: true },
    { name: "США", flag: "🇺🇸", isPopular: true },
    { name: "Нидерланды", flag: "🇳🇱", isPopular: true },
    { name: "Великобритания", flag: "🇬🇧", isPopular: true },
    { name: "Франция", flag: "🇫🇷", isPopular: false },
    { name: "Япония", flag: "🇯🇵", isPopular: false },
    { name: "Сингапур", flag: "🇸🇬", isPopular: false },
    { name: "Канада", flag: "🇨🇦", isPopular: false },
    { name: "Швеция", flag: "🇸🇪", isPopular: false },
    { name: "Швейцария", flag: "🇨🇭", isPopular: false },
    { name: "ОАЭ", flag: "🇦🇪", isPopular: false },
    { name: "Польша", flag: "🇵🇱", isPopular: false },
  ],
};
