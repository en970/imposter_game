'use client';

import Link from 'next/link';
import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';

export default function StrategiesPage() {
    const { language } = useGameStore();
    const t = translations[language];
    const p = t.strategiesPage;

    const levelColors: Record<string, string> = {
        'BEGINNER': 'content-badge-green',
        'BAŞLANGIÇ': 'content-badge-green',
        'INTERMEDIATE': 'content-badge-yellow',
        'ORTA': 'content-badge-yellow',
        'ADVANCED': 'content-badge-red',
        'İLERİ': 'content-badge-red',
    };

    return (
        <div className="content-page">
            <div className="content-wrapper">
                <Link href="/" className="content-back-btn">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {t.backToGame}
                </Link>

                <header className="content-header">
                    <h1 className="content-title">{p.title}</h1>
                    <p className="content-subtitle">{p.subtitle}</p>
                </header>

                {/* Civilian Strategies */}
                <div className="content-card">
                    <h2 className="content-card-title" style={{color: '#34d399'}}>{p.civilianTitle}</h2>
                    <p className="content-card-text" style={{marginBottom: '1.25rem'}}>{p.civilianDesc}</p>

                    {p.civilianStrategies.map((strat, idx) => (
                        <div key={idx} className="content-inner-item">
                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                                <span className={`content-badge ${levelColors[strat.level] || 'content-badge-green'}`}>{strat.level}</span>
                                <strong style={{color: 'white'}}>{strat.title}</strong>
                            </div>
                            <p className="content-card-text" style={{marginBottom: '0.75rem'}}>{strat.desc}</p>
                            {'example' in strat && strat.example && (
                                <div className="content-example" style={{padding: '0.75rem 1rem'}}>
                                    <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem'}}>{strat.example}</p>
                                    {'good' in strat && (
                                        <>
                                            <p style={{color: '#34d399', fontSize: '0.875rem'}}>&#10003; {strat.good}</p>
                                            <p style={{color: '#f87171', fontSize: '0.875rem'}}>&#10007; {strat.bad}</p>
                                        </>
                                    )}
                                </div>
                            )}
                            {'flags' in strat && strat.flags && (
                                <div className="content-example" style={{padding: '0.75rem 1rem'}}>
                                    <ul className="content-bullet-list">
                                        {(strat.flags as string[]).map((flag, i) => (
                                            <li key={i}><span className="content-bullet">&#8226;</span> {flag}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {'tip' in strat && strat.tip && (
                                <div className="content-example" style={{padding: '0.75rem 1rem'}}>
                                    <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>{strat.tip}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Imposter Strategies */}
                <div className="content-card">
                    <h2 className="content-card-title" style={{color: '#f87171'}}>{p.imposterTitle}</h2>
                    <p className="content-card-text" style={{marginBottom: '1.25rem'}}>{p.imposterDesc}</p>

                    {p.imposterStrategies.map((strat, idx) => (
                        <div key={idx} className="content-inner-item">
                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                                <span className={`content-badge ${levelColors[strat.level] || 'content-badge-green'}`}>{strat.level}</span>
                                <strong style={{color: 'white'}}>{strat.title}</strong>
                            </div>
                            <p className="content-card-text" style={{marginBottom: '0.75rem'}}>{strat.desc}</p>
                            {'example' in strat && strat.example && (
                                <div className="content-example" style={{padding: '0.75rem 1rem'}}>
                                    <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>{strat.example}</p>
                                </div>
                            )}
                            {'tip' in strat && strat.tip && (
                                <div className="content-example" style={{padding: '0.75rem 1rem'}}>
                                    <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>{strat.tip}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Advanced Tactics */}
                <div className="content-card">
                    <h2 className="content-card-title">{p.advancedTitle}</h2>
                    <div className="content-grid-2">
                        {p.advancedTactics.map((tactic, idx) => (
                            <div key={idx} className="content-feature">
                                <div className="content-feature-title">{tactic.title}</div>
                                <p className="content-feature-desc">{tactic.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Common Mistakes */}
                <div className="content-card">
                    <h2 className="content-card-title" style={{color: '#fbbf24'}}>{p.mistakesTitle}</h2>
                    {p.mistakes.map((mistake, idx) => (
                        <div key={idx} className="content-error-item">
                            <span className="content-error-icon">&#10007;</span>
                            <div>
                                <div className="content-error-title">{mistake.title}</div>
                                <div className="content-error-desc">{mistake.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="content-cta">
                    <Link href="/" className="content-cta-btn">
                        {p.tryCta}
                    </Link>
                </div>
            </div>
        </div>
    );
}
