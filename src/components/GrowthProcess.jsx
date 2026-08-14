import React from 'react';
import { Sparkles, Search, Compass, Palette, Code, CheckCircle, Rocket } from 'lucide-react';

export default function GrowthProcess({ onOpenModal }) {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Market Analysis',
      desc: 'We analyze your business goals, target demographic, and competitive landscape to establish a winning digital foundation.',
      icon: Search,
      badge: 'Strategy'
    },
    {
      num: '02',
      title: 'Planning & Architecture',
      desc: 'Creation of detailed technical blueprints, user flows, database schemas, and marketplace scaling roadmaps.',
      icon: Compass,
      badge: 'Blueprint'
    },
    {
      num: '03',
      title: 'Figma UI/UX & Branding',
      desc: 'Crafting intuitive, pixel-perfect user interfaces that captivate visitors and establish instant brand authority.',
      icon: Palette,
      badge: 'Design'
    },
    {
      num: '04',
      title: 'Full-Stack Development',
      desc: 'Engineered using modern React, Next.js, Node.js or mobile frameworks built for maximum speed and security.',
      icon: Code,
      badge: 'Engineering'
    },
    {
      num: '05',
      title: 'QA & Security Testing',
      desc: 'Rigorously tested across devices, browsers, payment gateways, and security vulnerabilities prior to launch.',
      icon: CheckCircle,
      badge: 'Quality'
    },
    {
      num: '06',
      title: 'Launch & GEO Scaling',
      desc: 'Continuous post-launch deployment, Generative AI SEO optimization, and performance marketing expansion.',
      icon: Rocket,
      badge: 'Growth'
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF1E56]/10 border border-[#FF1E56]/20 text-[#FF1E56] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Our Proven Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            From Idea to Scalable <span className="text-gradient-crimson">Digital Success</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Our structured 6-step growth process ensures transparent execution, zero delays, and maximum ROI.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.num}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Step Number Backdrop */}
                <div className="absolute top-4 right-6 text-6xl font-black font-heading text-white/[0.04] group-hover:text-[#FF1E56]/10 transition-colors pointer-events-none">
                  {step.num}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF1E56] group-hover:bg-[#FF1E56] group-hover:text-white transition-colors">
                      <StepIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 text-[#D4FF00] border border-white/10">
                      Phase {step.num} • {step.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-[#FF1E56] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-slate-400 font-medium">
                  <span className="text-[#D4FF00]">✓ Milestone Delivered</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
