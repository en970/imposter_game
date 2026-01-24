export interface Player {
  id: string;
  name: string;
  role: 'civilian' | 'imposter' | null;
  hasSeenCard: boolean;
  isKicked?: boolean;
}

export type GameState = 'lobby' | 'distributing' | 'playing' | 'voting' | 'result';

export interface GameStore {
  // State
  players: Player[];
  gameState: GameState;
  secretWord: string;
  category: string;
  imposterCount: number;
  currentPlayerIndex: number;
  timer: number;
  timerDuration: number;
  votes: Record<string, string>;
  roomCode: string;
  hostId: string | null;
  currentUser: string | null;
  showingCard: boolean;
  selectedCategory: string;
  duplicateNameError: string | null;

  // Actions (many are now async for Firebase)
  setCurrentUser: (name: string) => void;
  setSelectedCategory: (category: string) => void;
  createRoom: () => Promise<void> | void;
  joinRoom: (code: string) => Promise<void> | void;
  addPlayer: (name: string) => Promise<void> | void;
  removePlayer: (id: string) => Promise<void> | void;
  setImposterCount: (count: number) => Promise<void> | void;
  setTimerDuration: (seconds: number) => Promise<void> | void;
  startGame: () => Promise<void> | void;
  showCard: () => void;
  hideCard: () => void;
  confirmCard: () => Promise<void> | void;
  nextPlayerTurn: () => Promise<void> | void;
  goToVoting: () => Promise<void> | void;
  castVote: (voterId: string, targetId: string) => Promise<void> | void;
  calculateResults: () => { imposters: Player[]; winners: 'civilians' | 'imposters'; voteResults: Record<string, number> };
  resetGame: () => Promise<void> | void;
  resetToLobby: () => Promise<void> | void;
  kickPlayer: (playerId: string) => Promise<void> | void;
  clearError: () => void;
  decrementTimer: () => Promise<void> | void;
}
