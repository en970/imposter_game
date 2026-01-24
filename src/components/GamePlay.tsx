'use client';

import { useEffect } from 'react';
import { Timer, SkipForward, Vote, AlertCircle, MessageCircle, User } from 'lucide-react';
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

    useEffect(() => {
        const interval = setInterval(() => {
            decrementTimer();
        }, 1000);
        return () => clearInterval(interval);
    }, [decrementTimer]);

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

    const timerColor = timer > 60 ? 'text-white' : timer > 20 ? 'text-orange-500' : 'text-red-500';

    return (
        <div className="min-h-screen flex flex-col container-responsive pb-safe animate-fade-in relative">
            {/* Timer Section */}
            <div className="relative flex flex-col items-center justify-center pt-8 pb-6">
                <div className={`text-7xl font-black font-mono tracking-tighter ${timerColor} drop-shadow-lg transition-colors duration-500`}>
                    {formatTime(timer)}
                </div>

                {timer <= 20 && (
                    <div className="flex items-center gap-2 text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 animate-pulse mt-2">
                        <AlertCircle size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Süre Bitiyor!</span>
                    </div>
                )}
            </div>

            {/* Category Info */}
            <div className="bg-[#12121a] p-4 rounded-xl mb-8 flex items-center justify-center gap-4 border border-white/5 shadow-md">
                <MessageCircle size={20} className="text-purple-500" />
                <div className="text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">KATEGORİ</p>
                    <p className="text-lg font-bold text-white tracking-tight leading-none mt-1 uppercase">{category}</p>
                </div>
            </div>

            {/* Current Player Focus */}
            <div className="flex-1 flex flex-col items-center justify-start space-y-6">
                <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
                    <div className="relative w-36 h-36 rounded-3xl flex items-center justify-center text-4xl font-black border border-white/10 shadow-2xl bg-[#12121a] text-purple-500">
                        {currentPlayer?.name[0].toUpperCase()}
                    </div>

                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                        <div className="bg-white text-black text-[10px] font-black px-3 py-1 rounded-full shadow-xl uppercase tracking-widest whitespace-nowrap">SIRA SENDE</div>
                    </div>
                </div>

                <div className="text-center px-4">
                    <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{currentPlayer?.name}</h3>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed">
                        Kelime hakkında kimseyi <span className="text-purple-400 font-bold">şüphelendirmeden</span> ipucu ver.
                    </p>
                </div>
            </div>

            {/* Navigation & Controls */}
            <div className="mt-8 space-y-4">
                {/* Player Queue */}
                <div className="flex items-center justify-center gap-2 py-2">
                    {players.map((p, idx) => (
                        <div
                            key={p.id}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentPlayerIndex
                                    ? 'bg-purple-500 w-8 scale-110'
                                    : 'bg-white/10'
                                }`}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={nextPlayerTurn}
                        className="h-16 bg-[#1a1a28] rounded-xl font-bold text-sm text-slate-300 flex items-center justify-center gap-2 hover:bg-[#202030] active:scale-95 transition-all uppercase tracking-wider border border-white/5"
                    >
                        <SkipForward size={18} />
                        DEVAM ET
                    </button>

                    <button
                        onClick={goToVoting}
                        className="h-16 btn-primary rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg active:scale-95 transition-all uppercase tracking-wider bg-gradient-to-r from-orange-500 to-orange-600"
                    >
                        <Vote size={18} />
                        OYLAMA
                    </button>
                </div>
            </div>
        </div>
    );
}
