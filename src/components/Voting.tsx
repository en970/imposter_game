'use client';

import { useState, useEffect } from 'react';
import { Vote, User, Bot, Check, Send } from 'lucide-react';
import { useGameStore } from '@/lib/gameStore';

export default function Voting() {
    const { players, votes, currentUser, castVote } = useGameStore();
    const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
    const [hasVoted, setHasVoted] = useState(false);

    // Find current user's player
    const currentUserPlayer = players.find(p => p.name === currentUser);
    const currentUserId = currentUserPlayer?.id;

    // Auto-vote for bots
    useEffect(() => {
        const botVoteInterval = setInterval(() => {
            const botsToVote = players.filter(p => p.isBot && !votes[p.id]);
            if (botsToVote.length > 0) {
                const bot = botsToVote[0];
                // Bots vote randomly (but not for themselves)
                const otherPlayers = players.filter(p => p.id !== bot.id);
                const randomTarget = otherPlayers[Math.floor(Math.random() * otherPlayers.length)];
                castVote(bot.id, randomTarget.id);
            }
        }, 1000);

        return () => clearInterval(botVoteInterval);
    }, [players, votes, castVote]);

    // Check if current user already voted
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

    // Auto-proceed to results when all have voted
    const gameStore = useGameStore.getState();
    useEffect(() => {
        if (allVoted) {
            const timer = setTimeout(() => {
                useGameStore.setState({ gameState: 'result' });
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [allVoted]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] p-4 flex flex-col">
            {/* Header */}
            <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 text-orange-400 mb-2">
                    <Vote size={28} />
                    <h2 className="text-2xl font-bold">Oylama Zamanı</h2>
                </div>
                <p className="text-gray-400">Imposter&apos;ın kim olduğunu seçin</p>

                {/* Progress */}
                <div className="mt-4 w-full max-w-md mx-auto">
                    <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
                            style={{ width: `${(votedCount / players.length) * 100}%` }}
                        />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                        {votedCount} / {players.length} oy kullanıldı
                    </p>
                </div>
            </div>

            {/* Vote Options */}
            <div className="flex-1 mb-6">
                {hasVoted ? (
                    <div className="text-center py-8">
                        <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                            <Check size={40} className="text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Oyun Kullanıldı!</h3>
                        <p className="text-gray-400">Diğer oyuncular bekleniyor...</p>

                        {/* Show who has voted */}
                        <div className="mt-6 grid grid-cols-2 gap-2 max-w-md mx-auto">
                            {players.map((player) => (
                                <div
                                    key={player.id}
                                    className={`flex items-center gap-2 p-2 rounded-lg ${votes[player.id]
                                            ? 'bg-green-500/20 border border-green-500/30'
                                            : 'bg-[#1a1a2e]/50 border border-gray-800'
                                        }`}
                                >
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${player.isBot ? 'bg-orange-500' : 'bg-purple-500'
                                        }`}>
                                        {player.isBot ? <Bot size={12} /> : <User size={12} />}
                                    </div>
                                    <span className="text-sm text-gray-300 truncate">{player.name}</span>
                                    {votes[player.id] && (
                                        <Check size={14} className="ml-auto text-green-400" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {players.filter(p => p.id !== currentUserId).map((player) => (
                            <button
                                key={player.id}
                                onClick={() => setSelectedPlayer(player.id)}
                                className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${selectedPlayer === player.id
                                        ? 'border-orange-500 bg-orange-500/20'
                                        : 'border-gray-700 bg-[#1a1a2e]/50 hover:border-purple-500/50'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${player.isBot ? 'bg-orange-500' : 'bg-purple-500'
                                    }`}>
                                    {player.isBot ? <Bot size={24} /> : player.name[0].toUpperCase()}
                                </div>
                                <span className="text-lg font-medium text-white">{player.name}</span>
                                {selectedPlayer === player.id && (
                                    <div className="ml-auto w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                                        <Check size={16} className="text-white" />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Submit Vote */}
            {!hasVoted && (
                <button
                    onClick={handleVote}
                    disabled={!selectedPlayer}
                    className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed rounded-xl font-bold text-white text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25"
                >
                    <Send size={22} />
                    Oyu Gönder
                </button>
            )}
        </div>
    );
}
