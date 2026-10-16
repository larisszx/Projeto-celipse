'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Share2, Instagram, Linkedin, QrCode, ArrowUpRight, Sparkles } from 'lucide-react';

export default function MarketingFlyerSection() {
  const [activeMedia, setActiveMedia] = useState<'flyer' | 'instagram' | 'linkedin' | 'tiktok'>('flyer');

  return (
    <section id="midia" className="py-24 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Divulgação & Marca
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            A presença global da <span className="text-apple-silver">Celipse</span>.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light">
            Estratégia integrada de marketing com forte apelo visual, engajamento massivo nas redes sociais e materiais publicitários de alto padrão.
          </p>
        </div>

        {/* Media Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-1.5 p-1 rounded-full bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setActiveMedia('flyer')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition ${
                activeMedia === 'flyer' ? 'bg-cyan-500 text-zinc-950 font-bold shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Panfleto Oficial
            </button>
            <button
              onClick={() => setActiveMedia('instagram')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition flex items-center gap-1.5 ${
                activeMedia === 'instagram' ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" /> Instagram (@celipseoficial)
            </button>
            <button
              onClick={() => setActiveMedia('linkedin')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition flex items-center gap-1.5 ${
                activeMedia === 'linkedin' ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn Institucional
            </button>
            <button
              onClick={() => setActiveMedia('tiktok')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition ${
                activeMedia === 'tiktok' ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              TikTok Oficial (67M)
            </button>
          </div>
        </div>

        {/* Media Preview Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-zinc-950 border border-zinc-800 p-4 sm:p-8 shadow-2xl flex flex-col items-center">
          
          {activeMedia === 'flyer' && (
            <div className="w-full flex flex-col md:flex-row items-center gap-8 animate-in fade-in duration-500">
              <div className="relative w-full md:w-1/2 aspect-[9/14] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-black">
                <Image
                  src="/assets/celipse_flyer.jpg"
                  alt="Panfleto Oficial Celipse"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="w-full md:w-1/2 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-300 text-xs font-mono uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Peça Publicitária Oficial
                </div>
                
                <h3 className="text-2xl font-bold text-white">
                  "CELIPSE — Energia para acompanhar sua rotina."
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  Criado com iluminação circular e contraste metálico, o panfleto destaca os pilares fundamentais:
                </p>

                <ul className="space-y-2.5 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <strong>Nunca fique sem conexão:</strong> Autonomia ininterrupta.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <strong>Desempenho Inteligente:</strong> Fluidez sem travamentos.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <strong>Câmeras de Alta Definição:</strong> Lentes de cristal safira.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <strong>Segurança & Privacidade:</strong> Criptografia quântica ponta a ponta.
                  </li>
                </ul>

                <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <QrCode className="w-8 h-8 text-cyan-400" />
                    <div className="text-xs">
                      <div className="font-semibold text-white">QR Code Promocional</div>
                      <div className="text-zinc-400">Escaneie no panfleto e ganhe uma surpresa!</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-bold">CELIPSE.COM</span>
                </div>
              </div>
            </div>
          )}

          {activeMedia === 'instagram' && (
            <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
              <div className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-black">
                <Image
                  src="/assets/celipse_instagram.png"
                  alt="Instagram Oficial da Celipse"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm font-semibold text-white">@celipseoficial no Instagram</span>
                <p className="text-xs text-zinc-400 mt-0.5">Comunidade com 67 milhões de entusiastas e cobertura dos lançamentos</p>
              </div>
            </div>
          )}

          {activeMedia === 'linkedin' && (
            <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
              <div className="relative w-full max-w-lg aspect-[10/16] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-black">
                <Image
                  src="/assets/celipse_linkedin.png"
                  alt="LinkedIn Institucional Celipse"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm font-semibold text-white">Página Corporativa no LinkedIn</span>
                <p className="text-xs text-zinc-400 mt-0.5">Tecnologia, Informação e Internet • São Paulo, SP</p>
              </div>
            </div>
          )}

          {activeMedia === 'tiktok' && (
            <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
              <div className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-black">
                <Image
                  src="/assets/celipse_tiktok.png"
                  alt="TikTok Oficial Celipse"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm font-semibold text-white">@celipseoficial no TikTok</span>
                <p className="text-xs text-zinc-400 mt-0.5">42 Milhões de curtidas nos vídeos de unboxing e demonstração do LED traseiro</p>
              </div>
            </div>
          )}

        </div>

        {/* Logos Showcase */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-800 shadow-xl group">
            <Image
              src="/assets/celipse_logo_silver.jpg"
              alt="Logotipo Celipse Prata Metálico"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-mono text-zinc-300">Identidade Prata / Eclipse Metálico</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-800 shadow-xl group">
            <Image
              src="/assets/celipse_logo_gold.jpg"
              alt="Logotipo Celipse Dourado"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-mono text-amber-300">Edição Especial Dourado Eclipse</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
