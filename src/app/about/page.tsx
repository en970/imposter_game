'use client';

import Link from 'next/link';
import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';
import AdBanner from '@/components/AdBanner';

export default function AboutPage() {
    const { language } = useGameStore();
    const t = translations[language];
    const p = t.aboutPage;

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

                {/* Introduction */}
                <div className="content-card">
                    <h2 className="content-card-title">{p.whatIs}</h2>
                    <p className="content-card-text" style={{marginBottom: '0.75rem'}}>{p.whatIsDesc1}</p>
                    <p className="content-card-text">{p.whatIsDesc2}</p>
                </div>

                {/* Mission */}
                <div className="content-card">
                    <h2 className="content-card-title">{p.mission}</h2>
                    <p className="content-card-text">{p.missionDesc}</p>
                </div>

                {/* Ad placement */}
                <div className="ad-in-article">
                    <AdBanner slot="4426624617" format="auto" />
                </div>

                {/* Features */}
                <div className="content-card">
                    <h2 className="content-card-title">{p.whyChoose}</h2>
                    <div className="content-grid-2">
                        {p.features.map((feature, idx) => (
                            <div key={idx} className="content-feature">
                                <div className="content-feature-icon" dangerouslySetInnerHTML={{__html: feature.icon}} />
                                <div className="content-feature-title">{feature.title}</div>
                                <p className="content-feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technology */}
                <div className="content-card">
                    <h2 className="content-card-title">{p.techTitle}</h2>
                    <p className="content-card-text" style={{marginBottom: '1rem'}}>{p.techDesc}</p>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center'}}>
                        <span className="content-tag" style={{background: 'rgba(139, 92, 246, 0.15)', color: '#a78bfa'}}>Next.js</span>
                        <span className="content-tag" style={{background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa'}}>React</span>
                        <span className="content-tag" style={{background: 'rgba(16, 185, 129, 0.15)', color: '#34d399'}}>TypeScript</span>
                        <span className="content-tag" style={{background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24'}}>Firebase</span>
                        <span className="content-tag" style={{background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee'}}>Tailwind CSS</span>
                    </div>
                </div>

                {/* Privacy */}
                <div className="content-card">
                    <h2 className="content-card-title">{p.privacyTitle}</h2>
                    <p className="content-card-text">{p.privacyDesc}</p>
                </div>

                {/* Ad placement */}
                <div className="ad-in-article">
                    <AdBanner slot="4426624617" format="auto" />
                </div>

                {/* Developer */}
                <div className="content-card">
                    <h2 className="content-card-title">{p.developerTitle}</h2>
                    <p className="content-card-text" style={{marginBottom: '0.75rem'}}>{p.developerDesc}</p>
                    <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
                        Contact: <a href="mailto:oze05607@gmail.com" style={{color: '#a78bfa', textDecoration: 'none'}}>oze05607@gmail.com</a>
                    </p>
                </div>

                {/* Future Plans */}
                <div className="content-card">
                    <h2 className="content-card-title">{p.futurePlans}</h2>
                    <p className="content-card-text" style={{marginBottom: '0.75rem'}}>{p.futurePlansDesc}</p>
                    <ul className="content-bullet-list">
                        {p.futureItems.map((item, idx) => (
                            <li key={idx}><span className="content-bullet">&#8226;</span> {item}</li>
                        ))}
                    </ul>
                </div>

                {/* Thank You */}
                <div className="content-banner">
                    <div className="content-banner-title">{p.thankYou}</div>
                    <p className="content-banner-text">{p.thankYouDesc}</p>
                </div>

                {/* CTA */}
                <div className="content-cta">
                    <Link href="/" className="content-cta-btn">
                        {p.playCta}
                    </Link>
                </div>
            </div>
        </div>
    );
}
