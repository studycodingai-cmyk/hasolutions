"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Lock
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { submitConsultationRequest } from "@/lib/submitForm";

export default function FinalCTA() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "Digital Transformation",
    challenge: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const result = await submitConsultationRequest({
      name: formState.name,
      phone: formState.phone,
      email: formState.email,
      company: formState.company,
      service: formState.service,
      message: formState.challenge,
      source: "Form Chân Trang (FinalCTA) - https://cungcapgiaiphap.com",
    });

    setIsSubmitting(false);

    if (result.ok) {
      setIsSubmitted(true);
    } else {
      setErrorMessage(result.error || "Có lỗi xảy ra khi gửi yêu cầu.");
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#060a14] border-t border-slate-800/80 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN: VALUE PROPOSITION */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.finalCta.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              {t.finalCta.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400">
                {t.finalCta.title2}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              {t.finalCta.description}
            </p>

            {/* TRUST GUARANTEES LIST */}
            <div className="space-y-4 mb-8 w-full max-w-lg">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0b1424] border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-300 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {t.finalCta.assurances.item1Title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {t.finalCta.assurances.item1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0b1424] border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-300 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {t.finalCta.assurances.item2Title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {t.finalCta.assurances.item2Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0b1424] border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-300 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {t.finalCta.assurances.item3Title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {t.finalCta.assurances.item3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONSULTATION BOOKING FORM */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-gradient-to-b from-[#0d182d] via-[#091122] to-[#070d1a] border border-cyan-500/30 p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-4 mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                      {t.finalCta.form.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {t.finalCta.form.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.finalCta.form.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={t.finalCta.form.namePlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070d18] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.finalCta.form.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder={t.finalCta.form.phonePlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070d18] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.finalCta.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder={t.finalCta.form.emailPlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070d18] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.finalCta.form.companyLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder={t.finalCta.form.companyPlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070d18] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.finalCta.form.serviceLabel}
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070d18] border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {t.finalCta.form.servicesList.map((s) => (
                        <option key={s.val} value={s.val}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.finalCta.form.challengeLabel}
                    </label>
                    <textarea
                      rows={3}
                      value={formState.challenge}
                      onChange={(e) => setFormState({ ...formState, challenge: e.target.value })}
                      placeholder={t.finalCta.form.challengePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070d18] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/40 text-xs text-rose-300 text-center leading-relaxed">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>{t.finalCta.form.submittingBtn}</span>
                    ) : (
                      <>
                        <span>{t.finalCta.form.submitBtn}</span>
                        <ArrowRight className="w-4 h-4 text-slate-950" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-300 font-mono">
                    {t.finalCta.form.privacyNote}
                  </p>
                </form>
              ) : (
                <div className="py-12 text-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-cyan-400/20 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                    {t.finalCta.success.badge}
                  </span>
                  <h4 className="text-2xl font-black text-white mt-1">
                    {t.finalCta.success.title}, {formState.name || "Partner"}
                  </h4>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto mt-2 leading-relaxed">
                    {t.finalCta.success.message}
                  </p>
                  <div className="mt-8 p-4 rounded-xl bg-[#091426] border border-cyan-500/20 text-xs text-slate-300 font-mono flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{t.finalCta.success.statusText}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
