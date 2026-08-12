import React from 'react';
import { Mail, MapPin, ArrowUp, Globe, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060709] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF1E56]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4FF00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col (2 spans) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF1E56] to-[#D4FF00] p-[2px] shadow-[0_0_15px_rgba(255,30,86,0.4)]">
                <div className="w-full h-full bg-[#08090C] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-black text-xl text-white tracking-tighter">t</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-white">
                  tcongs<span className="text-[#D4FF00]">.</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase -mt-1">
                  INFOTECH
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Empowering global brands with <span className="text-white font-medium">8+ years of expertise</span> in custom web development, e-commerce marketplace optimization, and Generative Engine Optimization (GEO). We turn complex tech challenges into high-converting digital growth.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#FF1E56]" />
                Mumbai HQ, India (Global Remote Support)
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-slate-300">
                <Globe className="w-3.5 h-3.5 text-[#D4FF00]" />
                USA • Dubai • Canada • Global
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Web & App Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-Commerce Marketplaces</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">GEO & Search SEO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social & PPC Performance Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Identity & UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Conversion Rate Optimization</a></li>
            </ul>
          </div>

          {/* Col 3: E-Commerce Growth */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Marketplace Scaling
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Amazon Seller Central</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Flipkart Growth Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Myntra & Ajio Fashion</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Nykaa & Beauty Channels</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tata CLiQ & Meesho Sales</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">International Marketplaces</a></li>
            </ul>
          </div>

          {/* Col 4: Quick Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <a 
                href="mailto:info@tcongsinfotech.com" 
                className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF1E56] text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF1E56]" />
                <span className="truncate">info@tcongsinfotech.com</span>
              </a>

              <button
                onClick={() => onOpenModal('General Consultation')}
                className="w-full bg-[#D4FF00] hover:bg-[#BCE600] text-black font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Schedule Free Meeting
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} TCONGS Infotech. All Rights Reserved.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline text-slate-400">Crafted with precision & creative intelligence.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#FF1E56] hover:text-white text-slate-400 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
