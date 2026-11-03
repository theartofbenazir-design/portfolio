import React from 'react';
import { PROCESS_STAGES } from '../data/projects';

export default function Process() {
  return (
    <section id="process" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tagline">METHODOLOGY</div>
          <h2 className="section-title">A disciplined approach to creation.</h2>
          <p className="section-description">
            Four sequential stages bridging strategic understanding, visual experimentation, and refined execution.
          </p>
        </div>

        {/* 4-Stage Editorial Process Grid */}
        <div className="process-grid">
          {PROCESS_STAGES.map((stage) => (
            <div key={stage.number} className="process-card">
              <div className="process-stage-num">{stage.number}</div>
              <h3 className="process-stage-title">{stage.title}</h3>
              <p className="process-stage-desc">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
