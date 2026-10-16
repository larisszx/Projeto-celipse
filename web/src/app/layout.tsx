import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CELIPSE — O Primeiro Smartphone com Dupla Bateria Autossustentável',
  description: 'Inovação pioneira em tecnologia móvel. Dupla bateria autossustentável com recarga cinética e solar contínua. Design premium inspirado na perfeição do eclipse.',
  keywords: ['Celipse', 'Smartphone Celipse', 'Bateria Autossustentável', 'Energia Solar', 'Energia Cinética', 'Smartphone Premium', 'Tecnologia 2026'],
  authors: [{ name: 'Equipe Celipse — E.E. Benedito Paes Sobrinho' }],
  openGraph: {
    title: 'CELIPSE — Energia para acompanhar sua rotina',
    description: 'O smartphone do futuro com sistema inteligente de dupla bateria autossustentável. Nunca descarrega.',
    images: ['/assets/celipse_trio_smartphones.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body className="bg-[#08090B] text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
