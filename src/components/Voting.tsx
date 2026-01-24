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

                {/* Progress */}
                <div className="text-center mb-lg">
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-sm)' }}>
                        <EyeIcon size={32} color="var(--accent-purple)" />
                    </div>
                    <p className="text-muted">Who is the <span style={{ color: 'var(--accent-red)' }}>Impostor</span>?</p>

                    <div className="progress-bar mt-md" style={{ borderRadius: 0, border: '1px solid var(--border-subtle)', height: 10 }}>
                        <div
                            className="progress-fill"
                            style={{
                                width: `${(votedCount / players.length) * 100}%`,
                                background: 'var(--accent-purple)',
                                borderRadius: 0
                            }}
                        ></div>
                    </div>
                    <p className="text-xs text-muted mt-sm">{votedCount} / {players.length} VOTES</p>
                </div>

                {/* Vote List or Waiting */}
                <div style={{ maxHeight: '280px', overflowY: 'auto', marginBottom: 'var(--spacing-lg)' }}>
                    {hasVoted ? (
                        <div className="card text-center" style={{ borderRadius: 0, border: '1px solid var(--border-subtle)' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-md)', color: 'var(--accent-green)' }}>
                                <CheckIcon size={48} />
                            </div>
                            <h3 className="title-md">Oyun Alındı</h3>
                            <p className="text-muted mt-sm">Diğer oyuncular bekleniyor...</p>

                            <div className="mt-md">
                                {players.map(p => (
                                    <div key={p.id} className="player-item" style={{ opacity: votes[p.id] ? 1 : 0.5 }}>
                                        <div className="player-avatar" style={{ width: 32, height: 32, fontSize: '0.75rem' }}>
                                            {p.name[0]}
                                        </div>
                                        <div className="player-info">
                                            <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{p.name}</span>
                                        </div>
                                        {votes[p.id] ? (
                                            <CheckIcon size={14} color="var(--accent-green)" />
                                        ) : (
                                            <span className="text-xs text-muted">...</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {allVoted && (
                                <div className="badge badge-green mt-md">Sonuçlar yükleniyor...</div>
                            )}
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
                                        borderColor: selectedPlayer === player.id ? 'var(--accent-purple)' : 'var(--border-subtle)',
                                        background: selectedPlayer === player.id ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
                                        borderRadius: 0,
                                        borderWidth: selectedPlayer === player.id ? '2px' : '1px'
                                    }}
                                >
                                    <div
                                        className="player-avatar"
                                        style={{
                                            background: selectedPlayer === player.id ? 'var(--accent-purple)' : 'var(--bg-tertiary)',
                                            color: 'black',
                                            fontWeight: 900,
                                            borderRadius: 0
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
                    <button
                        onClick={handleVote}
                        disabled={!selectedPlayer}
                        className="btn btn-primary btn-lg btn-full"
                        style={{ borderRadius: 0, fontWeight: 900, padding: '1.25rem' }}
                    >
                        <CheckIcon size={20} />
                        CONFIRM VOTE
                    </button>
                )}
            </div>
        </div>
    );
}
