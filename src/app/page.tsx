'use client';

import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useGameStore } from '@/lib/gameStore';

// Dynamically import components to avoid hydration mismatch
const LobbyScreen = dynamic(() => import('@/components/LobbyScreen'), { ssr: false });
const CardReveal = dynamic(() => import('@/components/CardReveal'), { ssr: false });
const GamePlay = dynamic(() => import('@/components/GamePlay'), { ssr: false });
const Voting = dynamic(() => import('@/components/Voting'), { ssr: false });
const Results = dynamic(() => import('@/components/Results'), { ssr: false });

function GameContent() {
  const gameState = useGameStore((state) => state.gameState);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-purple-500/30">
      {gameState === 'lobby' && (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>}>
          <LobbyScreen />
        </Suspense>
      )}
      {gameState === 'distributing' && <CardReveal />}
      {gameState === 'playing' && <GamePlay />}
      {gameState === 'voting' && <Voting />}
      {gameState === 'result' && <Results />}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f]" />}>
      <GameContent />
    </Suspense>
  );
}
