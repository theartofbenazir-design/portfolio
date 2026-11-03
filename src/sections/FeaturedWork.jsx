import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, CATEGORIES } from '../data/projects';

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.filterCategory === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tagline">SELECTED WORK</div>
          <h2 className="section-title">Ideas materialized into form.</h2>
          <p className="section-description">
            A curated portfolio spanning visual identities, ergonomic digital applications, and tactile packaging architectures. Click any project to open its dedicated case study.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs" role="tablist" aria-label="Filter projects">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeFilter === cat}
              className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Symmetrical Row-Wise Project Grid */}
        <div className="projects-editorial-grid" role="region" aria-live="polite">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
