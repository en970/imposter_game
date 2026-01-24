'use client';

import { useState, useEffect } from 'react';
import { useGameStore } from '@/lib/gameStore';
import { CheckIcon, EyeIcon, ArrowLeftIcon } from './Icons';

export default function Voting() {
    const { players, votes, currentUser, castVote, resetToLobby } = useGameStore();
    const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
    const [hasVoted, setHasVoted] = useState(false);

    const currentUserPlayer = players.find(p => p.name === currentUser);
    const currentUserId = currentUserPlayer?.id;

    useEffect(() => {
        if (currentUserId && votes[currentUserId]) {
            setHasVoted(true);
        }
    }, [currentUserId, votes]);

    const handleVote = () => {
        if (selectedPlayer && currentUserId) {
            castVote(currentUserId, selectedPlayer);
            setHasVoted(true);
        }
    };

    const votedCount = Object.keys(votes).length;
    const allVoted = votedCount === players.length;

    useEffect(() => {
        if (allVoted) {
            const timer = setTimeout(() => {
                useGameStore.setState({ gameState: 'result' });
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [allVoted]);

    return (
        <div className="page-container fade-in">
            {/* Header with Back Button */}
            <div className="header">
                <button onClick={resetToLobby} className="icon-btn">
                    <ArrowLeftIcon size={20} />
                </button>
                <h2 className="title-md" style={{ flex: 1, textAlign: 'center' }}>Oylama</h2>
                <div style={{ width: 44 }}></div>
            </div>

            {/* Progress */}
            <div className="text-center mb-lg">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-sm)' }}>
                    <EyeIcon size={32} color="var(--accent-purple)" />
                </div>
                <p className="text-muted">Sence <span style={{ color: 'var(--accent-red)' }}>Casus</span> kim?</p>

                <div className="progress-bar mt-md">
                    <div
                        className="progress-fill"
                        style={{
                            width: `${(votedCount / players.length) * 100}%`,
                            background: 'var(--accent-orange)'
                        }}
                    ></div>
                </div>
                <p className="text-xs text-muted mt-sm">{votedCount} / {players.length} Oy</p>
            </div>

            {/* Vote List or Waiting */}
            <div className="scroll-area">
                {hasVoted ? (
                    <div className="card text-center fade-in">
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-md)', color: 'var(--accent-green)' }}>
                            <CheckIcon size={64} />
                        </div>
                        <h3 className="title-md">Oyun Alındı</h3>
                        <p className="text-muted mt-sm">Diğer oyuncular bekleniyor...</p>

                        <div className="mt-lg">
                            {players.map(p => (
                                <div key={p.id} className="player-item" style={{ opacity: votes[p.id] ? 1 : 0.5 }}>
                                    <div className="player-avatar" style={{ width: 36, height: 36, fontSize: '0.875rem' }}>
                                        {p.name[0]}
                                    </div>
                                    <div className="player-info">
                                        <span style={{ fontWeight: 600 }}>{p.name}</span>
                                    </div>
                                    {votes[p.id] && <span className="badge badge-green">Oy Verdi</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        {players.filter(p => p.id !== currentUserId).map((player) => (
                            <div
                                key={player.id}
                                onClick={() => setSelectedPlayer(player.id)}
                                className="player-item"
                                style={{
                                    cursor: 'pointer',
                                    borderColor: selectedPlayer === player.id ? 'var(--accent-orange)' : 'var(--border-subtle)',
                                    background: selectedPlayer === player.id ? 'var(--bg-tertiary)' : 'var(--bg-secondary)'
                                }}
                            >
                                <div
                                    className="player-avatar"
                                    style={{
                                        background: selectedPlayer === player.id ? 'var(--accent-orange)' : 'var(--bg-tertiary)',
                                        color: selectedPlayer === player.id ? 'white' : 'var(--accent-purple)'
                                    }}
                                >
                                    {player.name[0].toUpperCase()}
                                </div>
                                <div className="player-info">
                                    <div className="player-name">{player.name}</div>
                                    <div className="player-role">Şüpheli</div>
                                </div>
                                {selectedPlayer === player.id && (
                                    <span style={{ color: 'var(--accent-orange)' }}>
                                        <CheckIcon size={20} />
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Vote Button */}
            {!hasVoted && (
                <div className="fixed-footer">
                    <div className="fixed-footer-content">
                        <button
                            onClick={handleVote}
                            disabled={!selectedPlayer}
                            className="btn btn-primary btn-lg btn-full"
                            style={{ background: 'var(--accent-orange)' }}
                        >
                            <CheckIcon size={20} />
                            Oyu Gönder
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
