'use client';

import { useState } from 'react';
import { useGameStore } from '@/lib/gameStore';
import { LockIcon, CheckIcon, EyeIcon, SmartphoneIcon, ArrowLeftIcon } from './Icons';

export default function CardReveal() {
    const {
        players,
        currentPlayerIndex,
        secretWord,
        category,
        showingCard,
        currentUser,
        showCard,
        hideCard,
        confirmCard,
        resetToLobby
    } = useGameStore();

    const [animating, setAnimating] = useState(false);

    const currentPlayer = players[currentPlayerIndex];
    const isCurrentUserTurn = currentPlayer?.name === currentUser;

    const handleShowCard = () => {
        setAnimating(true);
        setTimeout(() => {
            showCard();
            setAnimating(false);
        }, 200);
    };

    const handleConfirm = () => {
        hideCard();
        setTimeout(() => {
            confirmCard();
        }, 200);
    };

    const progress = (players.filter(p => p.hasSeenCard).length / players.length) * 100;

    return (
        <div className="page-container fade-in">
            {/* Header with Back Button */}
            <div className="header">
                <button onClick={resetToLobby} className="icon-btn">
                    <ArrowLeftIcon size={20} />
                </button>
                <h2 className="title-md" style={{ flex: 1, textAlign: 'center' }}>Kart Dağıtımı</h2>
                <div style={{ width: 44 }}></div>
            </div>

            {/* Progress */}
            <div className="text-center mb-lg">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-xs text-muted mt-sm">
                    {players.filter(p => p.hasSeenCard).length} / {players.length} Kontrol Edildi
                </p>
            </div>

            {/* Players Grid */}
            <div className="scroll-area">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-sm)' }}>
                    {players.map((player, index) => (
                        <div
                            key={player.id}
                            className="card-sm"
                            style={{
                                borderColor: index === currentPlayerIndex
                                    ? 'var(--accent-purple)'
                                    : player.hasSeenCard
                                        ? 'var(--accent-green)'
                                        : 'var(--border-subtle)',
                                opacity: player.hasSeenCard ? 0.6 : 1
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                <div className="player-avatar" style={{ width: 40, height: 40, fontSize: '1rem' }}>
                                    {player.name[0]}
                                </div>
                                <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{player.name}</span>
                                {player.hasSeenCard && (
                                    <span style={{ marginLeft: 'auto', color: 'var(--accent-green)' }}>
                                        <CheckIcon size={16} />
                                    </span>
                                )}
                                {index === currentPlayerIndex && !player.hasSeenCard && (
                                    <span style={{ marginLeft: 'auto', color: 'var(--accent-purple)' }}>
                                        <EyeIcon size={16} />
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay for Current Player */}
            {currentPlayer && !currentPlayer.hasSeenCard && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(10, 10, 15, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--spacing-lg)',
                    zIndex: 200
                }} className="fade-in">
                    {isCurrentUserTurn ? (
                        <div style={{ width: '100%', maxWidth: 360 }}>
                            {!showingCard ? (
                                <div
                                    className="card text-center"
                                    onClick={handleShowCard}
                                    style={{ cursor: 'pointer', opacity: animating ? 0.5 : 1 }}
                                >
                                    <div style={{ marginBottom: 'var(--spacing-md)', display: 'flex', justifyContent: 'center' }}>
                                        <LockIcon size={64} color="var(--accent-purple)" />
                                    </div>
                                    <h3 className="title-lg">{currentPlayer.name}</h3>
                                    <p className="text-muted mt-sm">Kartını görmek için dokun</p>
                                </div>
                            ) : (
                                <div className="card">
                                    {currentPlayer.role === 'imposter' ? (
                                        <div className="text-center">
                                            <div style={{ marginBottom: 'var(--spacing-md)', color: 'var(--accent-red)' }}>
                                                <EyeIcon size={64} />
                                            </div>
                                            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-red)' }}>CASUSSUN!</h3>
                                            <p className="text-muted mt-md">
                                                Gizli kelimeyi bilmiyorsun.<br />
                                                <strong>Belli etme!</strong>
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <span className="badge badge-purple mb-md">{category}</span>
                                            <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: 'var(--spacing-md)' }}>
                                                {secretWord}
                                            </h3>
                                            <p className="text-muted mt-md">
                                                Kelimeyi tarif et ama <span style={{ color: 'var(--accent-red)' }}>Casus</span>a dikkat!
                                            </p>
                                        </div>
                                    )}
                                    <button
                                        onClick={handleConfirm}
                                        className="btn btn-primary btn-lg btn-full mt-lg"
                                    >
                                        <CheckIcon size={20} />
                                        Anladım
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="card text-center" style={{ maxWidth: 360 }}>
                            <div style={{ marginBottom: 'var(--spacing-md)', display: 'flex', justifyContent: 'center' }}>
                                <SmartphoneIcon size={64} color="var(--accent-purple)" />
                            </div>
                            <h3 className="title-lg">{currentPlayer.name}</h3>
                            <p className="text-muted mt-sm">Cihazı bu oyuncuya ver</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
