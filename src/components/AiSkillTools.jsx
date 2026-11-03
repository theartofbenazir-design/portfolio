import React from 'react';
import { AI_SKILL_TOOLS } from '../data/projects';

/**
 * Authentic SVG Brand Logos for All 9 AI Tools
 */
function AiToolIcon({ id }) {
  switch (id) {
    case 'chatgpt':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="OpenAI ChatGPT Logo">
          <path
            d="M22.28 9.87a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.2a5.98 5.98 0 0 0-3.95 4.19 6.05 6.05 0 0 0 .74 6.78 5.98 5.98 0 0 0 .52 4.92 6.05 6.05 0 0 0 6.51 2.9A6.05 6.05 0 0 0 14.1 24a6.05 6.05 0 0 0 4.92-2.15 5.98 5.98 0 0 0 3.95-4.19 6.05 6.05 0 0 0-.69-7.79zm-7.73 12.38a4.5 4.5 0 0 1-2.8-.97l.14-.08 3.84-2.22a.75.75 0 0 0 .38-.65v-5.42l1.62.94v4.45a4.53 4.53 0 0 1-3.18 3.95zm-8.8-3.79a4.5 4.5 0 0 1-.6-2.91l.14.09 3.84 2.21a.75.75 0 0 0 .75 0l4.69-2.71v1.87l-3.86 2.23a4.53 4.53 0 0 1-4.96-.78zm-1.84-8.8a4.5 4.5 0 0 1 2.2-1.94v4.6a.75.75 0 0 0 .37.65l4.69 2.71-1.62.93-3.85-2.22a4.53 4.53 0 0 1-1.79-4.73zm13.88-2.61l-4.69 2.71-1.62-.94 3.85-2.22a4.53 4.53 0 0 1 5.37.52 4.5 4.5 0 0 1 .6 2.91l-.14-.08-3.37-2.9zm3.04 7.21l-3.84-2.21a.75.75 0 0 0-.75 0l-4.69 2.71v-1.87l3.86-2.23a4.53 4.53 0 0 1 4.96.78 4.5 4.5 0 0 1 .6 2.91l-.14-.09zm-8.83-1.07l-2.07-1.2 2.07-1.19 2.07 1.19-2.07 1.2z"
            fill="#10A37F"
          />
        </svg>
      );

    case 'nano-banana':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Nano Banana Logo">
          <defs>
            <linearGradient id="nbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE033" />
              <stop offset="65%" stopColor="#F5B700" />
              <stop offset="100%" stopColor="#C7FF3D" />
            </linearGradient>
          </defs>
          <path
            d="M5.5 19.5C8 18.5 11 15 13 9.5C14.5 5.5 16 3.5 18 3.5C19 3.5 20 4.5 20 6C20 9.5 17 16 12 19.5C8.5 21.5 5 21 4 19.5C3.7 19 4.5 19 5.5 19.5Z"
            fill="url(#nbGrad)"
          />
          <path d="M7.5 17.5C10 16 12.5 12.5 14 8" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
          <circle cx="18.5" cy="4.5" r="1.5" fill="#C7FF3D" />
          <path d="M19 13l.7 1.3 1.3.7-1.3.7-.7 1.3-.7-1.3-1.3-.7 1.3-.7.7-1.3z" fill="#C7FF3D" />
        </svg>
      );

    case 'google-flow':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Google Flow Logo">
          <defs>
            <linearGradient id="gfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="50%" stopColor="#9B72CB" />
              <stop offset="100%" stopColor="#EA4335" />
            </linearGradient>
          </defs>
          <path d="M2 12C5.5 6 9.5 6 13.5 12C17.5 18 21.5 18 24 12" stroke="url(#gfGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M1 16C4.5 10 8.5 10 12.5 16C16.5 22 20.5 22 23 16" stroke="#4285F4" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
          <circle cx="13.5" cy="12" r="2.2" fill="#C7FF3D" />
          <circle cx="6.5" cy="8" r="1.5" fill="#4285F4" />
        </svg>
      );

    case 'lovable':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Lovable Logo">
          <defs>
            <linearGradient id="lvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4B72" />
              <stop offset="100%" stopColor="#FF1E56" />
            </linearGradient>
          </defs>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#lvGrad)" />
          <path d="M8.5 10L6.5 12L8.5 14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.5 10L17.5 12L15.5 14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'codex':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="OpenAI Codex Logo">
          <rect width="20" height="20" x="2" y="2" rx="5" fill="#0D1117" stroke="#00A67E" strokeWidth="1.5" />
          <path d="M7 9L10 12L7 15" stroke="#00A67E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="15" x2="17" y2="15" stroke="#C7FF3D" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'antigravity':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Google Antigravity Logo">
          <defs>
            <linearGradient id="agGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C7FF3D" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
          <polygon points="12,2 22,19 2,19" stroke="url(#agGrad)" strokeWidth="2" strokeLinejoin="round" fill="rgba(199,255,61,0.08)" />
          <polygon points="12,7 18,17 6,17" fill="url(#agGrad)" opacity="0.35" />
          <circle cx="12" cy="13" r="2.2" fill="#C7FF3D" />
        </svg>
      );

    case 'framer':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Framer Logo">
          <path d="M4 2h16v7h-8l8 7H4v-7h8l-8-7z" fill="#0055FF" />
          <path d="M4 16h8v6l-8-6z" fill="#0055FF" />
        </svg>
      );

    case 'google-stitch':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Google Stitch Logo">
          <defs>
            <linearGradient id="gsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="33%" stopColor="#34A853" />
              <stop offset="66%" stopColor="#FBBC05" />
              <stop offset="100%" stopColor="#EA4335" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="url(#gsGrad)" strokeWidth="1.8" />
          <line x1="3" y1="8" x2="21" y2="8" stroke="#4285F4" strokeWidth="1.4" strokeDasharray="2 2" />
          <line x1="9" y1="8" x2="9" y2="21" stroke="#34A853" strokeWidth="1.4" strokeDasharray="2 2" />
          <circle cx="9" cy="8" r="2" fill="#EA4335" />
          <circle cx="15" cy="14" r="2.5" fill="#FBBC05" />
        </svg>
      );

    case 'gemini':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Google Gemini Logo">
          <defs>
            <linearGradient id="gemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4E82EE" />
              <stop offset="50%" stopColor="#7BA1F7" />
              <stop offset="100%" stopColor="#9B72CB" />
            </linearGradient>
          </defs>
          <path
            d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z"
            fill="url(#gemGrad)"
          />
        </svg>
      );

    default:
      return null;
  }
}

