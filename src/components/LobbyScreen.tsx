'use client';

import { useState } from 'react';
import { Users, Plus, Play, Settings, Bot, Trash2, Copy, Check } from 'lucide-react';
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
            setNameInput('');
        }
    };

    const handleAddBot = () => {
        addBots(1);
    };

    const handleAddMultipleBots = () => {
        const botsNeeded = Math.max(0, 4 - players.length);
        if (botsNeeded > 0) {
            addBots(botsNeeded);
        }
    };

    const copyRoomCode = async () => {
        await navigator.clipboard.writeText(roomCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const canStart = players.length >= 3 && imposterCount < players.length;

    if (!currentUser) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent mb-2">
                            Kelime Avı
                        </h1>
                        <p className="text-gray-400">Imposter oyununa hoş geldin!</p>
                    </div>

                    <div className="bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 shadow-2xl">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    İsmin
                                </label>
                                <input
                                    type="text"
                                    value={nameInput}
                                    onChange={(e) => setNameInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
                                    placeholder="İsmini gir..."
                                    className="w-full px-4 py-4 bg-[#0a0a0f] border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-lg"
                                />
                            </div>

                            <button
                                onClick={handleJoin}
                                disabled={!nameInput.trim()}
                                className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed rounded-xl font-semibold text-white text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
                            >
                                <Play size={20} />
                                Odaya Katıl / Oluştur
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] p-4">
            <div className="max-w-md mx-auto">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                        Kelime Avı
                    </h1>

                    {/* Room Code */}
                    <button
                        onClick={copyRoomCode}
                        className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a2e] border border-purple-500/30 rounded-lg text-purple-300 hover:border-purple-500/50 transition-all"
                    >
                        <span className="text-sm text-gray-400">Oda Kodu:</span>
                        <span className="font-mono font-bold text-lg">{roomCode}</span>
                        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                    </button>
                </div>

                {/* Players List */}
                <div className="bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-4 border border-purple-500/20 mb-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-gray-300">
                            <Users size={20} />
                            <span className="font-medium">Oyuncular ({players.length})</span>
                        </div>
                        <button
                            onClick={() => setShowSettings(!showSettings)}
                            className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
                        >
                            <Settings size={20} className="text-purple-400" />
                        </button>
                    </div>

                    {/* Settings Panel */}
                    {showSettings && (
                        <div className="mb-4 p-4 bg-[#0a0a0f] rounded-xl border border-purple-500/20">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Imposter Sayısı
                                    </label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3].map((num) => (
                                            <button
                                                key={num}
                                                onClick={() => setImposterCount(num)}
                                                className={`flex-1 py-2 rounded-lg font-medium transition-all ${imposterCount === num
                                                        ? 'bg-orange-500 text-white'
                                                        : 'bg-[#1a1a2e] text-gray-400 hover:bg-purple-500/20'
                                                    }`}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Süre (saniye)
                                    </label>
                                    <div className="flex gap-2">
                                        {[60, 120, 180, 300].map((sec) => (
                                            <button
                                                key={sec}
                                                onClick={() => setTimerDuration(sec)}
                                                className={`flex-1 py-2 rounded-lg font-medium transition-all ${timerDuration === sec
                                                        ? 'bg-purple-500 text-white'
                                                        : 'bg-[#1a1a2e] text-gray-400 hover:bg-purple-500/20'
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

                    {/* Player Cards */}
                    <div className="space-y-2">
                        {players.map((player, index) => (
                            <div
                                key={player.id}
                                className={`flex items-center justify-between p-3 rounded-xl ${player.isBot
                                        ? 'bg-orange-500/10 border border-orange-500/30'
                                        : 'bg-purple-500/10 border border-purple-500/30'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${player.isBot ? 'bg-orange-500' : 'bg-purple-500'
                                        }`}>
                                        {player.isBot ? <Bot size={20} /> : player.name[0].toUpperCase()}
                                    </div>
                                    <span className="font-medium text-white">{player.name}</span>
                                    {player.name === currentUser && (
                                        <span className="text-xs px-2 py-1 bg-purple-500/30 text-purple-300 rounded-full">Sen</span>
                                    )}
                                </div>
                                {player.isBot && (
                                    <button
                                        onClick={() => removePlayer(player.id)}
                                        className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                    <div className="flex gap-2">
                        <button
                            onClick={handleAddBot}
                            className="flex-1 py-3 bg-[#1a1a2e] border border-orange-500/30 text-orange-400 rounded-xl font-medium hover:bg-orange-500/10 transition-all flex items-center justify-center gap-2"
                        >
                            <Bot size={18} />
                            Bot Ekle
                        </button>
                        <button
                            onClick={handleAddMultipleBots}
                            className="flex-1 py-3 bg-[#1a1a2e] border border-orange-500/30 text-orange-400 rounded-xl font-medium hover:bg-orange-500/10 transition-all flex items-center justify-center gap-2"
                        >
                            <Plus size={18} />
                            Doldur
                        </button>
                    </div>

                    <button
                        onClick={startGame}
                        disabled={!canStart}
                        className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed rounded-xl font-bold text-white text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-green-500/25"
                    >
                        <Play size={22} />
                        Oyunu Başlat ({players.length} Oyuncu)
                    </button>

                    {!canStart && players.length > 0 && (
                        <p className="text-center text-sm text-gray-500">
                            En az 3 oyuncu gerekli
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
