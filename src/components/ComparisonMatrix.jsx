import React from 'react';
import { Check, X, ShieldCheck, Sparkles, Award } from 'lucide-react';

export default function ComparisonMatrix({ onOpenModal }) {
  const criteria = [
    {
      name: 'Full-Funnel Capabilities (Dev + E-Com + Marketing)',
      tcongs: 'Complete In-House Team',
      traditional: 'Web Only or Siloed',
      freelance: 'Single Skill Only'
    },
    {
      name: 'GEO & ChatGPT AI Search Citation Setup',
      tcongs: 'Included & Specialized',
      traditional: 'Rarely Provided',
      freelance: 'Not Available'
    },
    {
      name: 'Turnaround Speed & Dedicated SLA',
      tcongs: 'Fast Sprints (1-4 Weeks)',
      traditional: 'Slow 3-6 Months',
      freelance: 'Unpredictable'
    },
    {
      name: 'Amazon & Marketplace Growth Management',
      tcongs: 'Multi-Channel Experts',
      traditional: 'Not Supported',
      freelance: 'Basic Listings Only'
    },
    {
      name: '100% IP Code & Asset Ownership',
      tcongs: '100% Client Owned',
      traditional: 'Vendor Lock-in',
      freelance: 'Varies / Risky'
    },
    {
      name: 'Dedicated Technical Account Director',
      tcongs: 'Single Point of Contact',
      traditional: 'Junior Account Reps',
      freelance: 'No Support Team'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0B0D13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/20 text-[#D4FF00] text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Why Choose TCONGS Infotech
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            How We Compare Against <span className="text-gradient-lime">Alternatives</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            See why leading global brands partner with us over traditional agencies or scattered freelancers.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#12141A]/90">
                  <th className="p-5 sm:p-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Feature / Advantage
                  </th>
                  <th className="p-5 sm:p-6 text-sm font-bold text-white bg-[#FF1E56]/15 border-x border-[#FF1E56]/30 text-center w-1/3">
                    <div className="flex items-center justify-center gap-1.5 text-white font-heading text-lg">
                      <Sparkles className="w-4 h-4 text-[#D4FF00]" />
                      tcongs.
                    </div>
                  </th>
                  <th className="p-5 sm:p-6 text-xs font-semibold text-slate-400 text-center">
                    Traditional Agencies
                  </th>
                  <th className="p-5 sm:p-6 text-xs font-semibold text-slate-400 text-center">
                    Scattered Freelancers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {criteria.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 sm:p-6 font-medium text-slate-200">
                      {row.name}
                    </td>

                    {/* TCONGS Col */}
                    <td className="p-5 sm:p-6 text-center font-bold text-white bg-[#FF1E56]/10 border-x border-[#FF1E56]/20">
                      <div className="flex items-center justify-center gap-2 text-[#D4FF00]">
                        <Check className="w-4 h-4 text-[#D4FF00]" />
                        <span>{row.tcongs}</span>
                      </div>
                    </td>

                    {/* Traditional Agencies */}
                    <td className="p-5 sm:p-6 text-center text-slate-400">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500/70" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>

                    {/* Freelancers */}
                    <td className="p-5 sm:p-6 text-center text-slate-400">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500/70" />
                        <span>{row.freelance}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenModal('General Consultation')}
            className="bg-gradient-to-r from-[#FF1E56] to-[#E51A4B] text-white font-semibold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(255,30,86,0.4)] hover:shadow-[0_0_45px_rgba(255,30,86,0.6)] transition-all text-sm inline-flex items-center gap-2"
          >
            Experience The TCONGS Difference 🚀
          </button>
        </div>

      </div>
    </section>
  );
}
