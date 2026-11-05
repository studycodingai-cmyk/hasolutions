"use client";

import React, { useState } from "react";
import { 
  GraduationCap, 
  ShoppingCart, 
  HeartPulse, 
  Building2, 
  Truck, 
  Factory, 
  Home, 
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  Building2,
  Truck,
  Factory,
  Home,
  Briefcase,
};

interface IndustriesProps {
  onOpenConsultation: (industryName?: string) => void;
}

export default function Industries({ onOpenConsultation }: IndustriesProps) {
  const { t } = useLanguage();
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>("education");

  const activeIndustry =
    t.industries.items.find((i) => i.id === selectedIndustryId) || t.industries.items[0];
  const ActiveIcon = ICON_MAP[activeIndustry.iconName] || Briefcase;

  return (
    <section id="industries" className="relative py-24 bg-[#070b15] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.industries.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.industries.title1} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400">
              {t.industries.title2}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.industries.description}
          </p>
        </div>

        {/* INDUSTRY SELECTOR BUTTONS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {t.industries.items.map((ind) => {
            const Icon = ICON_MAP[ind.iconName] || Briefcase;
            const isSelected = selectedIndustryId === ind.id;

            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`p-3 rounded-xl border text-left flex flex-col items-center sm:items-start justify-between transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#0f1d38] border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    : "bg-[#0a1120] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 ${isSelected ? "text-cyan-400" : "text-slate-400"}`} />
                <span className="text-xs font-semibold leading-tight line-clamp-2">
                  {ind.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE INDUSTRY DEEP-DIVE CARD */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0c1629] via-[#091122] to-[#070d1a] border border-cyan-500/30 p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 flex items-center justify-center">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                    {t.industries.sectorCapabilityLabel}
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {activeIndustry.name}
                  </h3>
                </div>
              </div>

              <p className="text-base text-slate-300 mb-6 leading-relaxed">
                {activeIndustry.tagline}
              </p>

              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  {t.industries.systemsWeBuildLabel}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeIndustry.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0e1930] border border-slate-800 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Value & Call to action */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#091224] border border-slate-800">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block font-semibold mb-2">
                  {t.industries.impactLabel}
                </span>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {activeIndustry.transformationImpact}
                </p>

                <div className="p-3.5 rounded-lg bg-[#060e1c] border border-slate-800/80 mb-6 text-xs text-slate-400 font-mono">
                  {t.industries.customizationNote}
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation(activeIndustry.name)}
                className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{t.industries.discussCta}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        </div>

        {/* COMPLIANCE DISCLAIMER */}
        <div className="mt-8 text-center text-xs text-slate-300 font-mono">
          {t.industries.disclaimer}
        </div>
      </div>
    </section>
  );
}
