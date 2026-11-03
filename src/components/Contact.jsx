import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/projects';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);

    // Direct fallback: prepare a pre-filled mailto link so the message is actually transmitted
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );

    // Open email client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">GET IN TOUCH</div>
          <h2 className="section-title">Have an idea? Let's create something meaningful.</h2>
          <p className="section-subtitle">
            I'm open to creative collaborations, freelance projects, and opportunities to grow as a designer.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Links & Info */}
          <div className="contact-info-col">
            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.75rem' }}>
              Let's connect and collaborate.
            </h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Whether you have an upcoming branding project, an app redesign in mind, or just want to chat about design craft, my inbox is always open.
            </p>

            <div className="contact-methods">
              {/* Email */}
              <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-method-item">
                <div className="contact-icon-box">
                  <Mail size={18} />
                </div>
                <div className="contact-method-meta">
                  <span className="contact-method-label">Direct Email</span>
                  <span className="contact-method-val">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-item"
              >
                <div className="contact-icon-box">
                  <Linkedin size={18} />
                </div>
                <div className="contact-method-meta">
                  <span className="contact-method-label">Professional Profile</span>
                  <span className="contact-method-val">Connect on LinkedIn</span>
                </div>
                <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
              </a>

              {/* Behance */}
              <a
                href={PERSONAL_INFO.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-item"
              >
                <div className="contact-icon-box">
                  <ExternalLink size={18} />
                </div>
                <div className="contact-method-meta">
                  <span className="contact-method-label">Creative Portfolio</span>
                  <span className="contact-method-val">View on Behance</span>
                </div>
                <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
              </a>

              {/* Instagram */}
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-item"
              >
                <div className="contact-icon-box">
                  <Instagram size={18} />
                </div>
                <div className="contact-method-meta">
                  <span className="contact-method-label">Design Visuals</span>
                  <span className="contact-method-val">Follow on Instagram</span>
                </div>
                <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-status-banner success" role="alert">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <CheckCircle2 size={18} />
                  <strong>Message Prepared!</strong>
                </div>
                <p style={{ fontSize: 'var(--text-xs)', color: '#145A32' }}>
                  Opening your default email client to send this message to {PERSONAL_INFO.email}. If your email app did not launch, please click the direct email link on the left.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '1rem', padding: '0.4rem 0.9rem', fontSize: 'var(--text-xs)' }}
                >
                  Send another message
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  className="form-input"
                  aria-required="true"
                />
                {errors.name && <span className="form-feedback error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="form-input"
                  aria-required="true"
                />
                {errors.email && <span className="form-feedback error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-project" className="form-label">
                  Project Type
                </label>
                <select
                  id="contact-project"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="UI/UX Design">UI/UX Design &amp; Digital Experience</option>
                  <option value="Brand Identity">Brand Identity &amp; Logo Suite</option>
                  <option value="Packaging Design">Packaging &amp; Print Collateral</option>
                  <option value="Graphic Design & Advertising">Graphic Design &amp; Digital Advertising</option>
                  <option value="Freelance Consultation">Freelance Consultation / Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Project Details or Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about your project, timeline, and goals..."
                  className="form-textarea"
                  aria-required="true"
                />
                {errors.message && <span className="form-feedback error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <span>Send Message</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
