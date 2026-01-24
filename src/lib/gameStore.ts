import { create } from 'zustand';
import { GameStore, Player, GameState } from './types';
import { getRandomWord } from './words';

export const useGameStore = create<GameStore>((set, get) => ({
    // Initial State
    players: [],
    gameState: 'lobby',
    secretWord: '',
    category: '',
    imposterCount: 1,
    currentPlayerIndex: 0,
    timer: 60,
    timerDuration: 60,
    votes: {},
    roomCode: '',
    currentUser: null,
    showingCard: false,

    // Actions
    setCurrentUser: (name) => set({ currentUser: name }),

    createRoom: () => {
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        set({ roomCode: code });
    },

    joinRoom: (code) => set({ roomCode: code }),

    addPlayer: (name) => set((state) => ({
        players: [
            ...state.players,
            {
                id: Math.random().toString(36).substring(2, 9),
                name,
                role: null,
                hasSeenCard: false
            }
        ]
    })),

    removePlayer: (id) => set((state) => ({
        players: state.players.filter((p) => p.id !== id)
    })),

    setImposterCount: (count) => set({ imposterCount: count }),

    setTimerDuration: (seconds) => set({
        timerDuration: seconds,
        timer: seconds
    }),

    startGame: () => {
        const { players, imposterCount, timerDuration } = get();

        // Select Random Word
        const { word, category } = getRandomWord();

        // Assign Roles
        const shuffledPlayers = [...players].sort(() => 0.5 - Math.random());
        const imps = shuffledPlayers.slice(0, imposterCount);
        const civs = shuffledPlayers.slice(imposterCount);

        const playersWithRoles = players.map(p => {
            const isImposter = imps.find(i => i.id === p.id);
            return {
                ...p,
                role: isImposter ? 'imposter' : 'civilian',
                hasSeenCard: false
            } as Player;
        });

        set({
            players: playersWithRoles,
            secretWord: word,
            category: category,
            gameState: 'distributing', // Start with distributing cards
            currentPlayerIndex: 0,
            timer: timerDuration,
            votes: {}
        });
    },

    showCard: () => set({ showingCard: true }),

    hideCard: () => set({ showingCard: false }),

    confirmCard: () => {
        const { players, currentPlayerIndex } = get();
        const updatedPlayers = [...players];
        updatedPlayers[currentPlayerIndex].hasSeenCard = true;

        set({ players: updatedPlayers });

        // Move to next player or start game if all seen
        if (currentPlayerIndex < players.length - 1) {
            set({ currentPlayerIndex: currentPlayerIndex + 1 });
        } else {
            set({ gameState: 'playing', currentPlayerIndex: 0 }); // Start playing
        }
    },

    nextPlayerTurn: () => {
        const { players, currentPlayerIndex } = get();
        const nextIndex = (currentPlayerIndex + 1) % players.length;
        set({ currentPlayerIndex: nextIndex });
    },

    goToVoting: () => set({ gameState: 'voting' }),

    castVote: (voterId, targetId) => set((state) => ({
        votes: { ...state.votes, [voterId]: targetId }
    })),

    calculateResults: () => {
        const { players, votes } = get();

        // Calculate Vote Counts
        const voteResults: Record<string, number> = {};
        Object.values(votes).forEach(targetId => {
            voteResults[targetId] = (voteResults[targetId] || 0) + 1;
        });

        // Find Imposters
        const imposters = players.filter(p => p.role === 'imposter');

        // Determine Winner logic
        // Simple logic: if any imposter gets the most votes, Civilians win.
        // Else, Imposters win.

        // Find player with max votes
        let maxVotes = 0;
        Object.entries(voteResults).forEach(([_, count]) => {
            if (count > maxVotes) maxVotes = count;
        });

        const mostVotedPlayers = players.filter(p => (voteResults[p.id] || 0) === maxVotes);

        // If any of the most voted players is an imposter, Civilians win
        const imposterCaught = mostVotedPlayers.some(p => p.role === 'imposter');

        return {
            imposters,
            winners: imposterCaught ? 'civilians' : 'imposters',
            voteResults
        };
    },

    decrementTimer: () => set((state) => {
        if (state.timer > 0 && state.gameState === 'playing') {
            return { timer: state.timer - 1 };
        }
        return {};
    }),

    // Full Reset (New Group)
    resetGame: () => set({
        players: [],
        gameState: 'lobby',
        secretWord: '',
        category: '',
        timer: 60,
        votes: {},
        roomCode: '',
        currentUser: null
    }),

    // Keep Players (Same Group)
    resetToLobby: () => set((state) => ({
        gameState: 'lobby',
        secretWord: '',
        category: '',
        timer: state.timerDuration,
        votes: {},
        currentPlayerIndex: 0,
        showingCard: false,
        players: state.players.map(p => ({
            ...p,
            role: null,
            hasSeenCard: false
        }))
    }))

}));
