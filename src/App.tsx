import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowWeHelp } from './components/HowWeHelp';
import { AboutSection } from './components/AboutSection';
import { MiamSection } from './components/MiamSection';
import { FeaturedServices } from './components/FeaturedServices';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CoverageSection } from './components/CoverageSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#1E293B]">
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <HowWeHelp />
        <AboutSection />
        <MiamSection />
        <FeaturedServices />
        <HowItWorks />
        <WhyChooseUs />
        <CoverageSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
