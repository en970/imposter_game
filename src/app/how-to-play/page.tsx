'use client';

import Link from 'next/link';

export default function HowToPlayPage() {
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
                    <h1 className="content-title">How to Play</h1>
                    <p className="content-subtitle">Complete guide to playing WordImposter</p>
                </header>

                {/* Introduction */}
                <div className="content-card">
                    <h2 className="content-card-title">What is WordImposter?</h2>
                    <p className="content-card-text">
                        WordImposter is an exciting social deduction party game combining word guessing with hidden roles.
                        Play with 3-10 friends and find the Imposter among you! The Imposter does not know the secret word
                        that everyone else sees - they only know the category. Can you catch them before they blend in?
                    </p>
                </div>

                {/* Game Setup */}
                <div className="content-card">
                    <h2 className="content-card-title">Game Setup</h2>
                    <div>
                        <div className="content-inner-item">
                            <div className="content-step">
                                <div className="content-step-number">1</div>
                                <div>
                                    <div className="content-step-title">Create a Room</div>
                                    <div className="content-step-desc">Click Create Room to get a unique 4-digit code. Share this with friends!</div>
                                </div>
                            </div>
                        </div>
                        <div className="content-inner-item">
                            <div className="content-step">
                                <div className="content-step-number">2</div>
                                <div>
                                    <div className="content-step-title">Invite Players</div>
                                    <div className="content-step-desc">Friends join by entering the room code. Each player picks a nickname. 3-10 players needed.</div>
                                </div>
                            </div>
                        </div>
                        <div className="content-inner-item">
                            <div className="content-step">
                                <div className="content-step-number">3</div>
                                <div>
                                    <div className="content-step-title">Choose Category</div>
                                    <div className="content-step-desc">Room host selects a word category: Animals, Movies, Countries, Foods, and many more!</div>
                                </div>
                            </div>
                        </div>
                        <div className="content-inner-item">
                            <div className="content-step">
                                <div className="content-step-number">4</div>
                                <div>
                                    <div className="content-step-title">Start the Game</div>
                                    <div className="content-step-desc">Once everyone is ready, the host starts the game and roles are assigned!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gameplay Phases */}
                <div className="content-card">
                    <h2 className="content-card-title">Gameplay Phases</h2>

                    <div className="content-phase">
                        <div className="content-phase-title">Phase 1: Role Assignment</div>
                        <p className="content-phase-text">When the game starts, everyone receives a secret card:</p>
                        <ul className="content-phase-list">
                            <li><span style={{color: '#34d399'}}>&#10003;</span> <strong>Civilians:</strong> See the secret word (e.g., Lion)</li>
                            <li><span style={{color: '#f87171'}}>&#10007;</span> <strong>Imposter:</strong> Only sees the category (e.g., Animals)</li>
                        </ul>
                    </div>

                    <div className="content-phase phase-pink">
                        <div className="content-phase-title">Phase 2: Clue Round</div>
                        <p className="content-phase-text">Each player gives a ONE-WORD clue about the secret word:</p>
                        <ul className="content-phase-list">
                            <li>&#8226; Civilians prove they know the word (but not too obviously!)</li>
                            <li>&#8226; Imposter tries to blend in by giving generic clues</li>
                            <li>&#8226; You CANNOT say the word or any derivatives</li>
                        </ul>
                    </div>

                    <div className="content-phase phase-blue">
                        <div className="content-phase-title">Phase 3: Discussion</div>
                        <p className="content-phase-text">After all clues are given:</p>
                        <ul className="content-phase-list">
                            <li>&#8226; Analyze everyone&#39;s clues</li>
                            <li>&#8226; Question suspicious players</li>
                            <li>&#8226; Debate who might be the Imposter</li>
                        </ul>
                    </div>

                    <div className="content-phase phase-orange">
                        <div className="content-phase-title">Phase 4: Voting</div>
                        <p className="content-phase-text">Everyone votes for who they think is the Imposter:</p>
                        <ul className="content-phase-list">
                            <li>&#8226; Player with most votes is revealed</li>
                            <li>&#8226; If correct → <span style={{color: '#34d399', fontWeight: 600}}>Civilians WIN!</span></li>
                            <li>&#8226; If wrong → <span style={{color: '#f87171', fontWeight: 600}}>Imposter WINS!</span></li>
                        </ul>
                    </div>
                </div>

                {/* Winning Conditions */}
                <div className="content-card">
                    <h2 className="content-card-title">Winning Conditions</h2>
                    <div className="content-grid-2">
                        <div className="content-highlight-box green">
                            <div className="content-highlight-title green">Civilians Win</div>
                            <ul className="content-bullet-list">
                                <li><span style={{color: '#34d399'}}>&#10003;</span> Vote out the Imposter correctly</li>
                                <li><span style={{color: '#34d399'}}>&#10003;</span> Catch the Imposter giving suspicious clues</li>
                            </ul>
                        </div>
                        <div className="content-highlight-box red">
                            <div className="content-highlight-title red">Imposter Wins</div>
                            <ul className="content-bullet-list">
                                <li><span style={{color: '#f87171'}}>&#10003;</span> An innocent Civilian gets voted out</li>
                                <li><span style={{color: '#f87171'}}>&#10003;</span> Correctly guess the secret word</li>
                                <li><span style={{color: '#f87171'}}>&#10003;</span> Stay hidden until the end</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Important Rules */}
                <div className="content-card">
                    <h2 className="content-card-title">Important Rules</h2>
                    <div className="content-grid-2">
                        <div className="content-rule">
                            <span className="content-rule-icon">&#128274;</span>
                            <span className="content-rule-text">Keep your screen private - do not show your role!</span>
                        </div>
                        <div className="content-rule">
                            <span className="content-rule-icon">&#9757;&#65039;</span>
                            <span className="content-rule-text">Clues must be ONE word only</span>
                        </div>
                        <div className="content-rule">
                            <span className="content-rule-icon">&#128683;</span>
                            <span className="content-rule-text">Never say the secret word or derivatives</span>
                        </div>
                        <div className="content-rule">
                            <span className="content-rule-icon">&#127917;</span>
                            <span className="content-rule-text">Lying during discussion is allowed!</span>
                        </div>
                        <div className="content-rule">
                            <span className="content-rule-icon">&#128064;</span>
                            <span className="content-rule-text">Do not peek at other players&#39; screens</span>
                        </div>
                        <div className="content-rule">
                            <span className="content-rule-icon">&#128522;</span>
                            <span className="content-rule-text">Be respectful and have fun!</span>
                        </div>
                    </div>
                </div>

                {/* Example Round */}
                <div className="content-card">
                    <h2 className="content-card-title">Example Round</h2>
                    <div className="content-example">
                        <p className="content-example-meta">
                            <strong style={{color: 'white'}}>Category:</strong> Animals &nbsp;|&nbsp; <strong style={{color: 'white'}}>Secret Word:</strong> Penguin &nbsp;|&nbsp; <strong style={{color: 'white'}}>Players:</strong> 5
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
                            Jordan&#39;s clue was too vague. Players voted correctly - CIVILIANS WIN!
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="content-cta">
                    <Link href="/" className="content-cta-btn">
                        Play Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
