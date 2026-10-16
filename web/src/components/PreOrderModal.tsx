'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Shield, ArrowRight, Loader2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreOrderModal({ isOpen, onClose }: PreOrderModalProps) {
  const [model, setModel] = useState('celipse-pro');
  const [color, setColor] = useState('Titânio Escuro');
  const [storage, setStorage] = useState('512 GB');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityState, setCityState] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const models = [
    {
      id: 'celipse-one',
      name: 'Celipse One',
      price: 'R$ 4.899,00',
      tag: 'Bateria Autossustentável 4.600mAh + 4.600mAh',
    },
    {
      id: 'celipse-pro',
      name: 'Celipse Pro',
      price: 'R$ 6.499,00',
      tag: 'Edição Mais Desejada • Perovskita 360° & Levitação Cinética',
      popular: true,
    },
    {
      id: 'celipse-ultra-gold',
      name: 'Celipse Eclipse Gold 18k',
      price: 'R$ 8.299,00',
      tag: 'Edição Limitada de Colecionador • Ouro Titânio PVD',
    },
  ];

  const colors = [
    'Titânio Escuro',
    'Azul Noturno Metálico',
    'Branco Cerâmica Lunar',
    'Dourado Eclipse 18k'
  ];

  const storages = ['256 GB', '512 GB', '1 TB'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      fullName,
      email,
      phone,
      cityState,
      productId: model,
      productName: models.find((m) => m.id === model)?.name || 'Celipse Pro',
      colorName: color,
      storage,
    };

    try {
      const res = await fetch('/api/orders/pre-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        setConfirmedOrder(data);
      } else {
        // Fallback local code if offline
        setConfirmedOrder({
          reservationCode: `CELIPSE-ALPHA-${Math.floor(10000 + Math.random() * 90000)}`,
          productName: payload.productName,
          colorName: color,
          storage,
          fullName,
          email,
          estimatedDeliveryWindow: 'Lote Alpha — Dezembro / 2026',
        });
      }

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      setConfirmedOrder({
        reservationCode: `CELIPSE-ALPHA-${Math.floor(10000 + Math.random() * 90000)}`,
        productName: payload.productName,
        colorName: color,
        storage,
        fullName,
        email,
        estimatedDeliveryWindow: 'Lote Alpha — Dezembro / 2026',
      });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopyCode = () => {
    if (confirmedOrder?.reservationCode) {
      navigator.clipboard.writeText(confirmedOrder.reservationCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmedOrder ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full inline-block mb-2">
                Reserva Oficial • Lote Alpha 2026
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Garanta o seu <span className="text-celipse-cyan">Celipse</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Prioridade de entrega sem cobrança antecipada. Você só paga quando o lote for despachado.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Model Choice */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block mb-2">
                  1. Selecione o Modelo:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {models.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => setModel(m.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition relative flex flex-col justify-between ${
                        model === m.id
                          ? 'bg-zinc-900 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.2)]'
                          : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      {m.popular && (
                        <span className="absolute -top-2 right-3 text-[9px] font-bold uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-500 text-black">
                          Popular
                        </span>
                      )}
                      <div>
                        <div className="font-bold text-sm text-white">{m.name}</div>
                        <div className="text-[11px] text-zinc-400 mt-1 line-clamp-2">{m.tag}</div>
                      </div>
                      <div className="text-xs font-mono font-bold text-cyan-400 mt-3">{m.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Choice */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block mb-2">
                  2. Acabamento & Cor:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {colors.map((c) => (
                    <button
                      type="button"
                      key={c}
                      onClick={() => setColor(c)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition ${
                        color === c
                          ? 'bg-zinc-800 border-cyan-400 text-white shadow-md'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Storage Choice */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block mb-2">
                  3. Armazenamento:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {storages.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setStorage(s)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition ${
                        storage === s
                          ? 'bg-zinc-800 border-cyan-400 text-white shadow-md'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* User Information */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block">
                  4. Dados para a Fila Prioritária:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Seu Nome Completo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Seu Melhor E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp / Telefone com DDD"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Cidade / UF (Ex: Caraguatatuba/SP)"
                    value={cityState}
                    onChange={(e) => setCityState(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Sem compromisso financeiro imediato.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-950 bg-white hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Registrando...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirmar Reserva</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 animate-in zoom-in-95 duration-400">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              Reserva Confirmada com Sucesso!
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mb-6">
              Parabéns, {confirmedOrder.fullName}! Você garantiu seu lugar no primeiro lote de produção do CELIPSE.
            </p>

            {/* Voucher Card */}
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-zinc-900 border border-cyan-500/40 text-left space-y-3 mb-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                <span className="text-[10px] font-mono uppercase text-zinc-400">CÓDIGO DE RESERVA:</span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-mono"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>

              <div className="text-xl font-mono font-black text-white tracking-wider">
                {confirmedOrder.reservationCode}
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-zinc-800/80">
                <div>
                  <span className="text-zinc-500 block">Dispositivo:</span>
                  <span className="text-zinc-200 font-medium">{confirmedOrder.productName}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Cor & Memória:</span>
                  <span className="text-zinc-200 font-medium">{confirmedOrder.colorName} • {confirmedOrder.storage}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Janela Prevista:</span>
                  <span className="text-emerald-400 font-medium">{confirmedOrder.estimatedDeliveryWindow}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">E-mail:</span>
                  <span className="text-zinc-200 truncate font-mono">{confirmedOrder.email}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition"
            >
              Concluir & Fechar
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
