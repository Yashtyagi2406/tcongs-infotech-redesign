import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Sparkles, ShieldCheck, ArrowRight, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: ['Web & App Development'],
    message: '',
    captchaInput: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'Web & App Development',
    'E-Commerce Growth (Amazon/Flipkart)',
    'GEO & Generative AI SEO',
    'Branding & UI/UX Design',
    'Performance PPC & Social Ads',
    'Custom Software / SaaS'
  ];

  const handleCheckboxToggle = (serviceName) => {
    if (formData.services.includes(serviceName)) {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== serviceName)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, serviceName]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captchaInput !== '8') {
      alert('Please answer the human verification question correctly (5 + 3 = 8)');
      return;
    }
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF1E56]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4FF00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF1E56]/10 border border-[#FF1E56]/20 text-[#FF1E56] text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Let's Build Together
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Let’s Build Something You’ll Be <span className="text-gradient-crimson">Proud Of</span>
              </h2>
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                Have a project in mind? Whether you need a high-converting website, mobile app, or e-commerce growth strategy, our technical team is ready.
              </p>
            </div>

            {/* Response Timeline Guarantees */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#12141A] border border-white/10">
                <div className="p-2.5 rounded-xl bg-[#FF1E56]/10 text-[#FF1E56] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">1 Business Day Response</h4>
                  <p className="text-xs text-slate-400 mt-0.5">You’ll hear directly from our senior technical director within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#12141A] border border-white/10">
                <div className="p-2.5 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">Transparent Pricing & Proposal</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Receive a clear execution roadmap with zero hidden fees.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a 
                href="mailto:info@tcongsinfotech.com"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-[#FF1E56]" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Email Directly</div>
                  <div className="text-sm font-bold text-white">info@tcongsinfotech.com</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-white">
                <MapPin className="w-5 h-5 text-[#D4FF00]" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Headquarters</div>
                  <div className="text-sm font-bold text-white">Mumbai Office, India (Serving Global Clients)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Contact Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold font-heading text-white">Send Us an Inquiry 🚀</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#141722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF1E56] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#141722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF1E56] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#141722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF1E56] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Company / Brand Name</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-[#141722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF1E56] transition-colors"
                    />
                  </div>
                </div>

                {/* Services Checkbox Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Services Needed (Select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableServices.map((svc) => (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => handleCheckboxToggle(svc)}
                        className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all ${
                          formData.services.includes(svc)
                            ? 'bg-[#FF1E56]/15 border-[#FF1E56] text-white'
                            : 'bg-[#141722] border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        {formData.services.includes(svc) ? '✓ ' : '+ '}{svc}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Project Brief / Requirement Details</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your target features, goals, or current bottlenecks..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#141722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF1E56] transition-colors resize-none"
                  />
                </div>

                {/* Human Verification */}
                <div className="p-4 rounded-2xl bg-[#141722] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-300">
                    <span className="font-bold text-white">Human Verification:</span> What is 5 + 3?
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Result (e.g. 8)"
                    value={formData.captchaInput}
                    onChange={(e) => setFormData({...formData, captchaInput: e.target.value})}
                    className="w-full sm:w-32 bg-[#0E1017] border border-white/10 rounded-xl px-3 py-2 text-sm text-center text-white focus:outline-none focus:border-[#D4FF00]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF1E56] to-[#E51A4B] text-white font-semibold py-4 rounded-xl shadow-[0_0_30px_rgba(255,30,86,0.5)] hover:shadow-[0_0_45px_rgba(255,30,86,0.7)] transition-all flex items-center justify-center gap-2 group"
                >
                  Submit Inquiry Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-[#D4FF00]/10 border border-[#D4FF00]/30 rounded-full flex items-center justify-center mx-auto mb-6 text-[#D4FF00]">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold font-heading text-white mb-3">Inquiry Received!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you, <span className="text-[#D4FF00] font-semibold">{formData.name}</span>. Our technical director has received your project details and will send a detailed proposal to <span className="text-white font-semibold">{formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
