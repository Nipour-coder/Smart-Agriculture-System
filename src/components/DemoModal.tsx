'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, Calendar, Phone, Mail, User, MapPin, Sprout, ShieldCheck, Sparkles } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    province: 'Free State',
    hectares: '150',
    crops: 'Maize & Soybeans',
    preferredDate: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      const randomRef = 'VUNA-SA-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);

      // Fire confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10B981', '#22C55E', '#84CC16', '#EAB308'],
        });
      } catch (err) {
        // Fallback gracefully if canvas-confetti fails
      }
    }, 1000);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060B08]/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl rounded-2xl glass-panel border border-emerald-500/40 shadow-2xl shadow-emerald-950 p-6 sm:p-8 bg-[#09140D] overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-4 right-4 p-2 rounded-lg bg-emerald-950 text-emerald-400 hover:text-white border border-emerald-500/30 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Schedule TUT 4IR On-Farm Demo</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">Book an On-Site Inspection</h3>
              <p className="text-xs text-emerald-100/70 mt-1">
                Our TUT 4IR agronomist team will visit your farm with solar IoT probes & survey drones for a live demo.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-emerald-200">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-emerald-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Willem Botha"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#060B08] border border-emerald-500/30 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-emerald-200">SA Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-emerald-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+27 82 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#060B08] border border-emerald-500/30 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-emerald-200">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-emerald-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="farmer@agri.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#060B08] border border-emerald-500/30 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-emerald-200">Province / Location *</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-emerald-400 absolute left-3 top-3" />
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#060B08] border border-emerald-500/30 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                    >
                      <option value="Free State">Free State</option>
                      <option value="Limpopo">Limpopo</option>
                      <option value="Mpumalanga">Mpumalanga</option>
                      <option value="Gauteng">Gauteng</option>
                      <option value="Western Cape">Western Cape</option>
                      <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                      <option value="North West">North West</option>
                      <option value="Eastern Cape">Eastern Cape</option>
                      <option value="Northern Cape">Northern Cape</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-emerald-200">Farm Size (Ha)</label>
                  <input
                    type="number"
                    placeholder="e.g. 250"
                    value={formData.hectares}
                    onChange={(e) => setFormData({ ...formData, hectares: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#060B08] border border-emerald-500/30 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-emerald-200">Crops Cultivated</label>
                  <input
                    type="text"
                    placeholder="e.g. Maize, Citrus, Vines"
                    value={formData.crops}
                    onChange={(e) => setFormData({ ...formData, crops: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#060B08] border border-emerald-500/30 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 text-black font-extrabold text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Registering Request...</span>
                ) : (
                  <>
                    <span>Confirm Demo Request</span>
                    <ShieldCheck className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border-2 border-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white">Demo Request Confirmed!</h3>
              <p className="text-xs text-emerald-300/80 mt-1">
                Thank you, <span className="font-bold text-white">{formData.name}</span>. A TUT 4IR Lab agronomist will contact you within 24 hours to finalize your on-farm inspection date.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#060B08] border border-emerald-500/30 space-y-2 text-left">
              <div className="flex justify-between items-center text-xs">
                <span className="text-emerald-400/80 font-medium">Booking Reference:</span>
                <span className="font-mono font-bold text-lime-300">{bookingRef}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-emerald-400/80 font-medium">Location:</span>
                <span className="font-bold text-white">{formData.province}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-emerald-400/80 font-medium">Assigned Team:</span>
                <span className="font-bold text-emerald-300">TUT Pretoria Agri-Drone Unit</span>
              </div>
            </div>

            <button
              onClick={resetForm}
              className="w-full py-3 rounded-xl bg-emerald-500 text-black font-bold text-sm hover:bg-emerald-400 transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
