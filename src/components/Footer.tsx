import React, { useState } from 'react';
import { Phone, ShieldCheck, ArrowUp } from 'lucide-react';
import { BRAND_NAME, PHONE_DISPLAY, PHONE_HREF, LOGO_URL, URLS, NAV_LINKS } from '../data/content';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#0D202B] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                {!logoError ? (
                  <img
                    src={LOGO_URL}
                    alt={`${BRAND_NAME} Logo`}
                    className="h-full w-full object-contain"
                    onError={() => setLogoError(true)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-[#153243] text-white rounded flex items-center justify-center font-bold text-sm font-serif">
                    HFM
                  </div>
                )}
              </div>
              <span className="text-xl font-bold font-serif text-white tracking-tight">
                {BRAND_NAME}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Calm, confidential and practical family mediation services across Hampshire and online throughout England &amp; Wales.
            </p>

            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-1">Direct Telephone Enquiries:</span>
              <a
                id="footer-phone-link"
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="font-mono">{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Practice Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-sans">
              Services &amp; Information
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={URLS.miam}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  MIAM Appointments in Hampshire
                </a>
              </li>
              <li>
                <a
                  href={URLS.onlineMediation}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Online Family Mediation
                </a>
              </li>
              <li>
                <a
                  href={URLS.shuttleMediation}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Shuttle Mediation
                </a>
              </li>
              <li>
                <a
                  href={URLS.legalAid}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Legal Aid &amp; Family Mediation Voucher Scheme
                </a>
              </li>
            </ul>
          </div>

          {/* Brand Pages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>&copy; {new Date().getFullYear()} {BRAND_NAME}. Family mediation in Hampshire &amp; online across England and Wales.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
