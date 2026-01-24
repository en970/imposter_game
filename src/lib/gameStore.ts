import { create } from 'zustand';
import { GameStore, Player } from './types';
import { getRandomWord } from './words';
import {
    createRoomInFirebase,
    joinRoomInFirebase,
    updateRoomState,
    updatePlayerData,
    subscribeToRoom,
    checkRoomExists
} from './firebase';

// Generate unique player ID
const generatePlayerId = () => Math.random().toString(36).substring(2, 12);

// Local player ID (persists in session)
let localPlayerId: string | null = null;
const getLocalPlayerId = () => {
    if (!localPlayerId) {
        localPlayerId = sessionStorage.getItem('playerId') || generatePlayerId();
        sessionStorage.setItem('playerId', localPlayerId);
    }
    return localPlayerId;
};

// Unsubscribe function holder
let unsubscribeFromRoom: (() => void) | null = null;

export const useGameStore = create<GameStore>((set, get) => ({
    // Initial State
    players: [],
    gameState: 'lobby',
    secretWord: '',
    category: '',
    imposterCount: 1,
    currentPlayerIndex: 0,
    timer: 120,
    timerDuration: 120,
    votes: {},
    roomCode: '',
    hostId: null,
    currentUser: null,
    showingCard: false,
    selectedCategory: 'random',

    // Actions
    setCurrentUser: (name) => set({ currentUser: name }),

    setSelectedCategory: async (category) => {
        const { roomCode, hostId } = get();
        const odaPlayerId = getLocalPlayerId();
        if (roomCode && hostId === odaPlayerId) {
            try {
                await updateRoomState(roomCode, { selectedCategory: category });
            } catch (error) {
                console.error('Failed to update category:', error);
            }
        }
        set({ selectedCategory: category });
    },

    createRoom: async () => {
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        const odaPlayerId = getLocalPlayerId();
        const { currentUser } = get();

        if (!currentUser) return;

        try {
            await createRoomInFirebase(code, odaPlayerId, currentUser);
            set({ roomCode: code });
            if (typeof window !== 'undefined') sessionStorage.setItem('lastRoomCode', code);

            // Subscribe to room updates
            subscribeToRoomUpdates(code, set, get);
        } catch (error) {
            console.error('Failed to create room:', error);
        }
    },

    joinRoom: async (code: string) => {
        const { currentUser } = get();
        const odaPlayerId = getLocalPlayerId();

        try {
            const exists = await checkRoomExists(code);
            if (!exists) {
                console.error('Room does not exist');
                return;
            }

            if (currentUser) {
                await joinRoomInFirebase(code, odaPlayerId, currentUser);
            }

            set({ roomCode: code });
            if (typeof window !== 'undefined') sessionStorage.setItem('lastRoomCode', code);

            // Subscribe to room updates
            subscribeToRoomUpdates(code, set, get);
        } catch (error) {
            console.error('Failed to join room:', error);
        }
    },

    addPlayer: async (name: string) => {
        const { roomCode } = get();
        const odaPlayerId = getLocalPlayerId();

        if (!roomCode) return;

        try {
            await joinRoomInFirebase(roomCode, odaPlayerId, name);
        } catch (error) {
            console.error('Failed to add player:', error);
        }
    },

    removePlayer: async (id: string) => {
        // Not needed for now - players leave when they close the page
    },

    setImposterCount: async (count: number) => {
        const { roomCode } = get();
        if (!roomCode) {
            set({ imposterCount: count });
            return;
        }

        try {
            await updateRoomState(roomCode, { imposterCount: count });
        } catch (error) {
            console.error('Failed to update imposter count:', error);
        }
    },

    setTimerDuration: async (seconds: number) => {
        const { roomCode } = get();
        if (!roomCode) {
            set({ timerDuration: seconds, timer: seconds });
            return;
        }

        try {
            await updateRoomState(roomCode, { timerDuration: seconds, timer: seconds });
        } catch (error) {
            console.error('Failed to update timer:', error);
        }
    },

    startGame: async () => {
        const { roomCode, imposterCount, timerDuration, hostId } = get();
        const odaPlayerId = getLocalPlayerId();

        // Only host can start
        if (!roomCode || hostId !== odaPlayerId) return;

        try {
            // Get current players from Firebase
            const { selectedCategory, players } = get();
            const { word, category } = getRandomWord(selectedCategory);

            // Assign roles
            const shuffledPlayers = [...players].sort(() => 0.5 - Math.random());
            const imps = shuffledPlayers.slice(0, imposterCount);

            // Prepare player updates
            const playerUpdates: Record<string, unknown> = {};
            players.forEach((pPlayer) => {
                const isImposter = imps.find((i) => i.id === pPlayer.id);
                playerUpdates[`players/${pPlayer.id}/odaRole`] = isImposter ? 'imposter' : 'civilian';
                playerUpdates[`players/${pPlayer.id}/hasSeenCard`] = false;
            });

            // Update room state
            await updateRoomState(roomCode, {
                ...playerUpdates,
                secretWord: word,
                category: category,
                gameState: 'distributing',
                currentPlayerIndex: 0,
                timer: timerDuration === 9999 ? 9999 : timerDuration,
                votes: {}
            });
        } catch (error) {
            console.error('Failed to start game:', error);
        }
    },

    showCard: () => set({ showingCard: true }),

    hideCard: () => set({ showingCard: false }),

    confirmCard: async () => {
        const { roomCode, players, currentUser } = get();

        // Find current user's player ID
        const myPlayer = players.find(p => p.name === currentUser);
        if (!roomCode || !myPlayer) return;

        try {
            await updatePlayerData(roomCode, myPlayer.id, { hasSeenCard: true });

            // Check if all players have seen their cards
            const updatedPlayers = players.map(p =>
                p.id === myPlayer.id ? { ...p, hasSeenCard: true } : p
            );
            const allSeen = updatedPlayers.every(p => p.hasSeenCard);

            if (allSeen) {
                await updateRoomState(roomCode, { gameState: 'playing', currentPlayerIndex: 0 });
            }
        } catch (error) {
            console.error('Failed to confirm card:', error);
        }

        set({ showingCard: false });
    },

    nextPlayerTurn: async () => {
        const { roomCode, players, currentPlayerIndex, currentUser } = get();
        if (!roomCode) return;

        // Only the current player can advance the turn
        const currentPlayer = players[currentPlayerIndex];
        if (currentPlayer?.name !== currentUser) return;

        const nextIndex = (currentPlayerIndex + 1) % players.length;

        try {
            await updateRoomState(roomCode, { currentPlayerIndex: nextIndex });
        } catch (error) {
            console.error('Failed to advance turn:', error);
        }
    },

    goToVoting: async () => {
        const { roomCode, hostId } = get();
        const odaPlayerId = getLocalPlayerId();

        // Only host can start voting
        if (!roomCode || hostId !== odaPlayerId) return;

        try {
            await updateRoomState(roomCode, { gameState: 'voting' });
        } catch (error) {
            console.error('Failed to go to voting:', error);
        }
    },

    castVote: async (voterId: string, targetId: string) => {
        const { roomCode, votes, players } = get();
        if (!roomCode) return;

        const newVotes = { ...votes, [voterId]: targetId };

        try {
            await updateRoomState(roomCode, { [`votes/${voterId}`]: targetId });

            // Check if all players voted
            if (Object.keys(newVotes).length === players.length) {
                await updateRoomState(roomCode, { gameState: 'result' });
            }
        } catch (error) {
            console.error('Failed to cast vote:', error);
        }
    },

    calculateResults: () => {
        const { players, votes } = get();

        const voteResults: Record<string, number> = {};
        Object.values(votes).forEach((gTargetId) => {
            voteResults[gTargetId] = (voteResults[gTargetId] || 0) + 1;
        });

        const imposters = players.filter((pp) => pp.role === 'imposter');

        let maxVotes = 0;
        Object.entries(voteResults).forEach(([_, count]) => {
            if (count > maxVotes) maxVotes = count;
        });

        const mostVotedPlayers = players.filter((pp) => (voteResults[pp.id] || 0) === maxVotes);
        const imposterCaught = mostVotedPlayers.some((pp) => pp.role === 'imposter');

        return {
            imposters,
            winners: imposterCaught ? 'civilians' : 'imposters',
            voteResults
        };
    },

    decrementTimer: async () => {
        const { timer, gameState, roomCode, hostId } = get();
        const odaPlayerId = getLocalPlayerId();

        // Only host updates the shared timer
        if (roomCode && hostId === odaPlayerId && gameState === 'playing' && timer > 0 && timer !== 9999) {
            const newTimer = timer - 1;
            try {
                // To minimize Firebase spam, host updates locally and syncs to Firebase
                // Actually, let's keep it simple and update Firebase every second for now 
                // since consistency is key for all players.
                await updateRoomState(roomCode, { timer: newTimer });
            } catch {
                // Ignore sync errors
            }
        }
    },

    resetGame: async () => {
        const { roomCode } = get();

        // Unsubscribe from room
        if (unsubscribeFromRoom) {
            unsubscribeFromRoom();
            unsubscribeFromRoom = null;
        }

        set({
            players: [],
            gameState: 'lobby',
            secretWord: '',
            category: '',
            timer: 120,
            votes: {},
            roomCode: '',
            currentUser: null
        });
    },

    resetToLobby: async () => {
        const { roomCode, timerDuration, players, hostId } = get();
        const odaPlayerId = getLocalPlayerId();

        // Only host can reset
        if (!roomCode || hostId !== odaPlayerId) return;

        try {
            // Reset player roles
            const playerUpdates: Record<string, unknown> = {};
            players.forEach((pp) => {
                playerUpdates[`players/${pp.id}/odaRole`] = null;
                playerUpdates[`players/${pp.id}/hasSeenCard`] = false;
            });

            await updateRoomState(roomCode, {
                ...playerUpdates,
                gameState: 'lobby',
                secretWord: '',
                category: '',
                timer: timerDuration,
                votes: {},
                currentPlayerIndex: 0
            });
        } catch (error) {
            console.error('Failed to reset to lobby:', error);
        }
    }
}));

