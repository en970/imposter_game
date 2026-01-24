'use client';

import { useState } from 'react';
import { Eye, EyeOff, Check, User, LayoutGrid } from 'lucide-react';
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
        <div className="min-h-screen flex flex-col container-responsive pb-safe animate-fade-in text-white relative">
            {/* Header */}
            <div className="text-center mb-8 pt-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <LayoutGrid size={20} className="text-purple-500" />
                    <h2 className="text-xl font-black uppercase tracking-widest text-slate-300">KART SEÇİMİ</h2>
                </div>

                {/* Progress Bar Container */}
                <div className="mt-4 bg-[#12121a] p-1 rounded-full w-full border border-white/5">
                    <div className="h-2 rounded-full overflow-hidden bg-black/20">
                        <div
                            className="h-full bg-purple-600 transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
                <p className="text-[10px] font-bold text-slate-500 mt-2 uppercase tracking-widest">
                    {players.filter(p => p.hasSeenCard).length} / {players.length} KONTROL EDİLDİ
                </p>
            </div>

            {/* Grid of Players */}
            <div className="flex-1 overflow-y-auto mb-24 custom-scrollbar">
                <div className="grid grid-cols-2 gap-3 pb-4">
                    {players.map((player, index) => (
                        <div
                            key={player.id}
                            className={`relative p-4 rounded-xl border transition-all duration-300 ${index === currentPlayerIndex
                                    ? 'border-purple-500 bg-[#1a1a28] shadow-md scale-[1.02] z-10'
                                    : player.hasSeenCard
                                        ? 'border-emerald-500/20 bg-emerald-500/5 opacity-50'
                                        : 'border-white/5 bg-[#12121a]'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-black bg-[#1a1a28] text-purple-500 border border-white/5">
                                    <User size={20} />
                                </div>
                                <span className={`font-bold text-sm truncate ${index === currentPlayerIndex ? 'text-white' : 'text-slate-400'}`}>
                                    {player.name}
                                </span>
                            </div>

                            {player.hasSeenCard && (
                                <div className="absolute top-3 right-3 text-emerald-500">
                                    <Check size={16} strokeWidth={3} />
                                </div>
                            )}

                            {index === currentPlayerIndex && !player.hasSeenCard && (
                                <div className="absolute top-3 right-3 text-purple-500 animate-pulse">
                                    <Eye size={16} strokeWidth={3} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Overlay */}
            {currentPlayer && !currentPlayer.hasSeenCard && (
                <div className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0f]/95 backdrop-blur-md p-6 animate-fade-in">
                    <div className="flex-1 flex flex-col items-center justify-center">
                        {isCurrentUserTurn ? (
                            <div className={`w-full max-w-sm transition-all duration-300 ${animating ? 'scale-95 opacity-50' : 'scale-100'}`}>
                                {!showingCard ? (
                                    <button
                                        onClick={handleShowCard}
                                        className="w-full aspect-square bg-[#12121a] rounded-[2rem] border border-white/10 hover:border-purple-500/50 transition-all flex flex-col items-center justify-center group shadow-2xl"
                                    >
                                        <div className="w-20 h-20 bg-[#1a1a28] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                                            <EyeOff size={32} className="text-purple-500" />
                                        </div>
                                        <h3 className="text-3xl font-black text-white mb-2">{currentPlayer.name}</h3>
                                        <p className="text-slate-500 font-bold tracking-widest text-xs uppercase">GÖRMEK İÇİN DOKUN</p>
                                    </button>
                                ) : (
                                    <div className="w-full bg-[#12121a] rounded-[2rem] overflow-hidden border border-purple-500/20 shadow-2xl">
                                        <div className="p-10 text-center min-h-[320px] flex flex-col items-center justify-center">
                                            {currentPlayer.role === 'imposter' ? (
                                                <>
                                                    <div className="text-6xl mb-6 drop-shadow-lg">🤫</div>
                                                    <h3 className="text-4xl font-black text-red-500 mb-4 tracking-tighter">CASUSSUN!</h3>
                                                    <p className="text-slate-300 font-medium text-lg leading-relaxed">
                                                        Gizli kelimeyi bilmiyorsun.<br />
                                                        <span className="text-white font-black">BELLİ ETME!</span>
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4 border border-white/10 px-3 py-1 rounded-full">{category}</p>
                                                    <h3 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase break-words w-full">
                                                        {secretWord}
                                                    </h3>
                                                    <p className="text-slate-400 font-medium">
                                                        Kelimeyi tarif et ama <span className="text-red-400 font-bold">Casus</span>'a dikkat et!
                                                    </p>
                                                </>
                                            )}
                                        </div>

                                        <button
                                            onClick={handleConfirm}
                                            className="w-full h-20 bg-purple-600 hover:bg-purple-700 text-white font-black text-xl transition-all active:scale-95 flex items-center justify-center gap-3"
                                        >
                                            <Check size={24} />
                                            ANLADIM
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-[#12121a] rounded-[2rem] p-10 text-center border border-white/10 w-full max-w-sm">
                                <div className="w-20 h-20 bg-[#1a1a28] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                                    <User size={40} className="text-purple-500" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-2">{currentPlayer.name}</h3>
                                <p className="text-slate-400 font-medium">Cihazı bu oyuncuya verin.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
