import type { Metadata } from 'next';
import '@/styles/globals.css';

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
      <body className="bg-malmas-dark text-white">
        <noscript>
          <style>{`
            body [style*="opacity:0;"], body [style$="opacity:0"],
            body [style*="opacity: 0;"], body [style$="opacity: 0"] {
              opacity: 1 !important;
              transform: none !important;
            }
            nav { position: static !important; }
            nav button { display: none !important; }
            [data-animated-metric] { display: none !important; }
            @media (max-width: 767px) {
              #mobile-navigation { display: block !important; }
            }
          `}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
