"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import HeroEcosystemVisual from "./HeroEcosystemVisual";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center bg-tech-grid hero-glow-radial overflow-hidden"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: HERO CONTENT */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* SMALL PROFESSIONAL BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1426] border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
              {t.hero.headlineLine1} <br />
              {t.hero.headlineLine2} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 glow-cyan-text">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            {/* SUPPORTING DESCRIPTION */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed mb-8">
              {t.hero.description}
              <span className="block mt-2 text-slate-400 font-light">
                {t.hero.descriptionSub}
              </span>
            </p>

            {/* CTA BUTTON GROUP */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-slate-950" />
              </button>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-[#0d1629]/80 border border-slate-700/80 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-[#111e38] transition-all"
              >
                {t.hero.secondaryCta}
              </a>
            </div>

            {/* TRUST & ASSURANCE MICRO-STATS */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">{t.hero.stats.stat1Title}</span>
                <p className="text-xs text-slate-400 mt-0.5">{t.hero.stats.stat1Desc}</p>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-cyan-400 tracking-tight">{t.hero.stats.stat2Title}</span>
                <p className="text-xs text-slate-400 mt-0.5">{t.hero.stats.stat2Desc}</p>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">{t.hero.stats.stat3Title}</span>
                <p className="text-xs text-slate-400 mt-0.5">{t.hero.stats.stat3Desc}</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TECHNOLOGY ECOSYSTEM VISUALIZATION */}
          <div className="lg:col-span-6 flex items-center justify-center pt-4 lg:pt-0">
            <HeroEcosystemVisual />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="mt-16 flex flex-col items-center justify-center text-center relative z-10">
        <a
          href="#challenges"
          className="group flex flex-col items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 group-hover:text-cyan-400">
            {t.hero.scrollText}
          </span>
          <div className="w-5 h-8 rounded-full border border-slate-700 group-hover:border-cyan-400/50 flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
