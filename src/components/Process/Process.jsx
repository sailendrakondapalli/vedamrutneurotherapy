import './Process.css';

const steps = [
  { num: '01', icon: '🩺', title: 'Consultation', desc: 'Detailed discussion about your pain history and current condition.' },
  { num: '02', icon: '🔬', title: 'Diagnosis', desc: 'Thorough assessment to identify root cause of your pain.' },
  { num: '03', icon: '💆', title: 'Therapy Session', desc: 'Personalized neurotherapy sessions using natural techniques.' },
  { num: '04', icon: '📈', title: 'Recovery', desc: 'Monitoring progress and adjusting treatment accordingly.' },
  { num: '05', icon: '🌟', title: 'Healthy Lifestyle', desc: 'Guidance for maintaining a pain-free, healthy life.' },
];

const Process = () => {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">How It Works</span>
          <h2 className="section-title">
            Our <span className="highlight">Treatment Process</span>
          </h2>
          <p className="section-desc" style={{ margin: '16px auto 0', textAlign: 'center' }}>
            A systematic, patient-centered approach from consultation to lasting relief.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, i) => (
            <div
              key={i}
              className="process-step"
              data-aos={i % 2 === 0 ? 'fade-up' : 'fade-down'}
              data-aos-delay={i * 100}
            >
              <div className="step-connector">
                {i < steps.length - 1 && <div className="connector-line"></div>}
              </div>
              <div className="step-card">
                <div className="step-num">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="step-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
