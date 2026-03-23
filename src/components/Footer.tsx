'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900/50">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-slate-400 text-sm"
        >
          <p className="mb-4">
            © {currentYear} MALMAS. Tous droits réservés.
          </p>
          <p>
            Infrastructures numériques souveraines. Cybersécurité institutionnelle.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
