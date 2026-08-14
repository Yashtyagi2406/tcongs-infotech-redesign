import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';

export default function FAQSection({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'What services does TCONGS Infotech offer?',
      a: 'We offer full-stack web development (React, Next.js), mobile app development (iOS/Android), custom software, E-commerce marketplace management (Amazon, Flipkart, Myntra, Nykaa), and Generative Engine Optimization (GEO).'
    },
    {
      q: 'How long does it take to build a website or mobile app?',
      a: 'Timeline depends on project complexity. A high-converting website takes 7–15 days, while complex SaaS platforms or mobile applications typically take 3–8 weeks.'
    },
    {
      q: 'Do you work with international clients?',
      a: 'Yes! We actively serve clients across the USA, Canada, Dubai (UAE), Europe, and India. Our global delivery model offers 24/7 communication and dedicated SLA support.'
    },
    {
      q: 'Can you help grow my business after development is launched?',
      a: 'Absolutely. We provide post-launch GEO (Generative AI SEO), Google PPC Ads, Meta Social Marketing, and Marketplace listing optimization to guarantee steady lead flow and sales growth.'
    },
    {
      q: 'What makes TCONGS Infotech different from traditional agencies?',
      a: 'We focus on end-to-end digital growth — not just code. From Figma UI/UX to cloud deployment and marketplace sales management, you get a single dedicated partner.'
    },
    {
      q: 'How can I get started on my project?',
      a: 'Simply click "Book Strategy Call 🚀" or use our instant Project Estimator above. Share your goals, and our technical team will deliver a clear technical proposal within 24 hours.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faqs" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF1E56]/10 border border-[#FF1E56]/20 text-[#FF1E56] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Questions? <span className="text-gradient-crimson">We've Got Answers</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Everything you need to know about partnering with TCONGS Infotech.
          </p>
        </div>

        {/* Search Filter Input */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. timeline, Amazon, international support)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#12141A] border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF1E56] transition-colors shadow-inner"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold font-heading text-base sm:text-lg text-white hover:text-[#FF1E56] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#D4FF00] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-12 text-center p-8 glass-panel rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold font-heading text-white mb-2">Have a unique question?</h3>
          <p className="text-slate-400 text-sm mb-4">Our strategy team is online and ready to assist you.</p>
          <button
            onClick={() => onOpenModal('General Inquiry')}
            className="bg-[#D4FF00] hover:bg-[#BCE600] text-black font-semibold py-3 px-6 rounded-xl text-xs transition-colors inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Talk Directly With Technical Lead
          </button>
        </div>

      </div>
    </section>
  );
}
