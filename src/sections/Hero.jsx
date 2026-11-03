import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/projects';

export default function Hero() {
  const scrollToWork = (e) => {
    e.preventDefault();
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Typography Column */}
          <div className="hero-typography-column">
            {/* Small Label (Step 1) */}
            <div className="line-reveal-wrap" style={{ marginBottom: '1.25rem' }}>
              <div className="badge badge-lime">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-lime)' }} />
                <span>{PERSONAL_INFO.badge}</span>
              </div>
            </div>

            {/* Oversized Heading with Clipping Mask Lines (Step 2) */}
            <h1 className="hero-main-title">
              <span className="line-reveal-wrap">
                <span style={{ display: 'inline-block' }}>{PERSONAL_INFO.heroHeadline.line1}</span>
              </span>
              <span className="line-reveal-wrap">
                <span className="lime-word">{PERSONAL_INFO.heroHeadline.line2}</span>
              </span>
            </h1>

            {/* Supporting Text (Step 3) */}
            <p className="hero-subtext">
              {PERSONAL_INFO.heroSupporting}
            </p>

            {/* CTA Buttons (Step 4) */}
            <div className="hero-cta-group">
              <a href="#work" onClick={scrollToWork} className="btn btn-primary">
                <span>Explore My Work</span>
                <ArrowDown size={15} />
              </a>

              <a href="#contact" onClick={scrollToContact} className="btn btn-secondary">
                <span>Let's Collaborate</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Floating 3D Geometric Sculpture Column (Step 5 & 6) */}
          <div className="hero-visual-3d">
            <div className="abstract-sculpture">
              <div className="sculpture-glow-orb" />

              <div className="sculpture-card">
                <div className="sculpture-card-inner">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-lime)' }}>
                      01 / CONCEPT
                    </span>
                    <Sparkles size={16} color="var(--accent-lime)" />
                  </div>

                  <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid var(--accent-lime)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Layers size={28} color="#C7FF3D" />
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#F5F5F5' }}>
                      Visual Systems
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#A5A5AD', marginTop: '4px' }}>
                      BRANDING · UI/UX · SPATIAL
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#8E8E99' }}>EST. 2026</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--accent-lime)' }}>ORIGINAL CRAFT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Looping Scroll Indicator (Step 7) */}
        <div className="scroll-indicator-wrap">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll to explore projects</span>
        </div>
      </div>
    </section>
  );
}
