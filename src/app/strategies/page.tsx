'use client';

import Link from 'next/link';

export default function StrategiesPage() {
    return (
        <div className="content-page">
            <div className="content-wrapper">
                <Link href="/" className="content-back-btn">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Game
                </Link>

                <header className="content-header">
                    <h1 className="content-title">Game Strategies</h1>
                    <p className="content-subtitle">Master WordImposter with these pro tips and tactics</p>
                </header>

                {/* Civilian Strategies */}
                <div className="content-card">
                    <h2 className="content-card-title" style={{color: '#34d399'}}>Civilian Strategies</h2>
                    <p className="content-card-text" style={{marginBottom: '1.25rem'}}>As a Civilian, your goal is to prove you know the word while catching the Imposter.</p>

                    <div className="content-inner-item">
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                            <span className="content-badge content-badge-green">BEGINNER</span>
                            <strong style={{color: 'white'}}>Balance Your Clues</strong>
                        </div>
                        <p className="content-card-text" style={{marginBottom: '0.75rem'}}>Do not be too obvious (Imposter will guess the word) or too vague (you will look suspicious).</p>
                        <div className="content-example" style={{padding: '0.75rem 1rem'}}>
                            <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem'}}>If the word is Lion:</p>
                            <p style={{color: '#34d399', fontSize: '0.875rem'}}>&#10003; Good: Safari, Mane, Pride</p>
                            <p style={{color: '#f87171', fontSize: '0.875rem'}}>&#10007; Bad: King (too obvious), Animal (too vague)</p>
                        </div>
                    </div>

                    <div className="content-inner-item">
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                            <span className="content-badge content-badge-yellow">INTERMEDIATE</span>
                            <strong style={{color: 'white'}}>Watch Other Players</strong>
                        </div>
                        <p className="content-card-text" style={{marginBottom: '0.75rem'}}>Pay attention to clues that do not fit well with others. The Imposter often gives generic or mismatched hints.</p>
                        <div className="content-example" style={{padding: '0.75rem 1rem'}}>
                            <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem'}}>Red flags to watch:</p>
                            <ul className="content-bullet-list">
                                <li><span className="content-bullet">&#8226;</span> Clues that could fit any word in the category</li>
                                <li><span className="content-bullet">&#8226;</span> Hesitation before giving a clue</li>
                                <li><span className="content-bullet">&#8226;</span> Clues that contradict others</li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-inner-item">
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                            <span className="content-badge content-badge-red">ADVANCED</span>
                            <strong style={{color: 'white'}}>Set Traps</strong>
                        </div>
                        <p className="content-card-text" style={{marginBottom: '0.75rem'}}>Give a slightly misleading clue to see if the Imposter copies your style without truly understanding.</p>
                        <div className="content-example" style={{padding: '0.75rem 1rem'}}>
                            <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem'}}>Pro tip:</p>
                            <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>If everyone says animal features but one person says a random adjective, they might be guessing blindly!</p>
                        </div>
                    </div>

                    <div className="content-inner-item">
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                            <span className="content-badge content-badge-yellow">INTERMEDIATE</span>
                            <strong style={{color: 'white'}}>Be Active in Discussion</strong>
                        </div>
                        <p className="content-card-text" style={{marginBottom: '0.75rem'}}>Staying silent makes you look suspicious. Share your analysis and ask questions!</p>
                        <div className="content-example" style={{padding: '0.75rem 1rem'}}>
                            <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem', fontStyle: 'italic'}}>&quot;Sarah, your clue was interesting - why did you choose that?&quot;</p>
                        </div>
                    </div>
                </div>

                {/* Imposter Strategies */}
                <div className="content-card">
                    <h2 className="content-card-title" style={{color: '#f87171'}}>Imposter Strategies</h2>
                    <p className="content-card-text" style={{marginBottom: '1.25rem'}}>As the Imposter, blend in with the Civilians and figure out the secret word from their clues.</p>

                    <div className="content-inner-item">
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                            <span className="content-badge content-badge-green">BEGINNER</span>
                            <strong style={{color: 'white'}}>Listen Carefully First</strong>
                        </div>
                        <p className="content-card-text" style={{marginBottom: '0.75rem'}}>The first few clues are gold! Look for patterns and common themes to guess the word.</p>
                        <div className="content-example" style={{padding: '0.75rem 1rem'}}>
                            <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem'}}>Example:</p>
                            <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>Clues: Cold, Black, Waddle → Category: Animals → Probably Penguin!</p>
                        </div>
                    </div>

                    <div className="content-inner-item">
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                            <span className="content-badge content-badge-green">BEGINNER</span>
                            <strong style={{color: 'white'}}>Give Safe, Broad Clues</strong>
                        </div>
                        <p className="content-card-text" style={{marginBottom: '0.75rem'}}>Use clues that could apply to multiple things in the category.</p>
                        <div className="content-example" style={{padding: '0.75rem 1rem'}}>
                            <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem'}}>Category Animals - safe clues:</p>
                            <p style={{color: '#34d399', fontSize: '0.875rem'}}>&#10003; Wild, Nature, Beautiful, Fast</p>
                        </div>
                    </div>

                    <div className="content-inner-item">
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                            <span className="content-badge content-badge-yellow">INTERMEDIATE</span>
                            <strong style={{color: 'white'}}>Deflect Suspicion</strong>
                        </div>
                        <p className="content-card-text" style={{marginBottom: '0.75rem'}}>If someone suspects you, calmly redirect attention to another player without being aggressive.</p>
                        <div className="content-example" style={{padding: '0.75rem 1rem'}}>
                            <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem', fontStyle: 'italic'}}>&quot;My clue makes sense because... But actually, did anyone notice Mike&#39;s clue was pretty vague too?&quot;</p>
                        </div>
                    </div>

                    <div className="content-inner-item">
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                            <span className="content-badge content-badge-red">ADVANCED</span>
                            <strong style={{color: 'white'}}>Guess the Word for Bonus Win</strong>
                        </div>
                        <p className="content-card-text" style={{marginBottom: '0.75rem'}}>If you figure out the word from clues, you can guess it at the end for an instant win!</p>
                        <div className="content-example" style={{padding: '0.75rem 1rem'}}>
                            <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem'}}>High risk, high reward!</p>
                            <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>Even if you are caught, a correct guess means you still win.</p>
                        </div>
                    </div>

                    <div className="content-inner-item">
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                            <span className="content-badge content-badge-yellow">INTERMEDIATE</span>
                            <strong style={{color: 'white'}}>Act Confident</strong>
                        </div>
                        <p className="content-card-text">Do not hesitate or look nervous. Give your clue confidently like you know exactly what you are doing. Body language matters in video calls too!</p>
                    </div>
                </div>

                {/* Advanced Tactics */}
                <div className="content-card">
                    <h2 className="content-card-title">Advanced Tactics</h2>
                    <div className="content-grid-2">
                        <div className="content-feature">
                            <div className="content-feature-title">Read Player Patterns</div>
                            <p className="content-feature-desc">
                                Learn how your friends play. Some people always give obvious clues, others are cryptic.
                                Notice when someone breaks their pattern!
                            </p>
                        </div>
                        <div className="content-feature">
                            <div className="content-feature-title">Psychology Matters</div>
                            <p className="content-feature-desc">
                                Watch for nervousness, over-explaining, or sudden silence.
                                People often give themselves away through behavior, not just words.
                            </p>
                        </div>
                        <div className="content-feature">
                            <div className="content-feature-title">Think Statistically</div>
                            <p className="content-feature-desc">
                                With 5 players, there is a 20% chance anyone is the Imposter.
                                Do not vote randomly - base decisions on evidence!
                            </p>
                        </div>
                        <div className="content-feature">
                            <div className="content-feature-title">Build Alliances</div>
                            <p className="content-feature-desc">
                                Players with complementary clues are likely both Civilians.
                                Work together to analyze the odd one out!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Common Mistakes */}
                <div className="content-card">
                    <h2 className="content-card-title" style={{color: '#fbbf24'}}>Common Mistakes to Avoid</h2>

                    <div className="content-error-item">
                        <span className="content-error-icon">&#10007;</span>
                        <div>
                            <div className="content-error-title">Giving too obvious clues</div>
                            <div className="content-error-desc">The Imposter will figure out the word instantly</div>
                        </div>
                    </div>
                    <div className="content-error-item">
                        <span className="content-error-icon">&#10007;</span>
                        <div>
                            <div className="content-error-title">Being too defensive when accused</div>
                            <div className="content-error-desc">This makes you look more guilty, even if you are innocent</div>
                        </div>
                    </div>
                    <div className="content-error-item">
                        <span className="content-error-icon">&#10007;</span>
                        <div>
                            <div className="content-error-title">Voting randomly in the first round</div>
                            <div className="content-error-desc">You might eliminate an innocent Civilian and help the Imposter win</div>
                        </div>
                    </div>
                    <div className="content-error-item">
                        <span className="content-error-icon">&#10007;</span>
                        <div>
                            <div className="content-error-title">Staying completely silent</div>
                            <div className="content-error-desc">Silence looks suspicious - participate in discussions!</div>
                        </div>
                    </div>
                    <div className="content-error-item">
                        <span className="content-error-icon">&#10007;</span>
                        <div>
                            <div className="content-error-title">Accidentally saying the word</div>
                            <div className="content-error-desc">This ruins the game for everyone - think before you speak!</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="content-cta">
                    <Link href="/" className="content-cta-btn">
                        Try These Strategies Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
