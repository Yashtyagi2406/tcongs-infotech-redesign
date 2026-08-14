import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, ShieldCheck, Clock, DollarSign } from 'lucide-react';

export default function ProjectEstimator({ onOpenModal }) {
  const [projectType, setProjectType] = useState('web-app');
  const [scale, setScale] = useState('pro');
  const [speed, setSpeed] = useState('standard');
  const [addons, setAddons] = useState({
    seo: true,
    geo: true,
    maintenance: false,
    analytics: true
  });

  const basePrices = {
    'web-app': { basic: 2500, pro: 5500, enterprise: 12000 },
    'e-commerce': { basic: 3000, pro: 6500, enterprise: 15000 },
    'marketing': { basic: 1500, pro: 3500, enterprise: 8000 },
    'ui-ux': { basic: 1800, pro: 4000, enterprise: 9000 },
  };

  const speedMultipliers = {
    standard: 1.0,
    accelerated: 1.25,
    express: 1.5
  };

  const addonPrices = {
    seo: 800,
    geo: 1200,
    maintenance: 900,
    analytics: 500
  };

  const calculateEstimate = () => {
    let base = basePrices[projectType]?.[scale] || 5000;
    let multiplier = speedMultipliers[speed] || 1;
    let addonSum = 0;
    if (addons.seo) addonSum += addonPrices.seo;
    if (addons.geo) addonSum += addonPrices.geo;
    if (addons.maintenance) addonSum += addonPrices.maintenance;
    if (addons.analytics) addonSum += addonPrices.analytics;

    let min = Math.round((base * multiplier + addonSum) * 0.9);
    let max = Math.round((base * multiplier + addonSum) * 1.15);
    return { min, max };
  };

  const calculateDays = () => {
    if (speed === 'express') return '7 - 14 Days';
    if (speed === 'accelerated') return '2 - 3 Weeks';
    return '4 - 6 Weeks';
  };

  const estimate = calculateEstimate();

  const toggleAddon = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/20 text-[#D4FF00] text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Project Cost Calculator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Estimate Your Digital <span className="text-gradient-lime">Project Budget & Timeline</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Configure your desired scope, speed, and growth add-ons to get a transparent instant pricing range.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (8 cols) */}
          <div className="lg:col-span-7 space-y-8 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
            
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                1. Select Core Service Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'web-app', name: 'Web & App Development' },
                  { id: 'e-commerce', name: 'E-Commerce Marketplace' },
                  { id: 'marketing', name: 'GEO & Digital Marketing' },
                  { id: 'ui-ux', name: 'Branding & UI/UX Design' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                      projectType === type.id
                        ? 'bg-[#FF1E56]/15 border-[#FF1E56] text-white shadow-[0_0_15px_rgba(255,30,86,0.2)]'
                        : 'bg-[#141722] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Project Scope */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                2. Project Scale & Complexity
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'basic', name: 'MVP / Startup', sub: 'Essential features' },
                  { id: 'pro', name: 'Professional', sub: 'Most popular growth' },
                  { id: 'enterprise', name: 'Enterprise', sub: 'Full suite & custom AI' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScale(item.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      scale === item.id
                        ? 'bg-[#D4FF00]/15 border-[#D4FF00] text-white shadow-[0_0_15px_rgba(212,255,0,0.2)]'
                        : 'bg-[#141722] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-0.5">{item.name}</div>
                    <div className="text-[10px] text-slate-400">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Timeline Speed */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                3. Delivery Timeline Priority
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', name: 'Standard Delivery', sub: '4 - 6 Weeks' },
                  { id: 'accelerated', name: 'Accelerated', sub: '2 - 3 Weeks (+25%)' },
                  { id: 'express', name: 'Express Sprint', sub: '7 - 14 Days (+50%)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSpeed(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      speed === item.id
                        ? 'bg-white/15 border-white text-white'
                        : 'bg-[#141722] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{item.name}</div>
                    <div className="text-[10px] text-slate-400">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Growth Addons */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                4. Select Growth Add-Ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: 'geo', label: 'GEO & ChatGPT AI Citation Setup', price: '+$1,200' },
                  { key: 'seo', label: 'Complete Technical & On-Page SEO', price: '+$800' },
                  { key: 'analytics', label: 'Custom Conversion Analytics & Funnel', price: '+$500' },
                  { key: 'maintenance', label: '12 Months SLA Maintenance & Support', price: '+$900' },
                ].map((addon) => (
                  <button
                    key={addon.key}
                    onClick={() => toggleAddon(addon.key)}
                    className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-all ${
                      addons[addon.key]
                        ? 'bg-[#1E2333] border-[#FF1E56]/40 text-white'
                        : 'bg-[#141722] border-white/10 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        addons[addon.key] ? 'bg-[#FF1E56] border-[#FF1E56] text-white' : 'border-slate-500'
                      }`}>
                        {addons[addon.key] && <Check className="w-3 h-3" />}
                      </div>
                      <span>{addon.label}</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#D4FF00] font-bold">{addon.price}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 glass-panel p-8 rounded-3xl border border-[#FF1E56]/30 bg-gradient-to-b from-[#12141A] to-[#0E1017] shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Project Estimation</span>
              <span className="px-2.5 py-1 rounded-full bg-[#FF1E56]/10 text-[#FF1E56] text-[11px] font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Live Estimate
              </span>
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-1">Estimated Investment Range</div>
              <div className="text-4xl font-extrabold font-heading text-white tracking-tight">
                ${estimate.min.toLocaleString()} <span className="text-[#D4FF00] text-2xl font-semibold">- ${estimate.max.toLocaleString()}</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Includes initial architecture, code handover & deployment.</div>
            </div>

            <div className="space-y-3 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D4FF00]" /> Estimated Delivery Time:
                </span>
                <span className="font-semibold text-white">{calculateDays()}</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FF1E56]" /> IP Code Ownership:
                </span>
                <span className="font-semibold text-white">100% Client Owned</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-[#D4FF00]" /> Payment Milestones:
                </span>
                <span className="font-semibold text-white">Flexible Milestone Based</span>
              </div>
            </div>

            <button
              onClick={() => onOpenModal(`Custom Estimate (${projectType.toUpperCase()} - ${scale.toUpperCase()})`)}
              className="w-full bg-gradient-to-r from-[#FF1E56] to-[#E51A4B] text-white font-semibold py-4 px-6 rounded-2xl shadow-[0_0_25px_rgba(255,30,86,0.5)] hover:shadow-[0_0_35px_rgba(255,30,86,0.7)] transition-all flex items-center justify-center gap-2 group"
            >
              Lock In This Estimate & Book Call 🚀
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="text-[11px] text-center text-slate-400">
              No commitment required • Free technical proposal included
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
