'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
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
        setImposterCount,
        setTimerDuration,
        startGame
    } = useGameStore();

    const [nameInput, setNameInput] = useState('');
    const [showSettings, setShowSettings] = useState(false);
    const [copied, setCopied] = useState(false);
    const [urlRoomCode, setUrlRoomCode] = useState<string | null>(null);
    const [isJoining, setIsJoining] = useState(false);

    useEffect(() => {
        const code = searchParams.get('room');
        if (code && code !== urlRoomCode) {
            setUrlRoomCode(code);
        }
    }, [searchParams, urlRoomCode]);

    const handleJoin = async () => {
        if (!nameInput.trim()) return;

        setIsJoining(true);
        setCurrentUser(nameInput.trim());

        try {
            if (urlRoomCode) {
                await joinRoom(urlRoomCode);
                await addPlayer(nameInput.trim());
            } else if (roomCode) {
                await addPlayer(nameInput.trim());
            } else {
                await createRoom();
            }
        } catch (error) {
            console.error('Failed to join:', error);
        }

        setIsJoining(false);
    };

    const copyRoomLink = async () => {
        if (!roomCode) return;
        const url = `${window.location.origin}${window.location.pathname}?room=${roomCode}`;
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Kelime Avı - Odaya Katıl',
                    text: `Kelime Avı oyununa katıl! Kod: ${roomCode}`,
                    url: url
                });
            } else {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const canStart = players.length >= 3;

    // Entry Screen
    if (!currentUser) {
        return (
            <div className="center-container">
                <div style={{ width: '100%', maxWidth: '400px' }} className="fade-in">
                    {/* Logo */}
                    <div className="text-center mb-lg">
                        <div className="logo-icon" style={{ margin: '0 auto' }}>🎭</div>
                        <h1 className="title-xl">
                            KELİME <span className="text-accent">AVI</span>
                        </h1>
                        <p className="description text-center">
                            Arkadaşlarınla oyna, aralarındaki casusun kim olduğunu bul!
                        </p>
                    </div>

                    {/* Card */}
                    <div className="card">
                        {urlRoomCode && (
                            <div className="info-box">
                                <div className="info-box-title">Oda Bulundu</div>
                                <div className="info-box-value">{urlRoomCode}</div>
                            </div>
                        )}

                        <div className="mb-md">
                            <label className="input-label">İsmin</label>
                            <input
                                type="text"
                                className="input"
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
                                placeholder="İsmini gir..."
                                disabled={isJoining}
                            />
                        </div>

                        <button
                            onClick={handleJoin}
                            disabled={!nameInput.trim() || isJoining}
                            className="btn btn-primary btn-lg btn-full"
                        >
                            {isJoining ? '⏳ Bağlanıyor...' : urlRoomCode ? '🚀 Odaya Katıl' : '✨ Oda Oluştur'}
                        </button>
                    </div>

                    <p className="description text-center mt-md">
                        {urlRoomCode
                            ? 'Arkadaşının odasına katılmak üzeresin!'
                            : 'Yeni bir oda oluştur ve arkadaşlarını davet et.'}
                    </p>
                </div>
            </div>
        );
    }

    // Lobby Screen
    return (
        <div className="page-container">
            {/* Header */}
            <div className="header fade-in">
                <div>
                    <h1 className="header-title">Lobi</h1>
                    {roomCode && (
                        <div className="room-code" onClick={copyRoomLink}>
                            🔗 Davet: <span>{roomCode}</span>
                            {copied && ' ✓'}
                        </div>
                    )}
                </div>
                <button
                    onClick={() => setShowSettings(!showSettings)}
                    className={`icon-btn ${showSettings ? 'active' : ''}`}
                >
                    ⚙️
                </button>
            </div>

            {/* Settings */}
            {showSettings && (
                <div className="settings-panel fade-in">
                    <div className="settings-row">
                        <div className="settings-header">
                            <span className="settings-label">Casus Sayısı</span>
                            <span className="settings-value">{imposterCount}</span>
                        </div>
                        <div className="settings-grid settings-grid-3">
                            {[1, 2, 3].map((num) => (
                                <button
                                    key={num}
                                    onClick={() => setImposterCount(num)}
                                    className={`settings-option ${imposterCount === num ? 'active' : ''}`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="settings-row">
                        <div className="settings-header">
                            <span className="settings-label">Süre (Saniye)</span>
                            <span className="settings-value">{timerDuration}</span>
                        </div>
                        <div className="settings-grid settings-grid-4">
                            {[60, 120, 180, 300].map((sec) => (
                                <button
                                    key={sec}
                                    onClick={() => setTimerDuration(sec)}
                                    className={`settings-option ${timerDuration === sec ? 'active' : ''}`}
                                >
                                    {sec}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Players Section */}
            <div className="scroll-area">
                <div className="section-header">
                    <span className="section-title">
                        👥 Oyuncular ({players.length})
                    </span>
                    <div className="live-indicator">
                        <div className="live-dot"></div>
                        Canlı
                    </div>
                </div>

                {players.length === 0 ? (
                    <div className="empty-state">
                        ⏳ Bağlanıyor...
                    </div>
                ) : (
                    <div>
                        {players.map((player, index) => (
                            <div key={player.id} className="player-item fade-in">
                                <div className="player-avatar">
                                    {player.name[0].toUpperCase()}
                                </div>
                                <div className="player-info">
                                    <div className="player-name">
                                        {player.name}
                                        {player.name === currentUser && (
                                            <span className="badge badge-purple">Sen</span>
                                        )}
                                    </div>
                                    <div className="player-role">Oyuncu #{index + 1}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Fixed Footer */}
            <div className="fixed-footer">
                <div className="fixed-footer-content">
                    {!canStart && players.length > 0 && (
                        <p className="text-xs text-center text-muted mb-sm">
                            Başlamak için en az 3 kişi gerekli ({players.length}/3)
                        </p>
                    )}
                    <button
                        onClick={startGame}
                        disabled={!canStart}
                        className="btn btn-primary btn-lg btn-full"
                    >
                        🎮 BAŞLAT
                    </button>
                </div>
            </div>
        </div>
    );
}
