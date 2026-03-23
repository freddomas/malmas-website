'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n/context';
import clsx from 'clsx';

export default function Navbar() {
  const { language, setLanguage, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Image 
            src="/assets/logo.png" 
            alt="Logo MALMAS" 
            width={40} 
            height={40}
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl text-white">MALMAS</span>
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <a href="#expertise" className="text-slate-400 hover:text-white transition-colors">
            {t('nav.expertise')}
          </a>
          <a href="#approach" className="text-slate-400 hover:text-white transition-colors">
            {t('nav.approach')}
          </a>
          <a href="#clients" className="text-slate-400 hover:text-white transition-colors">
            {t('nav.clients')}
          </a>
          <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
            {t('nav.contact')}
          </a>
        </div>

        {/* Language Toggle & CTA */}
        <div className="flex items-center gap-6">
          <div className="flex gap-2 bg-slate-800 rounded-lg p-1">
            <button
              onClick={() => setLanguage('fr')}
              className={clsx(
                'px-3 py-1 rounded transition-colors',
                language === 'fr'
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              )}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={clsx(
                'px-3 py-1 rounded transition-colors',
                language === 'en'
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              )}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="hidden md:block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            {t('nav.contact')}
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <div className="container-custom py-4 flex flex-col gap-4">
            <a href="#expertise" className="text-slate-400 hover:text-white transition-colors">
              {t('nav.expertise')}
            </a>
            <a href="#approach" className="text-slate-400 hover:text-white transition-colors">
              {t('nav.approach')}
            </a>
            <a href="#clients" className="text-slate-400 hover:text-white transition-colors">
              {t('nav.clients')}
            </a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
              {t('nav.contact')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
