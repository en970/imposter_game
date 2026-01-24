import { create } from 'zustand';
import { Player, GameState, GameStore } from './types';
import { getRandomWord } from './words';

function generateRoomCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}

function generateId(): string {
    return Math.random().toString(36).substring(2, 9);
}

export const useGameStore = create<GameStore>((set, get) => ({
    // Initial state
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
    currentUser: null,
    showingCard: false,

    // Actions
    setCurrentUser: (name: string) => set({ currentUser: name }),

    createRoom: () => set({ roomCode: generateRoomCode() }),

    addPlayer: (name: string, isBot = false) => set((state) => ({
        players: [...state.players, {
            id: generateId(),
            name,
            role: null,
            isBot,
            hasSeenCard: false
        }]
    })),

    removePlayer: (id: string) => set((state) => ({
        players: state.players.filter(p => p.id !== id)
    })),

    addBots: (count: number) => set((state) => {
        const existingBotCount = state.players.filter(p => p.isBot).length;
        const newBots: Player[] = [];
        for (let i = 0; i < count; i++) {
            newBots.push({
                id: generateId(),
                name: `Bot ${existingBotCount + i + 1}`,
                role: null,
                isBot: true,
                hasSeenCard: false
            });
        }
        return { players: [...state.players, ...newBots] };
    }),

    setImposterCount: (count: number) => set({ imposterCount: count }),

    setTimerDuration: (seconds: number) => set({ timerDuration: seconds, timer: seconds }),

    startGame: () => {
        const state = get();
        const { category, word } = getRandomWord();

        // Randomly assign imposters
        const playersCopy = [...state.players];
        const shuffled = playersCopy.sort(() => Math.random() - 0.5);

        const imposterIndices = new Set<number>();
        while (imposterIndices.size < Math.min(state.imposterCount, state.players.length - 1)) {
            imposterIndices.add(Math.floor(Math.random() * state.players.length));
        }

        const playersWithRoles = state.players.map((player, index) => ({
            ...player,
            role: imposterIndices.has(index) ? 'imposter' : 'civilian',
            hasSeenCard: false
        })) as Player[];

        // Shuffle player order for card distribution
        const shuffledPlayers = playersWithRoles.sort(() => Math.random() - 0.5);

        set({
            players: shuffledPlayers,
            secretWord: word,
            category,
            gameState: 'distributing',
            currentPlayerIndex: 0,
            timer: state.timerDuration,
            votes: {}
        });
    },

    showCard: () => set({ showingCard: true }),

    hideCard: () => set({ showingCard: false }),

    confirmCard: () => {
        const state = get();
        const updatedPlayers = [...state.players];
        updatedPlayers[state.currentPlayerIndex] = {
            ...updatedPlayers[state.currentPlayerIndex],
            hasSeenCard: true
        };

        const nextIndex = state.currentPlayerIndex + 1;

        if (nextIndex >= state.players.length) {
            // All players have seen their cards
            set({
                players: updatedPlayers,
                gameState: 'playing',
                currentPlayerIndex: 0,
                showingCard: false
            });
        } else {
            set({
                players: updatedPlayers,
                currentPlayerIndex: nextIndex,
                showingCard: false
            });
        }
    },

    nextPlayerTurn: () => set((state) => ({
        currentPlayerIndex: (state.currentPlayerIndex + 1) % state.players.length
    })),

    goToVoting: () => set({ gameState: 'voting', votes: {} }),

    castVote: (voterId: string, targetId: string) => set((state) => ({
        votes: { ...state.votes, [voterId]: targetId }
    })),

    calculateResults: () => {
        const state = get();
        const imposters = state.players.filter(p => p.role === 'imposter');

        // Count votes
        const voteResults: Record<string, number> = {};
        state.players.forEach(p => { voteResults[p.id] = 0; });
        Object.values(state.votes).forEach(targetId => {
            voteResults[targetId] = (voteResults[targetId] || 0) + 1;
        });

        // Find most voted
        let maxVotes = 0;
        let mostVoted = '';
        Object.entries(voteResults).forEach(([id, votes]) => {
            if (votes > maxVotes) {
                maxVotes = votes;
                mostVoted = id;
            }
        });

        // Check if imposter was caught
        const imposterIds = imposters.map(p => p.id);
        const civilianWins = imposterIds.includes(mostVoted);

        return {
            imposters,
            winners: civilianWins ? 'civilians' : 'imposters',
            voteResults
        };
    },

    resetGame: () => set({
        players: [],
        gameState: 'lobby',
        secretWord: '',
        category: '',
        currentPlayerIndex: 0,
        votes: {},
        roomCode: '',
        currentUser: null,
        showingCard: false
    }),

    decrementTimer: () => set((state) => ({
        timer: Math.max(0, state.timer - 1)
    }))
}));