export default function AiSkillTools() {
  return (
    <div className="ai-tools-section-block">
      <div className="milestones-header" style={{ marginBottom: '1.25rem' }}>
        <div>
          <div className="section-tagline" style={{ marginBottom: '0.25rem' }}>
            AI-POWERED CREATIVE WORKFLOWS
          </div>
          <h3 className="milestones-title">AI Skill Tools</h3>
        </div>
        <span className="milestones-note">
          [ 9 Verified AI Systems &amp; Agentic Platforms ]
        </span>
      </div>

      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', maxWidth: '75ch', marginBottom: '1.5rem', lineHeight: 1.65 }}>
        Modern creative production powered by state-of-the-art AI systems for rapid concept iteration, generative visual storytelling, and automated frontend development.
      </p>

      {/* 9 AI Tools Grid (3x3 on Desktop, 2-col on Tablet, 1-col on Mobile) */}
      <div className="ai-tools-grid">
        {AI_SKILL_TOOLS.map((tool) => (
          <div key={tool.id} className="ai-tool-card">
            <div className="ai-tool-header">
              <div className="ai-tool-icon-wrap" aria-hidden="true">
                <AiToolIcon id={tool.id} />
              </div>
              <span className="ai-tool-badge">{tool.badge || tool.category}</span>
            </div>

            <h4 className="ai-tool-name">{tool.name}</h4>
            <p className="ai-tool-desc">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
