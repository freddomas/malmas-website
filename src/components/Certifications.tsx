'use client';

import { useI18n } from '@/lib/i18n/context';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CERTIFICATIONS = [
  { name: 'AWS', logo: '/assets/certifications/aws.png' },
  { name: 'Cisco', logo: '/assets/certifications/cisco.png' },
  { name: 'Fortinet', logo: '/assets/certifications/fortinet.png' },
  { name: 'Palo Alto Networks', logo: '/assets/certifications/paloalto.png' },
  { name: 'CISSP', logo: '/assets/certifications/cissp.png' },
  { name: 'ITIL', logo: '/assets/certifications/ITIL.png' },
  { name: 'COBIT', logo: '/assets/certifications/cobit.jpg' },
];

// Duplicate array for seamless loop
const CERTIFICATIONS_LOOP = [...CERTIFICATIONS, ...CERTIFICATIONS];

export default function Certifications() {
  const { t } = useI18n();

  return (
    <section className="section relative overflow-hidden">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          {t('certifications.title')}
        </motion.h2>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-6 pb-8"
          >
            {CERTIFICATIONS_LOOP.map((cert, idx) => (
              <div
                key={`${cert.name}-${idx}`}
                className="flex-shrink-0 h-24 flex items-center justify-center cursor-pointer"
              >
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  width={160}
                  height={96}
                  className="h-24 w-auto object-contain"
                  priority={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
        </div>

        <p className="text-center text-slate-300 mt-12 text-sm">
          {t('certifications.description')}
        </p>
      </div>
    </section>
  );
}
