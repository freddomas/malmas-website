import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MALMAS - Sovereign Digital Infrastructure & Cybersecurity',
  description: 'Cabinet conseil spécialisé en infrastructures numériques souveraines, cybersécurité institutionnelle et architecture critique.',
  keywords: 'cybersecurity, infrastructure, government IT, DRC, Africa',
  openGraph: {
    title: 'MALMAS',
    description: 'Sovereign Digital Infrastructure & Cybersecurity',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} bg-malmas-dark text-white`}>
        {children}
      </body>
    </html>
  );
}
