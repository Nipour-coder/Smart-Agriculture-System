'use client';

import React from 'react';
import { Star, Quote, MapPin, Sprout } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Hendrik van der Merwe',
      farm: 'Venterstad Grain Estate (850 ha)',
      location: 'Free State',
      crop: 'Commercial Maize & Soybeans',
      text: 'Most drone companies just give you pretty map pictures. Vuna4IR connected the aerial scans with soil probes. During the dry spell last season, their soil probes saved us R320,000 in unnecessary irrigation pumping costs.',
      metric: 'R320,000 Saved',
      stars: 5,
    },
    {
      name: 'Nthabiseng Molefe',
      farm: 'Baobab Agri Co-operative',
      location: 'Limpopo (Letsitele)',
      crop: 'Citrus & Subtropical',
      text: 'Because of load-shedding Stage 6, our local cell tower keeps dying. Vuna4IR’s solar mesh gateway kept logging our soil moisture and sent irrigation alerts via WhatsApp the second power returned. Exceptional engineering.',
      metric: '100% Load-Shedding Active',
      stars: 5,
    },
    {
      name: 'Jaco & Kobus Steyn',
      farm: 'Lowveld Orchards',
      location: 'Mpumalanga',
      crop: 'Macadamia & Citrus',
      text: 'The AI pest scanner identified early Macadamia Nut Borer infestation before our scouts could even see it visually. We sprayed only 2 geofenced blocks instead of the whole 200 hectares!',
      metric: '65% Spray Cost Cut',
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#060B08] via-[#09170F] to-[#060B08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>Field Tested Across South Africa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Commercial &{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-500 bg-clip-text text-transparent">
              Emerging Farmers
            </span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/70">
            Real feedback from farmers using Vuna4IR integrated telemetry in Free State, Limpopo, and Mpumalanga.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-emerald-500/20"
            >
              <div className="space-y-4">
                {/* Rating & Metric */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
                    {rev.metric}
                  </span>
                </div>

                <p className="text-sm text-emerald-100/80 italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-emerald-900/50 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-emerald-400/80 mt-0.5">{rev.farm}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-300 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-lime-400" />
                  <span>{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
