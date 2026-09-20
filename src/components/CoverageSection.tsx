import React from 'react';
import { MapPin, Globe, ArrowRight, ShieldCheck, Laptop } from 'lucide-react';
import { BRAND_NAME, HAMPSHIRE_LOCATIONS, URLS, PHONE_DISPLAY, PHONE_HREF } from '../data/content';

export const CoverageSection: React.FC = () => {
  return (
    <section id="coverage-section" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hampshire Locations */}
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-3">
              Geographic Coverage
            </div>

            <h2
              id="coverage-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#153243] font-serif tracking-tight mb-4"
            >
              Where <span className="text-[#1D6A70]">{BRAND_NAME}</span> Works
            </h2>

            <p className="text-base text-slate-700 leading-relaxed mb-6">
              We proudly provide professional family mediation throughout <strong className="font-semibold text-slate-900">Hampshire</strong> and its surrounding areas, alongside our convenient and secure online mediation service serving families across <strong className="font-semibold text-slate-900">England &amp; Wales</strong>.
            </p>

            {/* Hampshire Locations Tag Cloud */}
            <div className="bg-[#FBFBF9] p-6 rounded-2xl border border-slate-200/90 mb-6">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[#153243]">
                <MapPin className="w-4 h-4 text-[#1D6A70]" />
                <span>Hampshire Communities Served</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {HAMPSHIRE_LOCATIONS.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 shadow-2xs hover:border-[#1D6A70] hover:text-[#1D6A70] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D6A70]" />
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                id="coverage-cta-contact"
                href={URLS.contactUs}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#153243] hover:bg-[#1E435B] transition-colors shadow-xs"
              >
                <span>Find an appointment near you</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PHONE_HREF}
                className="text-sm font-semibold text-slate-700 hover:text-[#1D6A70]"
              >
                Call: {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Right Column: Online Mediation across England & Wales */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#153243] to-[#1E435B] text-white p-7 sm:p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none" />

              <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Globe className="w-4 h-4" />
                <span>Nationwide Remote Access</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif mb-3 tracking-tight">
                Online Mediation Across England &amp; Wales
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Cannot travel or prefer to mediate from separate locations? Our secure video conferencing platform allows parents and couples anywhere in Hampshire or across the UK to resolve disputes safely and conveniently.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Laptop className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Participate securely on any computer, tablet or mobile</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Private breakout rooms for confidential shuttle discussions</span>
                </div>
              </div>

              <a
                id="coverage-cta-online"
                href={URLS.onlineMediation}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#153243] bg-white hover:bg-slate-100 transition-colors shadow-xs"
              >
                <span>Discover Online Mediation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
