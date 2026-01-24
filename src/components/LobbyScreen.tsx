'use client';

import { useState, useEffect } from 'react';
import { useGameStore } from '@/lib/gameStore';
import {
    UsersIcon, SettingsIcon, LinkIcon, PlayIcon,
    SparklesIcon, LoaderIcon, CheckIcon, PlusIcon,
    ArrowLeftIcon, UserIcon, EditIcon, XIcon, AlertIcon, TrashIcon
} from './Icons';

// LocalStorage helpers
const getStoredUsername = () => typeof window !== 'undefined' ? localStorage.getItem('kelimeavi_username') : null;
const setStoredUsername = (name: string) => localStorage.setItem('kelimeavi_username', name);

export default function LobbyScreen() {
    const {
        roomCode,
        players,
        imposterCount,
        selectedCategory,
        hostId,
        currentUser,
        duplicateNameError,
        createRoom,
        joinRoom,
        addPlayer,
        setImposterCount,
        setSelectedCategory,
        startGame,
        resetGame,
        kickPlayer,
        clearError
    } = useGameStore();

    const [nameInput, setNameInput] = useState('');
    const [joinCodeInput, setJoinCodeInput] = useState('');
    const [editingName, setEditingName] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isJoining, setIsJoining] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const stored = getStoredUsername();
        if (stored) setNameInput(stored);
    }, []);

    const handleSaveName = () => {
        if (nameInput.trim()) {
            setStoredUsername(nameInput.trim());
            setEditingName(false);
        }
    };

    const handleCreateRoom = async () => {
        if (!nameInput.trim()) return;
        setIsCreating(true);
        handleSaveName();
        await createRoom();
        setIsCreating(false);
    };

    const handleJoinRoom = async () => {
        if (!nameInput.trim() || !joinCodeInput.trim()) return;
        setIsJoining(true);
        handleSaveName();
        await joinRoom(joinCodeInput.toUpperCase());
        setIsJoining(false);
    };

    const copyRoomLink = () => {
        navigator.clipboard.writeText(roomCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const categories = ['random', 'Genel', 'Yemek', 'Eşya', 'Şehirler', 'Diziler', 'Filmler', 'Spor', 'Hayvanlar'];
    const canStart = players.length >= 3;

    // Join/Create Screen
    if (!roomCode) {
        return (
            <div className="center-container">
                <div className="home-card fade-in" style={{ border: '4px solid var(--accent-purple)', padding: 'var(--spacing-xl)', borderRadius: 0 }}>
                    {/* Brand Name */}
                    <div className="text-center mb-xl">
                        <h1 className="title-xl" style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-0.05em', margin: '0.5rem 0', lineHeight: 1 }}>
                            WORD<span style={{ color: 'var(--accent-purple)' }}>SPY</span>
                        </h1>
                        <p className="description" style={{ color: 'var(--text-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1rem' }}>
                            FIND THE <span style={{ color: 'var(--accent-red)' }}>IMPOSTER</span> AMONG YOU!
                        </p>
                    </div>

                    {/* How to Play / Rules */}
                    <div className="card mb-lg" style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)', borderRadius: 0 }}>
                        <h4 className="text-xs font-bold mb-md" style={{ color: 'var(--accent-purple)', textTransform: 'uppercase', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px' }}>HOW TO PLAY</h4>
                        <ul className="rules-list" style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', lineHeight: '1.6' }}>
                            <li className="mb-xs">Everyone gets a <b>secret word</b>, except the Impostor.</li>
                            <li className="mb-xs">The <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>IMPOSTOR</span> doesn't know the word, only the category.</li>
                            <li className="mb-xs">Take turns giving <b>one-word clues</b> without revealing too much.</li>
                            <li className="mb-xs">Discuss and <b>FIND THE SPY</b> at the end of each round!</li>
                        </ul>
                    </div>

                    <div className="desktop-grid-2">
                        {/* Left Column: Actions */}
                        <div>
                            {/* Username Section */}
                            <div className="card mb-md">
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                                    <UserIcon size={16} color="var(--accent-purple)" />
                                    <span className="input-label" style={{ marginBottom: 0 }}>Username</span>
                                </div>

                                {getStoredUsername() && !editingName ? (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                        <div style={{ flex: 1, padding: 'var(--spacing-sm) var(--spacing-md)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
                                            {getStoredUsername()}
                                        </div>
                                        <button onClick={() => setEditingName(true)} className="btn btn-secondary" title="Düzenle">
                                            <EditIcon size={16} />
                                        </button>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                        <input
                                            type="text"
                                            className="input"
                                            value={nameInput}
                                            onChange={(e) => setNameInput(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                                            placeholder="İsmini gir..."
                                            style={{ flex: 1 }}
                                            autoFocus={editingName}
                                        />
                                        <button onClick={handleSaveName} disabled={!nameInput.trim()} className="btn btn-primary" title="Kaydet">
                                            <CheckIcon size={16} />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Create Room */}
                            <button
                                onClick={handleCreateRoom}
                                disabled={!nameInput.trim() || isCreating}
                                className="btn btn-primary btn-lg btn-full mb-md"
                            >
                                {isCreating ? <> <LoaderIcon size={20} /> CREATING... </> : <> <PlusIcon size={20} /> CREATE ROOM </>}
                            </button>

                            {/* Join Room */}
                            <div className="card">
                                <span className="input-label">JOIN ROOM</span>
                                <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                    <input
                                        type="text"
                                        className="input"
                                        value={joinCodeInput}
                                        onChange={(e) => setJoinCodeInput(e.target.value.toUpperCase())}
                                        placeholder="ROOM CODE..."
                                        style={{ flex: 1, fontFamily: 'monospace', letterSpacing: '0.1em' }}
                                        maxLength={6}
                                    />
                                    <button onClick={handleJoinRoom} disabled={!nameInput.trim() || !joinCodeInput.trim() || isJoining} className="btn btn-primary">
                                        {isJoining ? <LoaderIcon size={18} /> : <PlayIcon size={18} />}
                                    </button>
                                </div>
                                {typeof window !== 'undefined' && sessionStorage.getItem('lastRoomCode') && !joinCodeInput && (
                                    <button
                                        onClick={() => setJoinCodeInput(sessionStorage.getItem('lastRoomCode') || '')}
                                        className="text-xs text-accent mt-sm"
                                        style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                                    >
                                        Rejoin last room: {sessionStorage.getItem('lastRoomCode')}
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Error Notice or How-to-play */}
                        <div>
                            {duplicateNameError ? (
                                <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'var(--accent-red)', border: '1px solid var(--accent-red)' }}>
                                    <AlertIcon size={48} className="mb-md" />
                                    <h3 className="title-md">Hata!</h3>
                                    <p className="description" style={{ fontSize: '0.875rem' }}>{duplicateNameError}</p>
                                    <button onClick={clearError} className="btn btn-secondary mt-lg">Anladım</button>
                                </div>
                            ) : (
                                <div className="fade-in" style={{ opacity: 0.3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                    <SparklesIcon size={48} color="var(--accent-purple)" className="mb-md" />
                                    <h4 className="title-md" style={{ color: 'var(--text-primary)' }}>READY?</h4>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Lobby Screen (in a room)
    const amIHost = hostId === (typeof window !== 'undefined' ? sessionStorage.getItem('playerId') : null);

    return (
        <div className="center-container">
            <div className="home-card" style={{ borderRadius: 0 }}>
                {/* Header */}
                <div className="header fade-in">
                    <button onClick={resetGame} className="icon-btn">
                        <ArrowLeftIcon size={20} />
                    </button>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <h1 className="header-title" style={{ fontSize: '1.5rem', fontWeight: 900 }}>WORDSPY</h1>
                        <div className="room-code" onClick={copyRoomLink} style={{ display: 'inline-flex', marginTop: 'var(--spacing-xs)', border: '1px solid var(--border-accent)', borderRadius: 0 }}>
                            <LinkIcon size={14} />
                            <span>{roomCode}</span>
                            {copied && <CheckIcon size={14} color="var(--accent-green)" />}
                        </div>
                    </div>
                    {amIHost && (
                        <button
                            onClick={() => setShowSettings(!showSettings)}
                            className={`icon-btn ${showSettings ? 'active' : ''}`}
                        >
                            <SettingsIcon size={20} />
                        </button>
                    )}
                </div>

                {/* Category Selection (Host only, always visible in main view) */}
                {amIHost ? (
                    <div className="card mb-md" style={{ border: '2px solid var(--accent-purple)', borderRadius: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-sm)' }}>
                            <span className="input-label" style={{ marginBottom: 0, fontWeight: 800 }}>CHOOSE CATEGORY</span>
                            <span className="badge badge-purple" style={{ borderRadius: 0 }}>HOST'S CHOICE</span>
                        </div>
                        <div className="settings-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '8px' }}>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                                    style={{ fontSize: '0.75rem', padding: 'var(--spacing-sm)', fontWeight: 800, borderRadius: 0 }}
                                >
                                    {cat === 'random' ? 'RANDOM' : cat.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="card-sm mb-md text-center" style={{ borderLeft: '4px solid var(--accent-purple)', borderRadius: 0 }}>
                        <span className="text-xs text-muted">CATEGORY</span>
                        <p style={{ fontWeight: 800 }}>{selectedCategory.toUpperCase()}</p>
                    </div>
                )}

                {/* Settings Panel */}
                {showSettings && (
                    <div className="settings-panel fade-in mb-md">
                        <div className="settings-row">
                            <div className="settings-header">
                                <span className="settings-label">Number of Impostors</span>
                                <span className="settings-value">{imposterCount}</span>
                            </div>
                            <div className="settings-grid settings-grid-3">
                                {[1, 2, 3].map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => setImposterCount(num)}
                                        className={`btn ${imposterCount === num ? 'btn-primary' : 'btn-secondary'}`}
                                        style={{ borderRadius: 0 }}
                                    >
                                        {num}
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
                            Players ({players.length})
                        </span>
                        <div className="live-indicator">
                            <div className="live-dot"></div>
                            LIVE
                        </div>
                    </div>

                    {players.length === 0 ? (
                        <div className="empty-state">
                            <LoaderIcon size={24} />
                            <p className="mt-sm">Connecting...</p>
                        </div>
                    ) : (
                        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                            {players.map((player) => {
                                const isMe = player.id === (typeof window !== 'undefined' ? sessionStorage.getItem('playerId') : null);
                                const isHost = player.id === hostId;

                                return (
                                    <div key={player.id} className="player-item fade-in">
                                        <div className="player-avatar" style={{ borderRadius: 0 }}>
                                            {player.name[0].toUpperCase()}
                                        </div>
                                        <div className="player-info">
                                            <div className="player-name" style={{ fontWeight: 800, fontSize: '1rem' }}>
                                                {player.name.toUpperCase()}
                                                {isMe && <span className="badge badge-purple" style={{ marginLeft: '6px', borderRadius: 0 }}>YOU</span>}
                                                {isHost && <span className="badge badge-green" style={{ marginLeft: '6px', borderRadius: 0, background: 'white', color: 'black' }}>HOST</span>}
                                            </div>
                                            <div className="player-role" style={{ fontSize: '0.625rem', opacity: 0.6 }}>{isHost ? 'ORGANIZER' : 'PLAYER'}</div>
                                        </div>
                                        {!isMe && amIHost && (
                                            <button
                                                onClick={() => kickPlayer(player.id)}
                                                className="btn btn-secondary"
                                                style={{ padding: '8px', border: '2px solid var(--accent-red)', background: 'transparent', borderRadius: 0 }}
                                                title="Kick Player"
                                            >
                                                <TrashIcon size={16} color="var(--accent-red)" />
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Start Button */}
                <div>
                    {!canStart && players.length > 0 && (
                        <p className="text-xs text-center text-muted mb-sm">
                            MINIMUM 3 PLAYERS REQUIRED ({players.length}/3)
                        </p>
                    )}
                    {amIHost ? (
                        <button
                            onClick={startGame}
                            disabled={!canStart}
                            className="btn btn-primary btn-lg btn-full"
                            style={{ borderRadius: 0, padding: '1.25rem', fontWeight: 900 }}
                        >
                            <PlayIcon size={24} />
                            START GAME
                        </button>
                    ) : (
                        <div className="badge badge-purple btn-full text-center py-md" style={{ display: 'flex', justifyContent: 'center', padding: '1.25rem', borderRadius: 0 }}>
                            <LoaderIcon size={20} className="mr-sm" />
                            WAITING FOR HOST...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
