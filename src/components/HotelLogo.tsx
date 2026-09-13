import React from 'react';

interface HotelLogoProps {
  variant?: 'full' | 'mark' | 'signboard';
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  subtitle?: string;
}

export const HotelLogo: React.FC<HotelLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
  subtitle = 'Machhapokhari, Balaju'
}) => {
  // Dimensions based on size
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.35 : 1;

  // 3D Isometric "IN OUT" Box SVG
  const LogoMark = ({ width = 42, height = 42 }: { width?: number; height?: number }) => (
    <svg
      width={width * scale}
      height={height * scale}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-[0_2px_8px_rgba(14,165,233,0.35)]"
      aria-label="In N Out Hotel 3D Emblem"
    >
      <defs>
        {/* Isometric Cube Gradients */}
        <linearGradient id="cube-left-face" x1="15" y1="20" x2="50" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="cube-right-face" x1="50" y1="20" x2="85" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="60%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>
        <linearGradient id="cube-top-face" x1="15" y1="15" x2="85" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="neon-stroke" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Hexagonal Isometric Cube Wireframe */}
      {/* Top Face */}
      <polygon
        points="50,8 88,28 50,48 12,28"
        fill="url(#cube-top-face)"
        stroke="url(#neon-stroke)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Left Face (IN) */}
      <polygon
        points="12,28 50,48 50,92 12,72"
        fill="url(#cube-left-face)"
        stroke="url(#neon-stroke)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Right Face (OUT) */}
      <polygon
        points="50,48 88,28 88,72 50,92"
        fill="url(#cube-right-face)"
        stroke="url(#neon-stroke)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Internal Perspective Bevel Lines */}
      <line x1="50" y1="48" x2="50" y2="92" stroke="#e0f2fe" strokeWidth="2.5" />
      <line x1="12" y1="28" x2="50" y2="48" stroke="#bae6fd" strokeWidth="2" opacity="0.6" />
      <line x1="88" y1="28" x2="50" y2="48" stroke="#bae6fd" strokeWidth="2" opacity="0.6" />

      {/* Inner Cutouts & Letters representing "IN" and "OUT" */}
      {/* "IN" on the left perspective face */}
      <g transform="translate(20, 47) skewY(26) scale(0.9, 0.95)" filter="url(#neon-glow)">
        <text
          x="0"
          y="14"
          fill="#ffffff"
          fontSize="15"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1.5"
        >
          IN
        </text>
      </g>

      {/* "OUT" on the right perspective face */}
      <g transform="translate(54, 61) skewY(-26) scale(0.9, 0.95)" filter="url(#neon-glow)">
        <text
          x="0"
          y="14"
          fill="#ffffff"
          fontSize="14"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1.2"
        >
          OUT
        </text>
      </g>
    </svg>
  );

  // If mark-only variant requested
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <LogoMark />
      </div>
    );
  }

  // Authentic Signboard Variant (as captured directly from the hotel's bar signage wall)
  if (variant === 'signboard') {
    return (
      <div
        className={`inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-stone-950 border border-cyan-500/30 shadow-[0_10px_30px_rgba(2,132,199,0.2)] text-white relative overflow-hidden group ${className}`}
      >
        {/* Subtle Neon Backglow */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

        <LogoMark width={48} height={48} />

        <div className="flex flex-col relative z-10">
          {/* Glowing Cursive Script "In N Out" */}
          <span
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            style={{
              fontFamily: "'Playfair Display', Georgia, cursive, serif",
              fontStyle: 'italic',
            }}
          >
            In N Out
          </span>
          {/* Crisp Centered Sans-Serif "— HOTEL —" */}
          <span className="text-[11px] font-bold tracking-[0.32em] uppercase text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] mt-0.5">
            — HOTEL —
          </span>
        </div>
      </div>
    );
  }

  // Default 'full' variant for Navbar, Header, Footer
  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {/* 3D Box Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <LogoMark width={size === 'sm' ? 34 : size === 'lg' ? 48 : 40} height={size === 'sm' ? 34 : size === 'lg' ? 48 : 40} />
      </div>

      {/* Typography block */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-baseline gap-1.5">
          {/* Cursive / Stylized script wordmark */}
          <span
            className={`font-serif italic font-bold tracking-tight transition-colors ${
              isDark
                ? 'text-white drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]'
                : 'text-stone-900 group-hover:text-cyan-900'
            } ${size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl'}`}
          >
            In N Out
          </span>
          {/* Small Hotel Tag pill or text */}
          <span
            className={`text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase ${
              isDark ? 'text-cyan-300' : 'text-cyan-700'
            }`}
          >
            HOTEL
          </span>
        </div>

        {/* Location subtitle */}
        {subtitle && (
          <span
            className={`text-[10px] tracking-wider uppercase font-medium ${
              isDark ? 'text-stone-400' : 'text-stone-500'
            }`}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};
