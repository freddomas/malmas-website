'use client';

import { useI18n } from '@/lib/i18n/context';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/assets/hero-global-network.jpg)',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Grid background overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-semibold uppercase tracking-wider">
            {t('hero.badge')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block mb-2">{t('hero.titlePart1')}</span>
          <span className="block mb-4">{t('hero.titlePart2')}</span>
          <span className="gradient-text text-4xl md:text-6xl">
            {t('hero.titlePart3')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-medium"
        >
          {t('hero.subtitle')}
          <span className="text-white font-semibold"> {t('hero.uptime')}</span> 
          <span className="text-white font-semibold"> {t('hero.compliance')}</span>
          <span className="text-white font-semibold"> {t('hero.impact')}</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-base text-slate-400 max-w-2xl mx-auto mb-12 italic"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('hero.cta')}
          </a>
          <a
            href="#expertise"
            className="px-8 py-4 border border-slate-600 hover:border-blue-500 text-white font-semibold rounded-lg transition-all duration-300"
          >
            {t('hero.learnMore')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
