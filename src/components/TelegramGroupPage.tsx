import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  Check, 
  Clock, 
  ShieldCheck, 
  ExternalLink, 
  Lock, 
  Sparkles
} from 'lucide-react';
import { TelegramLogo } from './TelegramLogo';

interface TelegramGroupPageProps {
  onBackToLock: () => void;
}

export const TelegramGroupPage: React.FC<TelegramGroupPageProps> = ({
  onBackToLock,
}) => {
  const [copied, setCopied] = useState(false);
  const telegramGroupUrl = 'https://t.me/+3tmRCbwEPWM0OGE9';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(telegramGroupUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen w-full bg-[#011C40] text-slate-100 flex flex-col font-sans selection:bg-[#54ACBF] selection:text-[#011C40] overflow-x-hidden">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-[#26658C]/50 bg-[#011C40]/95 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3.5">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <TelegramLogo size={26} withXBadge={true} />
            <span className="font-bold text-base sm:text-lg text-white tracking-tight flex items-center gap-1.5">
              <span>Telegram X</span>
              <span className="text-[#A7EBF2] font-semibold text-xs sm:text-sm">VIP Access</span>
            </span>
          </div>

          <button
            type="button"
            onClick={onBackToLock}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#A7EBF2] hover:text-white bg-[#023859] hover:bg-[#26658C]/60 border border-[#26658C] rounded-lg transition-colors active:scale-95"
            title="লক স্ক্রিনে ফিরে যান"
          >
            <Lock className="h-3.5 w-3.5 text-[#54ACBF]" />
            <span>লক স্ক্রিন</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full flex items-center justify-center p-3 sm:p-6 lg:p-8">
        <div className="w-full max-w-xl mx-auto my-auto">
          {/* Card Container */}
          <div className="relative rounded-2xl sm:rounded-3xl border border-[#26658C]/70 bg-[#023859]/95 p-4 sm:p-7 md:p-9 shadow-2xl shadow-[#011C40] text-center backdrop-blur-xl overflow-hidden transition-all">
            
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -left-24 w-60 sm:w-72 h-60 sm:h-72 bg-[#54ACBF]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-60 sm:w-72 h-60 sm:h-72 bg-[#24A1DE]/25 rounded-full blur-3xl pointer-events-none" />

            {/* Telegram Logo with Aura */}
            <div className="mx-auto mb-4 sm:mb-6 flex flex-col items-center justify-center">
              <div className="relative group transition-transform duration-300 hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-[#24A1DE]/35 blur-xl scale-125 pointer-events-none animate-pulse" />
                
                {/* Original Telegram Paper Plane Logo with 'X' badge - 100% visible on all mobile screens */}
                <TelegramLogo size={78} withXBadge={true} className="relative z-10 sm:scale-110" />
                
                {/* Verified Shield Badge */}
                <div className="absolute -bottom-1 -right-1 z-20 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#023859] border-2 border-[#54ACBF] text-[#A7EBF2] shadow-md">
                  <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#A7EBF2]" />
                </div>
              </div>
            </div>

            {/* Header Titles */}
            <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wider text-[#A7EBF2] bg-[#011C40]/90 border border-[#26658C] px-3 py-1 rounded-full uppercase shadow-xs">
                  <Sparkles className="h-3.5 w-3.5 text-[#54ACBF]" />
                  Telegram VIP Video Group
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-snug sm:leading-tight">
                টেলিগ্রাম ভিডিও গ্রুপ লিঙ্ক
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                নিচের বাটনে ক্লিক করে সরাসরি আমাদের অফিশিয়াল টেলিগ্রাম গ্রুপে যুক্ত হওয়ার রিকোয়েস্ট পাঠান।
              </p>
            </div>

            {/* Primary Telegram Link Box */}
            <div className="mb-5 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#011C40]/90 border border-[#26658C] text-left space-y-2 sm:space-y-3 shadow-inner">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-medium text-[#A7EBF2] text-[11px] sm:text-xs">
                  <Send className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#54ACBF]" />
                  গ্রুপ জয়েন লিংক (Invite Link):
                </span>
                <span className="text-[10px] sm:text-[11px] text-emerald-400 font-semibold bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                  সক্রিয় লিংক
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#023859] border border-[#26658C]/70 font-mono text-xs sm:text-sm text-white break-all">
                <span className="text-[#A7EBF2] selection:bg-[#54ACBF] truncate max-w-full font-medium">
                  {telegramGroupUrl}
                </span>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:py-1.5 rounded-lg bg-[#011C40] hover:bg-[#26658C]/60 text-xs font-semibold text-slate-200 hover:text-white border border-[#26658C] transition-colors shrink-0 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">কপি হয়েছে!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#54ACBF]" />
                      <span>লিংক কপি করুন</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* MAIN CALL TO ACTION BUTTON */}
            <div className="mb-5 sm:mb-6">
              <a
                href={telegramGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full inline-flex items-center justify-center gap-3 rounded-xl p-[2px] transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#A7EBF2] via-[#54ACBF] to-[#24A1DE] rounded-xl animate-gradient-x shadow-lg shadow-[#54ACBF]/20" />
                
                <span className="relative w-full flex items-center justify-center gap-2 sm:gap-3 rounded-[10px] bg-[#023859] hover:bg-[#011C40] px-4 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base md:text-lg font-bold text-white transition-colors duration-200">
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 text-[#A7EBF2] transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                  <span className="truncate">টেলিগ্রাম গ্রুপে জয়েন করুন • Join Telegram</span>
                  <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#A7EBF2]/80 shrink-0" />
                </span>
              </a>
            </div>

            {/* IMPORTANT 12-24 HOURS ADMIN NOTICE BANNER */}
            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left space-y-1.5 sm:space-y-2 mb-5 sm:mb-6 shadow-xs">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm">
                <Clock className="h-4 w-4 shrink-0 text-amber-400 animate-pulse" />
                <span>অ্যাডমিন অনুমোদন সংক্রান্ত গুরুত্বপূর্ণ তথ্য:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-6">
                <strong className="text-[#A7EBF2]">আপনি এই লিংকে ক্লিক করলে ভিডিও গ্রুপে অ্যাডমিন আপনাকে ১২-২৪ ঘণ্টার (12-24 hours) মধ্যে অ্যাড করে নিবেন।</strong>
              </p>
              <p className="text-[11px] sm:text-xs text-amber-200/70 pl-6 leading-normal">
                Once you click the link and request to join, our group admin will verify and accept your request within 12-24 hours.
              </p>
            </div>

            {/* 3 Step Process Guide */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-left pt-2 border-t border-[#26658C]/50">
              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#011C40]/70 border border-[#26658C]/50 space-y-1">
                <span className="text-[10px] font-bold text-[#A7EBF2] uppercase tracking-wider">ধাপ ১</span>
                <p className="text-xs font-semibold text-white">লিংকে ক্লিক করুন</p>
                <p className="text-[11px] text-slate-300 leading-tight">উপরের বাটনে চেপে টেলিগ্রাম অ্যাপে লিংকটি খুলুন।</p>
              </div>

              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#011C40]/70 border border-[#26658C]/50 space-y-1">
                <span className="text-[10px] font-bold text-[#A7EBF2] uppercase tracking-wider">ধাপ ২</span>
                <p className="text-xs font-semibold text-white">রিকোয়েস্ট পাঠান</p>
                <p className="text-[11px] text-slate-300 leading-tight">"Request to Join" বাটনটিতে ট্যাপ করে রিকোয়েস্ট দিন।</p>
              </div>

              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#011C40]/70 border border-[#26658C]/50 space-y-1">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">ধাপ ৩</span>
                <p className="text-xs font-semibold text-white">১২-২৪ ঘণ্টার মধ্যে যুক্ত</p>
                <p className="text-[11px] text-slate-300 leading-tight">অ্যাডমিন আপনার রিকোয়েস্ট এপ্রুভ করে ভিডিও গ্রুপে নিবেন।</p>
              </div>
            </div>

            {/* Back to Lock Screen Action */}
            <div className="mt-5 sm:mt-7 flex items-center justify-center">
              <button
                type="button"
                onClick={onBackToLock}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white transition-colors active:scale-95"
              >
                <Lock className="h-3.5 w-3.5 text-slate-400" />
                <span>লক স্ক্রিনে ফিরে যান</span>
              </button>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#26658C]/40 bg-[#011C40] py-3 text-center text-[11px] sm:text-xs text-slate-400">
        Telegram X • Secure Video Group Verification System
      </footer>
    </div>
  );
};
