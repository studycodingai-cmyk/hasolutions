"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Cpu, 
  Workflow, 
  Code2, 
  ArrowUpRight,
  Layers
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Cpu,
  Workflow,
  Code2,
};

interface SolutionsProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export default function Solutions({ onOpenConsultation }: SolutionsProps) {
  const { t } = useLanguage();
  const [selectedServiceId, setSelectedServiceId] = useState<string>("digital-transformation");

  return (
    <section id="solutions" className="relative py-24 bg-[#070c17] border-t border-slate-800/80">
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.solutions.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.solutions.title1} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400">
              {t.solutions.title2}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.solutions.description}
          </p>
        </div>

        {/* 4 CORE SERVICE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {t.solutions.items.map((service) => {
            const Icon = ICON_MAP[service.iconName] || Sparkles;
            const isSelected = selectedServiceId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`relative rounded-2xl bg-gradient-to-b from-[#0c1426] to-[#080e1d] border p-8 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "border-cyan-400/60 shadow-[0_0_35px_rgba(6,182,212,0.2)]"
                    : "border-slate-800 hover:border-slate-700 hover:bg-[#0e172a]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0e1a30] border border-cyan-500/30 text-cyan-300 flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono tracking-widest text-cyan-400/80 uppercase font-semibold">
                          SERVICE {service.number}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3 font-mono">
                      {t.solutions.capabilitiesLabel}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#111e38] text-slate-200 border border-slate-700/60 hover:border-cyan-400/40 transition-colors"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="p-4 rounded-xl bg-[#091122] border border-slate-800 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block font-semibold mb-1">
                      {t.solutions.businessValueLabel}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {service.businessValue}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                    <span className="text-xs text-slate-400 font-mono">
                      {t.solutions.implementationLabel}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenConsultation(service.title);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-cyan-200 group/btn"
                    >
                      <span>{t.solutions.exploreCta}</span>
                      <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM PHILOSOPHY CALLOUT */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0a1222] via-[#0d1a33] to-[#0a1222] border border-slate-800 text-center max-w-4xl mx-auto">
          <p className="text-base text-slate-300 font-medium leading-relaxed">
            {t.solutions.philosophyQuote}
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>{t.solutions.philosophyAuthor}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
