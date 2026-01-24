'use client';

import { useEffect, useState } from 'react';
import { Eye, EyeOff, Check, User, Bot, LayoutGrid } from 'lucide-react';
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

    useEffect(() => {
        if (currentPlayer?.isBot && !currentPlayer.hasSeenCard) {
            const timer = setTimeout(() => {
                confirmCard();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [currentPlayerIndex, currentPlayer, confirmCard]);

    const handleShowCard = () => {
        setAnimating(true);
        setTimeout(() => {
            showCard();
            setAnimating(false);
        }, 200);
    };

    const handleConfirm = () => {
        hideCard();
        setTimeout(() => {
            confirmCard();
        }, 200);
    };

    const progress = (players.filter(p => p.hasSeenCard).length / players.length) * 100;

    return (
        <div className="min-h-screen flex flex-col p-6 max-w-lg mx-auto pb-safe animate-fade-in text-white">
            {/* Header */}
            <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <LayoutGrid size={20} className="text-purple-500" />
                    <h2 className="text-xl font-black uppercase tracking-[0.2em]">KART SEÇİMİ</h2>
                </div>

                {/* Progress Bar Container */}
                <div className="mt-6 glass-panel p-1 rounded-full w-full">
                    <div className="h-2 rounded-full overflow-hidden bg-black/20">
                        <div
                            className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-orange-500 transition-all duration-700 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
                <p className="text-[10px] font-black text-slate-500 mt-2 uppercase tracking-widest">
                    {players.filter(p => p.hasSeenCard).length} / {players.length} OYUNCU KONTROL ETTİ
                </p>
            </div>

            {/* Grid of Players */}
            <div className="flex-1 overflow-y-auto mb-8 pr-1 custom-scrollbar">
                <div className="grid grid-cols-2 gap-3">
                    {players.map((player, index) => (
                        <div
                            key={player.id}
                            className={`relative p-5 rounded-3xl border-2 transition-all duration-500 ${index === currentPlayerIndex
                                    ? 'border-purple-500 bg-purple-500/10 shadow-[0_0_20px_rgba(139,92,246,0.2)] scale-[1.02]'
                                    : player.hasSeenCard
                                        ? 'border-emerald-500/30 bg-emerald-500/5 opacity-60'
                                        : 'border-white/5 bg-white/[0.02]'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-black ${player.isBot ? 'bg-orange-500/20 text-orange-500' : 'bg-purple-500/20 text-purple-500'
                                    }`}>
                                    {player.isBot ? <Bot size={20} /> : <User size={20} />}
                                </div>
                                <span className="font-bold text-sm truncate">{player.name}</span>
                            </div>

                            {player.hasSeenCard && (
                                <div className="absolute top-4 right-4 text-emerald-500">
                                    <Check size={18} strokeWidth={3} />
                                </div>
                            )}

                            {index === currentPlayerIndex && !player.hasSeenCard && (
                                <div className="absolute top-4 right-4 text-purple-500 animate-pulse">
                                    <Eye size={18} strokeWidth={3} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Zone */}
            {currentPlayer && !currentPlayer.hasSeenCard && (
                <div className="mt-auto animate-fade-in">
                    {currentPlayer.isBot ? (
                        <div className="glass-card rounded-[2.5rem] p-10 text-center border-orange-500/20">
                            <div className="w-20 h-20 bg-orange-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                <Bot size={40} className="text-orange-500 animate-bounce" />
                            </div>
                            <h3 className="text-xl font-black text-white mb-2">{currentPlayer.name}</h3>
                            <p className="text-slate-400 font-medium">Sisteme giriş yapılıyor...</p>
                        </div>
                    ) : isCurrentUserTurn ? (
                        <div className={`transition-all duration-300 ${animating ? 'scale-95 blur-sm opacity-50' : 'scale-100'}`}>
                            {!showingCard ? (
                                <button
                                    onClick={handleShowCard}
                                    className="w-full h-[280px] glass-card rounded-[3rem] p-8 border-2 border-dashed border-purple-500/30 hover:border-purple-500 transition-all flex flex-col items-center justify-center group"
                                >
                                    <div className="w-24 h-24 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all shadow-inner">
                                        <EyeOff size={40} className="text-purple-400" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-2">{currentPlayer.name}</h3>
                                    <p className="text-purple-400/60 font-black tracking-widest text-xs uppercase underline underline-offset-8">GÖRÜNTÜLEMEK İÇİN DOKUN</p>
                                </button>
                            ) : (
                                <div className="glass-card rounded-[3rem] overflow-hidden border-2 border-purple-500/40 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
                                    <div className={`p-10 text-center ${currentPlayer.role === 'imposter'
                                            ? 'bg-gradient-to-b from-red-500/10 to-transparent'
                                            : 'bg-gradient-to-b from-emerald-500/10 to-transparent'
                                        }`}>
                                        {currentPlayer.role === 'imposter' ? (
                                            <>
                                                <div className="text-7xl mb-6 drop-shadow-lg">🤫</div>
                                                <h3 className="text-3xl font-black text-red-500 mb-4 tracking-tighter">CASUSSUN!</h3>
                                                <p className="text-slate-300 font-medium leading-relaxed">
                                                    Gizli kelimeyi bilmiyorsun.<br />
                                                    <span className="text-orange-500 font-black text-lg">ASLA ÇAKTIRMA!</span>
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <div className="text-7xl mb-6 drop-shadow-lg">🎯</div>
                                                <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-2 font-mono">{category}</p>
                                                <h3 className="text-5xl font-black text-emerald-400 mb-6 tracking-tighter uppercase drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                                    {secretWord}
                                                </h3>
                                                <p className="text-slate-400 font-medium">
                                                    Kelimeyi arkadaşlarına tarif et ama <span className="text-red-400 font-bold">Casus</span>&apos;a dikkat et!
                                                </p>
                                            </>
                                        )}
                                    </div>

                                    <button
                                        onClick={handleConfirm}
                                        className="w-full h-20 bg-white/5 hover:bg-white/10 text-white font-black text-lg transition-all border-t border-white/5 active:scale-95 flex items-center justify-center gap-3"
                                    >
                                        <Check size={24} className="text-emerald-400" />
                                        ANLADIM, KAPAT
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="glass-panel rounded-[2.5rem] p-10 text-center border-purple-500/10">
                            <div className="w-20 h-20 bg-purple-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                <User size={40} className="text-purple-500" />
                            </div>
                            <h3 className="text-xl font-black text-white mb-2">{currentPlayer.name}</h3>
                            <p className="text-slate-500 font-medium">Cihazı bu oyuncuya verin.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
