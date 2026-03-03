"use client";

// TODO: replace /logo.svg with actual logo file

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Small timeout lets the Sheet close before scrolling
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-md hidden md:block"
      style={{ backgroundColor: "rgba(13, 17, 23, 0.8)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 transition-all duration-300 hover:opacity-80"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
          >
            <Image
              src="/logo.svg"
              alt="JagerVPN logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-lg font-bold text-primary">
              {SITE_CONFIG.siteName}
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm text-muted transition-all duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("#cta")}
              className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(0,229,160,0.3)]"
            >
              Подключиться
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="text-muted transition-all duration-300 hover:text-foreground"
                  aria-label="Открыть меню"
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-64 border-border bg-surface"
              >
                <SheetTitle className="sr-only">Меню навигации</SheetTitle>
                <nav className="mt-8 flex flex-col gap-4">
                  {SITE_CONFIG.navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-left text-base text-muted transition-all duration-300 hover:text-primary"
                    >
                      {link.label}
                    </button>
                  ))}
                  <button
                    onClick={() => handleNavClick("#cta")}
                    className="mt-4 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary-dark"
                  >
                    Подключиться
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
