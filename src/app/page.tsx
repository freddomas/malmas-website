'use client';

import { I18nProvider } from '@/lib/i18n/context';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ResultsMetrics from '@/components/ResultsMetrics';
import Expertise from '@/components/Expertise';
import Approach from '@/components/Approach';
import TrustSignals from '@/components/TrustSignals';
import CEO from '@/components/CEO';
import Clients from '@/components/Clients';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-malmas-dark">
        <Navbar />
        <Hero />
        <ResultsMetrics />
        <Expertise />
        <Approach />
        <TrustSignals />
        <CEO />
        <Clients />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </I18nProvider>
  );
}
