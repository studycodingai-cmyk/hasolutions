"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Activity, 
  Check,
  RefreshCw
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface DigitalMaturityQuizProps {
  onOpenConsultation: (customNote?: string) => void;
}

export default function DigitalMaturityQuiz({ onOpenConsultation }: DigitalMaturityQuizProps) {
  const { t } = useLanguage();
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState({
    processType: "",
    systemConnectivity: "",
    primaryGoal: "",
  });
  const [isCalculated, setIsCalculated] = useState(false);

  const handleSelect = (key: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsCalculated(true);
    }
  };

  const handleReset = () => {
    setAnswers({
      processType: "",
      systemConnectivity: "",
      primaryGoal: "",
    });
    setStep(1);
    setIsCalculated(false);
  };

  return (
    <section className="relative py-20 bg-tech-grid-dense bg-[#060a14] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#0c182d] via-[#091122] to-[#070d1a] border border-cyan-500/35 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.quiz.badge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {t.quiz.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              {t.quiz.subtitle}
            </p>
          </div>

          {!isCalculated ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8 max-w-md mx-auto">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                        step === num
                          ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                          : step > num
                          ? "bg-teal-500/30 text-teal-300 border border-teal-500/50"
                          : "bg-slate-800 text-slate-500"
                      }`}
                    >
                      {step > num ? <Check className="w-4 h-4" /> : num}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 hidden sm:inline uppercase">
                      {t.quiz.stepsLabel[num - 1]}
                    </span>
                    {num < 3 && <div className="w-8 sm:w-16 h-0.5 bg-slate-800 mx-1" />}
                  </div>
                ))}
              </div>

              {/* Question 1 */}
              {step === 1 && (
                <div className="space-y-4 max-w-2xl mx-auto animate-in fade-in duration-300">
                  <h4 className="text-base sm:text-lg font-bold text-white text-center mb-6">
                    {t.quiz.questions.q1.question}
                  </h4>
                  {t.quiz.questions.q1.options.map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => handleSelect("processType", opt.val)}
                      className="w-full p-4 rounded-xl text-left bg-[#0e1b33] border border-slate-700/80 hover:border-cyan-400/60 hover:bg-[#112344] text-xs sm:text-sm text-slate-200 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span>{opt.label}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}

              {/* Question 2 */}
              {step === 2 && (
                <div className="space-y-4 max-w-2xl mx-auto animate-in fade-in duration-300">
                  <h4 className="text-base sm:text-lg font-bold text-white text-center mb-6">
                    {t.quiz.questions.q2.question}
                  </h4>
                  {t.quiz.questions.q2.options.map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => handleSelect("systemConnectivity", opt.val)}
                      className="w-full p-4 rounded-xl text-left bg-[#0e1b33] border border-slate-700/80 hover:border-cyan-400/60 hover:bg-[#112344] text-xs sm:text-sm text-slate-200 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span>{opt.label}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}

              {/* Question 3 */}
              {step === 3 && (
                <div className="space-y-4 max-w-2xl mx-auto animate-in fade-in duration-300">
                  <h4 className="text-base sm:text-lg font-bold text-white text-center mb-6">
                    {t.quiz.questions.q3.question}
                  </h4>
                  {t.quiz.questions.q3.options.map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => handleSelect("primaryGoal", opt.val)}
                      className="w-full p-4 rounded-xl text-left bg-[#0e1b33] border border-slate-700/80 hover:border-cyan-400/60 hover:bg-[#112344] text-xs sm:text-sm text-slate-200 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span>{opt.label}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="max-w-2xl mx-auto animate-in zoom-in-95 duration-300">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#09152a] border border-cyan-400/40 text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>

                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                  {t.quiz.results.badge}
                </span>
                <h4 className="text-2xl font-black text-white mt-1">
                  {t.quiz.results.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {t.quiz.results.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 text-left">
                  <div className="p-3.5 rounded-xl bg-[#0c1c38] border border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 block font-bold">
                      {t.quiz.results.phase1Label}
                    </span>
                    <span className="text-xs font-bold text-white mt-1 block">
                      {t.quiz.results.phase1Val}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0c1c38] border border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 block font-bold">
                      {t.quiz.results.impactLabel}
                    </span>
                    <span className="text-xs font-bold text-teal-300 mt-1 block">
                      {t.quiz.results.impactVal}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() =>
                      onOpenConsultation(
                        `Diagnostic Assessment (Priority: ${answers.primaryGoal || "Digital Transformation"})`
                      )
                    }
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] cursor-pointer"
                  >
                    {t.quiz.results.ctaSchedule}
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-semibold text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{t.quiz.results.ctaRetake}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
