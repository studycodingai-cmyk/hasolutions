"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight, CheckCircle2, Clock, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTopic?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  preselectedTopic,
}: ConsultationModalProps) {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: preselectedTopic || "Digital Transformation",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedTopic) {
      setFormState((prev) => ({ ...prev, service: preselectedTopic }));
    }
  }, [preselectedTopic]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/studycodingai@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[cungcapgiaiphap.com] Đặt lịch tư vấn (Modal) từ ${formState.name} - ${formState.company}`,
          _template: "table",
          _captcha: "false",
          "Họ và tên": formState.name,
          "Email liên hệ": formState.email,
          "Doanh nghiệp / Tổ chức": formState.company,
          "Lĩnh vực quan tâm": formState.service,
          "Mục tiêu / Ghi chú": formState.notes || "Không có ghi chú thêm",
          "Nguồn gửi": "Modal Đặt Lịch Tư Vấn - https://cungcapgiaiphap.com",
          "Thời gian gửi": new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
        }),
      });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-[#0e1b33] via-[#091122] to-[#070d1a] border border-cyan-400/40 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.85)] z-10 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                {t.modal.badge}
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                {t.modal.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {t.modal.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t.modal.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070d18] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t.modal.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070d18] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t.modal.companyLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    placeholder="Company Ltd."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070d18] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t.modal.serviceLabel}
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070d18] border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="AI Solutions & Intelligent Automation">AI & Automation</option>
                    <option value="System Integration">System Integration</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Operational Readiness Audit">Readiness & Architecture Audit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {t.modal.notesLabel}
                </label>
                <textarea
                  rows={3}
                  value={formState.notes}
                  onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                  placeholder={t.modal.notesPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070d18] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>{t.modal.submittingBtn}</span>
                  ) : (
                    <>
                      <span>{t.modal.submitBtn}</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-cyan-400" /> {t.modal.ndaNote}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan-400" /> {t.modal.responseNote}
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-cyan-400/20 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              {t.modal.successBadge}
            </span>
            <h4 className="text-2xl font-black text-white mt-1">
              {t.modal.successTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
              {t.modal.successDesc}
            </p>
            <div className="mt-4 p-3 rounded-xl bg-[#091426] border border-cyan-500/20 text-xs text-slate-300 font-mono flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{t.modal.statusText}</span>
            </div>
            <button
              onClick={handleResetAndClose}
              className="mt-6 px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer"
            >
              {t.modal.doneBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
