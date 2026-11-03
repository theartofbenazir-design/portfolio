import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PlaceholderArtwork from './PlaceholderArtwork';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/project/${project.slug}`}
      className="project-card"
      aria-label={`View ${project.title} - ${project.category}`}
    >
      {/* Media Showcase Container */}
      <div className="project-media-container">
        <PlaceholderArtwork
          visualType={project.visualType}
          title={project.title}
          category={project.category}
          realImage={project.image}
        />
      </div>

      {/* Card Information Body */}
      <div className="project-card-info">
        <div className="project-card-header">
          <div className="project-card-meta">
            <span className="project-card-category">{project.category}</span>
            <span style={{ color: 'var(--border-subtle)' }}>·</span>
            <span className="project-card-year">{project.year}</span>
          </div>
        </div>

        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.shortDescription}</p>

        <div className="project-card-footer">
          <span className="view-case-study-label">Explore Case Study</span>
          <div className="card-arrow-icon">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
