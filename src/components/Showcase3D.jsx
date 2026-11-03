import React, { useState, useRef, useEffect } from 'react';
import { Layers, Smartphone, Box, Compass, Sparkles, Monitor } from 'lucide-react';

export default function Showcase3D() {
  const stageRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch-only devices to avoid janky pointer tracking
    const checkTouch = () => {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        setIsTouch(true);
      }
    };
    checkTouch();
  }, []);

  const handlePointerMove = (e) => {
    if (isTouch || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Subtle tilt calculations (clamped within ±10 degrees)
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotX = (-mouseY / (rect.height / 2)) * 8;
    const rotY = (mouseX / (rect.width / 2)) * 10;

    setRotate({ x: rotX, y: rotY });
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    // Smooth reset
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="section-wrapper showcase-3d-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="section-tagline" style={{ justifyContent: 'center' }}>
            SIGNATURE 3D SHOWCASE
          </div>
          <h2 className="section-title">
            Crafted in spatial dimension.
          </h2>
          <p className="section-description" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            A layered multidimensional composition celebrating digital interfaces, tactile packaging, and brand identities in physical perspective.
          </p>
        </div>

        {/* Interactive 3D Perspective Stage */}
        <div
          ref={stageRef}
          className="showcase-stage-3d"
          onPointerMove={handlePointerMove}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={handlePointerLeave}
          aria-label="Interactive 3D design mockups stage"
        >
          <div
            className="showcase-scene"
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Card 2 – UI/UX Design (Foreground Center) */}
            <div className="mockup-3d-item mockup-phone" aria-label="UI/UX Design - Factsy App">
              <div className="mockup-card-content">
                <div className="mockup-card-topbar">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Smartphone size={13} color="#C7FF3D" />
                    <span className="mockup-tag">UI/UX · FACTSY APP</span>
                  </div>
                  <span className="mockup-year">2026</span>
                </div>
                <div className="mockup-img-wrap">
                  <img
                    src="./images/projects/factsy/cover.png"
                    alt="Factsy Mobile Application UI/UX Design"
                    className="mockup-project-img"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Card 4 – Graphic Design (Left Midground) */}
            <div className="mockup-3d-item mockup-poster" aria-label="Graphic Design - Advertising Creative">
              <div className="mockup-card-content">
                <div className="mockup-card-topbar">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Layers size={13} color="#C7FF3D" />
                    <span className="mockup-tag">GRAPHIC · EDITORIAL</span>
                  </div>
                  <span className="mockup-year">2026</span>
                </div>
                <div className="mockup-img-wrap">
                  <img
                    src="./images/projects/advertising-banner/gucci-perfume-cover.jpg"
                    alt="Graphic Design - Advertising Creative Campaign"
                    className="mockup-project-img"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Card 1 – Packaging Design (Right Foreground) */}
            <div className="mockup-3d-item mockup-packaging" aria-label="Packaging Design - Product Packaging">
              <div className="mockup-card-content">
                <div className="mockup-card-topbar">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Box size={13} color="#C7FF3D" />
                    <span className="mockup-tag">PACKAGING DESIGN</span>
                  </div>
                  <span className="mockup-year">2026</span>
                </div>
                <div className="mockup-img-wrap">
                  <img
                    src="./images/projects/product-packaging/mockup-01.jpg"
                    alt="Packaging Design - Structural Box Dieline"
                    className="mockup-project-img"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 – Branding & Identity (Lower Left Elevated) */}
            <div className="mockup-3d-item mockup-branding-board" aria-label="Branding & Identity - Rain & Brew">
              <div className="mockup-card-content">
                <div className="mockup-card-topbar">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Compass size={13} color="#C7FF3D" />
                    <span className="mockup-tag">BRAND IDENTITY</span>
                  </div>
                  <span className="mockup-year">2026</span>
                </div>
                <div className="mockup-img-wrap">
                  <img
                    src="./images/projects/rain-and-brew/cover.png"
                    alt="Branding and Brand Identity - Rain & Brew"
                    className="mockup-project-img"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Card 5 – Additional Project (Lower Right Backplate) */}
            <div className="mockup-3d-item mockup-web-preview" aria-label="UI/UX Design - Paudhewale Platform">
              <div className="mockup-card-content">
                <div className="mockup-card-topbar">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Monitor size={13} color="#C7FF3D" />
                    <span className="mockup-tag">UI/UX · PAUDHEWALE</span>
                  </div>
                  <span className="mockup-year">2026</span>
                </div>
                <div className="mockup-img-wrap">
                  <img
                    src="./images/projects/paudhewale/mockup-triple.png"
                    alt="Additional Project - Paudhewale Botanical Platform"
                    className="mockup-project-img"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tip */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
          [ Move cursor over stage to navigate 3D perspective layers ]
        </div>
      </div>
    </section>
  );
}
