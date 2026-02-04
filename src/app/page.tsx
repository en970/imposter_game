'use client';

import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useGameStore } from '@/lib/gameStore';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOContent from '@/components/SEOContent';
import Testimonials from '@/components/Testimonials';

// Dynamically import interactive components to avoid hydration mismatch
const LobbyScreen = dynamic(() => import('@/components/LobbyScreen'), { ssr: false });
const CardReveal = dynamic(() => import('@/components/CardReveal'), { ssr: false });
const GamePlay = dynamic(() => import('@/components/GamePlay'), { ssr: false });
const Voting = dynamic(() => import('@/components/Voting'), { ssr: false });
const Results = dynamic(() => import('@/components/Results'), { ssr: false });

function GameContent() {
  const gameState = useGameStore((state) => state.gameState);
  const roomCode = useGameStore((state) => state.roomCode);
  const joinRoom = useGameStore((state) => state.joinRoom);
  const setCurrentUser = useGameStore((state) => state.setCurrentUser);
  const setLanguage = useGameStore((state) => state.setLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Restore language preference
    const savedLang = localStorage.getItem('kelimeavi_lang');
    if (savedLang === 'tr' || savedLang === 'en') {
      setLanguage(savedLang);
    }

    // Auto-rejoin last room on refresh
    const lastRoom = sessionStorage.getItem('lastRoomCode');
    const storedName = localStorage.getItem('kelimeavi_username');
    const currentRoomCode = useGameStore.getState().roomCode;

    if (lastRoom && storedName && !currentRoomCode) {
      setCurrentUser(storedName);
      joinRoom(lastRoom);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
      {gameState === 'lobby' && <Testimonials />}
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


