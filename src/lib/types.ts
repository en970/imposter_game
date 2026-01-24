export interface Player {
  id: string;
  name: string;
  role: 'civilian' | 'imposter' | null;
  hasSeenCard: boolean;
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
  currentUser: string | null;
  showingCard: boolean;

  // Actions
  setCurrentUser: (name: string) => void;
  createRoom: () => void;
  addPlayer: (name: string) => void;
  removePlayer: (id: string) => void;
  setImposterCount: (count: number) => void;
  setTimerDuration: (seconds: number) => void;
  startGame: () => void;
  showCard: () => void;
  hideCard: () => void;
  confirmCard: () => void;
  nextPlayerTurn: () => void;
  goToVoting: () => void;
  castVote: (voterId: string, targetId: string) => void;
  calculateResults: () => { imposters: Player[]; winners: 'civilians' | 'imposters'; voteResults: Record<string, number> };
  resetGame: () => void;     // Complete reset (new group)
  resetToLobby: () => void;  // Keep players (same group)
  decrementTimer: () => void;
}
