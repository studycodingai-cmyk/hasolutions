"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function Logo({ className = "", size = "md", showTagline = true }: LogoProps) {
  const { t } = useLanguage();

  const dimension = size === "sm" ? 28 : size === "lg" ? 40 : 34;

  return (
    <div className={`inline-flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* BRAND EMBLEM (Rock-solid inline sizing so it never blows up) */}
      <div
        style={{
          width: `${dimension}px`,
          height: `${dimension}px`,
          minWidth: `${dimension}px`,
          minHeight: `${dimension}px`,
        }}
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-teal-400 to-cyan-600 p-[1.5px] shadow-[0_0_15px_rgba(6,182,212,0.45)] group-hover:shadow-[0_0_22px_rgba(34,211,238,0.7)] transition-all duration-300 shrink-0"
      >
        <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-teal-200 to-cyan-400 font-black text-sm tracking-tighter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            HA
          </span>
        </div>
      </div>

      {/* BRAND TEXT */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1">
          <span
            className={`${
              size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base sm:text-lg"
            } font-black tracking-wider text-white group-hover:text-cyan-300 transition-colors leading-tight`}
          >
            HA-SOLUTIONS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
        </div>
        {showTagline && (
          <span className="text-[9px] font-mono tracking-widest text-cyan-400 uppercase leading-none mt-0.5">
            {t.nav.tagline}
          </span>
        )}
      </div>
    </div>
  );
}
