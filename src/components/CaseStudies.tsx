'use client';

import { useI18n } from '@/lib/i18n/context';
import { motion } from 'framer-motion';

export default function CaseStudies() {
  const { t } = useI18n();

  const caseStudies = [
    {
      id: 'central-bank',
      title: 'Central Bank Infrastructure Transformation',
      subtitle: 'Regional Central Bank | DRC',
      metrics: [
        { label: 'Uptime Achieved', value: '98%' },
        { label: 'Migration Time', value: '8 months' },
        { label: 'Cost Reduction', value: '-34%' }
      ],
      challenge: 'Legacy payment systems on aging infrastructure with single points of failure affecting 2M+ transactions daily',
      solution: 'Designed and deployed sovereign, redundant datacenter architecture with real-time failover across 3 geographic zones',
      result: 'Eliminated downtime, reduced operational costs by 34%, achieved full regulatory compliance for critical payment systems',
      impact: 'Enabled $800M annual transaction volume with zero-tolerance SLA'
    },
    {
      id: 'gov-network',
      title: 'National Government Network Consolidation',
      subtitle: 'West African Government | Mali',
      metrics: [
        { label: 'Agencies Connected', value: '47' },
        { label: 'Security Events/Day', value: '2.3M' },
        { label: 'Incident Response', value: '< 5 min' }
      ],
      challenge: '47 independent government agencies with fragmented networks, inconsistent security policies, no central monitoring',
      solution: 'Enterprise Active Directory, zero-trust network architecture, centralized SIEM with ML-based threat detection',
      result: 'Unified identity management for 8,000+ users, detected and blocked 99.7% of advanced threats before lateral movement',
      impact: 'Government operations now resilient to nation-state level threats'
    },
    {
      id: 'financial-group',
      title: 'Post-Merger Datacenter Consolidation',
      subtitle: 'Pan-African Financial Group | Multiple Countries',
      metrics: [
        { label: 'Datacenters Consolidated', value: '12 → 3' },
        { label: 'Application Migration', value: '340 apps' },
        { label: 'Zero Downtime Achieved', value: '100%' }
      ],
      challenge: 'Post-acquisition had 12 redundant datacenters across 4 countries with incompatible systems and governance frameworks',
      solution: 'HA/DR architecture enabling zero-downtime migration, unified infrastructure-as-code, automated deployment pipelines',
      result: 'Migrated 340 applications with zero production incidents, achieved unified compliance across all jurisdictions',
      impact: '$12M annual OpEx savings while improving resilience and audit readiness'
    }
  ];

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
    <section id="case-studies" className="section relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block mb-4">Proven Excellence</span>
            <span className="gradient-text">
              {t('caseStudies.title') || 'Proven Impact at Scale'}
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('caseStudies.subtitle') || 'Transformations across government and critical infrastructure delivering measurable, auditable results'}
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent" />

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-slate-400">{study.subtitle}</p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-700">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <p className="text-2xl font-bold text-blue-400 mb-1">
                      {metric.value}
                    </p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Challenge
                  </p>
                  <p className="text-sm text-slate-300">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Solution
                  </p>
                  <p className="text-sm text-slate-300">{study.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Result
                  </p>
                  <p className="text-sm text-slate-300">{study.result}</p>
                </div>
              </div>

              {/* Impact */}
              <div className="pt-6 border-t border-slate-700/50">
                <p className="text-sm italic text-cyan-400">
                  💡 {study.impact}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            These transformations involved complex architectures across multiple jurisdictions with zero tolerance for downtime.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Discuss Your Infrastructure Challenge
          </a>
        </motion.div>
      </div>
    </section>
  );
}
