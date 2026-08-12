'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { EcosystemArchitecture } from '@/components/EcosystemArchitecture';
import { LoadSheddingResilience } from '@/components/LoadSheddingResilience';
import { CropVisionSimulator } from '@/components/CropVisionSimulator';
import { RoiCalculator } from '@/components/RoiCalculator';
import { TutStory } from '@/components/TutStory';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { DemoModal } from '@/components/DemoModal';

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#060B08] text-white relative">
      <Navbar onOpenDemoModal={() => setIsDemoModalOpen(true)} />
      <Hero onOpenDemoModal={() => setIsDemoModalOpen(true)} />
      <EcosystemArchitecture />
      <LoadSheddingResilience />
      <CropVisionSimulator />
      <RoiCalculator onOpenDemoModal={() => setIsDemoModalOpen(true)} />
      <TutStory />
      <Testimonials />
      <Footer />

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </main>
  );
}
