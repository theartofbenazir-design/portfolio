import React, { useState } from 'react';
import { Maximize2, X, Sparkles, Award, ArrowUpRight } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/projects';

export default function Achievements() {
  const [activeModalImg, setActiveModalImg] = useState(null);

  const {
    heading = "Achievements & Recognition",
    subtitle = "Every milestone represents a step forward in my creative journey.",
    milestones = [],
    certifications = [],
    industryVisits = [],
    instituteActivities = []
  } = ACHIEVEMENTS_DATA || {};

  return (
    <section id="achievements" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tagline">JOURNEY &amp; RECOGNITION</div>
          <h2 className="section-title">{heading}</h2>
          <p className="section-description">{subtitle}</p>
        </div>

        {/* 1. Creative Milestones Gallery (Currently Active Showcase) */}
        <div className="achievements-milestones-block">
          <div className="milestones-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} color="#C7FF3D" />
              <h3 className="milestones-title">Creative Milestones</h3>
            </div>
            <span className="milestones-note">
              [ Click any milestone card for an enlarged preview ]
            </span>
          </div>

          <div className="milestones-grid">
            {milestones.map((item) => (
              <div
                key={item.id}
                className="milestone-card"
                onClick={() => setActiveModalImg(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveModalImg(item);
                  }
                }}
                aria-label={`View milestone: ${item.title}`}
              >
                <div className="milestone-img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="milestone-img"
                    loading="lazy"
                  />
                  <div className="milestone-overlay-btn">
                    <Maximize2 size={16} color="#101014" />
                  </div>
                </div>

                <div className="milestone-info">
                  <div className="milestone-meta">
                    <span className="milestone-category">{item.category}</span>
                    {item.tag && <span className="milestone-tag">{item.tag}</span>}
                  </div>
                  <h4 className="milestone-card-title">{item.title}</h4>
                  <p className="milestone-caption">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Future Upload Containers (Only render when user populates their real files) */}
        {certifications && certifications.length > 0 && (
          <div className="achievements-future-block" style={{ marginTop: '3.5rem' }}>
            <div className="milestones-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={18} color="#C7FF3D" />
                <h3 className="milestones-title">Certifications</h3>
              </div>
            </div>
            <div className="milestones-grid">
              {certifications.map((cert) => (
                <div key={cert.id} className="milestone-card" onClick={() => setActiveModalImg({ image: cert.image, title: cert.title, caption: cert.issuer })}>
                  <div className="milestone-img-wrap">
                    <img src={cert.image} alt={cert.title} className="milestone-img" loading="lazy" />
                  </div>
                  <div className="milestone-info">
                    <span className="milestone-category">{cert.issuer}</span>
                    <h4 className="milestone-card-title">{cert.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {industryVisits && industryVisits.length > 0 && (
          <div className="achievements-future-block" style={{ marginTop: '3.5rem' }}>
            <div className="milestones-header">
              <h3 className="milestones-title">Industry Visits</h3>
            </div>
            <div className="milestones-grid">
              {industryVisits.map((visit) => (
                <div key={visit.id} className="milestone-card">
                  <div className="milestone-info">
                    <h4 className="milestone-card-title">{visit.company}</h4>
                    <span className="milestone-category">{visit.date}</span>
                    <p className="milestone-caption">{visit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {instituteActivities && instituteActivities.length > 0 && (
          <div className="achievements-future-block" style={{ marginTop: '3.5rem' }}>
            <div className="milestones-header">
              <h3 className="milestones-title">Institute Activities</h3>
            </div>
            <div className="milestones-grid">
              {instituteActivities.map((act) => (
                <div key={act.id} className="milestone-card">
                  <div className="milestone-info">
                    <h4 className="milestone-card-title">{act.title}</h4>
                    <p className="milestone-caption">{act.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Lightbox Modal */}
      {activeModalImg && (
        <div
          className="lightbox-backdrop"
          onClick={() => setActiveModalImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setActiveModalImg(null)}
              aria-label="Close preview"
            >
              <X size={24} />
            </button>

            <img
              src={activeModalImg.image}
              alt={activeModalImg.title}
              className="lightbox-img"
            />

            <div className="lightbox-caption" style={{ textAlign: 'center', marginTop: '1rem' }}>
              <div style={{ color: 'var(--accent-lime)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', marginBottom: '4px' }}>
                {activeModalImg.category} {activeModalImg.tag ? `· ${activeModalImg.tag}` : ''}
              </div>
              <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: '#F5F5F5' }}>
                {activeModalImg.title}
              </div>
              {activeModalImg.caption && (
                <p style={{ fontSize: 'var(--text-sm)', color: '#A5A5AD', marginTop: '4px', maxWidth: '60ch' }}>
                  {activeModalImg.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
