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

  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* GEOMETRIC EMBLEM */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        {/* Ambient Glow behind logo */}
        <div className="absolute inset-0 bg-cyan-400/25 rounded-xl blur-md group-hover:bg-cyan-400/40 transition-all duration-300" />

        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full drop-shadow-[0_0_12px_rgba(6,182,212,0.5)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="haGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
            <linearGradient id="haCoreGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Precision Enterprise Container */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="12"
            fill="#080e1d"
            stroke="rgba(34, 211, 238, 0.45)"
            strokeWidth="1.5"
            className="group-hover:stroke-cyan-300 transition-colors"
          />

          {/* Inner blueprint corner marks */}
          <path d="M6 10V6H10" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" strokeLinecap="round" />
          <path d="M38 10V6H34" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" strokeLinecap="round" />
          <path d="M6 34V38H10" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" strokeLinecap="round" />
          <path d="M38 34V38H34" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" strokeLinecap="round" />

          {/* STYLIZED "H" */}
          {/* Left Vertical of H */}
          <path
            d="M12 12V32"
            stroke="url(#haGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Middle Shared Vertical between H and A */}
          <path
            d="M21 12V32"
            stroke="url(#haGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Crossbar of H */}
          <path
            d="M12 22H21"
            stroke="url(#haCoreGlow)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#glowEffect)"
          />

          {/* STYLIZED "A" */}
          {/* Right Diagonal of A */}
          <path
            d="M21 12L31 32"
            stroke="url(#haGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Crossbar of A */}
          <path
            d="M19 25H27.5"
            stroke="url(#haCoreGlow)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* APEX GLOWING PULSE NODE */}
          <circle cx="21" cy="12" r="3" fill="#22d3ee" filter="url(#glowEffect)" />
          <circle cx="21" cy="12" r="1.5" fill="#ffffff" />
        </svg>
      </div>

      {/* BRAND TEXT */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className={`${textSizes[size]} font-black tracking-wider text-white group-hover:text-cyan-300 transition-colors`}>
            HA-SOLUTIONS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
        </div>
        {showTagline && (
          <span className="text-[9px] font-mono tracking-widest text-cyan-400 uppercase leading-none">
            {t.nav.tagline}
          </span>
        )}
      </div>
    </div>
  );
}
