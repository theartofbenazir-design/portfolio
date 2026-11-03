import React from 'react';
import { SERVICES } from '../data/projects';
import { Check } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tagline">EXPERTISE &amp; OFFERINGS</div>
          <h2 className="section-title">Specialized design services.</h2>
          <p className="section-description">
            Tailored creative engagements for ambitious founders, emerging lifestyle brands, and digital product teams.
          </p>
        </div>

        {/* Editorial Rows */}
        <div className="services-list">
          {SERVICES.map((srv) => (
            <div key={srv.number} className="service-row">
              <div className="service-num">{srv.number}</div>
              <h3 className="service-title">{srv.title}</h3>

              <div className="service-details">
                <p className="service-desc">{srv.description}</p>
                <div className="service-deliverables">
                  {srv.deliverables.map((item) => (
                    <span key={item} className="badge">
                      <Check size={11} color="#C7FF3D" style={{ marginRight: '4px' }} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
