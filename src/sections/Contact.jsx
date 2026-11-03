import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, ExternalLink, Send, CheckCircle2, ArrowUpRight, Github } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_CONFIG } from '../data/projects';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Packaging Design',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const isValidUrl = (url) => {
    return (
      typeof url === 'string' &&
      url.trim().length > 0 &&
      !url.includes('your-username') &&
      !url.includes('yourprofile')
    );
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please provide your name.';
    if (!form.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 8) {
      errs.message = 'Please share a brief note about your project.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }

    setSubmitted(true);

    // Prepare direct mailto draft so the user's message is never lost
    const subject = encodeURIComponent(`Project Inquiry: ${form.service} — from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nProject Scope:\n${form.message}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Editorial Heading */}
        <div className="line-reveal-wrap">
          <div className="section-tagline">GET IN TOUCH</div>
        </div>

        <h2 className="contact-headline">
          Let's work<br />
          <span className="lime-italic">together.</span>
        </h2>

        <p className="section-description" style={{ marginBottom: '2.5rem' }}>
          Have a design project or an idea in mind? Let's create something meaningful.
        </p>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Direct Communication Channels */}
          <div className="contact-channels">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-channel-card">
              <div>
                <div className="contact-channel-label">Direct Inquiries</div>
                <div className="contact-channel-val">{PERSONAL_INFO.email}</div>
              </div>
              <Mail size={18} color="#C7FF3D" />
            </a>

            {isValidUrl(SOCIAL_CONFIG?.linkedin) ? (
              <a
                href={SOCIAL_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                aria-label="Connect on LinkedIn"
              >
                <div>
                  <div className="contact-channel-label">LinkedIn</div>
                  <div className="contact-channel-val">Connect Professionally</div>
                </div>
                <ArrowUpRight size={18} color="#C7FF3D" />
              </a>
            ) : (
              <div className="contact-channel-card" style={{ opacity: 0.4, cursor: 'default' }}>
                <div>
                  <div className="contact-channel-label">LinkedIn</div>
                  <div className="contact-channel-val">Configure in projects.js</div>
                </div>
                <Linkedin size={18} />
              </div>
            )}

            {isValidUrl(SOCIAL_CONFIG?.behance) ? (
              <a
                href={SOCIAL_CONFIG.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                aria-label="View Behance Portfolio"
              >
                <div>
                  <div className="contact-channel-label">Behance</div>
                  <div className="contact-channel-val">Creative Showcase</div>
                </div>
                <ArrowUpRight size={18} color="#C7FF3D" />
              </a>
            ) : (
              <div className="contact-channel-card" style={{ opacity: 0.4, cursor: 'default' }}>
                <div>
                  <div className="contact-channel-label">Behance</div>
                  <div className="contact-channel-val">Configure in projects.js</div>
                </div>
                <ExternalLink size={18} />
              </div>
            )}

            {isValidUrl(SOCIAL_CONFIG?.instagram) ? (
              <a
                href={SOCIAL_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                aria-label="Follow on Instagram"
              >
                <div>
                  <div className="contact-channel-label">Instagram</div>
                  <div className="contact-channel-val">Design Studies &amp; Process</div>
                </div>
                <ArrowUpRight size={18} color="#C7FF3D" />
              </a>
            ) : (
              <div className="contact-channel-card" style={{ opacity: 0.4, cursor: 'default' }}>
                <div>
                  <div className="contact-channel-label">Instagram</div>
                  <div className="contact-channel-val">Configure in projects.js</div>
                </div>
                <Instagram size={18} />
              </div>
            )}

            {isValidUrl(SOCIAL_CONFIG?.github) && (
              <a
                href={SOCIAL_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                aria-label="Visit GitHub Profile"
              >
                <div>
                  <div className="contact-channel-label">GitHub</div>
                  <div className="contact-channel-val">Code Repositories</div>
                </div>
                <ArrowUpRight size={18} color="#C7FF3D" />
              </a>
            )}
          </div>

          {/* Inquiry Form */}
          <div className="contact-form-box">
            {submitted && (
              <div style={{ padding: '1rem', background: 'rgba(199,255,61,0.08)', border: '1px solid var(--border-lime)', borderRadius: 'var(--radius-xs)', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-lime)', fontWeight: 600, fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} />
                  <span>Message Draft Prepared!</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#A5A5AD', marginTop: '6px' }}>
                  Launching your default email client to send this message to {PERSONAL_INFO.email}.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="form-name" className="form-label">Your Name *</label>
                <input
                  id="form-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Elena Rostova"
                  className="form-input"
                  required
                />
                {errors.name && <span style={{ color: '#FF5F56', fontSize: '0.75rem', marginTop: '4px' }}>{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="form-email" className="form-label">Email Address *</label>
                <input
                  id="form-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@studio.com"
                  className="form-input"
                  required
                />
                {errors.email && <span style={{ color: '#FF5F56', fontSize: '0.75rem', marginTop: '4px' }}>{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="form-service" className="form-label">Project Discipline</label>
                <select
                  id="form-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="form-input"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="Packaging & Structural Design">Packaging &amp; Structural Design</option>
                  <option value="Brand Identity Design">Brand Identity Design</option>
                  <option value="UI/UX & Product Design">UI/UX &amp; Product Design</option>
                  <option value="Graphic & Editorial Design">Graphic &amp; Editorial Design</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Other Collaboration">Other Creative Collaboration</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="form-message" className="form-label">Project Scope &amp; Vision *</label>
                <textarea
                  id="form-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share a brief overview of your brand, timeline, and expectations..."
                  className="form-textarea"
                  required
                />
                {errors.message && <span style={{ color: '#FF5F56', fontSize: '0.75rem', marginTop: '4px' }}>{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <span>Send Inquiry</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
