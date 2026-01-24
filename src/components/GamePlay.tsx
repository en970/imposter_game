'use client';

import { useEffect } from 'react';
import { Timer, User, Bot, SkipForward, Vote, AlertCircle } from 'lucide-react';
import { useGameStore } from '@/lib/gameStore';

export default function GamePlay() {
    const {
        players,
        currentPlayerIndex,
        timer,
        category,
        nextPlayerTurn,
        goToVoting,
        decrementTimer
    } = useGameStore();

    const currentPlayer = players[currentPlayerIndex];

    // Timer countdown
    useEffect(() => {
        const interval = setInterval(() => {
            decrementTimer();
        }, 1000);
        return () => clearInterval(interval);
    }, [decrementTimer]);

    // Auto-advance if timer reaches 0
    useEffect(() => {
        if (timer === 0) {
            goToVoting();
        }
    }, [timer, goToVoting]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const timerColor = timer > 60 ? 'text-green-400' : timer > 30 ? 'text-yellow-400' : 'text-red-400';
    const timerBg = timer > 60 ? 'bg-green-500/20' : timer > 30 ? 'bg-yellow-500/20' : 'bg-red-500/20';

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] p-4 flex flex-col">
            {/* Timer */}
            <div className="text-center mb-6">
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl ${timerBg}`}>
                    <Timer size={28} className={timerColor} />
                    <span className={`text-4xl font-mono font-bold ${timerColor}`}>
                        {formatTime(timer)}
                    </span>
                </div>

                {timer <= 30 && (
                    <div className="mt-3 flex items-center justify-center gap-2 text-red-400">
                        <AlertCircle size={16} className="animate-pulse" />
                        <span className="text-sm">Süre azalıyor!</span>
                    </div>
                )}
            </div>

            {/* Category Hint */}
            <div className="text-center mb-6">
                <p className="text-gray-500 text-sm">Kategori</p>
                <p className="text-purple-400 font-medium text-lg">{category}</p>
            </div>

            {/* Current Turn */}
            <div className="bg-gradient-to-br from-purple-500/20 to-orange-500/10 rounded-2xl p-6 border border-purple-500/30 mb-6">
                <p className="text-gray-400 text-center mb-3">Konuşma Sırası</p>
                <div className="flex items-center justify-center gap-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${currentPlayer?.isBot ? 'bg-orange-500' : 'bg-purple-500'
                        }`}>
                        {currentPlayer?.isBot ? <Bot size={32} /> : currentPlayer?.name[0].toUpperCase()}
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">{currentPlayer?.name}</p>
                        <p className="text-gray-400">Gizli kelimeyle ilgili ipucu versin</p>
                    </div>
                </div>
            </div>

            {/* All Players */}
            <div className="flex-1 mb-6">
                <p className="text-gray-500 text-sm mb-3">Tüm Oyuncular</p>
                <div className="grid grid-cols-2 gap-2">
                    {players.map((player, index) => (
                        <div
                            key={player.id}
                            className={`flex items-center gap-2 p-3 rounded-xl transition-all ${index === currentPlayerIndex
                                    ? 'bg-purple-500/30 border border-purple-500'
                                    : 'bg-[#1a1a2e]/50 border border-gray-800'
                                }`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${player.isBot ? 'bg-orange-500' : 'bg-purple-500'
                                }`}>
                                {player.isBot ? <Bot size={16} /> : <User size={16} />}
                            </div>
                            <span className={`font-medium truncate ${index === currentPlayerIndex ? 'text-white' : 'text-gray-400'
                                }`}>
                                {player.name}
                            </span>
                            {index === currentPlayerIndex && (
                                <span className="ml-auto text-xs text-purple-300 animate-pulse">●</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
                <button
                    onClick={nextPlayerTurn}
                    className="w-full py-4 bg-[#1a1a2e] border border-purple-500/30 text-purple-400 rounded-xl font-medium hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2"
                >
                    <SkipForward size={20} />
                    Sonraki Oyuncu
                </button>

                <button
                    onClick={goToVoting}
                    className="w-full py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 rounded-xl font-bold text-white text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25"
                >
                    <Vote size={22} />
                    Oylamaya Geç
                </button>
            </div>
        </div>
    );
}
