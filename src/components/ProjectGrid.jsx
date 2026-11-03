import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS, CATEGORIES } from '../data/projects';

export default function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return PROJECTS;
    }
    return PROJECTS.filter((p) => p.filterCategory === selectedCategory);
  }, [selectedCategory]);

  // Determine editorial column width classes based on index and filter
  const getColumnClass = (index, total) => {
    if (selectedCategory !== 'All') {
      return 'project-card-col-6';
    }

    // Editorial alternating layout rhythm for 'All'
    switch (index) {
      case 0: // Factsy (Hero UI/UX)
        return 'project-card-col-7';
      case 1: // Rain & Brew (Artisanal Branding)
        return 'project-card-col-5';
      case 2: // Paudhewale (Hero Plant App)
        return 'project-card-col-7';
      case 3: // Eco Edge (Corporate Identity)
        return 'project-card-col-5';
      case 4: // Gusto Sauce
        return 'project-card-col-6';
      case 5: // Gucci Perfume Banner Redesign
        return 'project-card-col-6';
      case 6: // Beauty Salon App
        return 'project-card-col-6';
      case 7: // Food Packaging Designs
        return 'project-card-col-6';
      default:
        return 'project-card-col-6';
    }
  };

  return (
    <section id="work" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">SELECTED WORK</div>
          <h2 className="section-title">A collection of ideas brought to life.</h2>
          <p className="section-subtitle">
            Exploring visual identities, digital products, and creative solutions through design.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="projects-grid" role="region" aria-live="polite">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              columnClass={getColumnClass(idx, filteredProjects.length)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
