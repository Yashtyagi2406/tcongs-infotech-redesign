import React, { useState } from 'react';
import { X, Sparkles, Calendar, CheckCircle2, Send, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectModal({ isOpen, onClose, defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService || 'Web & App Development',
    budget: '$5k - $10k',
    timeline: 'Within 1 Month',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0E1017] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF1E56]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#D4FF00]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 rounded-lg bg-[#FF1E56]/10 text-[#FF1E56]">
                <Sparkles className="w-5 h-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FF1E56]">Start Your Digital Journey</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-2">
              Schedule a Free Strategy Call 🚀
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Share your project vision with TCONGS Infotech. You'll receive a clear execution roadmap & pricing within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#141722] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF1E56] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#141722] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF1E56] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#141722] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF1E56] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Core Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-[#141722] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF1E56] transition-colors"
                  >
                    <option value="Web & App Development">Web & App Development</option>
                    <option value="E-commerce Growth (Amazon/Flipkart)">E-commerce Growth (Amazon/Flipkart)</option>
                    <option value="GEO & SEO Marketing">GEO & SEO Marketing</option>
                    <option value="Branding & UI/UX Design">Branding & UI/UX Design</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Estimated Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-[#141722] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF1E56] transition-colors"
                  >
                    <option value="< $5k">&lt; $5,000</option>
                    <option value="$5k - $10k">$5,000 - $10,000</option>
                    <option value="$10k - $25k">$10,000 - $25,000</option>
                    <option value="$25k+">$25,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Target Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full bg-[#141722] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF1E56] transition-colors"
                  >
                    <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="Flexible">Flexible Timeline</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Project Overview</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your product goals, audience, or current challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#141722] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF1E56] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF1E56] to-[#E51A4B] text-white font-semibold py-3.5 px-6 rounded-xl hover:shadow-[0_0_25px_rgba(255,30,86,0.5)] transition-all flex items-center justify-center gap-2 group"
                >
                  Submit Inquiry & Reserve Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#D4FF00]/10 border border-[#D4FF00]/30 rounded-full flex items-center justify-center mx-auto mb-4 text-[#D4FF00]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-2">Strategy Call Scheduled!</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
              Thank you, <span className="text-[#D4FF00] font-medium">{formData.name}</span>! Our technical lead will contact you at <span className="text-white font-medium">{formData.email}</span> within 1 business day.
            </p>
            <button
              onClick={handleReset}
              className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-2.5 rounded-xl transition-colors text-sm"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
