import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
  animated?: boolean;
}

/**
 * IconNeuralNetwork
 * Custom SVG: Red neuronal 3 capas con nodos
 * Gradient teal-cyan, animatable (nodos pulse)
 * Size: 32×32px
 * @designer Yuki Tanaka (Motion Designer & Icon Artist)
 */
export const IconNeuralNetwork: React.FC<IconProps> = ({
  size = 32,
  className = '',
  strokeWidth = 2,
  animated = false,
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
      aria-labelledby="icon-neural-network-title"
    >
      <title id="icon-neural-network-title">Neural Network Icon</title>
      <defs>
        <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A9B9B" />
          <stop offset="100%" stopColor="#5BC0BE" />
        </linearGradient>
        {animated && (
          <style>
            {`
              @keyframes pulse-node {
                0%, 100% { opacity: 0.6; r: 1.5; }
                50% { opacity: 1; r: 2; }
              }
              .neural-node {
                animation: pulse-node 2s ease-in-out infinite;
              }
              .neural-node:nth-child(1) { animation-delay: 0s; }
              .neural-node:nth-child(2) { animation-delay: 0.2s; }
              .neural-node:nth-child(3) { animation-delay: 0.4s; }
              .neural-node:nth-child(4) { animation-delay: 0.6s; }
              .neural-node:nth-child(5) { animation-delay: 0.8s; }
            `}
          </style>
        )}
      </defs>
      
      {/* Layer 1 - Input (3 nodes) */}
      <g id="layer-1">
        <circle cx="6" cy="10" r="2" fill="url(#neural-gradient)" className={animated ? 'neural-node' : ''} />
        <circle cx="6" cy="16" r="2" fill="url(#neural-gradient)" className={animated ? 'neural-node' : ''} />
        <circle cx="6" cy="22" r="2" fill="url(#neural-gradient)" className={animated ? 'neural-node' : ''} />
      </g>
      
      {/* Layer 2 - Hidden (4 nodes) */}
      <g id="layer-2">
        <circle cx="16" cy="8" r="2" fill="url(#neural-gradient)" className={animated ? 'neural-node' : ''} />
        <circle cx="16" cy="13" r="2" fill="url(#neural-gradient)" className={animated ? 'neural-node' : ''} />
        <circle cx="16" cy="18" r="2" fill="url(#neural-gradient)" className={animated ? 'neural-node' : ''} />
        <circle cx="16" cy="23" r="2" fill="url(#neural-gradient)" className={animated ? 'neural-node' : ''} />
      </g>
      
      {/* Layer 3 - Output (2 nodes) */}
      <g id="layer-3">
        <circle cx="26" cy="12" r="2" fill="url(#neural-gradient)" className={animated ? 'neural-node' : ''} />
        <circle cx="26" cy="20" r="2" fill="url(#neural-gradient)" className={animated ? 'neural-node' : ''} />
      </g>
      
      {/* Connections Layer 1 → Layer 2 */}
      <g id="connections-1-2" stroke="url(#neural-gradient)" strokeWidth={strokeWidth * 0.4} opacity="0.4">
        <line x1="8" y1="10" x2="14" y2="8" />
        <line x1="8" y1="10" x2="14" y2="13" />
        <line x1="8" y1="16" x2="14" y2="13" />
        <line x1="8" y1="16" x2="14" y2="18" />
        <line x1="8" y1="22" x2="14" y2="18" />
        <line x1="8" y1="22" x2="14" y2="23" />
      </g>
      
      {/* Connections Layer 2 → Layer 3 */}
      <g id="connections-2-3" stroke="url(#neural-gradient)" strokeWidth={strokeWidth * 0.4} opacity="0.4">
        <line x1="18" y1="8" x2="24" y2="12" />
        <line x1="18" y1="13" x2="24" y2="12" />
        <line x1="18" y1="18" x2="24" y2="20" />
        <line x1="18" y1="23" x2="24" y2="20" />
      </g>
    </svg>
  );
};

export default IconNeuralNetwork;
