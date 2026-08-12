'use client';

import React, { useState } from 'react';
import {
  Plane,
  Radio,
  BrainCircuit,
  MapPin,
  BarChart3,
  Sun,
  CheckCircle,
  ArrowRight,
  Shield,
  Layers,
  Database,
  Smartphone,
} from 'lucide-react';

export const EcosystemArchitecture: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'air' | 'soil' | 'ai'>('all');

  const pillars = [
    {
      id: 'drone',
      category: 'air',
      number: '01',
      title: 'Autonomous Aerial Drones',
      subtitle: 'Part 1 of the Ecosystem',
      icon: <Plane className="w-6 h-6 text-emerald-400" />,
      tag: 'Air Layer',
      desc: 'Multispectral NDVI and thermal infrared cameras scan hundreds of hectares in minutes to detect moisture stress, canopy density loss, and irrigation leaks.',
      highlights: [
        'NDVI & Thermal Crop Stress Mapping',
        'Automated Waypoint Flight Paths',
        '2cm/pixel Ultra-high Resolution',
      ],
    },
    {
      id: 'soil',
      category: 'soil',
      number: '02',
      title: 'Solar Soil & Weather IoT Probes',
      subtitle: 'Part 2 of the Ecosystem',
      icon: <Radio className="w-6 h-6 text-lime-400" />,
      tag: 'Soil Layer',
      desc: '24/7 subterranean probes measure Volumetric Water Content (VWC), soil EC, temperature, and NPK nutrient migration down to 90cm depth.',
      highlights: [
        'Subterranean Multi-depth Sensors',
        'Solar Supercapacitor Battery',
        'Long-Range LoRaWAN Mesh Network',
      ],
    },
    {
      id: 'ai',
      category: 'ai',
      number: '03',
      title: 'TUT 4IR Computer Vision AI',
      subtitle: 'Part 3 of the Ecosystem',
      icon: <BrainCircuit className="w-6 h-6 text-emerald-300" />,
      tag: 'AI Layer',
      desc: 'Edge AI models trained on local South African crop datasets identify Maize Streak Virus, Citrus Greening, Fall Armyworm, and rust in early stages.',
      highlights: [
        'Local SA Crop Disease Models',
        '99.4% Early Detection Confidence',
        'On-device Offline Inference',
      ],
    },
    {
      id: 'gps',
      category: 'all',
      number: '04',
      title: 'Centimeter RTK GPS Geofencing',
      subtitle: 'Part 4 of the Ecosystem',
      icon: <MapPin className="w-6 h-6 text-amber-400" />,
      tag: 'Spatial Layer',
      desc: 'Centimeter-precision RTK GPS geofencing generates micro-zone prescriptions for targeted variable-rate spraying and tractor autopilot paths.',
      highlights: [
        '±1.5cm RTK Centimeter Accuracy',
        'Variable-Rate Prescription Maps',
        'Boundary Intrusion Geofencing',
      ],
    },
    {
      id: 'analytics',
      category: 'ai',
      number: '05',
      title: 'Farm Analytics & WhatsApp Bot',
      subtitle: 'Part 5 of the Ecosystem',
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      tag: 'Decision Layer',
      desc: 'Get clear actionable recommendations on your mobile phone, web dashboard, or via WhatsApp automated alerts in plain English, Afrikaans, or isiZulu.',
      highlights: [
        'WhatsApp Irrigation Alerts',
        'Yield & Harvest Predictor',
        'Multi-language Support',
      ],
    },
    {
      id: 'solar',
      category: 'soil',
      number: '06',
      title: 'Load-Shedding Solar Edge Grid',
      subtitle: 'Part 6 of the Ecosystem',
      icon: <Sun className="w-6 h-6 text-amber-300" />,
      tag: 'Resilience Layer',
      desc: 'Engineered specifically for South African rural grid failures. Autonomous solar micro-panels and cellular/satellite failovers keep telemetry live 24/7.',
      highlights: [
        '100% Off-Grid Battery Operation',
        'Stage 6 Load-Shedding Proof',
        'Ruggedized Weatherproof Casing',
      ],
    },
  ];

  const filteredPillars =
    activeTab === 'all' ? pillars : pillars.filter((p) => p.category === activeTab);

  return (
    <section id="ecosystem" className="py-24 bg-[#060B08] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>The Complete 6-Pillar Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why the Drone is Only{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
              One Component
            </span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/70">
            A drone can tell you where crops are stressed, but it cannot tell you what is happening 90cm under the soil or deliver 24/7 load-shedding resilient telemetry. Here is how our 6 pillars work together.
          </p>

          {/* Tab Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                  : 'bg-[#0E1712] text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/50'
              }`}
            >
              All 6 Pillars
            </button>
            <button
              onClick={() => setActiveTab('air')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'air'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                  : 'bg-[#0E1712] text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/50'
              }`}
            >
              Air Telemetry (Drones)
            </button>
            <button
              onClick={() => setActiveTab('soil')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'soil'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                  : 'bg-[#0E1712] text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/50'
              }`}
            >
              Soil & Hardware Grid
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'ai'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                  : 'bg-[#0E1712] text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/50'
              }`}
            >
              AI & Decision Engine
            </button>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 relative flex flex-col justify-between group border border-emerald-500/20"
            >
              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#09140D] border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400 group-hover:scale-110 transition-all">
                    {pillar.icon}
                  </div>
                  <span className="text-3xl font-black text-emerald-900/60 group-hover:text-emerald-500/30 font-mono transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                  {pillar.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-emerald-100/70 leading-relaxed mb-6">
                  {pillar.desc}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-emerald-900/50 space-y-2">
                {pillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-emerald-200/90 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
