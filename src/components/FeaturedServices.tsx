import React from 'react';
import { ArrowRight, Check, FileCheck, Video, BadgePercent } from 'lucide-react';
import { BRAND_NAME, FEATURED_SERVICES } from '../data/content';

export const FeaturedServices: React.FC = () => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'service-miam':
        return <FileCheck className="w-6 h-6 text-[#1D6A70]" />;
      case 'service-online':
        return <Video className="w-6 h-6 text-[#1D6A70]" />;
      case 'service-legal-aid':
        return <BadgePercent className="w-6 h-6 text-[#1D6A70]" />;
      default:
        return <FileCheck className="w-6 h-6 text-[#1D6A70]" />;
    }
  };

  return (
    <section id="services-section" className="py-16 md:py-20 bg-[#F4F4F0]/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-3">
            Featured Practice Areas
          </div>
          <h2
            id="services-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#153243] font-serif tracking-tight"
          >
            <span className="text-[#1D6A70]">{BRAND_NAME}</span> Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Focused, accessible mediation solutions designed to help Hampshire families achieve lasting resolutions quickly and peacefully.
          </p>
        </div>

        {/* The 3 Featured Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-8">
                {/* Icon and Tag */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100 text-[#1D6A70]">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#153243] bg-slate-100 px-3 py-1 rounded-full text-right">
                    {service.tag}
                  </span>
                </div>

                {/* Title and Summary */}
                <h3 className="text-xl font-bold text-[#153243] font-serif tracking-tight mb-3 group-hover:text-[#1D6A70] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.summary}
                </p>

                {/* Key Inclusions Bullet List */}
                <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action */}
              <div className="p-6 sm:p-8 pt-0">
                <a
                  href={service.url}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#1D6A70] hover:bg-[#155459] shadow-xs transition-all"
                >
                  <span>{service.ctaText}</span>
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
