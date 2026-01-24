'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Users, Plus, Play, Settings, Trash2, Copy, Check, Sparkles, User, Share2 } from 'lucide-react';
import { useGameStore } from '@/lib/gameStore';

export default function LobbyScreen() {
    const searchParams = useSearchParams();
    const {
        players,
        roomCode,
        imposterCount,
        timerDuration,
        currentUser,
        setCurrentUser,
        createRoom,
        joinRoom,
        addPlayer,
        removePlayer,
        setImposterCount,
        setTimerDuration,
        startGame
    } = useGameStore();

    const [nameInput, setNameInput] = useState('');
    const [showSettings, setShowSettings] = useState(false);
    const [copied, setCopied] = useState(false);
    const [urlRoomCode, setUrlRoomCode] = useState<string | null>(null);

    useEffect(() => {
        const code = searchParams.get('room');
        if (code) {
            setUrlRoomCode(code);
            joinRoom(code);
        }
    }, [searchParams, joinRoom]);

    const handleJoin = () => {
        if (nameInput.trim()) {
            if (!roomCode && !urlRoomCode) {
                createRoom();
            }
            setCurrentUser(nameInput.trim());
            addPlayer(nameInput.trim());
        }
    };

    const copyRoomLink = async () => {
        if (!roomCode) return;
        const url = `${window.location.origin}${window.location.pathname}?room=${roomCode}`;
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Kelime Avı - Odaya Katıl',
                    text: `Kelime Avı oyununa katılmak için linke tıkla! Oda Kodu: ${roomCode}`,
                    url: url
                });
            } else {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch (error) {
            console.log('Sharing failed', error);
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const canStart = players.length >= 3;

    if (!currentUser) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0a0a0f] relative overflow-hidden">
                {/* Simplified Background */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0a0a0f] to-[#0a0a0f]" />

                <div className="w-full max-w-sm z-10 animate-fade-in">
                    <div className="text-center mb-10">
                        <div className="inline-block p-3 rounded-2xl bg-[#12121a] border border-white/5 mb-4 shadow-lg">
                            <Sparkles className="text-purple-500 w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black tracking-tight text-white mb-2">
                            KELİME <span className="text-purple-500">AVI</span>
                        </h1>
                    </div>

                    <div className="glass-card rounded-3xl p-8 space-y-6 bg-[#12121a]">
                        {urlRoomCode ? (
                            <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-xl text-center mb-4">
                                <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1">ODA BULUNDU</p>
                                <p className="text-xl font-black text-white">{urlRoomCode}</p>
                            </div>
                        ) : null}

                        <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                                KAHRAMAN İSMİ
                            </label>
                            <input
                                type="text"
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
                                placeholder="İsmini gir..."
                                className="w-full h-14 px-6 rounded-xl bg-[#1a1a28] border border-white/5 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 text-white placeholder:text-slate-600 transition-all outline-none text-lg font-medium"
                            />
                        </div>

                        <button
                            onClick={handleJoin}
                            disabled={!nameInput.trim()}
                            className="w-full h-14 btn-primary rounded-xl font-bold text-lg flex items-center justify-center gap-2 group disabled:opacity-50"
                        >
                            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                            {urlRoomCode ? 'Odaya Katıl' : 'Oda Oluştur / Katıl'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col container-responsive pb-safe">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 animate-fade-in pt-4">
                <div>
                    <h1 className="text-2xl font-black text-white tracking-tight">LOBİ</h1>
                    {roomCode && (
                        <button
                            onClick={copyRoomLink}
                            className="mt-2 flex items-center gap-2 text-xs font-bold text-purple-400 bg-purple-500/10 px-3 py-2 rounded-lg hover:bg-purple-500/20 transition-all active:scale-95 cursor-pointer max-w-full truncate"
                        >
                            <Share2 size={14} />
                            <span>DAVET ET: <span className="font-mono text-white/90">{roomCode}</span></span>
                            {copied && <Check size={14} />}
                        </button>
                    )}
                </div>
                <button
                    onClick={() => setShowSettings(!showSettings)}
                    className={`p-3 rounded-xl transition-all ${showSettings
                            ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                            : 'bg-[#1a1a28] text-slate-400 border border-white/5'
                        }`}
                >
                    <Settings size={22} />
                </button>
            </div>

            {/* Settings Panel */}
            {showSettings && (
                <div className="glass-card rounded-2xl p-6 mb-8 animate-fade-in bg-[#12121a]">
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">CASUS SAYISI</span>
                                <span className="text-xl font-black text-white">{imposterCount}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {[1, 2, 3].map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => setImposterCount(num)}
                                        className={`h-12 rounded-xl font-bold transition-all border ${imposterCount === num
                                                ? 'bg-purple-600 border-purple-500 text-white shadow-lg'
                                                : 'bg-[#1a1a28] border-white/5 text-slate-500 hover:bg-[#202030]'
                                            }`}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">SÜRE (SANİYE)</span>
                                <span className="text-xl font-black text-white">{timerDuration}</span>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {[60, 120, 180, 300].map((sec) => (
                                    <button
                                        key={sec}
                                        onClick={() => setTimerDuration(sec)}
                                        className={`h-12 rounded-xl text-xs font-bold transition-all border ${timerDuration === sec
                                                ? 'bg-purple-600 border-purple-500 text-white shadow-lg'
                                                : 'bg-[#1a1a28] border-white/5 text-slate-500 hover:bg-[#202030]'
                                            }`}
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
            <div className="flex-1 space-y-4 mb-24 overflow-y-auto pr-1 custom-scrollbar">
                <div className="flex items-center gap-2 mb-2 sticky top-0 bg-[#0a0a0f] py-2 z-10">
                    <Users size={18} className="text-purple-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">OYUNCULAR ({players.length})</span>
                </div>

                <div className="grid gap-3 pb-4">
                    {players.map((player) => (
                        <div
                            key={player.id}
                            className="glass-card p-4 rounded-xl flex items-center justify-between border border-white/5 bg-[#12121a]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg bg-[#1a1a28] text-purple-500 shadow-inner">
                                    <User size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-white flex items-center gap-2 text-lg">
                                        {player.name}
                                        {player.name === currentUser && (
                                            <span className="text-[10px] px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-lg font-bold uppercase tracking-wider">SEN</span>
                                        )}
                                    </p>
                                    <p className="text-xs font-medium text-slate-500">Oyuncu</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {players.length === 0 && (
                        <div className="text-center py-10 text-slate-600 text-sm">
                            Henüz kimse katılmadı.
                        </div>
                    )}
                </div>
            </div>

            {/* Fixed Bottom Actions */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-[#0a0a0f] border-t border-white/5 z-20">
                <div className="max-w-lg mx-auto">
                    {!canStart && players.length > 0 && (
                        <p className="text-center text-xs font-bold text-slate-500 mb-3 uppercase tracking-widest animate-pulse">
                            Başlamak için en az 3 kişi gerekli
                        </p>
                    )}
                    <button
                        onClick={startGame}
                        disabled={!canStart}
                        className="w-full h-16 btn-primary rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-xl transition-all disabled:opacity-50"
                    >
                        <Play size={24} fill="currentColor" />
                        BAŞLAT
                    </button>
                </div>
            </div>
        </div>
    );
}
