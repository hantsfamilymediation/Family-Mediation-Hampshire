import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, PHONE_DISPLAY, PHONE_HREF, URLS } from '../data/content';

export const FaqSection: React.FC = () => {
  // First item open by default
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq-section" className="py-16 md:py-20 bg-[#F4F4F0]/60 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#1D6A70]" />
            <span>Common Questions</span>
          </div>
          <h2
            id="faq-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#153243] font-serif tracking-tight"
          >
            Family Mediation Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Clear, honest answers to help you understand your rights, court rules, and the family mediation journey.
          </p>
        </div>

        {/* Compact Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-[#153243] font-serif pr-2">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-md bg-slate-100 text-slate-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-teal-50 text-[#1D6A70]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Reassurance footnote */}
        <div className="mt-10 p-5 rounded-xl bg-white border border-slate-200/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#153243]">Have another question about family mediation?</h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Speak directly with our Hampshire mediation coordination team.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-[#153243] bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#1D6A70]" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={URLS.contactUs}
              className="inline-flex items-center px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#1D6A70] hover:bg-[#155459] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
