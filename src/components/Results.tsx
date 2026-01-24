'use client';

import { Trophy, Skull, User, Bot, RotateCcw, Home } from 'lucide-react';
import { useGameStore } from '@/lib/gameStore';

export default function Results() {
    const { players, secretWord, category, calculateResults, resetGame } = useGameStore();

    const { imposters, winners, voteResults } = calculateResults();

    // Sort players by vote count
    const sortedPlayers = [...players].sort((a, b) =>
        (voteResults[b.id] || 0) - (voteResults[a.id] || 0)
    );

    const maxVotes = Math.max(...Object.values(voteResults));

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] p-4 flex flex-col">
            {/* Winner Banner */}
            <div className={`text-center py-8 px-4 rounded-2xl mb-6 ${winners === 'civilians'
                    ? 'bg-gradient-to-br from-green-500/30 to-green-600/10 border border-green-500/30'
                    : 'bg-gradient-to-br from-red-500/30 to-red-600/10 border border-red-500/30'
                }`}>
                <div className="text-6xl mb-4">
                    {winners === 'civilians' ? '🎉' : '😈'}
                </div>
                <h2 className={`text-3xl font-bold mb-2 ${winners === 'civilians' ? 'text-green-400' : 'text-red-400'
                    }`}>
                    {winners === 'civilians' ? 'SİVİLLER KAZANDI!' : 'IMPOSTER KAZANDI!'}
                </h2>
                <p className="text-gray-400">
                    {winners === 'civilians'
                        ? 'Imposter yakalandı!'
                        : 'Imposter kendini gizlemeyi başardı!'}
                </p>
            </div>

            {/* Secret Word Reveal */}
            <div className="bg-[#1a1a2e]/80 rounded-2xl p-6 border border-purple-500/20 mb-6 text-center">
                <p className="text-gray-400 text-sm mb-1">Gizli Kelime</p>
                <p className="text-xs text-purple-400 mb-2">{category}</p>
                <h3 className="text-3xl font-bold text-white">{secretWord}</h3>
            </div>

            {/* Imposter Reveal */}
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/10 rounded-2xl p-6 border border-red-500/30 mb-6">
                <div className="flex items-center gap-2 mb-4">
                    <Skull size={24} className="text-red-400" />
                    <h3 className="text-xl font-bold text-white">Imposter{imposters.length > 1 ? 'lar' : ''}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                    {imposters.map((imposter) => (
                        <div
                            key={imposter.id}
                            className="flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-xl border border-red-500/30"
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${imposter.isBot ? 'bg-orange-500' : 'bg-red-500'
                                }`}>
                                {imposter.isBot ? <Bot size={16} /> : <User size={16} />}
                            </div>
                            <span className="font-medium text-white">{imposter.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vote Results */}
            <div className="flex-1 mb-6">
                <div className="flex items-center gap-2 mb-4">
                    <Trophy size={20} className="text-yellow-400" />
                    <h3 className="text-lg font-bold text-white">Oy Sonuçları</h3>
                </div>
                <div className="space-y-2">
                    {sortedPlayers.map((player) => {
                        const votes = voteResults[player.id] || 0;
                        const percentage = maxVotes > 0 ? (votes / maxVotes) * 100 : 0;
                        const isImposter = player.role === 'imposter';

                        return (
                            <div key={player.id} className="bg-[#1a1a2e]/50 rounded-xl p-3">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${isImposter
                                            ? 'bg-red-500 ring-2 ring-red-400'
                                            : player.isBot
                                                ? 'bg-orange-500'
                                                : 'bg-purple-500'
                                        }`}>
                                        {player.isBot ? <Bot size={18} /> : player.name[0].toUpperCase()}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-white">{player.name}</span>
                                            {isImposter && (
                                                <span className="text-xs px-2 py-0.5 bg-red-500/30 text-red-300 rounded-full">
                                                    Imposter
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="flex-1 h-2 bg-[#0a0a0f] rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full transition-all duration-1000 ${isImposter ? 'bg-red-500' : 'bg-purple-500'
                                                        }`}
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-mono text-gray-400 w-8 text-right">
                                                {votes}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Actions */}
            <button
                onClick={resetGame}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl font-bold text-white text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
            >
                <RotateCcw size={22} />
                Tekrar Oyna
            </button>
        </div>
    );
}
