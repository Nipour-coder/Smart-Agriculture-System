'use client';

import React from 'react';
import Image from 'next/image';
import { Award, GraduationCap, Cpu, Microchip, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const TutStory: React.FC = () => {
  return (
    <section id="tut-story" className="py-24 bg-[#060B08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left R&D Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl glass-panel p-3 border border-emerald-500/30 shadow-2xl overflow-hidden group">
              <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/tut_lab_rd.jpg"
                  alt="TUT 4IR Lab Research and Development Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B08] via-transparent to-transparent opacity-70" />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#080E0A]/95 border border-emerald-500/40 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Tshwane University of Technology</h4>
                    <p className="text-xs text-emerald-400 font-medium">4IR Centre of Excellence Incubated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>South African Engineering Excellence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Born at the <br />
              <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-500 bg-clip-text text-transparent">
                TUT 4IR Innovation Lab
              </span>
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/70 leading-relaxed">
              Vuna4IR began as a pioneering research initiative at the Tshwane University of Technology 4IR Lab in Pretoria. Our mission was clear: solve the critical gap between high-end precision agricultural technology and the harsh infrastructural realities of South African farming.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0E1712] border border-emerald-500/20 space-y-2">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-bold text-white">Local Hardware R&D</h4>
                <p className="text-xs text-emerald-100/70">
                  Custom PCB telemetry boards and LoRaWAN gateways designed and assembled in Pretoria.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0E1712] border border-emerald-500/20 space-y-2">
                <Microchip className="w-5 h-5 text-lime-400" />
                <h4 className="text-sm font-bold text-white">SA Crop Datasets</h4>
                <p className="text-xs text-emerald-100/70">
                  AI computer vision models trained on tens of thousands of local field leaf & soil scans.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6 border-t border-emerald-900/50 text-xs text-emerald-300 font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Patented Sensor Design</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>TUT Research Backed</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
