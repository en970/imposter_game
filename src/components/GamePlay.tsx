'use client';

import { useEffect } from 'react';
import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';
import { ArrowRightIcon, VoteIcon, AlertIcon, ArrowLeftIcon, LoaderIcon } from './Icons';

export default function GamePlay() {
    const {
        players,
        currentPlayerIndex,
        timer,
        category,
        language,
        nextPlayerTurn,
        goToVoting,
        decrementTimer,
        resetToLobby,
        currentUser,
        hostId
    } = useGameStore();

    const t = translations[language];

    const currentPlayer = players[currentPlayerIndex];
    const isMyTurn = currentPlayer?.name === currentUser;
    const isHost = hostId === (typeof window !== 'undefined' ? sessionStorage.getItem('playerId') : null);

    useEffect(() => {
        if (timer === 9999) return;
        const interval = setInterval(() => {
            decrementTimer();
        }, 1000);
        return () => clearInterval(interval);
    }, [decrementTimer, timer]);

    useEffect(() => {
        if (timer === 0) {
            goToVoting();
        }
    }, [timer, goToVoting]);

    const formatTime = (seconds: number) => {
        if (seconds === 9999) return '∞';
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const timerClass = timer === 9999 ? '' : timer > 60 ? '' : timer > 20 ? 'timer-warning' : 'timer-danger';

    return (
        <div className="center-container">
            <div className="home-card fade-in" style={{ background: 'transparent' }}>
                {/* Header */}
                <div className="header">
                    <button onClick={resetToLobby} className="icon-btn">
                        <ArrowLeftIcon size={20} />
                    </button>
                    <h2 className="title-md" style={{ flex: 1, textAlign: 'center', fontWeight: 800 }}>{t.appName}</h2>
                    <div style={{ width: 44 }}></div>
                </div>

                {/* Timer */}
                <div className="text-center mb-lg">
                    <div className={`timer-display ${timerClass}`} style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-md)', fontWeight: 800 }}>
                        {formatTime(timer)}
                    </div>

                    {timer !== 9999 && timer <= 20 && (
                        <div className="badge badge-red mt-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <AlertIcon size={12} />
                            {language === 'tr' ? 'Süre Bitiyor!' : 'Time Depleting!'}
                        </div>
                    )}
                </div>

                {/* Category */}
                <div className="card-sm text-center mb-lg" style={{ background: 'var(--bg-secondary)', borderTop: '4px solid var(--border-accent)' }}>
                    <span className="text-xs text-muted" style={{ fontWeight: 700 }}>{t.category}</span>
                    <p style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: 'var(--spacing-xs)', textTransform: 'uppercase', color: 'white' }}>
                        {t.categories[category as keyof typeof t.categories] || category}
                    </p>
                </div>

                {/* Current Player */}
                <div className="card text-center mb-lg" style={{ border: '1px solid var(--border-subtle)' }}>
                    <div className="player-avatar" style={{
                        width: 100,
                        height: 100,
                        fontSize: '2.5rem',
                        margin: '0 auto var(--spacing-md)',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--border-accent)',
                        fontWeight: 900,
                        border: '2px solid var(--border-subtle)'
                    }}>
                        {currentPlayer?.name[0].toUpperCase()}
                    </div>
                    <h3 className="title-lg" style={{ fontWeight: 800 }}>{currentPlayer?.name}</h3>
                    <div className="badge mt-sm" style={{ background: 'var(--accent-purple-glow)', color: 'white', border: '1px solid var(--border-accent)' }}>{t.currentTurn}</div>
                </div>

                {/* Player Queue Indicators */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--spacing-sm)',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    {players.map((p, idx) => (
                        <div
                            key={p.id}
                            style={{
                                width: 12,
                                height: 4,
                                borderRadius: 'var(--radius-full)',
                                background: idx === currentPlayerIndex ? 'var(--border-accent)' : 'var(--bg-tertiary)',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-sm)' }}>
                    <button
                        onClick={nextPlayerTurn}
                        disabled={!isMyTurn}
                        className="btn btn-secondary btn-lg"
                        style={{ opacity: isMyTurn ? 1 : 0.6 }}
                    >
                        <ArrowRightIcon size={18} />
                        {isMyTurn ? t.nextTurn : t.wait}
                    </button>
                    {isHost ? (
                        <button onClick={goToVoting} className="btn btn-primary btn-lg">
                            <VoteIcon size={18} />
                            {t.goToVote}
                        </button>
                    ) : (
                        <div className="badge btn-full text-center" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {t.wait}...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
