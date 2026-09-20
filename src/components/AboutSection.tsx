import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake, Scale, Check } from 'lucide-react';
import { BRAND_NAME, URLS, PHONE_DISPLAY, PHONE_HREF } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-16 md:py-20 bg-[#F4F4F0]/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold tracking-wider uppercase">
              Our Professional Role
            </div>

            <h2
              id="about-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#153243] font-serif tracking-tight leading-tight"
            >
              About <span className="text-[#1D6A70]">{BRAND_NAME}</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              At <strong className="font-semibold text-[#153243]">{BRAND_NAME}</strong>, we provide a private, impartial and structured way for separating couples, parents and families across Hampshire to work through sensitive issues and create practical, enduring agreements.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Family breakdown, separation or divorce can feel overwhelming. Rather than escalating conflicts through courtrooms or exchanging hostile solicitor correspondence, mediation gives you the safe space to retain control over decisions concerning your children, your home, and your financial future.
            </p>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-slate-700 font-medium">Independent &amp; strictly impartial</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-slate-700 font-medium">Confidential &amp; without prejudice</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-slate-700 font-medium">Children’s welfare at the centre</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-slate-700 font-medium">Fast, cost-effective resolutions</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                id="about-cta-link"
                href={URLS.aboutUs}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#153243] hover:bg-[#1E435B] shadow-xs hover:shadow-md transition-all"
              >
                <span>Read more about our service</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="about-cta-contact"
                href={URLS.contactUs}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#153243] bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Structured Principles Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-10 -mt-10 pointer-events-none" />

              <h3 className="text-xl font-bold font-serif text-[#153243] mb-6">
                A Constructive Alternative to Court
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-teal-50 text-[#1D6A70] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-sans">Safe &amp; Protected Environment</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Mediation takes place in a calm setting where both voices are heard respectfully, without intimidation or pressure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-emerald-50 text-[#1D6A70] shrink-0">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-sans">You Retain Full Control</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      A family court judge who does not know your children will decide your future if you litigate. Mediation lets you make your own decisions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-amber-50 text-[#C47335] shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-sans">Preserving Parental Cooperation</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Litigation often deepens resentment. Mediation fosters communication channels so you can effectively co-parent for years to come.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Direct telephone advice:</span>
                <a href={PHONE_HREF} className="font-semibold text-[#153243] hover:text-[#1D6A70]">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
