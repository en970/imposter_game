'use client';

import { useGameStore } from '@/lib/gameStore';
import { TrophyIcon, SkullIcon, ChartIcon, RefreshIcon, LoaderIcon } from './Icons';

export default function Results() {
    const { players, secretWord, category, calculateResults, resetToLobby, hostId } = useGameStore();

    const { imposters, winners, voteResults } = calculateResults();

    const sortedPlayers = [...players].sort((a, b) =>
        (voteResults[b.id] || 0) - (voteResults[a.id] || 0)
    );

    const maxVotes = Math.max(...Object.values(voteResults), 0);

    return (
        <div className="center-container">
            <div className="home-card fade-in" style={{ borderRadius: 0, border: '4px solid var(--accent-purple)' }}>
                {/* Winner Banner */}
                <div
                    className="card text-center mb-lg"
                    style={{
                        borderColor: winners === 'civilians' ? 'var(--accent-green)' : 'var(--accent-red)',
                        borderWidth: 4,
                        borderRadius: 0,
                        background: 'var(--bg-secondary)'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-md)' }}>
                        {winners === 'civilians' ? (
                            <TrophyIcon size={64} color="var(--accent-green)" />
                        ) : (
                            <SkullIcon size={64} color="var(--accent-red)" />
                        )}
                    </div>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 900,
                        color: winners === 'civilians' ? 'var(--accent-green)' : 'var(--accent-red)',
                        textTransform: 'uppercase'
                    }}>
                        {winners === 'civilians' ? 'CIVILIANS WIN!' : 'IMPOSTOR WINS!'}
                    </h2>
                    <p className="text-muted mt-sm" style={{ fontSize: '0.875rem' }}>
                        {winners === 'civilians' ? 'The Impostor was caught!' : 'The Impostor escaped!'}
                    </p>
                </div>

                {/* Imposter Reveal */}
                <div className="mb-md">
                    <h4 className="section-title mb-sm">
                        <SkullIcon size={14} color="var(--accent-red)" />
                        IMPOSTOR
                    </h4>
                    {imposters.map((imposter) => (
                        <div
                            key={imposter.id}
                            className="player-item"
                            style={{ borderLeft: '8px solid var(--accent-red)', borderRadius: 0, background: 'var(--bg-tertiary)' }}
                        >
                            <div className="player-avatar" style={{ width: 40, height: 40, fontSize: '1rem', color: 'var(--accent-red)', borderRadius: 0, fontWeight: 900 }}>
                                {imposter.name[0]}
                            </div>
                            <div className="player-info">
                                <div className="player-name" style={{ fontSize: '1.125rem', fontWeight: 900 }}>{imposter.name.toUpperCase()}</div>
                            </div>
                            <span className="badge badge-red" style={{ borderRadius: 0 }}>{voteResults[imposter.id] || 0} VOTES</span>
                        </div>
                    ))}
                </div>

                {/* Word Reveal */}
                <div
                    className="card-sm mb-md"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: 0,
                        border: '1px solid var(--border-subtle)',
                        background: 'var(--bg-secondary)'
                    }}
                >
                    <div style={{ borderLeft: '4px solid var(--accent-purple)', paddingLeft: 'var(--spacing-sm)' }}>
                        <span className="text-xs text-muted" style={{ fontWeight: 800 }}>WORD</span>
                        <p style={{ fontSize: '1.25rem', fontWeight: 900, marginTop: '2px', color: 'var(--accent-purple)' }}>
                            {secretWord.toUpperCase()}
                        </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <span className="text-xs text-muted" style={{ fontWeight: 800 }}>CATEGORY</span>
                        <p style={{ fontSize: '0.875rem', fontWeight: 900, color: 'white', marginTop: '2px' }}>
                            {category.toUpperCase()}
                        </p>
                    </div>
                </div>

                {/* Vote Distribution */}
                <div className="mb-lg" style={{ maxHeight: '160px', overflowY: 'auto' }}>
                    <h4 className="section-title mb-sm">
                        <ChartIcon size={14} color="var(--accent-purple)" />
                        VOTE DISTRIBUTION
                    </h4>
                    {sortedPlayers.map((player) => {
                        const votz = voteResults[player.id] || 0;
                        const progress = maxVotes > 0 ? (votz / maxVotes) * 100 : 0;
                        const isImposter = player.role === 'imposter';

                        return (
                            <div
                                key={player.id}
                                className="card-sm mb-sm"
                                style={{ position: 'relative', overflow: 'hidden', padding: 'var(--spacing-sm)' }}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        width: `${progress}%`,
                                        background: isImposter ? 'rgba(239, 68, 68, 0.2)' : 'rgba(139, 92, 246, 0.2)',
                                        transition: 'width 1s ease'
                                    }}
                                />
                                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                    <div className="player-avatar" style={{ width: 28, height: 28, fontSize: '0.625rem' }}>
                                        {player.name[0]}
                                    </div>
                                    <span style={{
                                        fontWeight: 600,
                                        fontSize: '0.875rem',
                                        color: isImposter ? 'var(--accent-red)' : 'var(--text-primary)'
                                    }}>
                                        {player.name}
                                    </span>
                                    <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                        {votz}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Play Again */}
                {hostId === (typeof window !== 'undefined' ? sessionStorage.getItem('playerId') : null) ? (
                    <button onClick={resetToLobby} className="btn btn-primary btn-lg btn-full" style={{ borderRadius: 0, fontWeight: 900, padding: '1.25rem' }}>
                        <RefreshIcon size={20} />
                        PLAY AGAIN
                    </button>
                ) : (
                    <div className="badge badge-purple btn-full text-center py-md" style={{ display: 'flex', justifyContent: 'center', padding: '1.25rem', borderRadius: 0 }}>
                        <LoaderIcon size={16} className="mr-sm" />
                        WAITING FOR HOST TO RESTART...
                    </div>
                )}
            </div>
        </div>
    );
}
