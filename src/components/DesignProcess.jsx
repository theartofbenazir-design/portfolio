import React from 'react';
import { PROCESS_STEPS } from '../data/projects';

export default function DesignProcess() {
  return (
    <section id="process" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">METHODOLOGY</div>
          <h2 className="section-title">My approach to design.</h2>
          <p className="section-subtitle">
            A structured yet flexible framework that transforms complex ideas into intentional, high-impact design outcomes.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="process-timeline">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="process-step-card">
              <div className="process-number">{step.number}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
