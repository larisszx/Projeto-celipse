'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DualBatterySimulator from '@/components/DualBatterySimulator';
import DeviceViewer3D from '@/components/DeviceViewer3D';
import TechnologyDeepDive from '@/components/TechnologyDeepDive';
import AcademicPaperSection from '@/components/AcademicPaperSection';
import MarketingFlyerSection from '@/components/MarketingFlyerSection';
import PreOrderModal from '@/components/PreOrderModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [preOrderOpen, setPreOrderOpen] = useState(false);

  const scrollToSimulator = () => {
    const el = document.getElementById('bateria');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#08090B] text-zinc-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Translucent Glass Navigation */}
      <Navbar 
        onOpenPreOrder={() => setPreOrderOpen(true)} 
        onOpenSimulator={scrollToSimulator} 
      />

      {/* Hero Section */}
      <HeroSection 
        onOpenPreOrder={() => setPreOrderOpen(true)} 
        onOpenSimulator={scrollToSimulator} 
      />

      {/* Interactive Dual-Battery Simulator with Real Rear LED */}
      <DualBatterySimulator />

      {/* Interactive 3D/Color Finish Customizer */}
      <DeviceViewer3D />

      {/* Bento Grid Deep Tech & Engineering */}
      <TechnologyDeepDive />

      {/* Academic Paper & Survey Data */}
      <AcademicPaperSection />

      {/* Marketing, Social Networks & Official Flyer */}
      <MarketingFlyerSection />

      {/* Apple-style Footer with References & VIP Club */}
      <Footer />

      {/* Pre-Order Modal connected to NestJS Backend */}
      <PreOrderModal 
        isOpen={preOrderOpen} 
        onClose={() => setPreOrderOpen(false)} 
      />
    </main>
  );
}
