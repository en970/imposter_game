'use client';

import { useState, useEffect } from 'react';
import { Vote, User, Bot, Check, Send, Target, Fingerprint } from 'lucide-react';
import { useGameStore } from '@/lib/gameStore';

export default function Voting() {
    const { players, votes, currentUser, castVote } = useGameStore();
    const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
    const [hasVoted, setHasVoted] = useState(false);

    const currentUserPlayer = players.find(p => p.name === currentUser);
    const currentUserId = currentUserPlayer?.id;

    useEffect(() => {
        const botVoteInterval = setInterval(() => {
            const botsToVote = players.filter(p => p.isBot && !votes[p.id]);
            if (botsToVote.length > 0) {
                const bot = botsToVote[0];
                const otherPlayers = players.filter(p => p.id !== bot.id);
                const randomTarget = otherPlayers[Math.floor(Math.random() * otherPlayers.length)];
                castVote(bot.id, randomTarget.id);
            }
        }, 1500);

        return () => clearInterval(botVoteInterval);
    }, [players, votes, castVote]);

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
        <div className="min-h-screen flex flex-col p-6 max-w-lg mx-auto pb-safe animate-fade-in text-white">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 text-orange-500 mb-4 bg-orange-500/10 w-fit mx-auto px-6 py-2 rounded-full border border-orange-500/20">
                    <Fingerprint size={24} className="animate-pulse" />
                    <h2 className="text-2xl font-black uppercase tracking-tighter">OYLAMA BAŞLADI</h2>
                </div>
                <p className="text-slate-400 font-medium px-8">Kimin <span className="text-red-500 font-black">CASUS</span> olduğunu düşünüyorsun? Kararını ver.</p>

                {/* Progress Tracker */}
                <div className="mt-8 grid grid-cols-5 gap-1.5 w-full">
                    {players.map((p, i) => (
                        <div
                            key={p.id}
                            className={`h-1.5 rounded-full transition-all duration-500 ${votes[p.id] ? 'bg-orange-500' : 'bg-white/10'}`}
                        />
                    ))}
                </div>
                <div className="mt-2 text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">
                    {votedCount} / {players.length} OY VERİLDİ
                </div>
            </div>

            {/* Candidates List */}
            <div className="flex-1 overflow-y-auto mb-8 pr-1 custom-scrollbar">
                {hasVoted ? (
                    <div className="flex flex-col items-center justify-center h-full space-y-6 animate-fade-in">
                        <div className="w-24 h-24 bg-emerald-500/20 rounded-[2.5rem] flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)] border border-emerald-500/30">
                            <Check size={48} className="text-emerald-500" strokeWidth={3} />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-black text-white mb-2">OYUN KAYDEDİLDİ</h3>
                            <p className="text-slate-400 font-medium">Diğerlerinin karar vermesi bekleniyor...</p>
                        </div>

                        <div className="w-full space-y-2 mt-8">
                            {players.map(p => (
                                <div key={p.id} className="flex items-center justify-between p-4 glass-panel rounded-2xl border-white/5 opacity-80">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${p.isBot ? 'bg-orange-500/20 text-orange-500' : 'bg-purple-500/20 text-purple-500'}`}>
                                            {p.isBot ? <Bot size={16} /> : <User size={16} />}
                                        </div>
                                        <span className="text-sm font-bold text-slate-300">{p.name}</span>
                                    </div>
                                    {votes[p.id] && <div className="text-[10px] font-black text-emerald-500 flex items-center gap-1 uppercase tracking-widest"><Check size={12} /> VERİLDİ</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-3">
                        {players.filter(p => p.id !== currentUserId).map((player) => (
                            <button
                                key={player.id}
                                onClick={() => setSelectedPlayer(player.id)}
                                className={`w-full flex items-center gap-4 p-5 rounded-[2rem] border-2 transition-all duration-300 relative group ${selectedPlayer === player.id
                                        ? 'border-orange-500 bg-orange-500/20 shadow-xl scale-[1.03]'
                                        : 'border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/10'
                                    }`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl transition-all ${selectedPlayer === player.id ? 'bg-orange-500 text-white rotate-6' : 'bg-slate-800 text-slate-400'
                                    }`}>
                                    {player.isBot ? <Bot size={28} /> : player.name[0].toUpperCase()}
                                </div>

                                <div className="flex-1 text-left">
                                    <span className={`text-xl font-black block leading-none mb-1 transition-colors ${selectedPlayer === player.id ? 'text-white' : 'text-slate-300'}`}>
                                        {player.name}
                                    </span>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                        Şüpheli Karakter
                                    </span>
                                </div>

                                {selectedPlayer === player.id ? (
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-fade-in">
                                        <Target size={18} className="text-white" />
                                    </div>
                                ) : (
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Target size={16} className="text-slate-600" />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Action Footer */}
            {!hasVoted && (
                <div className="mt-auto pt-6">
                    <button
                        onClick={handleVote}
                        disabled={!selectedPlayer}
                        className="w-full h-18 bg-gradient-to-r from-orange-600 to-red-600 rounded-[2rem] font-black text-xl text-white flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-30 disabled:grayscale"
                        style={{ height: '72px' }}
                    >
                        <Send size={24} />
                        OYU ONAYLA
                    </button>
                </div>
            )}
        </div>
    );
}
