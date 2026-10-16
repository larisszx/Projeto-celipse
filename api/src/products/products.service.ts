import { Injectable } from '@nestjs/common';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  priceFormatted: string;
  colors: { id: string; name: string; hex: string; class: string }[];
  storageOptions: string[];
  specs: {
    battery: string;
    solarTech: string;
    kineticTech: string;
    display: string;
    processor: string;
    camera: string;
    build: string;
    dimensions: string;
  };
  features: string[];
}

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    {
      id: 'celipse-one',
      name: 'Celipse One',
      tagline: 'O início da liberdade energética.',
      description: 'Design refinado em titânio e cerâmica com sistema inteligente de dupla bateria autossustentável. Nunca mais dependa de uma tomada.',
      price: 4899,
      priceFormatted: 'R$ 4.899,00',
      colors: [
        { id: 'titanium-dark', name: 'Titânio Escuro', hex: '#26282B', class: 'bg-zinc-800' },
        { id: 'midnight-blue', name: 'Azul Noturno Metálico', hex: '#1E2D42', class: 'bg-slate-800' },
        { id: 'ceramic-white', name: 'Branco Cerâmica Lunar', hex: '#EBEBEB', class: 'bg-zinc-100' }
      ],
      storageOptions: ['128 GB', '256 GB', '512 GB'],
      specs: {
        battery: 'Dupla Bateria 4.600 mAh + 4.600 mAh (9.200 mAh combinado)',
        solarTech: 'Matriz fotovoltaica traseira monocristalina de alta sensibilidade',
        kineticTech: 'Micro-gerador piezoelétrico com captação por movimento natural',
        display: '6.1" OLED Super Retina XDR, 120Hz ProMotion, 2200 nits pico',
        processor: 'Celipse Neural Bionic G1 (4nm ultra eficiente)',
        camera: 'Sistema Dual Pro 48 MP + Ultra-Angular 12 MP com Photonic Engine',
        build: 'Estrutura em Titânio escovado com traseira em vidro nano-texturizado',
        dimensions: '147.5 x 71.5 x 7.8 mm - 179g'
      },
      features: [
        'Indicador traseiro em LED luminoso com status do ciclo ativo',
        'Alternância instantânea de células com zero latência (0ms)',
        'Resistência IP68 contra água e poeira',
        'Compatível com 5G Ultra Wideband e Wi-Fi 7'
      ]
    },
    {
      id: 'celipse-pro',
      name: 'Celipse Pro',
      tagline: 'Performance sem limites. Energia sem fim.',
      description: 'O topo da tecnologia mundial. Baterias com captação cinética tri-axial e células fotovoltaicas de perovskita que carregam até sob iluminação ambiente.',
      price: 6499,
      priceFormatted: 'R$ 6.499,00',
      colors: [
        { id: 'titanium-dark', name: 'Titânio Escuro', hex: '#26282B', class: 'bg-zinc-800' },
        { id: 'midnight-blue', name: 'Azul Noturno Metálico', hex: '#1E2D42', class: 'bg-slate-800' },
        { id: 'ceramic-white', name: 'Branco Cerâmica Lunar', hex: '#EBEBEB', class: 'bg-zinc-100' }
      ],
      storageOptions: ['256 GB', '512 GB', '1 TB'],
      specs: {
        battery: 'Dupla Célula de Estado Sólido 5.200 mAh + 5.200 mAh (10.400 mAh total)',
        solarTech: 'Malha de Perovskita Traseira Celipse Quantum Solar (captação 360° de lux)',
        kineticTech: 'Dínamo Micro-Magnético com suspensão por levitação',
        display: '6.7" OLED Eclipse Dynamic Display, Always-On, 2800 nits pico',
        processor: 'Celipse Quantum Bionic X-Pro (3nm de última geração)',
        camera: 'Câmera Tripla Computacional 108 MP Principal + 48 MP Periscópio 5x + 48 MP Ultra-Wide',
        build: 'Titânio Aeroespacial Grau 5 com revestimento PVD anti-riscos',
        dimensions: '159.9 x 76.7 x 8.1 mm - 198g'
      },
      features: [
        'LED traseiro em barra contínua com gradiente estelar pulsante',
        'Sensor térmico Laserax para controle de dissipação passiva sem aquecimento',
        'Captação de calor corporal para complementação de micro-voltagem',
        'Som espacial com Dolby Atmos e Cancelamento Ativo de Ruído nos microfones'
      ]
    },
    {
      id: 'celipse-ultra-gold',
      name: 'Celipse Eclipse Gold Edition',
      tagline: 'A assinatura máxima da sofisticação tecnológica.',
      description: 'Edição limitada para colecionadores e entusiastas do futuro. Logotipo e moldura folheados a ouro titânio 18k com acabamento acetinado exclusivo.',
      price: 8299,
      priceFormatted: 'R$ 8.299,00',
      colors: [
        { id: 'gold-eclipse', name: 'Dourado Eclipse 18k', hex: '#D4AF37', class: 'bg-amber-500' },
        { id: 'titanium-dark', name: 'Titânio Escuro', hex: '#26282B', class: 'bg-zinc-800' }
      ],
      storageOptions: ['512 GB', '1 TB'],
      specs: {
        battery: 'Dupla Bateria de Grafeno 5.800 mAh + 5.800 mAh com ciclo infinito garantido',
        solarTech: 'Matriz Solar Fotovoltaica Perovskita Ouro-Silício de Rendimento Máximo',
        kineticTech: 'Sensores Cinéticos Tri-Axiais de Precisão Quântica',
        display: '6.8" Curvatura Micro-Edge Ceramic Shield OLED 144Hz',
        processor: 'Celipse Quantum Bionic X-Extreme Edition',
        camera: 'Sistema Óptico Quântico de Estúdio com Lentes de Cristal Safira',
        build: 'Chassis em Titânio Grau 5 com acabamento Dourado Eclipse PVD exclusivo',
        dimensions: '161.2 x 77.4 x 8.0 mm - 204g'
      },
      features: [
        'Caixa especial de luxo Celipse Black Box com certificado numerado',
        'Emblema traseiro com Sol e Lua em alto-relevo ouro acetinado',
        'Garantia vitalícia contra degradação de baterias autossustentáveis',
        'Acesso VIP a eventos de lançamento e suporte prioritário 24/7'
      ]
    }
  ];

  getAll(): Product[] {
    return this.products;
  }

  getById(id: string): Product | undefined {
    return this.products.find((p) => p.id === id);
  }
}
