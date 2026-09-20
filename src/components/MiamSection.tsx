import React from 'react';
import { FileCheck, ShieldAlert, ArrowRight, UserCheck, HelpCircle, CheckCircle } from 'lucide-react';
import { URLS, PHONE_DISPLAY, PHONE_HREF } from '../data/content';

export const MiamSection: React.FC = () => {
  return (
    <section id="miam-section" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-[#1D6A70] text-xs font-semibold tracking-wider uppercase mb-3 border border-teal-100">
            Mediation Information &amp; Assessment Meeting
          </div>
          <h2
            id="miam-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#153243] font-serif tracking-tight"
          >
            What Happens at a MIAM Appointment?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A MIAM is the essential starting point for family mediation in Hampshire. It is an individual, private meeting held separately from the other person.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          <div className="p-6 rounded-xl bg-[#FBFBF9] border border-slate-200/80 flex flex-col justify-between hover:border-[#1D6A70]/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#1D6A70] flex items-center justify-center mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#153243] font-serif mb-2">
                1. Private One-to-One
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You attend your MIAM completely alone with the mediator. The other person is not present, giving you total freedom to discuss your concerns openly in full confidence.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-medium text-[#1D6A70]">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Strictly confidential</span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#FBFBF9] border border-slate-200/80 flex flex-col justify-between hover:border-[#1D6A70]/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#153243] font-serif mb-2">
                2. Understanding Options
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The mediator explains how mediation works, likely timelines, realistic costs, and all resolution routes—helping you decide if mediation is right for your circumstances.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-medium text-blue-700">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>No pressure or obligation</span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#FBFBF9] border border-slate-200/80 flex flex-col justify-between hover:border-[#1D6A70]/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-[#C47335] flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#153243] font-serif mb-2">
                3. Safety Assessment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We conduct a careful assessment to check for any safety concerns, power imbalances, or domestic issues to guarantee that mediation can proceed safely and constructively.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-medium text-[#C47335]">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Your safety is paramount</span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#FBFBF9] border border-slate-200/80 flex flex-col justify-between hover:border-[#1D6A70]/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#153243] font-serif mb-2">
                4. Court Form Sign-Off
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If mediation is not suitable, or if the other party declines to take part, the mediator can sign and certify the court form (C100 or Form A) so you can make your court application.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-medium text-emerald-700">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>FMC Authorized sign-off</span>
            </div>
          </div>

        </div>

        {/* Highlight Banner & CTA */}
        <div className="bg-[#153243] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold font-serif tracking-tight">
              Need a MIAM Appointment in Hampshire?
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Book online or call us directly. We offer appointments both remotely via video and in-person across Hampshire, with prompt scheduling to avoid delays.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              id="miam-section-cta"
              href={URLS.miam}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#153243] bg-white hover:bg-slate-100 shadow-xs transition-all text-center"
            >
              <span>Book a MIAM Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={PHONE_HREF}
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-white border border-slate-600 hover:border-slate-400 transition-colors text-center"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
