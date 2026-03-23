'use client';

import { useI18n } from '@/lib/i18n/context';
import { motion } from 'framer-motion';

const STEPS = [
  { 
    key: 'step1', 
    number: '01',
    icon: '🔍',
    titleKey: 'approach.steps.step1',
    descKey: 'approach.stepDescriptions.step1',
  },
  { 
    key: 'step2', 
    number: '02',
    icon: '📐',
    titleKey: 'approach.steps.step2',
    descKey: 'approach.stepDescriptions.step2',
  },
  { 
    key: 'step3', 
    number: '03',
    icon: '🛡️',
    titleKey: 'approach.steps.step3',
    descKey: 'approach.stepDescriptions.step3',
  },
  { 
    key: 'step4', 
    number: '04',
    icon: '🗓️',
    titleKey: 'approach.steps.step4',
    descKey: 'approach.stepDescriptions.step4',
  },
  { 
    key: 'step5', 
    number: '05',
    icon: '📚',
    titleKey: 'approach.steps.step5',
    descKey: 'approach.stepDescriptions.step5',
  },
];

export default function Approach() {
  const { t, language } = useI18n();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="approach" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-5" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('approach.title')}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('approach.description')}
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-6 max-w-4xl mx-auto"
        >
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.key}
              variants={itemVariants}
              className="group relative"
            >
              <div className="flex gap-6 md:gap-8">
                {/* Icon/Number Circle */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-blue-500/30 border-2 border-blue-400/50 relative"
                  >
                    <span className="text-3xl">{step.icon}</span>
                  </motion.div>

                  {/* Connecting Line */}
                  {idx < STEPS.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-blue-500/50 to-transparent mt-2" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 pt-2">
                  <div className="p-6 rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-blue-500/50 hover:from-slate-800/80 hover:to-slate-900/70 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {t(step.titleKey)}
                      </h3>
                      <span className="text-4xl font-bold text-blue-500/30 group-hover:text-blue-500/60 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <p className="text-slate-300 leading-relaxed text-base">
                      {t(step.descKey)}
                    </p>

                    {/* Accent Line */}
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Chaque projet débute par une évaluation gratuite de 2 heures
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Commencer maintenant
          </a>
        </motion.div>
      </div>
    </section>
  );
}
