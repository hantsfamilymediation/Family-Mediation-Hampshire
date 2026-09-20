import React from 'react';
import { Phone, Calendar, ShieldCheck, Clock, Laptop, Award, CheckCircle2 } from 'lucide-react';
import { BRAND_NAME, PHONE_DISPLAY, PHONE_HREF, URLS, TRUST_POINTS } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-[#F4F4F0] via-[#FBFBF9] to-[#FBFBF9] pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200/80">
      {/* Subtle background ambient graphic */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Prominent Brand Eyebrow Banner */}
            <div
              id="hero-brand-badge"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#153243]/5 border border-[#153243]/15 text-[#153243] text-sm font-semibold tracking-wide mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#1D6A70] animate-pulse" />
              <span>Welcome to <strong className="font-bold text-[#153243]">{BRAND_NAME}</strong></span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-headline"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-[#153243] tracking-tight leading-[1.18] font-serif mb-6"
            >
              Family Mediation in Hampshire — <span className="text-[#1D6A70]">Calm, Confidential &amp; Practical</span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Help separating couples, parents and families reach workable agreements about children, finances and property without going straight to court.
            </p>

            {/* Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                id="hero-cta-miam"
                href={URLS.miam}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-[#1D6A70] hover:bg-[#155459] shadow-md hover:shadow-lg transition-all text-center"
              >
                <Calendar className="w-5 h-5 shrink-0" />
                <span>Book a MIAM Appointment</span>
              </a>

              <a
                id="hero-cta-call"
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-[#153243] bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:shadow-md transition-all text-center"
              >
                <Phone className="w-5 h-5 text-[#1D6A70] shrink-0" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
            </div>

            {/* Trust Points Container */}
            <div
              id="hero-trust-points"
              className="w-full pt-6 border-t border-slate-200/90"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm font-medium text-slate-700">
                {TRUST_POINTS.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-slate-200/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1D6A70] shrink-0" />
                    <span className="font-semibold text-slate-800">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Visual Trust Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Header bar */}
              <div className="bg-[#153243] p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Accredited Hampshire Service
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-300 bg-white/10 px-2 py-0.5 rounded">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    FMC Code of Practice
                  </span>
                </div>
                <h2 className="text-xl font-bold font-serif mt-2 tracking-tight">
                  Independent Family Resolution
                </h2>
                <p className="text-xs text-slate-300 mt-1">
                  Supporting Hampshire parents and couples with structured, constructive guidance.
                </p>
              </div>

              {/* Informative Body Content */}
              <div className="p-6 space-y-4">
                
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-lg bg-teal-50 text-[#1D6A70] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-sans">Private 1-Hour MIAM</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Confidential assessment of your options with no obligation to proceed unless you feel ready.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-sans">Court Form Sign-Off</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Form C100 &amp; Form A certification issued promptly by accredited mediators if court is unavoidable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-700 shrink-0">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-sans">Remote &amp; In-Person Formats</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Join from your home or in separate shuttle rooms where you never have to be in the same space.
                    </p>
                  </div>
                </div>

                {/* Direct quick reassurance footer */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                  <span>Questions? Call our team:</span>
                  <a
                    href={PHONE_HREF}
                    className="font-bold text-[#1D6A70] hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
