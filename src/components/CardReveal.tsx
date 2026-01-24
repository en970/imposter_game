'use client';

import { useState } from 'react';
import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';
import { LockIcon, CheckIcon, EyeIcon, ArrowLeftIcon, UsersIcon } from './Icons';

export default function CardReveal() {
    const {
        players,
        secretWord,
        category,
        currentUser,
        language,
        confirmCard,
        resetToLobby
    } = useGameStore();

    const t = translations[language];

    const [revealed, setRevealed] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    // Find current user's player data
    const myPlayer = players.find(p => p.name === currentUser);
    const myRole = myPlayer?.role;
    const hasSeenCard = myPlayer?.hasSeenCard || false;

    // Count how many have seen their cards
    const seenCount = players.filter(p => p.hasSeenCard).length;
    const progress = (seenCount / players.length) * 100;
    const allSeen = seenCount === players.length;

    const handleReveal = () => {
        setRevealed(true);
    };

    const handleConfirm = async () => {
        setConfirmed(true);
        await confirmCard();
    };

    // If already confirmed, show waiting screen
    if (hasSeenCard || confirmed) {
        return (
            <div className="center-container">
                <div className="home-card fade-in" style={{ background: 'transparent' }}>
                    {/* Header */}
                    <div className="header">
                        <button onClick={resetToLobby} className="icon-btn">
                            <ArrowLeftIcon size={20} />
                        </button>
                        <h2 className="title-md" style={{ flex: 1, textAlign: 'center' }}>{t.cardDistribution}</h2>
                        <div style={{ width: 44 }}></div>
                    </div>

                    {/* Confirmed State */}
                    <div className="card text-center" style={{ border: '1px solid var(--border-subtle)' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-md)', color: 'var(--accent-green)' }}>
                            <CheckIcon size={64} />
                        </div>
                        <h3 className="title-lg">{t.confirmed || 'Kartın Görüldü'}</h3>
                        <p className="text-muted mt-sm">{t.waitingForOthers}</p>

                        {/* Progress */}
                        <div className="mt-lg">
                            <div className="progress-bar" style={{ borderRadius: 'var(--radius-full)', height: 12, border: '1px solid var(--border-subtle)' }}>
                                <div className="progress-fill" style={{ width: `${progress}%`, background: 'var(--accent-purple)' }}></div>
                            </div>
                            <p className="text-xs text-muted mt-sm">{seenCount} / {players.length} {t.ready || 'Hazır'}</p>
                        </div>

                        {/* Player Status List */}
                        <div className="mt-lg" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                            {players.map((player) => (
                                <div key={player.id} className="player-item" style={{ opacity: player.hasSeenCard ? 1 : 0.5, background: 'var(--bg-tertiary)' }}>
                                    <div className="player-avatar" style={{ width: 36, height: 36, fontSize: '0.875rem' }}>
                                        {player.name[0]}
                                    </div>
                                    <div className="player-info">
                                        <span style={{ fontWeight: 600 }}>{player.name}</span>
                                    </div>
                                    {player.hasSeenCard ? (
                                        <CheckIcon size={16} color="var(--accent-green)" />
                                    ) : (
                                        <span className="text-xs text-muted">{t.wait || 'Bekliyor'}</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {allSeen && (
                            <div className="badge mt-lg" style={{ background: 'var(--accent-purple-glow)', color: 'white' }}>{t.readyToStart}</div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Card reveal flow
    return (
        <div className="center-container">
            <div className="home-card fade-in" style={{ background: 'transparent' }}>
                {/* Header */}
                <div className="header">
                    <button onClick={resetToLobby} className="icon-btn">
                        <ArrowLeftIcon size={20} />
                    </button>
                    <h2 className="title-md" style={{ flex: 1, textAlign: 'center' }}>{t.cardDistribution}</h2>
                    <div style={{ width: 44 }}></div>
                </div>

                {/* Progress bar above card */}
                <div className="mb-lg">
                    <div className="progress-bar" style={{ borderRadius: 'var(--radius-full)', height: 12, border: '1px solid var(--border-subtle)' }}>
                        <div className="progress-fill" style={{ width: `${progress}%`, background: 'var(--accent-purple)' }}></div>
                    </div>
                    <p className="text-xs text-muted mt-sm text-center">{seenCount} / {players.length} {t.ready || 'Hazır'}</p>
                </div>

                {!revealed ? (
                    /* Locked Card */
                    <div
                        className="card text-center"
                        onClick={handleReveal}
                        style={{ cursor: 'pointer', border: '2px dashed var(--border-accent)', background: 'var(--bg-secondary)', transition: 'transform 0.2s' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-md)' }}>
                            <LockIcon size={64} color="var(--border-accent)" />
                        </div>
                        <h3 className="title-lg">{currentUser}</h3>
                        <p className="text-muted mt-sm">{t.revealCard}</p>
                    </div>
                ) : (
                    /* Revealed Card */
                    <div className="card" style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
                        {myRole === 'imposter' ? (
                            <div className="text-center">
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-md)', color: 'var(--accent-red)' }}>
                                    <EyeIcon size={64} />
                                </div>
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-red)' }}>{t.imposterRole}</h3>
                                <div className="badge mt-sm" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', color: 'white' }}>
                                    {t.category}: {t.categories[category as keyof typeof t.categories] || category}
                                </div>
                                <p className="text-muted mt-md">
                                    {t.imposterSecret}
                                </p>
                            </div>
                        ) : (
                            <div className="text-center">
                                <span className="badge" style={{ background: 'var(--accent-purple-glow)', color: 'var(--border-accent)', border: '1px solid var(--border-accent)' }}>
                                    {t.categories[category as keyof typeof t.categories] || category}
                                </span>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: 'var(--spacing-md)', color: 'white' }}>
                                    {secretWord}
                                </h3>
                                <p className="text-muted mt-md">
                                    {t.civilianSecret}
                                </p>
                            </div>
                        )}

                        <button
                            onClick={handleConfirm}
                            className="btn btn-primary btn-lg btn-full mt-lg"
                        >
                            <CheckIcon size={20} />
                            {t.understood}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
