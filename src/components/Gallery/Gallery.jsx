import { useState } from 'react';
import './Gallery.css';

const images = [
  { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80', alt: 'Clinic Interior', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80', alt: 'Treatment Room' },
  { src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80', alt: 'Patient Consultation' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', alt: 'Therapy Session', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80', alt: 'Wellness Activities' },
  { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80', alt: 'Yoga & Recovery', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&q=80', alt: 'Reception Area' },
  { src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&q=80', alt: 'Medical Equipment' },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Our Gallery</span>
          <h2 className="section-title">
            Inside <span className="highlight">Vedamrut</span>
          </h2>
          <p className="section-desc" style={{ margin: '16px auto 0', textAlign: 'center' }}>
            A glimpse into our world-class treatment centre and healing environment.
          </p>
        </div>

        <div className="gallery-masonry">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-item${img.span ? ` gallery-item--${img.span}` : ''}`}
              data-aos="zoom-in"
              data-aos-delay={i * 60}
              onClick={() => setLightbox(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-zoom">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
                <span className="gallery-label">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox — pure CSS/state, no Framer Motion */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p className="lightbox-caption">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
