import { Injectable } from '@nestjs/common';

export interface SurveyQuestion {
  questionNumber: number;
  questionText: string;
  totalResponses: number;
  data: { label: string; percentage: number; count?: number; color: string }[];
  insight: string;
}

export interface ResearchData {
  title: string;
  institution: string;
  course: string;
  location: string;
  date: string;
  authors: string[];
  advisor: string;
  abstract: string;
  viabilitySummary: string;
  surveyResults: SurveyQuestion[];
}

@Injectable()
export class ResearchService {
  private readonly research: ResearchData = {
    title: 'CELIPSE — Smartphone Premium com Dupla Bateria Autossustentável',
    institution: 'E.E. Vereador Benedito Paes Sobrinho',
    course: 'Técnico em Administração Integrado ao Ensino Médio — Projeto Multidisciplinar',
    location: 'Caraguatatuba / SP',
    date: 'Agosto / 2026',
    authors: [
      'Ana Cláudia Bezerra da Mota',
      'Lara Procópio dos Santos Vicente',
      'Larissa Procópio dos Santos Vicente',
      'Laura Bevilaqua Nascimento Santos',
      'Laysla dos Santos Alves',
      'Nicolas Teixeira da Silva Vieira Pinho'
    ],
    advisor: 'Profª Nataly Mazariolli',
    abstract: 'O trabalho propõe o desenvolvimento de uma marca de dispositivos móveis com foco em inovação tecnológica e alto desempenho. O produto consiste em um smartphone premium, equipado com duas baterias autossustentáveis, projetadas para garantir funcionamento contínuo sem a necessidade de recargas convencionais por meio de energias solar e cinética.',
    viabilitySummary: 'A viabilidade do projeto é fundamentada no uso de tecnologias consolidadas de captação solar fotovoltaica e mecânica cinética em microescala. A pesquisa de mercado confirma alta receptividade: mais de 88% dos respondentes desejam e apoiam a criação do smartphone autossustentável.',
    surveyResults: [
      {
        questionNumber: 2,
        questionText: 'Você acha que as baterias dos celulares de hoje em dia têm uma durabilidade agradável?',
        totalResponses: 26,
        data: [
          { label: 'Às vezes', percentage: 50.0, color: '#F59E0B' },
          { label: 'Raramente', percentage: 30.8, color: '#EF4444' },
          { label: 'Frequentemente', percentage: 11.5, color: '#10B981' },
          { label: 'Nunca', percentage: 7.7, color: '#3B82F6' }
        ],
        insight: '88,5% dos usuários consideram a durabilidade atual inadequada ou inconstante.'
      },
      {
        questionNumber: 4,
        questionText: 'O que você preferiria mudar em seu celular?',
        totalResponses: 26,
        data: [
          { label: 'Durabilidade da bateria', percentage: 26.9, color: '#3B82F6' },
          { label: 'Processamento / Desempenho', percentage: 26.9, color: '#F59E0B' },
          { label: 'Melhor Vida Útil', percentage: 23.1, color: '#8B5CF6' },
          { label: 'Qualidade da câmera', percentage: 15.4, color: '#10B981' },
          { label: 'Outros / Mudança de modelo', percentage: 7.7, color: '#06B6D4' }
        ],
        insight: 'Bateria e processamento são as prioridades absolutas dos consumidores.'
      },
      {
        questionNumber: 5,
        questionText: 'Quais fatores você acha que as empresas deveriam colocar em prática?',
        totalResponses: 26,
        data: [
          { label: 'Preços mais acessíveis', percentage: 69.2, count: 18, color: '#6366F1' },
          { label: 'Melhor duração da bateria', percentage: 38.5, count: 10, color: '#3B82F6' },
          { label: 'Carregamento mais rápido', percentage: 23.1, count: 6, color: '#F59E0B' },
          { label: 'Atualizações por mais tempo', percentage: 23.1, count: 6, color: '#10B981' },
          { label: 'Design confortável e leve', percentage: 11.5, count: 3, color: '#EC4899' }
        ],
        insight: 'Consumidores exigem baterias duradouras aliadas a transparência de valor.'
      },
      {
        questionNumber: 7,
        questionText: 'Você gostaria que criassem um celular com bateria autossustentável?',
        totalResponses: 26,
        data: [
          { label: 'Com certeza', percentage: 46.2, color: '#10B981' },
          { label: 'Sim', percentage: 42.3, color: '#3B82F6' },
          { label: 'Não', percentage: 7.7, color: '#EF4444' },
          { label: 'Não sei responder', percentage: 3.8, color: '#9CA3AF' }
        ],
        insight: '88,5% expressaram aprovação explícita para o smartphone Celipse.'
      },
      {
        questionNumber: 9,
        questionText: 'Você acredita que um celular premium com bateria autossustentável faria diferença no seu dia a dia?',
        totalResponses: 26,
        data: [
          { label: 'Muita diferença', percentage: 53.8, color: '#10B981' },
          { label: 'Diferença razoável', percentage: 23.1, color: '#F59E0B' },
          { label: 'Não sei responder', percentage: 11.5, color: '#9CA3AF' },
          { label: 'Pouca diferença', percentage: 7.7, color: '#EF4444' },
          { label: 'Não faria diferença', percentage: 3.9, color: '#3B82F6' }
        ],
        insight: '76,9% afirmam que a solução transformará positivamente sua rotina.'
      },
      {
        questionNumber: 10,
        questionText: 'Você estaria disposto a investir um valor mais alto por um celular premium?',
        totalResponses: 26,
        data: [
          { label: 'Moderadamente disposto', percentage: 34.6, color: '#F59E0B' },
          { label: 'Muito disposto', percentage: 19.2, color: '#10B981' },
          { label: 'Não estaria disposto', percentage: 19.2, color: '#3B82F6' },
          { label: 'Pouco disposto', percentage: 15.4, color: '#EF4444' },
          { label: 'Totalmente disposto', percentage: 11.5, color: '#8B5CF6' }
        ],
        insight: '65,3% declaram intenção de pagar mais por bateria infinita e alto desempenho.'
      },
      {
        questionNumber: 11,
        questionText: 'Você gostaria que essa inovação fosse criada e realizada?',
        totalResponses: 26,
        data: [
          { label: 'Com certeza', percentage: 42.3, color: '#10B981' },
          { label: 'Sim', percentage: 38.5, color: '#3B82F6' },
          { label: 'Talvez', percentage: 11.5, color: '#F59E0B' },
          { label: 'Não', percentage: 3.8, color: '#EF4444' },
          { label: 'Não sei responder', percentage: 3.9, color: '#9CA3AF' }
        ],
        insight: 'Mais de 80% do público endossa a realização comercial do projeto.'
      }
    ]
  };

  getResearch(): ResearchData {
    return this.research;
  }
}
