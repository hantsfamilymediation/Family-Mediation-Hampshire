import React from 'react';
import { Phone, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BRAND_NAME, PHONE_DISPLAY, PHONE_HREF, URLS } from '../data/content';

export const FinalCta: React.FC = () => {
  return (
    <section id="final-cta-section" className="py-16 md:py-24 bg-[#153243] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1D6A70]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Confidential, Calm &amp; Professional Support</span>
        </div>

        {/* Required Heading */}
        <h2
          id="final-cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight text-white mb-6"
        >
          Start With <span className="text-emerald-300">{BRAND_NAME}</span>
        </h2>

        {/* Required Text */}
        <p
          id="final-cta-text"
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          You do not need to have everything worked out before getting in touch.
        </p>

        {/* Highlighted Phone Display & Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto">
          
          <a
            id="final-cta-phone-btn"
            href={PHONE_HREF}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-lg font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xs transition-all shadow-md"
          >
            <Phone className="w-5 h-5 text-amber-300 shrink-0" />
            <span className="font-mono tracking-wide">{PHONE_DISPLAY}</span>
          </a>

          <a
            id="final-cta-contact-btn"
            href={URLS.contactUs}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-[#153243] bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg hover:shadow-emerald-500/20"
          >
            <span>Contact {BRAND_NAME}</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>

        </div>

        {/* Reassurance notes */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Private &amp; Without Prejudice</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <div>
            <span>No formal paperwork needed to enquire</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <div>
            <span>Online &amp; In-Person across Hampshire</span>
          </div>
        </div>

      </div>
    </section>
  );
};
