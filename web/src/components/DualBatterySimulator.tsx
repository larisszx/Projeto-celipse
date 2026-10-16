'use client';

import React, { useState, useEffect } from 'react';
import { 
  BatteryCharging, 
  Sun, 
  Activity, 
  Flame, 
  RotateCw, 
  CheckCircle2, 
  Sparkles, 
  Zap,
  Info,
  Radio
} from 'lucide-react';

export default function DualBatterySimulator() {
  const [activeCell, setActiveCell] = useState<'A' | 'B'>('A');
  const [batteryA, setBatteryA] = useState(88);
  const [batteryB, setBatteryB] = useState(94);
  const [solarLux, setSolarLux] = useState(35000);
  const [kineticSteps, setKineticSteps] = useState(4820);
  const [isSimulatingMotion, setIsSimulatingMotion] = useState(false);
  const [lastSwitched, setLastSwitched] = useState<string>('0ms atrás (Automático)');
  const [showNotification, setShowNotification] = useState<string | null>(null);

  // Dynamic watts calculated from lux and steps
  const solarWatts = +(0.8 + (solarLux / 50000) * 2.2).toFixed(2);
  const kineticWatts = isSimulatingMotion ? 3.4 : 1.6;
  const thermalWatts = 0.45;
  const totalHarvestWatts = +(solarWatts + kineticWatts + thermalWatts).toFixed(2);

  // Auto-drain active cell and charge standby cell over time
  useEffect(() => {
    const timer = setInterval(() => {
      if (activeCell === 'A') {
        // Battery A drains slowly while in use
        setBatteryA((prev) => Math.max(15, +(prev - 0.1).toFixed(1)));
        // Battery B charges from solar + kinetic
        setBatteryB((prev) => Math.min(100, +(prev + 0.25).toFixed(1)));
      } else {
        // Battery B drains
        setBatteryB((prev) => Math.max(15, +(prev - 0.1).toFixed(1)));
        // Battery A charges
        setBatteryA((prev) => Math.min(100, +(prev + 0.25).toFixed(1)));
      }
    }, 1500);

    return () => clearInterval(timer);
  }, [activeCell]);

  // Handle cell switch
  const handleToggleCell = async () => {
    const newCell = activeCell === 'A' ? 'B' : 'A';
    setActiveCell(newCell);
    setLastSwitched('Alternância instantânea realizada (0ms)');
    setShowNotification(`Célula ${newCell} agora ativa! LED traseiro sincronizado.`);
    setTimeout(() => setShowNotification(null), 3500);

    // Call NestJS API if available
    try {
      await fetch('/api/battery/toggle-cycle', { method: 'POST' });
    } catch {
      // client-side fallback
    }
  };

  const handleSimulateMotion = () => {
    setIsSimulatingMotion(true);
    setKineticSteps((prev) => prev + 150);
    if (activeCell === 'A') {
      setBatteryB((prev) => Math.min(100, +(prev + 2.0).toFixed(1)));
    } else {
      setBatteryA((prev) => Math.min(100, +(prev + 2.0).toFixed(1)));
    }
    setTimeout(() => setIsSimulatingMotion(false), 2000);
  };

  return (
    <section id="bateria" className="py-20 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 border-t border-b border-zinc-800/80 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-700/50 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" /> Sistema Dual-Cell Patenteado
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Duas baterias. <span className="text-celipse-cyan">Energia infinita.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light">
            O coração do Celipse é a alternância perfeita entre duas células independentes. 
            Enquanto uma bateria entrega todo o poder de processamento, a outra aproveita cada raio de sol e cada passo seu para recarregar.
          </p>
        </div>

        {/* Live Notification Toast */}
        {showNotification && (
          <div className="max-w-md mx-auto mb-6 px-4 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-200 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 animate-in fade-in slide-in-from-top-2">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>{showNotification}</span>
          </div>
        )}

        {/* Main Interactive Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Battery A Card */}
          <div className={`lg:col-span-4 p-6 sm:p-8 rounded-3xl transition-all duration-500 border ${
            activeCell === 'A' 
              ? 'bg-zinc-900/90 border-cyan-500/70 shadow-[0_0_40px_rgba(0,229,255,0.2)]' 
              : 'bg-zinc-950/60 border-zinc-800 opacity-80'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                <h3 className="text-lg font-bold text-white tracking-wide">Célula Alfa (Bateria 1)</h3>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider ${
                activeCell === 'A' 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              }`}>
                {activeCell === 'A' ? 'EM USO (ALIMENTANDO)' : 'RECARREGANDO'}
              </span>
            </div>

            {/* Gauge Display */}
            <div className="my-6 text-center">
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tight flex items-center justify-center gap-1">
                <span>{batteryA}</span>
                <span className="text-2xl text-zinc-400">%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-3 mt-4 overflow-hidden p-0.5 border border-zinc-700">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ${
                    activeCell === 'A' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gradient-to-r from-emerald-500 to-cyan-400'
                  }`}
                  style={{ width: `${batteryA}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-zinc-400 mt-2 font-mono">
                <span>Capacidade: 4.800 mAh</span>
                <span>Tensão: 4.15 V</span>
              </div>
            </div>

            {/* Cell status details */}
            <div className="space-y-2.5 pt-4 border-t border-zinc-800/80 text-xs text-zinc-300">
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">LED Indicador Traseiro:</span>
                <span className={`font-semibold flex items-center gap-1.5 ${activeCell === 'A' ? 'text-cyan-400' : 'text-zinc-500'}`}>
                  <span className={`w-2 h-2 rounded-full ${activeCell === 'A' ? 'bg-cyan-400 celipse-led-bar' : 'bg-zinc-600'}`} />
                  {activeCell === 'A' ? 'LIGADO (Lado A)' : 'DESLIGADO (Standby)'}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">Temperatura Operacional:</span>
                <span className="text-white font-mono">29.1 °C (Resfriamento Laserax)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">Saúde da Célula:</span>
                <span className="text-emerald-400 font-mono">100% (Degradação Zero)</span>
              </div>
            </div>
          </div>

          {/* Center Column: Phone Backplate Simulator with LED Bar */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            
            {/* Phone Silhouette Preview */}
            <div className="relative w-64 h-[440px] rounded-[42px] bg-gradient-to-b from-zinc-800 via-zinc-900 to-black p-3.5 border-4 border-zinc-700 shadow-2xl flex flex-col justify-between items-center group">
              
              {/* Dual Vertical Camera Pill */}
              <div className="w-14 h-28 rounded-full bg-black/90 border-2 border-zinc-600 p-1.5 flex flex-col justify-between items-center shadow-inner mt-2">
                <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center relative shadow-inner">
                  <div className="w-5 h-5 rounded-full bg-blue-950/80 border border-cyan-400/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-300/80 animate-ping" />
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center relative shadow-inner">
                  <div className="w-4 h-4 rounded-full bg-zinc-800 border border-zinc-600" />
                </div>
              </div>

              {/* Celipse Emblem Engraved */}
              <div className="my-auto flex flex-col items-center">
                <div className="w-10 h-10 relative flex items-center justify-center text-zinc-300">
                  <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                    <circle cx="16" cy="20" r="10" fill="#9CA3AF" />
                    <path d="M22 6 L25 15 L34 16 L27 22 L30 31 L21 26 L14 32 L16 23 L9 18 L18 16 Z" fill="#D1D5DB" />
                  </svg>
                </div>
                <span className="text-[10px] tracking-[0.3em] text-zinc-400 font-bold uppercase mt-1">
                  CELIPSE
                </span>
              </div>

              {/* REAR LED DUAL-BATTERY BAR (As seen in the document mockups!) */}
              <div className="w-full px-6 pb-6 flex flex-col items-center">
                <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 mb-2">
                  Status Dual-Cell LED
                </div>
                
                {/* The LED Bar: left side (Cell A), right side (Cell B) */}
                <div className="w-full h-3.5 rounded-full bg-zinc-950 border border-zinc-700 p-0.5 flex gap-1 shadow-inner">
                  {/* Left segment: Cell A */}
                  <div className={`flex-1 h-full rounded-l-full transition-all duration-300 flex items-center justify-center ${
                    activeCell === 'A' 
                      ? 'bg-cyan-400 celipse-led-bar' 
                      : 'bg-zinc-800 celipse-led-dim opacity-40'
                  }`}>
                    {activeCell === 'A' && <span className="text-[8px] font-bold text-black font-mono">A ON</span>}
                  </div>

                  {/* Right segment: Cell B */}
                  <div className={`flex-1 h-full rounded-r-full transition-all duration-300 flex items-center justify-center ${
                    activeCell === 'B' 
                      ? 'bg-cyan-400 celipse-led-bar' 
                      : 'bg-zinc-800 celipse-led-dim opacity-40'
                  }`}>
                    {activeCell === 'B' && <span className="text-[8px] font-bold text-black font-mono">B ON</span>}
                  </div>
                </div>

                <div className="flex justify-between w-full text-[9px] text-zinc-400 font-mono mt-1 px-1">
                  <span className={activeCell === 'A' ? 'text-cyan-400 font-bold' : ''}>Célula Alfa</span>
                  <span className={activeCell === 'B' ? 'text-cyan-400 font-bold' : ''}>Célula Beta</span>
                </div>
              </div>
            </div>

            {/* Interactive Toggle Button */}
            <button
              onClick={handleToggleCell}
              className="mt-6 px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] transition-all flex items-center gap-2 transform active:scale-95"
            >
              <RotateCw className="w-4 h-4 animate-spin-slow" />
              <span>Alternar Célula Manualmente</span>
            </button>
            <span className="text-[11px] text-zinc-500 mt-2 font-mono">
              {lastSwitched}
            </span>
          </div>

          {/* Right Column: Battery B Card */}
          <div className={`lg:col-span-4 p-6 sm:p-8 rounded-3xl transition-all duration-500 border ${
            activeCell === 'B' 
              ? 'bg-zinc-900/90 border-cyan-500/70 shadow-[0_0_40px_rgba(0,229,255,0.2)]' 
              : 'bg-zinc-950/60 border-zinc-800 opacity-80'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                <h3 className="text-lg font-bold text-white tracking-wide">Célula Beta (Bateria 2)</h3>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider ${
                activeCell === 'B' 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              }`}>
                {activeCell === 'B' ? 'EM USO (ALIMENTANDO)' : 'RECARREGANDO'}
              </span>
            </div>

            {/* Gauge Display */}
            <div className="my-6 text-center">
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tight flex items-center justify-center gap-1">
                <span>{batteryB}</span>
                <span className="text-2xl text-zinc-400">%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-3 mt-4 overflow-hidden p-0.5 border border-zinc-700">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ${
                    activeCell === 'B' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gradient-to-r from-emerald-500 to-cyan-400'
                  }`}
                  style={{ width: `${batteryB}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-zinc-400 mt-2 font-mono">
                <span>Capacidade: 4.800 mAh</span>
                <span>Tensão: 4.18 V</span>
              </div>
            </div>

            {/* Cell status details */}
            <div className="space-y-2.5 pt-4 border-t border-zinc-800/80 text-xs text-zinc-300">
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">LED Indicador Traseiro:</span>
                <span className={`font-semibold flex items-center gap-1.5 ${activeCell === 'B' ? 'text-cyan-400' : 'text-zinc-500'}`}>
                  <span className={`w-2 h-2 rounded-full ${activeCell === 'B' ? 'bg-cyan-400 celipse-led-bar' : 'bg-zinc-600'}`} />
                  {activeCell === 'B' ? 'LIGADO (Lado B)' : 'DESLIGADO (Standby)'}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">Taxa de Captação Atual:</span>
                <span className="text-emerald-400 font-mono font-bold">+{totalHarvestWatts} Watts em tempo real</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">Tempo para 100%:</span>
                <span className="text-white font-mono">~24 min de luz natural</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Energy Harvesting Controls & Sensors Simulator */}
        <div className="mt-16 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" /> Painel de Captação Ambiental
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Ajuste os parâmetros do ambiente para ver a captação de energia solar e cinética em ação.
              </p>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <CheckCircle2 className="w-4 h-4" /> Geração líquida positiva: +{totalHarvestWatts} W
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            
            {/* Control 1: Solar Lux Slider */}
            <div className="space-y-3 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-amber-400" /> Luz Solar e Ambiente
                </span>
                <span className="text-xs font-mono text-amber-400 font-bold">{solarLux.toLocaleString()} lux</span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="80000" 
                step="2500"
                value={solarLux}
                onChange={(e) => setSolarLux(Number(e.target.value))}
                className="w-full accent-amber-400 bg-zinc-800 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>Escritório (800 lux)</span>
                <span>Dia Claro (35k)</span>
                <span>Sol Pleno (80k)</span>
              </div>
              <div className="pt-2 text-[11px] text-zinc-400 flex justify-between border-t border-zinc-800">
                <span>Potência solar gerada:</span>
                <span className="text-amber-400 font-mono font-semibold">+{solarWatts} W</span>
              </div>
            </div>

            {/* Control 2: Kinetic Motion Trigger */}
            <div className="space-y-3 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-cyan-400" /> Movimento e Passos
                </span>
                <span className="text-xs font-mono text-cyan-400 font-bold">{kineticSteps.toLocaleString()} passos</span>
              </div>
              <button
                onClick={handleSimulateMotion}
                className={`w-full py-2.5 rounded-xl text-xs font-semibold tracking-wide border transition flex items-center justify-center gap-2 ${
                  isSimulatingMotion 
                    ? 'bg-cyan-500 text-zinc-950 border-cyan-400 animate-pulse' 
                    : 'bg-zinc-900 hover:bg-zinc-800 text-cyan-300 border-cyan-500/30'
                }`}
              >
                <Activity className={`w-4 h-4 ${isSimulatingMotion ? 'animate-bounce' : ''}`} />
                <span>{isSimulatingMotion ? 'Captando Movimento...' : 'Simular Movimento / Caminhada'}</span>
              </button>
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>Micro-dínamo piezoelétrico</span>
                <span>Captação triaxial</span>
              </div>
              <div className="pt-2 text-[11px] text-zinc-400 flex justify-between border-t border-zinc-800">
                <span>Potência cinética gerada:</span>
                <span className="text-cyan-400 font-mono font-semibold">+{kineticWatts} W</span>
              </div>
            </div>

            {/* Control 3: Thermal Recovery (Laserax) */}
            <div className="space-y-3 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-orange-400" /> Captação Térmica (Laserax)
                </span>
                <span className="text-xs font-mono text-orange-400 font-bold">36.5 °C corporal</span>
              </div>
              <div className="p-2.5 rounded-xl bg-orange-950/20 border border-orange-500/20 text-[11px] text-zinc-300">
                Converte calor corporal e dissipação passiva do processador em micro-voltagem contínua.
              </div>
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>Gerenciamento Térmico</span>
                <span>Eficiência 98.4%</span>
              </div>
              <div className="pt-2 text-[11px] text-zinc-400 flex justify-between border-t border-zinc-800">
                <span>Potência térmica gerada:</span>
                <span className="text-orange-400 font-mono font-semibold">+{thermalWatts} W</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
