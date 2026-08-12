import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, PhoneCall, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Featured Work', href: '#portfolio' },
    { name: 'Our Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#08090C]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF1E56] to-[#D4FF00] p-[2px] shadow-[0_0_15px_rgba(255,30,86,0.4)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#08090C] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-black text-xl text-white tracking-tighter">t</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-[#FF1E56] transition-colors">
                tcongs<span className="text-[#D4FF00]">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase -mt-1">
                INFOTECH
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#12141A]/60 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4FF00]" />
              Let's Talk
            </a>

            <button
              onClick={() => onOpenModal('Web & App Development')}
              className="relative group bg-gradient-to-r from-[#FF1E56] to-[#E51A4B] text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(255,30,86,0.4)] hover:shadow-[0_0_30px_rgba(255,30,86,0.6)] transition-all duration-300 flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Book Strategy Call 🚀
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4FF00] to-[#FF1E56] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white bg-white/5 rounded-xl border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#08090C]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl animate-slideDown">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.name}
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('General Consultation');
                }}
                className="w-full bg-gradient-to-r from-[#FF1E56] to-[#E51A4B] text-white font-semibold py-3 rounded-xl text-sm shadow-[0_0_20px_rgba(255,30,86,0.4)] flex items-center justify-center gap-2"
              >
                Book Strategy Call 🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
