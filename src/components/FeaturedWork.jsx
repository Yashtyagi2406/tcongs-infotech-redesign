import React, { useState } from 'react';
import { ExternalLink, TrendingUp, Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export default function FeaturedWork({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'AuraCare E-Commerce & Marketplace',
      category: 'E-Commerce Growth',
      clientLocation: 'United States',
      metrics: '+240% Sales Growth in 90 Days',
      metricSub: 'Amazon & Flipkart Optimization',
      imageBg: 'from-[#FF1E56]/20 to-[#12141A]',
      tech: ['Amazon Seller', 'Flipkart Ads', 'Shopify Plus', 'GEO SEO'],
      desc: 'Scalable multi-marketplace store management with AI-optimized product listings and high-converting PPC campaigns.'
    },
    {
      id: 2,
      title: 'FinEdge Global SaaS Web Portal',
      category: 'Web & Mobile',
      clientLocation: 'Dubai, UAE',
      metrics: '3.2x User Engagement',
      metricSub: '99.9% Uptime SLA Architecture',
      imageBg: 'from-[#D4FF00]/20 to-[#12141A]',
      tech: ['React', 'Next.js', 'Node.js', 'Figma UI/UX'],
      desc: 'Full-stack enterprise SaaS platform featuring real-time analytics dashboards, responsive UI, and cloud infrastructure.'
    },
    {
      id: 3,
      title: 'LuxeCouture Marketplace & App',
      category: 'Branding & UI/UX',
      clientLocation: 'Mumbai & London',
      metrics: '4.9★ App Store Rating',
      metricSub: '+180% Organic Conversion Rate',
      imageBg: 'from-[#FF1E56]/20 to-[#12141A]',
      tech: ['iOS / Android', 'Figma UX', 'Custom API', 'Meta Ads'],
      desc: 'Luxury fashion e-commerce experience with seamless mobile navigation, interactive wireframes, and brand identity.'
    },
    {
      id: 4,
      title: 'VerveHealth AI Lead Funnel',
      category: 'Marketing & GEO',
      clientLocation: 'Toronto, Canada',
      metrics: '#1 ChatGPT AI Citation',
      metricSub: '+310% B2B Qualified Leads',
      imageBg: 'from-[#D4FF00]/20 to-[#12141A]',
      tech: ['GEO AI SEO', 'Google PPC', 'CRO Funnel', 'HubSpot'],
      desc: 'Generative Engine Optimization (GEO) strategy establishing market authority across Google AI Overviews & ChatGPT.'
    }
  ];

  const filters = ['All', 'E-Commerce Growth', 'Web & Mobile', 'Branding & UI/UX', 'Marketing & GEO'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#08090C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF1E56]/10 border border-[#FF1E56]/20 text-[#FF1E56] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Proven Client Results
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Featured Case Studies & <span className="text-gradient-crimson">Impact</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Explore how TCONGS Infotech turns complex digital ideas into high-revenue products worldwide.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? 'bg-[#FF1E56] text-white shadow-[0_0_20px_rgba(255,30,86,0.4)]'
                  : 'bg-[#12141A] text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Banner Preview */}
              <div className={`p-8 bg-gradient-to-br ${project.imageBg} border-b border-white/10 relative overflow-hidden`}>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-semibold text-white border border-white/20">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    🌍 {project.clientLocation}
                  </span>
                </div>

                {/* Highlight Impact Badge */}
                <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 mb-2">
                  <div className="flex items-center gap-2 text-[#D4FF00] font-bold text-lg font-heading">
                    <TrendingUp className="w-5 h-5 text-[#FF1E56]" />
                    {project.metrics}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">{project.metricSub}</div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-2 group-hover:text-[#FF1E56] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenModal(`Case Study Inquiry (${project.title})`)}
                  className="w-full py-3 px-4 rounded-xl bg-[#141722] hover:bg-white/10 text-white border border-white/10 text-xs font-semibold transition-all flex items-center justify-center gap-2 group/btn"
                >
                  View Case Study Strategy
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
