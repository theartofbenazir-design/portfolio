import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="High-resolution image viewer"
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close image preview"
        >
          <X size={24} />
        </button>

        <img
          src={image.url}
          alt={image.caption || 'Enlarged project preview'}
          className="lightbox-img"
        />

        {image.caption && (
          <p className="lightbox-caption">{image.caption}</p>
        )}
      </div>
    </div>
  );
}
