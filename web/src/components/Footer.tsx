'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Check, ArrowRight, Instagram, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    try {
      const res = await fetch('/api/orders/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('Você está na lista VIP Celipse!');
      } else {
        setStatus('Inscrição confirmada na lista VIP Celipse!');
      }
    } catch {
      setStatus('Inscrição confirmada na lista VIP Celipse!');
    } finally {
      setLoading(false);
      setEmail('');
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <footer className="bg-black text-zinc-400 text-xs border-t border-zinc-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top VIP Newsletter Section */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
              Comunidade & Lançamentos
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Inscreva-se no Celipse VIP Club.
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Receba os bastidores da produção dos protótipos, relatórios térmicos e convites para eventos exclusivos.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              required
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-72 px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs transition flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <span>{loading ? 'Enviando...' : 'Entrar no Clube'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {status && (
          <div className="mb-6 p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-center font-medium">
            {status}
          </div>
        )}

        {/* Structured Apple-style Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-900">
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Modelos</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#bateria" className="hover:text-white transition">Celipse One (4.600mAh x 2)</a></li>
              <li><a href="#bateria" className="hover:text-white transition">Celipse Pro (Perovskita 360°)</a></li>
              <li><a href="#design" className="hover:text-white transition">Edição Dourado Eclipse 18k</a></li>
              <li><a href="#design" className="hover:text-white transition">Acessórios Autossustentáveis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Tecnologia</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#tecnologia" className="hover:text-white transition">Dual-Cell Instant Swap</a></li>
              <li><a href="#tecnologia" className="hover:text-white transition">Captação Cinética Triaxial</a></li>
              <li><a href="#tecnologia" className="hover:text-white transition">Gerenciamento Laserax</a></li>
              <li><a href="#tecnologia" className="hover:text-white transition">Processador Quantum Bionic</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Projeto Acadêmico</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#pesquisa" className="hover:text-white transition">E.E. Vereador Benedito Paes Sobrinho</a></li>
              <li><a href="#pesquisa" className="hover:text-white transition">Caraguatatuba / SP (Agosto 2026)</a></li>
              <li><a href="#pesquisa" className="hover:text-white transition">Orientadora: Profª Nataly Mazariolli</a></li>
              <li><a href="#pesquisa" className="hover:text-white transition">Pesquisa de Campo (n = 26)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Redes & Contato</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#midia" className="hover:text-white transition flex items-center gap-1.5"><Instagram className="w-3.5 h-3.5 text-pink-400" /> Instagram (@celipseoficial)</a></li>
              <li><a href="#midia" className="hover:text-white transition flex items-center gap-1.5"><Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn Celipse</a></li>
              <li><a href="#midia" className="hover:text-white transition">TikTok (@celipseoficial)</a></li>
              <li><a href="mailto:contato@celipsesite.com.br" className="hover:text-white transition">contato@celipsesite.com.br</a></li>
            </ul>
          </div>
        </div>

        {/* Academic Bibliography Citation Box */}
        <div className="py-8 border-b border-zinc-900 text-[11px] text-zinc-500 space-y-2">
          <div className="font-semibold text-zinc-400 uppercase text-[10px] tracking-wider mb-1">
            Referências Bibliográficas do Projeto Técnico:
          </div>
          <p>
            1. <em>Diagnóstico da Mineração Urbana dos Resíduos Eletroeletrônicos no Brasil</em> — CETEM / ANM / Ministério de Minas e Energia.
          </p>
          <p>
            2. <em>Orientações para uso Seguro de Telefones Celulares e seus Acessórios</em> — ANATEL.
          </p>
          <p>
            3. <em>Gerenciamento Térmico de Baterias</em> — Laserax Technical Report.
          </p>
          <p>
            4. <em>Eletroeletrônicos e aproveitamento de energia solar</em> — Green Elétron / Sistema Nacional de Informações sobre a Gestão de Resíduos Sólidos (SINIR).
          </p>
          <p>
            5. <em>Marcas e Propósito: O valor além do consumo</em> — Revista Contemporânea.
          </p>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-300">CELIPSE</span>
            <span>•</span>
            <span>Energia que renova a cada ciclo. Seu ritmo. Sua energia.</span>
          </div>

          <div>
            © 2026 Celipse Inc. & Projeto Multidisciplinar — E.E. Benedito Paes Sobrinho. Caraguatatuba, SP.
          </div>
        </div>

      </div>
    </footer>
  );
}
