"use client";

import React, { useState } from "react";
import { 
  Bot, 
  Code2, 
  Zap, 
  Workflow, 
  BarChart3, 
  Cloud,
  Activity
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const NODE_POSITIONS = [
  { id: "ai", icon: Bot, x: 72, y: 18, placement: "top-right" as const },
  { id: "integration", icon: Workflow, x: 86, y: 48, placement: "top-right" as const },
  { id: "cloud", icon: Cloud, x: 74, y: 78, placement: "bottom-right" as const },
  { id: "analytics", icon: BarChart3, x: 48, y: 88, placement: "bottom-right" as const },
  { id: "automation", icon: Zap, x: 22, y: 70, placement: "bottom-left" as const },
  { id: "software", icon: Code2, x: 18, y: 35, placement: "top-left" as const },
];

export default function HeroEcosystemVisual() {
  const { t } = useLanguage();
  const [activeNodeId, setActiveNodeId] = useState<string>("ai");

  const nodes = t.hero.ecosystem.nodes.map((n) => {
    const meta = NODE_POSITIONS.find((p) => p.id === n.id) || NODE_POSITIONS[0];
    return {
      ...n,
      icon: meta.icon,
      x: meta.x,
      y: meta.y,
      placement: meta.placement,
    };
  });

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  const centerX = 50;
  const centerY = 48;

  return (
    <div className="relative w-full max-w-[560px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial from-cyan-500/15 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* SVG Canvas for guide circles & connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        <defs>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Orbit Guide Ring */}
        <circle
          cx={centerX}
          cy={centerY}
          r="38"
          fill="none"
          stroke="rgba(6, 182, 212, 0.12)"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />

        {/* Secondary Orbit Guide Ring */}
        <circle
          cx={centerX}
          cy={centerY}
          r="26"
          fill="none"
          stroke="rgba(148, 163, 184, 0.08)"
          strokeWidth="0.4"
        />

        {/* Radial Connection Lines */}
        {nodes.map((node) => {
          const isActive = activeNodeId === node.id;
          return (
            <g key={node.id}>
              <line
                x1={centerX}
                y1={centerY}
                x2={node.x}
                y2={node.y}
                stroke={isActive ? "rgba(34, 211, 238, 0.7)" : "rgba(6, 182, 212, 0.22)"}
                strokeWidth={isActive ? "0.9" : "0.5"}
                strokeDasharray={isActive ? "none" : "1.5 2"}
                filter={isActive ? "url(#glowFilter)" : undefined}
                className="transition-all duration-300"
              />

              {isActive && (
                <circle
                  cx={(centerX + node.x) / 2}
                  cy={(centerY + node.y) / 2}
                  r="0.8"
                  fill="#22d3ee"
                  filter="url(#glowFilter)"
                  className="animate-ping"
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* CENTRAL CORE NODE: HA-SOLUTIONS */}
      <div
        className="absolute z-20 flex flex-col items-center justify-center text-center cursor-pointer group"
        style={{ left: `${centerX}%`, top: `${centerY}%`, transform: "translate(-50%, -50%)" }}
      >
        <div className="absolute -inset-4 rounded-full border border-cyan-400/20 animate-pulse-ring pointer-events-none" />
        <div className="absolute -inset-1 rounded-full bg-cyan-500/20 blur-md pointer-events-none" />

        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#080e1d] border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.35)] flex flex-col items-center justify-center p-2 transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]">
          <div className="absolute inset-2 rounded-full border border-cyan-500/20" />
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-[12px] sm:text-[13px] font-black tracking-widest text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {t.hero.ecosystem.coreTitle}
            </span>
            <span className="text-[8px] sm:text-[9px] font-semibold tracking-wider text-cyan-400 uppercase mt-0.5">
              {t.hero.ecosystem.coreSub}
            </span>
            <div className="flex items-center gap-1 mt-1 text-[7px] text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{t.hero.ecosystem.coreStatus}</span>
            </div>
          </div>
        </div>
      </div>

      {/* RADIAL SATELLITE NODES */}
      {nodes.map((node) => {
        const Icon = node.icon;
        const isActive = activeNodeId === node.id;

        return (
          <div
            key={node.id}
            onClick={() => setActiveNodeId(node.id)}
            className="absolute z-30 group cursor-pointer transition-transform duration-300 hover:scale-110"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)"
            }}
          >
            <div className="relative flex flex-col items-center">
              {isActive && (
                <div className="absolute -inset-2 rounded-full bg-cyan-400/30 blur-md pointer-events-none" />
              )}

              <div
                className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-[#0b162c] border-2 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                    : "bg-[#091122] border border-slate-700/80 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 shadow-md"
                }`}
              >
                <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>

              <span
                className={`mt-1.5 text-[10px] sm:text-[11px] font-medium tracking-wide whitespace-nowrap transition-colors ${
                  isActive ? "text-cyan-300 font-semibold" : "text-slate-400 group-hover:text-slate-200"
                }`}
              >
                {node.label}
              </span>
            </div>

            {node.stat && (
              <div
                className={`hidden sm:flex absolute z-40 pointer-events-none transition-all duration-300 ${
                  node.placement === "top-right"
                    ? "left-full ml-3 bottom-1"
                    : node.placement === "bottom-right"
                    ? "left-full ml-3 top-0"
                    : node.placement === "bottom-left"
                    ? "right-full mr-3 top-2"
                    : "right-full mr-3 bottom-0"
                }`}
              >
                <div className="bg-[#0b1426]/90 backdrop-blur-md border border-cyan-500/30 rounded-lg px-3 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex flex-col whitespace-nowrap">
                  <span className="text-[14px] font-extrabold text-cyan-300 tracking-tight leading-none">
                    {node.stat}
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-[8px] font-bold text-slate-300 tracking-wider uppercase">
                      {node.sub}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* FLOATING TELEMETRY HUD */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-11/12 max-w-sm sm:max-w-md bg-[#091122]/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.7)] z-30 transition-all duration-300">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                {activeNode.tag}
              </span>
              <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                {t.hero.ecosystem.liveStatusText}
              </span>
            </div>
            <h4 className="text-[13px] font-bold text-white mt-1">
              {activeNode.title}
            </h4>
            <p className="text-[11px] text-slate-300 line-clamp-2 mt-0.5 leading-snug">
              {activeNode.description}
            </p>
          </div>
          <div className="flex flex-col items-end shrink-0 pl-2 border-l border-slate-800">
            <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
              {t.hero.ecosystem.capabilityText}
            </span>
            <span className="text-[11px] font-bold text-cyan-300 text-right mt-0.5 whitespace-nowrap">
              {activeNode.metrics}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
