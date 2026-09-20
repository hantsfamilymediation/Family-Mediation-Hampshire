import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ShieldCheck, ChevronDown, FileCheck, Split, BadgePercent, Video, ArrowRight } from 'lucide-react';
import { BRAND_NAME, LOGO_URL, URLS, SERVICE_LINKS } from '../data/content';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [logoError, setLogoError] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getServiceIcon = (label: string) => {
    switch (label) {
      case 'MIAM':
        return <FileCheck className="w-4 h-4 text-[#1D6A70]" />;
      case 'Shuttle Mediation':
        return <Split className="w-4 h-4 text-[#1D6A70]" />;
      case 'Legal Aid':
        return <BadgePercent className="w-4 h-4 text-[#1D6A70]" />;
      case 'Online Mediation':
        return <Video className="w-4 h-4 text-[#1D6A70]" />;
      default:
        return <FileCheck className="w-4 h-4 text-[#1D6A70]" />;
    }
  };

  return (
    <header id="site-header" className="sticky top-0 z-50 bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
      {/* Top reassurance bar (without phone number, spacious & professional) */}
      <div className="bg-[#153243] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2 text-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>FMC Accredited Family Mediation in Hampshire &amp; Online across England &amp; Wales</span>
          </div>
          <div className="text-slate-300 hidden md:block">
            <span>Confidential, Calm &amp; Impartial Dispute Resolution</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <a
            id="brand-logo-link"
            href="#top"
            className="flex items-center gap-3.5 group focus:outline-hidden shrink-0"
          >
            <div className="h-12 w-12 rounded-lg bg-white border border-[#CBD5E1] p-1 flex items-center justify-center overflow-hidden shadow-xs shrink-0 group-hover:border-[#1D6A70] transition-colors">
              {!logoError ? (
                <img
                  src={LOGO_URL}
                  alt="Hants Family Mediation Logo"
                  className="h-full w-full object-contain"
                  onError={() => setLogoError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-[#153243] text-white rounded flex items-center justify-center font-bold text-base tracking-wider font-serif">
                  HFM
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#153243] font-serif leading-tight group-hover:text-[#1D6A70] transition-colors">
                {BRAND_NAME}
              </span>
              <span className="text-xs tracking-wider uppercase font-medium text-[#4F807F]">
                Hampshire Family Mediation Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation with Services Sub-Menu */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden lg:flex items-center gap-2 xl:gap-4">
            <a
              href="#top"
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#1D6A70] hover:bg-slate-100/60 rounded-lg transition-colors"
            >
              Home
            </a>

            <a
              href={URLS.aboutUs}
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#1D6A70] hover:bg-slate-100/60 rounded-lg transition-colors"
            >
              About Us
            </a>

            {/* Services Dropdown Menu */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                id="services-dropdown-btn"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-hidden ${
                  servicesDropdownOpen
                    ? 'text-[#1D6A70] bg-teal-50/70'
                    : 'text-slate-700 hover:text-[#1D6A70] hover:bg-slate-100/60'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#1D6A70]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Dropdown Menu Box */}
              {servicesDropdownOpen && (
                <div
                  id="services-dropdown-menu"
                  className="absolute left-0 mt-1 w-80 rounded-2xl bg-white border border-slate-200/90 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3.5 py-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4F807F]">
                      Family Mediation Services
                    </span>
                  </div>

                  <div className="p-1.5 space-y-0.5">
                    {SERVICE_LINKS.map((service) => (
                      <a
                        key={service.label}
                        href={service.href}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-teal-50/70 border border-teal-100/60 group-hover:bg-[#1D6A70] group-hover:text-white transition-colors shrink-0 mt-0.5">
                          {getServiceIcon(service.label)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-800 group-hover:text-[#1D6A70] transition-colors">
                              {service.fullLabel}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#1D6A70] transition-all" />
                          </div>
                          <p className="text-xs text-slate-500 leading-snug mt-0.5">
                            {service.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href={URLS.contactUs}
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#1D6A70] hover:bg-slate-100/60 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Desktop Right CTA (Only the clean MIAM booking button, no phone number) */}
          <div className="hidden sm:flex items-center">
            <a
              id="header-cta-miam"
              href={URLS.miam}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#1D6A70] hover:bg-[#155459] shadow-xs hover:shadow-md transition-all"
            >
              Book a MIAM
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-[#153243] hover:bg-slate-100 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-slate-200 bg-[#FBFBF9] px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200"
        >
          <div className="flex flex-col space-y-1">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-100 hover:text-[#1D6A70] rounded-xl transition-colors"
            >
              Home
            </a>

            <a
              href={URLS.aboutUs}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-100 hover:text-[#1D6A70] rounded-xl transition-colors"
            >
              About Us
            </a>

            {/* Mobile Services Accordion Sub-Menu */}
            <div className="rounded-xl border border-slate-200/70 bg-white/70 overflow-hidden my-1">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-base font-medium text-slate-800 hover:text-[#1D6A70] transition-colors"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180 text-[#1D6A70]' : ''
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="px-2 pb-2 space-y-1 pt-1 border-t border-slate-100 bg-slate-50/50">
                  {SERVICE_LINKS.map((service) => (
                    <a
                      key={service.label}
                      href={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-[#1D6A70] hover:bg-white transition-colors"
                    >
                      <div className="p-1.5 rounded-md bg-white border border-slate-200/70 text-[#1D6A70]">
                        {getServiceIcon(service.label)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-800">{service.fullLabel}</span>
                        <span className="text-[11px] text-slate-500">{service.description}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href={URLS.contactUs}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-100 hover:text-[#1D6A70] rounded-xl transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile CTA (Book a MIAM, no phone number) */}
          <div className="mt-5 pt-4 border-t border-slate-200">
            <a
              href={URLS.miam}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#1D6A70] hover:bg-[#155459] shadow-xs transition-all"
            >
              Book a MIAM Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
