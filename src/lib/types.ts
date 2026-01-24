export interface Player {
  id: string;
  name: string;
  role: 'civilian' | 'imposter' | null;
  isBot: boolean;
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
  addPlayer: (name: string, isBot?: boolean) => void;
  removePlayer: (id: string) => void;
  addBots: (count: number) => void;
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
  resetGame: () => void;
  decrementTimer: () => void;
}
