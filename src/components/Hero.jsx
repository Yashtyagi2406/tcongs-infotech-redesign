import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Star, Play, CheckCircle, TrendingUp, Zap } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  const marqueeLogos = [
    { name: 'Amazon Marketplace', badge: 'E-Commerce' },
    { name: 'Flipkart Growth', badge: 'Marketplace' },
    { name: 'Shopify Plus', badge: 'E-Commerce' },
    { name: 'Google Ads (PPC)', badge: 'Performance' },
    { name: 'Meta & Instagram Ads', badge: 'Growth' },
    { name: 'Generative SEO (GEO)', badge: 'AI Search' },
    { name: 'React & Next.js', badge: 'Web Tech' },
    { name: 'Myntra & Ajio', badge: 'Fashion' },
    { name: 'Nykaa Beauty', badge: 'Marketplace' },
    { name: 'Figma UI/UX', badge: 'Design' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grid-bg-pattern bg-radial-gradient">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF1E56]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-[#D4FF00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#12141A]/90 border border-white/10 hover:border-[#FF1E56]/40 rounded-full px-4 py-1.5 backdrop-blur-md transition-all shadow-lg group cursor-pointer"
               onClick={() => onOpenModal('General Consultation')}>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1E56] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1E56]"></span>
            </span>
            <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
              Next-Gen Digital & E-Commerce Agency
            </span>
            <span className="text-xs text-[#D4FF00] font-medium flex items-center gap-1">
              • 8+ Years Global Experience
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-[1.1] text-white">
            Smart Digital Solutions for <br className="hidden sm:inline" />
            <span className="text-gradient-crimson">Modern Businesses</span> &{' '}
            <span className="text-gradient-lime">Sellers.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            We help global brands build scalable web & app solutions, optimize e-commerce marketplaces (Amazon, Flipkart), and scale sales through Generative AI SEO & Performance Marketing.
          </p>

          {/* Dual CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenModal('Web & App Development')}
              className="w-full sm:w-auto bg-gradient-to-r from-[#FF1E56] to-[#E51A4B] text-white font-semibold text-base px-8 py-4 rounded-full shadow-[0_0_30px_rgba(255,30,86,0.5)] hover:shadow-[0_0_45px_rgba(255,30,86,0.7)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-5 h-5 text-[#D4FF00]" />
              Launch Your Project 🚀
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto bg-[#141722]/80 hover:bg-white/10 text-white font-medium text-base px-7 py-4 rounded-full border border-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              Explore Our Services
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#D4FF00]" />
              <span>Full-Funnel Web & App Dev</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#FF1E56]" />
              <span>Marketplace Growth Experts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#D4FF00]" />
              <span>24/7 Global Client Support</span>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Cards Grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="text-3xl sm:text-4xl font-black font-heading text-white mb-1 flex items-center gap-1">
              8+ <span className="text-[#FF1E56] text-xl font-bold">Years</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">Industry Leadership & Expertise</div>
            <div className="mt-3 flex items-center gap-1 text-[11px] text-[#D4FF00]">
              <TrendingUp className="w-3.5 h-3.5" /> Proven Track Record
            </div>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="text-3xl sm:text-4xl font-black font-heading text-white mb-1 flex items-center gap-1">
              100+ <span className="text-[#D4FF00] text-xl font-bold">Projects</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">Websites, Apps & Portals Launched</div>
            <div className="mt-3 flex items-center gap-1 text-[11px] text-slate-300">
              <Zap className="w-3.5 h-3.5 text-[#FF1E56]" /> 100% Scalable Tech
            </div>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="text-3xl sm:text-4xl font-black font-heading text-white mb-1 flex items-center gap-1">
              99% <span className="text-[#FF1E56] text-xl font-bold">Retention</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">Satisfied Enterprise & Global Clients</div>
            <div className="mt-3 flex items-center gap-1 text-[11px] text-[#D4FF00]">
              <Star className="w-3.5 h-3.5 fill-[#D4FF00]" /> 4.9/5 Rating
            </div>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="text-3xl sm:text-4xl font-black font-heading text-white mb-1 flex items-center gap-1">
              Global <span className="text-[#D4FF00] text-xl font-bold">Reach</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">USA, Dubai, Canada & Worldwide</div>
            <div className="mt-3 flex items-center gap-1 text-[11px] text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF1E56]" /> Mumbai HQ Base
            </div>
          </div>

        </div>

        {/* Live Client / Tech Stack Marquee */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
            Trusted Platforms & Technologies We Scale Brands On
          </p>

          <div className="relative overflow-hidden w-full">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#08090C] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#08090C] to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-4 animate-marquee whitespace-nowrap py-2">
              {[...marqueeLogos, ...marqueeLogos].map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#12141A]/80 border border-white/10 rounded-xl text-xs font-medium text-slate-300 hover:border-[#FF1E56]/40 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF1E56]" />
                  <span className="text-white font-semibold">{item.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#D4FF00] font-mono">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
