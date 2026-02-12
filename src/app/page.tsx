'use client';

import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useGameStore } from '@/lib/gameStore';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOContent from '@/components/SEOContent';
import Testimonials from '@/components/Testimonials';
import AdBanner from '@/components/AdBanner';

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

  // Pre-render / loading state - matches hydrated layout structure to prevent CLS
  if (!mounted) {
    return (
      <div className="app-container">
        <Navbar />
        <div className="ad-navbar-strip" aria-hidden="true" />
        <main className="flex-1">
          <div className="center-container">
            <div className="home-card" style={{ minHeight: '60vh' }} />
          </div>
        </main>
        <SEOContent />
        <Testimonials />
        <Footer />
      </div>
    );
  }

  const isLobby = gameState === 'lobby';

  return (
    <div className="app-container">
      <Navbar />

      {/* Thin ad strip below navbar */}
      <div className="ad-navbar-strip">
        <AdBanner slot="4426624617" format="horizontal" />
      </div>

      <main className="flex-1">
        {isLobby && (
          <Suspense fallback={
            <div className="center-container">
              <div className="home-card" style={{ minHeight: '60vh' }} />
            </div>
          }>
            <LobbyScreen />
          </Suspense>
        )}
        {gameState === 'distributing' && <CardReveal />}
        {gameState === 'playing' && <GamePlay />}
        {gameState === 'voting' && <Voting />}
        {gameState === 'result' && <Results />}
      </main>

      {isLobby && (
        <>
          <SEOContent />
          <Testimonials />
          <Footer />
        </>
      )}
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
