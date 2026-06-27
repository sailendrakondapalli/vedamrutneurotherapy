import './Results.css';

const videos = [
  {
    src: '/images/result1.mp4',
    title: 'Patient Recovery – Case 1',
    label: 'Real Result',
  },
  {
    src: '/images/result2.mp4',
    title: 'Patient Recovery – Case 2',
    label: 'Real Result',
  },
];

const Results = () => {
  return (
    <section id="results" className="results-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Real Results</span>
          <h2 className="section-title">
            See the <span className="highlight">Transformation</span>
          </h2>
          <p className="section-desc">
            Watch how our neurotherapy treatments have helped real patients
            recover and reclaim their quality of life.
          </p>
        </div>

        <div className="results-grid">
          {videos.map((video, i) => (
            <div
              className="results-video-card"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="results-video-label">{video.label}</div>
              <video
                src={video.src}
                controls
                preload="metadata"
                playsInline
                className="results-video"
                aria-label={video.title}
              />
              <p className="results-video-title">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
