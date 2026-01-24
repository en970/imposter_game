'use client';

import { useState } from 'react';
import { useGameStore } from '@/lib/gameStore';
import { LockIcon, CheckIcon, EyeIcon, ArrowLeftIcon, UsersIcon } from './Icons';

export default function CardReveal() {
    const {
        players,
        secretWord,
        category,
        currentUser,
        confirmCard,
        resetToLobby
    } = useGameStore();

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
                <div className="home-card fade-in" style={{ borderRadius: 0, border: '4px solid var(--accent-purple)' }}>
                    {/* Header */}
                    <div className="header">
                        <button onClick={resetToLobby} className="icon-btn">
                            <ArrowLeftIcon size={20} />
                        </button>
                        <h2 className="title-md" style={{ flex: 1, textAlign: 'center' }}>Kart Dağıtımı</h2>
                        <div style={{ width: 44 }}></div>
                    </div>

                    {/* Confirmed State */}
                    <div className="card text-center">
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-md)', color: 'var(--accent-green)' }}>
                            <CheckIcon size={64} />
                        </div>
                        <h3 className="title-lg">Kartın Görüldü</h3>
                        <p className="text-muted mt-sm">Diğer oyuncular bekleniyor...</p>

                        {/* Progress */}
                        <div className="mt-lg">
                            <div className="progress-bar" style={{ borderRadius: 0, height: 12, border: '1px solid var(--border-subtle)' }}>
                                <div className="progress-fill" style={{ width: `${progress}%`, borderRadius: 0, background: 'var(--accent-purple)' }}></div>
                            </div>
                            <p className="text-xs text-muted mt-sm">{seenCount} / {players.length} Hazır</p>
                        </div>

                        {/* Player Status List */}
                        <div className="mt-lg" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                            {players.map((player) => (
                                <div key={player.id} className="player-item" style={{ opacity: player.hasSeenCard ? 1 : 0.5 }}>
                                    <div className="player-avatar" style={{ width: 36, height: 36, fontSize: '0.875rem' }}>
                                        {player.name[0]}
                                    </div>
                                    <div className="player-info">
                                        <span style={{ fontWeight: 600 }}>{player.name}</span>
                                    </div>
                                    {player.hasSeenCard ? (
                                        <CheckIcon size={16} color="var(--accent-green)" />
                                    ) : (
                                        <span className="text-xs text-muted">Bekliyor</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {allSeen && (
                            <div className="badge badge-green mt-lg">Herkes hazır! Oyun başlıyor...</div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Card reveal flow
    return (
        <div className="center-container">
            <div className="home-card fade-in" style={{ borderRadius: 0, border: '4px solid var(--accent-purple)' }}>
                {/* Header */}
                <div className="header">
                    <button onClick={resetToLobby} className="icon-btn">
                        <ArrowLeftIcon size={20} />
                    </button>
                    <h2 className="title-md" style={{ flex: 1, textAlign: 'center' }}>Kart Dağıtımı</h2>
                    <div style={{ width: 44 }}></div>
                </div>

                {/* Progress */}
                <div className="mb-lg">
                    <div className="progress-bar" style={{ borderRadius: 0, height: 12, border: '1px solid var(--border-subtle)' }}>
                        <div className="progress-fill" style={{ width: `${progress}%`, borderRadius: 0, background: 'var(--accent-purple)' }}></div>
                    </div>
                    <p className="text-xs text-muted mt-sm text-center">{seenCount} / {players.length} Hazır</p>
                </div>

                {!revealed ? (
                    /* Locked Card */
                    <div
                        className="card text-center"
                        onClick={handleReveal}
                        style={{ cursor: 'pointer', borderRadius: 0, border: '2px dashed var(--accent-purple)' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-md)' }}>
                            <LockIcon size={64} color="var(--accent-purple)" />
                        </div>
                        <h3 className="title-lg">{currentUser}</h3>
                        <p className="text-muted mt-sm">Kartını görmek için dokun</p>
                    </div>
                ) : (
                    /* Revealed Card */
                    <div className="card" style={{ borderRadius: 0, border: '2px solid var(--border-subtle)' }}>
                        {myRole === 'imposter' ? (
                            <div className="text-center">
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-md)', color: 'var(--accent-red)' }}>
                                    <EyeIcon size={64} />
                                </div>
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-red)' }}>CASUSSUN!</h3>
                                <div className="badge badge-purple mt-sm">Kategori: {category}</div>
                                <p className="text-muted mt-md">
                                    Gizli kelimeyi bilmiyorsun.<br />
                                    <strong>Belli etme!</strong>
                                </p>
                            </div>
                        ) : (
                            <div className="text-center">
                                <span className="badge badge-purple">{category}</span>
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
        </div>
    );
}
