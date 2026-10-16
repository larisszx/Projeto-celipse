'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Sun, Activity, Zap, ShieldCheck, ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  onOpenPreOrder: () => void;
  onOpenSimulator: () => void;
}

export default function HeroSection({ onOpenPreOrder, onOpenSimulator }: HeroSectionProps) {
  return (
    <section id="hero" className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-cyan-600/15 via-blue-600/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 shadow-xl backdrop-blur-md mb-6 animate-in fade-in zoom-in duration-700">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs uppercase tracking-widest font-mono text-zinc-300">
            PROJETO MULTIDISCIPLINAR 2026 • CARAGUATATUBA / SP
          </span>
        </div>

        {/* Big Bold Apple-style Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4">
          <span className="text-apple-silver block">CELIPSE</span>
          <span className="text-2xl sm:text-3xl md:text-5xl font-semibold text-zinc-400 tracking-normal mt-2 block">
            Energia que renova a cada ciclo.
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-8">
          O primeiro smartphone premium com <span className="text-white font-medium">duas baterias autossustentáveis</span>. 
          Enquanto uma bateria alimenta suas ideias, a outra se recarrega automaticamente com a luz e os movimentos do seu dia. 
          Diga adeus às tomadas e aos carregadores para sempre.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenPreOrder}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,229,255,0.5)] transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <span>Reservar Edição Alpha</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenSimulator}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Play className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition" fill="currentColor" />
            <span>Ver Baterias em Ação</span>
          </button>
        </div>

        {/* Hero Device Showcase Showcase Image */}
        <div className="relative mx-auto max-w-5xl group">
          {/* Ambient Glow Box */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-amber-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 -z-10" />

          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-black p-3 sm:p-6 border border-zinc-800 shadow-2xl">
            {/* Real Triple Phone Render */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[560px] rounded-xl overflow-hidden flex items-center justify-center bg-[#101216]">
              <Image
                src="/assets/celipse_trio_smartphones.png"
                alt="Smartphone CELIPSE nas cores Titânio Escuro, Azul Noturno e Branco Cerâmica"
                fill
                priority
                className="object-contain p-2 sm:p-4 transition-transform duration-700 group-hover:scale-[1.02]"
              />
              
              {/* Dynamic Overlay callout for LED bar */}
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 glass-nav px-4 py-2 rounded-full border border-cyan-500/40 text-xs sm:text-sm text-zinc-200 flex items-center gap-2.5 shadow-2xl backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 celipse-led-bar" />
                <span className="font-medium">LED Traseiro Ativo:</span>
                <span className="text-zinc-400 hidden sm:inline">Bateria 1 operando • Bateria 2 recarregando via sol e movimento</span>
                <span className="text-cyan-400 font-mono text-[11px] sm:text-xs">100% AUTOSSUFICIENTE</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16 max-w-5xl mx-auto text-left">
          <div className="glass-card glass-card-hover p-4 sm:p-5 rounded-2xl">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-semibold text-white mb-1">Dupla Bateria Inteligente</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Enquanto uma bateria alimenta o uso, a outra recarrega automaticamente com alternância em 0ms.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-4 sm:p-5 rounded-2xl">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
              <Sun className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-semibold text-white mb-1">Captação Solar 360°</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Matriz fotovoltaica na traseira que gera energia contínua a partir do Sol e da luz ambiente interna.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-4 sm:p-5 rounded-2xl">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
              <Activity className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-semibold text-white mb-1">Energia Cinética</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              O movimento do seu caminhar e da sua rotina diária é convertido em miliwatts para as células.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-4 sm:p-5 rounded-2xl">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-semibold text-white mb-1">Zero Lixo Eletrônico</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Elimina cabos, fontes e trocas frequentes de baterias, alinhado com as diretrizes do SINIR e ANATEL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
