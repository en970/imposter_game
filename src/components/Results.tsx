'use client';

import { Trophy, Skull, User, RotateCcw, Award } from 'lucide-react';
import { useGameStore } from '@/lib/gameStore';

export default function Results() {
    const { players, secretWord, category, calculateResults, resetToLobby } = useGameStore();

    const { imposters, winners, voteResults } = calculateResults();

    const sortedPlayers = [...players].sort((a, b) =>
        (voteResults[b.id] || 0) - (voteResults[a.id] || 0)
    );

    const maxVotes = Math.max(...Object.values(voteResults));

    return (
        <div className="min-h-screen flex flex-col container-responsive pb-safe animate-fade-in text-white relative">
            {/* Winner Card */}
            <div className={`relative overflow-hidden rounded-2xl p-8 mb-6 text-center border transition-all duration-500 shadow-xl mt-4 ${winners === 'civilians'
                    ? 'bg-[#1a1a28] border-emerald-500/30'
                    : 'bg-[#1a1a28] border-red-500/30'
                }`}>
                <div className="relative z-10">
                    <div className="text-7xl mb-4 drop-shadow-md">
                        {winners === 'civilians' ? '🏆' : '👺'}
                    </div>
                    <h2 className={`text-3xl font-black mb-2 tracking-tight ${winners === 'civilians' ? 'text-emerald-400' : 'text-red-500'
                        }`}>
                        {winners === 'civilians' ? 'SİVİLLER KAZANDI' : 'CASUS KAZANDI'}
                    </h2>
                    <p className="text-slate-400 font-medium text-sm px-4 leading-relaxed">
                        {winners === 'civilians'
                            ? 'Tebrikler! Casus yakalandı.'
                            : 'Casus kendini gizlemeyi başardı!'}
                    </p>
                </div>
            </div>

            {/* Identity Reveal Section */}
            <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 mb-1 px-1">
                    <Skull size={16} className="text-red-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">CASUS KİMDİ?</span>
                </div>

                <div className="grid gap-2">
                    {imposters.map((imposter) => (
                        <div
                            key={imposter.id}
                            className="bg-[#12121a] p-4 rounded-xl border-l-4 border-l-red-500 border border-white/5 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#1a1a28] rounded-xl flex items-center justify-center text-red-500 border border-white/5">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-white leading-tight mb-1">{imposter.name}</h4>
                                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">GERÇEK CASUS</p>
                                </div>
                            </div>
                            <div className="px-3 py-1 bg-red-500/10 rounded-md text-xs font-bold text-red-500 border border-red-500/20">
                                {voteResults[imposter.id] || 0} Oy
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Game Detail Summary */}
            <div className="bg-[#12121a] rounded-xl p-5 mb-8 flex items-center justify-between border border-white/5 mx-1">
                <div className="text-left">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">KELİME</p>
                    <p className="text-xl font-bold text-white tracking-tight uppercase leading-none">{secretWord}</p>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className="text-right">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">KATEGORİ</p>
                    <p className="text-sm font-bold text-purple-400 tracking-tight leading-none uppercase">{category}</p>
                </div>
            </div>

            {/* Vote Breakdown */}
            <div className="flex-1 mb-24 overflow-y-auto px-1 custom-scrollbar">
                <div className="flex items-center gap-2 mb-3">
                    <Award size={16} className="text-yellow-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">OY DAĞILIMI</span>
                </div>

                <div className="space-y-2">
                    {sortedPlayers.map((player) => {
                        const votes = voteResults[player.id] || 0;
                        const progress = maxVotes > 0 ? (votes / maxVotes) * 100 : 0;
                        const isImposter = player.role === 'imposter';

                        return (
                            <div key={player.id} className="relative h-12 w-full bg-[#12121a] rounded-lg overflow-hidden border border-white/5 flex items-center px-3">
                                <div
                                    className={`absolute inset-0 opacity-20 transition-all duration-1000 ${isImposter ? 'bg-red-500' : 'bg-purple-500'}`}
                                    style={{ width: `${progress}%` }}
                                />

                                <div className="relative z-10 flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold bg-[#1a1a28] text-slate-400`}>
                                            {player.name[0]}
                                        </div>
                                        <span className={`text-sm font-bold ${isImposter ? 'text-red-400' : 'text-slate-300'}`}>
                                            {player.name}
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold font-mono text-slate-500">{votes} OY</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Fixed Action Footer */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-[#0a0a0f] border-t border-white/5 z-20">
                <div className="max-w-lg mx-auto">
                    <button
                        onClick={resetToLobby}
                        className="w-full h-16 btn-primary rounded-xl font-bold text-lg text-white flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg bg-white text-black hover:bg-slate-200"
                        style={{ backgroundColor: 'white', color: 'black' }}
                    >
                        <RotateCcw size={20} />
                        ANA SAYFAYA DÖN (AYNI GRUP)
                    </button>
                </div>
            </div>
        </div>
    );
}
