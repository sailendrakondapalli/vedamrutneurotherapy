import { useState } from 'react';
import './Results.css';

/* ── Video proof + result videos ── */
const videos = [
  { src: '/images/vedioproffresult.mp4', title: 'Video Proof – Treatment Outcome',   label: 'Video Proof' },
  { src: '/images/result1.mp4',          title: 'Patient Recovery – Case 1',          label: 'Real Result' },
  { src: '/images/result2.mp4',          title: 'Patient Recovery – Case 2',          label: 'Real Result' },
];

/* ── Photo / medical reports ── */
const images = [
  { src: '/images/result1.png',             alt: 'Patient result photo',        label: 'Result Photo' },
  { src: '/images/medicalreportresult1.png', alt: 'Medical report – Patient 1', label: 'Medical Report' },
  { src: '/images/medicalreportresult2.png', alt: 'Medical report – Patient 2', label: 'Medical Report' },
  { src: '/images/medicalreportresult3.png', alt: 'Medical report – Patient 3', label: 'Medical Report' },
  { src: '/images/medicalreportresult4.png', alt: 'Medical report – Patient 4', label: 'Medical Report' },
];

/* ── Simple lightbox ── */
const Lightbox = ({ src, alt, onClose }) => (
  <div className="results-lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image preview">
    <button className="results-lightbox-close" onClick={onClose} aria-label="Close">✕</button>
    <img src={src} alt={alt} className="results-lightbox-img" onClick={e => e.stopPropagation()} />
  </div>
);

const Results = () => {
  const [lightbox, setLightbox] = useState(null); // { src, alt }

  return (
    <section id="results" className="results-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Real Results</span>
          <h2 className="section-title">
            See the <span className="highlight">Transformation</span>
          </h2>
          <p className="results-section-desc">
            Watch video proof and view medical reports showing how our
            neurotherapy treatments deliver real, lasting recovery.
          </p>
        </div>

        {/* ── Videos ── */}
        <div className="results-block-title" data-aos="fade-up">🎬 Video Evidence</div>
        <div className="results-video-grid">
          {videos.map((v, i) => (
            <div
              className="results-video-card"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <span className="results-media-label">{v.label}</span>
              <video
                src={v.src}
                controls
                preload="metadata"
                playsInline
                className="results-video"
                aria-label={v.title}
              />
              <p className="results-media-caption">{v.title}</p>
            </div>
          ))}
        </div>

        {/* ── Images / Medical Reports ── */}
        <div className="results-block-title" data-aos="fade-up" style={{ marginTop: '64px' }}>
          🩺 Result Photos &amp; Medical Reports
        </div>
        <div className="results-image-grid">
          {images.map((img, i) => (
            <button
              className="results-image-card"
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 80}
              onClick={() => setLightbox({ src: img.src, alt: img.alt })}
              aria-label={`View ${img.alt}`}
            >
              <span className="results-media-label">{img.label}</span>
              <img
                src={img.src}
                alt={img.alt}
                className="results-thumb"
                loading="lazy"
              />
              <p className="results-media-caption">{img.alt}</p>
              <span className="results-zoom-hint">🔍 Click to enlarge</span>
            </button>
          ))}
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
};

export default Results;
