'use client';

import { useEffect } from 'react';
import { useGameStore } from '@/lib/gameStore';
import { ArrowRightIcon, VoteIcon, AlertIcon, ArrowLeftIcon, LoaderIcon } from './Icons';

export default function GamePlay() {
    const {
        players,
        currentPlayerIndex,
        timer,
        category,
        nextPlayerTurn,
        goToVoting,
        decrementTimer,
        resetToLobby,
        currentUser,
        hostId
    } = useGameStore();

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
            <div className="home-card fade-in" style={{ borderRadius: 0, border: '4px solid var(--accent-purple)' }}>
                {/* Header */}
                <div className="header">
                    <button onClick={resetToLobby} className="icon-btn">
                        <ArrowLeftIcon size={20} />
                    </button>
                    <h2 className="title-md" style={{ flex: 1, textAlign: 'center', fontWeight: 900 }}>WORDSPY</h2>
                    <div style={{ width: 44 }}></div>
                </div>

                {/* Timer */}
                <div className="text-center mb-lg">
                    <div className={`timer-display ${timerClass}`} style={{ borderRadius: 0, border: '2px solid var(--border-accent)', background: 'var(--bg-tertiary)', padding: 'var(--spacing-md)', fontSize: '3rem', fontWeight: 900 }}>
                        {formatTime(timer)}
                    </div>

                    {timer !== 9999 && timer <= 20 && (
                        <div className="badge badge-red mt-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <AlertIcon size={12} />
                            Süre Bitiyor!
                        </div>
                    )}
                </div>

                {/* Category */}
                <div className="card-sm text-center mb-lg" style={{ borderRadius: 0, borderLeft: '8px solid var(--accent-purple)', background: 'var(--bg-secondary)' }}>
                    <span className="text-xs text-muted" style={{ fontWeight: 800 }}>CATEGORY</span>
                    <p style={{ fontSize: '1.5rem', fontWeight: 900, marginTop: 'var(--spacing-xs)', textTransform: 'uppercase' }}>
                        {category}
                    </p>
                </div>

                {/* Current Player */}
                <div className="card text-center mb-lg" style={{ borderRadius: 0, border: '2px solid var(--border-subtle)' }}>
                    <div className="player-avatar" style={{
                        width: 100,
                        height: 100,
                        fontSize: '2.5rem',
                        margin: '0 auto var(--spacing-md)',
                        background: 'var(--accent-purple)',
                        color: 'black',
                        fontWeight: 900,
                        borderRadius: 0
                    }}>
                        {currentPlayer?.name[0].toUpperCase()}
                    </div>
                    <h3 className="title-lg" style={{ fontWeight: 900 }}>{currentPlayer?.name.toUpperCase()}</h3>
                    <div className="badge badge-purple mt-sm" style={{ borderRadius: 0, border: '1px solid black' }}>CURRENT TURN</div>
                </div>

                {/* Player Queue */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--spacing-xs)',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    {players.map((p, idx) => (
                        <div
                            key={p.id}
                            style={{
                                width: idx === currentPlayerIndex ? 30 : 10,
                                height: 6,
                                borderRadius: 0,
                                background: idx === currentPlayerIndex ? 'var(--accent-purple)' : 'var(--bg-tertiary)',
                                transition: 'all 0.3s ease',
                                border: '1px solid var(--border-subtle)'
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
                        style={{ opacity: isMyTurn ? 1 : 0.6, borderRadius: 0, border: '2px solid var(--border-subtle)', fontWeight: 900 }}
                    >
                        <ArrowRightIcon size={18} />
                        {isMyTurn ? 'NEXT TURN' : 'WAITING'}
                    </button>
                    {isHost ? (
                        <button onClick={goToVoting} className="btn btn-primary btn-lg" style={{ borderRadius: 0, fontWeight: 900 }}>
                            <VoteIcon size={18} />
                            GO TO VOTE
                        </button>
                    ) : (
                        <div className="badge badge-purple btn-full text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', padding: '0 1rem', borderRadius: 0 }}>
                            WAITING...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
