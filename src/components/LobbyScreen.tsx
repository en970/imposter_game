'use client';

import { useState } from 'react';
import { Users, Plus, Play, Settings, Bot, Trash2, Copy, Check, Sparkles } from 'lucide-react';
import { useGameStore } from '@/lib/gameStore';

export default function LobbyScreen() {
    const {
        players,
        roomCode,
        imposterCount,
        timerDuration,
        currentUser,
        setCurrentUser,
        createRoom,
        addPlayer,
        removePlayer,
        addBots,
        setImposterCount,
        setTimerDuration,
        startGame
    } = useGameStore();

    const [nameInput, setNameInput] = useState('');
    const [showSettings, setShowSettings] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleJoin = () => {
        if (nameInput.trim()) {
            if (!roomCode) {
                createRoom();
            }
            setCurrentUser(nameInput.trim());
            addPlayer(nameInput.trim(), false);
        }
    };

    const copyRoomCode = async () => {
        if (!roomCode) return;
        await navigator.clipboard.writeText(roomCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const canStart = players.length >= 3;

    if (!currentUser) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#050508] relative overflow-hidden">
                {/* Animated Background Glow */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full" />

                <div className="w-full max-w-sm z-10 animate-fade-in">
                    <div className="text-center mb-10">
                        <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/20 mb-4">
                            <Sparkles className="text-purple-400 w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black tracking-tighter text-white mb-2">
                            KELİME <span className="text-purple-500">AVI</span>
                        </h1>
                        <p className="text-slate-400 font-medium">Imposter&apos;ı bulmaya hazır mısın?</p>
                    </div>

                    <div className="glass-card rounded-[2.5rem] p-8 space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                                KAHRAMAN İSMİ
                            </label>
                            <input
                                type="text"
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
                                placeholder="Örn: Ali..."
                                className="w-full h-14 px-6 rounded-2xl bg-black/40 border border-white/5 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 text-white placeholder:text-slate-600 transition-all outline-none text-lg font-medium"
                            />
                        </div>

                        <button
                            onClick={handleJoin}
                            disabled={!nameInput.trim()}
                            className="w-full h-14 btn-primary rounded-2xl font-bold text-lg flex items-center justify-center gap-2 group disabled:opacity-50 disabled:translate-y-0"
                        >
                            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                            Oda Oluştur / Katıl
                        </button>
                    </div>

                    <p className="mt-8 text-center text-slate-500 text-sm font-medium">
                        Arkadaşlarınla oynamak için tek yapman gereken bir isim girmek.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col p-6 max-w-lg mx-auto pb-safe">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 animate-fade-in">
                <div>
                    <h1 className="text-2xl font-black text-white tracking-tight">LOBİ</h1>
                    {roomCode && (
                        <button
                            onClick={copyRoomCode}
                            className="flex items-center gap-1.5 text-xs font-bold text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full hover:bg-purple-500/20 transition-all active:scale-95"
                        >
                            KOD: <span className="font-mono">{roomCode}</span>
                            {copied ? <Check size={12} /> : <Copy size={12} />}
                        </button>
                    )}
                </div>
                <button
                    onClick={() => setShowSettings(!showSettings)}
                    className={`p-3 rounded-2xl transition-all ${showSettings ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30' : 'bg-surface-accent text-slate-400'}`}
                >
                    <Settings size={22} />
                </button>
            </div>

            {/* Settings Modal-ish */}
            {showSettings && (
                <div className="glass-card rounded-3xl p-6 mb-8 animate-fade-in">
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">IMPOSTER SAYISI</span>
                                <span className="text-xl font-black text-orange-500">{imposterCount}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {[1, 2, 3].map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => setImposterCount(num)}
                                        className={`h-12 rounded-xl font-bold transition-all ${imposterCount === num ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-black/40 text-slate-500 border border-white/5'}`}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">SÜRE (SN)</span>
                                <span className="text-xl font-black text-purple-500">{timerDuration}</span>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {[60, 120, 180, 300].map((sec) => (
                                    <button
                                        key={sec}
                                        onClick={() => setTimerDuration(sec)}
                                        className={`h-12 rounded-xl text-xs font-bold transition-all ${timerDuration === sec ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30' : 'bg-black/40 text-slate-500 border border-white/5'}`}
                                    >
                                        {sec}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Players Section */}
            <div className="flex-1 space-y-4 mb-8">
                <div className="flex items-center gap-2 mb-2">
                    <Users size={18} className="text-purple-500" />
                    <span className="text-sm font-black text-slate-400 uppercase tracking-widest">OYUNCULAR ({players.length}/10)</span>
                </div>

                <div className="grid gap-3">
                    {players.map((player) => (
                        <div
                            key={player.id}
                            className="glass-card p-4 rounded-2xl flex items-center justify-between border-l-4 group animate-slide-in"
                            style={{ borderLeftColor: player.isBot ? 'var(--secondary)' : 'var(--primary)' }}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${player.isBot ? 'bg-orange-500/20 text-orange-500' : 'bg-purple-500/20 text-purple-500'}`}>
                                    {player.isBot ? <Bot size={24} /> : player.name[0].toUpperCase()}
                                </div>
                                <div>
                                    <p className="font-bold text-white flex items-center gap-2">
                                        {player.name}
                                        {player.name === currentUser && <span className="text-[10px] px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-full font-black uppercase">SEN</span>}
                                    </p>
                                    <p className="text-xs font-medium text-slate-500">{player.isBot ? 'Yapay Zeka' : 'Oyuncu'}</p>
                                </div>
                            </div>
                            {player.isBot && (
                                <button
                                    onClick={() => removePlayer(player.id)}
                                    className="p-2 text-slate-600 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                                >
                                    <Trash2 size={18} />
                                </button>
                            )}
                        </div>
                    ))}

                    {players.length < 10 && (
                        <div className="flex gap-2">
                            <button
                                onClick={() => addBots(1)}
                                className="flex-1 h-14 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-orange-500 font-bold flex items-center justify-center gap-2 hover:bg-orange-500/20 transition-all active:scale-95"
                            >
                                <Bot size={20} />
                                Bot Ekle
                            </button>
                            <button
                                onClick={() => {
                                    const needed = Math.max(0, 4 - players.length);
                                    if (needed > 0) addBots(needed);
                                }}
                                className="px-6 h-14 bg-surface-accent rounded-2xl text-slate-400 font-bold hover:bg-white/5 transition-all active:scale-95 border border-white/5"
                            >
                                Doldur
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Actions */}
            <div className="sticky bottom-0 pt-4 bg-gradient-to-t from-[#050508] via-[#050508] to-transparent">
                <button
                    onClick={startGame}
                    disabled={!canStart}
                    className="w-full h-16 btn-primary rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 shadow-2xl transition-all disabled:opacity-50 disabled:grayscale disabled:translate-y-0"
                >
                    <Play size={24} fill="currentColor" />
                    OYUNU BAŞLAT
                </button>
                {!canStart && players.length > 0 && (
                    <p className="text-center text-xs font-bold text-slate-500 mt-3 animate-pulse">
                        OYNAMAK İÇİN EN AZ 3 OYUNCU GEREKLİ
                    </p>
                )}
            </div>
        </div>
    );
}
