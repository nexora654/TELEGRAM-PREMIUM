import React, { useState } from 'react';
import { Lock, Unlock, Key, Sparkles, Eye, Video, ShieldCheck } from 'lucide-react';
import { playUnlockSound } from '../utils/effects';
import { TelegramLogo } from './TelegramLogo';

interface LockOverlayProps {
  onUnlock: () => void;
}

export const LockOverlay: React.FC<LockOverlayProps> = ({ onUnlock }) => {
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleUnlockClick = () => {
    setIsUnlocking(true);
    playUnlockSound();
    setTimeout(() => {
      onUnlock();
      setIsUnlocking(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#011C40]/95 backdrop-blur-xl transition-all duration-500 py-6 sm:py-10 px-3 sm:px-6 flex flex-col items-center justify-start sm:justify-center">
      {/* Ambient background glowing orbs in Luna palette */}
      <div className="fixed top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#54ACBF]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#26658C]/35 rounded-full blur-3xl pointer-events-none" />

      {/* Central Unlock Card */}
      <div className="relative w-full max-w-xl rounded-2xl sm:rounded-3xl border border-[#26658C]/70 bg-[#023859]/95 p-4 sm:p-7 md:p-9 shadow-2xl shadow-[#011C40] text-center my-auto transition-all">
        
        {/* Telegram Original Logo placed directly above "Telegram Premium" */}
        <div className="mx-auto mb-4 sm:mb-5 flex flex-col items-center justify-center">
          <div className="relative group transition-transform duration-300 hover:scale-105">
            {/* Glowing cyan/blue backdrop aura */}
            <div className="absolute inset-0 rounded-full bg-[#24A1DE]/35 blur-xl scale-125 pointer-events-none animate-pulse" />
            
            {/* Original Telegram Paper Plane Logo with 'X' badge - 100% visible on all mobile screens */}
            <TelegramLogo size={76} withXBadge={true} className="relative z-10 sm:scale-110" />

            {/* Lock/Unlock status mini indicator */}
            <div className="absolute -bottom-1 -left-1 z-20 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#023859] border-2 border-[#54ACBF] text-[#A7EBF2] shadow-md shadow-[#011C40]">
              {isUnlocking ? (
                <Unlock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400 animate-spin" />
              ) : (
                <Lock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#A7EBF2]" />
              )}
            </div>
          </div>
        </div>

        {/* Instructions in Bengali and English */}
        <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wider text-[#A7EBF2] uppercase bg-[#011C40]/60 border border-[#26658C]/60 px-3 py-1 rounded-full shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#A7EBF2]" />
              Telegram Premium
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-snug sm:leading-tight">
            পেজটি আনলক করতে নিচের বাটনে ক্লিক করুন
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-md mx-auto leading-relaxed px-1">
            Telegram X-এ বা~চ্চা~দের এবং ধ~র্ষ~ণের সম্পূর্ণ ভিডিও ফ্রিতে দেখতে চাইলে নিচের বাটনটিতে ক্লিক করে আনলক করুন।
          </p>

          <p className="text-[11px] sm:text-xs text-[#A7EBF2]/80 font-medium">
            Click the glowing button below to unlock Telegram X.
          </p>
        </div>

        {/* Curated Preview Info - Perfectly Balanced 3 Column Stats Card on All Devices */}
        <div className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-[#011C40]/90 border border-[#26658C]/70 shadow-lg shadow-[#011C40]/50 overflow-hidden">
          <div className="grid grid-cols-3 divide-x divide-[#26658C]/60 text-center py-2 sm:py-3.5">
            
            {/* Stat 1: সংরক্ষিত ভিডিও */}
            <div className="px-1.5 sm:px-3 flex flex-col items-center justify-center space-y-0.5 sm:space-y-1 min-w-0">
              <span className="text-[10px] sm:text-xs text-slate-300 font-medium truncate max-w-full">
                সংরক্ষিত ভিডিও
              </span>
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-base md:text-lg font-bold sm:font-extrabold text-white">
                <Video className="h-3 w-3 sm:h-4 sm:w-4 text-[#A7EBF2] shrink-0" />
                <span className="tabular-nums truncate">৪,৫১৮ টি</span>
              </div>
            </div>

            {/* Stat 2: ইন্টারেস্টিং ফ্যাক্টস */}
            <div className="px-1.5 sm:px-3 flex flex-col items-center justify-center space-y-0.5 sm:space-y-1 min-w-0">
              <span className="text-[10px] sm:text-xs text-slate-300 font-medium truncate max-w-full">
                ইন্টারেস্টিং ফ্যাক্টস
              </span>
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-base md:text-lg font-bold sm:font-extrabold text-[#A7EBF2]">
                <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4 text-[#54ACBF] shrink-0" />
                <span className="truncate">১০০% ভেরিফাইড</span>
              </div>
            </div>

            {/* Stat 3: কাস্টম আপলোড */}
            <div className="px-1.5 sm:px-3 flex flex-col items-center justify-center space-y-0.5 sm:space-y-1 min-w-0">
              <span className="text-[10px] sm:text-xs text-slate-300 font-medium truncate max-w-full">
                কাস্টম আপলোড
              </span>
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-base md:text-lg font-bold sm:font-extrabold text-emerald-400">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 animate-pulse shadow-xs shadow-emerald-400 shrink-0" />
                <span className="truncate">সক্রিয়</span>
              </div>
            </div>

          </div>
        </div>

        {/* Main Unlock Action Buttons */}
        <div className="space-y-3 sm:space-y-4">
          {/* PRIMARY BEAUTIFUL UNLOCK BUTTON (Luna Theme) */}
          <button
            type="button"
            onClick={handleUnlockClick}
            disabled={isUnlocking}
            className={`group relative w-full overflow-hidden rounded-xl p-[2px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#54ACBF] focus:ring-offset-2 focus:ring-offset-[#011C40] active:scale-[0.98] ${
              isUnlocking ? 'opacity-80 scale-98' : 'hover:scale-[1.01]'
            }`}
          >
            {/* Animated gradient border in #A7EBF2 -> #54ACBF -> #26658C */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#A7EBF2] via-[#54ACBF] to-[#26658C] rounded-xl animate-gradient-x shadow-lg shadow-[#54ACBF]/20" />
            
            <span className="relative flex items-center justify-center gap-2 sm:gap-3 rounded-[10px] bg-[#011C40] px-4 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base md:text-lg font-bold text-white transition-colors duration-200 group-hover:bg-[#023859]">
              {isUnlocking ? (
                <>
                  <Unlock className="h-5 w-5 sm:h-6 sm:w-6 text-[#A7EBF2] animate-spin" />
                  <span className="truncate">আনলক করা হচ্ছে... (Unlocking)</span>
                </>
              ) : (
                <>
                  <Key className="h-5 w-5 sm:h-6 sm:w-6 text-[#A7EBF2] transition-transform duration-300 group-hover:rotate-45 shrink-0" />
                  <span className="truncate">পেজ আনলক করুন • Click to Unlock</span>
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-[#A7EBF2] transition-transform duration-300 group-hover:scale-125 shrink-0" />
                </>
              )}
            </span>
          </button>

          {/* Secondary Quick Unlock & Passcode Options (Display Only - No Click Action) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1 sm:pt-2">
            <div
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium text-slate-200 bg-[#011C40]/80 rounded-lg border border-[#26658C]/60 cursor-default select-none shadow-xs"
            >
              <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#54ACBF]" />
              <span>এক ক্লিকে দ্রুত প্রবেশ</span>
            </div>

            <div
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium text-slate-300 bg-[#011C40]/50 rounded-lg border border-[#26658C]/40 cursor-default select-none shadow-xs"
            >
              <Key className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#A7EBF2]" />
              <span>পাসকোড দিয়ে আনলক?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
