'use client';

import { useGameStore } from '@/lib/gameStore';

export default function Results() {
    const { players, secretWord, category, calculateResults, resetToLobby } = useGameStore();

    const { imposters, winners, voteResults } = calculateResults();

    const sortedPlayers = [...players].sort((a, b) =>
        (voteResults[b.id] || 0) - (voteResults[a.id] || 0)
    );

    const maxVotes = Math.max(...Object.values(voteResults), 0);

    return (
        <div className="page-container fade-in">
            {/* Winner Banner */}
            <div
                className="card text-center mb-lg"
                style={{
                    borderColor: winners === 'civilians' ? 'var(--accent-green)' : 'var(--accent-red)',
                    borderWidth: 2
                }}
            >
                <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>
                    {winners === 'civilians' ? '🏆' : '👺'}
                </div>
                <h2 style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: winners === 'civilians' ? 'var(--accent-green)' : 'var(--accent-red)'
                }}>
                    {winners === 'civilians' ? 'Siviller Kazandı!' : 'Casus Kazandı!'}
                </h2>
                <p className="text-muted mt-sm">
                    {winners === 'civilians' ? 'Casus yakalandı! 🎉' : 'Casus kendini gizlemeyi başardı.'}
                </p>
            </div>

            {/* Imposter Reveal */}
            <div className="mb-lg">
                <h4 className="section-title mb-sm">💀 Casus Kimdi?</h4>
                {imposters.map((imposter) => (
                    <div
                        key={imposter.id}
                        className="player-item"
                        style={{ borderLeft: '4px solid var(--accent-red)' }}
                    >
                        <div className="player-avatar" style={{ color: 'var(--accent-red)' }}>
                            {imposter.name[0]}
                        </div>
                        <div className="player-info">
                            <div className="player-name">{imposter.name}</div>
                            <div className="player-role" style={{ color: 'var(--accent-red)' }}>Gerçek Casus</div>
                        </div>
                        <span className="badge badge-red">{voteResults[imposter.id] || 0} Oy</span>
                    </div>
                ))}
            </div>

            {/* Word Reveal */}
            <div
                className="card-sm mb-lg"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <div>
                    <span className="text-xs text-muted">Kelime</span>
                    <p style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: 'var(--spacing-xs)' }}>
                        {secretWord}
                    </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <span className="text-xs text-muted">Kategori</span>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-purple)', marginTop: 'var(--spacing-xs)' }}>
                        {category}
                    </p>
                </div>
            </div>

            {/* Vote Distribution */}
            <div className="scroll-area">
                <h4 className="section-title mb-sm">📊 Oy Dağılımı</h4>
                {sortedPlayers.map((player) => {
                    const votz = voteResults[player.id] || 0;
                    const progress = maxVotes > 0 ? (votz / maxVotes) * 100 : 0;
                    const isImposter = player.role === 'imposter';

                    return (
                        <div
                            key={player.id}
                            className="card-sm mb-sm"
                            style={{ position: 'relative', overflow: 'hidden' }}
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
                                <div className="player-avatar" style={{ width: 32, height: 32, fontSize: '0.75rem' }}>
                                    {player.name[0]}
                                </div>
                                <span style={{
                                    fontWeight: 600,
                                    color: isImposter ? 'var(--accent-red)' : 'var(--text-primary)'
                                }}>
                                    {player.name}
                                </span>
                                <span style={{ marginLeft: 'auto', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                    {votz} Oy
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Play Again */}
            <div className="fixed-footer">
                <div className="fixed-footer-content">
                    <button onClick={resetToLobby} className="btn btn-secondary btn-lg btn-full">
                        🔄 Ana Sayfaya Dön
                    </button>
                </div>
            </div>
        </div>
    );
}
