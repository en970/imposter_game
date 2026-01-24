'use client';

import { useGameStore } from '@/lib/gameStore';
import LobbyScreen from '@/components/LobbyScreen';
import CardReveal from '@/components/CardReveal';
import GamePlay from '@/components/GamePlay';
import Voting from '@/components/Voting';
import Results from '@/components/Results';

export default function Home() {
  const gameState = useGameStore((state) => state.gameState);

  return (
    <main className="font-sans">
      {gameState === 'lobby' && <LobbyScreen />}
      {gameState === 'distributing' && <CardReveal />}
      {gameState === 'playing' && <GamePlay />}
      {gameState === 'voting' && <Voting />}
      {gameState === 'result' && <Results />}
    </main>
  );
}
