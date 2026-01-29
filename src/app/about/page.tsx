'use client';

import Link from 'next/link';

export default function AboutPage() {
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
                    <h1 className="content-title">About WordImposter</h1>
                    <p className="content-subtitle">The ultimate social deduction party game</p>
                </header>

                {/* Introduction */}
                <div className="content-card">
                    <h2 className="content-card-title">What is WordImposter?</h2>
                    <p className="content-card-text" style={{marginBottom: '0.75rem'}}>
                        WordImposter is a free online social deduction game where players try to find the hidden Imposter
                        among them. It combines word guessing mechanics with hidden roles, creating an exciting and
                        strategic party game experience.
                    </p>
                    <p className="content-card-text">
                        Perfect for game nights, team building events, virtual hangouts, or whenever you want to have
                        fun with friends and family. Play with 3-10 players, no downloads or accounts required!
                    </p>
                </div>

                {/* Mission */}
                <div className="content-card">
                    <h2 className="content-card-title">Our Mission</h2>
                    <p className="content-card-text">
                        We believe great games should be accessible to everyone. Our mission is to provide a fun,
                        engaging, and completely free gaming experience that brings people together. Whether you are
                        connecting with friends across the world or having a local game night, WordImposter makes
                        it easy to create memorable moments.
                    </p>
                </div>

                {/* Features */}
                <div className="content-card">
                    <h2 className="content-card-title">Why Choose WordImposter?</h2>
                    <div className="content-grid-2">
                        <div className="content-feature">
                            <div className="content-feature-icon">&#127381;</div>
                            <div className="content-feature-title">100% Free</div>
                            <p className="content-feature-desc">No hidden fees, no premium features, no pay-to-win. Just pure fun for everyone.</p>
                        </div>
                        <div className="content-feature">
                            <div className="content-feature-icon">&#9889;</div>
                            <div className="content-feature-title">Instant Play</div>
                            <p className="content-feature-desc">No downloads, no accounts. Create a room, share the code, and play immediately.</p>
                        </div>
                        <div className="content-feature">
                            <div className="content-feature-icon">&#128241;</div>
                            <div className="content-feature-title">Play Anywhere</div>
                            <p className="content-feature-desc">Works on any device - phones, tablets, laptops, desktops. Just need a browser!</p>
                        </div>
                        <div className="content-feature">
                            <div className="content-feature-icon">&#128101;</div>
                            <div className="content-feature-title">3-10 Players</div>
                            <p className="content-feature-desc">Perfect for small groups or larger parties. More players = more chaos!</p>
                        </div>
                        <div className="content-feature">
                            <div className="content-feature-icon">&#127758;</div>
                            <div className="content-feature-title">Multi-Language</div>
                            <p className="content-feature-desc">Available in English and Turkish. More languages coming soon!</p>
                        </div>
                        <div className="content-feature">
                            <div className="content-feature-icon">&#128218;</div>
                            <div className="content-feature-title">Lots of Categories</div>
                            <p className="content-feature-desc">Animals, movies, countries, foods, and many more categories to choose from!</p>
                        </div>
                    </div>
                </div>

                {/* Technology */}
                <div className="content-card">
                    <h2 className="content-card-title">Built with Modern Technology</h2>
                    <p className="content-card-text" style={{marginBottom: '1rem'}}>
                        WordImposter is built using cutting-edge web technologies to ensure a smooth, fast, and
                        reliable gaming experience:
                    </p>
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
                    <h2 className="content-card-title">Your Privacy Matters</h2>
                    <p className="content-card-text">
                        We take your privacy seriously. WordImposter only collects the minimal data needed for
                        gameplay (your chosen nickname and room code). We do not track you, sell your data, or
                        require any personal information. Game data is deleted after each session. Read our full
                        privacy policy for more details.
                    </p>
                </div>

                {/* Developer */}
                <div className="content-card">
                    <h2 className="content-card-title">Meet the Developer</h2>
                    <p className="content-card-text" style={{marginBottom: '0.75rem'}}>
                        WordImposter is developed by <strong style={{color: 'white'}}>Enes Oz</strong>, an independent
                        developer passionate about creating fun, accessible games. Inspired by classic social
                        deduction games, WordImposter was created to bring friends together through the joy of gaming.
                    </p>
                    <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
                        Contact: <a href="mailto:oze05607@gmail.com" style={{color: '#a78bfa', textDecoration: 'none'}}>oze05607@gmail.com</a>
                    </p>
                </div>

                {/* Future Plans */}
                <div className="content-card">
                    <h2 className="content-card-title">Future Plans</h2>
                    <p className="content-card-text" style={{marginBottom: '0.75rem'}}>We are always working to make WordImposter better. Here is what is coming:</p>
                    <ul className="content-bullet-list">
                        <li><span className="content-bullet">&#8226;</span> More languages (German, French, Spanish, and more)</li>
                        <li><span className="content-bullet">&#8226;</span> Custom word lists - create your own categories</li>
                        <li><span className="content-bullet">&#8226;</span> Game statistics and leaderboards</li>
                        <li><span className="content-bullet">&#8226;</span> Voice chat integration</li>
                        <li><span className="content-bullet">&#8226;</span> New game modes and variations</li>
                        <li><span className="content-bullet">&#8226;</span> Native mobile apps for iOS and Android</li>
                    </ul>
                </div>

                {/* Thank You */}
                <div className="content-banner">
                    <div className="content-banner-title">Thank You!</div>
                    <p className="content-banner-text">
                        Thank you for playing WordImposter! Your support and feedback help us make the game better.
                        Have fun and happy gaming!
                    </p>
                </div>

                {/* CTA */}
                <div className="content-cta">
                    <Link href="/" className="content-cta-btn">
                        Play WordImposter Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
