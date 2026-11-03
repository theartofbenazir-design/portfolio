import React from 'react';
import { Palette, LayoutTemplate, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../data/projects';

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">SKILLS &amp; CAPABILITIES</div>
          <h2 className="section-title">Discipline, methodology, and tools.</h2>
          <p className="section-subtitle">
            A comprehensive overview of creative capabilities across visual storytelling and digital interface design.
          </p>
        </div>

        {/* 3 Minimalist Categories */}
        <div className="skills-grid">
          {/* Graphic Design */}
          <div className="skill-category-card">
            <div className="skill-card-header">
              <Palette size={18} color="#A99AE8" />
              <h3 className="skill-category-title">Graphic Design</h3>
            </div>
            <div className="skill-chips">
              {SKILLS_DATA.graphic.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="skill-category-card">
            <div className="skill-card-header">
              <LayoutTemplate size={18} color="#A99AE8" />
              <h3 className="skill-category-title">UI/UX Design</h3>
            </div>
            <div className="skill-chips">
              {SKILLS_DATA.uiux.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Design Tools */}
          <div className="skill-category-card">
            <div className="skill-card-header">
              <Wrench size={18} color="#A99AE8" />
              <h3 className="skill-category-title">Software &amp; Tools</h3>
            </div>
            <div className="skill-chips">
              {SKILLS_DATA.tools.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
