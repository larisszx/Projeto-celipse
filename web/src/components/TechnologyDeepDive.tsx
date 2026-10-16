'use client';

import React from 'react';
import { Cpu, Sun, Activity, Flame, Shield, Camera, Layers, Zap, Recycle } from 'lucide-react';

export default function TechnologyDeepDive() {
  return (
    <section id="tecnologia" className="py-24 bg-gradient-to-b from-[#08090B] via-zinc-950 to-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Engenharia de Ponta
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            A ciência por trás do <span className="text-apple-silver">impossível</span>.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light">
            O Celipse reúne os mais avançados conceitos de nanotecnologia, conversão de energia ambiental e arquitetura de silício proprietária.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Quantum Bionic Chip (Large 8 cols) */}
          <div className="lg:col-span-8 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 sm:p-10 relative overflow-hidden group hover:border-zinc-700 transition duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition duration-500" />
            
            <div className="flex items-center gap-2 text-cyan-400 mb-4 text-xs font-mono tracking-wider uppercase">
              <Cpu className="w-4 h-4" /> Arquitetura de Silício de 3nm
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Processador Celipse Quantum Bionic.
            </h3>
            
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mb-6">
              Desenvolvido para erradicar os travamentos e a perda de fluidez presentes em smartphones convencionais. 
              Um motor neural de 16 núcleos gerencia a carga e descarga das baterias enquanto executa tarefas pesadas com 40% menos consumo energético.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">16 Core</div>
                <div className="text-xs text-zinc-400 mt-1">Neural Engine</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">+65%</div>
                <div className="text-xs text-zinc-400 mt-1">Eficiência de Carga</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">0ms</div>
                <div className="text-xs text-zinc-400 mt-1">Latência de Troca</div>
              </div>
            </div>
          </div>

          {/* Card 2: Perovskite Solar Cells (4 cols) */}
          <div className="lg:col-span-4 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-700 transition duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-2 text-amber-400 mb-4 text-xs font-mono tracking-wider uppercase">
                <Sun className="w-4 h-4" /> Fotovoltaica Transparente
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Matriz Solar Perovskita.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Incorporada sob o vidro cerâmico traseiro, converte tanto raios ultravioleta externos quanto a luz LED de ambientes fechados em energia pura.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">Rendimento de Conversão</span>
              <span className="text-lg font-bold text-amber-400 font-mono">31.8%</span>
            </div>
          </div>

          {/* Card 3: Kinetic Energy Harvester (4 cols) */}
          <div className="lg:col-span-4 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-700 transition duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-400 mb-4 text-xs font-mono tracking-wider uppercase">
                <Activity className="w-4 h-4" /> Micro-Dínamo Triaxial
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Geração Cinética Ativa.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Pêndulos em levitação magnética e materiais piezoelétricos captam a inércia dos seus passos e movimentos cotidianos, enviando micro-pulsos para a bateria reserva.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">Sensibilidade de Movimento</span>
              <span className="text-lg font-bold text-blue-400 font-mono">0.05 G</span>
            </div>
          </div>

          {/* Card 4: Laserax Thermal Management (4 cols) */}
          <div className="lg:col-span-4 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-700 transition duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-orange-400 mb-4 text-xs font-mono tracking-wider uppercase">
                <Flame className="w-4 h-4" /> Gerenciamento Térmico
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Sistema Laserax Termoelétrico.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Baseado em estudos sobre controle térmico de baterias, o Celipse dissipa calor uniformemente e aproveita o gradiente de temperatura para recarga suplementar.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">Delta Térmico Máximo</span>
              <span className="text-lg font-bold text-orange-400 font-mono">&lt; 32 °C</span>
            </div>
          </div>

          {/* Card 5: Sustainable Circular Tech (4 cols) */}
          <div className="lg:col-span-4 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-700 transition duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 mb-4 text-xs font-mono tracking-wider uppercase">
                <Recycle className="w-4 h-4" /> Mineração Urbana & SINIR
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Sustentabilidade Real.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Elimina 100% dos adaptadores de parede, cabos descartáveis e a troca precoce de baterias viciadas. 98% dos componentes são recicláveis em ciclo fechado.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">Lixo Eletrônico Reduzido</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">-100% Cabos</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
