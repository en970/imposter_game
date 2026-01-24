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
            <div className="home-card fade-in">
                {/* Winner Banner */}
                <div
                    className="card text-center mb-lg"
                    style={{
                        borderColor: winners === 'civilians' ? 'var(--accent-green)' : 'var(--accent-red)',
                        borderWidth: 2
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
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: winners === 'civilians' ? 'var(--accent-green)' : 'var(--accent-red)'
                    }}>
                        {winners === 'civilians' ? 'Siviller Kazandı!' : 'Casus Kazandı!'}
                    </h2>
                    <p className="text-muted mt-sm" style={{ fontSize: '0.875rem' }}>
                        {winners === 'civilians' ? 'Casus yakalandı!' : 'Casus kendini gizledi.'}
                    </p>
                </div>

                {/* Imposter Reveal */}
                <div className="mb-md">
                    <h4 className="section-title mb-sm">
                        <SkullIcon size={14} color="var(--accent-red)" />
                        Casus
                    </h4>
                    {imposters.map((imposter) => (
                        <div
                            key={imposter.id}
                            className="player-item"
                            style={{ borderLeft: '3px solid var(--accent-red)' }}
                        >
                            <div className="player-avatar" style={{ width: 36, height: 36, fontSize: '0.875rem', color: 'var(--accent-red)' }}>
                                {imposter.name[0]}
                            </div>
                            <div className="player-info">
                                <div className="player-name" style={{ fontSize: '0.875rem' }}>{imposter.name}</div>
                            </div>
                            <span className="badge badge-red">{voteResults[imposter.id] || 0} Oy</span>
                        </div>
                    ))}
                </div>

                {/* Word Reveal */}
                <div
                    className="card-sm mb-md"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <div>
                        <span className="text-xs text-muted">Kelime</span>
                        <p style={{ fontSize: '1rem', fontWeight: 700, marginTop: '2px' }}>
                            {secretWord}
                        </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <span className="text-xs text-muted">Kategori</span>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-purple)', marginTop: '2px' }}>
                            {category}
                        </p>
                    </div>
                </div>

                {/* Vote Distribution */}
                <div className="mb-lg" style={{ maxHeight: '160px', overflowY: 'auto' }}>
                    <h4 className="section-title mb-sm">
                        <ChartIcon size={14} color="var(--accent-purple)" />
                        Oy Dağılımı
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
                    <button onClick={resetToLobby} className="btn btn-primary btn-lg btn-full">
                        <RefreshIcon size={20} />
                        Tekrar Oyna
                    </button>
                ) : (
                    <div className="badge badge-purple btn-full text-center py-md" style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
                        <LoaderIcon size={16} />
                        Hostun tekrar başlatması bekleniyor...
                    </div>
                )}
            </div>
        </div>
    );
}
