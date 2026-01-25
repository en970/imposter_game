'use client';

import { useState, useEffect } from 'react';
import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';
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
        language,
        setCurrentUser,
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

    const t = translations[language];

    const [nameInput, setNameInput] = useState('');
    const [joinCodeInput, setJoinCodeInput] = useState('');
    const [editingName, setEditingName] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isJoining, setIsJoining] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showCategorySelect, setShowCategorySelect] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const stored = getStoredUsername();
        if (stored) {
            setNameInput(stored);
            setCurrentUser(stored);
        }
    }, [setCurrentUser]);

    const handleSaveName = () => {
        const trimmed = nameInput.trim();
        if (trimmed) {
            setStoredUsername(trimmed);
            setCurrentUser(trimmed);
            setEditingName(false);
        }
    };

    const handleCreateRoom = async () => {
        const trimmed = nameInput.trim();
        if (!trimmed) return;
        setIsCreating(true);
        // Ensure user is set in store
        setCurrentUser(trimmed);
        setStoredUsername(trimmed);
        await createRoom();
        setIsCreating(false);
    };

    const handleJoinRoom = async () => {
        const trimmed = nameInput.trim();
        if (!trimmed || !joinCodeInput.trim()) return;
        setIsJoining(true);
        setCurrentUser(trimmed);
        setStoredUsername(trimmed);
        await joinRoom(joinCodeInput.toUpperCase());
        setIsJoining(false);
    };

    const copyRoomLink = () => {
        navigator.clipboard.writeText(roomCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const categoriesList = ['random', 'Genel', 'Yemek', 'Eşya', 'Şehirler', 'Diziler', 'Filmler', 'Spor', 'Hayvanlar'];
    const canStart = players.length >= 3;

    // Join/Create Screen
    if (!roomCode) {
        return (
            <div className="center-container">
                <div className="home-card fade-in" style={{ padding: 'var(--spacing-md)', background: 'transparent' }}>
                    {/* Brand Name - Dynamic based on Navbar style */}
                    <div className="text-center mb-lg">
                        <h1 className="title-xl" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem' }}>
                            {t.appName.split('Casusu')[0].split('Imposter')[0]}
                            <span style={{ color: 'var(--border-accent)' }}>
                                {language === 'tr' ? 'Casusu' : 'Imposter'}
                            </span>
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                            {t.tagline}
                        </p>
                    </div>

                    {/* How to Play / Rules */}
                    <div className="card mb-lg rules-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                        <h4 className="text-xs font-bold mb-md" style={{ color: 'var(--border-accent)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px' }}>{t.howToPlay}</h4>
                        <ul className="rules-list" style={{ paddingLeft: 0, fontSize: '0.875rem', lineHeight: '1.8', color: 'var(--text-secondary)', listStyle: 'none' }}>
                            {t.rules.map((rule, idx) => (
                                <li key={idx} className="mb-xs" style={{ padding: '4px 0' }}>{rule}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="desktop-grid-2">
                        {/* Left Column: Actions */}
                        <div>
                            {/* Username Section */}
                            <div className="card mb-md">
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                                    <UserIcon size={16} color="var(--border-accent)" />
                                    <span className="input-label" style={{ marginBottom: 0 }}>{t.username}</span>
                                </div>

                                {(getStoredUsername() || currentUser) && !editingName ? (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                        <div style={{ flex: 1, padding: 'var(--spacing-sm) var(--spacing-md)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
                                            {currentUser || getStoredUsername()}
                                        </div>
                                        <button onClick={() => setEditingName(true)} className="btn btn-secondary" title={language === 'tr' ? 'Düzenle' : 'Edit'}>
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
                                            placeholder={t.enterName}
                                            style={{ flex: 1 }}
                                            autoFocus={editingName}
                                        />
                                        <button onClick={handleSaveName} disabled={!nameInput.trim()} className="btn btn-primary" title={language === 'tr' ? 'Kaydet' : 'Save'}>
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
                                style={{ boxShadow: 'var(--shadow-lg)' }}
                            >
                                {isCreating ? <> <LoaderIcon size={20} className="spin" /> {t.connecting} </> : <> <PlusIcon size={20} /> {t.createRoom.toUpperCase()} </>}
                            </button>

                            {/* Join Room */}
                            <div className="card">
                                <span className="input-label">{t.joinRoom.toUpperCase()}</span>
                                <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                    <input
                                        type="text"
                                        className="input"
                                        value={joinCodeInput}
                                        onChange={(e) => setJoinCodeInput(e.target.value.toUpperCase())}
                                        placeholder={t.roomCodePlaceholder}
                                        style={{ flex: 1, fontFamily: 'monospace', letterSpacing: '0.1em' }}
                                        maxLength={6}
                                    />
                                    <button onClick={handleJoinRoom} disabled={!nameInput.trim() || !joinCodeInput.trim() || isJoining} className="btn btn-primary">
                                        {isJoining ? <LoaderIcon size={18} className="spin" /> : <PlayIcon size={18} />}
                                    </button>
                                </div>
                                {typeof window !== 'undefined' && sessionStorage.getItem('lastRoomCode') && !joinCodeInput && (
                                    <button
                                        onClick={() => setJoinCodeInput(sessionStorage.getItem('lastRoomCode') || '')}
                                        className="text-xs mt-sm"
                                        style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, color: 'var(--border-accent)' }}
                                    >
                                        {t.rejoinLastRoom} {sessionStorage.getItem('lastRoomCode')}
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Error Notice */}
                        <div className="desktop-only">
                            {duplicateNameError && (
                                <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'var(--accent-red)', border: '1px solid var(--accent-red)' }}>
                                    <AlertIcon size={48} className="mb-md" />
                                    <h3 className="title-md">{language === 'tr' ? 'Hata!' : 'Error!'}</h3>
                                    <p className="description" style={{ fontSize: '0.875rem' }}>{duplicateNameError}</p>
                                    <button onClick={clearError} className="btn btn-secondary mt-lg">{language === 'tr' ? 'Anladım' : 'Understood'}</button>
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
            <div className="home-card" style={{ background: 'transparent' }}>
                {/* Header */}
                <div className="header fade-in">
                    <button onClick={resetGame} className="icon-btn">
                        <ArrowLeftIcon size={20} />
                    </button>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <h1 className="header-title" style={{ fontSize: '1.25rem', fontWeight: 800 }}>{t.appName.toUpperCase()}</h1>
                        <div className="room-code" onClick={copyRoomLink} style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
                            <LinkIcon size={14} color="var(--border-accent)" />
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

                {/* Category Selection */}
                {amIHost ? (
                    <div className="card mb-md" style={{ border: '1px solid var(--border-accent)' }}>
                        <div
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                            onClick={() => setShowCategorySelect(!showCategorySelect)}
                        >
                            <div>
                                <span className="input-label" style={{ marginBottom: '2px', fontWeight: 700, color: 'var(--border-accent)' }}>{t.category}</span>
                                <p style={{ fontWeight: 800, fontSize: '1.25rem', color: 'white' }}>
                                    {(t.categories[selectedCategory as keyof typeof t.categories] || selectedCategory).toUpperCase()}
                                </p>
                            </div>
                            <button className="btn btn-secondary" style={{ padding: '8px 12px', fontSize: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                                {showCategorySelect ? (language === 'tr' ? 'Kapat' : 'Close') : (language === 'tr' ? 'Değiştir' : 'Change')}
                            </button>
                        </div>

                        {showCategorySelect && (
                            <div className="fade-in mt-md pt-md" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                                <div className="settings-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '8px' }}>
                                    {categoriesList.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => {
                                                setSelectedCategory(cat);
                                                setShowCategorySelect(false);
                                            }}
                                            className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                                            style={{ fontSize: '0.7rem', padding: '10px 4px', fontWeight: 600, minHeight: '44px' }}
                                        >
                                            {cat === 'random' ? t.categories.random : t.categories[cat as keyof typeof t.categories] || cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="card-sm mb-md text-center" style={{ borderLeft: '4px solid var(--border-accent)' }}>
                        <span className="text-xs text-muted">{t.category}</span>
                        <p style={{ fontWeight: 800, color: 'white' }}>{(t.categories[selectedCategory as keyof typeof t.categories] || selectedCategory).toUpperCase()}</p>
                    </div>
                )}

                {/* Settings Panel */}
                {showSettings && (
                    <div className="settings-panel fade-in mb-md">
                        <div className="settings-row">
                            <div className="settings-header">
                                <span className="settings-label">{t.imposterCount}</span>
                                <span className="settings-value">{imposterCount}</span>
                            </div>
                            <div className="settings-grid settings-grid-3">
                                {[1, 2, 3].map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => setImposterCount(num)}
                                        className={`btn ${imposterCount === num ? 'btn-primary' : 'btn-secondary'}`}
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
                            <UsersIcon size={16} color="var(--border-accent)" />
                            {t.playersHeading} ({players.length})
                        </span>
                        <div className="live-indicator">
                            <div className="live-dot"></div>
                            {t.live}
                        </div>
                    </div>

                    <div style={{ maxHeight: '350px', overflowY: 'auto' }}>
                        {players.map((player) => {
                            const isMe = player.id === (typeof window !== 'undefined' ? sessionStorage.getItem('playerId') : null);
                            const isHost = player.id === hostId;

                            return (
                                <div key={player.id} className="player-item fade-in">
                                    <div className="player-avatar" style={{ background: 'var(--bg-tertiary)', color: 'var(--border-accent)', border: '1px solid var(--border-subtle)' }}>
                                        {player.name[0].toUpperCase()}
                                    </div>
                                    <div className="player-info">
                                        <div className="player-name">
                                            {player.name}
                                            {isMe && <span className="badge" style={{ background: 'var(--accent-purple-glow)', color: 'white' }}>{t.you}</span>}
                                            {isHost && <span className="badge" style={{ background: 'white', color: 'black' }}>{t.host}</span>}
                                        </div>
                                        <div className="player-role">{isHost ? t.organizer : t.player}</div>
                                    </div>
                                    {!isMe && amIHost && (
                                        <button
                                            onClick={() => kickPlayer(player.id)}
                                            className="btn btn-secondary"
                                            style={{ padding: '8px', border: '1px solid var(--accent-red)', background: 'transparent' }}
                                            title={t.kickPlayer}
                                        >
                                            <TrashIcon size={16} color="var(--accent-red)" />
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Start Button */}
                <div>
                    {!canStart && players.length > 0 && (
                        <p className="text-xs text-center text-muted mb-sm">
                            {t.minPlayers} ({players.length}/3)
                        </p>
                    )}
                    {amIHost ? (
                        <button
                            onClick={startGame}
                            disabled={!canStart}
                            className="btn btn-primary btn-lg btn-full"
                            style={{ boxShadow: 'var(--shadow-lg)' }}
                        >
                            <PlayIcon size={24} />
                            {t.startGame}
                        </button>
                    ) : (
                        <div className="badge btn-full text-center py-md" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
                            <LoaderIcon size={20} className="spin mr-sm" />
                            {t.waitingForHost}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
