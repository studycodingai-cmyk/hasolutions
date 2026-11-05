"use client";

import React, { useState } from "react";
import { 
  Headphones, 
  FileSpreadsheet, 
  GitMerge, 
  Bot, 
  Layers, 
  CheckCircle2, 
  AlertTriangle,
  Lightbulb,
  Check
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Headphones,
  FileSpreadsheet,
  GitMerge,
  Bot,
  Layers,
};

interface UseCasesProps {
  onOpenConsultation: (useCaseTitle?: string) => void;
}

export default function UseCases({ onOpenConsultation }: UseCasesProps) {
  const { t } = useLanguage();
  const [activeCaseId, setActiveCaseId] = useState<string>("customer-support");

  const activeCase =
    t.useCases.items.find((c) => c.id === activeCaseId) || t.useCases.items[0];
  const ActiveIcon = ICON_MAP[activeCase.iconName] || Bot;

  return (
    <section id="use-cases" className="relative py-24 bg-[#080d1a] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Lightbulb className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.useCases.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.useCases.title1} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400">
              {t.useCases.title2}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.useCases.description}
          </p>
        </div>

        {/* 5 USE CASES TABS / PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {t.useCases.items.map((uc) => {
            const Icon = ICON_MAP[uc.iconName] || Bot;
            const isActive = activeCaseId === uc.id;

            return (
              <button
                key={uc.id}
                onClick={() => setActiveCaseId(uc.id)}
                className={`px-4 py-3 rounded-xl border text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2.5 transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0e1f3d] border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                    : "bg-[#0a1222] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                <span>{uc.title}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE USE CASE SHOWCASE CARD */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0c1629] via-[#091021] to-[#070d18] border border-cyan-500/30 p-8 sm:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0f2140] border border-cyan-500/40 text-cyan-300 flex items-center justify-center shadow-lg">
                <ActiveIcon className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                    USE CASE {activeCase.number}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300 uppercase">
                    {activeCase.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {activeCase.title}
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/60 text-[11px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{t.useCases.blueprintBadge}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Situation & Problem */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-5 rounded-xl bg-[#0e1628] border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>{t.useCases.situationLabel}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeCase.scenario}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#141220] border border-rose-500/30">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-400 mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{t.useCases.problemLabel}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeCase.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0a1b24] border border-teal-500/30">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-teal-400 mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.useCases.expectedValueLabel}</span>
                </div>
                <p className="text-sm text-teal-200 font-semibold leading-relaxed">
                  {activeCase.expectedValue}
                </p>
              </div>
            </div>

            {/* Right: Potential Solution Breakdown */}
            <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#091224] border border-cyan-500/20">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-4">
                  {t.useCases.howItWorksLabel}
                </span>
                <div className="space-y-3.5">
                  {activeCase.solutionBreakdown.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-[#0d1a33] border border-slate-800/80"
                    >
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-mono text-center sm:text-left">
                  {t.useCases.ctaPrompt}
                </span>
                <button
                  onClick={() => onOpenConsultation(activeCase.title)}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all cursor-pointer whitespace-nowrap"
                >
                  {t.useCases.ctaButton}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CLARIFICATION NOTE */}
        <div className="mt-8 text-center text-xs text-slate-300 font-mono">
          {t.useCases.disclaimer}
        </div>
      </div>
    </section>
  );
}
