'use client';

import { Trophy, Skull, User, Bot, RotateCcw, Home, Award, ChevronRight } from 'lucide-react';
import { useGameStore } from '@/lib/gameStore';

export default function Results() {
    const { players, secretWord, category, calculateResults, resetGame } = useGameStore();

    const { imposters, winners, voteResults } = calculateResults();

    const sortedPlayers = [...players].sort((a, b) =>
        (voteResults[b.id] || 0) - (voteResults[a.id] || 0)
    );

    const maxVotes = Math.max(...Object.values(voteResults));

    return (
        <div className="min-h-screen flex flex-col p-6 max-w-lg mx-auto pb-safe animate-fade-in text-white overflow-hidden">
            {/* Winner Celebration Card */}
            <div className={`relative overflow-hidden rounded-[3rem] p-8 mb-8 text-center border-2 transition-all duration-1000 ${winners === 'civilians'
                    ? 'bg-gradient-to-br from-emerald-600/20 to-emerald-900/40 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.15)]'
                    : 'bg-gradient-to-br from-red-600/20 to-red-900/40 border-red-500/30 shadow-[0_0_50px_rgba(239,68,68,0.15)]'
                }`}>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/20 rounded-full blur-2xl" />

                <div className="relative z-10">
                    <div className="text-8xl mb-6 scale-110 drop-shadow-2xl animate-bounce">
                        {winners === 'civilians' ? '🏆' : '👺'}
                    </div>
                    <h2 className={`text-4xl font-black mb-2 tracking-tighter ${winners === 'civilians' ? 'text-emerald-400' : 'text-red-500'
                        }`}>
                        {winners === 'civilians' ? 'SİVİLLER KAZANDI' : 'CASUS KAZANDI'}
                    </h2>
                    <p className="text-slate-300 font-medium px-4">
                        {winners === 'civilians'
                            ? 'Tebrikler! Casusu maskesi düşmeden yakalamayı başardınız.'
                            : 'Harika bir saklanış! Casus tüm grubu parmağında oynattı.'}
                    </p>
                </div>
            </div>

            {/* Secret Identity Revealed */}
            <div className="space-y-4 mb-10">
                <div className="flex items-center gap-2 mb-2 ml-2">
                    <Skull size={18} className="text-red-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">CASUS KİMDİ?</span>
                </div>

                <div className="grid gap-2">
                    {imposters.map((imposter) => (
                        <div
                            key={imposter.id}
                            className="glass-card p-5 rounded-3xl border-red-500/20 flex items-center justify-between border-l-8 border-l-red-500 animate-slide-in"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-500 border border-red-500/20 shadow-inner">
                                    {imposter.isBot ? <Bot size={28} /> : <User size={28} />}
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-white leading-none mb-1">{imposter.name}</h4>
                                    <p className="text-xs font-bold text-red-400/70 uppercase tracking-widest leading-none">GERÇEK CASUS</p>
                                </div>
                            </div>
                            <div className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center text-sm font-black text-slate-500">
                                {voteResults[imposter.id] || 0} Oy
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Game Detail Summary */}
            <div className="glass-panel rounded-3xl p-6 mb-10 flex items-center justify-between border border-white/5">
                <div className="text-left">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1 text-center">KELİME</p>
                    <p className="text-2xl font-black text-white tracking-tighter uppercase leading-none">{secretWord}</p>
                </div>
                <div className="h-10 w-[1px] bg-white/5" />
                <div className="text-right">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1 text-center">KATEGORİ</p>
                    <p className="text-lg font-bold text-purple-400 tracking-tight leading-none uppercase">{category}</p>
                </div>
            </div>

            {/* Leaderboard/Vote Breakdown */}
            <div className="flex-1 mb-8">
                <div className="flex items-center gap-2 mb-4 ml-2">
                    <Award size={18} className="text-yellow-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">OY DAĞILIMI</span>
                </div>

                <div className="space-y-2 overflow-y-auto max-h-[250px] pr-2 custom-scrollbar">
                    {sortedPlayers.map((player) => {
                        const votes = voteResults[player.id] || 0;
                        const progress = maxVotes > 0 ? (votes / maxVotes) * 100 : 0;
                        const isImposter = player.role === 'imposter';

                        return (
                            <div key={player.id} className="relative h-14 w-full bg-white/[0.02] rounded-2xl overflow-hidden border border-white/5 flex items-center px-4">
                                <div
                                    className={`absolute inset-0 opacity-10 transition-all duration-1000 ${isImposter ? 'bg-red-500' : 'bg-purple-500'}`}
                                    style={{ width: `${progress}%` }}
                                />

                                <div className="relative z-10 flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${isImposter ? 'bg-red-500 text-white' : 'bg-surface-accent text-slate-400'}`}>
                                            {player.isBot ? <Bot size={16} /> : player.name[0]}
                                        </div>
                                        <span className={`text-sm font-bold ${isImposter ? 'text-red-400' : 'text-slate-300'}`}>
                                            {player.name}
                                            {isImposter && <span className="ml-2 text-[8px] bg-red-500 text-white px-1.5 py-0.5 rounded-full">CASUS</span>}
                                        </span>
                                    </div>
                                    <span className="text-xs font-black font-mono text-slate-500">{votes} OY</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Final Action */}
            <div className="mt-auto">
                <button
                    onClick={resetGame}
                    className="w-full h-18 bg-white text-black rounded-[2.5rem] font-black text-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    style={{ height: '72px' }}
                >
                    <RotateCcw size={24} />
                    YENİDEN OYNA
                </button>
            </div>
        </div>
    );
}
