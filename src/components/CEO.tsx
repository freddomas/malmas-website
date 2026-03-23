'use client';

import { useI18n } from '@/lib/i18n/context';
import { motion } from 'framer-motion';

export default function CEO() {
  const { t } = useI18n();

  return (
    <section className="section relative">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="border border-slate-700 rounded-xl p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur"
          >
            {/* Icon / initial instead of photo */}
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center font-bold text-4xl text-slate-950 mb-8 mx-auto">
              FM
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
              {t('ceo.title')}
            </h2>
            <p className="text-center text-blue-400 font-semibold mb-6">
              {t('ceo.role')}
            </p>

            <p className="text-center text-slate-300 text-lg leading-relaxed mb-8">
              {t('ceo.bio')}
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/frederic-masiala-02ab5626/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-blue-500 rounded-lg transition-colors text-slate-300 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
