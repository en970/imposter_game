'use client';

export default function SEOContent() {
    return (
        <section className="seo-section">
            <div className="seo-wrapper">
                {/* Hero */}
                <div className="seo-hero">
                    <h2 className="seo-hero-title">What is WordImposter?</h2>
                    <p className="seo-hero-text">
                        WordImposter is a fun and exciting online social deduction game you can play with friends.
                        Give clues to prove you know the secret word, but be careful — one player is the Imposter
                        who doesn&apos;t know the word and is trying to blend in!
                    </p>
                </div>

                {/* How to Play Steps */}
                <div className="seo-steps">
                    <div className="seo-step">
                        <div className="seo-step-num">1</div>
                        <div className="seo-step-content">
                            <h4 className="seo-step-title">Create or Join a Room</h4>
                            <p className="seo-step-desc">Get a room code and invite 3-10 friends to play together online.</p>
                        </div>
                    </div>
                    <div className="seo-step">
                        <div className="seo-step-num">2</div>
                        <div className="seo-step-content">
                            <h4 className="seo-step-title">Get Your Role</h4>
                            <p className="seo-step-desc">Everyone sees a secret word except the Imposter, who only sees the category.</p>
                        </div>
                    </div>
                    <div className="seo-step">
                        <div className="seo-step-num seo-step-num-alt">3</div>
                        <div className="seo-step-content">
                            <h4 className="seo-step-title">Give One-Word Clues</h4>
                            <p className="seo-step-desc">Take turns giving clues. Civilians prove they know the word; the Imposter tries to blend in.</p>
                        </div>
                    </div>
                    <div className="seo-step">
                        <div className="seo-step-num seo-step-num-alt">4</div>
                        <div className="seo-step-content">
                            <h4 className="seo-step-title">Vote &amp; Win</h4>
                            <p className="seo-step-desc">Discuss and vote out the Imposter. Civilians win if they catch them!</p>
                        </div>
                    </div>
                </div>

                {/* Feature Tags */}
                <div className="seo-tags">
                    <span className="seo-tag seo-tag-purple">Free to Play</span>
                    <span className="seo-tag seo-tag-pink">No Download</span>
                    <span className="seo-tag seo-tag-blue">3-10 Players</span>
                    <span className="seo-tag seo-tag-green">Mobile Friendly</span>
                    <span className="seo-tag seo-tag-yellow">12+ Categories</span>
                </div>
            </div>
        </section>
    );
}
