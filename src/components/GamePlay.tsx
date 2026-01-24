'use client';

import { useEffect, useState } from 'react';
import { Timer, User, Bot, SkipForward, Vote, AlertCircle, MessageCircle } from 'lucide-react';
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

    const timerColor = timer > 60 ? 'text-emerald-400' : timer > 20 ? 'text-orange-400' : 'text-red-500';
    const progressPercent = (timer / 300) * 100; // Assuming max 300

    return (
        <div className="min-h-screen flex flex-col p-6 max-w-lg mx-auto pb-safe animate-fade-in text-white">
            {/* Timer Section */}
            <div className="relative flex flex-col items-center justify-center py-10">
                <div className={`text-6xl font-black font-mono tracking-tighter ${timerColor} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                    {formatTime(timer)}
                </div>
                <div className="flex items-center gap-2 mt-4 text-slate-500">
                    <Timer size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">KALAN SÜRE</span>
                </div>

                {timer <= 20 && (
                    <div className="absolute top-4 flex items-center gap-2 text-red-500 bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/20 animate-pulse">
                        <AlertCircle size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Süre Bitmek Üzere!</span>
                    </div>
                )}
            </div>

            {/* Category Card */}
            <div className="glass-panel p-4 rounded-3xl mb-10 flex items-center justify-center gap-4 border-l-4 border-purple-500">
                <MessageCircle size={24} className="text-purple-500" />
                <div className="text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">KATEGORİ</p>
                    <p className="text-xl font-bold text-white tracking-tight leading-none mt-1 uppercase">{category}</p>
                </div>
            </div>

            {/* Main Focus: Current Speaker */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                <div className="relative">
                    <div className="absolute inset-0 bg-purple-500 opacity-20 blur-3xl rounded-full" />
                    <div className={`relative w-40 h-40 rounded-[3rem] flex items-center justify-center text-5xl font-black border-2 border-white/10 shadow-2xl ${currentPlayer?.isBot ? 'bg-orange-600/20 text-orange-500 border-orange-500/30' : 'bg-purple-600/20 text-purple-500 border-purple-500/30'
                        }`}>
                        {currentPlayer?.isBot ? <Bot size={80} /> : currentPlayer?.name[0].toUpperCase()}
                    </div>

                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center whitespace-nowrap">
                        <div className="bg-white text-black text-[10px] font-black px-4 py-1.5 rounded-full shadow-xl uppercase tracking-widest">SIRA SENDE</div>
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-3xl font-black text-white mb-2 tracking-tighter">{currentPlayer?.name}</h3>
                    <p className="text-slate-400 font-medium px-10 leading-snug">
                        Kelime hakkında kimseyi <span className="text-purple-400">şüphelendirmeden</span> gizli bir ipucu ver.
                    </p>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="space-y-3 mt-10">
                <div className="flex items-center gap-3 overflow-x-auto py-4 custom-scrollbar">
                    {players.map((p, idx) => (
                        <div
                            key={p.id}
                            className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${idx === currentPlayerIndex
                                    ? 'bg-purple-500 text-white ring-4 ring-purple-500/20 scale-110'
                                    : 'bg-surface-accent text-slate-600 grayscale opacity-50'
                                }`}
                        >
                            {p.isBot ? <Bot size={18} /> : <span className="text-xs font-black">{p.name[0]}</span>}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={nextPlayerTurn}
                        className="h-16 glass-panel rounded-3xl font-black text-sm text-slate-300 flex items-center justify-center gap-3 hover:bg-white/5 active:scale-95 transition-all uppercase tracking-widest"
                    >
                        <SkipForward size={20} />
                        SONRAKİ
                    </button>

                    <button
                        onClick={goToVoting}
                        className="h-16 btn-primary rounded-3xl font-black text-sm text-white flex items-center justify-center gap-3 hover:shadow-orange-500/30 active:scale-95 transition-all uppercase tracking-widest"
                        style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', boxShadow: '0 4px 15px rgba(249, 115, 22, 0.4)' }}
                    >
                        <Vote size={20} />
                        OYLAMA
                    </button>
                </div>
            </div>
        </div>
    );
}
