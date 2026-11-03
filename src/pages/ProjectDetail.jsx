import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import ImageModal from '../components/ImageModal';

function BehanceIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.171 3-3.455 0-5.555-2.285-5.555-5.555 0-3.328 2.274-5.445 5.445-5.445 3.391 0 5.281 2.222 5.281 5.445 0 .391-.047.828-.063 1.016H16.14c.063 1.547 1.156 2.547 2.656 2.547 1.188 0 1.953-.594 2.391-1.453l2.539.445zm-2.844-3.141c-.063-1.281-.984-2.125-2.359-2.125-1.359 0-2.313.828-2.453 2.125h4.812zM0 4h7.531c3.234 0 5.094 1.484 5.094 3.828 0 1.641-.859 2.875-2.344 3.469 1.844.594 2.844 1.969 2.844 3.797 0 2.531-2.078 4.906-5.531 4.906H0V4zm3.031 6.344h3.75c1.438 0 2.453-.688 2.453-1.891 0-1.188-.969-1.875-2.438-1.875H3.031v3.766zm0 7.094h4.141c1.578 0 2.703-.781 2.703-2.156 0-1.391-1.172-2.188-2.75-2.188H3.031v4.344z"/>
    </svg>
  );
}

/**
 * MASTER CASE STUDY TEMPLATE
 * 
 * Reusable dynamic template for all portfolio projects.
 * Supports:
 * 1. Category & Year badge
 * 2. Title & Subtitle
 * 3. Overview & Introduction
 * 4. Project Information (Role, Timeline, Discipline, Tools)
 * 5. The Challenge & Problem
 * 6. Goals & Objectives
 * 7. Research & Strategy (where applicable)
 * 8. Design Direction & Chromatic Palette
 * 9. Typography System
 * 10. Key Design Decisions
 * 11. Design Process
 * 12. Final Design Showcase & Responsive Multi-Image Gallery
 * 13. Project Reflection & Outcome
 * 14. Dynamic Previous & Next Project Navigation
 * 15. Back to Selected Work Link
 */
