'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Eye, Layers, ShieldCheck, Check } from 'lucide-react';

export default function DeviceViewer3D() {
  const [selectedColor, setSelectedColor] = useState<'titanium-dark' | 'midnight-blue' | 'ceramic-white' | 'gold-edition'>('titanium-dark');
  const [activeView, setActiveView] = useState<'triple' | 'back' | 'front'>('triple');

  const colors = [
    {
      id: 'titanium-dark',
      name: 'Titânio Escuro',
      subtitle: 'Acabamento escovado aeroespacial em grafite e preto acetinado',
      bgPreview: 'bg-zinc-800',
      ringColor: 'ring-zinc-400',
      accentGlow: 'from-zinc-500/20',
      bodyColor: '#1A1C20',
      textColor: 'text-zinc-200'
    },
    {
      id: 'midnight-blue',
      name: 'Azul Noturno Metálico',
      subtitle: 'Pigmentação mineral profunda inspirada no manto celeste da meia-noite',
      bgPreview: 'bg-[#1C283B]',
      ringColor: 'ring-blue-400',
      accentGlow: 'from-blue-600/20',
      bodyColor: '#1C283B',
      textColor: 'text-blue-200'
    },
    {
      id: 'ceramic-white',
      name: 'Branco Cerâmica Lunar',
      subtitle: 'Vidro nano-cristalino branco perolado com reflexos lunares',
      bgPreview: 'bg-[#EDEDEE]',
      ringColor: 'ring-zinc-200',
      accentGlow: 'from-zinc-200/20',
      bodyColor: '#E8E8E9',
      textColor: 'text-zinc-800'
    },
    {
      id: 'gold-edition',
      name: 'Dourado Eclipse 18k',
      subtitle: 'Edição de colecionador com logotipo e aro folheados em ouro titânio',
      bgPreview: 'bg-gradient-to-r from-amber-400 to-amber-600',
      ringColor: 'ring-amber-400',
      accentGlow: 'from-amber-500/25',
      bodyColor: '#2B261D',
      textColor: 'text-amber-300'
    }
  ];

  const currentColor = colors.find((c) => c.id === selectedColor)!;

  return (
    <section id="design" className="py-24 bg-[#08090B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & Concept Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/60 text-xs text-zinc-300 font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Design Inspirado na Simetria do Eclipse
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Forjado em titânio. <span className="text-apple-silver">Lapidado para o futuro.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light">
            Três tons impecáveis desenvolvidos através de tratamentos físico-químicos em câmara de vácuo (PVD). 
            Estrutura unibody ultrafina, toque aveludado e resistência sem precedentes.
          </p>
        </div>

        {/* View mode selector pills */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md">
            <button
              onClick={() => setActiveView('triple')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                activeView === 'triple' ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Visão Tripla (Lineup)
            </button>
            <button
              onClick={() => setActiveView('back')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                activeView === 'back' ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Traseira com LED & Câmeras
            </button>
            <button
              onClick={() => setActiveView('front')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                activeView === 'front' ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Display Frontal OLED
            </button>
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-black p-6 sm:p-12 border border-zinc-800/80 shadow-2xl flex flex-col items-center justify-center min-h-[520px]">
          
          {/* Ambient colored glow responding to chosen color */}
          <div className={`absolute inset-0 bg-gradient-to-b ${currentColor.accentGlow} to-transparent opacity-40 blur-3xl rounded-3xl pointer-events-none transition-all duration-700`} />

          {/* VIEW: TRIPLE */}
          {activeView === 'triple' && (
            <div className="w-full max-w-4xl relative aspect-[16/9] flex items-center justify-center animate-in fade-in duration-500">
              <Image
                src="/assets/celipse_trio_smartphones.png"
                alt="Celipse Trio de Cores"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              />
            </div>
          )}

          {/* VIEW: BACK DETAIL */}
          {activeView === 'back' && (
            <div className="flex flex-col items-center animate-in zoom-in-95 duration-500">
              {/* Phone Mockup Body with selected color */}
              <div 
                className="w-72 h-[480px] rounded-[48px] p-4 border-[6px] border-zinc-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative flex flex-col justify-between items-center transition-all duration-500"
                style={{ backgroundColor: currentColor.bodyColor }}
              >
                {/* Vertical Camera Module */}
                <div className="w-14 h-28 rounded-full bg-black/95 border-2 border-zinc-600/80 p-1.5 flex flex-col justify-between items-center shadow-2xl mt-1">
                  <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center relative">
                    <div className="w-4 h-4 rounded-full bg-blue-950/80 border border-cyan-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-zinc-800 border border-zinc-600" />
                  </div>
                </div>

                {/* Vertical Brand Lettering */}
                <div className="absolute right-5 top-20 flex flex-col gap-1 text-[11px] font-bold tracking-widest text-zinc-500/70 select-none">
                  {'CELIPSE'.split('').map((char, i) => (
                    <span key={i}>{char}</span>
                  ))}
                </div>

                {/* Eclipse Emblem */}
                <div className="my-auto flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                      <circle cx="16" cy="20" r="10" fill={selectedColor === 'gold-edition' ? '#D4AF37' : '#9CA3AF'} />
                      <path d="M22 6 L25 15 L34 16 L27 22 L30 31 L21 26 L14 32 L16 23 L9 18 L18 16 Z" fill={selectedColor === 'gold-edition' ? '#FDE68A' : '#D1D5DB'} />
                    </svg>
                  </div>
                </div>

                {/* Rear LED Dual-Battery Indicator Bar */}
                <div className="w-full px-8 pb-4 flex flex-col items-center">
                  <div className="w-32 h-2.5 rounded-full bg-zinc-950 border border-zinc-700 flex gap-0.5 p-0.5 shadow-inner">
                    <div className="w-1/2 h-full rounded-l-full bg-cyan-400 celipse-led-bar" />
                    <div className="w-1/2 h-full rounded-r-full bg-zinc-800 opacity-40" />
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase mt-2">
                    CÉLULA 1 ATIVA • CÉLULA 2 RECARREGANDO
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: FRONT OLED DISPLAY */}
          {activeView === 'front' && (
            <div className="flex flex-col items-center animate-in zoom-in-95 duration-500">
              <div className="w-72 h-[480px] rounded-[48px] bg-black p-2.5 border-[6px] border-zinc-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative flex flex-col justify-between overflow-hidden">
                {/* Wallpaper background: Deep Space with Eclipse curvature */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#05060A] to-black">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-cyan-500/20 shadow-[0_0_60px_rgba(0,229,255,0.2)]" />
                </div>

                {/* Top Notch / Dynamic Island */}
                <div className="relative z-10 w-full flex justify-between items-center px-4 pt-2 text-[10px] text-zinc-400 font-mono">
                  <span className="text-white font-semibold">9:03</span>
                  <div className="w-20 h-4 rounded-full bg-black border border-zinc-800 mx-auto flex items-center justify-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-700" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span>5G</span>
                    <span className="text-cyan-400 font-bold">100% ∞</span>
                  </div>
                </div>

                {/* Center Lockscreen Clock */}
                <div className="relative z-10 text-center my-auto">
                  <div className="text-5xl font-light text-white tracking-tight">9:03</div>
                  <div className="text-xs text-zinc-300 font-medium mt-1">Terça-feira, 19 de Outubro</div>
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[10px] text-cyan-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>Ciclo Infinito: 412 dias sem tomada</span>
                  </div>
                </div>

                {/* Bottom shortcuts & swipe bar */}
                <div className="relative z-10 px-4 pb-2">
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-xs">
                      🔦
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-xs">
                      📷
                    </div>
                  </div>
                  <div className="w-28 h-1 rounded-full bg-zinc-400 mx-auto" />
                </div>
              </div>
            </div>
          )}

          {/* Color Selector Bar */}
          <div className="mt-10 flex flex-col items-center">
            <div className="flex items-center gap-4 p-2 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-xl backdrop-blur-md">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id as any)}
                  className={`group relative p-1 rounded-full transition-transform ${
                    selectedColor === color.id ? 'scale-110' : 'hover:scale-105'
                  }`}
                  title={color.name}
                >
                  <div className={`w-8 h-8 rounded-full ${color.bgPreview} shadow-md flex items-center justify-center border border-white/20`}>
                    {selectedColor === color.id && (
                      <Check className={`w-4 h-4 ${color.id === 'ceramic-white' ? 'text-zinc-900' : 'text-white'}`} />
                    )}
                  </div>
                  <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium py-0.5 px-2 rounded bg-zinc-800 text-zinc-200 pointer-events-none transition opacity-0 group-hover:opacity-100 shadow-lg`}>
                    {color.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-4 text-center">
              <div className="text-sm font-semibold text-white">{currentColor.name}</div>
              <div className="text-xs text-zinc-400 font-light mt-0.5">{currentColor.subtitle}</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
