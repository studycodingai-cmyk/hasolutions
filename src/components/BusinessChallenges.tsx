"use client";

import React from "react";
import { 
  Clock, 
  Network, 
  BarChart3, 
  FileText, 
  Users, 
  TrendingUp, 
  AlertCircle, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  Network,
  BarChart3,
  FileText,
  Users,
  TrendingUp,
};

interface BusinessChallengesProps {
  onOpenConsultation: () => void;
}

export default function BusinessChallenges({ onOpenConsultation }: BusinessChallengesProps) {
  const { t } = useLanguage();

  return (
    <section id="challenges" className="relative py-24 bg-[#080d19] border-t border-slate-800/80">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.challenges.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.challenges.title1} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
              {t.challenges.title2}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.challenges.description}
          </p>

          <p className="mt-2 text-sm sm:text-base font-medium text-cyan-300/90">
            {t.challenges.subDescription}
          </p>
        </div>

        {/* 6 CHALLENGE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.challenges.items.map((challenge) => {
            const Icon = ICON_MAP[challenge.iconName] || Clock;

            return (
              <div
                key={challenge.id}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0e172a] to-[#090f1d] border border-slate-800/90 hover:border-cyan-500/40 p-7 transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(6,182,212,0.25)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-cyan-400/80 bg-cyan-950/50 px-2.5 py-1 rounded border border-cyan-800/30">
                      #{challenge.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/60 group-hover:border-cyan-400/50 group-hover:bg-cyan-950/40 text-slate-300 group-hover:text-cyan-300 flex items-center justify-center transition-all">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-3">
                    {challenge.title}
                  </h3>

                  <p className="text-sm text-slate-300/90 leading-relaxed mb-5">
                    {challenge.problem}
                  </p>

                  <div className="pt-4 border-t border-slate-800/80 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Business Impact:
                    </span>
                    <ul className="space-y-1.5">
                      {challenge.businessImpact.map((impact, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400/80 mt-1.5 shrink-0" />
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block font-semibold">
                        POTENTIAL SOLUTION
                      </span>
                      <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {challenge.potentialSolution}
                      </span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all shrink-0">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM SECTION CTA STRIP */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0c1629] via-[#0f1d38] to-[#0c1629] border border-cyan-500/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 items-center justify-center text-cyan-300 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                {t.challenges.bannerQuestion}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                {t.challenges.bannerDesc}
              </p>
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all cursor-pointer whitespace-nowrap"
          >
            {t.challenges.bannerCta}
          </button>
        </div>
      </div>
    </section>
  );
}
