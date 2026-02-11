import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/**
 * IconScaling
 * Custom SVG: Gráfico exponencial arrow up
 * Gradient coral-amber, línea stroke 2px con arrowhead
 * @designer Yuki Tanaka (Motion Designer & Icon Artist)
 */
export const IconScaling: React.FC<IconProps> = ({
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
      aria-labelledby="icon-scaling-title"
    >
      <title id="icon-scaling-title">Scaling Growth Icon</title>
      <defs>
        <linearGradient id="scaling-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF9966" />
          <stop offset="100%" stopColor="#FFCC66" />
        </linearGradient>
      </defs>
      
      {/* Axes */}
      <path
        d="M4 20 L4 4 M4 20 L20 20"
        stroke="url(#scaling-gradient)"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />
      
      {/* Exponential curve */}
      <path
        d="M4 19 Q6 18 8 16 T12 10 T16 5 L18 3"
        stroke="url(#scaling-gradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Arrow head */}
      <path
        d="M18 3 L16 5 M18 3 L20 5"
        stroke="url(#scaling-gradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Data points */}
      <circle cx="6" cy="18" r="1.5" fill="#FF9966" />
      <circle cx="10" cy="14" r="1.5" fill="#FFB088" />
      <circle cx="14" cy="8" r="1.5" fill="#FFCC66" />
      <circle cx="18" cy="3" r="1.5" fill="#F5B041" />
      
      {/* Shaded area under curve */}
      <path
        d="M4 19 Q6 18 8 16 T12 10 T16 5 L18 3 L18 20 L4 20 Z"
        fill="url(#scaling-gradient)"
        opacity="0.1"
      />
    </svg>
  );
};

export default IconScaling;
