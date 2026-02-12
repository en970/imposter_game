'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';
import { GlobeIcon, XIcon } from './Icons';

function MenuIcon({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}

export default function Navbar() {
    const { language, setLanguage } = useGameStore();
    const t = translations[language];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleLanguage = () => {
        setLanguage(language === 'tr' ? 'en' : 'tr');
    };

    const navLinks = [
        { href: '/how-to-play', label: t.navHowToPlay },
        { href: '/strategies', label: t.navStrategies },
        { href: '/faq', label: t.navFaq },
        { href: '/about', label: t.navAbout },
        { href: '/contact', label: t.navContact },
    ];

    return (
        <>
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)', flexShrink: 0 }}>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <span style={{ fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-0.02em', color: 'white' }}>
                                {t.appName.split('Casusu')[0].split('Imposter')[0]}
                                <span style={{ color: 'var(--border-accent)' }}>
                                    {language === 'tr' ? 'Casusu' : 'Imposter'}
                                </span>
                            </span>
                        </Link>
                        {/* Desktop nav links */}
                        <div className="desktop-nav-links" style={{ display: 'flex', gap: 'var(--spacing-sm)', fontSize: '0.85rem' }}>
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }} className="hover:text-purple-400">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop language toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="btn btn-secondary desktop-lang-toggle"
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

                    {/* Mobile burger button */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="mobile-burger-btn"
                        style={{
                            display: 'none',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-md)',
                            padding: '6px',
                            cursor: 'pointer',
                            color: 'var(--text-secondary)',
                            flexShrink: 0
                        }}
                    >
                        <MenuIcon size={20} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            {mobileMenuOpen && (
                <div className="mobile-nav-overlay" onClick={() => setMobileMenuOpen(false)}>
                    <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
                            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'white' }}>
                                {t.appName.split('Casusu')[0].split('Imposter')[0]}
                                <span style={{ color: 'var(--border-accent)' }}>
                                    {language === 'tr' ? 'Casusu' : 'Imposter'}
                                </span>
                            </span>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-subtle)',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '6px',
                                    cursor: 'pointer',
                                    color: 'var(--text-secondary)',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <XIcon size={20} />
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        color: 'var(--text-secondary)',
                                        textDecoration: 'none',
                                        padding: 'var(--spacing-md)',
                                        borderRadius: 'var(--radius-md)',
                                        transition: 'all 0.2s',
                                        fontSize: '0.95rem',
                                        fontWeight: 500
                                    }}
                                    className="mobile-nav-link"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div style={{ marginTop: 'var(--spacing-lg)', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid var(--border-subtle)' }}>
                            <button
                                onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }}
                                className="btn btn-secondary"
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-md)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    fontSize: '0.9rem'
                                }}
                            >
                                <GlobeIcon size={16} />
                                {language === 'tr' ? 'English' : 'Türkçe'} ({language === 'tr' ? 'EN' : 'TR'})
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
