"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  RefreshCw 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TransformationJourney() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(1);

  const { currentState, engine, futureState, flowSteps } = t.transformation;

  return (
    <section id="transformation" className="relative py-24 bg-[#080e1c] border-t border-slate-800/80 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.transformation.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.transformation.title1} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400">
              {t.transformation.title2}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.transformation.description}
          </p>
        </div>

        {/* 3-COLUMN HORIZONTAL TRANSFORMATION DIAGRAM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* COLUMN 1: CURRENT STATE */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-[#111726] to-[#0a0f1d] border border-rose-500/20 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-rose-500/20">
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-400" />
                  <span className="text-xs font-mono font-bold tracking-widest text-rose-400 uppercase">
                    {currentState.badge}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Current Gaps</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {currentState.title}
              </h3>
              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                {currentState.subtitle}
              </p>

              <div className="space-y-3">
                {currentState.items.map((prob, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#0e1422] border border-slate-800 hover:border-rose-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                      <span className="text-xs font-semibold text-slate-200">{prob.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 pl-3.5 leading-snug">
                      {prob.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-center">
              <span className="text-[11px] text-rose-300/80 font-mono">
                {currentState.footer}
              </span>
            </div>
          </div>

          {/* COLUMN 2: HA-SOLUTIONS INTERVENTION (THE ENGINE) */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-[#0b162c] to-[#071021] border-2 border-cyan-400/50 p-6 shadow-[0_0_35px_rgba(6,182,212,0.25)] flex flex-col justify-between relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider shadow-md">
              {engine.engineTag}
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-cyan-500/20 pt-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
                    {engine.badge}
                  </span>
                </div>
                <span className="text-[10px] text-cyan-400/80 font-mono">Execution</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {engine.title}
              </h3>
              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                {engine.subtitle}
              </p>

              <div className="space-y-2.5">
                {engine.steps.map((step) => (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(step.num)}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                      activeStep === step.num
                        ? "bg-[#0e213d] border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                        : "bg-[#091326] border-slate-800 hover:border-cyan-500/40"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-cyan-400 text-slate-950 font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                        {step.num}
                      </span>
                      <span className="text-xs font-bold text-white">
                        {step.title}
                      </span>
                    </div>
                    {activeStep === step.num && (
                      <p className="text-[11px] text-cyan-200 mt-1.5 pl-7 leading-snug">
                        {step.detail}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-cyan-500/20 text-center">
              <span className="text-[11px] text-cyan-300 font-mono font-semibold">
                {engine.footer}
              </span>
            </div>
          </div>

          {/* COLUMN 3: FUTURE STATE */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-[#0e1d2c] to-[#08121d] border border-teal-500/30 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-teal-500/20">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  <span className="text-xs font-mono font-bold tracking-widest text-teal-300 uppercase">
                    {futureState.badge}
                  </span>
                </div>
                <span className="text-[10px] text-teal-400/80 font-mono">Future</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {futureState.title}
              </h3>
              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                {futureState.subtitle}
              </p>

              <div className="space-y-3">
                {futureState.items.map((imp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#091522] border border-slate-800 hover:border-teal-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      <span className="text-xs font-semibold text-slate-200">{imp.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 pl-3.5 leading-snug">
                      {imp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-center">
              <span className="text-[11px] text-teal-300 font-mono">
                {futureState.footer}
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM HORIZONTAL FLOW ARROW BAR */}
        <div className="hidden lg:flex items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <span>{flowSteps[0]}</span>
          <ArrowRight className="w-4 h-4 text-cyan-400" />
          <span>{flowSteps[1]}</span>
          <ArrowRight className="w-4 h-4 text-cyan-400" />
          <span>{flowSteps[2]}</span>
          <ArrowRight className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 font-bold">{flowSteps[3]}</span>
        </div>
      </div>
    </section>
  );
}
