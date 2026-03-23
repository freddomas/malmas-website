'use client';

import { useI18n } from '@/lib/i18n/context';
import { motion } from 'framer-motion';

export default function TrustSignals() {
  const { t } = useI18n();
  const signals = [
    {
      icon: '🔐',
      titleKey: 'trustSignals.signals.iso.title',
      descriptionKey: 'trustSignals.signals.iso.description',
    },
    {
      icon: '✅',
      titleKey: 'trustSignals.signals.sla.title',
      descriptionKey: 'trustSignals.signals.sla.description',
    },
    {
      icon: '🛡️',
      titleKey: 'trustSignals.signals.soc2.title',
      descriptionKey: 'trustSignals.signals.soc2.description',
    },
    {
      icon: '📋',
      titleKey: 'trustSignals.signals.vendor.title',
      descriptionKey: 'trustSignals.signals.vendor.description',
    },
    {
      icon: '🔍',
      titleKey: 'trustSignals.signals.audit.title',
      descriptionKey: 'trustSignals.signals.audit.description',
    },
    {
      icon: '📊',
      titleKey: 'trustSignals.signals.zero.title',
      descriptionKey: 'trustSignals.signals.zero.description',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 relative overflow-hidden border-t border-b border-slate-700">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('trustSignals.title')}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('trustSignals.description')}
          </p>
        </motion.div>

        {/* Trust Signals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-lg border border-slate-700 hover:border-blue-500 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {signal.icon}
              </div>

              {/* Content */}
              <h3 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {t(signal.titleKey)}
              </h3>
              <p className="text-sm text-slate-400">
                {t(signal.descriptionKey)}
              </p>

              {/* Border accent */}
              <div className="absolute inset-0 rounded-lg border border-blue-500/0 group-hover:border-blue-500/30 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
