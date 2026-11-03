import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/projects';

export default function Hero() {
  const scrollToWork = (e) => {
    e.preventDefault();
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section-wrapper hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Typography & CTAs */}
          <div className="hero-content">
            {/* Availability Status Pill */}
            <div className="status-pill">
              <span className="status-indicator" />
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Introductory Label */}
            <div className="hero-discipline-tag">
              GRAPHIC DESIGNER &amp; UI/UX DESIGNER
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              Designing visuals and digital experiences with purpose.
            </h1>

            {/* Supporting Paragraph */}
            <p className="hero-description">
              I create thoughtful visual identities, engaging graphic designs, and intuitive digital experiences that connect brands with people.
            </p>

            {/* CTA Group */}
            <div className="hero-cta-group">
              <a href="#work" onClick={scrollToWork} className="btn btn-primary">
                <span>Explore My Work</span>
                <ArrowDown size={15} />
              </a>

              <a href="#contact" onClick={scrollToContact} className="btn btn-secondary">
                <span>Get in Touch</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Visual Collage */}
          <div className="hero-visual-collage">
            <div className="collage-stack">
              {/* Main Feature Preview (Factsy Food Scanner) */}
              <div className="collage-card-main">
                <img
                  src="./images/projects/factsy-cover.png"
                  alt="Factsy UI/UX Mobile Experience Preview"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><rect width='800' height='600' fill='%23F0EEE9'/><text x='50%' y='50%' font-family='sans-serif' font-size='24' fill='%2377736F' text-anchor='middle'>Factsy UI/UX Preview</text></svg>";
                  }}
                />
                <div className="collage-badge-tag">
                  Featured Case Study
                </div>
              </div>

              {/* Overlapping Sub Preview (Paudhewale Botanical App) */}
              <div className="collage-card-sub">
                <img
                  src="./images/projects/paudhewale-cover.png"
                  alt="Paudhewale Botanical Care App Design"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23FAF9F6'/><text x='50%' y='50%' font-family='sans-serif' font-size='20' fill='%2377736F' text-anchor='middle'>Paudhewale Redesign</text></svg>";
                  }}
                />
              </div>

              {/* Floating Discipline Badge */}
              <div className="collage-discipline-pill">
                <Sparkles size={13} color="#A99AE8" />
                <span>Dual Discipline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
