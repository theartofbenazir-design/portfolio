import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
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
                <div className="sculpture-card-inner hero-sculpture-photo-inner">
                  <img
                    src="./images/projects/profile image/WhatsApp Image 2026-01-07 at 22.00.21.jpeg"
                    alt={`${PERSONAL_INFO.name} Profile`}
                    className="hero-sculpture-photo-img"
                    loading="eager"
                  />
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
