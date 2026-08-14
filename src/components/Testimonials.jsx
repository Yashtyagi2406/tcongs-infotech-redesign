import React from 'react';
import { Star, Quote, Sparkles, Building2, Globe } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "TCONGS Infotech transformed our Amazon & Flipkart sales completely. Within 3 months of their listing optimization and PPC management, our monthly revenue jumped by over 240%!",
      author: "David Miller",
      role: "VP of E-Commerce",
      company: "AuraCare Global (USA)",
      rating: 5,
      avatarBg: "bg-rose-500/20 text-rose-300"
    },
    {
      id: 2,
      quote: "Building a complex financial SaaS platform was daunting until we met TCONGS. Their UI/UX team in Figma crafted an astonishing interface, and the React codebase is lightning fast.",
      author: "Rashid Al-Maktoum",
      role: "Founder & CEO",
      company: "FinEdge Tech (Dubai, UAE)",
      rating: 5,
      avatarBg: "bg-amber-500/20 text-amber-300"
    },
    {
      id: 3,
      quote: "The Generative Engine Optimization (GEO) strategy delivered by TCONGS was a game changer. We now get cited directly in ChatGPT and Google AI search answers for our top industry terms.",
      author: "Elena Rostova",
      role: "Head of Marketing",
      company: "VerveHealth (Toronto)",
      rating: 5,
      avatarBg: "bg-emerald-500/20 text-emerald-300"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/20 text-[#D4FF00] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Client Reviews & Endorsements
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Trusted by Businesses <span className="text-gradient-lime">Worldwide</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Read how we help enterprise brands and high-growth startups succeed globally.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#D4FF00]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4FF00]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-white/10 group-hover:text-[#FF1E56]/40 transition-colors" />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full ${rev.avatarBg} flex items-center justify-center font-bold font-heading text-base`}>
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-heading">{rev.author}</div>
                  <div className="text-xs text-slate-400">{rev.role}</div>
                  <div className="text-[11px] text-[#D4FF00] font-medium flex items-center gap-1 mt-0.5">
                    <Globe className="w-3 h-3" /> {rev.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
