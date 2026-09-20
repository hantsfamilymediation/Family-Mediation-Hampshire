import React from 'react';
import { Lock, Scale, Heart, Award, LayoutGrid, PiggyBank } from 'lucide-react';
import { BRAND_NAME, WHY_CHOOSE_POINTS } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: // Fully Confidential
        return <Lock className="w-5 h-5 text-[#1D6A70]" />;
      case 1: // Impartial & Fair
        return <Scale className="w-5 h-5 text-[#1D6A70]" />;
      case 2: // Child-Focused
        return <Heart className="w-5 h-5 text-[#1D6A70]" />;
      case 3: // FMC Accredited
        return <Award className="w-5 h-5 text-[#1D6A70]" />;
      case 4: // Flexible Options
        return <LayoutGrid className="w-5 h-5 text-[#1D6A70]" />;
      case 5: // Cost-Conscious
        return <PiggyBank className="w-5 h-5 text-[#1D6A70]" />;
      default:
        return <Award className="w-5 h-5 text-[#1D6A70]" />;
    }
  };

  return (
    <section id="why-choose-section" className="py-16 md:py-20 bg-[#F4F4F0]/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-3">
            Accredited Professional Standards
          </div>
          <h2
            id="why-choose-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#153243] font-serif tracking-tight"
          >
            Why Choose <span className="text-[#1D6A70]">{BRAND_NAME}</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We are dedicated to helping families find balanced, enduring agreements through empathetic yet highly professional dispute resolution.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_POINTS.map((item, idx) => (
            <div
              key={item.title}
              id={`why-choose-${idx}`}
              className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md hover:border-[#1D6A70]/30 transition-all"
            >
              <div className="p-3 rounded-lg bg-[#FBFBF9] border border-slate-100 w-fit mb-4">
                {getIcon(idx)}
              </div>
              <h3 className="text-lg font-bold text-[#153243] font-serif mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
