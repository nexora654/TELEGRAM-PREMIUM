import React, { useState, useEffect, useRef } from 'react';
import { LockOverlay } from './components/LockOverlay';
import { TelegramGroupPage } from './components/TelegramGroupPage';
import { triggerUnlockConfetti } from './utils/effects';

const STORAGE_KEY_UNLOCKED = 'telegram_x_is_unlocked_v1';

export default function App() {
  // Page Lock State
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_UNLOCKED);
      return saved === 'true';
    } catch {
      return false;
    }
  });

  // Canvas for confetti animation on unlock
  const confettiCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Persist lock status
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_UNLOCKED, isUnlocked ? 'true' : 'false');
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }, [isUnlocked]);

  // Handle unlock trigger
  const handleUnlock = () => {
    setIsUnlocked(true);
    triggerUnlockConfetti(confettiCanvasRef.current);
  };

  const handleLock = () => {
    setIsUnlocked(false);
  };

  return (
    <div className="min-h-screen bg-[#011C40] text-slate-100 flex flex-col font-sans selection:bg-[#54ACBF] selection:text-[#011C40]">
      {/* Particle Canvas for Unlock Celebrations */}
      <canvas
        ref={confettiCanvasRef}
        className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      />

      {/* Screen 1: Telegram Lock Screen (Shown when locked) */}
      {!isUnlocked && (
        <LockOverlay onUnlock={handleUnlock} />
      )}

      {/* Screen 2: Telegram VIP Group Page (Shown when unlocked) */}
      {isUnlocked && (
        <TelegramGroupPage onBackToLock={handleLock} />
      )}
    </div>
  );
}
