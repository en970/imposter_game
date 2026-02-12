'use client';

import Link from 'next/link';
import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';
import AdBanner from '@/components/AdBanner';

export default function HowToPlayPage() {
    const { language } = useGameStore();
    const t = translations[language];
    const p = t.howToPlayPage;

    const phaseClasses = ['', 'phase-pink', 'phase-blue', 'phase-orange'];

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
                    <p className="content-card-text">{p.whatIsDesc}</p>
                </div>

                {/* Game Setup */}
                <div className="content-card">
                    <h2 className="content-card-title">{p.gameSetup}</h2>
                    <div>
                        {p.steps.map((step, idx) => (
                            <div key={idx} className="content-inner-item">
                                <div className="content-step">
                                    <div className="content-step-number">{idx + 1}</div>
                                    <div>
                                        <div className="content-step-title">{step.title}</div>
                                        <div className="content-step-desc">{step.desc}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ad placement */}
                <div className="ad-in-article">
                    <AdBanner slot="4426624617" format="auto" />
                </div>

                {/* Gameplay Phases */}
                <div className="content-card">
                    <h2 className="content-card-title">{p.gameplayPhases}</h2>
                    {p.phases.map((phase, idx) => (
                        <div key={idx} className={`content-phase ${phaseClasses[idx] || ''}`}>
                            <div className="content-phase-title">{phase.title}</div>
                            <p className="content-phase-text">{phase.text}</p>
                            <ul className="content-phase-list">
                                {phase.items.map((item, i) => (
                                    <li key={i}>
                                        {idx === 0 ? (
                                            <span style={{color: i === 0 ? '#34d399' : '#f87171'}}>{i === 0 ? '\u2713' : '\u2717'}</span>
                                        ) : (
                                            <span>&#8226;</span>
                                        )}
                                        {' '}{item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Winning Conditions */}
                <div className="content-card">
                    <h2 className="content-card-title">{p.winConditions}</h2>
                    <div className="content-grid-2">
                        <div className="content-highlight-box green">
                            <div className="content-highlight-title green">{p.civiliansWinTitle}</div>
                            <ul className="content-bullet-list">
                                {p.civiliansWinItems.map((item, i) => (
                                    <li key={i}><span style={{color: '#34d399'}}>&#10003;</span> {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="content-highlight-box red">
                            <div className="content-highlight-title red">{p.imposterWinTitle}</div>
                            <ul className="content-bullet-list">
                                {p.imposterWinItems.map((item, i) => (
                                    <li key={i}><span style={{color: '#f87171'}}>&#10003;</span> {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Important Rules */}
                <div className="content-card">
                    <h2 className="content-card-title">{p.importantRules}</h2>
                    <div className="content-grid-2">
                        {p.rulesItems.map((rule, idx) => {
                            const icons = ['&#128274;', '&#9757;&#65039;', '&#128683;', '&#127917;', '&#128064;', '&#128522;'];
                            return (
                                <div key={idx} className="content-rule">
                                    <span className="content-rule-icon" dangerouslySetInnerHTML={{__html: icons[idx] || '&#128274;'}} />
                                    <span className="content-rule-text">{rule}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Ad placement */}
                <div className="ad-in-article">
                    <AdBanner slot="4426624617" format="auto" />
                </div>

                {/* Example Round */}
                <div className="content-card">
                    <h2 className="content-card-title">{p.exampleRound}</h2>
                    <div className="content-example">
                        <p className="content-example-meta">
                            <strong style={{color: 'white'}}>{p.exampleCategory}</strong> Animals &nbsp;|&nbsp; <strong style={{color: 'white'}}>{p.exampleWord}</strong> Penguin &nbsp;|&nbsp; <strong style={{color: 'white'}}>{p.examplePlayers}</strong> 5
                        </p>
                        <div className="content-example-row">
                            <span className="content-example-badge civilian">CIVILIAN</span>
                            <span className="content-example-name">Alex:</span>
                            <span className="content-example-clue">Cold</span>
                            <span className="content-example-note">- Good clue!</span>
                        </div>
                        <div className="content-example-row">
                            <span className="content-example-badge imposter">IMPOSTER</span>
                            <span className="content-example-name">Jordan:</span>
                            <span className="content-example-clue">Cute</span>
                            <span className="content-example-note">- Too generic...</span>
                        </div>
                        <div className="content-example-row">
                            <span className="content-example-badge civilian">CIVILIAN</span>
                            <span className="content-example-name">Sam:</span>
                            <span className="content-example-clue">Antarctica</span>
                            <span className="content-example-note">- Perfect!</span>
                        </div>
                        <div className="content-example-row">
                            <span className="content-example-badge civilian">CIVILIAN</span>
                            <span className="content-example-name">Taylor:</span>
                            <span className="content-example-clue">Tuxedo</span>
                            <span className="content-example-note">- Creative!</span>
                        </div>
                        <div className="content-example-result">
                            {p.exampleResult}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="content-cta">
                    <Link href="/" className="content-cta-btn">
                        {p.playNow}
                    </Link>
                </div>
            </div>
        </div>
    );
}
