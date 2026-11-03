import React from 'react';
import { ArrowDown, Compass, Eye, HeartHandshake, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/projects';

export default function About() {
  const scrollToWork = (e) => {
    e.preventDefault();
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="about-grid">
          {/* Left: Replaceable Profile Image Frame */}
          <div className="about-image-wrapper">
            <div className="about-image-frame">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={`${PERSONAL_INFO.name} — Designer portrait`}
                loading="lazy"
                onError={(e) => {
                  // Fallback avatar if local file cannot be loaded
                  e.currentTarget.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='600' viewBox='0 0 500 600'><rect width='500' height='600' fill='%23F0EEE9'/><circle cx='250' cy='240' r='90' fill='%23D4D0C8'/><path d='M100 520 C100 390 400 390 400 520' fill='%23D4D0C8'/><text x='50%' y='560' font-family='sans-serif' font-size='18' font-weight='600' fill='%2377736F' text-anchor='middle'>Profile Photo Placeholder</text></svg>";
                }}
              />
            </div>
            <div className="about-image-accent">
              <span>Multidisciplinary</span>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="about-content">
            <div className="section-label">ABOUT ME</div>
            <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
              Designing with curiosity and purpose.
            </h2>

            {/* Prompt's exact introductory paragraph */}
            <p className="about-lead-paragraph">
              {PERSONAL_INFO.bio}
            </p>

            {/* Design Interests & Approach Pillars */}
            <div className="about-pillars">
              <div className="pillar-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <Eye size={16} color="#A99AE8" />
                  <h4 className="pillar-title">Visual Storytelling</h4>
                </div>
                <p className="pillar-desc">
                  Crafting brand identities and graphic compositions that spark emotional resonance and stand out in crowded markets.
                </p>
              </div>

              <div className="pillar-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <Compass size={16} color="#A99AE8" />
                  <h4 className="pillar-title">User-Centered Focus</h4>
                </div>
                <p className="pillar-desc">
                  Building intuitive user flows, clear information architecture, and interfaces that simplify complex daily routines.
                </p>
              </div>

              <div className="pillar-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <Layers size={16} color="#A99AE8" />
                  <h4 className="pillar-title">Typography &amp; Space</h4>
                </div>
                <p className="pillar-desc">
                  Respecting hierarchy, generous breathing room, and typographic precision to guide viewer focus naturally.
                </p>
              </div>

              <div className="pillar-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <HeartHandshake size={16} color="#A99AE8" />
                  <h4 className="pillar-title">Curiosity &amp; Craft</h4>
                </div>
                <p className="pillar-desc">
                  Constantly experimenting with new mediums, packaging dielines, and digital interactions to stay inventive.
                </p>
              </div>
            </div>

            {/* Small link to explore work */}
            <div>
              <a
                href="#work"
                onClick={scrollToWork}
                className="btn btn-secondary"
                style={{ fontSize: 'var(--text-xs)' }}
              >
                <span>Explore Selected Projects</span>
                <ArrowDown size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
