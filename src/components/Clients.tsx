'use client';

import { useI18n } from '@/lib/i18n/context';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CLIENTS = [
  { name: 'Euroclear', logo: '/assets/clients/euroclear.png' },
  { name: 'Irisnet', logo: '/assets/clients/irisnet.png' },
  { name: 'Allnex', logo: '/assets/clients/allnex.png' },
  { name: 'Rawbank', logo: '/assets/clients/rawbank.png' },
  { name: 'DGDA', logo: '/assets/clients/dgda.png' },
  { name: 'CNSS', logo: '/assets/clients/cnss.png' },
  { name: 'Orange Cyber Defense', logo: '/assets/clients/orangecyberdefense.png' },
];

// Duplicate array for seamless loop
const CLIENTS_LOOP = [...CLIENTS, ...CLIENTS];

export default function Clients() {
  const { t } = useI18n();

  return (
    <section id="clients" className="py-16 relative overflow-hidden">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          {t('clients.title')}
        </motion.h2>

        <p className="text-center text-slate-400 mb-12">
          {t('clients.description')}
        </p>

        {/* Static Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {CLIENTS.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative h-20 flex items-center justify-center p-4 rounded-lg border border-slate-700/50 hover:border-blue-500/50 bg-slate-900/30 hover:bg-slate-800/50 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={80}
                className="h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                priority={false}
              />
              <div className="absolute inset-0 rounded-lg border border-blue-500/0 group-hover:border-blue-500/20 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
