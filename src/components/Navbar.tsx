"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "./Logo";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.solutions, href: "#solutions" },
    { label: t.nav.industries, href: "#industries" },
    { label: t.nav.approach, href: "#approach" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070b14]/90 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* BRAND LOGO */}
          <a href="#hero">
            <Logo size="md" />
          </a>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTIONS: LANGUAGE SWITCHER + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* LANGUAGE SWITCHER */}
            <div className="flex items-center p-0.5 rounded-full bg-[#0a1426] border border-cyan-500/30 text-xs font-mono">
              <button
                type="button"
                onClick={() => setLocale("vi")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer font-bold ${
                  locale === "vi"
                    ? "bg-cyan-400 text-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Tiếng Việt"
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer font-bold ${
                  locale === "en"
                    ? "bg-cyan-400 text-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    : "text-slate-400 hover:text-white"
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* PRIMARY CTA BUTTON */}
            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-slate-950" />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE & QUICK LANG SWITCH */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center p-0.5 rounded-full bg-[#0a1426] border border-cyan-500/30 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setLocale("vi")}
                className={`px-2 py-0.5 rounded-full transition-all font-bold ${
                  locale === "vi"
                    ? "bg-cyan-400 text-slate-950"
                    : "text-slate-400"
                }`}
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-2 py-0.5 rounded-full transition-all font-bold ${
                  locale === "en"
                    ? "bg-cyan-400 text-slate-950"
                    : "text-slate-400"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b14]/98 border-b border-cyan-500/20 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wide text-slate-200 hover:text-cyan-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-1.5"
              >
                <span>{t.nav.cta}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
