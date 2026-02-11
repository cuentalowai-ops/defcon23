import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/**
 * IconIntelligence
 * Custom SVG: Cerebro estilizado con circuitos
 * Gradient magenta-purple, stroke-based design
 * @designer Yuki Tanaka (Motion Designer & Icon Artist)
 */
export const IconIntelligence: React.FC<IconProps> = ({
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
      aria-labelledby="icon-intelligence-title"
    >
      <title id="icon-intelligence-title">Intelligence Analysis Icon</title>
      <defs>
        <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C06080" />
          <stop offset="100%" stopColor="#6B5B9A" />
        </linearGradient>
      </defs>
      
      {/* Brain outline */}
      <path
        d="M12 3 C8.5 3 6 5.5 6 8.5 C6 9 6.1 9.5 6.2 10 C5.5 10.3 5 11 5 12 C5 13.2 5.8 14.2 7 14.6 C7 15.5 7.3 16.3 7.8 17 C8.5 18 9.5 18.5 10.5 19 C11 19.2 11.5 19.5 12 19.5 C12.5 19.5 13 19.2 13.5 19 C14.5 18.5 15.5 18 16.2 17 C16.7 16.3 17 15.5 17 14.6 C18.2 14.2 19 13.2 19 12 C19 11 18.5 10.3 17.8 10 C17.9 9.5 18 9 18 8.5 C18 5.5 15.5 3 12 3 Z"
        stroke="url(#brain-gradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Neural circuits */}
      <path
        d="M9 8 L10.5 10 M10.5 10 L12 9 M10.5 10 L11 12"
        stroke="url(#brain-gradient)"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
      />
      <path
        d="M15 8 L13.5 10 M13.5 10 L12 9 M13.5 10 L13 12"
        stroke="url(#brain-gradient)"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
      />
      <path
        d="M10 14 L11 15.5 M13 14 L12 15.5"
        stroke="url(#brain-gradient)"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
      />
      
      {/* Neural nodes */}
      <circle cx="9" cy="8" r="1" fill="#C06080" />
      <circle cx="15" cy="8" r="1" fill="#C06080" />
      <circle cx="12" cy="9" r="1" fill="#6B5B9A" />
      <circle cx="11" cy="12" r="1" fill="#C06080" />
      <circle cx="13" cy="12" r="1" fill="#C06080" />
      <circle cx="12" cy="15.5" r="1" fill="#6B5B9A" />
    </svg>
  );
};

export default IconIntelligence;
