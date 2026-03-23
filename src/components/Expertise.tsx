'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { motion } from 'framer-motion';

const EXPERTISE_ITEMS = [
  'gov',
  'cyber',
  'ad',
  'datacenter',
  'monitoring',
  'audit',
] as const;

export default function Expertise() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  const active = EXPERTISE_ITEMS[activeIndex];
  const data = (t as any)(`expertise.items.${active}` as any);

  return (
    <section id="expertise" className="section relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block mb-2">{t('expertise.title')}</span>
            <span className="gradient-text">{t('expertise.subtitle')}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            {t('expertise.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            {EXPERTISE_ITEMS.map((item, idx) => (
              <motion.button
                key={item}
                onClick={() => setActiveIndex(idx)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative p-6 rounded-lg border-2 transition-all duration-300 text-left overflow-hidden ${
                  activeIndex === idx
                    ? 'border-blue-500 bg-gradient-to-br from-blue-500/20 to-blue-500/5'
                    : 'border-slate-700 hover:border-slate-600 bg-slate-800/30 hover:bg-slate-800/50'
                }`}
              >
                <h3 className={`font-semibold text-sm md:text-base transition-colors ${
                  activeIndex === idx ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {t(`expertise.items.${item}.title`)}
                </h3>
                {activeIndex === idx && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Detail */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 p-8 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">
                {t(`expertise.items.${active}.title`)}
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-200 mb-3 text-xs uppercase tracking-widest text-blue-400">
                  {t('approach.challenge')}
                </h4>
                <p className="text-slate-300 leading-relaxed text-base">
                  {t(`expertise.items.${active}.problem`)}
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-slate-700 to-transparent" />

              <div>
                <h4 className="font-bold text-slate-200 mb-3 text-xs uppercase tracking-widest text-blue-400">
                  {t('approach.ourApproach')}
                </h4>
                <p className="text-slate-300 leading-relaxed text-base">
                  {t(`expertise.items.${active}.approach`)}
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-slate-700 to-transparent" />

              <div>
                <h4 className="font-bold text-slate-200 mb-3 text-xs uppercase tracking-widest text-cyan-400">
                  {t('approach.measurableResult')}
                </h4>
                <p className="text-slate-300 leading-relaxed text-base">
                  {t(`expertise.items.${active}.result`)}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
