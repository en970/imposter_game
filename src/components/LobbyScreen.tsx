'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useGameStore } from '@/lib/gameStore';
import {
    UsersIcon, SettingsIcon, LinkIcon, PlayIcon,
    SparklesIcon, LoaderIcon, CheckIcon, PlusIcon,
    ArrowLeftIcon, UserIcon
} from './Icons';

// LocalStorage helpers
const getStoredUsername = (): string => {
    if (typeof window === 'undefined') return '';
    return localStorage.getItem('kelimeavi_username') || '';
};

const setStoredUsername = (name: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('kelimeavi_username', name);
    }
};

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
        startGame,
        resetGame
    } = useGameStore();

    const [nameInput, setNameInput] = useState('');
    const [joinCodeInput, setJoinCodeInput] = useState('');
    const [showSettings, setShowSettings] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isJoining, setIsJoining] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [editingName, setEditingName] = useState(false);

    // Load saved username on mount
    useEffect(() => {
        const saved = getStoredUsername();
        if (saved) {
            setNameInput(saved);
        }
    }, []);

    // Check for room code in URL
    useEffect(() => {
        const code = searchParams.get('room');
        if (code) {
            setJoinCodeInput(code);
        }
    }, [searchParams]);

    const handleSaveName = () => {
        if (nameInput.trim()) {
            setStoredUsername(nameInput.trim());
            setEditingName(false);
        }
    };

    const handleCreateRoom = async () => {
        if (!nameInput.trim()) return;

        setIsCreating(true);
        setStoredUsername(nameInput.trim());
        setCurrentUser(nameInput.trim());

        try {
            await createRoom();
        } catch (error) {
            console.error('Failed to create room:', error);
        }

        setIsCreating(false);
    };

    const handleJoinRoom = async () => {
        if (!nameInput.trim() || !joinCodeInput.trim()) return;

        setIsJoining(true);
        setStoredUsername(nameInput.trim());
        setCurrentUser(nameInput.trim());

        try {
            await joinRoom(joinCodeInput.trim().toUpperCase());
            await addPlayer(nameInput.trim());
        } catch (error) {
            console.error('Failed to join room:', error);
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

    // Homepage (not in a room yet)
    if (!roomCode) {
        return (
            <div className="center-container">
                <div className="home-card fade-in">
                    {/* Logo */}
                    <div className="text-center mb-lg">
                        <div className="logo-icon" style={{ margin: '0 auto' }}>
                            <SparklesIcon size={32} color="var(--accent-purple)" />
                        </div>
                        <h1 className="title-xl">
                            KELİME <span className="text-accent">AVI</span>
                        </h1>
                        <p className="description text-center">
                            Arkadaşlarınla oyna, aralarındaki casusun kim olduğunu bul!
                        </p>
                    </div>

                    {/* Username Section */}
                    <div className="card mb-md">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                            <UserIcon size={16} color="var(--accent-purple)" />
                            <span className="input-label" style={{ marginBottom: 0 }}>Kullanıcı Adı</span>
                        </div>

                        <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                            <input
                                type="text"
                                className="input"
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                                placeholder="İsmini gir..."
                                style={{ flex: 1 }}
                            />
                            {nameInput !== getStoredUsername() && nameInput.trim() && (
                                <button onClick={handleSaveName} className="btn btn-secondary">
                                    <CheckIcon size={16} />
                                </button>
                            )}
                        </div>
                        {getStoredUsername() && nameInput === getStoredUsername() && (
                            <p className="text-xs text-muted mt-sm">Kaydedildi</p>
                        )}
                    </div>

                    {/* Create Room */}
                    <button
                        onClick={handleCreateRoom}
                        disabled={!nameInput.trim() || isCreating}
                        className="btn btn-primary btn-lg btn-full mb-md"
                    >
                        {isCreating ? (
                            <>
                                <LoaderIcon size={20} />
                                Oluşturuluyor...
                            </>
                        ) : (
                            <>
                                <PlusIcon size={20} />
                                Oda Oluştur
                            </>
                        )}
                    </button>

                    {/* Join Room */}
                    <div className="card">
                        <span className="input-label">Odaya Katıl</span>
                        <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                            <input
                                type="text"
                                className="input"
                                value={joinCodeInput}
                                onChange={(e) => setJoinCodeInput(e.target.value.toUpperCase())}
                                placeholder="Oda kodu..."
                                style={{ flex: 1, fontFamily: 'monospace', letterSpacing: '0.1em' }}
                                maxLength={6}
                            />
                            <button
                                onClick={handleJoinRoom}
                                disabled={!nameInput.trim() || !joinCodeInput.trim() || isJoining}
                                className="btn btn-primary"
                            >
                                {isJoining ? <LoaderIcon size={18} /> : <PlayIcon size={18} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Lobby Screen (in a room)
    return (
        <div className="center-container">
            <div className="home-card">
                {/* Header */}
                <div className="header fade-in">
                    <button onClick={resetGame} className="icon-btn">
                        <ArrowLeftIcon size={20} />
                    </button>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <h1 className="header-title">Lobi</h1>
                        <div className="room-code" onClick={copyRoomLink} style={{ display: 'inline-flex', marginTop: 'var(--spacing-xs)' }}>
                            <LinkIcon size={14} />
                            <span>{roomCode}</span>
                            {copied && <CheckIcon size={14} color="var(--accent-green)" />}
                        </div>
                    </div>
                    <button
                        onClick={() => setShowSettings(!showSettings)}
                        className={`icon-btn ${showSettings ? 'active' : ''}`}
                    >
                        <SettingsIcon size={20} />
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
                <div className="mb-lg">
                    <div className="section-header">
                        <span className="section-title">
                            <UsersIcon size={16} color="var(--accent-purple)" />
                            Oyuncular ({players.length})
                        </span>
                        <div className="live-indicator">
                            <div className="live-dot"></div>
                            Canlı
                        </div>
                    </div>

                    {players.length === 0 ? (
                        <div className="empty-state">
                            <LoaderIcon size={24} />
                            <p className="mt-sm">Bağlanıyor...</p>
                        </div>
                    ) : (
                        <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
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

                {/* Start Button */}
                <div>
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
                        <PlayIcon size={20} />
                        BAŞLAT
                    </button>
                </div>
            </div>
        </div>
    );
}
