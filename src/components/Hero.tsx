'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Plane,
  Radio,
  BrainCircuit,
  MapPin,
  BarChart3,
  Sun,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Layers,
  Activity,
  CheckCircle2,
} from 'lucide-react';

interface HeroProps {
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const [activeNode, setActiveNode] = useState<string>('drone');

  const nodesInfo: Record<
    string,
    { title: string; subtitle: string; icon: React.ReactNode; desc: string; detail: string }
  > = {
    drone: {
      title: 'Multispectral Aerial Drones',
      subtitle: 'Layer 1 of 6 Ecosystem Pillars',
      icon: <Plane className="w-5 h-5 text-emerald-400" />,
      desc: 'Conducts automated thermal & NDVI canopy scans to spot crop water stress before visual symptoms appear.',
      detail: 'Coverage: Up to 500 Hectares/day | Resolution: 2cm/pixel',
    },
    sensor: {
      title: 'Solar Soil & Weather IoT Probes',
      subtitle: 'Layer 2 of 6 Ecosystem Pillars',
      icon: <Radio className="w-5 h-5 text-lime-400" />,
      desc: '24/7 subterranean NPK nutrient, volumetric water content, and micro-climate telemetry.',
      detail: 'Battery: Supercapacitor Solar | Telemetry: Long-range LoRaWAN',
    },
    ai: {
      title: 'TUT 4IR Edge AI Vision Engine',
      subtitle: 'Layer 3 of 6 Ecosystem Pillars',
      icon: <BrainCircuit className="w-5 h-5 text-emerald-300" />,
      desc: 'Trained on African crop disease datasets to detect Maize Streak, Citrus Greening & Fall Armyworm instantly.',
      detail: 'Confidence Score: 99.4% | Processing: On-device offline inference',
    },
    gps: {
      title: 'Centimeter GPS Field Geofencing',
      subtitle: 'Layer 4 of 6 Ecosystem Pillars',
      icon: <MapPin className="w-5 h-5 text-amber-400" />,
      desc: 'High-precision RTK GPS mapping for targeted variable-rate spraying and autonomous tractor paths.',
      detail: 'Accuracy: ±1.5cm RTK positioning | Geofenced zone alerts',
    },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#060B08] via-[#09140D] to-[#060B08] agri-grid-pattern">
      {/* Glow Effects in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-lime-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Origin Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/40 backdrop-blur-md shadow-lg shadow-emerald-950/50">
              <span className="text-sm">🇿🇦</span>
              <span className="text-xs font-semibold text-emerald-300 tracking-wide uppercase">
                Engineered for SA Farmers | TUT 4IR Lab R&D
              </span>
              <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Complete Smart Agriculture.{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-500 bg-clip-text text-transparent glow-text-emerald">
                  Beyond Drones.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100/70 font-normal leading-relaxed max-w-2xl">
                The drone is only one part of the system. Unify thermal aerial surveys, 24/7 solar IoT soil probes, AI disease diagnostics, and GPS geofencing into a single load-shedding resilient farm platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenDemoModal}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-lime-400 text-black font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-98 transition-all duration-300"
              >
                <span>Schedule On-Farm Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#ecosystem"
                className="px-7 py-4 rounded-xl glass-panel text-emerald-200 hover:text-white font-semibold text-base flex items-center justify-center gap-2 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300"
              >
                <Layers className="w-5 h-5 text-emerald-400" />
                <span>Explore 6-Pillar Ecosystem</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-emerald-900/50">
              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-white flex items-center gap-1">
                  <span>38%</span>
                  <span className="text-emerald-400 text-sm font-semibold">↓</span>
                </div>
                <p className="text-xs text-emerald-400/80 font-medium">Water Savings</p>
              </div>

              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-white flex items-center gap-1">
                  <span>99.4%</span>
                </div>
                <p className="text-xs text-emerald-400/80 font-medium">Disease AI Accuracy</p>
              </div>

              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-amber-300 flex items-center gap-1">
                  <span>100%</span>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <p className="text-xs text-emerald-400/80 font-medium">Off-Grid Resilient</p>
              </div>

              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-white flex items-center gap-1">
                  <span>±1.5cm</span>
                </div>
                <p className="text-xs text-emerald-400/80 font-medium">GPS Zoning</p>
              </div>
            </div>
          </div>

          {/* Right Interactive Ecosystem Showcase Visual */}
          <div className="lg:col-span-5 relative">
            {/* Card Frame */}
            <div className="relative rounded-2xl glass-panel p-4 border border-emerald-500/30 shadow-2xl shadow-emerald-950/80 overflow-hidden">
              {/* Top Bar of Graphic */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-900/50 text-xs">
                <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>Vuna4IR Field Telemetry Engine</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono text-[11px] border border-emerald-800/40">
                  Pretoria Mesh Active
                </div>
              </div>

              {/* Main Image Container with Hotspots */}
              <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden group">
                <Image
                  src="/images/smart_agri_hero.jpg"
                  alt="Vuna4IR Smart Agriculture System"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E0A] via-transparent to-transparent opacity-80" />

                {/* Interactive Hotspot Pills on Image */}
                <button
                  onClick={() => setActiveNode('drone')}
                  className={`absolute top-6 left-6 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                    activeNode === 'drone'
                      ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/50 scale-110'
                      : 'bg-[#080E0A]/90 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900'
                  }`}
                >
                  <Plane className="w-3.5 h-3.5" />
                  <span>1. Drone Layer</span>
                </button>

                <button
                  onClick={() => setActiveNode('sensor')}
                  className={`absolute bottom-8 left-6 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                    activeNode === 'sensor'
                      ? 'bg-lime-400 text-black shadow-lg shadow-lime-400/50 scale-110'
                      : 'bg-[#080E0A]/90 text-lime-300 border border-lime-500/40 hover:bg-lime-900'
                  }`}
                >
                  <Radio className="w-3.5 h-3.5" />
                  <span>2. Soil IoT Probes</span>
                </button>

                <button
                  onClick={() => setActiveNode('ai')}
                  className={`absolute top-12 right-6 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                    activeNode === 'ai'
                      ? 'bg-emerald-400 text-black shadow-lg shadow-emerald-400/50 scale-110'
                      : 'bg-[#080E0A]/90 text-emerald-200 border border-emerald-400/40 hover:bg-emerald-900'
                  }`}
                >
                  <BrainCircuit className="w-3.5 h-3.5" />
                  <span>3. AI Diagnostics</span>
                </button>

                <button
                  onClick={() => setActiveNode('gps')}
                  className={`absolute bottom-8 right-6 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                    activeNode === 'gps'
                      ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/50 scale-110'
                      : 'bg-[#080E0A]/90 text-amber-300 border border-amber-500/40 hover:bg-amber-900'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>4. GPS Geofence</span>
                </button>
              </div>

              {/* Dynamic Info Box for Selected Node */}
              <div className="mt-4 p-4 rounded-xl bg-[#09140D] border border-emerald-500/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-950 border border-emerald-500/30">
                      {nodesInfo[activeNode].icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {nodesInfo[activeNode].title}
                      </h4>
                      <span className="text-[11px] font-medium text-emerald-400">
                        {nodesInfo[activeNode].subtitle}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Live Telemetry
                  </span>
                </div>

                <p className="text-xs text-emerald-100/70 mb-2">
                  {nodesInfo[activeNode].desc}
                </p>

                <div className="flex items-center gap-2 pt-2 border-t border-emerald-900/40 text-[11px] font-mono text-lime-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{nodesInfo[activeNode].detail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
