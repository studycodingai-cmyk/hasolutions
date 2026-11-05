"use client";

import React, { useState } from "react";
import { 
  Compass, 
  Search, 
  PenTool, 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const STEP_ICONS = [Compass, Search, PenTool, Cpu, TrendingUp];

export default function OurApproach() {
  const { t } = useLanguage();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps = t.approach.items;
  const currentStep = steps[activeStepIndex] || steps[0];
  const StepIcon = STEP_ICONS[activeStepIndex] || Compass;

  return (
    <section id="approach" className="relative py-24 bg-[#070b15] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.approach.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.approach.title1} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400">
              {t.approach.title2}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.approach.description}
          </p>
        </div>

        {/* 5-STEP HORIZONTAL CONNECTED TIMELINE */}
        <div className="relative mb-14">
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-slate-800 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((item, index) => {
              const Icon = STEP_ICONS[index] || Compass;
              const isSelected = activeStepIndex === index;

              return (
                <div
                  key={item.number}
                  onClick={() => setActiveStepIndex(index)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-start ${
                    isSelected
                      ? "bg-[#0f1d38] border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.3)] transform -translate-y-1"
                      : "bg-[#0a1120] border-slate-800 hover:border-slate-700 hover:bg-[#0c1426]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-4">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-cyan-400 text-slate-950"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      STEP {item.number}
                    </span>
                    <Icon className={`w-5 h-5 ${isSelected ? "text-cyan-400" : "text-slate-400"}`} />
                  </div>

                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-400/80 uppercase">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 leading-snug">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* ACTIVE STEP DEEP DIVE EXPANDED VIEW */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0c1629] via-[#091122] to-[#070e1b] border border-cyan-500/30 p-8 sm:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left overview */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 flex items-center justify-center">
                  <StepIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                      PHASE {currentStep.number}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase">
                      • {currentStep.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-slate-300 mb-6 leading-relaxed">
                {currentStep.summary}
              </p>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  {t.approach.activitiesLabel}
                </span>
                <div className="space-y-2.5">
                  {currentStep.activities.map((act, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#0e1930] border border-slate-800 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Deliverable & Next Step */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#091224] border border-slate-800">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block font-semibold mb-2">
                  {t.approach.deliverableLabel}
                </span>
                <div className="p-4 rounded-xl bg-[#0e1c36] border border-cyan-500/30 text-white font-bold text-sm mb-6">
                  {currentStep.deliverable}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {t.approach.deliverableNote}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {t.approach.stepCounter} {activeStepIndex + 1} / 5
                </span>
                <button
                  onClick={() =>
                    setActiveStepIndex((prev) => (prev + 1) % steps.length)
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-cyan-200"
                >
                  <span>{t.approach.nextStepBtn}</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
