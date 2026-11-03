import React from 'react';
import { Linkedin, Instagram, ExternalLink, ArrowUp, Github } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_CONFIG } from '../data/projects';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Helper to check whether a real external social URL has been configured.
   * If not configured or empty, the icon will stay inactive rather than linking to a fake placeholder.
   */
  const isValidUrl = (url) => {
    return (
      typeof url === 'string' &&
      url.trim().length > 0 &&
      !url.includes('your-username') &&
      !url.includes('yourprofile')
    );
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: SOCIAL_CONFIG?.linkedin,
      icon: <Linkedin size={16} />,
      label: 'Visit LinkedIn Profile'
    },
    {
      name: 'Behance',
      url: SOCIAL_CONFIG?.behance,
      icon: <ExternalLink size={16} />,
      label: 'Visit Behance Portfolio'
    },
    {
      name: 'Instagram',
      url: SOCIAL_CONFIG?.instagram,
      icon: <Instagram size={16} />,
      label: 'Visit Instagram Profile'
    },
    {
      name: 'GitHub',
      url: SOCIAL_CONFIG?.github,
      icon: <Github size={16} />,
      label: 'Visit GitHub Profile'
    }
  ];

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#F5F5F5', marginRight: '8px' }}>
            {PERSONAL_INFO.wordmark}
          </span>
          <span>&copy; {new Date().getFullYear()} Benazir. All rights reserved.</span>
        </div>

        <div className="footer-social-links">
          {socialLinks.map((item) => {
            const hasValidLink = isValidUrl(item.url);

            if (hasValidLink) {
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={item.label}
                  title={item.name}
                >
                  {item.icon}
                </a>
              );
            }

            // If profile URL has not been provided, keep that icon inactive without linking to a placeholder
            return (
              <span
                key={item.name}
                className="footer-social-link inactive"
                title={`${item.name} (Add URL in src/data/projects.js)`}
                aria-label={`${item.name} (Not yet configured)`}
                style={{
                  opacity: 0.3,
                  cursor: 'default',
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '4px'
                }}
              >
                {item.icon}
              </span>
            );
          })}

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.7rem', marginLeft: '0.75rem' }}
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={12} color="#C7FF3D" />
          </button>
        </div>
      </div>
    </footer>
  );
}
