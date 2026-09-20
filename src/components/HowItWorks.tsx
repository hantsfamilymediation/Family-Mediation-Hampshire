import React from 'react';
import { ArrowRight, MessageSquare, UserCheck, MailCheck, Users, FileSpreadsheet } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-[#1D6A70]" />;
      case 1:
        return <UserCheck className="w-5 h-5 text-[#1D6A70]" />;
      case 2:
        return <MailCheck className="w-5 h-5 text-[#1D6A70]" />;
      case 3:
        return <Users className="w-5 h-5 text-[#1D6A70]" />;
      case 4:
        return <FileSpreadsheet className="w-5 h-5 text-[#1D6A70]" />;
      default:
        return <MessageSquare className="w-5 h-5 text-[#1D6A70]" />;
    }
  };

  return (
    <section id="how-it-works-section" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-3">
            Step-by-Step Pathway
          </div>
          <h2
            id="how-it-works-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#153243] font-serif tracking-tight"
          >
            How Family Mediation Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A transparent, 5-stage process designed to guide you from initial enquiry through to clear, mutually agreed arrangements.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              id={`step-${step.stepNumber}`}
              className="bg-[#FBFBF9] rounded-xl border border-slate-200/90 p-5 flex flex-col justify-between relative group hover:border-[#1D6A70]/50 hover:bg-white hover:shadow-sm transition-all"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#1D6A70] bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                    Step {step.stepNumber}
                  </span>
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#153243] font-serif mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {step.actionUrl && (
                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <a
                    href={step.actionUrl}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D6A70] hover:text-[#153243] transition-colors"
                  >
                    <span>{step.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
