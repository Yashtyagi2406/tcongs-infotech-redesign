import React, { useState } from 'react';
import { 
  Code, ShoppingBag, TrendingUp, Palette, Rocket, 
  ArrowRight, Check, Sparkles, Smartphone, Shield, Zap, Target
} from 'lucide-react';

export default function ServiceMatrix({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Services' },
    { id: 'Web & Mobile', label: 'Web & Mobile Dev' },
    { id: 'E-Commerce Growth', label: 'E-Commerce Growth' },
    { id: 'Marketing & GEO', label: 'GEO & Marketing' },
    { id: 'Branding & UI/UX', label: 'Branding & UI/UX' },
    { id: 'Business Strategy', label: 'Business Strategy' },
  ];

  const services = [
    {
      id: 'web-dev',
      category: 'Web & Mobile',
      title: 'Web & App Development',
      badge: 'High Performance',
      icon: Code,
      desc: 'Custom web apps, mobile solutions (iOS/Android), and enterprise platforms engineered for speed, security, and global scalability.',
      features: [
        'React, Next.js & Node.js Architecture',
        'Cross-Platform iOS & Android Apps',
        'Custom Software & API Integrations',
        '24/7 Security, SLA & Maintenance'
      ],
      color: '#FF1E56'
    },
    {
      id: 'ecommerce',
      category: 'E-Commerce Growth',
      title: 'E-Commerce Marketplace Growth',
      badge: 'Revenue Scaling',
      icon: ShoppingBag,
      desc: 'End-to-end management for Amazon, Flipkart, Myntra, Nykaa, and international platforms to boost product listings and profitability.',
      features: [
        'Amazon & Flipkart Account Management',
        'Listing Optimization & A+ Content',
        'Sponsored Ads & PPC Management',
        'Global Marketplace Onboarding'
      ],
      color: '#D4FF00'
    },
    {
      id: 'geo-seo',
      category: 'Marketing & GEO',
      title: 'GEO & Generative AI SEO',
      badge: 'AI Search Era',
      icon: TrendingUp,
      desc: 'Optimize your digital brand to get cited by ChatGPT, Perplexity, and Google AI Overviews alongside traditional search rankings.',
      features: [
        'Generative Engine Optimization (GEO)',
        'Technical & Content SEO Strategy',
        'Google PPC & Social Performance Ads',
        'Conversion Rate Optimization (CRO)'
      ],
      color: '#FF1E56'
    },
    {
      id: 'ui-ux',
      category: 'Branding & UI/UX',
      title: 'Brand Identity & Figma UI/UX',
      badge: 'Creative Intelligence',
      icon: Palette,
      desc: 'Intuitive, pixel-perfect digital designs that wow users at first glance, increase engagement, and establish strong brand trust.',
      features: [
        'Figma UI/UX & Interactive Wireframes',
        'Modern Design Systems & Guidelines',
        'Brand Strategy & Logo Systems',
        'Redesign & SaaS Interface Polish'
      ],
      color: '#D4FF00'
    },
    {
      id: 'lead-gen',
      category: 'Business Strategy',
      title: 'Lead Generation & Sales Funnels',
      badge: 'High Conversion',
      icon: Target,
      desc: 'Structured customer acquisition strategies, automated sales funnels, and data analytics to turn visitors into loyal paying clients.',
      features: [
        'Automated B2B & B2C Sales Funnels',
        'Performance Lead Generation',
        'Customer Retention & Email Marketing',
        'Analytics & Growth Reporting'
      ],
      color: '#FF1E56'
    },
    {
      id: 'custom-software',
      category: 'Web & Mobile',
      title: 'Custom Software & SaaS Solutions',
      badge: 'Enterprise Grade',
      icon: Zap,
      desc: 'Tailor-made software infrastructure built to automate business operations, integrate cloud databases, and scale efficiently.',
      features: [
        'Cloud-Native SaaS Platforms',
        'CRM & ERP Portal Development',
        'Database & Backend Optimization',
        'Legacy Software Modernization'
      ],
      color: '#D4FF00'
    }
  ];

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FF1E56]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-[#D4FF00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF1E56]/10 border border-[#FF1E56]/20 text-[#FF1E56] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Digital Solutions & Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Comprehensive Growth Solutions for <span className="text-gradient-crimson">Modern Businesses</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            From initial concept to full-scale marketplace dominance, we deliver end-to-end creative intelligence and high-converting technology.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-105'
                  : 'bg-[#12141A] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Glowing Bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all group-hover:h-1.5" 
                  style={{ backgroundColor: service.color }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-[#FF1E56] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8 text-xs text-slate-300">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#D4FF00] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onOpenModal(service.title)}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#FF1E56] border border-white/10 hover:border-[#FF1E56] text-white text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  Request Proposal for {service.category}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
