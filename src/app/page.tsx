'use client';

import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useGameStore } from '@/lib/gameStore';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOContent from '@/components/SEOContent';

// Dynamically import interactive components to avoid hydration mismatch
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

  if (!mounted) {
    return (
      <div className="app-container">
        <Navbar />
        <main className="flex-1 min-h-[60vh]">
          <div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>
        </main>
        <SEOContent />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Navbar />
      <main className="flex-1">
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
      {gameState === 'lobby' && <SEOContent />}
      {gameState === 'lobby' && <Footer />}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f]" />}>
      <GameContent />
    </Suspense>
  );
}


