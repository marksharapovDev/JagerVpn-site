import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import MatrixRain from "@/components/animations/MatrixRain";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.siteName} — ${SITE_CONFIG.tagline}`,
  description:
    "Защитите интернет-соединение с шифрованием военного уровня. Просматривайте анонимно, обходите ограничения и защищайте данные с JagerVPN.",
  keywords: ["VPN", "конфиденциальность", "безопасность", "анонимный браузинг", "JagerVPN"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="bg-background text-foreground antialiased">
        <MatrixRain />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
