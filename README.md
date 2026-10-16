# CELIPSE — Smartphone Premium com Dupla Bateria Autossustentável

> **"Energia que renova a cada ciclo. Seu ritmo. Sua energia."**  
> *"CELIPSE — Energia para acompanhar sua rotina."*

O **CELIPSE** é uma proposta pioneira de smartphone premium de alto desempenho equipado com **duas baterias autossustentáveis**. Enquanto uma bateria alimenta o uso contínuo do aparelho, a outra se recarrega de forma alternada e automática através de **fontes de energia solar/luminosa e cinética (movimento natural e passos)**, eliminando por completo a dependência de tomadas e carregadores convencionais.

Projeto desenvolvido com base na pesquisa acadêmica e mercadológica do curso **Técnico em Administração Integrado ao Ensino Médio** da **E.E. Vereador Benedito Paes Sobrinho** (Caraguatatuba/SP - Agosto de 2026).

---

## 🚀 Tecnologias Utilizadas

- **Web Frontend**: [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) com design minimalista inspirado nos lançamentos Pro da Apple
- **Backend API**: [NestJS](https://nestjs.com/) com TypeScript, arquitetura modular e endpoints REST
- **Aplicativo Mobile**: [Expo](https://expo.dev/) (React Native) para o ecossistema "Celipse OS Companion"
- **Deploy**: GitHub Pages (via GitHub Actions e pasta `/docs` integrada)

---

## 📱 Estrutura do Repositório

```bash
celipse/
├── web/                     # Aplicação Web Next.js + Tailwind CSS (Landing Page Apple-Like)
│   ├── public/assets/       # Ativos oficiais, fotos dos modelos e logotipo
│   ├── src/
│   │   ├── app/             # Rotas e layout principal
│   │   └── components/      # Simulador Dual-Battery, Customizador 3D, Pesquisa, etc.
│   └── package.json
│
├── api/                     # Backend NestJS (API REST)
│   ├── src/
│   │   ├── battery/         # Telemetria em tempo real das baterias e alternância de células
│   │   ├── products/        # Catálogo com modelos (One, Pro, Gold Edition 18k)
│   │   ├── orders/          # Pré-vendas, lote Alpha e newsletter VIP
│   │   └── research/        # Dados reais da pesquisa de mercado com 26 respondentes
│   └── package.json
│
├── mobile/                  # Aplicativo Mobile Celipse OS (Expo / React Native)
│   ├── App.tsx              # Monitor de bateria, gerador cinético e controle de LED
│   └── package.json
│
├── docs/                    # Build estático pronto para ativação imediata no GitHub Pages
├── assets/                  # Logos oficiais (Prata e Ouro) e fotos dos aparelhos
└── .github/workflows/       # Workflow automatizado do GitHub Actions para GitHub Pages
```

---

## 🌟 Funcionalidades em Destaque

1. **Simulador Interativo Dual-Battery com LED Traseiro**:
   - Demonstração em tempo real da alternância entre a **Célula Alfa** (em uso) e a **Célula Beta** (recarregando).
   - Barra de LED traseira sincronizada em tempo real (lado esquerdo ligado quando Bateria 1 está em uso, e lado direito quando Bateria 2 está em uso).
   - Sliders de luz solar (lux) e botão interativo de movimento cinético (passos) calculando a taxa líquida de geração em Watts.

2. **Customizador de Cores & Vistas do Aparelho**:
   - **Titânio Escuro** (Cinza espacial metálico)
   - **Azul Noturno Metálico** (Deep Ocean)
   - **Branco Cerâmica Lunar** (Cerâmica perolada com bordas cromadas)
   - **Dourado Eclipse 18k** (Edição especial de colecionador)

3. **Painel da Pesquisa Acadêmica Multidisciplinar**:
   - Apresentação completa dos dados levantados pelos alunos da E.E. Benedito Paes Sobrinho:
     - 88,5% de aprovação e desejo de criação do smartphone autossustentável.
     - 76,9% de certeza no impacto positivo no dia a dia.
     - 65,3% dispostos a investir em uma categoria premium sustentável.

4. **Sistema de Reserva & Pré-Venda (Lote Alpha)**:
   - Formulário integrado com geração de código de reserva (`CELIPSE-ALPHA-XXXXX`) e efeito comemorativo.

---

## 🌐 Como Ativar o GitHub Pages

Este repositório já está 100% configurado para o GitHub Pages de duas formas práticas:

### Opção 1: Pela pasta `/docs` (Mais rápido e simples)
1. No seu repositório no GitHub (`https://github.com/larisszx/Projeto-celipse`), clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment** > **Source**, selecione:
   - **Deploy from a branch**
   - Branch: `main` (ou `master`)
   - Folder: `/docs`
4. Clique em **Save**. Em instantes seu site estará no ar em:  
   `https://larisszx.github.io/Projeto-celipse/`

### Opção 2: Pelo GitHub Actions
1. Em **Settings** > **Pages** > **Source**, selecione **GitHub Actions**.
2. O arquivo `.github/workflows/deploy.yml` irá compilar e publicar automaticamente as versões mais recentes a cada novo commit.

---

## 💻 Como Rodar Localmente

### 1. Site Web (Next.js + Tailwind CSS)
```bash
cd web
npm install
npm run dev
# Acesse http://localhost:3000 no navegador
```

### 2. Backend API (NestJS)
```bash
cd api
npm install
npm run start
# A API iniciará em http://localhost:3001
```

### 3. Aplicativo Mobile (Expo)
```bash
cd mobile
npm install
npx expo start
# Pressione 'w' para abrir na web ou escaneie o QR Code no app Expo Go no celular
```

---

## 👥 Equipe do Projeto Multidisciplinar

**E.E. Vereador Benedito Paes Sobrinho**  
*Técnico em Administração Integrado ao Ensino Médio — Caraguatatuba / SP (2026)*

- **Ana Cláudia Bezerra da Mota**
- **Lara Procópio dos Santos Vicente**
- **Larissa Procópio dos Santos Vicente**
- **Laura Bevilaqua Nascimento Santos**
- **Laysla dos Santos Alves**
- **Nicolas Teixeira da Silva Vieira Pinho**

**Orientadora:** Profª Nataly Mazariolli
