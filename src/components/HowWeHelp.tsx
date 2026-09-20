import React from 'react';
import { ArrowRight, FileCheck, Users, Coins, Video, Split } from 'lucide-react';
import { BRAND_NAME, HELP_CARDS } from '../data/content';

export const HowWeHelp: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'help-miam':
        return <FileCheck className="w-6 h-6 text-[#1D6A70]" />;
      case 'help-child':
        return <Users className="w-6 h-6 text-[#1D6A70]" />;
      case 'help-financial':
        return <Coins className="w-6 h-6 text-[#1D6A70]" />;
      case 'help-online':
        return <Video className="w-6 h-6 text-[#1D6A70]" />;
      case 'help-shuttle':
        return <Split className="w-6 h-6 text-[#1D6A70]" />;
      default:
        return <FileCheck className="w-6 h-6 text-[#1D6A70]" />;
    }
  };

  return (
    <section id="how-we-help-section" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-3">
            Core Areas of Assistance
          </div>
          <h2
            id="how-we-help-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#153243] font-serif tracking-tight"
          >
            How Can <span className="text-[#1D6A70]">{BRAND_NAME}</span> Help You?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every family situation is unique. Our independent, accredited mediators provide structured support across all key family law matters.
          </p>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HELP_CARDS.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="flex flex-col justify-between bg-[#FBFBF9] rounded-xl border border-slate-200/80 p-6 hover:shadow-md hover:border-[#1D6A70]/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs group-hover:bg-teal-50/50 transition-colors">
                    {getIcon(card.id)}
                  </div>
                  <span className="text-xs font-medium text-[#4F807F] bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#153243] font-serif tracking-tight mb-1">
                  {card.title}
                </h3>
                <p className="text-xs font-medium text-[#1D6A70] mb-3">
                  {card.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <a
                  href={card.url}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D6A70] group-hover:text-[#153243] group-hover:translate-x-0.5 transition-all"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