export default function ProjectDetail() {
  const { slug } = useParams();
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);

  // Scroll to top whenever route slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  if (!project) {
    return (
      <div className="section-wrapper container" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
        <h1 style={{ fontSize: 'var(--text-3xl)', marginBottom: '1rem' }}>Project Not Found</h1>
        <p style={{ marginBottom: '2rem' }}>The requested case study does not exist or has been updated.</p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={16} />
          <span>Return to Work Archive</span>
        </Link>
      </div>
    );
  }

  // Dynamic Previous & Next Project Navigation
  const prev = projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const next = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  return (
    <article className="case-study-hero">
      <div className="container">
        {/* Top: Back to Selected Work Link */}
        <Link to="/" className="case-study-back-link">
          <ArrowLeft size={14} />
          <span>Back to Selected Work</span>
        </Link>

        {/* 1. Header: Category, Year, Title, Subtitle, Overview */}
        <header style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="badge badge-lime">{project.category}</span>
            <span className="badge">{project.year}</span>
            {project.subtitle && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                // {project.subtitle}
              </span>
            )}
          </div>

          <h1 className="case-study-title">{project.title}</h1>
          <p className="case-study-lead">{project.overview}</p>
        </header>

        {/* 2. Project Information Specs Grid */}
        <div className="case-study-specs">
          <div className="case-spec-item">
            <span className="case-spec-label">Role</span>
            <span className="case-spec-val">{project.role}</span>
          </div>
          <div className="case-spec-item">
            <span className="case-spec-label">Timeline</span>
            <span className="case-spec-val">{project.timeline}</span>
          </div>
          <div className="case-spec-item">
            <span className="case-spec-label">Discipline</span>
            <span className="case-spec-val">{project.category}</span>
          </div>
          <div className="case-spec-item">
            <span className="case-spec-label">Tools</span>
            <span className="case-spec-val">
              {Array.isArray(project.tools) ? project.tools.join(', ') : (project.tools || 'Figma, Adobe Creative Suite')}
            </span>
          </div>
        </div>

        {/* Behance Project Link Button */}
        {project.behanceUrl && (
          <div className="case-study-behance-row" style={{ marginTop: '1.75rem', marginBottom: '2.5rem' }}>
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-behance"
              aria-label={`View ${project.title} on Behance`}
            >
              <BehanceIcon size={17} />
              <span>View Project on Behance</span>
              <span className="btn-behance-arrow" style={{ fontSize: '1rem', marginLeft: '2px' }}>↗</span>
            </a>
          </div>
        )}

        {/* 3. The Challenge & Problem */}
        {project.problem && (
          <section className="case-study-section">
            <h2 className="case-section-title">The Challenge &amp; Problem</h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              {project.problem}
            </p>
          </section>
        )}

        {/* 5. Goals & Objectives */}
        {project.goals && project.goals.length > 0 && (
          <section className="case-study-section">
            <h2 className="case-section-title">Goals &amp; Objectives</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1.25rem' }}>
              {project.goals.map((goal, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.25rem',
                    background: 'var(--bg-surface-card)',
                    border: '1px solid var(--border-card)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}
                >
                  <CheckCircle2 size={18} color="#C7FF3D" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: 'var(--text-sm)', color: '#F5F5F5' }}>{goal}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. Research & Strategy / User Personas */}
        {project.research && (
          <section className="case-study-section">
            <h2 className="case-section-title">Research &amp; Strategy</h2>
            {project.targetAudience && (
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                <strong style={{ color: '#F5F5F5' }}>Target Audience: </strong>
                {project.targetAudience}
              </p>
            )}

            {Array.isArray(project.research?.personas) && project.research.personas.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
                {project.research.personas.map((persona, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.5rem',
                      background: 'var(--bg-surface-card)',
                      border: '1px solid var(--border-card)',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    <div style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: '#F5F5F5' }}>
                      {persona.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-lime)', marginBottom: '0.75rem' }}>
                      {persona.role}
                    </div>
                    <blockquote style={{ fontStyle: 'italic', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', borderLeft: '2px solid var(--accent-lime)', paddingLeft: '0.75rem', marginBottom: '0.75rem' }}>
                      "{persona.quote}"
                    </blockquote>
                    <div style={{ fontSize: '0.75rem', color: '#D4D4D8' }}>
                      <strong style={{ color: '#A5A5AD' }}>Key Needs: </strong>
                      {persona.needs}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Design Process */}
        {project.process && project.process.length > 0 && (
          <section className="case-study-section">
            <h2 className="case-section-title">Design Process</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '1.25rem' }}>
              {project.process.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.25rem',
                    background: 'var(--bg-surface-card)',
                    border: '1px solid var(--border-card)',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-lime)', marginBottom: '0.4rem' }}>
                    {step.step}
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: '#F5F5F5', marginBottom: '0.3rem' }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10. Final Design Showcase & Flexible Responsive Image Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="case-study-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
              <h2 className="case-section-title" style={{ border: 'none', margin: 0, padding: 0 }}>
                Final Design Showcase &amp; Mockup Gallery
              </h2>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                [ Click any image to view in high resolution ]
              </span>
            </div>

            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Featured Projects & visual Explorations.
            </p>

            <div className="case-study-gallery-grid">
              {project.gallery.map((item, idx) => (
                <div
                  key={idx}
                  className={`case-gallery-card ${item.span || ''}`}
                  onClick={() => setActiveLightboxImg(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveLightboxImg(item);
                    }
                  }}
                  aria-label={`Enlarge: ${item.caption}`}
                >
                  <div className="case-gallery-image-wrap">
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="case-gallery-img"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='800' height='500' fill='%2315151D'/><text x='50%' y='50%' font-family='sans-serif' font-size='18' fill='%23A5A5AD' text-anchor='middle'>${encodeURIComponent(item.caption)}</text></svg>`;
                      }}
                    />
                  </div>
                  <div className="case-gallery-card-info">
                    <span className="case-gallery-caption">{item.caption}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {item.tag && <span className="case-gallery-tag">{item.tag}</span>}
                      <Maximize2 size={13} color="var(--text-muted)" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 11. Project Reflection & Outcome */}
        {project.outcome && (
          <section className="case-study-section">
            <h2 className="case-section-title">Outcome &amp; Project Reflection</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: '#F5F5F5', lineHeight: 1.7 }}>
              {project.outcome}
            </p>
          </section>
        )}

        {/* 12. Dynamic Previous & Next Project Navigation */}
        <nav className="case-pagination-bar" aria-label="Project Navigation">
          <Link
            to={`/project/${prev.slug}`}
            style={{ display: 'flex', flexDirection: 'column', gap: '4px', textDecoration: 'none' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              &larr; Previous Project
            </span>
            <span style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: '#F5F5F5' }}>
              {prev.title}
            </span>
          </Link>

          {/* All Projects button to return to the portfolio section */}
          <Link
            to="/#work"
            className="btn btn-secondary"
            style={{ alignSelf: 'center', fontSize: 'var(--text-xs)' }}
          >
            <span>All Projects</span>
          </Link>

          <Link
            to={`/project/${next.slug}`}
            style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'right', textDecoration: 'none' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Next Project &rarr;
            </span>
            <span style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: '#F5F5F5' }}>
              {next.title}
            </span>
          </Link>
        </nav>
      </div>

      {/* Lightbox High-Resolution Modal */}
      {activeLightboxImg && (
        <ImageModal
          image={activeLightboxImg}
          onClose={() => setActiveLightboxImg(null)}
        />
      )}
    </article>
  );
}
