"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040810] border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <Logo size="lg" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-6">
              {t.footer.brandDesc}
            </p>

            <div className="p-3.5 rounded-xl bg-[#080f1e] border border-cyan-500/20 max-w-sm">
              <span className="text-[10px] font-mono uppercase text-cyan-400 block font-bold">
                {t.footer.taglineBadge}
              </span>
              <p className="text-xs font-bold text-white mt-0.5">
                {t.footer.tagline}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                {t.footer.supportingStatement}
              </p>
              <div className="mt-3 pt-2.5 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                Email: <a href="mailto:studycodingai@gmail.com" className="text-cyan-300 hover:underline">studycodingai@gmail.com</a>
              </div>
            </div>
          </div>

          {/* SOLUTIONS COLUMN */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-4">
              {t.footer.solutionsTitle}
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {t.solutions.items.map((s) => (
                <li key={s.id}>
                  <a href="#solutions" className="hover:text-cyan-300 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* INDUSTRIES COLUMN */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-4">
              {t.footer.industriesTitle}
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {t.industries.items.slice(0, 6).map((ind) => (
                <li key={ind.id}>
                  <a href="#industries" className="hover:text-cyan-300 transition-colors">
                    {ind.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY & PRINCIPLES */}
          <div className="lg:col-span-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-4">
              {t.footer.approachTitle}
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#approach" className="hover:text-cyan-300 transition-colors">
                  {t.nav.approach}
                </a>
              </li>
              <li>
                <a href="#use-cases" className="hover:text-cyan-300 transition-colors">
                  {t.useCases.badge}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#challenges" className="hover:text-cyan-300 transition-colors">
                  {t.challenges.badge}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT STRIP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} HA-SOLUTIONS. {t.footer.rightsReserved}
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">{t.footer.security}</span>
            <span className="hover:text-slate-300 cursor-pointer">{t.footer.privacy}</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#0a1426] border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
