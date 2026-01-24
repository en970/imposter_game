'use client';

import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';
import { GlobeIcon } from './Icons';

export default function Navbar() {
    const { language, setLanguage } = useGameStore();
    const t = translations[language];

    const toggleLanguage = () => {
        setLanguage(language === 'tr' ? 'en' : 'tr');
    };

    return (
        <nav className="ad-navbar">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', width: '100%', padding: '0 var(--spacing-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                    <span style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-0.02em', color: 'white' }}>
                        {t.appName.split('Casusu')[0].split('Imposter')[0]}
                        <span style={{ color: 'var(--border-accent)' }}>
                            {language === 'tr' ? 'Casusu' : 'Imposter'}
                        </span>
                    </span>
                </div>

                <div className="ad-placeholder" style={{ display: 'none' }}>
                    Reklam Alanı
                </div>

                <button
                    onClick={toggleLanguage}
                    className="btn btn-secondary"
                    style={{
                        padding: '6px 10px',
                        fontSize: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-subtle)'
                    }}
                >
                    <GlobeIcon size={14} />
                    {language.toUpperCase()}
                </button>
            </div>
        </nav>
    );
}
