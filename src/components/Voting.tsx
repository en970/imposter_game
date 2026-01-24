'use client';

import { useState, useEffect } from 'react';
import { User, Check, Send, Target, Fingerprint } from 'lucide-react';
import { useGameStore } from '@/lib/gameStore';

export default function Voting() {
    const { players, votes, currentUser, castVote } = useGameStore();
    const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
    const [hasVoted, setHasVoted] = useState(false);

    const currentUserPlayer = players.find(p => p.name === currentUser);
    const currentUserId = currentUserPlayer?.id;

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

    useEffect(() => {
        if (allVoted) {
            const timer = setTimeout(() => {
                useGameStore.setState({ gameState: 'result' });
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [allVoted]);

    return (
        <div className="min-h-screen flex flex-col container-responsive pb-safe animate-fade-in text-white relative">
            {/* Header */}
            <div className="text-center mb-6 pt-4">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <Fingerprint size={24} className="text-orange-500" />
                    <h2 className="text-2xl font-black uppercase tracking-tight">OYLAMA</h2>
                </div>
                <p className="text-slate-400 font-medium text-sm">
                    Sence aramızdaki <span className="text-red-500 font-bold">CASUS</span> kim?
                </p>

                {/* Progress Tracker */}
                <div className="mt-6 w-full bg-[#12121a] rounded-full h-1.5 overflow-hidden">
                    <div
                        className="h-full bg-orange-500 transition-all duration-500"
                        style={{ width: `${(votedCount / players.length) * 100}%` }}
                    />
                </div>
                <div className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">
                    {votedCount} / {players.length} OY
                </div>
            </div>

            {/* Candidates List */}
            <div className="flex-1 overflow-y-auto mb-20 custom-scrollbar pr-1">
                {hasVoted ? (
                    <div className="flex flex-col items-center justify-center h-full space-y-6 animate-fade-in">
                        <div className="w-20 h-20 bg-[#12121a] rounded-full flex items-center justify-center border border-emerald-500/30 shadow-lg">
                            <Check size={32} className="text-emerald-500" strokeWidth={3} />
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-white mb-2">OYUN ALINDI</h3>
                            <p className="text-slate-400 font-medium text-sm px-8">
                                Diğer oyuncuların karar vermesi bekleniyor...
                            </p>
                        </div>

                        <div className="w-full space-y-2 mt-4 px-4">
                            {players.map(p => (
                                <div key={p.id} className="flex items-center justify-between p-3 bg-[#12121a] rounded-xl border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#1a1a28] text-purple-500 text-xs font-bold">
                                            <User size={16} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-300">{p.name}</span>
                                    </div>
                                    {votes[p.id] && (
                                        <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md uppercase tracking-wide">
                                            OY VERDİ
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-3 pb-4 px-1">
                        {players.filter(p => p.id !== currentUserId).map((player) => (
                            <button
                                key={player.id}
                                onClick={() => setSelectedPlayer(player.id)}
                                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 relative ${selectedPlayer === player.id
                                        ? 'border-orange-500 bg-[#1a1a28] shadow-md z-10'
                                        : 'border-white/5 bg-[#12121a] hover:bg-[#1a1a28]'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg transition-transform ${selectedPlayer === player.id
                                        ? 'bg-orange-500 text-white scale-110'
                                        : 'bg-[#1a1a28] text-slate-500'
                                    }`}>
                                    {player.name[0].toUpperCase()}
                                </div>

                                <div className="flex-1 text-left">
                                    <span className={`text-lg font-bold block leading-tight transition-colors ${selectedPlayer === player.id ? 'text-white' : 'text-slate-300'
                                        }`}>
                                        {player.name}
                                    </span>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                                        Şüpheli
                                    </span>
                                </div>

                                {selectedPlayer === player.id && (
                                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-fade-in mr-2">
                                        <Check size={14} className="text-white" strokeWidth={3} />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Fixed Action Footer */}
            {!hasVoted && (
                <div className="fixed bottom-0 left-0 right-0 p-6 bg-[#0a0a0f] border-t border-white/5 z-20">
                    <div className="max-w-lg mx-auto">
                        <button
                            onClick={handleVote}
                            disabled={!selectedPlayer}
                            className="w-full h-16 btn-primary rounded-xl font-bold text-lg text-white flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50 shadow-lg bg-orange-600 hover:bg-orange-700"
                        >
                            <Send size={20} />
                            OYU ONAYLA
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
