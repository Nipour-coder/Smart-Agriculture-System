'use client';

import React, { useState } from 'react';
import { Scan, BrainCircuit, CheckCircle, AlertTriangle, RefreshCw, Sparkles, Microchip } from 'lucide-react';

interface CropSample {
  id: string;
  name: string;
  type: string;
  region: string;
  health: 'Healthy' | 'Warning' | 'Critical';
  diagnosis: string;
  confidence: number;
  ndviScore: number;
  treatment: string;
  color: string;
}

export const CropVisionSimulator: React.FC = () => {
  const samples: CropSample[] = [
    {
      id: 'maize',
      name: 'Free State White Maize',
      type: 'Zea mays',
      region: 'Free State / Northwest',
      health: 'Warning',
      diagnosis: 'Early Stage Maize Streak Virus (MSV)',
      confidence: 98.7,
      ndviScore: 0.64,
      treatment: 'Targeted bio-insecticide application on Sector B4. Reduce nitrogen overhead irrigation by 15%.',
      color: 'amber',
    },
    {
      id: 'citrus',
      name: 'Limpopo Valencia Orange',
      type: 'Citrus sinensis',
      region: 'Limpopo (Letsitele)',
      health: 'Healthy',
      diagnosis: 'Optimal Canopy Photosynthesis Rate',
      confidence: 99.4,
      ndviScore: 0.88,
      treatment: 'Maintain current fertigation schedule. Next drone aerial inspection scheduled in 7 days.',
      color: 'emerald',
    },
    {
      id: 'grape',
      name: 'Stellenbosch Pinotage Grapes',
      type: 'Vitis vinifera',
      region: 'Western Cape',
      health: 'Critical',
      diagnosis: 'Localized Powdery Mildew Infection',
      confidence: 97.5,
      ndviScore: 0.45,
      treatment: 'Isolate Geofence Zone 12 immediately. Apply sulfur fungicide treatment within 24 hours.',
      color: 'red',
    },
    {
      id: 'macadamia',
      name: 'Mpumalanga Macadamia Nut',
      type: 'Macadamia integrifolia',
      region: 'Nelspruit, Mpumalanga',
      health: 'Warning',
      diagnosis: 'Subterranean Root Moisture Stress',
      confidence: 96.8,
      ndviScore: 0.59,
      treatment: 'IoT Soil Probe 04 shows 18% moisture deficit at 60cm depth. Increase drip pulse cycle by 20 mins.',
      color: 'amber',
    },
  ];

  const [selectedCrop, setSelectedCrop] = useState<CropSample>(samples[0]);
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const handleScan = (crop: CropSample) => {
    setSelectedCrop(crop);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 1200);
  };

  return (
    <section id="ai-scanner" className="py-24 bg-[#060B08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>TUT 4IR AI Vision Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Test the{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-500 bg-clip-text text-transparent">
              Crop Disease AI Scanner
            </span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/70">
            Click on any South African crop sample below to simulate real-time computer vision analysis powered by TUT 4IR Lab neural networks.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Crop Selector Buttons */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 px-1 mb-2">
              Select SA Crop Sample:
            </h3>

            {samples.map((crop) => (
              <button
                key={crop.id}
                onClick={() => handleScan(crop)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between border ${
                  selectedCrop.id === crop.id
                    ? 'bg-emerald-950/80 border-emerald-400 shadow-lg shadow-emerald-500/20 translate-x-1'
                    : 'bg-[#0E1712] border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-950/30'
                }`}
              >
                <div>
                  <h4 className="text-sm font-bold text-white">{crop.name}</h4>
                  <p className="text-xs text-emerald-400/80 mt-0.5">{crop.region}</p>
                </div>
                
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  crop.health === 'Healthy'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : crop.health === 'Warning'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {crop.health}
                </span>
              </button>
            ))}
          </div>

          {/* Right AI Scanner Output Display */}
          <div className="lg:col-span-8">
            <div className="h-full rounded-2xl glass-panel p-6 border border-emerald-500/30 shadow-2xl relative flex flex-col justify-between overflow-hidden">
              
              {/* Top Scanner HUD Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-emerald-900/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-400">
                    <Scan className={`w-5 h-5 ${isScanning ? 'animate-spin' : ''}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{selectedCrop.name} Scan</h3>
                    <p className="text-xs text-emerald-400/80 font-mono">{selectedCrop.type}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleScan(selectedCrop)}
                  disabled={isScanning}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs font-semibold transition-all"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                  <span>Rescan Sample</span>
                </button>
              </div>

              {/* Central Scanner Visual Overlay */}
              <div className="my-6 relative rounded-xl bg-[#080E0A] p-6 border border-emerald-500/30 min-h-[200px] flex items-center justify-center overflow-hidden">
                {/* Laser Sweep Effect */}
                {isScanning && (
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-lime-400/10 to-transparent animate-pulse border-b-2 border-emerald-400" />
                )}

                {isScanning ? (
                  <div className="text-center space-y-3 z-10">
                    <Microchip className="w-10 h-10 text-emerald-400 animate-bounce mx-auto" />
                    <p className="text-sm font-mono text-emerald-300 animate-pulse">
                      Running TUT 4IR Convolutional Neural Network...
                    </p>
                  </div>
                ) : (
                  <div className="w-full space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#0E1712] border border-emerald-500/30">
                      <div>
                        <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                          AI Diagnosis Result
                        </span>
                        <h4 className="text-lg font-extrabold text-white mt-1">
                          {selectedCrop.diagnosis}
                        </h4>
                      </div>

                      <div className="text-right">
                        <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                          AI Model Confidence
                        </span>
                        <div className="text-2xl font-black text-lime-300 font-mono">
                          {selectedCrop.confidence}%
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-[#0E1712] border border-emerald-900/50">
                        <span className="text-xs text-emerald-400/80 font-medium">NDVI Index Score</span>
                        <div className="text-xl font-bold text-white font-mono mt-0.5">
                          {selectedCrop.ndviScore} / 1.00
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#0E1712] border border-emerald-900/50">
                        <span className="text-xs text-emerald-400/80 font-medium">Region Target</span>
                        <div className="text-sm font-bold text-emerald-200 truncate mt-1">
                          {selectedCrop.region}
                        </div>
                      </div>
                    </div>

                    {/* Prescription / Action Plan */}
                    <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                        <Sparkles className="w-4 h-4 text-lime-400" />
                        <span>Actionable Agronomist Prescription:</span>
                      </div>
                      <p className="text-xs text-emerald-100/90 leading-relaxed">
                        {selectedCrop.treatment}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-xs text-emerald-400/60 font-mono flex items-center justify-between pt-2 border-t border-emerald-900/40">
                <span>Model: TUT-Agrinet-v4.2</span>
                <span>Dataset: 150k+ SA Field Scans</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
