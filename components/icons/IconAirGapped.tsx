import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/**
 * IconAirGapped
 * Custom SVG: Laptop con Wifi desconectado (tachado)
 * Coral color, duotone style (outline laptop, fill X)
 * Size: 32×32px base (más grande, distintivo)
 * @designer Yuki Tanaka (Motion Designer & Icon Artist)
 */
export const IconAirGapped: React.FC<IconProps> = ({
  size = 32,
  className = '',
  strokeWidth = 2,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-labelledby="icon-airgapped-title"
    >
      <title id="icon-airgapped-title">Air-Gapped System Icon</title>
      
      {/* Laptop base */}
      <path
        d="M6 22 L26 22 C27.1 22 28 21.1 28 20 L28 10 C28 8.9 27.1 8 26 8 L6 8 C4.9 8 4 8.9 4 10 L4 20 C4 21.1 4.9 22 6 22 Z"
        stroke="#FF9966"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Screen */}
      <rect
        x="7"
        y="10"
        width="18"
        height="10"
        rx="1"
        stroke="#FF9966"
        strokeWidth={strokeWidth * 0.8}
        fill="rgba(255, 153, 102, 0.05)"
      />
      
      {/* Keyboard base */}
      <path
        d="M2 22 L30 22 L28 24 L4 24 Z"
        stroke="#FF9966"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* WiFi symbol (disconnected) */}
      <g transform="translate(14, 4)">
        {/* WiFi arcs */}
        <path
          d="M-2 2 C-2 1.5 -1.5 1 -1 1 C0 1 1 1 2 2"
          stroke="#FF9966"
          strokeWidth={strokeWidth * 0.7}
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M-3 3 C-3 2 -2 1 0 1 C2 1 3 2 3 3"
          stroke="#FF9966"
          strokeWidth={strokeWidth * 0.7}
          strokeLinecap="round"
          opacity="0.3"
        />
        
        {/* Disconnected X (filled) */}
        <path
          d="M-3 0 L3 6 M3 0 L-3 6"
          stroke="#FF9966"
          strokeWidth={strokeWidth * 1.2}
          strokeLinecap="round"
        />
      </g>
      
      {/* Screen indicator (offline) */}
      <circle cx="16" cy="15" r="1.5" fill="#FF9966" opacity="0.6" />
      <path
        d="M14.5 15 L17.5 15"
        stroke="#0a0a0a"
        strokeWidth={strokeWidth * 0.5}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconAirGapped;
