import React, { useState } from 'react';
import {
  Scan,
  Sparkles,
  Coffee,
  Sprout,
  Globe2,
  Layers,
  Box,
  CheckCircle2,
  Droplets,
  Sun
} from 'lucide-react';

/**
 * High-End CSS-Generated Temporary Visual Artwork Engine
 * 
 * Renders distinct, beautifully art-directed CSS mockups and compositions
 * for each project when real image assets are not yet supplied.
 */
export default function PlaceholderArtwork({ visualType, title, category, realImage }) {
  const [imageError, setImageError] = useState(false);

  // If real image is provided and hasn't failed to load, display it
  if (realImage && !imageError) {
    return (
      <div className="artwork-wrapper">
        <img
          src={realImage}
          alt={title}
          className="project-real-img"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </div>
    );
  }

  // Otherwise, render custom CSS-generated design artwork based on project type
  switch (visualType) {
    /* -------------------------------------------------------------
       1. Factsy — Food Packaging Scanner App
       ------------------------------------------------------------- */
    case 'factsy-scanner':
      return (
        <div className="art-factsy-scanner" aria-label="Factsy App UI Mockup">
          <div className="factsy-phone-frame">
            {/* Phone Speaker Notch */}
            <div style={{ width: '40px', height: '4px', background: '#30303D', borderRadius: '4px', margin: '0 auto 10px' }} />

            {/* Scanner Viewfinder with Animated Laser */}
            <div className="factsy-viewfinder">
              <div className="factsy-laser" />
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <Scan size={28} color="#C7FF3D" style={{ opacity: 0.85 }} />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#A5A5AD', marginTop: '4px' }}>
                  ALIGN BARCODE
                </div>
              </div>
            </div>

            {/* Nutritional Score Card */}
            <div className="factsy-score-card">
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#8E8E99' }}>
                  HEALTH SCORE
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#F5F5F5' }}>
                  Clean Choice
                </div>
              </div>
              <div className="factsy-dial">94/100</div>
            </div>

            {/* Allergen Tag Peeks */}
            <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
              <span style={{ fontSize: '0.55rem', padding: '2px 6px', background: '#1D2A1C', color: '#C7FF3D', borderRadius: '4px', border: '1px solid #2C4229' }}>
                No Palm Oil
              </span>
              <span style={{ fontSize: '0.55rem', padding: '2px 6px', background: '#252532', color: '#A5A5AD', borderRadius: '4px', border: '1px solid #353545' }}>
                Organic
              </span>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       2. Rain & Brew — Café Brand Identity Board
       ------------------------------------------------------------- */
    case 'rain-brew-board':
      return (
        <div className="art-rain-brew" aria-label="Rain & Brew Identity Board">
          <div className="rain-brew-card-main">
            <div className="rain-brew-emblem">
              <Coffee size={24} color="#C7FF3D" />
            </div>
            <div className="rain-brew-title">RAIN &amp; BREW</div>
            <div className="rain-brew-sub">Specialty Coffee Roasters</div>

            {/* Minimalist Origin & Roast Dials */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid #3A2B23' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#8C786B' }}>
                SINGLE ORIGIN
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#C7FF3D' }}>
                PETRICHOR ROAST
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       3. Paudhewale — Botanical Gardening App UI
       ------------------------------------------------------------- */
    case 'paudhewale-botanical':
      return (
        <div className="art-paudhewale" aria-label="Paudhewale Botanical UI">
          <div className="paudhe-card">
            {/* Foliage Icon Canvas */}
            <div className="paudhe-plant-icon">
              <Sprout size={48} color="#C7FF3D" />
              <div style={{ position: 'absolute', top: '8px', right: '8px', padding: '2px 6px', background: 'rgba(0,0,0,0.4)', borderRadius: '6px', fontSize: '0.6rem', color: '#C7FF3D', fontFamily: 'var(--font-mono)' }}>
                AIR PURIFYING
              </div>
            </div>

            {/* Plant Name & Botanical Info */}
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F5F5F5' }}>
              Monstera Deliciosa
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#7DBA95', marginBottom: '8px' }}>
              Indoor Tropical · Low Maintenance
            </div>

            {/* Care Metric Indicators */}
            <div className="paudhe-metric-row">
              <div className="paudhe-chip">
                <Sun size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                Med Light
              </div>
              <div className="paudhe-chip">
                <Droplets size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                Every 7d
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       4. Eco Edge — Import/Export Brand Identity
       ------------------------------------------------------------- */
    case 'eco-edge-logistics':
      return (
        <div className="art-eco-edge" aria-label="Eco Edge Logistics Identity">
          <div className="eco-edge-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div className="eco-globe-ring" style={{ margin: 0 }}>
                <Globe2 size={30} color="#C7FF3D" />
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#709E83' }}>
                  GLOBAL LOGISTICS
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#C7FF3D' }}>
                  ISO 14001 CERT
                </div>
              </div>
            </div>

            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F5F5F5', letterSpacing: '-0.02em' }}>
              ECO EDGE
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#88B89C', marginTop: '2px' }}>
              Circular Packaging Solutions
            </div>

            <div style={{ marginTop: '1rem', height: '3px', background: 'linear-gradient(90deg, #C7FF3D 0%, #1C3B2B 100%)', borderRadius: '2px' }} />
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       5. Creative Poster Collection — Swiss Style Editorial
       ------------------------------------------------------------- */
    case 'swiss-poster':
      return (
        <div className="art-swiss-poster" aria-label="Swiss Typographic Poster">
          <div className="swiss-poster-sheet">
            <div className="swiss-diagonal-slash" />
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#C7FF3D', letterSpacing: '0.15em' }}>
                SERIES 02 / 2026
              </div>
              <div className="swiss-huge-text">TYPO<br />GRA<br />PHIE</div>
            </div>

            <div style={{ borderTop: '1px solid #30303D', paddingTop: '8px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: '#A5A5AD', lineHeight: 1.4 }}>
                EXHIBITION DESIGN · ZÜRICH &amp; TOKYO<br />
                SCALE · TENSION · CONTRAST
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       6. Product Packaging Collection — Structural Dieline
       ------------------------------------------------------------- */
    case 'packaging-dipline':
      return (
        <div className="art-packaging" aria-label="Structural Packaging Dieline">
          <div className="packaging-3d-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div className="packaging-foil-stamp">
                <Box size={22} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#8E8E99' }}>
                120 × 85 × 40 mm
              </div>
            </div>

            <div style={{ margin: '1rem 0' }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F5F5F5' }}>
                AESTHETE
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#C7FF3D' }}>
                Luxury Gift Box Dieline
              </div>
            </div>

            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ fontSize: '0.55rem', padding: '2px 6px', background: '#252532', color: '#C7FF3D', borderRadius: '4px' }}>
                Hot Foil
              </span>
              <span style={{ fontSize: '0.55rem', padding: '2px 6px', background: '#252532', color: '#A5A5AD', borderRadius: '4px' }}>
                Matte Velvet
              </span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="artwork-wrapper" style={{ background: '#16161E', padding: '2rem' }}>
          <Layers size={36} color="#C7FF3D" style={{ marginBottom: '0.5rem' }} />
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#F5F5F5' }}>{title}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#A5A5AD' }}>{category}</div>
        </div>
      );
  }
}
