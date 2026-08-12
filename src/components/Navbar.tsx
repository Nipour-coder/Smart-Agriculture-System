'use client';

import React, { useState, useEffect } from 'react';
import { Sprout, Cpu, ShieldCheck, ChevronRight, Menu, X, Radio } from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060B08]/90 backdrop-blur-md border-b border-emerald-500/20 py-3 shadow-2xl shadow-emerald-950/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & TUT Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-lime-400 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#080E0A] rounded-[10px] flex items-center justify-center">
                <Sprout className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  VUNA<span className="text-emerald-400">4IR</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  TUT 4IR Lab
                </span>
              </div>
              <p className="text-[10px] text-emerald-400/80 font-medium tracking-wide">
                SMART AGRI SYSTEM
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#ecosystem"
              className="text-sm font-medium text-emerald-100/80 hover:text-emerald-400 transition-colors"
            >
              System Pillars
            </a>
            <a
              href="#load-shedding"
              className="text-sm font-medium text-emerald-100/80 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <span>Solar & Off-Grid</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                100% Active
              </span>
            </a>
            <a
              href="#ai-scanner"
              className="text-sm font-medium text-emerald-100/80 hover:text-emerald-400 transition-colors"
            >
              AI Vision Demo
            </a>
            <a
              href="#roi-calculator"
              className="text-sm font-medium text-emerald-100/80 hover:text-emerald-400 transition-colors"
            >
              ROI Estimator
            </a>
            <a
              href="#tut-story"
              className="text-sm font-medium text-emerald-100/80 hover:text-emerald-400 transition-colors"
            >
              TUT R&D Roots
            </a>
          </nav>

          {/* Right Status Badge & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>TUT Field Mesh Online</span>
            </div>

            <button
              onClick={onOpenDemoModal}
              className="relative group overflow-hidden rounded-xl p-px font-semibold text-sm shadow-lg shadow-emerald-600/30 transition-all duration-300 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-500 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-[11px] bg-[#0A140E] text-emerald-300 group-hover:bg-transparent group-hover:text-black font-bold transition-all duration-300">
                <span>Book Farm Demo</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-500/30"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060B08]/95 backdrop-blur-xl border-b border-emerald-500/30 px-4 pt-4 pb-6 mt-3 space-y-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs text-emerald-300 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>TUT Field Mesh Online</span>
          </div>

          <a
            href="#ecosystem"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-emerald-200 font-medium py-2 border-b border-emerald-900/40"
          >
            System Pillars
          </a>
          <a
            href="#load-shedding"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-emerald-200 font-medium py-2 border-b border-emerald-900/40"
          >
            Solar & Off-Grid Resilience
          </a>
          <a
            href="#ai-scanner"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-emerald-200 font-medium py-2 border-b border-emerald-900/40"
          >
            AI Vision Simulator
          </a>
          <a
            href="#roi-calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-emerald-200 font-medium py-2 border-b border-emerald-900/40"
          >
            ROI Savings Estimator
          </a>
          <a
            href="#tut-story"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-emerald-200 font-medium py-2 border-b border-emerald-900/40"
          >
            TUT 4IR Lab R&D
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemoModal();
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 text-black font-bold text-center shadow-lg shadow-emerald-500/20"
          >
            Book On-Farm Inspection
          </button>
        </div>
      )}
    </header>
  );
};
