import React, { useState } from 'react';
import styles from './ContactVisual.module.css';

function ContactVisual({ onOpenSupport }) {
  const [activeHint, setActiveHint] = useState('');

  const handleBubbleClick = (type) => {
    if (onOpenSupport) {
      onOpenSupport(type === 'left' ? 'message' : 'faq');
    }
  };

  return (
    <div className={styles.visualWrapper}>
      <div className={styles.glowBackdrop}></div>

      <div className={styles.visualContent}>
        {activeHint && (
          <div className={styles.interactiveHint}>
            {activeHint}
          </div>
        )}

        <svg
          className={styles.characterSvg}
          viewBox="0 0 340 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bubbleBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="bubbleSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="100%" stopColor="#fbcfe8" />
            </linearGradient>
            <linearGradient id="skinShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fdba74" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="headsetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="laptopLidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="vLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <filter id="shadowBubble" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.35" />
            </filter>
            <filter id="laptopShadow" x="-20%" y="-10%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000000" floodOpacity="0.5" />
            </filter>
          </defs>

          <g
            className={styles.bubbleLeft}
            filter="url(#shadowBubble)"
            onClick={() => handleBubbleClick('message')}
            onMouseEnter={() => setActiveHint('Click to submit a question')}
            onMouseLeave={() => setActiveHint('')}
          >
            <rect x="22" y="70" width="70" height="46" rx="14" fill="url(#bubbleBlueGrad)" />
            <path d="M42 116 L34 126 L52 116 Z" fill="#1d4ed8" />
            <circle cx="44" cy="93" r="4" fill="#ffffff" className={styles.dot1} />
            <circle cx="57" cy="93" r="4" fill="#ffffff" className={styles.dot2} />
            <circle cx="70" cy="93" r="4" fill="#ffffff" className={styles.dot3} />
          </g>

          <g
            className={styles.bubbleRight}
            filter="url(#shadowBubble)"
            onClick={() => handleBubbleClick('faq')}
            onMouseEnter={() => setActiveHint('Click to view Help Center & FAQ')}
            onMouseLeave={() => setActiveHint('')}
          >
            <rect x="250" y="85" width="68" height="44" rx="14" fill="url(#bubbleSilverGrad)" />
            <path d="M268 129 L262 138 L278 129 Z" fill="#cbd5e1" />
            <rect x="264" y="99" width="38" height="4" rx="2" fill="#64748b" />
            <rect x="264" y="108" width="26" height="4" rx="2" fill="#94a3b8" />
          </g>

          <g id="characterGroup">
            <ellipse cx="170" cy="265" rx="72" ry="15" fill="rgba(0,0,0,0.35)" />

            <path
              d="M110 240 C110 195 130 180 170 180 C210 180 230 195 230 240 Z"
              fill="url(#shirtGrad)"
            />

            <path d="M152 180 L170 205 L188 180 Z" fill="#ffffff" />
            <path d="M166 182 L170 202 L174 182 Z" fill="#cbd5e1" />

            <text x="214" y="210" fill="#93c5fd" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              V
            </text>

            <rect x="156" y="162" width="28" height="26" rx="6" fill="#fdba74" />

            <ellipse cx="170" cy="132" rx="36" ry="42" fill="#fed7aa" />

            <path
              d="M136 122 C134 85 155 72 170 72 C192 72 206 88 204 122 C196 102 184 94 170 94 C152 94 142 106 136 122 Z"
              fill="url(#hairGrad)"
            />
            <path d="M136 105 C146 88 168 84 182 86 C172 82 152 82 136 105 Z" fill="#334155" />

            <ellipse cx="157" cy="132" rx="4.5" ry="5.5" fill="#0f172a" />
            <circle cx="158.5" cy="130.5" r="1.5" fill="#ffffff" />
            <ellipse cx="183" cy="132" rx="4.5" ry="5.5" fill="#0f172a" />
            <circle cx="184.5" cy="130.5" r="1.5" fill="#ffffff" />

            <path d="M152 122 Q158 119 164 122" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M176 122 Q182 119 188 122" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />

            <path d="M170 134 Q171 140 167 142" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />

            <path
              d="M161 150 Q170 159 179 150"
              stroke="#b91c1c"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            <ellipse cx="150" cy="142" rx="5" ry="3" fill="rgba(244, 63, 94, 0.25)" />
            <ellipse cx="190" cy="142" rx="5" ry="3" fill="rgba(244, 63, 94, 0.25)" />

            <path
              d="M136 130 C136 88 152 74 170 74 C188 74 204 88 204 130"
              stroke="#38bdf8"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />

            <ellipse cx="134" cy="132" rx="9" ry="14" fill="url(#headsetGrad)" />
            <ellipse cx="134" cy="132" rx="5" ry="9" fill="#0284c7" />

            <ellipse cx="206" cy="132" rx="9" ry="14" fill="url(#headsetGrad)" />
            <ellipse cx="206" cy="132" rx="5" ry="9" fill="#0284c7" />

            <path
              d="M136 138 C136 154 150 158 162 156"
              stroke="#0f172a"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="163" cy="156" r="4" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)" />
          </g>

          <g id="laptopGroup" filter="url(#laptopShadow)">
            <polygon points="108,245 232,245 242,252 98,252" fill="#0f172a" />
            <polygon points="102,248 238,248 240,250 100,250" fill="#38bdf8" opacity="0.4" />

            <path
              d="M124 195 L216 195 L228 246 L112 246 Z"
              fill="url(#laptopLidGrad)"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1.5"
            />

            <path
              d="M165 210 L170 226 L175 210 L180 210 L173 232 L167 232 L160 210 Z"
              fill="url(#vLogoGrad)"
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
            />

            <ellipse cx="170" cy="248" rx="20" ry="2" fill="#38bdf8" opacity="0.6" filter="blur(2px)" />
          </g>
        </svg>

        <div className={styles.onlineStatusBadge}>
          <span className={styles.statusDot}></span>
          <span>Live Support Online</span>
        </div>
      </div>
    </div>
  );
}

export default ContactVisual;
