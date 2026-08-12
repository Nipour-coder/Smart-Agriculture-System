'use client';

import React from 'react';
import { Sun, BatteryCharging, WifiOff, ShieldAlert, CheckCircle2, Zap, Radio, Database } from 'lucide-react';

export const LoadSheddingResilience: React.FC = () => {
  return (
    <section id="load-shedding" className="py-24 bg-gradient-to-b from-[#060B08] via-[#09170F] to-[#060B08] relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 opacity-10 agri-grid-dense pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>South African Grid Resilience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Built to Survive <br />
              <span className="bg-gradient-to-r from-amber-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent">
                Stage 6 Load-Shedding & Blackouts
              </span>
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/70 leading-relaxed">
              Standard imported agritech fails when South African cell towers go offline during load-shedding power outages. Vuna4IR hardware is built from the ground up at TUT 4IR Lab with autonomous solar mesh telemetry.
            </p>

            {/* Feature List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl glass-panel border border-amber-500/20">
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 mt-1">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Solar Supercapacitor Power Cells</h4>
                  <p className="text-xs text-emerald-100/70 mt-1">
                    Every IoT soil probe and weather station is powered by ultra-durable solar supercapacitors with 72+ hours of battery buffer—no battery replacements required.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl glass-panel border border-emerald-500/20">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 mt-1">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">15km Off-Grid LoRaWAN Mesh Network</h4>
                  <p className="text-xs text-emerald-100/70 mt-1">
                    Sensors communicate directly with your farm’s central gateway using sub-GHz radio waves. No local cellular coverage or Wi-Fi required to log field data.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl glass-panel border border-emerald-500/20">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 mt-1">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Edge Buffer Memory Storage</h4>
                  <p className="text-xs text-emerald-100/70 mt-1">
                    If regional internet drops completely, the gateway stores up to 30 days of high-frequency sensor & drone analytics locally, syncing back automatically when connection restores.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Comparison Visual Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl glass-panel p-6 border border-emerald-500/30 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-900/50">
                <h3 className="text-lg font-bold text-white">Field Uptime Comparison</h3>
                <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono border border-amber-500/30">
                  Load-Shedding Stage 6 Test
                </span>
              </div>

              {/* Standard Systems (Failing) */}
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 space-y-3 opacity-75">
                <div className="flex items-center justify-between text-xs text-red-300 font-bold">
                  <div className="flex items-center gap-2">
                    <WifiOff className="w-4 h-4 text-red-400" />
                    <span>Imported / Standard Agritech Systems</span>
                  </div>
                  <span className="text-red-400 font-mono">35% Uptime</span>
                </div>
                <div className="w-full bg-red-950 rounded-full h-2 overflow-hidden">
                  <div className="bg-red-500 h-2 rounded-full w-[35%]" />
                </div>
                <p className="text-[11px] text-red-200/80">
                  ❌ Shuts down during cell tower battery depletion. Soil data lost during critical irrigation windows.
                </p>
              </div>

              {/* Vuna4IR System (100% Active) */}
              <div className="p-5 rounded-xl bg-emerald-950/40 border-2 border-emerald-500/50 space-y-3 shadow-lg shadow-emerald-500/10">
                <div className="flex items-center justify-between text-xs text-emerald-300 font-bold">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-emerald-400" />
                    <span>Vuna4IR Solar Mesh Telemetry Platform</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-sm">100% Uptime</span>
                </div>
                <div className="w-full bg-emerald-950 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-lime-400 h-2.5 rounded-full w-full animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-emerald-200 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Continuous Soil Logging</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Offline Queue</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Solar Micro-Grid Active</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Zero Data Gaps</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
