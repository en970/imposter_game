'use client';

import { useEffect, useState } from 'react';
import { Eye, EyeOff, Check, User, Bot } from 'lucide-react';
import { useGameStore } from '@/lib/gameStore';

export default function CardReveal() {
    const {
        players,
        currentPlayerIndex,
        secretWord,
        category,
        showingCard,
        currentUser,
        showCard,
        hideCard,
        confirmCard
    } = useGameStore();

    const [animating, setAnimating] = useState(false);

    const currentPlayer = players[currentPlayerIndex];
    const isCurrentUserTurn = currentPlayer?.name === currentUser;

    // Auto-handle bot card reveals
    useEffect(() => {
        if (currentPlayer?.isBot && !currentPlayer.hasSeenCard) {
            const timer = setTimeout(() => {
                confirmCard();
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [currentPlayerIndex, currentPlayer, confirmCard]);

    const handleShowCard = () => {
        setAnimating(true);
        setTimeout(() => {
            showCard();
            setAnimating(false);
        }, 300);
    };

    const handleConfirm = () => {
        hideCard();
        setTimeout(() => {
            confirmCard();
        }, 200);
    };

    const progress = players.filter(p => p.hasSeenCard).length / players.length * 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] p-4 flex flex-col">
            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Kartlar Dağıtılıyor</h2>
                <p className="text-gray-400">Her oyuncu sırayla kartını görsün</p>

                {/* Progress bar */}
                <div className="mt-4 w-full max-w-md mx-auto">
                    <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                        {players.filter(p => p.hasSeenCard).length} / {players.length} oyuncu gördü
                    </p>
                </div>
            </div>

            {/* Player Cards Grid */}
            <div className="flex-1 max-w-lg mx-auto w-full">
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {players.map((player, index) => (
                        <div
                            key={player.id}
                            className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${index === currentPlayerIndex
                                    ? 'border-purple-500 bg-purple-500/20 ring-2 ring-purple-500/50 scale-105'
                                    : player.hasSeenCard
                                        ? 'border-green-500/50 bg-green-500/10'
                                        : 'border-gray-700 bg-[#1a1a2e]/50'
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${player.isBot ? 'bg-orange-500' : 'bg-purple-500'
                                    }`}>
                                    {player.isBot ? <Bot size={16} /> : <User size={16} />}
                                </div>
                                <span className={`font-medium truncate ${index === currentPlayerIndex ? 'text-white' : 'text-gray-300'
                                    }`}>
                                    {player.name}
                                </span>
                            </div>

                            {player.hasSeenCard && (
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <Check size={14} className="text-white" />
                                </div>
                            )}

                            {index === currentPlayerIndex && !player.hasSeenCard && (
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
                                    <Eye size={14} className="text-white" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Current Player Card */}
                {currentPlayer && !currentPlayer.hasSeenCard && (
                    <div className="mt-auto">
                        {currentPlayer.isBot ? (
                            <div className="bg-[#1a1a2e] rounded-2xl p-6 border border-orange-500/30 text-center">
                                <Bot size={48} className="mx-auto text-orange-400 mb-3 animate-pulse" />
                                <p className="text-gray-400">{currentPlayer.name} kartını görüyor...</p>
                            </div>
                        ) : isCurrentUserTurn ? (
                            <div className={`relative transition-all duration-300 ${animating ? 'scale-95 opacity-50' : ''}`}>
                                {!showingCard ? (
                                    <button
                                        onClick={handleShowCard}
                                        className="w-full bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded-2xl p-8 border-2 border-purple-500/50 hover:border-purple-500 transition-all group"
                                    >
                                        <div className="text-center">
                                            <div className="w-20 h-20 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <EyeOff size={40} className="text-purple-400" />
                                            </div>
                                            <p className="text-xl font-bold text-white mb-2">{currentPlayer.name}</p>
                                            <p className="text-purple-400">Kartını görmek için dokun</p>
                                        </div>
                                    </button>
                                ) : (
                                    <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded-2xl overflow-hidden border-2 border-purple-500">
                                        <div className={`p-8 text-center ${currentPlayer.role === 'imposter'
                                                ? 'bg-gradient-to-b from-red-500/20 to-transparent'
                                                : 'bg-gradient-to-b from-green-500/20 to-transparent'
                                            }`}>
                                            {currentPlayer.role === 'imposter' ? (
                                                <>
                                                    <div className="text-6xl mb-4">🕵️</div>
                                                    <h3 className="text-2xl font-bold text-red-400 mb-3">
                                                        SEN IMPOSTER&apos;SIN!
                                                    </h3>
                                                    <p className="text-gray-400 text-lg">
                                                        Gizli kelimeyi bilmiyorsun.<br />
                                                        <span className="text-orange-400 font-medium">Çaktırmamaya çalış!</span>
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="text-6xl mb-4">✅</div>
                                                    <p className="text-sm text-gray-400 mb-1">Kategori: {category}</p>
                                                    <h3 className="text-3xl font-bold text-green-400 mb-3">
                                                        {secretWord}
                                                    </h3>
                                                    <p className="text-gray-400">
                                                        Bu gizli kelime. Imposter&apos;a çaktırma!
                                                    </p>
                                                </>
                                            )}
                                        </div>

                                        <button
                                            onClick={handleConfirm}
                                            className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Check size={22} />
                                            Anladım, Kapat
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-[#1a1a2e] rounded-2xl p-6 border border-purple-500/30 text-center">
                                <User size={48} className="mx-auto text-purple-400 mb-3" />
                                <p className="text-xl font-bold text-white mb-2">{currentPlayer.name}</p>
                                <p className="text-gray-400">Cihazı bu oyuncuya verin</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
