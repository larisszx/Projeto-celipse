'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, GraduationCap, BarChart3, Users, FileCheck, CheckCircle, ChevronRight } from 'lucide-react';

export default function AcademicPaperSection() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const authors = [
    'Ana Cláudia Bezerra da Mota',
    'Lara Procópio dos Santos Vicente',
    'Larissa Procópio dos Santos Vicente',
    'Laura Bevilaqua Nascimento Santos',
    'Laysla dos Santos Alves',
    'Nicolas Teixeira da Silva Vieira Pinho'
  ];

  const questions = [
    {
      num: 'Pergunta 07',
      title: 'Você gostaria que criassem um celular com bateria autossustentável?',
      sample: '26 participantes',
      insight: 'Aprovação esmagadora: 88,5% do público respondeu positivamente à proposta pioneira da Celipse.',
      bars: [
        { label: 'Com certeza', percent: 46.2, color: 'bg-emerald-500' },
        { label: 'Sim', percent: 42.3, color: 'bg-cyan-500' },
        { label: 'Não', percent: 7.7, color: 'bg-red-500' },
        { label: 'Não sei responder', percent: 3.8, color: 'bg-zinc-600' },
      ]
    },
    {
      num: 'Pergunta 02',
      title: 'Você acha que as baterias dos celulares de hoje em dia têm durabilidade agradável?',
      sample: '26 participantes',
      insight: '88,5% dos entrevistados sofrem com a inconstância e curta duração das baterias tradicionais.',
      bars: [
        { label: 'Às vezes', percent: 50.0, color: 'bg-amber-500' },
        { label: 'Raramente', percent: 30.8, color: 'bg-red-500' },
        { label: 'Frequentemente', percent: 11.5, color: 'bg-cyan-500' },
        { label: 'Nunca', percent: 7.7, color: 'bg-blue-600' },
      ]
    },
    {
      num: 'Pergunta 04',
      title: 'O que você preferiria mudar em seu celular atual?',
      sample: '26 participantes',
      insight: 'Durabilidade da bateria e poder de processamento lideram os desejos do consumidor.',
      bars: [
        { label: 'Durabilidade da bateria', percent: 26.9, color: 'bg-cyan-500' },
        { label: 'Processamento / Fluidez', percent: 26.9, color: 'bg-amber-500' },
        { label: 'Melhor Vida Útil do Aparelho', percent: 23.1, color: 'bg-purple-500' },
        { label: 'Qualidade da Câmera', percent: 15.4, color: 'bg-emerald-500' },
        { label: 'Outros / Upgrade geral', percent: 7.7, color: 'bg-blue-400' },
      ]
    },
    {
      num: 'Pergunta 09',
      title: 'Você acredita que um celular premium autossustentável faria diferença no seu dia a dia?',
      sample: '26 participantes',
      insight: 'Mais de 76% veem impacto direto na produtividade e tranquilidade na rotina.',
      bars: [
        { label: 'Muita diferença', percent: 53.8, color: 'bg-emerald-500' },
        { label: 'Diferença razoável', percent: 23.1, color: 'bg-amber-500' },
        { label: 'Não sei responder', percent: 11.5, color: 'bg-zinc-600' },
        { label: 'Pouca diferença', percent: 7.7, color: 'bg-red-500' },
        { label: 'Não faria diferença', percent: 3.9, color: 'bg-blue-600' },
      ]
    },
    {
      num: 'Pergunta 10',
      title: 'Você estaria disposto a investir um valor mais alto por um celular premium autossustentável?',
      sample: '26 participantes',
      insight: 'Mercado altamente receptivo a produtos de alta tecnologia e proposta ecológica comprovada.',
      bars: [
        { label: 'Moderadamente disposto', percent: 34.6, color: 'bg-amber-500' },
        { label: 'Muito disposto', percent: 19.2, color: 'bg-cyan-500' },
        { label: 'Não estaria disposto', percent: 19.2, color: 'bg-blue-600' },
        { label: 'Pouco disposto', percent: 15.4, color: 'bg-red-500' },
        { label: 'Totalmente disposto', percent: 11.5, color: 'bg-purple-500' },
      ]
    },
    {
      num: 'Pergunta 11',
      title: 'Você gostaria que essa inovação fosse criada e realizada comercialmente?',
      sample: '26 participantes',
      insight: '80,8% dos participantes expressaram desejo veemente de ver o produto no mercado.',
      bars: [
        { label: 'Com certeza', percent: 42.3, color: 'bg-emerald-500' },
        { label: 'Sim', percent: 38.5, color: 'bg-cyan-500' },
        { label: 'Talvez', percent: 11.5, color: 'bg-amber-500' },
        { label: 'Não / Indeciso', percent: 7.7, color: 'bg-zinc-600' },
      ]
    }
  ];

  return (
    <section id="pesquisa" className="py-24 bg-zinc-950 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-10 border-b border-zinc-800 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-700 p-2 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Image
                src="/assets/celipse_school_crest.png"
                alt="Brasão E.E. Benedito Paes Sobrinho"
                width={44}
                height={44}
                className="object-contain filter invert opacity-90"
              />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                Fundamentação Científica & Pesquisa de Mercado
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                E.E. Vereador Benedito Paes Sobrinho
              </h2>
              <div className="text-xs text-zinc-400">
                Técnico em Administração Integrado ao Ensino Médio • Caraguatatuba / SP • Agosto de 2026
              </div>
            </div>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-right">
            <div className="text-[11px] text-zinc-400">Orientação Acadêmica:</div>
            <div className="text-sm font-semibold text-white">Profª Nataly Mazariolli</div>
          </div>
        </div>

        {/* Authors Badges */}
        <div className="my-8">
          <div className="text-xs font-mono uppercase text-zinc-400 mb-3 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-cyan-400" /> Autores do Projeto Multidisciplinar:
          </div>
          <div className="flex flex-wrap gap-2.5">
            {authors.map((author) => (
              <span
                key={author}
                className="px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-200 flex items-center gap-2 hover:border-cyan-500/40 transition"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {author}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Survey Results Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          {/* Question Tabs (Left 4 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono uppercase text-zinc-400 mb-2">
              Resultados Coletados na Pesquisa de Campo (n = 26):
            </div>
            {questions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => setActiveQuestion(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  activeQuestion === idx
                    ? 'bg-zinc-900 border-cyan-500/60 shadow-lg text-white'
                    : 'bg-zinc-950/40 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                }`}
              >
                <div className="pr-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-400 uppercase block mb-1">
                    {q.num}
                  </span>
                  <p className="text-xs font-medium line-clamp-1">{q.title}</p>
                </div>
                <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${activeQuestion === idx ? 'text-cyan-400 translate-x-1' : 'text-zinc-600'}`} />
              </button>
            ))}
          </div>

          {/* Question Chart Detail (Right 7 cols) */}
          <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                  {questions[activeQuestion].num}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {questions[activeQuestion].sample}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                {questions[activeQuestion].title}
              </h3>

              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200 mb-6 flex items-start gap-2">
                <FileCheck className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span><strong>Conclusão da Análise:</strong> {questions[activeQuestion].insight}</span>
              </div>

              {/* Animated Horizontal Bar Chart */}
              <div className="space-y-4">
                {questions[activeQuestion].bars.map((bar, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-xs text-zinc-300">
                      <span>{bar.label}</span>
                      <span className="font-mono font-bold text-white">{bar.percent}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden p-0.5">
                      <div
                        className={`h-full rounded-full ${bar.color} transition-all duration-700 ease-out`}
                        style={{ width: `${bar.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>Metodologia: Bibliográfica e Exploratória</span>
              <span>Fonte: Formulário de Pesquisa Celipse</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
