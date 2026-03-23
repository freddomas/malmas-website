'use client';

import { useI18n } from '@/lib/i18n/context';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ResultsMetrics() {
  const { t } = useI18n();
  const [displayNumbers, setDisplayNumbers] = useState({
    uptime: 0,
    clients: 0,
    infrastructure: 0,
    experience: 0,
  });

  const metrics = [
    {
      labelKey: 'results.metrics.uptime.label',
      descriptionKey: 'results.metrics.uptime.description',
      value: 98,
      suffix: '%',
      numberKey: 'uptime' as const,
    },
    {
      labelKey: 'results.metrics.clients.label',
      descriptionKey: 'results.metrics.clients.description',
      value: 10,
      suffix: '+',
      numberKey: 'clients' as const,
    },
    {
      labelKey: 'results.metrics.infrastructure.label',
      descriptionKey: 'results.metrics.infrastructure.description',
      value: 250,
      suffix: '+',
      numberKey: 'infrastructure' as const,
    },
    {
      labelKey: 'results.metrics.experience.label',
      descriptionKey: 'results.metrics.experience.description',
      value: 15,
      suffix: '+',
      numberKey: 'experience' as const,
    }
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    const startCounting = (key: keyof typeof displayNumbers, target: number, duration: number = 2000) => {
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * target);

        setDisplayNumbers((prev) => ({
          ...prev,
          [key]: current,
        }));

        if (progress === 1) clearInterval(interval);
      }, 50);

      timers.push(interval);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting('uptime', 98);
            startCounting('clients', 10);
            startCounting('infrastructure', 250);
            startCounting('experience', 15);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('results-metrics');
    if (section) observer.observe(section);

    return () => {
      timers.forEach((timer) => clearInterval(timer));
      observer.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="results-metrics"
      className="py-24 relative overflow-hidden bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10"
    >
      {/* Gradient background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('results.title')}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('results.description')}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative text-center p-8 rounded-xl border border-slate-700 hover:border-blue-500 bg-slate-900/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300"
            >
              {/* Number Display */}
              <div className="mb-4">
                <p className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {metric.numberKey === 'uptime'
                    ? displayNumbers.uptime > 0
                      ? `${displayNumbers.uptime}`
                      : '0'
                    : metric.numberKey === 'clients'
                    ? displayNumbers.clients
                    : metric.numberKey === 'infrastructure'
                    ? displayNumbers.infrastructure
                    : displayNumbers.experience}
                  <span className="text-3xl ml-1">{metric.suffix}</span>
                </p>
              </div>

              {/* Label */}
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">
                {t(metric.labelKey)}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed">
                {t(metric.descriptionKey)}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 group-hover:via-blue-500/15 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-6">
            {t('cta.zeroTolerance')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
