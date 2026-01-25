'use client';

import { useEffect } from 'react';
import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';
import { GlobeIcon } from './Icons';

export default function Navbar() {
    const { language, setLanguage } = useGameStore();
    const t = translations[language];

    const toggleLanguage = () => {
        setLanguage(language === 'tr' ? 'en' : 'tr');
    };

    // AdSense reklamını başlat
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    return (
        <nav className="ad-navbar">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '1200px',
                width: '100%',
                padding: '0 var(--spacing-sm)',
                gap: 'var(--spacing-sm)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', flexShrink: 0 }}>
                    <span style={{ fontWeight: 800, fontSize: '0.9rem', letterSpacing: '-0.02em', color: 'white' }}>
                        {t.appName.split('Casusu')[0].split('Imposter')[0]}
                        <span style={{ color: 'var(--border-accent)' }}>
                            {language === 'tr' ? 'Casusu' : 'Imposter'}
                        </span>
                    </span>
                </div>

                {/* NAVBAR Reklam Alanı - Google AdSense */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}>
                    <ins
                        className="adsbygoogle"
                        style={{ display: 'block', width: '468px', height: '60px' }}
                        data-ad-client="ca-pub-8793006985867588"
                        data-ad-slot="4426624617"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    />
                </div>

                <button
                    onClick={toggleLanguage}
                    className="btn btn-secondary"
                    style={{
                        padding: '4px 8px',
                        fontSize: '0.65rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-subtle)',
                        flexShrink: 0
                    }}
                >
                    <GlobeIcon size={12} />
                    {language.toUpperCase()}
                </button>
            </div>
        </nav>
    );
}
