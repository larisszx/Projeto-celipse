'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, BatteryCharging, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenPreOrder: () => void;
  onOpenSimulator: () => void;
}

export default function Navbar({ onOpenPreOrder, onOpenSimulator }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Visão Geral', href: '#hero' },
    { name: 'Dupla Bateria', href: '#bateria' },
    { name: 'Design & Cores', href: '#design' },
    { name: 'Tecnologia Solar/Cinética', href: '#tecnologia' },
    { name: 'Pesquisa & Viabilidade', href: '#pesquisa' },
    { name: 'Ecosistema', href: '#midia' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-white/5 py-1.5 px-4 text-center text-xs tracking-wide text-zinc-300 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium">
          <Sparkles className="w-3 h-3 text-cyan-400" /> Inovação 2026
        </span>
        <span>Apresentando o <strong>CELIPSE</strong> — o primeiro smartphone com dupla bateria autossustentável.</span>
        <button 
          onClick={onOpenPreOrder}
          className="hidden sm:inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4 ml-1 transition"
        >
          Garantir Edição Alpha <ChevronRight className="w-3 h-3 ml-0.5" />
        </button>
      </div>

      {/* Main Glass Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Symbol */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700/60 shadow-inner group-hover:border-cyan-500/50 transition">
              {/* Eclipse SVG Emblem */}
              <svg className="w-5 h-5 text-zinc-200 group-hover:text-cyan-400 transition" viewBox="0 0 40 40" fill="none">
                <circle cx="16" cy="20" r="10" fill="currentColor" fillOpacity="0.9" />
                <path d="M22 6 L25 15 L34 16 L27 22 L30 31 L21 26 L14 32 L16 23 L9 18 L18 16 Z" fill="url(#starGlow)" />
                <defs>
                  <linearGradient id="starGlow" x1="9" y1="6" x2="34" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FDE68A" />
                    <stop offset="0.5" stopColor="#E2E8F0" />
                    <stop offset="1" stopColor="#00E5FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-[0.25em] text-white uppercase group-hover:text-cyan-300 transition">
                CELIPSE
              </span>
              <span className="text-[9px] tracking-widest text-zinc-400 uppercase -mt-1 font-mono">
                INFINITE ENERGY
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSimulator}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/60 hover:bg-cyan-900/50 hover:border-cyan-600 transition"
              title="Testar alternância de bateria e captação solar/cinética"
            >
              <BatteryCharging className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Simulador</span>
            </button>

            <button
              onClick={onOpenPreOrder}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-900 bg-white hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all duration-300 transform hover:scale-[1.02]"
            >
              Reservar
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenPreOrder}
              className="px-3 py-1 rounded-full text-[11px] font-semibold text-zinc-900 bg-white"
            >
              Reservar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-400 hover:text-white"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden glass-nav mt-3 px-6 py-6 border-t border-zinc-800 space-y-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-300 hover:text-cyan-400 py-1 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSimulator();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/80"
              >
                <BatteryCharging className="w-4 h-4" /> Abrir Simulador de Bateria
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPreOrder();
                }}
                className="w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-900 bg-white"
              >
                Reservar Agora (Lote Alpha)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
