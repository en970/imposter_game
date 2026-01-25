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
                padding: '0 var(--spacing-md)',
                gap: 'var(--spacing-md)',
                height: '100%'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', flexShrink: 0 }}>
                    <span style={{ fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-0.02em', color: 'white' }}>
                        {t.appName.split('Casusu')[0].split('Imposter')[0]}
                        <span style={{ color: 'var(--border-accent)' }}>
                            {language === 'tr' ? 'Casusu' : 'Imposter'}
                        </span>
                    </span>
                </div>

                {/* NAVBAR Reklam Alanı - Sabit boyut */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    maxHeight: '50px',
                    overflow: 'hidden'
                }}>
                    <ins
                        className="adsbygoogle"
                        style={{ display: 'inline-block', width: '320px', height: '50px' }}
                        data-ad-client="ca-pub-8793006985867588"
                        data-ad-slot="4426624617"
                        data-ad-format="horizontal"
                        data-full-width-responsive="false"
                    />
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
                        border: '1px solid var(--border-subtle)',
                        flexShrink: 0
                    }}
                >
                    <GlobeIcon size={14} />
                    {language.toUpperCase()}
                </button>
            </div>
        </nav>
    );
}
