'use client';

import React from 'react';
import { Sprout, Phone, Mail, MapPin, Globe, Shield, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040805] text-emerald-100/80 border-t border-emerald-900/50 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/40">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-lime-400 p-0.5">
                <div className="w-full h-full bg-[#080E0A] rounded-[10px] flex items-center justify-center">
                  <Sprout className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                VUNA<span className="text-emerald-400">4IR</span>
              </span>
            </div>

            <p className="text-xs text-emerald-100/70 max-w-sm leading-relaxed">
              Integrated South African Smart Agriculture ecosystem combining autonomous drones, 24/7 solar IoT soil probes, AI computer vision, GPS geofencing, and farm analytics. Incubated at TUT 4IR Lab.
            </p>

            <div className="flex items-center gap-3 text-xs text-emerald-300 pt-2 font-medium">
              <span className="px-2.5 py-1 rounded bg-emerald-950 border border-emerald-500/30">
                🇿🇦 South Africa
              </span>
              <span className="px-2.5 py-1 rounded bg-emerald-950 border border-emerald-500/30">
                TUT 4IR R&D
              </span>
            </div>
          </div>

          {/* Col 2: System Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">System Pillars</h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li><a href="#ecosystem" className="hover:text-emerald-400 transition-colors">Autonomous Drones</a></li>
              <li><a href="#ecosystem" className="hover:text-emerald-400 transition-colors">Solar Soil IoT Probes</a></li>
              <li><a href="#ai-scanner" className="hover:text-emerald-400 transition-colors">AI Crop Disease Engine</a></li>
              <li><a href="#ecosystem" className="hover:text-emerald-400 transition-colors">RTK Centimeter GPS</a></li>
              <li><a href="#load-shedding" className="hover:text-emerald-400 transition-colors">Off-Grid Solar Mesh</a></li>
            </ul>
          </div>

          {/* Col 3: Languages & Regions */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Supported Crops & Regions</h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li>Free State Maize Belt</li>
              <li>Limpopo Citrus Orchards</li>
              <li>Western Cape Vineyards</li>
              <li>Mpumalanga Macadamia</li>
              <li>KZN Sugarcane Fields</li>
            </ul>
          </div>

          {/* Col 4: Contact & TUT Lab */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Contact TUT 4IR Lab</h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>TUT Pretoria Campus, Staatsartillerie Rd, Pretoria, SA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>+27 (0)12 382 5000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>agri@vuna4ir.ac.za</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-300 font-semibold pt-1">
                <MessageSquare className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span>WhatsApp Bot: +27 82 4IR AGRI</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/60">
          <p>© 2026 Vuna4IR Smart Agriculture System. All rights reserved. TUT 4IR Lab Incubated.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-emerald-300 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-emerald-300 transition-colors">TUT 4IR IP Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