// Subscribe to room updates from Firebase
function subscribeToRoomUpdates(
    roomCode: string,
    set: (state: Partial<GameStore>) => void,
    get: () => GameStore
) {
    // Unsubscribe from previous room if any
    if (unsubscribeFromRoom) {
        unsubscribeFromRoom();
    }

    unsubscribeFromRoom = subscribeToRoom(roomCode, (data: unknown) => {
        if (!data) return;

        const roomData = data as Record<string, unknown>;

        // Convert players object to array
        const playersObj = (roomData.players as Record<string, unknown>) || {};
        const playersArray: Player[] = Object.entries(playersObj).map(([id, pData]) => {
            const playerData = pData as Record<string, unknown>;
            return {
                id,
                name: (playerData.name as string) || 'Unknown',
                role: (playerData.odaRole as 'civilian' | 'imposter' | null) || null,
                hasSeenCard: (playerData.hasSeenCard as boolean) || false
            };
        }).sort((a, b) => {
            // Sort by timestamp if available
            const aTime = (playersObj[a.id] as Record<string, unknown>)?.odaTimestamp as number || 0;
            const bTime = (playersObj[b.id] as Record<string, unknown>)?.odaTimestamp as number || 0;
            return aTime - bTime;
        });

        // Convert votes object
        const votesObj = (roomData.votes as Record<string, string>) || {};

        // Update local state
        set({
            players: playersArray,
            gameState: (roomData.gameState as GameStore['gameState']) || 'lobby',
            secretWord: (roomData.secretWord as string) || '',
            category: (roomData.category as string) || '',
            imposterCount: (roomData.imposterCount as number) || 1,
            currentPlayerIndex: (roomData.currentPlayerIndex as number) || 0,
            timer: (roomData.timer as number) || 120,
            timerDuration: (roomData.timerDuration as number) || 120,
            hostId: (roomData.hostId as string) || null,
            selectedCategory: (roomData.selectedCategory as string) || 'random',
            votes: votesObj
        });
    });
}
