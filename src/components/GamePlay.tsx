'use client';

import { useEffect } from 'react';
import { useGameStore } from '@/lib/gameStore';
import { ArrowRightIcon, VoteIcon, AlertIcon, ClockIcon } from './Icons';

export default function GamePlay() {
    const {
        players,
        currentPlayerIndex,
        timer,
        category,
        nextPlayerTurn,
        goToVoting,
        decrementTimer
    } = useGameStore();

    const currentPlayer = players[currentPlayerIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            decrementTimer();
        }, 1000);
        return () => clearInterval(interval);
    }, [decrementTimer]);

    useEffect(() => {
        if (timer === 0) {
            goToVoting();
        }
    }, [timer, goToVoting]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const timerClass = timer > 60 ? '' : timer > 20 ? 'timer-warning' : 'timer-danger';

    return (
        <div className="page-container fade-in">
            {/* Timer */}
            <div className="text-center mb-lg">
                <div className={`timer-display ${timerClass}`}>
                    {formatTime(timer)}
                </div>

                {timer <= 20 && (
                    <div className="badge badge-red mt-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <AlertIcon size={12} />
                        Süre Bitiyor!
                    </div>
                )}
            </div>

            {/* Category */}
            <div className="card-sm text-center mb-lg">
                <span className="text-xs text-muted">Kategori</span>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: 'var(--spacing-xs)' }}>
                    {category}
                </p>
            </div>

            {/* Current Player */}
            <div className="card text-center mb-lg">
                <div className="player-avatar" style={{
                    width: 80,
                    height: 80,
                    fontSize: '2rem',
                    margin: '0 auto var(--spacing-md)',
                    background: 'var(--accent-purple)',
                    color: 'white'
                }}>
                    {currentPlayer?.name[0].toUpperCase()}
                </div>
                <h3 className="title-lg">{currentPlayer?.name}</h3>
                <div className="badge badge-purple mt-sm">Sıra Sende</div>
                <p className="description mt-md">
                    Kelime hakkında ipucu ver ama <span style={{ color: 'var(--accent-red)' }}>Casus</span>'u şüphelendirme!
                </p>
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
                            width: idx === currentPlayerIndex ? 24 : 8,
                            height: 8,
                            borderRadius: 'var(--radius-full)',
                            background: idx === currentPlayerIndex ? 'var(--accent-purple)' : 'var(--bg-tertiary)',
                            transition: 'all 0.3s ease'
                        }}
                    />
                ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-sm)' }}>
                <button onClick={nextPlayerTurn} className="btn btn-secondary btn-lg">
                    <ArrowRightIcon size={18} />
                    Devam Et
                </button>
                <button onClick={goToVoting} className="btn btn-primary btn-lg">
                    <VoteIcon size={18} />
                    Oylama
                </button>
            </div>
        </div>
    );
}
