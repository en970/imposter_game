'use client';

import { useState, useEffect } from 'react';
import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';
import { CheckIcon, EyeIcon, ArrowLeftIcon } from './Icons';

export default function Voting() {
    const { players, votes, currentUser, language, castVote, resetToLobby } = useGameStore();
    const t = translations[language];

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
            <div className="home-card fade-in" style={{ background: 'transparent' }}>
                {/* Header */}
                <div className="header">
                    <button onClick={resetToLobby} className="icon-btn">
                        <ArrowLeftIcon size={20} />
                    </button>
                    <h2 className="title-md" style={{ flex: 1, textAlign: 'center', fontWeight: 800 }}>{t.appName}</h2>
                    <div style={{ width: 44 }}></div>
                </div>

                {/* Progress */}
                <div className="text-center mb-lg">
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-sm)' }}>
                        <EyeIcon size={32} color="var(--border-accent)" />
                    </div>
                    <p className="text-secondary">{t.whosImposter}</p>

                    <div className="progress-bar mt-md" style={{ background: 'var(--bg-tertiary)', height: 10 }}>
                        <div
                            className="progress-fill"
                            style={{
                                width: `${(votedCount / players.length) * 100}%`,
                                background: 'var(--border-accent)'
                            }}
                        ></div>
                    </div>
                    <p className="text-xs text-muted mt-sm">{votedCount} / {players.length} {t.votes.toUpperCase()}</p>
                </div>

                {/* Vote List or Waiting */}
                <div style={{ maxHeight: '280px', overflowY: 'auto', marginBottom: 'var(--spacing-lg)' }}>
                    {hasVoted ? (
                        <div className="card text-center" style={{ border: '1px solid var(--border-subtle)' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-md)', color: 'var(--accent-green)' }}>
                                <CheckIcon size={48} />
                            </div>
                            <h3 className="title-md">{language === 'tr' ? 'Oyun Alındı' : 'Vote Received'}</h3>
                            <p className="text-muted mt-sm">{t.waitingForOthers}</p>

                            <div className="mt-md">
                                {players.map(p => (
                                    <div key={p.id} className="player-item" style={{ opacity: votes[p.id] ? 1 : 0.5, background: 'var(--bg-tertiary)' }}>
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
                                <div className="badge mt-md" style={{ background: 'var(--accent-purple-glow)', color: 'white' }}>{language === 'tr' ? 'Sonuçlar yükleniyor...' : 'Loading results...'}</div>
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
                                        borderColor: selectedPlayer === player.id ? 'var(--border-accent)' : 'var(--border-subtle)',
                                        background: selectedPlayer === player.id ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
                                        borderWidth: selectedPlayer === player.id ? '2px' : '1px'
                                    }}
                                >
                                    <div
                                        className="player-avatar"
                                        style={{
                                            background: selectedPlayer === player.id ? 'var(--border-accent)' : 'var(--bg-tertiary)',
                                            color: selectedPlayer === player.id ? 'white' : 'var(--border-accent)',
                                            fontWeight: 900
                                        }}
                                    >
                                        {player.name[0].toUpperCase()}
                                    </div>
                                    <div className="player-info">
                                        <div className="player-name">{player.name}</div>
                                        <div className="player-role">{language === 'tr' ? 'Şüpheli' : 'Suspect'}</div>
                                    </div>
                                    {selectedPlayer === player.id && (
                                        <span style={{ color: 'var(--border-accent)' }}>
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
                        style={{ boxShadow: 'var(--shadow-md)' }}
                    >
                        <CheckIcon size={20} />
                        {t.confirmVote}
                    </button>
                )}
            </div>
        </div>
    );
}
