"use client";

import React from "react";
import { 
  Target, 
  Sliders, 
  CheckCircle2, 
  Share2, 
  ShieldCheck, 
  Handshake, 
  Award
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Sliders,
  CheckCircle2,
  Share2,
  ShieldCheck,
  Handshake,
};

export default function WhyHaSolutions() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 bg-[#080d19] border-t border-slate-800/80">
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[350px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.why.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.why.title1} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400">
              {t.why.title2}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.why.description}
          </p>
        </div>

        {/* 6 PILLARS CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.why.items.map((reason) => {
            const Icon = ICON_MAP[reason.iconName] || Target;

            return (
              <div
                key={reason.number}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0e172a] to-[#090f1d] border border-slate-800 hover:border-cyan-500/40 p-8 transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(6,182,212,0.25)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-cyan-400/80 bg-cyan-950/50 px-2.5 py-1 rounded border border-cyan-800/30">
                      PILLAR {reason.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/60 group-hover:border-cyan-400/50 group-hover:bg-cyan-950/40 text-slate-300 group-hover:text-cyan-300 flex items-center justify-center transition-all">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block font-semibold mb-1">
                    {t.why.commitmentLabel}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {reason.keyFeature}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BRAND STATEMENT BANNER */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#0c1629] via-[#0e213d] to-[#0c1629] border border-cyan-500/30 text-center max-w-4xl mx-auto shadow-lg">
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 block font-bold mb-2">
            {t.why.statementBadge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {t.why.statementTitle}
          </h3>
          <p className="text-sm text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            {t.why.statementDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
