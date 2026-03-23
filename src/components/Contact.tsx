'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function Contact() {
  const { t } = useI18n();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block mb-2">{t('contact.titlePart1')}</span>
            <span className="block mb-4">{t('contact.titlePart2')}</span>
            <span className="gradient-text">{t('contact.titlePart3')}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Quick Contact Options */}
          {[
            {
              icon: '📞',
              titleKey: 'contact.callUs',
              descriptionKey: 'contact.speakDirectly',
              value: '+243 974 849 528',
              href: 'tel:+243974849528'
            },
            {
              icon: '✉️',
              titleKey: 'contact.emailUs',
              descriptionKey: 'contact.sendRequirements',
              value: 'contact@malmas.biz',
              href: 'mailto:contact@malmas.biz'
            },
            {
              icon: '📍',
              titleKey: 'contact.visitUs',
              descriptionKey: 'contact.scheduleOnSite',
              value: t('contact.kinshasa'),
              href: '#'
            }
          ].map((option, idx) => (
            <motion.a
              key={idx}
              href={option.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative p-8 rounded-lg border border-slate-700 hover:border-blue-500 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {option.icon}
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {t(option.titleKey)}
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                {t(option.descriptionKey)}
              </p>
              <p className="font-semibold text-blue-400">
                {option.value}
              </p>
              <div className="absolute inset-0 rounded-lg border border-blue-500/0 group-hover:border-blue-500/30 transition-all duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800/50 via-slate-900/30 to-slate-950/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8 text-white">
              {t('contact.describeChallenge')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white placeholder-slate-500"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white placeholder-slate-500"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  {t('contact.form.company')}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white placeholder-slate-500"
                  placeholder={t('contact.form.companyPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none text-white placeholder-slate-500"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-sm font-medium">
                  {t('contact.form.success')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-sm font-medium">
                  {t('contact.form.error')}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 disabled:opacity-50 text-white font-bold rounded-lg transition-all duration-300 uppercase tracking-wider"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
