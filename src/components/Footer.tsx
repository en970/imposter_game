'use client';

import Link from 'next/link';
import { useGameStore } from '@/lib/gameStore';

export default function Footer() {
    const { language } = useGameStore();

    const links = {
        tr: {
            privacy: 'Gizlilik Politikası',
            terms: 'Kullanım Şartları',
            about: 'Hakkımızda',
            contact: 'İletişim',
            copyright: '© 2026 KelimeCasusu. Tüm hakları saklıdır.'
        },
        en: {
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            about: 'About',
            contact: 'Contact',
            copyright: '© 2026 WordImposter. All rights reserved.'
        }
    };

    const t = links[language];

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <Link href="/about" className="footer-link">
                        {t.about}
                    </Link>
                    <span className="footer-divider">•</span>
                    <Link href="/contact" className="footer-link">
                        {t.contact}
                    </Link>
                    <span className="footer-divider">•</span>
                    <Link href="/privacy" className="footer-link">
                        {t.privacy}
                    </Link>
                    <span className="footer-divider">•</span>
                    <Link href="/terms" className="footer-link">
                        {t.terms}
                    </Link>
                </div>
                <p className="footer-copyright">{t.copyright}</p>
            </div>
        </footer>
    );
}
