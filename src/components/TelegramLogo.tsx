import React from 'react';

interface TelegramLogoProps {
  className?: string;
  size?: number;
  withXBadge?: boolean;
}

export const TelegramLogo: React.FC<TelegramLogoProps> = ({
  className = '',
  size = 72,
  withXBadge = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px`, minWidth: `${size}px`, minHeight: `${size}px` }}
    >
      <svg
        viewBox="0 0 240 240"
        width={size}
        height={size}
        className="w-full h-full block drop-shadow-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="tg-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2AABEE" />
            <stop offset="100%" stopColor="#229ED9" />
          </linearGradient>
        </defs>

        {/* Telegram Blue Circular Base */}
        <circle cx="120" cy="120" r="120" fill="url(#tg-grad-primary)" />

        {/* Telegram Authentic White Paper Plane Vector */}
        <path
          fill="#FFFFFF"
          d="M54.3 118.8c34.8-15.1 58.1-25.1 69.8-30 33.3-13.9 40.2-16.3 44.7-16.4.9 0 3.2.2 4.7 1.4 1.2 1 1.6 2.4 1.7 3.4.2 1 .4 3.3.2 5.1-2.4 25.1-12.7 86.1-18 114.2-.7 3.9-2.2 5.2-3.6 5.4-3.1.3-5.4-2-8.5-4-4.8-3.1-23.4-15.3-31.9-20.9-2.4-1.6-4.2-2.5-2.4-5.2 2.3-3.6 10.3-9.9 19.3-18.4 20.3-19.1 27.2-25.6 28.1-27.1.6-1.1-.3-1.6-1.5-1.1-1.6.7-27.4 17.7-38.7 25.3-2.5 1.7-4.8 2.5-6.9 2.4-2.4-.1-6.9-1.4-10.3-2.5-4.2-1.4-7.5-2.1-7.2-4.4.2-1.2 1.8-2.4 5.3-3.8z"
        />
        
        {/* Paper Plane Subtle Inner Fold Shadow */}
        <path
          fill="#B5E0F7"
          opacity="0.75"
          d="M104.9 170.3c-1.7 1.7-3.1 3.1-6.3 3.1l2.2-32 58.3-52.7c2.5-2.2-.6-3.5-3.8-1.3L83.3 132.8l21.6 37.5z"
        />
      </svg>

      {/* 'X' emblem badge for Telegram X */}
      {withXBadge && (
        <span
          className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full bg-[#011C40] border-2 border-[#54ACBF] font-black text-[#A7EBF2] shadow-md z-20"
          style={{
            width: `${Math.round(size * 0.3)}px`,
            height: `${Math.round(size * 0.3)}px`,
            fontSize: `${Math.max(10, Math.round(size * 0.16))}px`,
          }}
        >
          X
        </span>
      )}
    </div>
  );
};
