'use client';

import { SparklesIcon } from './Icons';

export default function Navbar() {
    return (
        <nav className="ad-navbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', maxWidth: '1200px', width: '100%', padding: '0 var(--spacing-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                    <span style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>WORD<span style={{ color: 'var(--accent-purple)' }}>SPY</span></span>
                </div>

                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <div className="ad-placeholder">
                        Reklam Alanı • Google Ads Placeholder
                    </div>
                </div>

                <div className="badge badge-purple" style={{ fontSize: '0.625rem' }}>
                    v1.1 Modern
                </div>
            </div>
        </nav>
    );
}
