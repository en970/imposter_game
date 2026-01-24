'use client';

import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';
import { TrophyIcon, SkullIcon, ChartIcon, RefreshIcon, LoaderIcon } from './Icons';

export default function Results() {
    const { players, secretWord, category, language, calculateResults, resetToLobby, hostId } = useGameStore();
    const t = translations[language];

    const { imposters, winners, voteResults } = calculateResults();

    const sortedPlayers = [...players].sort((a, b) =>
        (voteResults[b.id] || 0) - (voteResults[a.id] || 0)
    );

    const maxVotes = Math.max(...Object.values(voteResults), 0);

    return (
        <div className="center-container">
            <div className="home-card fade-in" style={{ background: 'transparent' }}>
                {/* Winner Banner */}
                <div
                    className="card text-center mb-lg"
                    style={{
                        borderColor: winners === 'civilians' ? 'var(--accent-green)' : 'var(--accent-red)',
                        borderWidth: 2,
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
                        fontSize: '1.75rem',
                        fontWeight: 800,
                        color: winners === 'civilians' ? 'var(--accent-green)' : 'var(--accent-red)',
                        textTransform: 'uppercase'
                    }}>
                        {winners === 'civilians' ? t.civiliansWin : t.imposterWins}
                    </h2>
                    <p className="text-secondary mt-sm" style={{ fontSize: '0.875rem' }}>
                        {winners === 'civilians' ? t.imposterCaught : t.imposterEscaped}
                    </p>
                </div>

                {/* Imposter Reveal */}
                <div className="mb-md">
                    <h4 className="section-title mb-sm">
                        <SkullIcon size={14} color="var(--accent-red)" />
                        {language === 'tr' ? 'CASUS' : 'IMPOSTER'}
                    </h4>
                    {imposters.map((imposter) => (
                        <div
                            key={imposter.id}
                            className="player-item"
                            style={{ borderLeft: '4px solid var(--accent-red)', background: 'var(--bg-tertiary)' }}
                        >
                            <div className="player-avatar" style={{ width: 40, height: 40, fontSize: '1rem', color: 'var(--accent-red)', fontWeight: 800 }}>
                                {imposter.name[0]}
                            </div>
                            <div className="player-info">
                                <div className="player-name" style={{ fontSize: '1rem', fontWeight: 700 }}>{imposter.name}</div>
                            </div>
                            <span className="badge badge-red">{voteResults[imposter.id] || 0} {t.votes.toUpperCase()}</span>
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
                        border: '1px solid var(--border-subtle)',
                        background: 'var(--bg-secondary)'
                    }}
                >
                    <div style={{ borderLeft: '3px solid var(--border-accent)', paddingLeft: 'var(--spacing-sm)' }}>
                        <span className="text-xs text-muted" style={{ fontWeight: 700 }}>{language === 'tr' ? 'KELİME' : 'WORD'}</span>
                        <p style={{ fontSize: '1.125rem', fontWeight: 800, marginTop: '2px', color: 'var(--border-accent)' }}>
                            {secretWord.toUpperCase()}
                        </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <span className="text-xs text-muted" style={{ fontWeight: 700 }}>{t.category.toUpperCase()}</span>
                        <p style={{ fontSize: '0.875rem', fontWeight: 800, color: 'white', marginTop: '2px' }}>
                            {(t.categories[category as keyof typeof t.categories] || category).toUpperCase()}
                        </p>
                    </div>
                </div>

                {/* Vote Distribution */}
                <div className="mb-lg" style={{ maxHeight: '160px', overflowY: 'auto' }}>
                    <h4 className="section-title mb-sm">
                        <ChartIcon size={14} color="var(--border-accent)" />
                        {t.voteDistribution}
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
                                        background: isImposter ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)',
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
                    <button onClick={resetToLobby} className="btn btn-primary btn-lg btn-full" style={{ boxShadow: 'var(--shadow-md)' }}>
                        <RefreshIcon size={20} />
                        {t.playAgain}
                    </button>
                ) : (
                    <div className="badge btn-full text-center py-md" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
                        <LoaderIcon size={16} className="spin mr-sm" />
                        {t.waitingForHostRestart}
                    </div>
                )}
            </div>
        </div>
    );
}
