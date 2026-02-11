import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/**
 * IconEUDI
 * Custom SVG: Shield con estrella EU (12 estrellas)
 * Teal color, outline + fill combinado
 * @designer Yuki Tanaka (Motion Designer & Icon Artist)
 */
export const IconEUDI: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-labelledby="icon-eudi-title"
    >
      <title id="icon-eudi-title">EUDI Wallet Icon</title>
      
      {/* Shield outline */}
      <path
        d="M12 2 L4 6 L4 12 C4 16.5 7.5 20.5 12 22 C16.5 20.5 20 16.5 20 12 L20 6 L12 2 Z"
        stroke="#3A9B9B"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(58, 155, 155, 0.1)"
      />
      
      {/* EU stars circle (12 stars) */}
      <g fill="#3A9B9B">
        {/* Top star */}
        <circle cx="12" cy="7" r="0.6" />
        
        {/* Clock positions */}
        <circle cx="14.5" cy="7.5" r="0.5" />
        <circle cx="15.5" cy="9.5" r="0.5" />
        <circle cx="15.5" cy="12" r="0.5" />
        <circle cx="14.5" cy="14.5" r="0.5" />
        <circle cx="12" cy="15.5" r="0.6" />
        <circle cx="9.5" cy="14.5" r="0.5" />
        <circle cx="8.5" cy="12" r="0.5" />
        <circle cx="8.5" cy="9.5" r="0.5" />
        <circle cx="9.5" cy="7.5" r="0.5" />
        <circle cx="11" cy="10" r="0.4" />
        <circle cx="13" cy="10" r="0.4" />
      </g>
      
      {/* Center lock symbol */}
      <path
        d="M10 11 L10 10 C10 8.9 10.9 8 12 8 C13.1 8 14 8.9 14 10 L14 11"
        stroke="#3A9B9B"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
      />
      <rect
        x="10"
        y="11"
        width="4"
        height="3"
        rx="0.5"
        stroke="#3A9B9B"
        strokeWidth={strokeWidth * 0.8}
        fill="rgba(58, 155, 155, 0.2)"
      />
    </svg>
  );
};

export default IconEUDI;
