'use client';

import React, { useState } from 'react';
import { Calculator, TrendingUp, Droplets, Sprout, Coins, ArrowRight, ShieldCheck } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemoModal: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemoModal }) => {
  const [hectares, setHectares] = useState<number>(150);
  const [cropType, setCropType] = useState<string>('maize');
  const [province, setProvince] = useState<string>('free_state');

  // Crop multiplier constants (Rand savings per hectare base)
  const cropMultipliers: Record<string, { baseRandPerHa: number; waterLitresPerHa: number; yieldIncrease: number }> = {
    maize: { baseRandPerHa: 3200, waterLitresPerHa: 45000, yieldIncrease: 18 },
    citrus: { baseRandPerHa: 7800, waterLitresPerHa: 95000, yieldIncrease: 22 },
    grape: { baseRandPerHa: 8500, waterLitresPerHa: 60000, yieldIncrease: 15 },
    sugarcane: { baseRandPerHa: 4100, waterLitresPerHa: 80000, yieldIncrease: 20 },
    macadamia: { baseRandPerHa: 12500, waterLitresPerHa: 70000, yieldIncrease: 25 },
    wheat: { baseRandPerHa: 2900, waterLitresPerHa: 35000, yieldIncrease: 14 },
    vegetables: { baseRandPerHa: 6200, waterLitresPerHa: 50000, yieldIncrease: 24 },
  };

  const selectedData = cropMultipliers[cropType] || cropMultipliers.maize;

  // Calculate annual savings in ZAR
  const annualTotalRand = Math.round(hectares * selectedData.baseRandPerHa);
  const waterSavedLitres = (hectares * selectedData.waterLitresPerHa).toLocaleString('en-ZA');
  const fertilizerRand = Math.round(annualTotalRand * 0.45).toLocaleString('en-ZA');
  const yieldRand = Math.round(annualTotalRand * 0.55).toLocaleString('en-ZA');

  return (
    <section id="roi-calculator" className="py-24 bg-gradient-to-b from-[#060B08] via-[#09170F] to-[#060B08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial ROI Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-500 bg-clip-text text-transparent">
              Estimated Farm Savings
            </span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/70">
            See how much water, fertilizer, and input costs your farm can save with Vuna4IR integrated telemetry.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-center rounded-2xl glass-panel p-6 sm:p-10 border border-emerald-500/30 shadow-2xl">
          
          {/* Left Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Hectares Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <Sprout className="w-4 h-4 text-emerald-400" />
                  <span>Farm Size (Hectares):</span>
                </label>
                <span className="text-xl font-extrabold text-emerald-400 font-mono">
                  {hectares} ha
                </span>
              </div>

              <input
                type="range"
                min="10"
                max="2500"
                step="10"
                value={hectares}
                onChange={(e) => setHectares(Number(e.target.value))}
                className="w-full h-2.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-400 border border-emerald-500/30"
              />
              <div className="flex justify-between text-[11px] text-emerald-400/60 font-mono">
                <span>10 ha</span>
                <span>500 ha</span>
                <span>1,000 ha</span>
                <span>2,500+ ha</span>
              </div>
            </div>

            {/* Crop Selector */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-white">Select Primary Crop:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'maize', label: 'Maize' },
                  { id: 'citrus', label: 'Citrus' },
                  { id: 'grape', label: 'Wine Grapes' },
                  { id: 'macadamia', label: 'Macadamia' },
                  { id: 'sugarcane', label: 'Sugarcane' },
                  { id: 'wheat', label: 'Wheat' },
                  { id: 'vegetables', label: 'Vegetables' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCropType(c.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                      cropType === c.id
                        ? 'bg-emerald-500 text-black border-emerald-400 shadow-md shadow-emerald-500/30'
                        : 'bg-[#09140D] text-emerald-200 border-emerald-500/20 hover:border-emerald-400/50'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Province Selector */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-white">Farm Province / Region:</label>
              <select
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#09140D] border border-emerald-500/30 text-emerald-200 text-sm font-medium focus:outline-none focus:border-emerald-400"
              >
                <option value="free_state">Free State (Maize & Grain Belt)</option>
                <option value="limpopo">Limpopo (Citrus & Subtropical)</option>
                <option value="mpumalanga">Mpumalanga (Grain & Macadamia)</option>
                <option value="western_cape">Western Cape (Vines & Orchards)</option>
                <option value="gauteng">Gauteng (Highveld Agriculture)</option>
                <option value="kzn">KwaZulu-Natal (Sugarcane & Timber)</option>
                <option value="northwest">North West (Grain & Livestock)</option>
                <option value="eastern_cape">Eastern Cape (Citrus & Pastoral)</option>
              </select>
            </div>

          </div>

          {/* Right Estimated Output Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#080E0A] p-6 border-2 border-emerald-500/40 shadow-xl space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-400/80 uppercase tracking-wider">
                  Projected Annual Total Savings (ZAR)
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono text-lime-300">
                  R {annualTotalRand.toLocaleString('en-ZA')}
                </div>
                <p className="text-[11px] text-emerald-300/70">
                  *Based on average 35% water & 22% fertilizer input optimization.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-emerald-900/60">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-200 font-medium flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-cyan-400" />
                    <span>Annual Water Saved:</span>
                  </span>
                  <span className="font-bold text-white font-mono">{waterSavedLitres} L</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-200 font-medium flex items-center gap-1.5">
                    <Coins className="w-4 h-4 text-lime-400" />
                    <span>Fertilizer Input Savings:</span>
                  </span>
                  <span className="font-bold text-white font-mono">R {fertilizerRand}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-200 font-medium flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>Estimated Yield Boost:</span>
                  </span>
                  <span className="font-bold text-emerald-300 font-mono">
                    +{selectedData.yieldIncrease}% (R {yieldRand})
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenDemoModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
              >
                <span>Get Full Agronomy Audit Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
