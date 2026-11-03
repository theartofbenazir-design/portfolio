import React from 'react';
import { ArrowDown, FileText, Layers, Compass, Terminal, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/projects';
import AiSkillTools from '../components/AiSkillTools';

export default function About() {
  const scrollToWork = (e) => {
    e.preventDefault();
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual Designer Badge / Profile Card */}
          <div className="about-visual-column">
            <div className="about-portrait-card">
              <div className="about-inner-graphic">
                <div className="about-portrait-wrap">
                  <img
                    src="./images/projects/profile image/WhatsApp Image 2026-01-07 at 22.00.21.jpeg"
                    alt={`${PERSONAL_INFO.name} Profile`}
                    className="about-profile-img"
                    loading="lazy"
                  />
                </div>
                <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#F5F5F5' }}>
                    {PERSONAL_INFO.name.toUpperCase()}
                  </div>
                  <div className="about-coord-tag" style={{ marginTop: '4px' }}>
                    NEW DELHI · 28.6139° N, 77.2090° E
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                <span className="badge badge-lime">AVAILABLE FOR Q1 / Q2</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#888899' }}>FOLIO 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Focus Areas */}
          <div className="about-narrative-column">
            <div className="section-tagline">ABOUT ME</div>
            <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
              Design with discipline and intent.
            </h2>

            {/* Exact Required Paragraph */}
            <p className="about-lead-text">
              {PERSONAL_INFO.aboutParagraph}
            </p>

            {/* Core Disciplines Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.25rem', background: 'var(--bg-surface-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Layers size={18} color="#C7FF3D" />
                  <h4 style={{ fontSize: 'var(--text-base)', color: '#F5F5F5' }}>Graphic &amp; Identity</h4>
                </div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Branding systems, packaging dielines, and typography-driven compositions engineered for timeless distinction.
                </p>
              </div>

              <div style={{ padding: '1.25rem', background: 'var(--bg-surface-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Compass size={18} color="#C7FF3D" />
                  <h4 style={{ fontSize: 'var(--text-base)', color: '#F5F5F5' }}>UI/UX &amp; Product</h4>
                </div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Ergonomic user journeys, wireframes, and design systems turning complex operations into effortless digital clarity.
                </p>
              </div>
            </div>

            {/* Design Tools & Software Chips */}
            <div className="tools-title">TOOLKIT &amp; PRODUCTION ENVIRONMENT</div>
            <div className="tools-grid">
              {(PERSONAL_INFO?.tools || [
                { name: "Figma", category: "UI/UX & Systems" },
                { name: "Adobe Illustrator", category: "Branding & Vectors" },
                { name: "Adobe Photoshop", category: "Visuals & Packaging" },
                { name: "Adobe InDesign", category: "Editorial & Print" },
                { name: "After Effects", category: "Motion & Interaction" },
                { name: "Adobe Animate CC", category: "2D Animation & Interactive Design" }
              ]).map((t) => (
                <span key={t.name} className="tool-chip">
                  {t.name === 'Adobe Animate CC' ? (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '15px',
                        height: '15px',
                        borderRadius: '3px',
                        background: '#ED2224',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: '0.58rem',
                        lineHeight: 1,
                        flexShrink: 0
                      }}
                    >
                      An
                    </span>
                  ) : (
                    <Terminal size={12} color="#C7FF3D" />
                  )}
                  <span>{t.name}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>· {t.category}</span>
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href="#work" onClick={scrollToWork} className="btn btn-secondary">
                <span>View Design Archive</span>
                <ArrowDown size={14} />
              </a>

              <a
                href="#contact"
                className="btn btn-ghost"
                style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)' }}
              >
                <FileText size={14} style={{ marginRight: '6px' }} />
                <span>Resume / CV [Available upon request]</span>
              </a>
            </div>
          </div>
        </div>

        {/* AI Skill Tools Section */}
        <AiSkillTools />
      </div>
    </section>
  );
}
